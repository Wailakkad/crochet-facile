import { ROUTES } from './site';

/** A free resource listed on the resources hub. */
export interface FreeResource {
  slug: string;
  /** Short badge shown on the card, e.g. access condition. */
  badge: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
}

/** Free PDF resources of Crochet Facile (extend this list to add more). */
export const FREE_RESOURCES: FreeResource[] = [
  {
    slug: 'carnet-40-idees-noel',
    badge: 'Inscription e-mail',
    category: 'Carnet d’inspiration',
    title: '40 Idées de Noël au Crochet à Croquer',
    description:
      'Un carnet gratuit de 40 photos et inspirations réparties en 4 univers : Kawaii, Gourmand, Amigurumi et Magique, pour imaginer tes prochains projets.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1793041977/the_right_side_hero_img.jpg',
    imageAlt: 'Carnet gratuit 40 Idées de Noël au Crochet à Croquer',
    href: ROUTES.freeChristmasIdeas,
    ctaLabel: 'Recevoir le carnet',
  },
  {
    slug: 'patron-sapin-gratuit',
    badge: 'Sans inscription',
    category: 'Patron pas à pas',
    title: 'Sapin au crochet — patron gratuit',
    description:
      'Le patron PDF complet du sapin de Noël au crochet, entièrement en français. Un projet simple et festif à télécharger librement.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Sapin_de_No%C3%ABl.jpg',
    imageAlt: 'Sapin de Noël au crochet amigurumi — patron gratuit en français',
    href: ROUTES.sapinPatron,
    ctaLabel: 'Télécharger le patron',
  },
  {
    slug: 'caca-de-licorne-amigurumi',
    badge: 'Inscription e-mail',
    category: 'Patron amigurumi',
    title: 'Caca de Licorne Amigurumi — patron gratuit',
    description:
      'Un amigurumi kawaii, pastel et pailleté en spirale arc-en-ciel. Patron PDF de 7 pages en français, avec photos d’étapes, à télécharger gratuitement.',
    image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794655778/Crochet_pattern_photo_page_98653186_2K.jpg',
    imageAlt: 'Caca de Licorne amigurumi au crochet — patron PDF gratuit en français',
    href: ROUTES.cacaLicorne,
    ctaLabel: 'Recevoir le patron',
  },
];
