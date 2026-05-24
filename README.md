# Move to Switzerland

Premium multilingual relocation and concierge advisory site for high-net-worth and ultra-high-net-worth individuals and families moving to Switzerland.

## Live product
- Live site: https://move-to-switzerland.com/en
- Status: live on Vercel with custom domain configured
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
- Production domain is configured at `move-to-switzerland.com`
- The confidential intake form posts to `/api/contact` and sends through a server-side Resend workflow when configured

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

## Contact form environment
The private recipient must stay server-side only. Do not expose it through `NEXT_PUBLIC_*` variables or frontend copy.

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=...
CONTACT_FROM_EMAIL="Move to Switzerland <contact@move-to-switzerland.com>"
```

Optional local smoke testing:

```bash
CONTACT_FORM_DRY_RUN=true npm run dev
```

## Documentation status
This README was added during the cross-project documentation sweep because the repo previously had no project-level documentation beyond code and QA artifacts.
