# Plan — New product (Trio Mini Breloques) in store + dedicated landing page

## Goal

Add the second product — **"Patron Crochet PDF — Trio de Mini Breloques Amigurumi (Grenouille, Panda & Citron)" at 3,49 €** — to the store, redesign `/boutique` as a **modern product grid** (2 products), and build a **dedicated landing page** for it following the same structure as the existing kit landing page.

**User decisions:** checkout link = placeholder (`https://payhip.com/b/YOUR-LINK-HERE`) swappable in one line; product images = styled placeholders until real visuals exist.

## Context

- Store (`src/pages/StorePage.tsx`) currently showcases only the kit as a single product page.
- Kit landing = `App.tsx` composition: Hero → WhyChoose → PatternsGrid → Gallery → Experience → PdfInside → HowItWorks → FinalOffer → FAQ → Footer + mobile sticky bar.
- `src/config/catalog.ts` already models `PRODUCTS[]` — designed for multiple products.
- Shared chrome available: `Navbar`, `Footer`, `LegalModal`, `PageHero`, `Seo`.

## Changes

### 1. Product data — `src/config/catalog.ts`
- Add `BRELOQUES_CHECKOUT_URL = 'https://payhip.com/b/YOUR-LINK-HERE'` (commented as placeholder).
- Add 2nd `PRODUCTS` entry: slug `breloques-amigurumi`, name "Trio de Mini Breloques Amigurumi (Grenouille, Panda & Citron)", price 3,49 €, badge « Nouveau », tagline « Transformez vos restes de fil en accessoires irrésistibles ! », description + features from the provided copy (14 pages, 3 modèles, 100 % français, 20+ photos & diagrammes, bonus lifestyle), `images: []` → renders placeholder.
- Export helper `isProductImagePlaceholder` (or empty-image check).

### 2. Store redesign — `src/pages/StorePage.tsx` → modern product grid
- Keep `PageHero` (title « La boutique », subtitle) + trust badges + free-resources cross-link.
- Replace the single-product showcase (gallery/details/"ce que contient le kit") with a **responsive 2-col product card grid**:
  - Card: image (or styled placeholder — brand gradient + YarnIcon + « Visuel à venir »), badge (Nouveau / Best-seller), category, title, short description, price, dual CTA → **« Découvrir »** (product landing: `/` for kit, new route for breloques) + **« Acheter »** (checkout URL).
  - Modern details: rounded-2xl, hover lift + image zoom, aria labels.
- Update JSON-LD: `ItemList` of both products (keep existing Product schema on home page).

### 3. New landing page — `src/pages/BreloquesLandingPage.tsx` (route `/patron-mini-breloques-amigurumi`)
Sections mirroring the kit landing, all copy in French from the provided product info:
1. **Hero** — dark immersive section (reuse pattern from kit Hero): eyebrow « Patron PDF · 3 breloques », headline, price pill 3,49 €, CTA → checkout, trust row (14 pages · 100 % français · Téléchargement immédiat). Visual = placeholder block.
2. **Les 3 modèles** — grid of 3 cards: Grenouille farceuse, Panda mignon, Citron pétillant (placeholder visuals + descriptions).
3. **Ce qui est inclus** — checklist section (3 modèles en un guide, terminologie française, 20+ photos HD & diagrammes, bonus lifestyle) + PDF mockup placeholder.
4. **Caractéristiques techniques** — spec cards: Niveau Débutant, Matériel (fil Cat. 4, crochet 4,0 mm, yeux de sécurité, anneaux porte-clés), Format PDF A4.
5. **Comment ça fonctionne** — 3 steps (Acheter → Télécharger → Crocheter), adapted copy.
6. **Offre finale** — dark green band, price 3,49 €, « Paiement unique · Accès immédiat », CTA, disclaimer.
7. **FAQ** — product-specific Q/A (quels outils, niveau, format, langue, accès, remboursement numérique).
- Chrome: `Navbar` + `Footer` + `LegalModal` + `Seo`.
- **Sticky mobile bar**: parameterize `MobileStickyBar` with optional `checkoutUrl`/`price` props (defaults = kit values → zero change for home), reuse on new landing.

### 4. SEO + routing
- `src/config/site.ts`: add `breloques: '/patron-mini-breloques-amigurumi'`.
- `src/content/seo.ts`: `BRELOQUES_LANDING_PAGE` record (title/description/keywords/ogImage/`Product` JSON-LD @ 3.49 EUR — ogImage = placeholder-safe home image for now).
- `src/Root.tsx`: route case.
- `src/content/blog.ts`: register in `BLOG_PAGES` + `SITEMAP_PATHS`.
- `scripts/prerender.mjs`: add route to `BLOG_ROUTES`.

### 5. Wiring updates
- Store cards → new landing; landing CTAs → `BRELOQUES_CHECKOUT_URL`.
- No nav header change needed (store already linked); landing reachable from store only.

## Out of scope

- Real product images / real Payhip URL (config swaps later).
- Changes to the kit landing content.

## Verification

1. `npm run lint` (tsc).
2. `npm run build` — prerender outputs `dist/patron-mini-breloques-amigurumi/index.html` with title/meta/Product JSON-LD (price 3.49), sitemap updated.
3. `npm run dev` — store grid renders 2 cards (1 placeholder), kit card → `/`, breloques card → landing, both CTAs correct, landing FAQ/sticky bar work, mobile menu OK.
