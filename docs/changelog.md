# Changelog

All notable changes to **flowstate-website** will be documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [Unreleased]

---

## Phase 1 — Foundation & Design System

### Added
- **Project Scaffold:** Initialized Vite + React 19 project in `flowstate-website/`.
- **Design Token System:** Defined full CSS custom property palette in `src/index.css`, mirroring the FlowState desktop app's dark premium theme (`#030303` → `#111111`, Playfair Display / JetBrains Mono / Inter).
- **Global Styles:** Grain overlay, scroll-reveal animation system (`.reveal` / `.reveal.visible` via `IntersectionObserver`), button variants (`.btn-primary`, `.btn-ghost`), section label + heading utilities.
- **`src/lib/api.js`:** Centralized API endpoint config reading `VITE_API_URL` from environment variables. Placeholder: `localhost:5000`.
- **Navbar:** Sticky top navigation with scroll-aware glassmorphism (`backdrop-filter: blur`), desktop nav links, Download CTA button, and mobile hamburger drawer.
- **Footer:** 3-column grid layout with brand column (logo + tagline + social icons), Product and Developer link groups, and bottom copyright bar.
- **`src/App.jsx`:** Root component assembling all sections. Mounts global `useScrollReveal` `IntersectionObserver` hook.
- **Documentation:** `README.md`, `docs/architecture.md`, `docs/changelog.md` written and committed.

### Tech
- React 19, Vite 8, Lucide React, Pure CSS
- Target deployment: `flowstate.xevesk.com` via Vercel
