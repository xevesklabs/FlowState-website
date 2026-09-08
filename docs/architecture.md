# FlowState Website — Architecture

## Overview

`flowstate-website` is the **React 19 + Vite** marketing site for the FlowState desktop productivity app. It is the frontend layer of the broader MERN stack, split across two repositories:

| Repo | Role | Stack |
|---|---|---|
| `flowstate-website` | Marketing site (this repo) | React + Vite (deployed to `flowstate.xevesk.com`) |
| `flowstate-api` | Anonymous telemetry + download tracking | Express + Node + MongoDB Atlas |

---

## Frontend Architecture

### Entry Point
- `index.html` → `src/main.jsx` → `src/App.jsx`
- `App.jsx` mounts a global `IntersectionObserver` (via `useScrollReveal`) that drives `.reveal` entrance animations for all sections.
- All sections are stacked vertically in a single-page layout (no routing needed).

### Section Composition
```
App.jsx
├── Navbar          (fixed sticky top)
├── Hero            (above-the-fold)
├── Stats           (trust bar)
├── Features        (bento grid)
├── Showcase        (app UI mockup viewer)
├── Download        (conversion CTA)
└── Footer
```

### Design System
- All design tokens are defined as CSS custom properties in `src/index.css`.
- The palette mirrors the FlowState desktop app exactly to maintain brand cohesion.
- Typography: Playfair Display (headings), Inter (body), JetBrains Mono (labels/badges).
- No CSS framework — pure CSS with custom variables for full control and minimal bundle size.

### API Communication
- `src/lib/api.js` centralizes all endpoint URLs.
- The API base URL is read from `import.meta.env.VITE_API_URL` (Vite env var).
- The site communicates with `flowstate-api` only for:
  1. Download button redirects (`GET /api/downloads/:platform`)
  2. Live download count display (`GET /api/stats`) — optional widget

### State Management
- No global state library. Local `useState`/`useEffect` per component.
- `useDownloadCount` hook encapsulates the single async API call for download stats.

---

## Styling Standards

- Uses standard CSS with custom CSS variables defined in `src/index.css`.
- Dark premium theme (`#030303` void background → `#111111` panels).
- Entrance animations driven by `IntersectionObserver` — class `.reveal` toggled to `.reveal.visible`.
- Hover transforms kept subtle (`translateY(-1px)`, `translateY(-2px)`) — never jarring.
- Grain/noise overlay applied at `opacity: 0.025` via a fixed `div.grain-overlay`.

---

## Deployment

- **Platform:** Vercel (recommended) or any static host
- **Domain:** `flowstate.xevesk.com`
- **DNS:** `CNAME flowstate → cname.vercel-dns.com`
- **Build command:** `npm run build`
- **Output directory:** `dist/`
- **Required env var:** `VITE_API_URL` → deployed `flowstate-api` URL

---

## Folder Conventions

- Each section lives in `src/sections/SectionName.jsx` + `SectionName.css`
- Each shared component lives in `src/components/ComponentName.jsx` + `ComponentName.css`
- API glue code lives in `src/lib/`
- Custom hooks live in `src/hooks/`

*Rule: Never import styles globally from a section file. Each component owns its own `.css` file.*
