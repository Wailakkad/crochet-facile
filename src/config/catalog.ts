import { CHECKOUT_URL, BRAND } from './constants';

/** A single crochet pattern included in the paid kit. */
export interface Pattern {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  details: string;
}

/** The 4 patterns of the Christmas collection (shared by landing + store). */
export const PATTERNS: Pattern[] = [
  {
    number: '01',
    title: 'Sapin de Noël',
    description: 'Un adorable petit sapin avec son étoile et son nœud rouge.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Sapin_de_No%C3%ABl.jpg',
    alt: 'Sapin de Noël au crochet amigurumi avec étoile jaune et ruban rouge',
    details: 'Amigurumi de table ou suspension',
  },
  {
    number: '02',
    title: 'Clochettes de Noël',
    description: 'De jolies clochettes colorées pour décorer votre intérieur.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Clochettes_de_No%C3%ABl.jpg',
    alt: 'Clochettes de Noël au crochet festives et colorées',
    details: 'Ornements de sapin et table',
  },
  {
    number: '03',
    title: 'Mini chaussette',
    description: 'Une décoration traditionnelle aux couleurs de Noël.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/Mini_chaussette.jpg',
    alt: 'Mini chaussette de Noël au crochet faite main',
    details: 'Suspension délicate pour sapin',
  },
  {
    number: '04',
    title: 'Guirlande de sapins',
    description: 'Une guirlande colorée pour une décoration faite main.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Guirlande_de_sapins.jpg',
    alt: 'Guirlande de sapins au crochet sur ficelle naturelle',
    details: 'Décoration murale ou cheminée',
  },
];

/** Key selling points shown on product cards and the store page. */
export const PRODUCT_FEATURES: string[] = [
  '4 patrons de décorations de Noël',
  'PDF complet en français',
  'Téléchargement immédiat après achat',
  'Paiement unique, sans abonnement',
];

/** Trust badges displayed on the store page. */
export const STORE_TRUST_BADGES: { title: string; description: string }[] = [
  {
    title: 'Format PDF pratique',
    description: 'À télécharger et imprimer chez vous, illimité.',
  },
  {
    title: '100 % en français',
    description: 'Explications claires, pas à pas, illustrées.',
  },
  {
    title: 'Paiement sécurisé',
    description: 'Réalisation via Payhip, plateforme de confiance.',
  },
  {
    title: 'Support par e-mail',
    description: 'Une question ? Écrivez-nous, on vous répond.',
  },
];

/** The paid products sold on the store page. */
export interface Product {
  slug: string;
  name: string;
  /** Short category label shown on store cards. */
  category: string;
  tagline: string;
  description: string;
  price: string;
  priceNumber: number;
  currency: string;
  checkoutUrl: string;
  /** Landing page of the product (store "Découvrir" CTA). */
  landingHref: string;
  badge: string;
  images: { src: string; alt: string }[];
  features: string[];
}

/** Payhip checkout link for the breloques product. */
export const BRELOQUES_CHECKOUT_URL = 'https://payhip.com/b/qVvFG';

export const PRODUCTS: Product[] = [
  {
    slug: 'decorations-noel',
    name: BRAND.productName,
    category: 'Collection Noël · 4 patrons',
    tagline: 'La collection complète : 4 décorations festives à croquer.',
    description:
      'Un sapin amigurumi, des clochettes colorées, une mini chaussette et une guirlande de sapins : quatre patrons en français réunis dans un même guide PDF, pour créer un Noël 100 % fait main.',
    price: BRAND.price,
    priceNumber: BRAND.priceNumber,
    currency: BRAND.currency,
    checkoutUrl: CHECKOUT_URL,
    landingHref: '/',
    badge: 'Best-seller',
    images: [
      {
        src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792357024/Votre_Collection_de_No%C3%ABl.jpg',
        alt: 'Guide PDF 4 Décorations de Noël au Crochet Crochet Facile',
      },
      {
        src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/hero_back_img.jpg',
        alt: 'Les 4 décorations de Noël au crochet : sapin amigurumi, clochettes, mini chaussette et guirlande',
      },
      {
        src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Sapin_de_No%C3%ABl.jpg',
        alt: 'Sapin de Noël au crochet amigurumi avec étoile jaune et ruban rouge',
      },
    ],
    features: PRODUCT_FEATURES,
  },
  {
    slug: 'breloques-amigurumi',
    name: 'Trio de Mini Breloques Amigurumi (Grenouille, Panda & Citron)',
    category: 'Patron PDF · 3 modèles',
    tagline: 'Transformez vos restes de fil en accessoires irrésistibles !',
    description:
      'Un projet rapide, ultra-mignon et parfait pour écouler vos pelotes : la Grenouille farceuse, le Panda mignon et le Citron pétillant, réunis dans un guide PDF de 14 pages en français.',
    price: '3,49 €',
    priceNumber: 3.49,
    currency: 'EUR',
    checkoutUrl: BRELOQUES_CHECKOUT_URL,
    landingHref: '/patron-mini-breloques-amigurumi',
    badge: 'Nouveau',
    images: [
      {
        src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222376/Votre_Patron_de_Breloques_image.jpg',
        alt: 'Trio de mini breloques amigurumi au crochet : grenouille, panda et citron',
      },
      {
        src: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222377/hero_-_Trio_de_Mini_Breloques_Amigurumi_image.jpg',
        alt: 'Trio de Mini Breloques Amigurumi — patron de crochet PDF',
      },
    ],
    features: [
      'Guide PDF de 14 pages avec 3 modèles exclusifs',
      '100 % en français, terminologie technique rigoureuse',
      'Plus de 20 photos HD et diagrammes de points',
      'Bonus : guide lifestyle d’inspiration',
      'Téléchargement immédiat après achat',
    ],
  },
];

export const FEATURED_PRODUCT: Product = PRODUCTS[0];
export const BRELOQUES_PRODUCT: Product = PRODUCTS[1];

/** True when a product has no real photo yet (styled placeholder is shown). */
export const isImagePlaceholder = (product: Product): boolean =>
  product.images.length === 0;
