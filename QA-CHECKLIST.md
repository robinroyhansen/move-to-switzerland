# QA & Review Checklist — Move to Switzerland

> Browser-based verification checklist for pre-launch and ongoing QA.
> Run through this checklist before every major deployment.

---

## 1. Lighthouse Performance

- [ ] **Performance ≥ 90** on homepage (mobile + desktop)
- [ ] **Accessibility ≥ 95** on all pages
- [ ] **Best Practices ≥ 95** on all pages
- [ ] **SEO ≥ 95** on all pages
- [ ] LCP (Largest Contentful Paint) < 2.5s
- [ ] FID / INP (Interaction to Next Paint) < 200ms
- [ ] CLS (Cumulative Layout Shift) < 0.1
- [ ] TTFB < 800ms
- [ ] No render-blocking resources flagged
- [ ] Font display: `swap` on all custom fonts (Playfair Display, DM Serif, Fraunces, etc.)

### Pages to Test
| Page | Mobile | Desktop | Notes |
|------|--------|---------|-------|
| Homepage | ☐ | ☐ | Hero image load critical |
| /services | ☐ | ☐ | 10 service cards |
| /about | ☐ | ☐ | |
| /contact | ☐ | ☐ | Form + map |
| /guides (hub) | ☐ | ☐ | Content-heavy |
| /guides/[canton] | ☐ | ☐ | Test 3+ cantons |
| /lump-sum-taxation | ☐ | ☐ | Key landing page |
| /[lang] variants | ☐ | ☐ | EN, DE, AR at minimum |

---

## 2. Mobile & Responsive

- [ ] **iPhone SE** (375px) — no horizontal scroll, readable text
- [ ] **iPhone 14/15** (390px) — primary mobile breakpoint
- [ ] **iPad** (768px) — tablet layout works
- [ ] **iPad Pro** (1024px) — no layout breaks
- [ ] **Desktop 1440px** — design as intended
- [ ] **Ultrawide 2560px** — content doesn't stretch awkwardly
- [ ] Navigation hamburger works and closes properly on mobile
- [ ] Language selector accessible on mobile
- [ ] Touch targets ≥ 44×44px (especially CTA buttons)
- [ ] No fixed-position elements blocking content on scroll (mobile)
- [ ] Hero section readable on all sizes
- [ ] Service cards stack properly on mobile
- [ ] Arabic RTL layout renders correctly on all breakpoints

---

## 3. Links

