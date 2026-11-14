import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  FileText,
  Gift,
  Heart,
  Ruler,
  Scissors,
  ShoppingBag,
  Sparkles,
  Star,
  Timer,
  Users,
  X,
  ZoomIn,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { MobileStickyBar } from '../components/MobileStickyBar';
import { PdfPagePreview } from '../components/PdfPagePreview';
import { Seo } from '../components/blog/Seo';
import { BONHOMME_NEIGE_PRODUCT } from '../config/catalog';
import { BONHOMME_NEIGE_LANDING_PAGE } from '../content/seo';

const product = BONHOMME_NEIGE_PRODUCT;

const IMG = {
  hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794652411/hero_image_-_bonehome.jpg',
  cta: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794652411/cta_image_-_bone_home.jpg',
  materiel: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794652971/Mat%C3%A9riel_fils_et_abr%C3%A9viations.png',
  teteCorps: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794652971/T%C3%AAte_et_corps_tour_par_tour.png',
  nezBouche: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794652972/Design_sans_titre_1.png',
  chapka: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794652972/La_chapka_ushanka_pas_%C3%A0_pas.png',
} as const;

/* ------------------------------------------------------------------ */
/* PDF page-preview cards                                              */
/* ------------------------------------------------------------------ */

interface PdfPreviewCard {
  badge: string;
  src: string;
  title: string;
  description: string;
  alt: string;
}

const PDF_PREVIEW_CARDS: PdfPreviewCard[] = [
  {
    badge: 'Page 1',
    src: IMG.materiel,
    title: 'Matériel, fils et abréviations',
    description:
      'Tout ce qu’il faut avant de commencer : crochet, ouate, yeux, boutons, couleurs et quantités de fil, et un glossaire en termes français.',
    alt: 'Page 1 du patron PDF : matériel, couleurs des fils et abréviations du bonhomme de neige au crochet',
  },
  {
    badge: 'Pages 2 à 4',
    src: IMG.teteCorps,
    title: 'Tête et corps, tour par tour',
    description:
      'Chaque tour avec son nombre de mailles, et des photos pour le carton, le rembourrage et la couture de la tête au corps.',
    alt: 'Pages du patron PDF : tête, corps et assemblage du bonhomme de neige au crochet',
  },
  {
    badge: 'Page 7',
    src: IMG.nezBouche,
    title: 'Nez carotte et bouche brodée',
    description:
      'Le petit détail qui donne vie au bonhomme, expliqué en photos pour poser le nez et broder la bouche sans te tromper.',
    alt: 'Page du patron PDF : nez carotte et bouche brodée du bonhomme de neige au crochet',
  },
  {
    badge: 'Pages 8 à 10',
    src: IMG.chapka,
    title: 'La chapka ushanka pas à pas',
    description:
      'Oreilles, visière rouge, bordure et bouton sapin : l’étape la plus délicate, illustrée avec de vraies photos.',
    alt: 'Pages du patron PDF : chapka à oreilles et visière du bonhomme de neige au crochet',
  },
];

/* ------------------------------------------------------------------ */
/* What's inside the PDF                                               */
/* ------------------------------------------------------------------ */

