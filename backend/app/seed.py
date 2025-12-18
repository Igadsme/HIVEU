from app.core.db import get_session, init_db
from app.models.user import User

def run():
    init_db()
    data = [
        User(email="alice@students.kennesaw.edu", name="Alice", major="CS",
             courses=["CS 3410", "POLS 1101"], availability=["Mon 15-17","Wed 15-17","Fri 10-12"],
             study_styles=["discussion","flashcards"], mode="in_person"),
        User(email="bob@students.kennesaw.edu", name="Bob", major="IT",
             courses=["CS 3410", "MATH 2260"], availability=["Tue 12-16","Thu 12-16"],
             study_styles=["quiet","discussion"], mode="hybrid"),
        User(email="cara@students.kennesaw.edu", name="Cara", major="CS",
             courses=["CS 3410","CS 3502"], availability=["Mon 15-17","Wed 15-17","Thu 10-12"],
             study_styles=["flashcards"], mode="online"),
        User(email="dan@students.kennesaw.edu", name="Dan", major="IS",
             courses=["MATH 2260","POLS 1101"], availability=["Tue 12-16","Thu 10-12"],
             study_styles=["discussion"], mode="in_person"),
    ]
    with get_session() as s:
        for u in data:
            # avoid duplicates
            exists = s.exec(__import__("sqlmodel").select(User).where(User.email==u.email)).first()
            if not exists:
                s.add(u)
        s.commit()
    print("Seed complete.")

if __name__ == "__main__":
    run()
