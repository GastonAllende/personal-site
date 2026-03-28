# Copilot Instructions

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build (uses --webpack, not Turbopack)
npm run lint         # ESLint check
npm run lint:fix     # ESLint auto-fix
npm run format       # Prettier format all files
npm run format:check # Check formatting
npm run type-check   # TypeScript type checking without emit
```

No test suite is configured.

## Architecture

Next.js 16 App Router portfolio site with React 19, TypeScript (strict), and Tailwind CSS v4.

**Route pages are thin server wrappers** that export `Metadata` and render a single content component from `src/app/components/`. All page-level content components are Client Components (`'use client'`).

```
src/app/page.tsx        → renders <HomeContent />
src/app/about/page.tsx  → renders <AboutContent />
src/app/projects/       → renders <ProjectsContent />
src/app/contact/        → renders <ContactContent />
```

Shared UI components (Navbar, Footer, ThemeProvider) also live in `src/app/components/`.

**Path alias:** `@/*` maps to `./src/*`.

## Key Conventions

**Theme system:** `ThemeProvider` uses `useSyncExternalStore` + localStorage for dark/light mode. Theme is toggled via a `dark` class on `<html>`. Dark mode in Tailwind uses `@custom-variant dark (&:is(.dark *))` in `globals.css`. Use `useTheme()` to access the current theme in components.

**Tailwind v4 theming:** Custom design tokens are defined via `@theme` in `globals.css` (not `tailwind.config.ts`). Key tokens: `--color-primary: #B63E96`, `--color-primaryDark: #58E6D9`, `--font-mont` (Montserrat). PostCSS uses `@tailwindcss/postcss`.

**Animations:** Framer Motion (`motion` package, imported from `motion/react`) — scroll-linked parallax via `useScroll`/`useTransform`/`useSpring`, staggered entrance animations with `whileInView`, and layout animations for navigation state.

**Icons:** `lucide-react` for all iconography. Brand/social icons are custom SVGs in `BrandIcons.tsx`.

**Build:** The build script explicitly uses `--webpack`. Turbopack is not used.

**Node version:** Requires Node >= 22 < 23 (enforced in `package.json` `engines`).

**ESLint rules to note:** `@next/next/no-img-element` is set to `error` — always use `next/image`. `react/no-unescaped-entities` is `error`.

**Analytics:** `@vercel/analytics` and `@vercel/speed-insights` are initialized in the root layout. Do not remove them.
