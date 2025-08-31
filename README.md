This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Structure

**Tech Stack:**

- Next.js with TypeScript for the frontend
- Tailwind CSS for styling
- Material Tailwind for UI components

**Key Files:**

- `src/app/page.tsx` - Main React component with UI layout and component logic
- `src/app/data.ts` - Data models and exported arrays for work experience, projects, and skills
- `public/img/` - All images and SVG assets
- `public/favicon.ico` - Site favicon
- `.nvmrc` - Node version specification
- `tailwind.config.ts` - Tailwind CSS configuration file. Theme colors can be configured here
- `.github` – GitHub Actions configurations

**Data Flow:**

- `data.ts` exports typed arrays (WORK_EXPERIENCES, PERSONAL_PROJECTS, etc.)
- `page.tsx` imports and maps over these arrays to render accordions and chips
- Images referenced in data arrays are served from `public/img/`

## Getting Started

1. Download `nvm` to install the right version of node
2. Run `nvm install` to make sure you have the node version installed
3. Run `nvm use` to switch to the correct node version
4. Run `npm install` to install the project dependencies
5. Run `npm run dev` to start the development server
6. Go to localhost:3000 in your browser, and make changes to see them
7. Once you push to GH, changes should be automatically deployed from `main` to `https://aparakh.github.io`

## Additional Reading

To learn more about technologies used here, read:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework for styling.
- [Github Pages](https://pages.github.com/) - host your static sites directly from your GitHub repository.
