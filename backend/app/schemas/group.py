from typing import List, Optional
from pydantic import BaseModel

class GroupCreate(BaseModel):
    name: str
    course: str
    owner_id: int
    meeting_mode: str = "hybrid"
    meeting_times: List[str] = []

class GroupRead(BaseModel):
    id: int
    name: str
    course: str
    owner_id: int
    meeting_mode: str
    meeting_times: List[str]

    class Config:
        from_attributes = True

class AddMember(BaseModel):
    user_id: int
