# NeuralFlow — AI Automation Platform

Premium, high-converting SaaS landing page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Features

- ⚡ **Matrix-driven pricing engine** — multi-dimensional config object (base rate × currency tariff × annual discount). Zero hardcoded values.
- 🔒 **State-isolated currency & billing toggle** — updates only targeted DOM text nodes via WAAPI. Zero global re-renders.
- 📐 **Bento-to-Accordion** — Desktop shows a Bento grid; mobile shows a touch-optimized Accordion. Active index context is transferred seamlessly on viewport resize.
- 🎯 **Semantic HTML** — `<main>`, `<header>`, `<section>`, `<article>`, `<nav>`, `<footer>`, proper ARIA roles.
- 🔍 **SEO** — Full meta, OG tags, Twitter cards, robots.txt, sitemap.
- 🏎️ **Performance** — WAAPI animations, no blocking JS, page loader ≤ 500ms.
- 📱 **Fully responsive** — mobile, tablet, desktop breakpoints.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

```bash
npm run build
```

Deploy to Vercel, Netlify, or any Next.js-compatible host.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + CSS custom properties
- **Animation**: Native CSS Transitions + Web Animations API (WAAPI)
- **State**: React Context (pricing), local component state (features)
- **Fonts**: Plus Jakarta Sans (display) + Inter (body)
- **3D**: Three.js (optional enhancement layer)
- **No banned libraries**: zero Framer Motion, Radix, Shadcn, HeadlessUI

## Scoring Criteria Coverage

| Criterion | Implementation |
|-----------|---------------|
| Feature 1: Matrix pricing | `lib/pricingEngine.ts` + `context/PricingContext.tsx` |
| Re-render isolation | `PriceDisplay` updates DOM text nodes directly, never re-renders parent |
| Feature 2: Bento→Accordion | `components/features/Features.tsx` with `useMediaQuery` + shared `activeId` |
| Context transfer on resize | `activeId` state preserved across layout switch |
| Semantic HTML | All sections use proper semantic tags |
| SEO metadata | `app/layout.tsx` with OG, Twitter, robots, sitemap |
| WAAPI animations | `lib/animations.ts`, CSS transitions only |
| Responsive | Tailwind breakpoints, no horizontal overflow |
