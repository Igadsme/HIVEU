from contextlib import asynccontextmanager
from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from app.core.db import init_db
from app.routers import users, matches, groups, files

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    init_db()
    yield
    # Shutdown (if needed)

app = FastAPI(title="HiveU StudyMatch API", version="0.1.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router, prefix="/users", tags=["users"])
app.include_router(matches.router, prefix="/matches", tags=["matches"])
app.include_router(groups.router, prefix="/groups", tags=["groups"])
app.include_router(files.router, prefix="/files", tags=["files"])

@app.get("/")
def root():
    return {"status": "ok", "service": "HiveU StudyMatch API"}
