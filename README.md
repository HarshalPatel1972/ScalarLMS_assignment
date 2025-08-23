# 🌐 Online Learning Platform – SDE Intern Project

Welcome! This repository showcases my journey in building a modern online learning platform as part of the SDE Intern hiring process. The project combines **full-stack engineering, user-centric design, and security-first practices** to deliver a polished experience for both students and instructors.

---

## 🚀 Features & Highlights

### Two Roles, Tailored Experience
**Instructors** can create courses with rich content, including:
* Readings
* Quizzes (multiple-choice)
* Rich text descriptions (via TipTap editor)
* File uploads (images, PDFs) using drag-and-drop Uploader component

**Students** can:
* Browse available courses
* Complete lectures sequentially
* Attempt quizzes with real-time grading
* Track their progress (X/Y lectures completed)

### Sleek Interface
* Built with **Shadcn UI** for a clean, responsive design
* Animated elements (`animate-spin`) for feedback and modern feel
* Theme toggle (light/dark) for accessibility and aesthetics

### Instant Feedback
* Real-time quiz grading
* Toast notifications via **Sonner** for actions and errors
* File upload errors handled gracefully with toast messages

### Secure from the Start
* Authentication and role-based authorization with **Better Auth**
* API security with **Arcjet** (sliding window rate limiting)

### File Uploads with Tigris
* Integrated **Tigris S3-compatible storage** for file uploads
* `Uploader.tsx` supports drag-and-drop with validation (size, count, type)
* Files uploaded securely via presigned URLs
* Integrated with **React Hook Form** for seamless course creation workflows

### Type Safety & Performance
* **T3 Env** ensures environment variables are validated at compile-time
* **Prisma ORM** + **Neon Postgres** for reliable and scalable database management
* Forms validated with **Zod** and **React Hook Form**

---

## 🗂️ Project Structure
- `app/`
  - `(auth)/` - Authentication pages (login, verification, etc.)
  - `(public)/` - Landing page, Navbar, dropdowns
  - `(admin)/` - Instructor dashboard, course creation
  - `(courses)/` - Students' view of available courses
  - `(api)/` - Authentication and backend endpoints
- `components/`
  - `sidebar/`
  - `ui/` - Buttons, cards, dialogs, form inputs, theme toggles (Shadcn UI)
- `hooks/` - Custom React hooks
- `lib/` - Business logic, validation, security (Arcjet, Zod, utils)
- `lib/S3Client.ts` - Tigris S3 client configuration
- `lib/actions.ts` - Server actions (course creation with Arcjet protection)
- `prisma/` - Prisma schema, client, and DB logic
- `public/` - Images, SVGs, branding

**Notable new components:**
* `editor.tsx` & `Menubar.tsx` → TipTap rich text editor for course descriptions
* `Uploader.tsx` → drag-and-drop file uploader with validation and toast feedback
* `AdminCourseCard.tsx` → instructor course card with edit, preview, and delete actions

---

## 🛠️ Setup Instructions

### Prerequisites
* [Node.js](https://nodejs.org/en/) v18+
* [pnpm](https://pnpm.io/)
* [Neon Postgres](https://neon.tech/) credentials
* [Better Auth](https://better-auth.com/) keys

### Steps
1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/HarshalPatel1972/ScalarLMS_assignment.git](https://github.com/HarshalPatel1972/ScalarLMS_assignment.git)
    cd ScalarLMS_assignment
    ```
2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
3.  **Configure `.env` according to T3 Env guidelines:**
    ```
    DATABASE_URL=postgresql://<user>:<password>@<host>/<db>
    BETTER_AUTH_SECRET=your-secret
    ARCJET_API_KEY=your-key
    NEXT_PUBLIC_APP_URL=http://localhost:3000
    ```
4.  **Setup Prisma DB:**
    ```bash
    pnpm prisma generate
    pnpm prisma db push
    ```
5.  **Start development server:**
    ```bash
    pnpm dev
    ```

---

## 🧩 Why These Choices?

* **Next.js (App Router)** → SSR/CSR flexibility and scalability
* **Shadcn UI & Origin UI** → fast, reusable, polished UI components
* **Arcjet** → advanced security (rate limiting, bot detection)
* **Prisma + Neon** → cloud-hosted, relational database with easy ORM integration
* **T3 Env** → ensures environment variables are type-safe
* **Zod & React Hook Form** → type-safe, reliable form validation
* **TipTap Rich Text Editor** → flexible course content editing
* **Uploader.tsx** → simple, user-friendly file uploads

---

## 📈 Progress So Far

* **Authentication:** ✅ Complete (Better Auth integration)
* **Landing Page & Dashboard:** ✅ Prototyped
* **Course Creation:** ✅ Admin tools with forms, rich text editor, file uploader (integrated with React Hook Form + Tigris S3)
* **UI & Animations:** ✅ Core components styled
* **API & DB:** ✅ Prisma schema & Neon connection working
* **Server Actions:** ✅ Secure course creation with Arcjet rate-limiting and bot protection

### Upcoming Features
* Student course browsing & enrollment
* Lecture viewing with sequential navigation
* Quiz attempts with grading and progress tracking
* Stripe integration for payments (optional bonus)
* Course search functionality
* Responsive design for mobile & tablet
* Analytics & richer dashboards
* Course editing and deletion workflows
* File preview and management for uploaded assets

---

## 💡 Development Notes

* Real commit history to reflect iterative development
* ESLint & TypeScript for code quality
* Modularized codebase for maintainability and future feature expansion

---

## 📫 Submission & Contact

* Repository link: [`ScalarLMS_assignment`](https://github.com/HarshalPatel1972/ScalarLMS_assignment)

*README will continue to evolve alongside the project.*
