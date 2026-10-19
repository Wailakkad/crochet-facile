import IMAGES from '../assets/images';
import { absoluteUrl, ROUTES } from '../config/site';
import type { SeoRecord } from './seo';

/* ------------------------------------------------------------------ */
/* Images (existing project photography)                               */
/* ------------------------------------------------------------------ */

const CLOUD = 'https://res.cloudinary.com/dhkyla1rv/image/upload';

export const BLOG_IMAGES = {
  heroCollection: `${CLOUD}/v1792356091/hero_back_img.jpg`,
  ambiance: `${CLOUD}/v1792356091/Ambiance_Salon.jpg`,
  sapin: `${CLOUD}/v1792356092/Sapin_de_No%C3%ABl.jpg`,
  clochettes: `${CLOUD}/v1792356092/Clochettes_de_No%C3%ABl.jpg`,
  chaussette: `${CLOUD}/v1792356091/Mini_chaussette.jpg`,
  guirlande: `${CLOUD}/v1792356092/Guirlande_de_sapins.jpg`,
  workspace: IMAGES.experienceCozy,
  hands: IMAGES.experienceHands,
} as const;

/**
 * Adds an on-the-fly width/quality transformation to a Cloudinary URL so the
 * blog loads small images first. Local bundled assets are returned untouched.
 */
export function resized(url: string, width: number): string {
  if (!url.includes('res.cloudinary.com')) return url;
  return url.replace('/upload/', `/upload/w_${width},q_auto/`);
}

/** Build a srcset for Cloudinary images (undefined for bundled local assets). */
export function srcSetFor(url: string, widths: number[]): string | undefined {
  if (!url.includes('res.cloudinary.com')) return undefined;
  return widths.map((w) => `${resized(url, w)} ${w}w`).join(', ');
}

const ALT = {
  heroCollection:
    'Les 4 décorations de Noël au crochet : sapin amigurumi, clochettes, mini chaussette et guirlande de sapins',
  ambiance:
    'Sapin de Noël au crochet posé sur une table basse dans un salon chaleureux',
  sapin:
    'Sapin de Noël amigurumi au crochet vert avec étoile dorée, nœud rouge et décorations colorées',
  clochettes:
    'Trois clochettes de Noël au crochet rose, jaune et turquoise ornées de rubans',
  chaussette:
    'Mini chaussette de Noël au crochet rouge et blanc avec petit nœud décoratif',
  guirlande:
    'Guirlande de petits sapins plats au crochet verts, rosés, moutarde et bordeaux sur ficelle naturelle',
  workspace:
    'Atelier crochet de Noël : pelotes, crochet et carnet de motifs sur une table en bois',
  hands: 'Mains en train de crocheter une étoile avec un crochet en bois',
} as const;

/* ------------------------------------------------------------------ */
/* Article content types                                               */
/* ------------------------------------------------------------------ */

export interface InlineLink {
  text: string;
  to: string;
}

export type ArticleBlock =
  | { type: 'p'; text: string; link?: InlineLink }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[]; format?: 'bullet' | 'terms' }
  | { type: 'cta'; heading: string; text: string; price: string; button: string };

export interface Article {
  path: string;
  breadcrumbLabel: string;
  category: string;
  title: string;
  intro: string;
  hero: { src: string; alt: string };
  /** Actual publication date of the article (ISO 8601). */
  publishedOn: string;
  blocks: ArticleBlock[];
  related: { title: string; path: string; image: string; imageAlt: string };
  finalCtaLabel: string;
}

/* ------------------------------------------------------------------ */
/* Structured data                                                     */
/* ------------------------------------------------------------------ */

const PUBLISHED_ON = '2026-10-18';

const blogPosting = (input: {
  path: string;
  title: string;
  description: string;
  image: string;
  section: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: input.title,
  description: input.description,
  image: input.image,
  url: absoluteUrl(input.path),
  mainEntityOfPage: { '@type': 'WebPage', '@id': absoluteUrl(input.path) },
  datePublished: PUBLISHED_ON,
  inLanguage: 'fr-FR',
  articleSection: input.section,
  author: { '@type': 'Organization', name: 'Crochet Facile', url: absoluteUrl('/') },
  publisher: {
    '@type': 'Organization',
    name: 'Crochet Facile',
    url: absoluteUrl('/'),
  },
});

