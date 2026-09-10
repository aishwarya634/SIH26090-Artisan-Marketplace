# SIH26090 — AI-Driven Market Linkage and Smart Cataloging Mobile Application for Marginalized Artisans

A full-stack web application that helps marginalized artisans register, showcase their products, get AI-assisted product cataloging, and connect with relevant marketplaces and buyers.

## Problem Statement
SIH26090 — AI-Driven Market Linkage and Smart Cataloging Mobile Application for Marginalized Artisans.

## Tech Stack

**Frontend:** React (Vite), React Router, Axios
**Backend:** Node.js, Express, MongoDB (Mongoose)
**AI Modules:** Image classification, product description generation, translation, recommendation (prototype/mock, pluggable with real AI services later)

## Project Structure

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm
- MongoDB (local or Atlas connection string)

### Clone the repository
```bash
git clone https://github.com/aishwarya634/SIH26090-Artisan-Marketplace.git
cd SIH26090-Artisan-Marketplace
```

### Frontend Setup
```bash
cd client
npm install
npm run dev
```
Runs on the local Vite dev server URL shown in the terminal (typically `http://localhost:5173`).

### Backend Setup
```bash
cd server
npm install
npm run dev
```
Runs on `http://localhost:5000`.

### Environment Variables
Copy `.env.example` to `.env` in the relevant folder(s) and fill in real values. Never commit real `.env` files.

## Branching Model

| Branch | Purpose |
|---|---|
| `main` | Stable, production-ready code |
| `develop` | Integration branch — all features merge here first |
| `member-2` to `member-6` | Individual feature branches |

Pull Requests always target `develop`, never `main`. See [docs/contribution-guide.md](docs/contribution-guide.md) for full workflow.

## Team

| Member | Area |
|---|---|
| Member 1 | Integration, architecture, shared files, testing |
| Member 2 | Landing page + common UI |
| Member 3 | Artisan registration + profile + dashboard |
| Member 4 | Marketplace + product management |
| Member 5 | Backend APIs + database |
| Member 6 | AI + smart cataloging + market linkage |

## Application Flow

Artisan Registration → Profile/Dashboard → Add Product → AI Smart Cataloging → Artisan Review → Product Saved → Marketplace → Search/Filter → Market Linkage Recommendations

## License
See [LICENSE](LICENSE).