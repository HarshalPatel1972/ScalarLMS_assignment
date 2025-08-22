# Scalar LMS Assignment

This repository contains the **Scalar LMS Assignment**, built using **Next.js**, **Tailwind CSS**, and other modern tools.  
The project demonstrates authentication, course management, and UI design as per the company’s assignment requirements.

---

## 🚀 Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS, shadcn/ui
- **Authentication:** Better-auth
- **Database/ORM:** Prisma + PostgreSQL (if required)
- **Other Tools:** 
  - Lucide-react (icons)
  - Sonner (toast notifications)
  - Arcjet (security & rate limiting)
  - React Hook Form + Zod (form validation)

---

## 📂 Project Structure

```bash
ScalarLMS_assignment/
├── app/                  # Next.js app router pages & routes
├── components/           # Reusable UI components
├── lib/                  # Utility functions & configurations
├── prisma/               # Database schema (if applicable)
├── public/               # Static assets (e.g., logo)
├── styles/               # Global styles
├── README.md             # Documentation
└── package.json
⚡ Installation & Setup
Clone the repository:

bash
Copy
Edit
git clone https://github.com/HarshalPatel1972/ScalarLMS_assignment.git
cd ScalarLMS_assignment
Install dependencies:

bash
Copy
Edit
pnpm install
(Make sure you have pnpm installed)

Set up environment variables:
Create a .env file in the root and add the required values:

env
Copy
Edit
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_secret
ARCJET_KEY=your_arcjet_key
Run the development server:

bash
Copy
Edit
pnpm dev
Open the app at:

arduino
Copy
Edit
http://localhost:3000
🔑 Features Implemented
✅ User Authentication (Sign up, Login, Sign out)

✅ Secure Session Handling

✅ Course Management Pages

✅ Responsive Design with Tailwind

✅ Form Handling with Validation

✅ Error handling with Toast Notifications


📜 License
This project is created solely for the Scalar Assignment.
Usage outside of this context should respect the author’s rights.

👤 Author
Harshal Patel
GitHub Profile