const breadcrumbList = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

/* ------------------------------------------------------------------ */
/* Article 1                                                           */
/* ------------------------------------------------------------------ */

export const articleDecorationsNoel: Article = {
  path: ROUTES.decorationsNoel,
  breadcrumbLabel: 'Décorations de Noël au crochet',
  category: 'INSPIRATION NOËL',
  title: '4 décorations de Noël au crochet pour une maison pleine de charme',
  intro:
    "À l'approche des fêtes, pourquoi ne pas apporter une touche personnelle à votre décoration de Noël ? Le crochet permet de créer des ornements faits main, de choisir ses couleurs et de réaliser des décorations que l'on aura plaisir à ressortir chaque année. Si vous cherchez des idées de décorations de Noël au crochet, voici quatre projets pleins de charme : un petit sapin, des clochettes colorées, une mini chaussette et une guirlande de sapins.",
  hero: { src: BLOG_IMAGES.ambiance, alt: ALT.ambiance },
  publishedOn: PUBLISHED_ON,
  blocks: [
    { type: 'h2', text: 'Pourquoi choisir des décorations de Noël au crochet ?' },
    {
      type: 'p',
      text: "Les décorations faites main apportent une dimension personnelle aux fêtes. En réalisant vos propres ornements, vous pouvez adapter les couleurs à votre intérieur, choisir les fils que vous aimez et profiter du plaisir de créer quelque chose de vos mains.",
    },
    {
      type: 'p',
      text: "Le crochet permet également de réaliser des décorations légères, faciles à ranger et à réutiliser d'une année sur l'autre.",
    },
    {
      type: 'p',
      text: "Pour une ambiance traditionnelle, vous pouvez privilégier le rouge, le blanc et le vert sapin. Pour un Noël plus doux, essayez des nuances de rose poudré, de vert sauge et de crème.",
    },

    { type: 'h2', text: '1. Un adorable sapin de Noël au crochet' },
    { type: 'image', src: BLOG_IMAGES.sapin, alt: ALT.sapin },
    {
      type: 'p',
      text: "Le sapin de Noël est l'un des symboles les plus appréciés des fêtes. En version crochet, il devient une petite décoration pleine de personnalité.",
    },
    {
      type: 'p',
      text: "Notre modèle représente un sapin amigurumi vert, décoré d'une étoile jaune, d'un nœud rouge et de petits détails colorés.",
    },
    {
      type: 'p',
      text: "Vous pouvez l'installer sur une étagère, une table ou dans un coin de votre décoration festive. Son apparence joyeuse en fait un projet particulièrement agréable à intégrer dans un univers de Noël fait main.",
    },

    { type: 'h2', text: '2. Des clochettes de Noël colorées' },
    { type: 'image', src: BLOG_IMAGES.clochettes, alt: ALT.clochettes },
    {
      type: 'p',
      text: "Les clochettes de Noël apportent une touche délicate et festive à votre décoration. Notre collection présente trois clochettes au crochet dans des couleurs lumineuses : rose, jaune et turquoise. Leurs rubans décoratifs et leurs petits détails en font des ornements originaux.",
    },
    {
      type: 'p',
      text: "Elles peuvent être présentées ensemble ou réparties dans différents espaces de votre maison. Si vous aimez les décorations de Noël douces et colorées, ce projet mérite une place dans votre sélection.",
    },

    { type: 'h2', text: '3. Une mini chaussette de Noël rouge et blanche' },
    { type: 'image', src: BLOG_IMAGES.chaussette, alt: ALT.chaussette },
    {
      type: 'p',
      text: "La chaussette de Noël évoque immédiatement les traditions et les moments chaleureux de fin d'année. Notre mini chaussette au crochet associe le rouge et le blanc, avec un joli nœud décoratif.",
    },
    {
      type: 'p',
      text: "Elle peut être utilisée comme petit ornement ou intégrée à une composition festive. C'est aussi une belle idée pour personnaliser un coin de votre maison avec une création faite main.",
    },

    { type: 'h2', text: '4. Une guirlande de petits sapins au crochet' },
    { type: 'image', src: BLOG_IMAGES.guirlande, alt: ALT.guirlande },
    {
      type: 'p',
      text: "Une guirlande est une excellente façon d'apporter une touche festive à une étagère, un mur ou une cheminée. Cette version se compose de petits sapins plats au crochet, réalisés dans différentes couleurs.",
    },
    {
      type: 'p',
      text: "Rose poudré, vert sauge, rouge ou moutarde : les possibilités de personnalisation sont nombreuses. Vous pouvez choisir une palette harmonieuse ou mélanger plusieurs couleurs pour créer une décoration joyeuse. La répétition des petits motifs donne à cette guirlande un charme artisanal particulier.",
    },

    { type: 'h2', text: 'Comment harmoniser vos décorations de Noël au crochet ?' },
    {
      type: 'p',
      text: "Pour obtenir un ensemble cohérent, commencez par choisir trois ou quatre couleurs principales. Le vert sapin, le rouge et le crème créent une ambiance traditionnelle. Le rose poudré, le vert sauge et le beige donnent un résultat plus doux et contemporain.",
    },
    {
      type: 'p',
      text: "Vous pouvez également varier les textures de fil, à condition de respecter les recommandations techniques de chaque patron.",
      link: { text: 'chaque patron', to: '/#les-modeles' },
    },
    {
      type: 'p',
      text: "L'objectif est de créer des décorations qui correspondent à votre style et à votre maison.",
    },

    { type: 'h2', text: 'Où trouver les patrons de ces quatre décorations ?' },
    {
      type: 'p',
      text: "Vous aimeriez réaliser ces projets ? Nous avons réuni les quatre modèles dans une collection numérique : « 4 Décorations de Noël au Crochet – Patrons PDF en Français ».",
      link: { text: 'collection numérique', to: '/#les-modeles' },
    },
    {
      type: 'p',
      text: "Le kit comprend les patrons du sapin de Noël, des clochettes, de la mini chaussette et de la guirlande de sapins. Les instructions sont regroupées dans un guide PDF à consulter sur votre appareil ou à imprimer. Vous pouvez ainsi retrouver vos projets dans un seul document et avancer à votre rythme.",
    },
    {
      type: 'cta',
      heading: 'Votre collection de Noël dans un seul PDF',
      text: '4 patrons de décorations de Noël au crochet, en français.',
      price: '7,90 €',
      button: 'Découvrir le kit PDF',
    },

    { type: 'h2', text: 'Un Noël fait main, maille après maille' },
    {
      type: 'p',
      text: "Créer ses propres décorations de Noël, c'est prendre le temps de préparer les fêtes autrement. Que vous préfériez les petits ornements colorés ou les décorations traditionnelles, le crochet offre de nombreuses possibilités créatives.",
    },
    {
      type: 'p',
      text: "Choisissez votre premier projet, préparez votre matériel et laissez votre imagination accompagner vos prochaines mailles.",
      link: { text: 'préparez votre matériel', to: ROUTES.crochetNoelFacile },
    },
  ],
  related: {
    title:
      'Crochet Noël facile : comment choisir vos premiers projets de décoration ?',
    path: ROUTES.crochetNoelFacile,
    image: BLOG_IMAGES.hands,
    imageAlt: ALT.hands,
  },
  finalCtaLabel: 'Découvrir les 4 patrons — 7,90 €',
};

