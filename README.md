🌐 Online Learning Platform – SDE Intern Project
Welcome! This repository showcases my journey in building a robust, modern online learning platform as part of the SDE Intern hiring process. The project combines full-stack engineering, user-centric design, and security-first practices to deliver a polished experience for students and instructors.

🚀 Features & Highlights
Two Roles, Tailored Experience:

Instructors can create rich courses with readings and interactive quizzes.

Students can browse, attend lectures, complete quizzes, and track their own learning progress—step by step.

Sleek Interface:

Built with Shadcn UI for rapid development and clean user experience.

Animated elements (using animate-spin) add feedback and a modern touch.

Dynamic theme toggle for light/dark mode—because accessibility and aesthetics matter!

Instant Feedback:

Real-time quiz grading and rich notifications via Sonner to keep users informed.

Secure from the Start:

Authentication powered by Better Auth, protecting every route and user role.

Arcjet integration for advanced rate limiting and security algorithms.

Type Safety & Performance:

Leveraging T3 Env for safe env variable use and compile-time validation.

Using Neon as fast, scalable serverless Postgres—integrated with Prisma ORM.

🗂️ Project Structure
The codebase is modular and organized for scalability and maintainability.

text
app/
  (auth)/                # Auth pages: login, verification, etc.
  (public)/              # Landing, Navbar, dropdowns
  admin/                 # Instructor dashboard, course creation
  courses/               # Students' view of available courses
  api/                   # Authentication and backend endpoints

components/
  sidebar/
  ui/                    # Buttons, cards, dialogs & more (Shadcn UI)
  ...
hooks/                   # Custom React hooks
lib/                     # Business logic, security, validation
prisma/                  # Prisma schema and DB logic
public/                  # Images, SVGs, branding
README.md
...
🛠️ Setup
Prerequisites:
Node.js (v18+) - pnpm - Neon DB credentials - Better Auth keys

Steps:

Clone repo & install dependencies

text
git clone <repo-url>
cd online-learning-platform
pnpm install
Configure .env using T3 Env guidelines.

Execute Prisma DB setup:

text
pnpm prisma generate
pnpm prisma db push
Start development server:

text
pnpm dev
🧩 Why These Choices?
Next.js (App Router) for unified SSR/CSR and future scalability.

Shadcn UI & Origin UI for rapid UI development and delightful user experiences.

Arcjet for security by design—rate limiting with sliding window algorithms.

Prisma + Neon for smooth, cloud-based relational data management.

T3 Env prevents configuration errors before they strike.

Zod & React Hook Form keep all forms reliable and robust.

📈 Progress So Far & What’s Next?
Authentication: Done

Landing & Dashboard: Prototyped

Course Creation: Admin tools in progress

UI & Animations: Core components styled

API & DB: Prisma schema, Neon connection working

Upcoming:

Quiz logic, progress tracking, file uploads, course search, responsive layouts, and richer analytics dashboards.

💡 Development Notes
Real commit history—reflecting my thought process and iteration.

ESLint for linting, clear code conventions everywhere.

Modularized for future feature extensions.

🎨 Screenshots & Previews (Coming Soon)
As more features roll out, I’ll add screenshots/gifs showing the user experience, animations, and dashboard in action.

📫 Submission & Contact
Once completed, the repository will be submitted for review via the provided guidelines.
If you want to see code samples, architecture diagrams, or deployment strategies, just ask!

This README will evolve alongside the project. Stay tuned!
