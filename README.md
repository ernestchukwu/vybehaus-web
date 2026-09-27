# VYBEHAUS Collective — independent events demo

A responsive React/Vite demo for VYBEHAUS Collective. This edition is intentionally structured as an independent organiser website rather than an open event marketplace: only VYBEHAUS-managed events appear on the public site.

The featured campaign is **Albania Takeover ’27 — 17–19 September 2027, Albanian Riviera**. Its visual language blends the existing black VYBEHAUS design with the takeover concept: acid-lime details, violet/pink light, destination imagery and the “3 Nights. One Coast. All VYBE.” campaign line.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this folder to GitHub/GitLab/Bitbucket.
2. Import the repository into Vercel.
3. Vercel should detect Vite automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

`vercel.json` contains the SPA rewrite needed for direct links such as `/event/albania-takeover-2027`.

## Product structure

- Public home / brand experience
- VYBEHAUS-owned events catalogue
- Albania Takeover 2027 campaign + priority-list flow
- Individual event pages
- Ticket selection and simulated checkout for on-sale events
- Saved events / ticket area
- Responsive mobile navigation

There is **no public “create event” flow**. In production, event records can be supplied by a private organiser/admin backend and API while the public site remains fully VYBEHAUS branded.

## Demo note

The priority-list and checkout flows are front-end demonstrations only. No form is submitted and no payment is processed.
