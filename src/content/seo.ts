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

const SAPIN_PATRON_TITLE =
  'Sapin au crochet – Patron gratuit en français | Crochet Facile';
const SAPIN_PATRON_DESCRIPTION =
  'Télécharge gratuitement le patron PDF du sapin de Noël au crochet en français. Un projet simple et festif à réaliser pour décorer ta maison. Sans inscription.';

export const SAPIN_PATRON_PAGE: SeoRecord = {
  title: SAPIN_PATRON_TITLE,
  description: SAPIN_PATRON_DESCRIPTION,
  keywords:
    'sapin au crochet, patron sapin noël crochet, patron gratuit crochet, sapin noël crochet PDF, patron crochet français',
  path: ROUTES.sapinPatron,
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt: 'Sapin de Noël au crochet — patron gratuit en français',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SAPIN_PATRON_TITLE,
    description: SAPIN_PATRON_DESCRIPTION,
    url: absoluteUrl(ROUTES.sapinPatron),
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Crochet Facile',
      url: absoluteUrl(ROUTES.home),
    },
  },
};

const CACA_LICORNE_TITLE =
  'Caca de Licorne Amigurumi – Patron Crochet Gratuit en Français | Crochet Facile';
const CACA_LICORNE_DESCRIPTION =
  'Crochetez votre propre Caca de Licorne, un amigurumi kawaii pastel et pailleté. Patron PDF gratuit de 7 pages en français, instructions tour par tour (49 tours). Téléchargement immédiat après inscription.';

export const CACA_LICORNE_PAGE: SeoRecord = {
  title: CACA_LICORNE_TITLE,
  description: CACA_LICORNE_DESCRIPTION,
  keywords:
    'caca de licorne amigurumi, patron crochet gratuit, amigurumi kawaii crochet, patron licorne crochet français, amigurumi pastel spiral',
  path: ROUTES.cacaLicorne,
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt: 'Caca de Licorne amigurumi au crochet — patron PDF gratuit en français',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: CACA_LICORNE_TITLE,
    description: CACA_LICORNE_DESCRIPTION,
    url: absoluteUrl(ROUTES.cacaLicorne),
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Crochet Facile',
      url: absoluteUrl(ROUTES.home),
    },
  },
};

const STORE_TITLE =
  'Boutique – Patrons de Crochet PDF en Français | Crochet Facile';
const STORE_DESCRIPTION =
  'Achetez vos patrons de crochet PDF en français : la collection de 4 décorations de Noël (sapin, clochettes, mini chaussette, guirlande) à 7,90 €. Téléchargement immédiat.';

export const STORE_PAGE: SeoRecord = {
  title: STORE_TITLE,
  description: STORE_DESCRIPTION,
  keywords:
    'boutique crochet, patron crochet PDF, patron noël crochet, acheter patron crochet, kit crochet noël',
  path: ROUTES.store,
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt: 'Boutique Crochet Facile — patrons de crochet PDF en français',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: STORE_TITLE,
    description: STORE_DESCRIPTION,
    url: absoluteUrl(ROUTES.store),
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Crochet Facile',
      url: absoluteUrl(ROUTES.home),
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '4 Décorations de Noël au Crochet – Patrons PDF en Français',
          url: absoluteUrl(ROUTES.home),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Trio de Mini Breloques Amigurumi (Grenouille, Panda & Citron)',
          url: absoluteUrl(ROUTES.breloques),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: '5 Gnomes de Noël au Crochet : 1 Base, 5 Déco Uniques',
          url: absoluteUrl(ROUTES.gnomesNoel),
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Lapin Amigurumi – Patron Crochet PDF Facile (Débutant)',
          url: absoluteUrl(ROUTES.lapinAmigurumi),
        },
        {
          '@type': 'ListItem',
          position: 5,
          name: 'Bonhomme de Neige au Crochet – Amigurumi 22 cm avec Chapka et Écharpe',
          url: absoluteUrl(ROUTES.bonhommeNeige),
        },
      ],
    },
  },
};

const BRELOQUES_TITLE =
  'Trio Mini Breloques Amigurumi – Grenouille, Panda & Citron (PDF) | Crochet Facile';
const BRELOQUES_DESCRIPTION =
  'Patron PDF de 3 mini breloques amigurumi en français : Grenouille, Panda et Citron. Guide de 14 pages, 20+ photos HD, niveau débutant, téléchargement immédiat à 3,49 €.';

