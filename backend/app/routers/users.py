from fastapi import APIRouter, HTTPException
from sqlmodel import select
from app.core.db import get_session
from app.models.user import User
from app.schemas.user import UserCreate, UserRead, UserUpdate

router = APIRouter()

@router.post("/", response_model=UserRead)
def create_user(payload: UserCreate):
    with get_session() as session:
        exists = session.exec(select(User).where(User.email == payload.email)).first()
        if exists:
            raise HTTPException(status_code=400, detail="Email already registered")
        user = User(**payload.model_dump())
        session.add(user)
        session.commit()
        session.refresh(user)
        return user

@router.get("/{user_id}", response_model=UserRead)
def get_user(user_id: int):
    with get_session() as session:
        user = session.get(User, user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        return user

@router.patch("/{user_id}", response_model=UserRead)
def update_user(user_id: int, payload: UserUpdate):
    with get_session() as session:
        user = session.get(User, user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        data = payload.model_dump(exclude_unset=True)
        for k, v in data.items():
            setattr(user, k, v)
        session.add(user)
        session.commit()
        session.refresh(user)
        return user
