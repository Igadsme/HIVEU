# HiveU StudyMatch - Full Stack Application

A complete full-stack study group matching application with a beautiful Figma-designed frontend integrated with a FastAPI backend.

## Features

- **User Authentication**: Sign up and login with KSU email verification
- **Smart Matching**: AI-powered study partner matching based on courses, availability, and study styles
- **Study Groups**: Create and manage study groups with messaging and file sharing
- **Dashboard**: Personalized dashboard with matches, upcoming sessions, and study stats
- **Group Workspace**: Collaborative workspace with messages, files, and tasks
- **Profile Management**: Update your profile with courses, availability, and preferences
- **Beautiful UI**: Modern, responsive design with dark mode support

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for build tooling
- React Router for navigation
- Motion (Framer Motion) for animations
- Radix UI components
- Tailwind CSS for styling
- Zustand for state management
- Axios for API calls

### Backend
- FastAPI (Python)
- SQLModel for ORM
- SQLite database
- RESTful API

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.9+
- pip

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the backend server:
```bash
uvicorn app.main:app --reload
```

The API will be available at `http://127.0.0.1:8000`
API documentation at `http://127.0.0.1:8000/docs`

5. (Optional) Seed sample data:
```bash
python app/seed.py
```

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## Project Structure

```
HiveU-StudyMatch-fullstack 3/
├── backend/
│   ├── app/
│   │   ├── core/
│   │   │   └── db.py          # Database configuration
│   │   ├── models/            # SQLModel models
│   │   ├── routers/           # API route handlers
│   │   ├── schemas/           # Pydantic schemas
│   │   ├── services/          # Business logic
│   │   └── main.py            # FastAPI app
│   ├── requirements.txt
│   └── README.md
├── frontend/
│   ├── src/
│   │   ├── components/       # React components
│   │   │   ├── ui/           # UI component library
│   │   │   └── ...           # Page components
│   │   ├── api.ts            # API integration
│   │   ├── store.ts          # Zustand store
│   │   ├── App.tsx           # Main app component
│   │   └── main.tsx          # Entry point
│   ├── package.json
│   └── vite.config.ts
└── README.md
```

## API Endpoints

### Users
- `POST /users/` - Create a new user
- `GET /users/{user_id}` - Get user details
- `PATCH /users/{user_id}` - Update user

### Matches
- `GET /matches/{user_id}?top_k=5` - Get top matches for a user

### Groups
- `POST /groups/` - Create a study group
- `GET /groups/{group_id}` - Get group details
- `POST /groups/{group_id}/members` - Add member to group
- `GET /groups/{group_id}/members` - List group members
- `POST /groups/{group_id}/messages` - Post a message
- `GET /groups/{group_id}/messages` - Get group messages

### Files
- `POST /files/upload` - Upload a file
- `GET /files/{filename}` - Get file info

## Usage

1. Start the backend server (see Backend Setup)
2. Start the frontend server (see Frontend Setup)
3. Open `http://localhost:5173` in your browser
4. Sign up with a KSU email address
5. Update your profile with courses and preferences
6. Find study partners and create study groups!

## Development

### Backend
- The backend uses FastAPI with automatic API documentation
- Database is SQLite (stored in `app/data/studymatch.db`)
- Models are defined using SQLModel
- API follows RESTful conventions

### Frontend
- Components are organized by feature
- UI components are in `components/ui/`
- Page components are in `components/`
- API calls are centralized in `api.ts`
- State management uses Zustand

## Notes

- Authentication is simplified for development (uses localStorage)
- In production, implement proper JWT authentication
- File uploads are stored locally in `backend/uploads/`
- The matching algorithm considers course overlap, availability, and study styles

## License

This project is for educational purposes.
