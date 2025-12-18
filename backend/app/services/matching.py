from typing import List, Tuple
from sqlmodel import select
from app.core.db import get_session
from app.models.user import User
import numpy as np

# Simple similarity score: overlap of courses, availability, and styles
def jaccard(a: List[str], b: List[str]) -> float:
    sa, sb = set(a), set(b)
    if not sa and not sb:
        return 0.0
    return len(sa & sb) / len(sa | sb) if sa | sb else 0.0

def mode_score(a: str, b: str) -> float:
    return 1.0 if a == b else 0.5 if ("hybrid" in (a,b)) else 0.0

def rank_matches(user_id: int, top_k: int = 10) -> List[Tuple[User, float]]:
    with get_session() as session:
        me = session.get(User, user_id)
        if not me:
            return []
        candidates = session.exec(select(User).where(User.id != user_id)).all()
        scored = []
        for u in candidates:
            c = jaccard(me.courses, u.courses)
            a = jaccard(me.availability, u.availability)
            s = jaccard(me.study_styles, u.study_styles)
            m = mode_score(me.mode or "hybrid", u.mode or "hybrid")
            score = 0.5*c + 0.25*a + 0.2*s + 0.05*m
            scored.append((u, round(score, 4)))
        scored.sort(key=lambda x: x[1], reverse=True)
        return scored[:top_k]