export const BRELOQUES_LANDING_PAGE: SeoRecord = {
  title: BRELOQUES_TITLE,
  description: BRELOQUES_DESCRIPTION,
  keywords:
    'breloque amigurumi, patron breloque crochet, panda amigurumi patron, grenouille amigurumi, citron crochet, porte-clés amigurumi, patron crochet débutant PDF',
  path: ROUTES.breloques,
  ogType: 'website',
  ogImage:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222377/hero_-_Trio_de_Mini_Breloques_Amigurumi_image.jpg',
  ogImageAlt:
    'Trio de mini breloques amigurumi : grenouille, panda et citron au crochet',
  jsonLd: [
    {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: 'Trio de Mini Breloques Amigurumi (Grenouille, Panda & Citron) – Patron PDF',
      image:
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222376/Votre_Patron_de_Breloques_image.jpg',
      description:
        'Guide PDF de 14 pages en français avec 3 patrons de mini breloques amigurumi : grenouille, panda et citron. Niveau débutant, 20+ photos HD et diagrammes.',
      brand: {
        '@type': 'Brand',
        name: 'Crochet Facile',
      },
      offers: {
        '@type': 'Offer',
        url: absoluteUrl(ROUTES.breloques),
        priceCurrency: 'EUR',
        price: '3.49',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: BRELOQUES_TITLE,
      description: BRELOQUES_DESCRIPTION,
      url: absoluteUrl(ROUTES.breloques),
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Crochet Facile',
        url: absoluteUrl(ROUTES.home),
      },
    },
  ],
};

const GNOMES_NOEL_TITLE =
  '5 Gnomes de Noël au Crochet – 1 Base, 5 Déco Uniques (PDF Français) | Crochet Facile';
const GNOMES_NOEL_DESCRIPTION =
  'Patron PDF de 5 gnomes de Noël au crochet en français : Père Noël, sapin, bonhomme de neige, flocon et pain d’épices sur une seule base. 23 pages, tour par tour, téléchargement immédiat à 2,49 €.';

export const GNOMES_NOEL_LANDING_PAGE: SeoRecord = {
  title: GNOMES_NOEL_TITLE,
  description: GNOMES_NOEL_DESCRIPTION,
  keywords:
    'gnome noël crochet, gnome amigurumi patron, patron gnome noël PDF, père noël amigurumi, bonhomme de neige crochet, flocon de neige crochet, décoration noël crochet, patron crochet français',
  path: ROUTES.gnomesNoel,
  ogType: 'website',
  ogImage:
    'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394794/Gnomes_de_No%C3%ABl_au_Crochet_hero_image.jpg',
  ogImageAlt:
    'Les 5 gnomes de Noël au crochet : Père Noël, sapin, bonhomme de neige, flocon et pain d’épices',
  jsonLd: [
    {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: '5 Gnomes de Noël au Crochet : 1 Base, 5 Déco Uniques – Patron PDF en Français',
      image: [
        'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394874/Tes_5_Gnomes_de_No%C3%ABl_image.jpg',
      ],
      description:
        'Patron PDF de 23 pages en français : un seul corps, un seul bonnet, un seul nez et une seule barbe pour créer 5 gnomes de Noël uniques (Père Noël, sapin, bonhomme de neige, flocon de neige, pain d’épices).',
      brand: {
        '@type': 'Brand',
        name: 'Crochet Facile',
      },
      offers: {
        '@type': 'Offer',
        url: absoluteUrl(ROUTES.gnomesNoel),
        priceCurrency: 'EUR',
        price: '2.49',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: GNOMES_NOEL_TITLE,
      description: GNOMES_NOEL_DESCRIPTION,
      url: absoluteUrl(ROUTES.gnomesNoel),
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Crochet Facile',
        url: absoluteUrl(ROUTES.home),
      },
    },
  ],
};

const LAPIN_AMIGURUMI_TITLE =
  'Lapin Amigurumi – Patron Crochet PDF Facile Débutant (10 cm) | Crochet Facile';
const LAPIN_AMIGURUMI_DESCRIPTION =
  'Patron PDF de lapin amigurumi en français, niveau débutant : 6 pages, tour par tour, cercle magique expliqué. Lapin kawaii d’environ 10 cm, téléchargement immédiat à 1,97 €.';

