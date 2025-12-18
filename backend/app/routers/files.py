from fastapi import APIRouter, UploadFile, File, HTTPException
import os, uuid, shutil

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@router.post("/upload")
def upload_file(file: UploadFile = File(...)):
    ext = os.path.splitext(file.filename)[1]
    fname = f"{uuid.uuid4().hex}{ext}"
    dest = os.path.join(UPLOAD_DIR, fname)
    with open(dest, "wb") as out:
        shutil.copyfileobj(file.file, out)
    return {"filename": file.filename, "stored_as": fname, "url": f"/files/{fname}"}

@router.get("/{fname}")
def get_file(fname: str):
    path = os.path.join(UPLOAD_DIR, fname)
    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="File not found")
    # NOTE: For production, use proper static file serving.
    with open(path, "rb") as f:
        return {"filename": fname, "size": os.path.getsize(path)}
