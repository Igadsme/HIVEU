from typing import List, Optional
from sqlmodel import SQLModel, Field, Column, JSON
from datetime import datetime

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    email: str = Field(index=True, unique=True)
    name: str
    major: Optional[str] = None
    courses: list = Field(sa_column=Column(JSON), default=[])
    availability: list = Field(sa_column=Column(JSON), default=[])
    study_styles: list = Field(sa_column=Column(JSON), default=[])
    mode: Optional[str] = Field(default="hybrid")  # in_person / online / hybrid
    created_at: datetime = Field(default_factory=datetime.utcnow)