- [ ] **All internal links resolve** (no 404s) — run `npx broken-link-checker`
- [ ] **External links open in new tab** (`target="_blank" rel="noopener"`)
- [ ] Footer links (legal, privacy, imprint) all work
- [ ] Language switcher links go to correct locale pages
- [ ] Canton guide internal cross-links work
- [ ] No orphaned pages (every page reachable from nav or sitemap)
- [ ] Anchor links (#sections) scroll to correct position
- [ ] Logo links to homepage (/ or /[lang])
- [ ] Breadcrumbs on sub-pages link correctly
- [ ] No `javascript:void(0)` or `href="#"` placeholders left

---

## 4. Forms

### Contact / Inquiry Form
- [ ] All required fields show validation errors when empty
- [ ] Email field validates format
- [ ] Phone field accepts international formats (+41, +971, etc.)
- [ ] Form submits successfully → confirmation message shown
- [ ] Submission reaches backend/email (test with real address)
- [ ] Honeypot or reCAPTCHA in place (no spam)
- [ ] Form works on mobile (keyboard doesn't overlap inputs)
- [ ] Loading state shown during submission
- [ ] Error state shown on failure (network error)
- [ ] Form resets after successful submission
- [ ] Privacy consent checkbox required before submit

### Guide Download Forms (if applicable)
- [ ] PDF downloads trigger correctly
- [ ] Email capture stores to CRM/database
- [ ] Double opt-in flow works (GDPR/Swiss DPA compliance)

---

## 5. Meta Tags & Open Graph

### Per-Page Checks
- [ ] `<title>` unique per page, ≤ 60 chars
- [ ] `<meta name="description">` unique per page, ≤ 160 chars
- [ ] `<link rel="canonical">` set correctly (no trailing slashes, correct locale)
- [ ] `og:title` set
- [ ] `og:description` set
- [ ] `og:image` set (1200×630 recommended) — luxury/trust imagery
- [ ] `og:url` set and matches canonical
- [ ] `og:type` = "website" (or "article" for guides)
- [ ] `og:locale` correct for each language version
- [ ] `twitter:card` = "summary_large_image"
- [ ] `twitter:title` + `twitter:description` set

### Multi-language
- [ ] `hreflang` tags present on every page
- [ ] `hreflang="en"` → /en/...
- [ ] `hreflang="de"` → /de/...
- [ ] `hreflang="ar"` → /ar/...
- [ ] `hreflang="x-default"` → /en/... (or root)
- [ ] No self-referencing hreflang errors
- [ ] Validate with Google's hreflang testing tool

---

## 6. Sitemap

- [ ] `sitemap.xml` exists at root
- [ ] All public pages included
- [ ] No draft/staging pages included
- [ ] `<lastmod>` dates accurate
- [ ] Language alternates included per URL (`xhtml:link` hreflang)
- [ ] No URLs returning 404 or redirect in sitemap
- [ ] Sitemap ≤ 50MB / ≤ 50,000 URLs
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster Tools

---

## 7. Robots.txt

- [ ] `robots.txt` exists at root
- [ ] `Sitemap:` directive points to correct sitemap URL
- [ ] Admin/staging/draft pages blocked (`Disallow: /admin`, `/draft`, `/staging`)
- [ ] API routes blocked (`Disallow: /api/`)
- [ ] No accidental `Disallow: /` blocking entire site
- [ ] Test with Google's robots.txt tester
- [ ] `X-Robots-Tag` headers correct on dynamic pages (if applicable)

---

## 8. Images

- [ ] All images have `alt` text (descriptive, not keyword-stuffed)
- [ ] Hero/banner images use Next.js `<Image>` or `<picture>` with responsive srcset
- [ ] Images served as WebP/AVIF (modern formats)
- [ ] No images > 500KB (hero can be up to 200KB compressed)
- [ ] Lazy loading on below-fold images (`loading="lazy"`)
- [ ] Priority loading on hero/LCP image (`priority` or `fetchpriority="high"`)
- [ ] No broken image links (console errors)
- [ ] Favicon set (multiple sizes: 16×16, 32×32, 180×180 apple-touch)
- [ ] OG image renders correctly when shared on LinkedIn/WhatsApp/Telegram
- [ ] Images look sharp on Retina displays (2x resolution available)
- [ ] Swiss/alpine imagery is original or properly licensed (no generic stock)
- [ ] No text baked into images (inaccessible, untranslatable)

---

## 9. Core Web Vitals (Field Data)

> Run after 28+ days of real traffic via CrUX

- [ ] **LCP** < 2.5s (75th percentile)
- [ ] **INP** < 200ms (75th percentile)
- [ ] **CLS** < 0.1 (75th percentile)
- [ ] Check PageSpeed Insights for field data
- [ ] Check Google Search Console → Core Web Vitals report
- [ ] No URL groups failing CWV
- [ ] Mobile and desktop both passing

---

## 10. Analytics & Tracking

- [ ] **Google Analytics 4** (or chosen analytics) installed
- [ ] Page views tracking on all pages
- [ ] Events tracking: contact form submit, guide download, CTA clicks
- [ ] Conversion goal set: inquiry form submission
- [ ] No PII in analytics (emails, phone numbers)
- [ ] Analytics respects cookie consent (Swiss DPA / GDPR)
- [ ] Cookie banner present and functional
- [ ] Cookie banner doesn't block content on mobile
- [ ] UTM parameters preserved through navigation
- [ ] Google Search Console property verified
- [ ] Bing Webmaster Tools property verified (optional)

---

## 11. Security & Legal (Switzerland-specific)

- [ ] HTTPS everywhere (no mixed content)
- [ ] HSTS header set
- [ ] CSP headers configured (no inline-unsafe where possible)
- [ ] Privacy Policy page exists (linked in footer)
- [ ] Imprint/Impressum page exists (Swiss requirement for commercial sites)
- [ ] Cookie policy compliant with Swiss DPA (revDSG)
- [ ] Contact information includes physical Swiss address
- [ ] Data processing for form submissions documented
- [ ] No third-party trackers loading without consent

---

## 12. Content Quality

- [ ] No placeholder text ("Lorem ipsum", "Coming soon")
- [ ] No AI artifacts ("As an AI", "I'd be happy to help")
- [ ] Spelling and grammar checked (EN, DE, AR)
- [ ] Legal/regulatory claims reviewed by Adrian (tax, immigration specifics)
- [ ] Phone numbers formatted correctly (Swiss: +41 XX XXX XX XX)
- [ ] Canton-specific information verified for accuracy
- [ ] Client profiles/testimonials (if any) are real or clearly labeled as examples
- [ ] Office addresses correct (Zurich, Zug, Schwyz)
- [ ] Copyright year is current (2026)

---

## 13. Cross-Browser

- [ ] Chrome (latest)
- [ ] Safari (latest — critical for iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari iOS (iPhone)
- [ ] Chrome Android
- [ ] Samsung Internet (relevant for ME market)

---

## 14. Arabic (RTL) Specific

- [ ] `dir="rtl"` set on Arabic pages
- [ ] Layout mirrors correctly (nav, content flow, buttons)
- [ ] Arabic typography renders beautifully (font choice tested)
- [ ] Numbers display correctly (Western vs Arabic-Indic numerals — use Western)
- [ ] No LTR text bleeding into RTL layout
- [ ] Contact form labels/placeholders in Arabic
- [ ] CTA buttons text doesn't overflow in Arabic

---

## Pre-Launch Sign-off

| Area | Status | Checked By | Date |
|------|--------|------------|------|
| Lighthouse Performance | ☐ | | |
| Mobile Responsive | ☐ | | |
| Links | ☐ | | |
| Forms | ☐ | | |
| Meta & OG Tags | ☐ | | |
| Sitemap | ☐ | | |
| Robots.txt | ☐ | | |
| Images | ☐ | | |
| Core Web Vitals | ☐ | | |
| Analytics | ☐ | | |
| Security & Legal | ☐ | | |
| Content Quality | ☐ | | |
| Cross-Browser | ☐ | | |
| Arabic RTL | ☐ | | |
| **Robin Final Review** | ☐ | Robin | |

---

*Created: 2026-03-31 | Project: Move to Switzerland | Template version: 1.0*
