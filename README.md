# Digital Business Card

A modern, animated digital business card built with TypeScript and Vite —
a lightweight, single-page contact hub with vCard export, a QR code, and a
glassmorphic UI.

**Live:** [pfrank.pr3nc2.com.ng/card](https://pfrank.pr3nc2.com.ng/card)

## Overview

This project is a full migration of a standalone HTML/JavaScript prototype
into a modular, type-safe, production-ready codebase — no framework, no
runtime bloat, just clean TypeScript and modern tooling. The original
visual design, animations, and interactions are preserved exactly; only
the engineering underneath changed.

## Features

- 🎴 Glassmorphic card UI with animated neon border, floating profile ring,
  and ambient background particles
- 📇 One-tap **Save Contact** — generates and downloads a vCard (`.vcf`)
  client-side, no server required
- 📱 QR code linking directly to the card, rendered on-device via canvas
- 🔗 Quick actions for WhatsApp, phone, email, website, portfolio, and GitHub
- 🖼️ Graceful image fallbacks (initials/logo badges) if profile or logo
  assets are missing
- ♿ Accessible by default: semantic landmarks, ARIA labels, visible focus
  states, and full `prefers-reduced-motion` support
- ⚡ Zero UI framework — pure TypeScript, ES modules, and CSS

## Technology Stack

| Layer      | Choice                        |
|------------|--------------------------------|
| Language   | TypeScript (strict mode)      |
| Build tool | Vite                           |
| Styling    | Plain CSS (custom properties) |
| QR codes   | [`qrcode`](https://www.npmjs.com/package/qrcode) |
| Fonts      | Inter & Space Grotesk (Google Fonts) |

## Project Structure

```
digital-business-card/
├── public/
│   ├── logo.svg              # your logo (add before deploying)
│   ├── images/frank.jpg      # profile photo (add before deploying)
│   └── ASSETS.md
├── src/
│   ├── main.ts                # app bootstrap
│   ├── constants.ts           # contact info, config, DOM ids
│   ├── types.ts                # shared interfaces
│   ├── vcard.ts                 # vCard generation + download
│   ├── qrcode.ts                # QR code rendering
│   ├── toast.ts                  # toast notification
│   ├── imageFallback.ts           # graceful image fallback handling
│   ├── animations.ts               # reduced-motion aware particle logic
│   └── style.css
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Starts a local dev server with hot module reload at `http://localhost:5173`.

## Build

```bash
npm run build
```

Type-checks the project and produces an optimized production build in `dist/`.

```bash
npm run preview
```

Serves the production build locally for a final check before deploying.

## Deployment

This project is configured to be served from the `/card` subpath (see
`base: '/card/'` in `vite.config.ts`), matching its production URL at
`pfrank.pr3nc2.com.ng/card`. To deploy:

1. Run `npm run build`.
2. Upload the contents of `dist/` to the `/card` path on your web server.
3. Add your real `logo.svg` and `images/frank.jpg` to `public/` beforehand
   (see `public/ASSETS.md`) so they're included in the build.

## License

Personal project — all rights reserved.
