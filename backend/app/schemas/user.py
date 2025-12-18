from typing import List, Optional
from pydantic import BaseModel, EmailStr

class UserCreate(BaseModel):
    email: EmailStr
    name: str
    major: Optional[str] = None
    courses: List[str] = []
    availability: List[str] = []
    study_styles: List[str] = []
    mode: Optional[str] = "hybrid"

class UserRead(BaseModel):
    id: int
    email: EmailStr
    name: str
    major: Optional[str] = None
    courses: List[str]
    availability: List[str]
    study_styles: List[str]
    mode: Optional[str]

    class Config:
        from_attributes = True

class UserUpdate(BaseModel):
    name: Optional[str] = None
    major: Optional[str] = None
    courses: Optional[List[str]] = None
    availability: Optional[List[str]] = None
    study_styles: Optional[List[str]] = None
    mode: Optional[str] = None
