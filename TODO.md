# Rollex Multimedia Agency Onboarding Platform - Development TODO

## Legend
- [ ] **Todo**
- [x] **Done**
- **Current**: In progress

Current Progress: **Phase 0 - Setup Project Structure** (Deps installed)

## Phase 0: Setup Project Structure
- [x] Create frontend/ and backend/ folders with initial package.json and setup files
- [x] Run npm install in frontend/ and backend/
- [x] Create .env.example and root configs
- **Current** Test: Ensure both servers start without errors

## Phase 1: Week 1 - Backend Foundation
- [ ] Implement DB connection and models (User, Application, Comment)
- [ ] Setup auth routes (/register, /login) with JWT and RBAC
- [ ] Create applications basic routes (list/submit)
- [ ] Add middleware (auth, upload)
- [ ] Test: Manual DB insert/query, auth tokens

## Phase 2: Week 2 - Core Backend + Basic Frontend
- [ ] Backend: Full applications routes (status update, comments, notifications mock)
- [ ] Frontend: Landing, register/login pages with API integration
- [ ] Frontend: Dashboard (role-based) and application form with image upload
- [ ] Test: End-to-end talent flow (submit app), admin review

## Phase 3: Week 3 - Polish & Integration
- [ ] Frontend: Admin dynamic review page, status polling
- [ ] Add validation (zod), error handling, responsive Tailwind UI
- [ ] Update README.md with run instructions
- [ ] UAT: Full flows, notifications, image handling
- [ ] Prep deployment docs (Vercel/Render)

## Post-Completion
- [ ] attempt_completion with demo commands