const INCLUDED = [
  {
    icon: FileText,
    title: 'Un patron PDF de 10+ pages en français',
    text: 'Toutes les pièces détaillées tour par tour : tête, corps, bras et moufles, nez, bouche, chapka (oreilles et visière) et écharpe.',
  },
  {
    icon: Sparkles,
    title: 'Des photos réelles des étapes clés',
    text: 'La chapka, la couture des bras, la bouche : les moments délicates sont illustrés pour ne jamais être perdue.',
  },
  {
    icon: Scissors,
    title: 'Écharpe en crochet OU tricot',
    text: 'Choisis la technique que tu préfères : le patron détaille les deux versions pour un résultat impeccable.',
  },
  {
    icon: Ruler,
    title: 'Matériel, couleurs et quantités',
    text: 'La liste complète des fils (couleurs et quantités), yeux de sécurité, boutons décoratifs et outils nécessaires.',
  },
  {
    icon: Check,
    title: 'Glossaire des abréviations',
    text: 'Toutes les abréviations en termes français, pour crocheter sans jamais décoder de jargon étranger.',
  },
  {
    icon: Timer,
    title: 'Conseils d’assemblage',
    text: 'Les bons gestes pour un résultat propre et professionnel, et un téléchargement immédiat après paiement.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Technical specs                                                     */
/* ------------------------------------------------------------------ */

const SPECS = [
  {
    icon: Star,
    label: 'Niveau',
    value: 'Facile',
    detail:
      'Seulement des mailles serrées, des augmentations et des diminutions — adapté aux débutantes ayant déjà fait un anneau magique.',
  },
  {
    icon: Scissors,
    label: 'Matériel',
    value: 'Crochet 2,0 mm',
    detail:
      'Fil de coton de poids sport (blanc, rouge, marron, vert, un peu d’orange), yeux de sécurité noirs 6 mm, 2 boutons décoratifs.',
  },
  {
    icon: Ruler,
    label: 'Taille',
    value: '≈ 22 cm de haut',
    detail:
      'Un beau bonhomme de neige à afficher sur la cheminée, le sapin ou une étagère — ou à offrir.',
  },
  {
    icon: FileText,
    label: 'Format',
    value: 'PDF · 10+ pages',
    detail:
      'Environ 9 Mo, à lire sur téléphone, tablette ou ordinateur (lecteur PDF requis) — ou à imprimer.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    number: '1',
    icon: ShoppingBag,
    title: 'Ajoute le patron à ton panier',
    text: 'Paiement unique et sécurisé via Payhip, sans abonnement.',
  },
  {
    number: '2',
    icon: Download,
    title: 'Télécharge ton PDF',
    text: 'Ton guide de 10+ pages (9 Mo) t’est livré instantanément.',
  },
  {
    number: '3',
    icon: Sparkles,
    title: 'Crochète ton bonhomme',
    text: 'Suis le tour par tour avec les photos des étapes clés, et commence ce soir ! 🎄',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Why you'll love it                                                  */
/* ------------------------------------------------------------------ */

const REASONS = [
  {
    icon: Heart,
    title: 'Une chapka ushanka originale',
    text: 'Qui change des bonnets classiques : oreilles, visière, et un style qui fait craquer toute la famille.',
  },
  {
    icon: Gift,
    title: 'Cadeau ou déco de Noël',
    text: 'Un joli cadeau fait main — ou une décoration pour la cheminée, le sapin ou une étagère.',
  },
  {
    icon: Users,
    title: 'Peu de fil nécessaire',
    text: 'Idéal pour utiliser tes restes de coton : un projet économique qui ne vide pas les pelotes.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Que vais-je recevoir après mon achat ?',
    a: 'Un fichier PDF numérique de plus de 10 pages (environ 9 Mo) en français : toutes les pièces tour par tour, photos des étapes clés, écharpe en crochet OU tricot, liste du matériel et des fils, glossaire des abréviations et conseils d’assemblage.',
  },
  {
    q: 'Le patron est-il en français ?',
    a: 'Oui, entièrement en français, avec un glossaire des abréviations en termes français : zéro confusion.',
  },
  {
    q: 'Quel niveau faut-il pour réaliser ce projet ?',
    a: 'Facile : seulement des mailles serrées, des augmentations et des diminutions, en spirale sans couture compliquée. Adapté aux débutantes ayant déjà fait un anneau magique.',
  },
  {
    q: 'Quel matériel dois-je prévoir ?',
    a: 'Un crochet de 2,0 mm, du fil de coton de poids sport (blanc, rouge, marron, vert, un peu d’orange), de l’ouate de rembourrage, des yeux de sécurité noirs de 6 mm, 2 boutons décoratifs (sapin et flocon), du fil noir, une aiguille à coudre, des épingles et un carton blanc de 7 cm.',
  },
  {
    q: 'Quelle est la taille du bonhomme terminé ?',
    a: 'Environ 22 cm de haut, selon ton fil, ton crochet et ta tension.',
  },
  {
    q: 'Est-ce un produit physique ?',
    a: 'Non, il s’agit uniquement d’un patron numérique. Aucun article physique n’est envoyé. Le patron est en français et en PDF — prévoir un lecteur PDF pour l’ouvrir.',
  },
  {
    q: 'Puis-je revendre les créations terminées ?',
    a: 'Le patron est réservé à un usage personnel : il est interdit de le copier, de le partager ou de le revendre. Pour la vente des créations terminées, contacte-nous pour connaître la règle applicable.',
  },
  {
    q: 'Comment accéder à mon PDF ?',
    a: 'Après confirmation de ton achat, le téléchargement est disponible immédiatement via la livraison numérique de Payhip.',
  },
] as const;

/* ------------------------------------------------------------------ */

export const BonhommeNeigeLandingPage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  /* Lightbox for the PDF page previews (plain state, no library). */
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageReady, setImageReady] = useState<boolean[]>(() =>
    PDF_PREVIEW_CARDS.map(() => false)
  );
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const markImageReady = (index: number): void => {
    setImageReady((prev) => {
      if (prev[index]) return prev;
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;

    closeBtnRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxIndex(null);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex]);

  const lightboxCard =
    lightboxIndex !== null ? PDF_PREVIEW_CARDS[lightboxIndex] : null;

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={BONHOMME_NEIGE_LANDING_PAGE} />
      <Navbar />

      <main className="flex-grow">
        {/* ---- SECTION 1: Hero ---- */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#2D4539]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3027] via-[#2D4539] to-[#355748]" />
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#91B5A3]/15 blur-3xl" />
            <div className="absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3027]/85 via-transparent to-[#1E3027]/40 md:hidden" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Copy */}
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 mb-4 text-[#D8B876] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D8B876]" />
                  <span>Patron PDF · Facile</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3rem] text-[#FFF9F2] font-semibold leading-[1.1] mb-4 tracking-tight drop-shadow-sm">
                  Bonhomme de Neige{' '}
                  <span className="italic font-normal text-[#E8B6B0]">au Crochet</span>
                </h1>

                <p className="font-serif text-xl sm:text-2xl text-[#FFF9F2]/90 font-medium mb-5 leading-snug">
                  ❄️ Amigurumi 22 cm avec chapka ushanka et écharpe — fera craquer
                  toute la famille !
                </p>

                <p className="text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed mb-8 font-normal">
                  Un petit bonhomme de neige de 22 cm avec sa chapka rouge et marron,
                  son écharpe verte, ses moufles rouges et son nez en carotte. Un
                  patron facile, pas à pas, avec des photos des étapes clés pour ne
                  jamais être perdue. Travaillé en spirale, sans couture compliquée.
                </p>

                {/* CTA group */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
                  <a
                    href={product.checkoutUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] border border-white/15"
                  >
                    <span>Obtenir le patron — {product.price}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <div className="px-3 py-1.5 text-sm font-medium text-[#FFF9F2]/90 bg-black/25 backdrop-blur-sm rounded-lg border border-white/10">
                    Patron PDF de{' '}
                    <strong className="text-[#D8B876] font-semibold">10+ pages</strong>
                  </div>
                </div>

                {/* Trust row */}
                <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm text-[#FFF9F2]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Niveau facile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>≈ 22 cm</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Téléchargement immédiat</span>
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl">
                  <img
                    src={IMG.hero}
                    alt="Bonhomme de neige au crochet avec chapka et écharpe — patron PDF en français"
                    className="w-full h-auto object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 2: What's inside the PDF ---- */}
        <section className="py-20 sm:py-28 bg-[#F7F3ED]/70 border-b border-[#355748]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* A — Label, heading, intro (kept) */}
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-2">
                🎁 Ce que tu reçois
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight mb-4 leading-tight">
                Un guide complet,{' '}
                <span className="italic font-normal text-[#355748]">photos à l’appui</span>
              </h2>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Pas à pas, avec de vraies photos pour les étapes délicates : la
                chapka, la couture des bras, la bouche. Tu avances en confiance, du
                premier maille au dernier fil à cacher.
              </p>
            </div>

            {/* B — Pages preview grid */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#355748]/15 bg-white px-4 py-1.5 text-xs font-semibold text-[#355748] shadow-xs">
                <Timer className="w-3.5 h-3.5 text-[#D8B876]" aria-hidden="true" />
                <span>PDF 10+ pages · 9 Mo</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252525] font-semibold tracking-tight mt-5 mb-3 leading-tight">
                Un aperçu des vraies pages{' '}
                <span className="italic font-normal text-[#E8B6B0]">du patron</span>
              </h3>
              <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
                Voici comment le patron est présenté : des tableaux clairs, des photos
                réelles et chaque pièce expliquée tour par tour.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-10">
              {PDF_PREVIEW_CARDS.map((card, index) => {
                const canOpen = imageReady[index];
                return (
                  <article
                    key={card.src}
                    className="group bg-white rounded-2xl overflow-hidden border border-[#355748]/10 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)] hover:shadow-[0_12px_32px_-8px_rgba(53,87,72,0.16)] hover:-translate-y-1 transition-all duration-200 ease-out flex flex-col"
                    onClick={() => {
                      if (canOpen) setLightboxIndex(index);
                    }}
                  >
                    <button
                      type="button"
                      disabled={!canOpen}
                      onClick={(event) => {
                        event.stopPropagation();
                        if (canOpen) setLightboxIndex(index);
                      }}
                      aria-label={
                        canOpen
                          ? `Agrandir l’aperçu : ${card.title}`
                          : card.title
                      }
                      className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#355748] focus-visible:ring-offset-2 rounded-t-2xl"
                    >
                      <PdfPagePreview
                        src={card.src}
                        alt={card.alt}
                        pageLabel={card.badge}
                        onLoad={() => markImageReady(index)}
                      />
                    </button>

                    <div className="p-5 flex flex-col grow">
                      <h4 className="font-serif text-xl font-semibold text-[#252525] mb-1.5 group-hover:text-[#355748] transition-colors">
                        {card.title}
                      </h4>
                      <p className="text-sm text-[#252525]/75 leading-relaxed line-clamp-2 grow">
                        {card.description}
                      </p>
                      <span className="mt-4 pt-3 border-t border-[#355748]/10 inline-flex items-center gap-1.5 text-xs font-semibold text-[#355748]">
                        <Check className="w-3.5 h-3.5 text-[#D8B876]" aria-hidden="true" />
                        <span>Inclus</span>
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* C — The 6 benefit cards, 2 columns desktop / 1 mobile */}
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-12">
              {INCLUDED.map(({ icon: Icon, title, text }) => (
                <li
                  key={title}
                  className="flex items-start gap-4 rounded-2xl border border-[#355748]/10 bg-white px-5 py-4 sm:px-6 sm:py-5 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]"
                >
                  <span className="mt-0.5 w-9 h-9 shrink-0 rounded-full bg-[#91B5A3]/20 flex items-center justify-center text-[#355748]">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <span>
                    <strong className="block text-[15px] font-semibold text-[#252525] mb-0.5">
                      {title}
                    </strong>
                    <span className="text-sm text-[#252525]/75 leading-relaxed">
                      {text}
                    </span>
                  </span>
                </li>
              ))}
            </ul>

            {/* Conversion strip under the grid */}
            <div className="flex flex-col items-center gap-6 pt-8 border-t border-[#355748]/10 max-w-3xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#252525]/75">
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#91B5A3] shrink-0" aria-hidden="true" />
                  <span>Photos réelles des étapes</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#91B5A3] shrink-0" aria-hidden="true" />
                  <span>Termes français standard</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-[#91B5A3] shrink-0" aria-hidden="true" />
                  <span>Téléchargement immédiat</span>
                </span>
              </div>

              <a
                href={product.checkoutUrl}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] border border-white/15"
              >
                <span>Obtenir le patron — {product.price}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ---- Lightbox: PDF page preview ---- */}
        {lightboxCard && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E3027]/85 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={lightboxCard.title}
            onKeyDown={(event) => {
              if (event.key === 'Tab') {
                event.preventDefault();
                closeBtnRef.current?.focus();
              }
            }}
          >
            <div
              className="relative w-full max-w-md bg-[#FFF9F2] rounded-2xl overflow-hidden shadow-2xl border border-[#355748]/15"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                ref={closeBtnRef}
                onClick={() => setLightboxIndex(null)}
                aria-label="Fermer l’aperçu"
                className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#FFF9F2]/95 border border-[#355748]/15 text-[#355748] flex items-center justify-center shadow-sm hover:bg-white transition-colors"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
              <img
                src={lightboxCard.src}
                alt={lightboxCard.alt}
                width={900}
                height={1200}
                className="w-full h-auto max-h-[75vh] object-contain bg-[#F7F3ED]"
              />
              <div className="px-5 py-4 border-t border-[#355748]/10">
                <span className="inline-flex items-center rounded-full bg-[#91B5A3]/20 px-2.5 py-0.5 text-[11px] font-semibold text-[#355748] mb-2">
                  {lightboxCard.badge}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#252525]">
                  {lightboxCard.title}
                </h3>
                <p className="mt-1 text-sm text-[#252525]/75 leading-relaxed">
                  {lightboxCard.description}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-wider text-[#91B5A3] font-semibold inline-flex items-center gap-1.5">
                  <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Appuie sur Échap pour fermer</span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ---- SECTION 3: Why you'll love it + specs ---- */}
        <section className="py-20 sm:py-28 bg-[#FFF9F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
                ✨ Pourquoi tu vas l’adorer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Un Noël fait main, sans prise de tête
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
              {REASONS.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#355748]/15 bg-white px-6 py-7 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)] flex flex-col"
                >
                  <span className="w-11 h-11 rounded-full bg-[#91B5A3]/20 flex items-center justify-center text-[#355748] mb-4">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#252525] mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>

            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
                📏 Fiche Technique
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Caractéristiques du patron
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
                🎯 Niveau facile, adapté aux débutantes ayant déjà fait un anneau
                magique · Travail en spirale, sans couture compliquée.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SPECS.map(({ icon: Icon, label, value, detail }) => (
                <div
                  key={label}
                  className="bg-[#F7F3ED] rounded-2xl p-7 border border-[#355748]/10 shadow-[0_4px_20px_-4px_rgba(53,87,72,0.05)] hover:shadow-[0_8px_30px_-6px_rgba(53,87,72,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#355748]/10 text-[#355748] flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[1.75]" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#91B5A3] block mb-1">
                    {label}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#252525] mb-2 leading-snug">
                    {value}
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>

            {/* Material strip */}
            <div className="mt-14 rounded-2xl border border-[#355748]/15 bg-white px-6 py-6 sm:px-8 sm:py-7 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)] max-w-4xl mx-auto">
              <div className="flex items-start gap-4">
                <span className="w-9 h-9 shrink-0 rounded-full bg-[#91B5A3]/20 flex items-center justify-center text-[#355748]">
                  <Scissors className="w-4.5 h-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#252525] mb-1">
                    🧶 Matériel
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">
                    Crochet 2,0 mm · fil de coton de poids sport (blanc, rouge, marron,
                    vert, un peu d’orange) · ouate de rembourrage · yeux de sécurité
                    noirs 6 mm · 2 boutons décoratifs (sapin et flocon) · fil noir ·
                    aiguille à coudre · épingles · carton blanc de 7 cm.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 4: How it works ---- */}
        <section className="py-20 sm:py-28 bg-[#F7F3ED]/50 border-y border-[#355748]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
                📥 Produit numérique
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                En 3 étapes, tu es lancée
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#252525]/75">
                Téléchargement immédiat après l’achat. Aucun article physique n’est
                envoyé.
              </p>
            </div>

            <div className="relative">
              <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[2px] bg-[#355748]/15 -z-0" />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                {STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.number}
                      className="bg-[#FFF9F2] rounded-2xl p-8 border border-[#355748]/10 text-center flex flex-col items-center shadow-[0_4px_20px_-6px_rgba(53,87,72,0.05)] hover:shadow-md transition-shadow"
                    >
                      <div className="relative mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-[#355748] text-[#FFF9F2] flex items-center justify-center shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#D8B876] text-[#252525] text-xs font-bold flex items-center justify-center shadow-xs">
                          {step.number}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl font-semibold text-[#252525] mb-3">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed max-w-xs">
                        {step.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 5: Final offer ---- */}
        <section className="py-20 sm:py-28 bg-[#355748] text-[#FFF9F2] relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#91B5A3]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D8B876] block mb-3">
                  Ton Bonhomme de Neige
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  Prêt(e) pour un Noël fait main ?{' '}
                  <span className="italic font-normal text-[#E8B6B0]">
                    Télécharge ton patron et commence ce soir !
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#FFF9F2]/85 leading-relaxed mb-8 max-w-xl">
                  Un bonhomme de 22 cm avec chapka ushanka, écharpe et moufles — patron
                  facile de 10+ pages en français, avec photos des étapes clés. 🎄
                </p>

                <div className="flex items-baseline gap-4 mb-8">
                  <span className="text-4xl sm:text-5xl font-serif font-bold text-[#FFF9F2]">
                    {product.price}
                  </span>
                  <span className="text-sm text-[#91B5A3] font-medium">
                    Paiement unique · Accès immédiat
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <a
                    href={product.checkoutUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-[#FFF9F2] hover:bg-white text-[#355748] text-base font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>Obtenir mon patron →</span>
                    <ArrowRight className="w-4 h-4 text-[#355748]" />
                  </a>
                </div>

                <p className="text-xs text-[#FFF9F2]/75 flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#D8B876] shrink-0" />
                  <span>Téléchargement numérique immédiat via Payhip.</span>
                </p>

                <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#FFF9F2]/80">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>PDF 10+ pages en français</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Niveau facile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Taille ≈ 22 cm</span>
                  </div>
                </div>
              </div>

              {/* Right: product visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src={IMG.cta}
                    alt="Patron PDF Bonhomme de Neige au crochet — 22 cm, chapka et écharpe"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 6: Usage rights ---- */}
        <section className="py-14 sm:py-16 bg-[#D8B876]/15 border-b border-[#355748]/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-3">
                ⚠️ Droits d’utilisation
              </span>
            </div>
            <ul className="space-y-3 text-sm sm:text-base text-[#252525]/80">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#355748] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Patron réservé à un{' '}
                  <strong>usage personnel</strong> : il est interdit de le copier, de
                  le partager ou de le revendre.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#355748] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  La vente de petites séries de créations terminées est autorisée si tu
                  cites la source.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Gift className="w-4 h-4 text-[#355748] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Produit numérique uniquement : aucun article physique n’est envoyé.
                </span>
              </li>
            </ul>
            <p className="mt-6 text-center text-sm text-[#252525]/70">
              💬 Une question ? Écrivez-nous, on répond avec plaisir.
            </p>
          </div>
        </section>

        {/* ---- SECTION 7: FAQ ---- */}
        <section id="faq" className="py-20 sm:py-28 bg-[#FFF9F2]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
                Aide &amp; Réponses
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Questions fréquentes
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#252525]/75">
                Tout ce qu’il faut savoir sur ce patron de bonhomme de neige.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={faq.q}
                    className="rounded-2xl border border-[#355748]/10 bg-white overflow-hidden shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-[#F7F3ED]/50 transition-colors"
                    >
                      <span className="font-serif text-lg sm:text-xl font-semibold text-[#252525]">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 text-[#355748] transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <p className="text-[15px] sm:text-base text-[#252525]/75 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm text-[#252525]/65 mb-4">Une autre question ?</p>
              <a
                href="mailto:contact@crochetfacile.fr"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#355748] hover:text-[#284337] transition-colors"
              >
                <span>contact@crochetfacile.fr</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* ---- SECTION 8: Cross-link to store ---- */}
        <section className="py-14 sm:py-16 bg-[#91B5A3]/15 border-y border-[#355748]/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#355748] mb-3">
              <Ruler className="w-3.5 h-3.5" aria-hidden="true" />
              <span>La Boutique</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#252525] mb-3">
              Découvrez aussi nos autres patrons
            </h2>
            <p className="text-sm sm:text-base text-[#252525]/75 mb-6">
              Lapin amigurumi, gnomes de Noël, breloques et collection complète — tous
              nos patrons PDF en français.
            </p>
            <a
              href="/boutique"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#355748] hover:bg-[#284337] text-white text-sm font-semibold rounded-[12px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            >
              <span>Visiter la boutique</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <Footer onOpenLegal={setLegalModalType} />
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType}
      />

      {/* Mobile sticky conversion bar */}
      <MobileStickyBar
        checkoutUrl={product.checkoutUrl}
        price={product.price}
        label="Patron PDF 10+ pages"
        ctaLabel="Obtenir le patron"
      />
    </div>
  );
};
