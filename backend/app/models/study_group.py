from typing import Optional
from sqlmodel import SQLModel, Field, Column, JSON, Relationship
from datetime import datetime

class StudyGroup(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    course: str
    owner_id: int = Field(foreign_key="user.id")
    meeting_mode: str = "hybrid"
    meeting_times: list = Field(sa_column=Column(JSON), default=[])
    created_at: datetime = Field(default_factory=datetime.utcnow)

class GroupMembership(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    group_id: int = Field(foreign_key="studygroup.id")
    user_id: int = Field(foreign_key="user.id")
    role: str = "member"
    joined_at: datetime = Field(default_factory=datetime.utcnow)

class GroupMessage(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    group_id: int = Field(foreign_key="studygroup.id")
    user_id: int = Field(foreign_key="user.id")
    content: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
