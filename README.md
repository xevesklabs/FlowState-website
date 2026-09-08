# FlowState Website

The official marketing website for **FlowState** — an offline-first, local-first productivity suite for developers.

**Live:** [flowstate.xevesk.com](https://flowstate.xevesk.com)

---

## What is FlowState?

FlowState is a zero-latency desktop productivity app. All your tasks, habits, notes, and Pomodoro sessions live entirely on your device using IndexedDB. No cloud. No subscriptions. No privacy trade-offs.

---

## Architecture

This repository is the **React frontend** (the R in MERN). The backend (`flowstate-api`) is a separate repository that handles anonymous telemetry and download tracking via Express + Node + MongoDB.

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite |
| Styling | Pure CSS (custom variables) |
| Icons | Lucide React |
| Fonts | Playfair Display, JetBrains Mono, Inter |
| Deployment | Vercel → `flowstate.xevesk.com` |
| Backend API | `flowstate-api` (separate repo) |

See [`docs/architecture.md`](docs/architecture.md) for full details.

---

## Local Development

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Environment Variables

Create a `.env` file in the root:

```env
# URL of the deployed flowstate-api backend
# TODO: Replace with your deployed URL when flowstate-api goes live
VITE_API_URL=http://localhost:5000
```

---

## Deployment

This site is deployed to **Vercel** with a custom domain `flowstate.xevesk.com`.

1. Push to GitHub
2. Connect repo to Vercel
3. Add `VITE_API_URL` as an environment variable in Vercel dashboard
4. Add a `CNAME` record in your domain registrar: `flowstate` → `cname.vercel-dns.com`

---

## Project Structure

```
flowstate-website/
├── index.html
├── package.json
├── vite.config.js
├── .env                    # Local env vars (gitignored)
├── .gitignore
├── README.md
├── docs/
│   ├── architecture.md
│   └── changelog.md
└── src/
    ├── main.jsx
    ├── App.jsx             # Root: assembles all sections + scroll-reveal
    ├── index.css           # Design tokens + global styles
    ├── lib/
    │   └── api.js          # API URL config
    ├── components/
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   └── KanbanMockup.jsx
    ├── sections/
    │   ├── Hero.jsx / .css
    │   ├── Stats.jsx / .css
    │   ├── Features.jsx / .css
    │   ├── Showcase.jsx / .css
    │   └── Download.jsx / .css
    └── hooks/
        └── useDownloadCount.js
```

---

## Changelog

See [`docs/changelog.md`](docs/changelog.md).
