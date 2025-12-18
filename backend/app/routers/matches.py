from fastapi import APIRouter, HTTPException
from app.services.matching import rank_matches
from app.schemas.user import UserRead

router = APIRouter()

@router.get("/{user_id}")
def get_matches(user_id: int, top_k: int = 5):
    results = rank_matches(user_id, top_k=top_k)
    # Return compact structure
    return [{"user": {
                "id": u.id, "name": u.name, "email": u.email,
                "courses": u.courses, "availability": u.availability,
                "study_styles": u.study_styles, "mode": u.mode
            }, "score": score} for (u, score) in results]