/* ------------------------------------------------------------------ */
/* Article 2                                                           */
/* ------------------------------------------------------------------ */

export const articleCrochetNoelFacile: Article = {
  path: ROUTES.crochetNoelFacile,
  breadcrumbLabel: 'Crochet Noël facile',
  category: 'CONSEILS CROCHET',
  title: 'Crochet Noël facile : comment choisir vos premiers projets de décoration ?',
  intro:
    "Vous aimez l'idée de créer vos propres décorations de Noël, mais vous ne savez pas par quel projet commencer ? Entre les petits ornements, les amigurumis et les guirlandes, il existe de nombreuses possibilités au crochet. Pour profiter pleinement de cette activité, le plus important est de choisir un modèle adapté à votre niveau et de préparer votre matériel. Voici quelques conseils pour organiser vos projets de crochet de Noël.",
  hero: { src: BLOG_IMAGES.hands, alt: ALT.hands },
  publishedOn: PUBLISHED_ON,
  blocks: [
    { type: 'h2', text: '1. Commencez par choisir un projet adapté à votre niveau' },
    {
      type: 'p',
      text: "Tous les modèles de crochet ne demandent pas les mêmes techniques. Certains petits ornements utilisent des points simples, tandis que les amigurumis peuvent nécessiter des augmentations, des diminutions et des étapes d'assemblage.",
    },
    {
      type: 'p',
      text: "Avant de commencer, consultez les techniques utilisées dans le patron. Vérifiez que vous comprenez les abréviations et les instructions proposées. Si vous débutez, privilégiez un modèle correspondant aux points que vous maîtrisez déjà. Un projet bien choisi rend l'apprentissage plus agréable.",
    },

    { type: 'h2', text: '2. Préparez votre matériel avant de crocheter' },
    {
      type: 'p',
      text: "Une bonne préparation vous évite d'interrompre votre ouvrage pour chercher un accessoire manquant. Selon le modèle, vous pourrez avoir besoin :",
    },
    {
      type: 'list',
      items: [
        'De fil adapté au projet.',
        "D'un crochet de la taille recommandée.",
        'De ciseaux.',
        "D'une aiguille à laine.",
        'De marqueurs de mailles.',
        'De rembourrage pour certains amigurumis.',
        "D'accessoires décoratifs selon le patron.",
      ],
    },
    {
      type: 'p',
      text: "La liste exacte du matériel doit toujours être vérifiée dans les instructions du modèle choisi. Le type de fil et la taille du crochet peuvent influencer les dimensions et l'apparence du résultat.",
    },

    { type: 'h2', text: '3. Apprenez à lire les abréviations du crochet' },
    {
      type: 'p',
      text: "Les patrons de crochet utilisent souvent des abréviations pour rendre les instructions plus concises. Parmi les plus courantes en français :",
    },
    {
      type: 'list',
      format: 'terms',
      items: [
        'ml : maille en l’air',
        'mc : maille coulée',
        'ms : maille serrée',
        'dbr : demi-bride',
        'br : bride',
        'aug : augmentation',
        'dim : diminution',
      ],
    },
    {
      type: 'p',
      text: "Les conventions peuvent varier d'un créateur à l'autre. Consultez toujours la légende fournie avec votre patron avant de commencer.",
    },
    {
      type: 'p',
      text: "Prenez également le temps de vérifier votre nombre de mailles à chaque étape.",
    },

    { type: 'h2', text: '4. Quelles décorations de Noël peut-on réaliser au crochet ?' },
    {
      type: 'p',
      text: "Le crochet permet de réaliser de nombreux projets pour les fêtes. Vous pouvez notamment créer des ornements, des petits personnages, des chaussettes décoratives ou des guirlandes. Voici quatre idées à découvrir.",
      link: {
        text: 'quatre idées à découvrir',
        to: ROUTES.decorationsNoel,
      },
    },

    { type: 'h3', text: 'Le sapin de Noël amigurumi' },
    {
      type: 'p',
      text: "Ce petit sapin au crochet apporte une touche joyeuse à votre décoration. Avec sa forme arrondie, son étoile jaune et son nœud rouge, il constitue un projet décoratif plein de personnalité.",
    },
    {
      type: 'p',
      text: "Comme pour tout amigurumi, vérifiez les techniques requises avant de commencer.",
    },
    { type: 'image', src: BLOG_IMAGES.sapin, alt: ALT.sapin },

    { type: 'h3', text: 'Les clochettes de Noël' },
    {
      type: 'p',
      text: "Les clochettes colorées sont une jolie option pour apporter une touche festive à votre intérieur. Notre collection présente trois versions en rose, jaune et turquoise, avec des détails décoratifs.",
    },
    { type: 'image', src: BLOG_IMAGES.clochettes, alt: ALT.clochettes },

    { type: 'h3', text: 'La mini chaussette de Noël' },
    {
      type: 'p',
      text: "Avec ses couleurs rouge et blanc, la mini chaussette rappelle les décorations traditionnelles de Noël. Elle peut être intégrée à une décoration festive ou présentée comme petit ornement.",
    },
    { type: 'image', src: BLOG_IMAGES.chaussette, alt: ALT.chaussette },

    { type: 'h3', text: 'La guirlande de sapins' },
    {
      type: 'p',
      text: "Une guirlande de petits sapins plats permet de jouer avec les couleurs et les associations de fils. Elle peut être suspendue sur une étagère, un mur ou une cheminée.",
    },
    {
      type: 'p',
      text: "Ce type de projet invite également à répéter un motif pour composer une décoration plus longue.",
    },
    { type: 'image', src: BLOG_IMAGES.guirlande, alt: ALT.guirlande },

    { type: 'h2', text: '5. Comment réussir vos projets crochet de Noël ?' },
    {
      type: 'p',
      text: "Avant de commencer, lisez une première fois les instructions du patron. Préparez votre matériel et vérifiez les abréviations.",
    },
    {
      type: 'p',
      text: "Avancez progressivement, sans chercher à terminer le projet trop rapidement. Contrôlez régulièrement le nombre de mailles et observez la forme de votre ouvrage.",
    },
    {
      type: 'p',
      text: "Si une étape semble difficile, relisez-la avant de continuer. Prenez aussi le temps de soigner les finitions : elles contribuent beaucoup au résultat final.",
    },

    { type: 'h2', text: '6. Où trouver des patrons de Noël au crochet en français ?' },
    {
      type: 'p',
      text: "Pour éviter de chercher plusieurs modèles sur différents sites, vous pouvez choisir une collection regroupant plusieurs projets. Chez Crochet Facile, nous proposons un kit numérique comprenant quatre patrons de décorations de Noël au crochet.",
      link: { text: 'kit numérique', to: ROUTES.home },
    },
    { type: 'p', text: 'Vous y retrouverez :' },
    {
      type: 'list',
      items: [
        'Le sapin de Noël.',
        'Les clochettes colorées.',
        'La mini chaussette.',
        'La guirlande de sapins.',
      ],
    },
    {
      type: 'p',
      text: "Les modèles sont réunis dans un PDF en français que vous pouvez consulter sur votre appareil ou imprimer. Le kit est proposé au prix de 7,90 €.",
    },
    {
      type: 'cta',
      heading: 'Prête à préparer vos créations de Noël ?',
      text: 'Découvrez notre collection de quatre patrons PDF en français.',
      price: '7,90 €',
      button: 'Voir les 4 patrons',
    },

    { type: 'h2', text: 'Conclusion : un Noël créatif à votre rythme' },
    {
      type: 'p',
      text: "Le crochet est une belle façon de préparer les fêtes en prenant le temps de créer.",
    },
    {
      type: 'p',
      text: "Choisissez des projets adaptés à votre expérience, préparez votre matériel et avancez à votre rythme.",
    },
    {
      type: 'p',
      text: "Avec de la patience et des instructions adaptées, vous pourrez progressivement enrichir votre décoration de Noël de créations faites main.",
    },
  ],
  related: {
    title: '4 décorations de Noël au crochet pour une maison pleine de charme',
    path: ROUTES.decorationsNoel,
    image: BLOG_IMAGES.ambiance,
    imageAlt: ALT.ambiance,
  },
  finalCtaLabel: 'Découvrir la collection — 7,90 €',
};

