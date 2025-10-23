# Lokachakra Legal Dashboard

STATUS: Pending / Work in progress

This repository contains a UI prototype built on the Fusion Starter stack (React + Vite + Tailwind + Express). The project is currently in a pending state — key features are scaffolded and styled, but several integrations, data sources, and production polish remain incomplete.

Quick summary
- Purpose: Responsive legal operations dashboard UI (KPIs, filters, tools library, AI recommendation panel).
- Stack: React 18 + TypeScript + Vite, Tailwind CSS, Express (integrated dev server), pnpm.
- Current state: UI components and pages scaffolded; mock/static data used in many places; server exists but APIs are minimal or demo-only.

What is implemented
- Project skeleton and routing (client/App.tsx, client/pages/Index.tsx).
- Core UI sections: Header, KPI tiles, Filter controls, Tools Grid, AI Recommendation panel (visuals and layout).
- Shared types and basic Express server stub (server/index.ts).
- Tailwind + utility components and cn() helper.

Local development (how to run)
1. Install dependencies:
   pnpm install

2. Start dev server (Vite + Express):
   pnpm dev
   - Dev server runs on http://localhost:8080 with hot reload for client and server.

Useful commands
- pnpm dev        # Start dev server
- pnpm build      # Build client and server bundles
- pnpm start      # Run production server from dist
- pnpm test       # Run Vitest tests
- pnpm typecheck  # Run TypeScript checks

Notes
- Prefer pnpm as package manager.
- Route files are located under client/pages; API routes under server/routes.
- Keep changes small and test frequently; the repo is intended as a starter for production-ready work but is not yet production-complete.

Project structure (major files)
- Frontend
  - [client/App.tsx](client/App.tsx) — main app & routes; entry point for SPA routing.
  - [client/pages/Index.tsx](client/pages/Index.tsx) — home/dashboard layout (main page shown in presentation).
  - [client/global.css](client/global.css) — Tailwind theme & global styles.
  - [client/vite-env.d.ts](client/vite-env.d.ts) — Vite/TS environment types.
  - UI components:
    - [`LegalKanbanBoard`](client/components/LegalKanbanBoard.tsx) — Kanban board of legal matters.
    - [client/components/AIRecommendation.tsx] — AI panel (visual placeholder).
    - [client/components/ComplianceHealthScore.tsx] — Compliance KPI widget.
    - [client/components/ContractViewModal.tsx] — Contract viewer modal.
    - [client/components/DashboardHeader.tsx] — Header & top controls.
    - [client/components/Sidebar.tsx] — App navigation.
    - Other pages/widgets: [client/components/QuickOverview.tsx], [client/components/PendingLegalTasks.tsx], [client/components/RealtimeFeed.tsx], [client/components/Gamification.tsx]
  - UI primitives:
    - [`Input`](client/components/ui/input.tsx) — reusable input component (uses [`cn`](client/lib/utils.ts) helper).
    - [client/components/ui/carousel.tsx] — carousel helper & context.
- Backend
  - [server/index.ts](server/index.ts) — Express server entry (dev integration with Vite).
  - [server/routes/](server/routes/) — API route handlers (demo / stub endpoints).
- Shared
  - [shared/api.ts](shared/api.ts) — shared TypeScript interfaces used by client & server.
- Config / tooling
  - [package.json](package.json) — scripts & dependencies.
  - [vite.config.ts](vite.config.ts) and [vite.config.server.ts](vite.config.server.ts) — build/dev config.
  - [tailwind.config.ts](tailwind.config.ts) — Tailwind configuration.
  - [AGENTS.md](AGENTS.md) — project starter notes & conventions.

What is implemented (completed)
- Project skeleton & SPA routing via [client/App.tsx](client/App.tsx) and [`Index`](client/pages/Index.tsx).
- Dashboard layout with main sections:
  - Kanban: [`LegalKanbanBoard`](client/components/LegalKanbanBoard.tsx)
  - Header: [client/components/DashboardHeader.tsx]
  - KPI tiles & widgets: [client/components/ComplianceHealthScore.tsx], [client/components/QuickOverview.tsx]
  - Sidebar: [client/components/Sidebar.tsx]
  - AI recommendation visual: [client/components/AIRecommendation.tsx]
- Reusable UI primitives and utilities (e.g., [`Input`](client/components/ui/input.tsx), [`cn`](client/lib/utils.ts)).
- Express server bootstrap: [server/index.ts] with demo routes under [server/routes/].
- Shared types: [shared/api.ts] for client/server contract.

Useful file references (quick links to open in the IDE)
- [client/App.tsx](client/App.tsx)
- [client/pages/Index.tsx](client/pages/Index.tsx)
- [`LegalKanbanBoard`](client/components/LegalKanbanBoard.tsx)
- [`Input`](client/components/ui/input.tsx)
- [`cn`](client/lib/utils.ts)
- [server/index.ts](server/index.ts)
- [shared/api.ts](shared/api.ts)
- [AGENTS.md](AGENTS.md)
