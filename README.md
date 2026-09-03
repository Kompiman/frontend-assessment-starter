# Frontend Assessment — Starter Repo

Welcome, and thanks for taking the time. This should take about **2 hours — please don't go over.** We're testing judgment under time pressure, not stamina.

> **You do NOT need any cloud account or backend.** The API this app talks to is a stand-in and doesn't need to return real data. This is a code review and fix task — everything is done locally.

## The situation

This is a small Next.js (App Router) + TypeScript storefront. It **runs** — but it was put together carelessly by someone in a hurry. Your job is to review it like a senior engineer reviewing a colleague's pull request: find what's wrong, fix what matters most, and clearly explain the rest.

## Running it

```
npm install
npm run dev      # http://localhost:3000  (then visit /products)
```

The `/products` page calls an external API (`api.example-store.com`) that won't resolve — that's fine, you're reviewing the code, not the data. Focus on the review.

## What's here

```
app/
  layout.tsx              Root layout.
  page.tsx                Home.
  products/page.tsx       Product listing.
  api/products/route.ts   An API route.
components/
  ProductCard.tsx
  SearchBar.tsx
lib/
  data.ts                 Data fetching.
next.config.js, tsconfig.json, .env.local
```

## What to do (top-down, by priority)

1. **`REVIEW.md` first (~30 min).** Write up the issues you'd flag in a PR: *what's wrong, why it matters, the fix,* and a priority (blocker / should-fix / nice-to-have). This is the most important deliverable. Think across security, correctness, performance, accessibility, and idiomatic Next.js/React.
2. **Fix the highest-impact issues (~75 min).** You won't have time for everything — fix what most reduces real risk and most improves the app, and leave the rest documented. Choosing well *is* the test.
3. **One paragraph (~15 min)** in `REVIEW.md`: if this shipped to production tomorrow, what are the top three things you'd insist on first, and why?

## Show your work

Please include in `REVIEW.md` the output of `npm run build` after your changes (or note any errors it surfaces).

## Submitting

Push your branch (or send a patch) plus `REVIEW.md`. In the follow-up interview we'll screen-share your work and ask you to walk through your reasoning live — and possibly make a small change on the spot — so make sure the decisions are genuinely yours.

Good luck — and remember, a focused fix of the riskiest few things with a clear writeup beats a rushed attempt to fix everything.
