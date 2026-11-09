# Plan — Boutique page, Ressources gratuites hub, clean header & modern polish

## Goal

Make the site more professional: add a **store page** (`/boutique`) for the paid kit, add a **free resources hub** (`/ressources-gratuites`) listing the free PDFs, clean the cluttered header/footer links, and apply a consistent modern layout — while keeping the existing brand (cream `#FFF9F2` / forest `#355748`, Cormorant Garamond + DM Sans).

**Confirmed choices:** header = Accueil · Boutique · Ressources gratuites · Blog · FAQ + CTA (anchor links removed) · store = product showcase page · hub = free PDFs only.

## Context

- React 19 + Vite + Tailwind 4, custom mini-router (`src/router.tsx`), static prerender (`scripts/prerender.mjs` → per-route `index.html` + sitemap).
- Header currently has 7 links (4 landing anchors + 2 separate free-resource links + Blog + FAQ); footer nav is home-only anchors.
- Free resources (40-idées carnet, patron sapin) exist as separate pages with no hub linking them.
- Bug found: `/sapin-au-crochet-patron-gratuit` is prerendered but has **no SEO head** (missing from `BLOG_PAGES`) — fix included.

## Changes

### 1. Routes — `src/config/site.ts`
- Add `store: '/boutique'` and `freeResources: '/ressources-gratuites'` to `ROUTES`.

### 2. Shared data — new `src/config/catalog.ts` + `src/config/resources.ts`
- `catalog.ts`: product list (1 entry: name, price, description, images, checkout URL, feature bullets) + the 4 pattern entries, so `PatternsGrid` and the store page share one source (pattern data extracted from `PatternsGrid.tsx`).
- `resources.ts`: free-resource cards (title, description, image, badge, href, CTA label) — carnet (`/40-idees-noel-crochet-gratuit`, badge « Inscription e-mail ») and sapin (`/sapin-au-crochet-patron-gratuit`, badge « Sans inscription »), easy to extend later.

### 3. Shared `PageHero` component — new `src/components/PageHero.tsx`
- Modern inner-page hero: eyebrow label with hairlines, serif H1 with italic accent, subtitle, soft blurred color blobs — used by both new pages (consistent look, reusable later).

### 4. Store page — new `src/pages/StorePage.tsx` (`/boutique`)
- **Product showcase hero**: 2-column — left: image gallery (mockup + collection images from Cloudinary, thumb switching or stacked), right: product title, price `7,90 €`, feature list (4 patrons · PDF en français · téléchargement immédiat · paiement unique), primary CTA → `CHECKOUT_URL`, secondary link → landing detail (`/#le-kit`).
- **« Ce que contient le kit »**: the 4 pattern cards (shared data from `catalog.ts`).
- **Trust strip**: Format PDF · 100 % français · Paiement sécurisé Payhip · Support par e-mail.
- **Cross-link banner** → free resources hub.
- Reuses `Navbar` / `Footer` / `LegalModal` chrome like other pages.

### 5. Free resources hub — new `src/pages/FreeResourcesPage.tsx` (`/ressources-gratuites`)
- `PageHero` + responsive card grid of the 2 free PDFs (image, badge, title, description, CTA arrow).
- Small note that more freebies arrive via the newsletter; **cross-link banner** → store.

### 6. Header cleanup + modernization — `src/components/Navbar.tsx`
- `navLinks` → Accueil `/` · Boutique `/boutique` · Ressources gratuites `/ressources-gratuites` · Blog `/blog` · FAQ `#faq`.
- **Remove**: `#le-kit`, `#les-modeles`, `#pourquoi-ce-kit` anchors and the two individual free-resource links.
- Active-route highlight via `usePath()` (`aria-current="page"` + visual state).
- Internal page links use router `Link` (SPA navigation, scroll-top handled); `#faq` keeps the existing fallback to `/#faq` from other pages.

### 7. Footer cleanup — `src/components/Footer.tsx`
- Navigation column → real pages: Accueil, Boutique, Ressources gratuites, Blog, FAQ (`/#faq`); remove dead `#le-kit` / `#les-modeles` / `#pourquoi-ce-kit` anchors.

### 8. SEO + prerender wiring
- `src/content/seo.ts`: add `STORE_PAGE` (Product JSON-LD) and `FREE_RESOURCES_PAGE` (CollectionPage JSON-LD) records.
- `src/Root.tsx`: cases for the 2 new routes.
- `src/content/blog.ts`: register `/boutique`, `/ressources-gratuites` **and** `SAPIN_PATRON_PAGE` in `BLOG_PAGES` (head bug fix); update `SITEMAP_PATHS`.
- `scripts/prerender.mjs`: add both new routes to `BLOG_ROUTES` + `SITEMAP_PATHS`.

### 9. Removals (cleanup)
- Remove unused `@google/genai` dependency from `package.json` (never imported anywhere).
- All stale anchor/duplicate nav links removed per §6–§7.

## Out of scope (to keep risk low)

- Landing page section rewrites (Hero, FinalOffer, FAQ… stay as-is).
- No new fake content (testimonials etc.), no design-system rewrite.

## Verification

1. `npm run lint` (tsc --noEmit) passes.
2. `npm run build` → confirm prerendered `dist/boutique/index.html`, `dist/ressources-gratuites/index.html`, `dist/sapin-au-crochet-patron-gratuit/index.html` contain real `<title>`/meta/JSON-LD, and `sitemap.xml` lists all routes.
3. `npm run dev` manual checks: header/footer links on home + an inner page, active link state, FAQ anchor from `/boutique`, mobile menu, resource cards, Payhip CTAs, legal modal.
