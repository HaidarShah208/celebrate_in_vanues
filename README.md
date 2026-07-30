# Hashed

Production-grade Next.js 15 starter with App Router, TypeScript (strict), Tailwind CSS v4, and a scalable frontend architecture.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- TanStack Query, Axios, Zustand
- React Hook Form + Zod
- ESLint, Prettier, Husky, lint-staged
- Sonner, Lucide, CVA, clsx, tailwind-merge

## Getting started

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and adjust values as needed.

## Scripts

| Command          | Description                |
| ---------------- | -------------------------- |
| `pnpm dev`       | Start Turbopack dev server |
| `pnpm build`     | Production build           |
| `pnpm start`     | Start production server    |
| `pnpm lint`      | Run ESLint                 |
| `pnpm format`    | Format with Prettier       |
| `pnpm typecheck` | TypeScript check           |

## Project structure

```text
src/
  app/                 # App Router routes, layouts, metadata
  components/
    layout/            # Header, footer, chrome
    providers/         # React Query, theme, app providers
    ui/                # Reusable primitives (Button, Input, …)
  config/              # Site config & constants
  features/            # Feature modules (schemas, components, hooks)
  hooks/               # Shared hooks
  lib/
    api/               # Axios client + Query client
    env.ts             # Zod-validated env
    utils.ts           # cn() helper
  stores/              # Zustand stores
  types/               # Shared types
```

## Conventions

- Absolute imports via `@/*`
- Mobile-first layouts and utilities
- Feature code lives under `src/features/<feature>`
- Shared UI stays in `src/components/ui`
- Env vars are validated in `src/lib/env.ts`
