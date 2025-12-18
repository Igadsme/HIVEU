# How to Run HiveU StudyMatch Application

## Prerequisites

- **Python 3.8+** (for backend)
- **Node.js 18+** and **npm** (for frontend)

## Running the Application

### Option 1: Run Both Backend and Frontend (Recommended)

You'll need **two terminal windows** - one for the backend and one for the frontend.

---

### Terminal 1: Backend (FastAPI)

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment:**
   ```bash
   # Create virtual environment
   python3 -m venv .venv
   
   # Activate it
   # On macOS/Linux:
   source .venv/bin/activate
   # On Windows:
   # .venv\Scripts\activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Start the backend server:**
   ```bash
   uvicorn app.main:app --reload --port 8000 --host 127.0.0.1
   ```

   The backend API will be available at: **http://127.0.0.1:8000**
   - API docs: http://127.0.0.1:8000/docs

---

### Terminal 2: Frontend (React/Vite)

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies (if not already installed):**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend will be available at: **http://localhost:5173** (or the port shown in terminal)

---

## Quick Start Commands

### Backend (from project root):
```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000 --host 127.0.0.1
```

### Frontend (from project root):
```bash
cd frontend
npm install
npm run dev
```

---

## Accessing the Application

1. **Frontend:** Open your browser and go to `http://localhost:5173`
2. **Backend API:** `http://127.0.0.1:8000`
3. **API Documentation:** `http://127.0.0.1:8000/docs` (Interactive Swagger UI)

---

## First Time Setup Notes

- The backend will automatically create a SQLite database file when you first run it
- You can sign up for a new account through the frontend login page
- Make sure both servers are running for full functionality

---

## Troubleshooting

### Backend Issues:
- **Port already in use:** Change the port in the uvicorn command: `--port 8001`
- **Module not found:** Make sure you're in the virtual environment and dependencies are installed

### Frontend Issues:
- **Port already in use:** Vite will automatically try the next available port
- **Dependencies missing:** Run `npm install` again
- **Build errors:** Check that all TypeScript types are correct with `npm run build`

---

## Stopping the Servers

Press `Ctrl + C` in each terminal to stop the servers.

