from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./todosapp.db"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)  # purpose: to connect to the database

SessionLocal = sessionmaker(
    autocommit=False, autoflush=False, bind=engine
)  # purpose: to create a database session

Base = declarative_base()  # purpose: to create a base class for the database
