# System Architecture

## Overview

This project is a three-part system: a React frontend, an Express/MongoDB backend, and a set of modular AI services for cataloging and market linkage. Each part is developed independently but communicates through a shared API contract.

## High-Level Components

## Frontend (client/)

- Built with React + Vite.
- Routing handled centrally in `App.jsx` using React Router.
- Two layout types:
  - `MainLayout` — public pages (Home, Login, Register, Marketplace, Product Details, Registration).
  - `DashboardLayout` — authenticated artisan pages (Dashboard, Profile, Add Product, Smart Catalog, Market Linkage).
- Global auth state managed via `AuthContext`, backed by `authService.js`.
- All backend calls go through `services/api.js` (centralized Axios instance with interceptors for auth tokens and 401 handling).
- Shared values live in `utils/constants.js`; shared pure functions in `utils/helpers.js`.

## Backend (server/)

- Express REST API, organized by feature: `controllers/`, `routes/`, `models/`, `middleware/`, `services/`.
- MongoDB via Mongoose models: `User`, `Artisan`, `Product`, `MarketOpportunity`.
- Middleware handles auth (`authMiddleware.js`), file uploads (`uploadMiddleware.js`), and centralized error handling (`errorMiddleware.js`).
- `services/aiService.js` and `services/catalogService.js` bridge backend requests to the AI modules.

## AI Modules (ai/)

- Kept modular and independent of both frontend and backend logic, so a real AI model/API can be swapped in later without touching client or server code.
- Sub-modules: `image-classification/`, `product-description/`, `translation/`, `recommendation/`.
- AI output is always treated as a **suggestion** — the artisan reviews and edits it before it becomes final product data. This is enforced in the SmartCatalog UI flow, not assumed at the API level.

## Data Flow (End-to-End)

1. Artisan registers → profile created.
2. Artisan logs into Dashboard.
3. Artisan adds a product / uploads a product image.
4. Image + details sent to AI service for smart cataloging.
5. AI suggests category, description, and metadata.
6. Artisan reviews and edits the AI suggestions in an editable catalog preview.
7. Final product is saved to the database.
8. Product appears in the Marketplace, searchable/filterable.
9. Market Linkage service surfaces relevant buyer/market recommendations based on the product/artisan profile.

## Shared API Contract

At minimum, all modules agree on these product concepts: title/name, description, category/craft, artisan reference, price, images, and AI-generated catalog suggestions. The authoritative schema is documented in `docs/database/database-schema.md` and `docs/api/api-documentation.md`, maintained by Member 5, and used consistently across frontend, backend, and AI modules.

## Integration Ownership

Member 1 owns this document, `App.jsx`, layouts, `AuthContext`, shared `utils/`, and is responsible for resolving merge conflicts and coordinating API/data contracts across the team.