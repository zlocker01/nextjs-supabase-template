🦖 Next.js Supabase Template 🦖
TThe Ultimate Next.js and Supabase Starter Template for Your Apps

Created by Diego Beristain de la Mora

Features
🚀 Next.js 14 (App Router)
💚 Supabase with @supabase/ssr - Fully integrated across the entire Next.js stack (App Router, Pages Router, Client, Server, Middleware)
⚛️ React 18
🛠 TypeScript
📦 pnpm - Fast and disk space efficient package manager
🎨 TailwindCSS
✨ shadcn/ui - Beautifully designed components for your app
🧪 Jest with React Testing Library - Unit tests for your code
🔄 Zod - For Schemas in Forms
🔍 ESLint - To find and fix problems in your code
🎨 Prettier - Code formatter for consistent style
🐶 Husky - Run scripts before committing
🗂 lint-staged - Run ESLint and Prettier against staged Git files
🗺 Path Mapping - Import components or images using the @ prefix
🌑 Light/Dark Mode - Toggle theme modes with next-themes
🖋️ CommitLint - For better Commits
🕷️ Debugging - Setup to use debbuging tool on VSCode
🦥 Zustand- For Global State

Clone and Run Locally
Create a Supabase Project

First, you need a Supabase project. Create one via the Supabase dashboard.

Create a Next.js App Using the Supabase Starter Template

bash
Copiar código
pnpm create next-app -e https://github.com/your-username/your-repo
# or
npx create-next-app -e https://github.com/your-username/your-repo
Navigate to Your App's Directory

bash
Copiar código
cd name-of-new-app
Set Up Environment Variables

Rename .env.local.example to .env.local and update the following:

env
Copiar código
NEXT_PUBLIC_SUPABASE_URL=[INSERT SUPABASE PROJECT URL]
NEXT_PUBLIC_SUPABASE_ANON_KEY=[INSERT SUPABASE PROJECT API ANON KEY]
Both NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY can be found in your Supabase project's API settings.

Run the Local Development Server

bash
Copiar código
pnpm run dev
The starter kit should now be running on http://localhost:3000.

Check out the Local Development section for details on running Supabase locally.

Documentation
Requirements
Node.js >= 20.17.0
pnpm 9.9.0
Scripts
pnpm dev — Starts the application in development mode at http://localhost:3000.
pnpm build — Creates an optimized production build of your application.
pnpm start — Starts the application in production mode.
pnpm lint — Runs ESLint for all files in the src directory.
pnpm format — Runs Prettier and formats files.
pnpm ts-lint — Validate TypeScript code.
pnpm prepare — Runs Husky install script.
pnpm prettier — Runs Prettier to format files.
pnpm test — Runs all the Jest tests in the project.
pnpm test:watch — Runs Jest tests in watch mode.