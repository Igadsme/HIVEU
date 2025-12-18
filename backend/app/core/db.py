from sqlmodel import SQLModel, create_engine, Session
import os

DB_URL = os.getenv("DATABASE_URL", "sqlite:///./app/data/studymatch.db")
os.makedirs("app/data", exist_ok=True)
engine = create_engine(DB_URL, connect_args={"check_same_thread": False})

def init_db():
    from app.models.user import User
    from app.models.study_group import StudyGroup, GroupMembership, GroupMessage
    SQLModel.metadata.create_all(engine)

def get_session():
    return Session(engine)
