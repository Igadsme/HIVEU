
# HiveU Frontend (Vite + React + Tailwind, JWT-ready)

## Quick Start
```bash
cd frontend
npm install
npm run dev
```

Backend expected at `http://127.0.0.1:8000`. Override with env:
```bash
echo "VITE_API_BASE=http://localhost:8000" > .env.local
```

## Auth
- Login POST `/auth/login` -> `{ access_token, token_type, user_id }`
- Token stored in localStorage and attached as `Authorization: Bearer` header
- Protected pages require token
