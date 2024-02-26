from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from models import Base
from routers import auth, todos, users

app = FastAPI()  # purpose: to create a FastAPI instance

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)  # purpose: to enable CORS for the frontend

Base.metadata.create_all(bind=engine)  # purpose: to create the database tables

# purpose: to include the routers
app.include_router(auth.router)
app.include_router(todos.router)
app.include_router(users.router)