/* ------------------------------------------------------------------ */
/* Blog hub                                                            */
/* ------------------------------------------------------------------ */

export interface HubCard {
  category: string;
  title: string;
  description: string;
  path: string;
  image: string;
  imageAlt: string;
}

export const HUB_CARDS: HubCard[] = [
  {
    category: 'INSPIRATION NOËL',
    title: '4 décorations de Noël au crochet pour une maison pleine de charme',
    description:
      'Découvrez quatre idées de décorations faites main pour personnaliser votre maison pendant les fêtes.',
    path: ROUTES.decorationsNoel,
    image: BLOG_IMAGES.heroCollection,
    imageAlt: ALT.heroCollection,
  },
  {
    category: 'CONSEILS CROCHET',
    title: 'Crochet Noël facile : comment choisir vos premiers projets de décoration ?',
    description:
      'Matériel, niveau de difficulté et conseils pratiques pour choisir vos projets crochet de Noël.',
    path: ROUTES.crochetNoelFacile,
    image: BLOG_IMAGES.workspace,
    imageAlt: ALT.workspace,
  },
];

/* ------------------------------------------------------------------ */
/* Per-page SEO records                                                */
/* ------------------------------------------------------------------ */

const ARTICLE_1_SEO = {
  title: '4 Décorations de Noël au Crochet : Idées & Patrons PDF',
  description:
    'Découvrez 4 idées de décorations de Noël au crochet : sapin, clochettes, mini chaussette et guirlande. Patrons PDF en français à découvrir.',
  keywords:
    'décoration noël crochet tuto, deco noel crochet, crochet noël, décorations de Noël au crochet, patron crochet noël PDF',
  image: resized(BLOG_IMAGES.heroCollection, 1600),
};

