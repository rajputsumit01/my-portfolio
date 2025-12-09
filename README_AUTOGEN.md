Portfolio rebuilt
=================

What I did:
- Created a clean 'backend' folder containing a secure Server.js, package.json, and .env.example.
- Copied frontend contents (if found) into 'frontend' folder.
- Added a /health endpoint and logging to help debug requests.
- The backend must be configured with real credentials in backend/.env (copy .env.example -> .env and fill values).

How to run locally:
1. Backend:
   cd backend
   npm install
   copy .env.example to .env and edit EMAIL_USER and EMAIL_PASS (App password)
   npm run dev

2. Frontend:
   cd frontend
   npm install
   npm run dev (or your usual frontend start script)

Notes:
- I did NOT add real passwords to any files.
- If you want, I can prepare a single zip with the rebuilt project for download.
app password -rmxq aqgb bajx soql