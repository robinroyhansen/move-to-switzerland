# Move to Switzerland

Premium multilingual relocation and concierge advisory site for high-net-worth and ultra-high-net-worth individuals and families moving to Switzerland.

## Live product
- Live site: https://move-to-switzerland.vercel.app/en
- Status: deployed on Vercel, final custom domain still pending
- Brand owners: Adrian Burgi and Robin Roy Krigslund-Hansen

## Purpose
The site is designed to establish trust with referral-driven private-clients who need a single coordinator for relocation, tax structuring, residency, company setup, family-office work, banking access, health concierge, and soft-landing support in Switzerland.

## Stack
- Next.js 15
- TypeScript
- Tailwind CSS v4
- `next-intl`
- Vercel deployment

## Core product areas
- Premium homepage and brand positioning
- Services overview plus 10 service-detail pages
- Why Switzerland pages and canton comparison
- Case studies, about, contact, privacy, and imprint flows
- 15-language rollout with RTL support where required
- Mobile sticky CTA and WhatsApp conversion path

## Integrations and platform notes
- Localization is handled via `next-intl`
- Structured SEO coverage includes sitemap, hreflang, and JSON-LD
- WhatsApp CTA is part of the live conversion flow
- Final domain choice is still unresolved and affects launch completion

## Important content rules
- Keep the tone discreet, premium, and UHNW-appropriate
- Preserve the legal/compliance language, especially the FIDLEG disclaimer
- Do not casually downgrade translation quality or luxury register in non-English locales

## Useful files
- `QA-CHECKLIST.md` for QA notes
- `src/app/[locale]/**` for localized routes
- `src/messages/**` for locale content
- `vercel.json` for deployment config

## Local development
```bash
npm install
npm run dev
```

## Documentation status
This README was added during the cross-project documentation sweep because the repo previously had no project-level documentation beyond code and QA artifacts.