export const LAPIN_AMIGURUMI_LANDING_PAGE: SeoRecord = {
  title: LAPIN_AMIGURUMI_TITLE,
  description: LAPIN_AMIGURUMI_DESCRIPTION,
  keywords:
    'lapin amigurumi, patron lapin crochet, lapin amigurumi débutant, patron crochet français PDF, amigurumi facile, lapin kawaii crochet',
  path: ROUTES.lapinAmigurumi,
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt: 'Lapin amigurumi au crochet — patron PDF facile en français',
  jsonLd: [
    {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: 'Lapin Amigurumi – Patron Crochet PDF Facile (Débutant)',
      description:
        'Patron PDF de 6 pages en français pour crocheter un lapin amigurumi d’environ 10 cm. Niveau débutant, cercle magique expliqué, instructions tour par tour.',
      brand: {
        '@type': 'Brand',
        name: 'Crochet Facile',
      },
      offers: {
        '@type': 'Offer',
        url: absoluteUrl(ROUTES.lapinAmigurumi),
        priceCurrency: 'EUR',
        price: '1.97',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: LAPIN_AMIGURUMI_TITLE,
      description: LAPIN_AMIGURUMI_DESCRIPTION,
      url: absoluteUrl(ROUTES.lapinAmigurumi),
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Crochet Facile',
        url: absoluteUrl(ROUTES.home),
      },
    },
  ],
};

const BONHOMME_NEIGE_TITLE =
  'Bonhomme de Neige au Crochet – Amigurumi 22 cm Chapka & Écharpe (PDF) | Crochet Facile';
const BONHOMME_NEIGE_DESCRIPTION =
  'Patron PDF bonhomme de neige de 22 cm en français : chapka ushanka, écharpe verte, moufles rouges. Facile, photos des étapes clés, 10+ pages, téléchargement immédiat à 2,90 €.';

export const BONHOMME_NEIGE_LANDING_PAGE: SeoRecord = {
  title: BONHOMME_NEIGE_TITLE,
  description: BONHOMME_NEIGE_DESCRIPTION,
  keywords:
    'bonhomme de neige crochet, amigurumi bonhomme de neige, patron noël crochet, chapka amigurumi, patron crochet facile français, décoration noël crochet',
  path: ROUTES.bonhommeNeige,
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt:
    'Bonhomme de neige au crochet avec chapka et écharpe — patron PDF en français',
  jsonLd: [
    {
      '@context': 'https://schema.org/',
      '@type': 'Product',
      name: 'Bonhomme de Neige au Crochet – Amigurumi 22 cm avec Chapka et Écharpe',
      description:
        'Patron PDF de plus de 10 pages en français : bonhomme de neige de 22 cm avec chapka ushanka, écharpe (crochet ou tricot), moufles et nez en carotte. Niveau facile.',
      brand: {
        '@type': 'Brand',
        name: 'Crochet Facile',
      },
      offers: {
        '@type': 'Offer',
        url: absoluteUrl(ROUTES.bonhommeNeige),
        priceCurrency: 'EUR',
        price: '2.90',
        priceValidUntil: '2027-12-31',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: BONHOMME_NEIGE_TITLE,
      description: BONHOMME_NEIGE_DESCRIPTION,
      url: absoluteUrl(ROUTES.bonhommeNeige),
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Crochet Facile',
        url: absoluteUrl(ROUTES.home),
      },
    },
  ],
};

const FREE_RESOURCES_TITLE =
  'Ressources Gratuites – Patrons & Carnets PDF | Crochet Facile';
const FREE_RESOURCES_DESCRIPTION =
  'Téléchargez gratuitement nos ressources crochet : le carnet de 40 idées de Noël, le patron du sapin et l’amigurumi Caca de Licorne en français. Sans engagement.';

export const FREE_RESOURCES_PAGE: SeoRecord = {
  title: FREE_RESOURCES_TITLE,
  description: FREE_RESOURCES_DESCRIPTION,
  keywords:
    'patron gratuit crochet, ressources gratuites crochet, carnet idées noël crochet, patron sapin noël crochet gratuit',
  path: ROUTES.freeResources,
  ogType: 'website',
  ogImage: HOME_IMAGE,
  ogImageAlt: 'Ressources gratuites Crochet Facile — patrons et carnets PDF',
  jsonLd: {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: FREE_RESOURCES_TITLE,
    description: FREE_RESOURCES_DESCRIPTION,
    url: absoluteUrl(ROUTES.freeResources),
    inLanguage: 'fr-FR',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Crochet Facile',
      url: absoluteUrl(ROUTES.home),
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: '40 Idées de Noël au Crochet à Croquer',
          url: absoluteUrl(ROUTES.freeChristmasIdeas),
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Sapin au crochet — patron gratuit',
          url: absoluteUrl(ROUTES.sapinPatron),
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Caca de Licorne Amigurumi — patron gratuit',
          url: absoluteUrl(ROUTES.cacaLicorne),
        },
      ],
    },
  },
};
