from datetime import datetime, timedelta
from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from jose import jwt
from passlib.context import CryptContext
from pydantic import BaseModel, Field, validator
from starlette import status

from models import Users

from .constants import ALGORITHM, SECRET_KEY
from .dependencies import db_dependency
from .utils import validate_password

router = APIRouter(prefix="/auth", tags=["auth"])

bcrypt_context = CryptContext(schemes=["bcrypt"], deprecated="auto")


class CreateUserRequest(BaseModel):
    username: str = Field(min_length=3)
    password: str

    @validator("password")
    def password_validation(cls, value):
        return validate_password(value)


class Token(BaseModel):
    access_token: str
    token_type: str
    email: str


def authenticate_user(username: str, password: str, db):
    user = db.query(Users).filter(Users.username == username).first()
    if not user:
        return False
    if not bcrypt_context.verify(password, user.hashed_password):
        return False
    return user


@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user(db: db_dependency, create_user_request: CreateUserRequest):
    if db.query(Users).filter(Users.username == create_user_request.username).first():
        raise HTTPException(status_code=400, detail="Username already taken")

    create_user_model = Users(
        username=create_user_request.username,
        hashed_password=bcrypt_context.hash(create_user_request.password),
    )
    db.add(create_user_model)
    db.commit()

    user = authenticate_user(
        create_user_request.username, create_user_request.password, db
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate user."
        )

    token = create_access_token(user.id, user.username, timedelta(minutes=60))

    return {
        "email": create_user_model.username,
        "access_token": token,
        "token_type": "bearer",
    }


def create_access_token(id: int, username: str, expires_delta: timedelta):
    encode = {"id": id, "username": username}
    expires = datetime.utcnow() + expires_delta
    encode.update({"exp": expires})

    return jwt.encode(encode, SECRET_KEY, algorithm=ALGORITHM)


@router.post("/token", response_model=Token)
async def login_for_access_token(
    form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: db_dependency
):
    user = authenticate_user(form_data.username, form_data.password, db)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate user."
        )

    token = create_access_token(user.id, user.username, timedelta(minutes=60))

    return {"email": user.username, "access_token": token, "token_type": "bearer"}
