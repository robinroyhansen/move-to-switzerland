---
title: Visual Refresh - Plan
type: feat
date: 2026-10-31
execution: code
---
# Visual Refresh - Plan

## Goal
Break up text-heavy main pages with visible Swiss photography and useful visual hierarchy, preserving the existing premium identity and every locale's copy.

## Scope and constraints
- Home, cantons, relocation guides, insights, services, about and contact.
- Preserve existing facts, form behavior, links, all 18 locales and RTL.
- Locally stored licensed imagery with a provenance manifest; next/image with dimensions or fixed aspect ratios and sizes. Below-fold imagery lazy-loaded.
- No dependencies added to the production app. No DNS, main, production or contact submission changes.
- Parent owns independent QA, PR and Vercel preview delivery. Production is explicitly excluded.

## Implementation
1. Capture baseline home and relocation guide `/en/relocation/from-denmark` at desktop 1440×1000 and mobile 390×844. Measure Lighthouse using production builds on this machine, same viewport/throttling and repeated runs.
2. Add a small reusable decorative image component and Swiss landscape/city assets with documented licensing. Give home a visible photographic panel and connected process timeline. Add image bands/sidebar imagery to services, contact and about, plus geographic imagery to canton comparison cards. Add visible imagery and numbered workstreams to relocation guides; break long insights with existing-copy callouts and clearer section rhythm.
3. Build/typecheck, inspect all 18 locales' touched route families, exercise canton filtering/contact validation, check RTL and mobile overflow. Capture after screenshots and same-method Lighthouse; remediate measurable performance/CLS regressions.

## Verification
Visual-only changes use browser screenshots and layout/asset checks, not implementation-mirroring unit tests. No existing unit tests in this repo. Run production build, TypeScript, ESLint on touched files, diff whitespace check, browser functional smoke and Lighthouse. Keep screenshots/reports in external task evidence, not the shipped bundle.

## Acceptance
All named page families receive meaningful visuals without copy/claims changes. Images load locally under CSP; layouts remain stable at desktop/mobile and ar/fa/he. Return exact branch/commit and evidence for independent QA; no shipping until parent instruction.
