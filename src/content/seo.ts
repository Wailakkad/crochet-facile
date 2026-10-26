import { absoluteUrl, ROUTES } from '../config/site';

export interface SeoRecord {
  /** Unique <title> tag of the page. */
  title: string;
  description: string;
  keywords?: string;
  /** Root-relative path used for canonical + og:url. */
  path: string;
  ogType: 'website' | 'article';
  ogImage: string;
  ogImageAlt?: string;
  /** Falls back to `title` when omitted. */
  ogTitle?: string;
  jsonLd?: unknown;
}

const escapeHtml = (value: string): string =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * Builds the <head> tags of a page as an HTML string.
 * Used by the static prerender step (entry-server) and mirrored at runtime by <Seo />.
 * Every generated tag carries data-seo so it can be replaced cleanly on client navigation.
 */
export function buildHeadHtml(record: SeoRecord): string {
  const url = absoluteUrl(record.path);
  const title = record.ogTitle ?? record.title;
  const tags: string[] = [];

  tags.push(`<title data-seo="1">${escapeHtml(record.title)}</title>`);
  tags.push(
    `<meta data-seo="1" name="description" content="${escapeHtml(record.description)}" />`
  );
  if (record.keywords) {
    tags.push(
      `<meta data-seo="1" name="keywords" content="${escapeHtml(record.keywords)}" />`
    );
  }
  tags.push(`<link data-seo="1" rel="canonical" href="${escapeHtml(url)}" />`);

  tags.push(`<meta data-seo="1" property="og:type" content="${record.ogType}" />`);
  tags.push(`<meta data-seo="1" property="og:locale" content="fr_FR" />`);
  tags.push(`<meta data-seo="1" property="og:site_name" content="Crochet Facile" />`);
  tags.push(`<meta data-seo="1" property="og:title" content="${escapeHtml(title)}" />`);
  tags.push(
    `<meta data-seo="1" property="og:description" content="${escapeHtml(record.description)}" />`
  );
  tags.push(`<meta data-seo="1" property="og:url" content="${escapeHtml(url)}" />`);
  tags.push(
    `<meta data-seo="1" property="og:image" content="${escapeHtml(record.ogImage)}" />`
  );
  if (record.ogImageAlt) {
    tags.push(
      `<meta data-seo="1" property="og:image:alt" content="${escapeHtml(record.ogImageAlt)}" />`
    );
  }

  tags.push(`<meta data-seo="1" name="twitter:card" content="summary_large_image" />`);
  tags.push(`<meta data-seo="1" name="twitter:title" content="${escapeHtml(title)}" />`);
  tags.push(
    `<meta data-seo="1" name="twitter:description" content="${escapeHtml(record.description)}" />`
  );
  tags.push(
    `<meta data-seo="1" name="twitter:image" content="${escapeHtml(record.ogImage)}" />`
  );

  if (record.jsonLd) {
    tags.push(
      `<script data-seo="1" type="application/ld+json">${JSON.stringify(
        record.jsonLd
      )}</script>`
    );
  }

  return tags.join('\n    ');
}

const HOME_TITLE = '4 Décorations de Noël au Crochet | Patrons PDF Français';
const HOME_DESCRIPTION =
  'Découvrez 4 patrons de décorations de Noël au crochet en français : sapin, clochettes, mini chaussette et guirlande. Kit PDF à 7,90 €.';
const HOME_KEYWORDS =
  'décoration noël crochet, crochet noël, patron crochet noël PDF, décorations de Noël au crochet, patrons crochet en français, guirlande de Noël au crochet, sapin de Noël au crochet, clochettes de Noël au crochet, chaussette de Noël au crochet';
const HOME_IMAGE =
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/hero_back_img.jpg';

/**
 * Same Product structured data as the static index.html head, re-applied at runtime
 * so the schema survives client-side navigation back to the homepage.
 */
export const HOME_PRODUCT_JSON_LD = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: '4 Décorations de Noël au Crochet – Patrons PDF en Français',
  image: ['https://payhip.com/b/PDcX2'],
  description:
    'Collection de 4 patrons de crochet de Noël au format PDF en français : sapin amigurumi, clochettes festives, mini chaussette et guirlande de sapins.',
  brand: {
    '@type': 'Brand',
    name: 'Crochet Facile',
  },
  offers: {
    '@type': 'Offer',
    url: 'https://payhip.com/b/PDcX2',
    priceCurrency: 'EUR',
    price: '7.90',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
};

export const HOME_PAGE: SeoRecord = {
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,
  path: '/',
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt:
    'Les 4 décorations de Noël au crochet : sapin amigurumi, clochettes, mini chaussette et guirlande',
  jsonLd: HOME_PRODUCT_JSON_LD,
};

const FREE_CHRISTMAS_TITLE =
  'Cahier gratuit – 40 Idées de Noël au Crochet à Croquer | Crochet Facile';
const FREE_CHRISTMAS_DESCRIPTION =
  'Télécharge gratuitement un carnet de 40 idées de décorations et amigurumis de Noël au crochet. 40 photos, 4 univers kawaii, pour imaginer tes prochaines créations. Ce n’est pas un tutoriel, mais un carnet d’inspiration.';

export const FREE_CHRISTMAS_LEAD_PAGE: SeoRecord = {
  title: FREE_CHRISTMAS_TITLE,
  description: FREE_CHRISTMAS_DESCRIPTION,
  keywords:
    'idées noël crochet, carnet gratuit crochet, amigurumi noël, décoration noël crochet, noël kawaii crochet',
  path: ROUTES.freeChristmasIdeas,
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt:
    'Carnet gratuit : 40 idées de Noël au crochet à croquer — Crochet Facile',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: FREE_CHRISTMAS_TITLE,
    description: FREE_CHRISTMAS_DESCRIPTION,
    url: absoluteUrl(ROUTES.freeChristmasIdeas),
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Crochet Facile',
      url: absoluteUrl(ROUTES.home),
    },
  },
};
