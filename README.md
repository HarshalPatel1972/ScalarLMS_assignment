Scalar LMS – Online Learning Platform
📌 Overview

This is a simplified online learning management system (LMS) built as part of the SDE Intern Assignment. The platform supports two types of users — Instructors and Students.

Instructors can create courses and lectures (reading material or quizzes).

Students can browse courses, complete lectures, take quizzes, and track their progress.

The project is being developed as a full-stack application with authentication, authorization, progress tracking, and a clean UI.

🚀 Tech Stack

Frontend & Backend: Next.js 14 (App Router)

Authentication & Authorization: Better-Auth

UI Components: shadcn/ui
, Sonner
(toasts), Origin UI

Database: Neon Postgres

ORM: Prisma

Security: Arcjet
with sliding window rate limiting

Validation: Zod
, React Hook Form

Env Management: T3 Env
(compile-time environment validation)

Package Manager: pnpm

✨ Features Implemented (So Far)

✅ Authentication (Better-Auth) with login & signup

✅ Role-based access control (Instructor vs Student)

✅ Landing page with Navbar, Dropdown, and Cards

✅ Dashboard layout (in progress)

✅ Course creation form (Instructor side, using React Hook Form + Zod validation)

✅ Theming support (light/dark mode toggle with shadcn/ui)

✅ Security via Arcjet (rate limiting with sliding window algorithm)

✅ Prisma + Neon database connection with schema defined

📂 Project Structure
app/ # Next.js App Router pages
(auth)/ # Authentication pages (login, verify)
(public)/ # Public landing page
admin/ # Instructor dashboard and course management
api/ # API routes (auth, etc.)
components/ # Reusable UI + Sidebar components
hooks/ # Custom React hooks
lib/ # Auth, DB, Env, Utils, Arcjet configs
prisma/ # Prisma schema
public/ # Static assets (logos, icons)

⚙️ Setup Instructions

Clone the repository

git clone https://github.com/HarshalPatel1972/ScalarLMS_assignment.git
cd ScalarLMS_assignment

Install dependencies

pnpm install

Setup environment variables
Create a .env file in the root with values like:

DATABASE_URL=postgresql://<user>:<password>@<host>/<db>
BETTER_AUTH_SECRET=your-secret
ARCJET_API_KEY=your-key
NEXT_PUBLIC_APP_URL=http://localhost:3000

Run Prisma migrations

pnpm prisma migrate dev

Start development server

pnpm dev

🏗️ Architecture & Design

Next.js App Router → Pages structured by route groups (auth, public, admin).

Server & Client Components → Used as per requirements (forms, DB queries, UI interactivity).

Authentication → Better-Auth integrated following official docs.

Database Modeling → Prisma schema defines users, courses, lectures, quizzes, and progress.

Security → Arcjet rate-limiting middleware to protect APIs.

Validation → Zod + React Hook Form for type-safe form handling.

🔮 Work In Progress

Student course browsing & enrollment

Lecture viewing & sequential navigation

Quiz attempts with grading (70% pass rule)

Student progress tracking (X/Y lectures completed)

Stripe integration for payments (bonus feature)

Instructor file uploads (bonus feature)

📜 Submission Details

Assignment: Scalar LMS – Online Learning Platform (SDE Intern Project)

Repository: ScalarLMS_assignment

Commit History: Includes step-by-step implementation progress

👉 This README will be updated as development progresses.
