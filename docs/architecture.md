# FlowState Website — Architecture

## Overview

`flowstate-website` is the **React 19 + Vite** marketing site for the FlowState desktop productivity app. It is the frontend layer of the broader MERN stack, split across two repositories:

| Repo | Role | Stack |
|---|---|---|
| `flowstate-website` | Marketing site (this repo) | React 19 + Vite, deployed to `flowstate.xevesk.com` |
| `flowstate-api` | Anonymous telemetry + download tracking | Express + Node + MongoDB Atlas |

---

## Frontend Architecture

### Entry Point
```
index.html → src/main.jsx → src/App.jsx
```
- `App.jsx` mounts a global `IntersectionObserver` via `useScrollReveal()` that adds the `.visible` class to any `.reveal` element when it enters the viewport, driving all scroll-entrance animations across every section.
- All sections are stacked vertically in a single-page layout. No client-side routing needed.

### Component Tree
```
App.jsx
├── <div class="grain-overlay" />   ← Fixed noise texture overlay (opacity 0.025)
├── Navbar                          ← Sticky, scroll-aware glassmorphism top bar
├── main
│   ├── Hero                        ← Above-the-fold with KanbanMockup
│   ├── Stats                       ← 4-item horizontal trust bar
│   ├── Features                    ← Asymmetric 3-column bento grid
│   ├── Showcase                    ← Tab switcher + app screen mockups
│   └── Download                    ← Conversion CTA + OS selector
└── Footer                          ← Brand column, links, social icons
```

### CSS Mockup Components
These are pure-CSS replicas of the FlowState app screens used in the Hero and Showcase sections. They can be swapped for real screenshots at any time by replacing the component with an `<img>` tag.

| Component | Renders |
|---|---|
| `KanbanMockup` | 3-column Kanban board with window chrome, task cards, and priority badges |
| `DashboardMockup` | Sidebar nav, 30-day heatmap grid, urgent tasks, habit launchpad |
| `NotesMockup` | Split-pane with note sidebar list and rich-text editor panel |
| `PomodoroMockup` | SVG circular progress ring, mode tabs, controls, daily stats row |

---

## Design System

All design tokens are CSS custom properties in `src/index.css`. The palette mirrors the FlowState desktop app exactly for brand cohesion.

### Color Palette
```css
--bg-void:    #030303;   /* Page background */
--bg-darker:  #050505;   /* Sidebar backgrounds */
--bg-dark:    #0a0a0a;   /* Mockup backgrounds */
--bg-panel:   #111111;   /* Card surfaces */
--bg-raised:  #161616;   /* Hover surfaces */
--border-dim:    #1a1a1a;
--border-color:  #222222;
--border-bright: #333333;
--text-primary:   #ebebeb;
--text-secondary: #888888;
--text-muted:     #444444;
--accent-green:  #5c8a63;
--accent-red:    #b84b4b;
--accent-orange: #c27d38;
--accent-blue:   #4a6fa5;
```

### Typography
```css
--font-serif: 'Playfair Display', Georgia, serif;  /* Section headings */
--font-sans:  'Inter', sans-serif;                  /* Body text */
--font-mono:  'JetBrains Mono', monospace;          /* Labels, badges, code */
```

### Scroll-Reveal System
- Elements tagged `.reveal` start at `opacity: 0; transform: translateY(24px)`.
- `App.jsx` runs a single `IntersectionObserver` (threshold `0.12`) that adds `.visible` when an element enters the viewport and then `unobserve`s it.
- Stagger delays: `.reveal-delay-1` through `.reveal-delay-5` add `transition-delay` in 100ms increments.

### Grain Overlay
A fixed `div.grain-overlay` using an inline SVG `feTurbulence` noise filter at `opacity: 0.025` adds a subtle film-grain texture across the entire page without affecting interactivity (`pointer-events: none`).

---

## API Communication

`src/lib/api.js` centralizes all endpoint URLs:

```js
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000';
```

The site communicates with `flowstate-api` only for:
1. **Download redirects** — `GET /api/downloads/:platform` (increments count, redirects to installer)
2. **Live stats** — `GET /api/stats` (optional download counter widget)

> **TODO:** Replace `localhost:5000` in `.env` with the deployed `flowstate-api` URL when it goes live.

---

## Folder Structure

```
flowstate-website/
├── index.html                    # Entry HTML with SEO + OG meta tags
├── vite.config.js                # Vite config with @vitejs/plugin-react
├── package.json
├── .gitignore
├── .env.example                  # Environment variable template
├── README.md
├── docs/
│   ├── architecture.md           # This file
│   └── changelog.md
└── src/
    ├── main.jsx                  # React root
    ├── App.jsx                   # Layout, section assembly, scroll-reveal
    ├── index.css                 # Design tokens + global styles
    ├── lib/
    │   └── api.js                # API base URL + endpoint map
    ├── components/
    │   ├── Navbar.jsx / .css     # Sticky glassmorphism navbar
    │   ├── Footer.jsx / .css     # 3-column footer
    │   ├── KanbanMockup.jsx / .css
    │   ├── DashboardMockup.jsx / .css
    │   ├── NotesMockup.jsx / .css
    │   └── PomodoroMockup.jsx / .css
    ├── sections/
    │   ├── Hero.jsx / .css       # Above-the-fold hero
    │   ├── Stats.jsx / .css      # Trust bar
    │   ├── Features.jsx / .css   # Bento feature grid
    │   ├── Showcase.jsx / .css   # Tab switcher + mockup viewer
    │   └── Download.jsx / .css   # Download CTA + OS selector
    └── hooks/
        └── useDownloadCount.js   # Fetches live download count from flowstate-api
```

---

## Styling Conventions

- Each component owns its own `.css` file imported directly into its `.jsx` — no global section imports.
- Hover transforms are kept subtle: `translateY(-1px)` or `translateY(-2px)` max.
- Accent colors applied at `0.06–0.18` opacity for backgrounds, `0.3` for borders, full for icons.
- All `border-radius` on cards: `6–12px`. Window chrome mockups: `10–12px`.

---

## Deployment

| Setting | Value |
|---|---|
| Platform | Vercel |
| Domain | `flowstate.xevesk.com` |
| DNS record | `CNAME flowstate → cname.vercel-dns.com` |
| Build command | `npm run build` |
| Output directory | `dist/` |
| Required env var | `VITE_API_URL` → deployed `flowstate-api` URL |

*Rule: Never commit `.env`. Always use `.env.example` as the template.*
