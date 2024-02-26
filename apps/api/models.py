from sqlalchemy import Boolean, Column, ForeignKey, Integer, String

from database import Base


class Users(Base):
    __tablename__ = "users"

    id = Column(
        Integer, primary_key=True, index=True
    )  # purpose: to create a primary key column
    username = Column(String, unique=True)
    hashed_password = Column(String)
    admin = Column(Boolean, default=False)


class Todos(Base):
    __tablename__ = "todos"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    description = Column(String)
    complete = Column(Boolean, default=False)
    owner_id = Column(
        Integer, ForeignKey("users.id")
    )  # purpose: to create a foreign key column
