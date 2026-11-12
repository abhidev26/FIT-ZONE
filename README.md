# FITZONE PRO — Premium 3D Gym Management Platform

**TRAIN SMART. LIVE STRONG.**

This package contains the complete project specification supplied for FITZONE PRO, architecture notes, and a runnable starter scaffold for the React + Express application.

## Included
- `docs/MASTER-PROMPT.md` — full master build prompt.
- `docs/FEATURE-SPECIFICATION.md` — feature inventory and role permissions.
- `docs/DATABASE-AND-API.md` — MongoDB collection plan and REST API outline.
- `client/` — React 19 + Vite + TypeScript starter with animated landing page and role dashboard shell.
- `server/` — Express + TypeScript API starter with health endpoint and demo dashboard endpoint.
- `.env.example` files and root setup instructions.

## Requirements
- Node.js 20+
- npm 10+
- MongoDB local instance or MongoDB Atlas connection

## Run locally

### 1. Start backend
```bash
cd server
npm install
copy .env.example .env
npm run dev
```
Edit `server/.env` and set `MONGODB_URI` if you enable database-backed modules. The starter API can run without MongoDB for its health and demo endpoints.

### 2. Start frontend
Open a second terminal:
```bash
cd client
npm install
copy .env.example .env
npm run dev
```
Open the Vite URL shown in the terminal (normally http://localhost:5173).

## Current implementation status
The included scaffold is a starting codebase, not a completed production deployment. It provides the public landing experience, animated dashboard shell, sample demo metrics, API health endpoint, and project structure. Authentication, persistent CRUD workflows, payment gateway, QR verification, email delivery, and production authorization must be implemented and tested before real gym use.

## Suggested build order
1. Install dependencies and run both applications.
2. Complete MongoDB models and authentication.
3. Implement server-enforced role permissions.
4. Add members, plans, trainers, attendance, workouts, appointments and payment records.
5. Connect dashboard metrics to real API data.
6. Add QR and payment-provider sandbox integrations.
7. Add tests, accessibility checks, deployment configuration and security review.
