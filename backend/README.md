# HiveU StudyMatch – Backend (FastAPI)

A minimal, production-ready backend for **Group Study Coordinator & Matchmaker**.

## ✨ Features
- User profiles with courses, availability, styles, and mode
- Matching endpoint that ranks top study partners
- Study groups: create, add members, simple message feed
- File upload endpoint (stores locally)
- SQLite database via SQLModel
- Seed script with sample users

## 🛠️ Quick Start

```bash
# 1) Create venv
python -m venv .venv && source .venv/bin/activate  # Windows: .venv\Scripts\activate

# 2) Install deps
pip install -r requirements.txt

# 3) Run API
uvicorn app.main:app --reload
# API at: http://127.0.0.1:8000  | Docs: http://127.0.0.1:8000/docs

# 4) (Optional) Seed sample users
python app/seed.py
```

## 🔌 Key Endpoints

- `POST /users/` – create user
- `GET /users/{user_id}` – get user
- `PATCH /users/{user_id}` – update user
- `GET /matches/{user_id}?top_k=5` – ranked matches for user
- `POST /groups/` – create group
- `POST /groups/{group_id}/members` – add member
- `GET /groups/{group_id}/members` – list members
- `POST /groups/{group_id}/messages?user_id=1&content=Hi` – post message
- `GET /groups/{group_id}/messages` – list messages
- `POST /files/upload` – upload file

## 🧪 Try It Fast (after seeding)
1. Open docs at `http://127.0.0.1:8000/docs`
2. `GET /matches/1` to view Alice’s top matches
3. `POST /groups/` with `{ "name": "CS3410 Study", "course": "CS 3410", "owner_id": 1 }`
4. Add members and send messages

## 🧭 Next Steps
- Add auth (Firebase Auth or JWT)
- Calendar sync (Google/Outlook)
- Real-time chat via WebSockets
- AI assistant to generate flashcards from uploaded notes
- Frontend (Next.js or Flutter) consuming this API
```

