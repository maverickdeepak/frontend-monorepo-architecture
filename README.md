# CommerceOS Monorepo

CommerceOS is a frontend monorepo for a fictional e-commerce administration platform. It demonstrates modular frontend architecture patterns, package boundaries, and multi-app orchestration using React, TypeScript, Vite, and Turbo.

This repo is structured as a set of independently scoped apps that share common platform capabilities from a central package layer.

## Overview

The platform is composed of a host app shell plus domain-specific feature apps for commerce operations, such as:

- Dashboard
- Orders
- Inventory
- Catalog
- Customers
- Users
- Settings
- Discounts
- Authentication
- Analytics

The goal of the repo is to model a realistic frontend architecture where shared concerns live in packages while business domains remain isolated in app-level modules.

## Architecture

This monorepo uses a workspace model:

- `apps/` contains the business-domain applications and the host shell
- `packages/` contains reusable shared libraries, UI primitives, and tooling
- `turbo.json` orchestrates build and task execution across workspaces

The app shell composes the feature apps and acts as the integration layer. Shared dependencies are centralized to keep domain boundaries explicit and reusable.

## Repository structure

```text
.
├── apps/
│   ├── analytics/
│   ├── app-shell/
│   ├── authentication/
│   ├── catalog/
│   ├── customers/
│   ├── dashboard/
│   ├── discounts/
│   ├── inventory/
│   ├── orders/
│   ├── settings/
│   └── users/
├── packages/
│   ├── shared/
│   ├── tooling/
│   └── ui/
├── package.json
├── turbo.json
├── README.md
└── .gitignore
```

## Applications

### App shell

- `apps/app-shell` 
- Hosts the monorepo shell and orchestrates the application layout
- Composes feature apps through shared routing and navigation patterns

### Feature apps

- `apps/dashboard` – overview and summary views
- `apps/orders` – order management and workflows
- `apps/inventory` – stock tracking and availability
- `apps/catalog` – product publishing and catalog management
- `apps/customers` – customer information and account views
- `apps/users` – user and role management
- `apps/settings` – app configuration and preferences
- `apps/discounts` – promotions and pricing adjustments
- `apps/authentication` – sign-in and access-related flows
- `apps/analytics` – reporting and metrics dashboards

## Shared packages

- `packages/shared` – shared API logic, domain helpers, router utilities, theme helpers, mocks, and providers
- `packages/ui` – reusable UI primitives and shared interface components
- `packages/tooling` – tooling and configuration used across the monorepo

## Tech stack

- React 18
- TypeScript
- Vite
- Turbo
- npm workspaces
- TanStack Query
- TanStack Router
- Tailwind CSS
- MSW for mock API behavior

## Prerequisites

- Node.js 20+
- npm 10+

## Getting started

Install dependencies:

```bash
npm install
```

Run all apps in development mode with Turbo:

```bash
npm run dev
```

Build the workspace:

```bash
npm run build
```

Run type checking:

```bash
npm run typecheck
```

Preview built apps:

```bash
npm run preview
```

Check package boundaries:

```bash
npm run boundaries
```

## Notes

- This project is designed as a learning and architecture reference, not a production-ready commerce platform.
- Authentication and persistence are intentionally lightweight or mocked for demonstration purposes.
- MSW is used to simulate API interactions in local development.

## Useful commands

```bash
npm run dev
npm run build
npm run typecheck
npm run preview
npm run boundaries
```

## Related workshop context

This repository is aligned with the Frontend Architecture workshop theme of evolving from monoliths toward micro-frontend patterns while keeping the codebase understandable and maintainable.