const ARTICLE_2_SEO = {
  title: 'Crochet Noël Facile : Conseils & Idées de Décorations',
  description:
    'Envie de créer des décorations de Noël au crochet ? Découvrez comment choisir vos projets, préparer votre matériel et trouver des patrons PDF en français.',
  keywords:
    'crochet noël facile, noël crochet tuto, crochet noël, patron crochet noël PDF, décoration noël crochet tuto',
  image: resized(BLOG_IMAGES.ambiance, 1200),
};

export const BLOG_PAGES: Record<string, SeoRecord> = {
  [ROUTES.blog]: {
    title: 'Blog Crochet Noël : Idées, Patrons & Inspirations | Crochet Facile',
    description:
      'Découvrez nos idées de décorations de Noël au crochet, conseils créatifs et inspirations DIY. Explorez nos articles et patrons PDF en français.',
    path: ROUTES.blog,
    ogType: 'website',
    ogTitle: 'Le Journal Crochet | Idées & Inspirations – Crochet Facile',
    ogImage: resized(BLOG_IMAGES.heroCollection, 1600),
    ogImageAlt: ALT.heroCollection,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Le Journal Crochet | Idées & Inspirations – Crochet Facile',
      description:
        'Découvrez nos idées de décorations de Noël au crochet, conseils créatifs et inspirations DIY. Explorez nos articles et patrons PDF en français.',
      url: absoluteUrl(ROUTES.blog),
      inLanguage: 'fr-FR',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Crochet Facile',
        url: absoluteUrl(ROUTES.home),
      },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: HUB_CARDS.map((card, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: card.title,
          url: absoluteUrl(card.path),
        })),
      },
    },
  },
  [ROUTES.decorationsNoel]: {
    title: ARTICLE_1_SEO.title,
    description: ARTICLE_1_SEO.description,
    keywords: ARTICLE_1_SEO.keywords,
    path: ROUTES.decorationsNoel,
    ogType: 'article',
    ogTitle: articleDecorationsNoel.title,
    ogImage: ARTICLE_1_SEO.image,
    ogImageAlt: ALT.heroCollection,
    jsonLd: [
      blogPosting({
        path: ROUTES.decorationsNoel,
        title: articleDecorationsNoel.title,
        description: ARTICLE_1_SEO.description,
        image: ARTICLE_1_SEO.image,
        section: 'Inspiration Noël',
      }),
      breadcrumbList([
        { name: 'Accueil', path: ROUTES.home },
        { name: 'Le Journal Crochet', path: ROUTES.blog },
        {
          name: articleDecorationsNoel.breadcrumbLabel,
          path: ROUTES.decorationsNoel,
        },
      ]),
    ],
  },
  [ROUTES.crochetNoelFacile]: {
    title: ARTICLE_2_SEO.title,
    description: ARTICLE_2_SEO.description,
    keywords: ARTICLE_2_SEO.keywords,
    path: ROUTES.crochetNoelFacile,
    ogType: 'article',
    ogTitle: articleCrochetNoelFacile.title,
    ogImage: ARTICLE_2_SEO.image,
    ogImageAlt: ALT.ambiance,
    jsonLd: [
      blogPosting({
        path: ROUTES.crochetNoelFacile,
        title: articleCrochetNoelFacile.title,
        description: ARTICLE_2_SEO.description,
        image: ARTICLE_2_SEO.image,
        section: 'Conseils crochet',
      }),
      breadcrumbList([
        { name: 'Accueil', path: ROUTES.home },
        { name: 'Le Journal Crochet', path: ROUTES.blog },
        {
          name: articleCrochetNoelFacile.breadcrumbLabel,
          path: ROUTES.crochetNoelFacile,
        },
      ]),
    ],
  },
};

export const SITEMAP_PATHS: string[] = [
  ROUTES.home,
  ROUTES.blog,
  ROUTES.decorationsNoel,
  ROUTES.crochetNoelFacile,
];
