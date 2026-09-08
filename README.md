# FlowState Website

The official marketing site for **FlowState** — an offline-first, local-first productivity suite for developers.

**Live:** [flowstate.xevesk.com](https://flowstate.xevesk.com)  
**Desktop App:** [github.com/xevesklabs/FlowState](https://github.com/xevesklabs/FlowState)

---

## What is FlowState?

FlowState is a zero-latency desktop productivity app. All your tasks, habits, notes, and Pomodoro sessions live entirely on your device using IndexedDB. No cloud. No subscriptions. No privacy trade-offs.

This repository is the **marketing website** — a React + Vite single-page app that showcases the product and hosts the download link.

---

## Stack

| Layer | Tech |
|---|---|
| Frontend | React 19 + Vite |
| Styling | Pure CSS with custom design tokens |
| Icons | Lucide React |
| Fonts | Playfair Display · JetBrains Mono · Inter |
| Backend API | `flowstate-api` (separate repo) — Express + Node + MongoDB |
| Deployment | Vercel → `flowstate.xevesk.com` |

---

## Project Structure

```
flowstate-website/
├── index.html                    # Entry HTML (SEO + OG meta tags)
├── vite.config.js
├── package.json
├── .gitignore
├── .env.example                  # Environment variable template
├── README.md
├── docs/
│   ├── architecture.md           # Full technical architecture
│   └── changelog.md              # Feature history
└── src/
    ├── main.jsx                  # React entry
    ├── App.jsx                   # Root — assembles all sections
    ├── index.css                 # Design tokens + global styles
    ├── lib/
    │   └── api.js                # API endpoint config
    ├── components/
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   ├── KanbanMockup.jsx / .css
    │   ├── DashboardMockup.jsx / .css
    │   ├── NotesMockup.jsx / .css
    │   └── PomodoroMockup.jsx / .css
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

## Local Development

**1. Install dependencies:**
```bash
npm install
```

**2. Set up environment variables:**
```bash
cp .env.example .env
```
Then open `.env` and set `VITE_API_URL` to your deployed `flowstate-api` URL.  
Leave it as `http://localhost:5000` if running the API locally.

**3. Start the dev server:**
```bash
npm run dev
# → http://localhost:5173
```

**4. Production build:**
```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `VITE_API_URL` | Base URL of the deployed `flowstate-api` | `http://localhost:5000` |

> ⚠️ Never commit `.env`. It is in `.gitignore`. Use `.env.example` as the template.

---

## Deployment to flowstate.xevesk.com

1. Push this repo to GitHub
2. Connect it to [Vercel](https://vercel.com)
3. Set `VITE_API_URL` as an environment variable in the Vercel dashboard
4. In your domain registrar, add:
   ```
   CNAME  flowstate  →  cname.vercel-dns.com
   ```
5. Add `flowstate.xevesk.com` as a custom domain in Vercel → it auto-provisions HTTPS

---

## How it connects to flowstate-api

The download button calls:
```
GET https://your-api.onrender.com/api/downloads/windows
```
This hits the `flowstate-api`, increments the MongoDB download counter, then redirects the user to the `.exe` installer file.

User data (tasks, habits, notes) **never** touches this website or the API — it stays entirely on the user's device inside the desktop app.

---

## Documentation

- [`docs/architecture.md`](docs/architecture.md) — component tree, design system, conventions
- [`docs/changelog.md`](docs/changelog.md) — full feature history
