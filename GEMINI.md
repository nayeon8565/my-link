# Gemini Project Context: my-link

## Project Overview
This project consists of a Next.js web application named `my-profile`. It is built with a modern React stack, focusing on a personal profile or landing page.

- **Primary Technologies:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.
- **Project Structure:**
  - `my-profile/`: The main Next.js application directory.
    - `app/`: Contains the application's routes and UI components (App Router).
    - `public/`: Static assets such as images and fonts.
    - `tsconfig.json`: TypeScript configuration.
    - `next.config.ts`: Next.js configuration.
    - `package.json`: Project dependencies and scripts.

## Building and Running
All commands should be executed within the `my-profile` directory.

- **Development Server:** `npm run dev` (Runs on http://localhost:3000)
- **Production Build:** `npm run build`
- **Start Production Server:** `npm run start`
- **Linting:** `npm run lint`

## Development Conventions
- **App Router:** Follow Next.js App Router conventions (e.g., `page.tsx` for routes, `layout.tsx` for shared UI).
- **Styling:** Use Tailwind CSS 4 for utility-first styling. Prefer modern CSS features where appropriate.
- **TypeScript:** Ensure all new components and logic are properly typed.
- **Components:** Organize reusable components within the `app/` directory or a dedicated `components/` directory if needed.
