from fastapi import APIRouter, HTTPException
from sqlmodel import select
from app.core.db import get_session
from app.models.study_group import StudyGroup, GroupMembership, GroupMessage
from app.models.user import User
from app.schemas.group import GroupCreate, GroupRead, AddMember

router = APIRouter()

@router.post("/", response_model=GroupRead)
def create_group(payload: GroupCreate):
    with get_session() as session:
        owner = session.get(User, payload.owner_id)
        if not owner:
            raise HTTPException(status_code=404, detail="Owner not found")
        group = StudyGroup(**payload.model_dump())
        session.add(group)
        session.commit()
        session.refresh(group)
        # add owner as member
        gm = GroupMembership(group_id=group.id, user_id=payload.owner_id, role="owner")
        session.add(gm)
        session.commit()
        return group

@router.get("/{group_id}", response_model=GroupRead)
def read_group(group_id: int):
    with get_session() as session:
        group = session.get(StudyGroup, group_id)
        if not group:
            raise HTTPException(status_code=404, detail="Group not found")
        return group

@router.post("/{group_id}/members")
def add_member(group_id: int, payload: AddMember):
    with get_session() as session:
        group = session.get(StudyGroup, group_id)
        if not group:
            raise HTTPException(status_code=404, detail="Group not found")
        user = session.get(User, payload.user_id)
        if not user:
            raise HTTPException(status_code=404, detail="User not found")
        # check existing
        exists = session.exec(select(GroupMembership).where(
            GroupMembership.group_id == group_id, GroupMembership.user_id == payload.user_id
        )).first()
        if exists:
            return {"status": "ok", "detail": "User already in group"}
        gm = GroupMembership(group_id=group_id, user_id=payload.user_id, role="member")
        session.add(gm)
        session.commit()
        return {"status": "ok"}

@router.get("/{group_id}/members")
def list_members(group_id: int):
    with get_session() as session:
        rows = session.exec(select(GroupMembership).where(GroupMembership.group_id == group_id)).all()
        return [{"user_id": r.user_id, "role": r.role, "joined_at": r.joined_at.isoformat()} for r in rows]

@router.post("/{group_id}/messages")
def post_message(group_id: int, user_id: int, content: str):
    with get_session() as session:
        group = session.get(StudyGroup, group_id)
        if not group:
            raise HTTPException(status_code=404, detail="Group not found")
        msg = GroupMessage(group_id=group_id, user_id=user_id, content=content)
        session.add(msg)
        session.commit()
        session.refresh(msg)
        return {"id": msg.id, "content": msg.content, "created_at": msg.created_at.isoformat()}

@router.get("/{group_id}/messages")
def get_messages(group_id: int, limit: int = 50):
    from sqlmodel import select, desc
    with get_session() as session:
        rows = session.exec(select(GroupMessage).where(GroupMessage.group_id==group_id).order_by(GroupMessage.created_at.desc()).limit(limit)).all()
        return [{"id": r.id, "user_id": r.user_id, "content": r.content, "created_at": r.created_at.isoformat()} for r in rows][::-1]
