# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

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

Next.js 16 App Router personal portfolio site with React 19, TypeScript (strict), and Tailwind CSS v4.

**Directory structure:**

```
src/app/
  layout.tsx           # Root layout — adds Analytics & SpeedInsights
  page.tsx             # Home route (renders HomeContent)
  globals.css          # Tailwind + @theme custom tokens
  components/          # Shared components (Navbar, Footer, ThemeProvider, page content)
  about/page.tsx
  projects/page.tsx
  contact/page.tsx
```

All page-level components live in `src/app/components/` and are Client Components (`'use client'`). Pages in the route segments are thin server wrappers that export metadata and render the content component.

## Key Patterns

**Theme system:** `ThemeProvider` uses `useSyncExternalStore` + localStorage for dark/light mode. Theme is applied via a class on `<html>` and toggled through context. Dark mode in Tailwind is configured via a custom `@custom-variant dark` in `globals.css`.

**Animations:** Heavy use of Framer Motion (`motion` package) — scroll-linked parallax via `useScroll`/`useTransform`/`useSpring`, staggered entrance animations on page components.

**Tailwind v4:** Uses the new `@theme` directive in `globals.css` instead of `tailwind.config.ts` for custom colors (`primary: #B63E96`, `primaryDark: #58E6D9`) and fonts. PostCSS is configured via `@tailwindcss/postcss`.

**Build:** Explicitly uses `--webpack` flag in the build script. Turbopack is not used. `@next/bundle-analyzer` is available for bundle analysis.

**Analytics:** `@vercel/analytics` and `@vercel/speed-insights` are initialized in the root layout.

## Path Aliases

`@/*` maps to `./src/*`.
