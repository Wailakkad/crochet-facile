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
import { LAPIN_PRODUCT } from '../config/catalog';
import { LAPIN_AMIGURUMI_LANDING_PAGE } from '../content/seo';

const product = LAPIN_PRODUCT;

const IMG = {
  hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794653661/lapin_hero_image.jpg',
  cta: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794653661/lapin_cta_image.jpg',
  page3: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794654497/page_3.jpg',
  page4: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794654497/page_4.jpg',
  page5: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794654497/page_5.jpg',
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
    badge: 'Page 3',
    src: IMG.page3,
    title: 'Le cercle magique, pas à pas',
    description:
      'Six étapes illustrées en photos pour réussir la base de tous tes amigurumis, même si tu n’as jamais crocheté en rond.',
    alt: 'Page 3 du patron PDF : le cercle magique expliqué en six étapes photos pour le lapin amigurumi au crochet',
  },
  {
    badge: 'Page 4',
    src: IMG.page4,
    title: 'La tête, tour par tour',
    description:
      'Chaque tour avec son nombre de mailles, plus des photos pour poser les yeux de sécurité, le petit nez et la bouche brodée.',
    alt: 'Page 4 du patron PDF : tête du lapin amigurumi au crochet avec yeux, nez et bouche brodée',
  },
  {
    badge: 'Page 5',
    src: IMG.page5,
    title: 'Corps et oreilles détaillés',
    description:
      'Le corps, les oreilles et leur intérieur rose, avec des photos du résultat attendu et des conseils pour coudre proprement.',
    alt: 'Page 5 du patron PDF : corps et oreilles du lapin amigurumi au crochet avec photos',
  },
];

/* ------------------------------------------------------------------ */
/* What's inside the PDF                                               */
/* ------------------------------------------------------------------ */

const INCLUDED = [
  {
    icon: FileText,
    title: 'Un patron PDF de 6 pages, en français',
    text: 'Des explications claires, sans traduction à faire, pour avancer sereinement du début à la fin.',
  },
  {
    icon: Sparkles,
    title: 'Le cercle magique, pas à pas',
    text: 'L’essentiel du crochet en rond expliqué simplement : la base de tous tes futurs amigurumis.',
  },
  {
    icon: Check,
    title: 'Instructions tour par tour',
    text: 'Tête, corps, oreilles, bras, jambes et queue : chaque pièce détaillée, maille après maille.',
  },
  {
    icon: Ruler,
    title: 'Matériel et abréviations',
    text: 'Liste complète du matériel, des outils et de toutes les abréviations en termes français.',
  },
  {
    icon: Scissors,
    title: 'Conseils d’assemblage et de finition',
    text: 'Les bons gestes pour un lapin propre, bien proportionné et adorable une fois cousu.',
  },
  {
    icon: Timer,
    title: 'Téléchargement immédiat',
    text: 'PDF disponible tout de suite après le paiement, sur ordinateur, tablette ou smartphone.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Technical specs                                                     */
/* ------------------------------------------------------------------ */

const SPECS = [
  {
    icon: Star,
    label: 'Niveau',
    value: 'Débutant / facile',
    detail:
      'Uniquement des points de base : mailles serrées, augmentations et diminutions, en spirale continue.',
  },
  {
    icon: Scissors,
    label: 'Matériel',
    value: 'Crochet 3,5 mm',
    detail:
      'Fil blanc et rose de poids moyen (worsted), yeux de sécurité 15 mm, fil à broder noir, rembourrage.',
  },
  {
    icon: Ruler,
    label: 'Taille',
    value: '≈ 10 cm (4 pouces)',
    detail:
      'Un petit lapin kawaii de la taille de la paume, parfait comme peluche ou décoration.',
  },
  {
    icon: FileText,
    label: 'Format',
    value: 'PDF · 6 pages',
    detail:
      'Mise en page claire, à lire sur tous tes écrans ou à imprimer à la maison pour crocheter les yeux dans le fil.',
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
    text: 'Ton guide de 6 pages t’est livré instantanément après le paiement.',
  },
  {
    number: '3',
    icon: Sparkles,
    title: 'Crochète ton lapin',
    text: 'Suis le tour par tour, assemble avec les conseils fournis, et admire ton adorable lapin de 10 cm.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Why you'll love it                                                  */
/* ------------------------------------------------------------------ */

const REASONS = [
  {
    icon: Heart,
    title: 'Parfait pour débuter',
    text: 'Des points de base uniquement et le cercle magique expliqué pas à pas : ton premier amigurumi réussi, sans frustration.',
  },
  {
    icon: Gift,
    title: 'Un cadeau qui fait craquer',
    text: 'Une peluche kawaii de 10 cm à offrir à tes proches — ou à garder pour toi, on ne juge pas. 🐰',
  },
  {
    icon: Users,
    title: 'Vente des créations autorisée',
    text: 'Tu peux vendre les peluches terminées que tu as crochetées toi-même (merci de mentionner le nom de la créatrice du modèle).',
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Que vais-je recevoir après mon achat ?',
    a: 'Un fichier PDF numérique de 6 pages (environ 5 Mo) contenant le patron complet du lapin : matériel, cercle magique expliqué, instructions tour par tour pour la tête, le corps, les oreilles, les bras, les jambes et la queue, abréviations en français et conseils d’assemblage.',
  },
  {
    q: 'Le patron est-il en français ?',
    a: 'Oui, entièrement en français, avec la liste des abréviations en termes français : zéro confusion, aucune traduction à faire.',
  },
  {
    q: 'Quel niveau faut-il pour réaliser ce projet ?',
    a: 'Débutant : seuls des points de crochet de base sont utilisés (mailles serrées, augmentations, diminutions), travaillés en spirale continue. Si tu sais faire un anneau magique, tu peux te lancer.',
  },
  {
    q: 'Quel matériel dois-je préparer ?',
    a: 'Fil blanc et rose de poids moyen (worsted), un crochet de 3,5 mm, des yeux de sécurité de 15 mm, du fil à broder noir, du rembourrage, une aiguille à laine et un marqueur de mailles. Le matériel n’est pas inclus dans l’achat.',
  },
  {
    q: 'Quelle est taille du lapin terminé ?',
    a: 'Environ 10 cm (4 pouces) de hauteur, selon ton fil, ton crochet et ta tension.',
  },
  {
    q: 'Est-ce un produit physique ?',
    a: 'Non, il s’agit uniquement d’un patron numérique. Aucun produit physique ni peluche terminée n’est envoyé.',
  },
  {
    q: 'Puis-je revendre les lapins que je crochet ?',
    a: 'Oui, tu peux vendre les peluches terminées que tu as crochetées toi-même, en mentionnant le nom de la créatrice du modèle. Il est en revanche interdit de revendre, partager, copier ou distribuer le PDF ou ses photos.',
  },
  {
    q: 'Comment accéder à mon PDF ?',
    a: 'Après confirmation de ton achat, le téléchargement est disponible immédiatement via la livraison numérique de Payhip.',
  },
] as const;

/* ------------------------------------------------------------------ */

export const LapinAmigurumiLandingPage: React.FC = () => {
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
      <Seo record={LAPIN_AMIGURUMI_LANDING_PAGE} />
      <Navbar
        ctaPrice={product.price}
        ctaHref={product.checkoutUrl}
        ctaLabel="Obtenir le patron"
      />

      <main className="flex-grow">
        {/* ---- SECTION 1: Hero ---- */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#2D4539]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3027] via-[#2D4539] to-[#355748]" />
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#91B5A3]/15 blur-3xl" />
            <div className="absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-[#E8B6B0]/15 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3027]/85 via-transparent to-[#1E3027]/40 md:hidden" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Copy */}
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 mb-4 text-[#D8B876] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D8B876]" />
                  <span>Patron PDF · Débutant</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-[#FFF9F2] font-semibold leading-[1.1] mb-4 tracking-tight drop-shadow-sm">
                  Lapin Amigurumi{' '}
                  <span className="italic font-normal text-[#E8B6B0]">au Crochet</span>
                </h1>

                <p className="font-serif text-xl sm:text-2xl text-[#FFF9F2]/90 font-medium mb-5 leading-snug">
                  🐰 Un adorable lapin kawaii d’environ 10 cm, facile et rapide à
                  réaliser !
                </p>

                <p className="text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed mb-8 font-normal">
                  Ce patron PDF en français te guide pas à pas pour créer un mignon
                  lapin amigurumi. Il utilise uniquement des points de crochet de base
                  — idéal pour les débutantes et les amatrices d’amigurumi. Cercle
                  magique expliqué, instructions tour par tour, conseils d’assemblage :
                  tout est là pour réussir du premier coup.
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
                    <strong className="text-[#D8B876] font-semibold">6 pages</strong>
                  </div>
                </div>

                {/* Trust row */}
                <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm text-[#FFF9F2]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Niveau débutant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>≈ 10 cm</span>
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
                    alt="Lapin amigurumi au crochet — patron PDF facile en français"
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
                ✨ Ce que vous recevez
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight mb-4 leading-tight">
                Tout pour réussir{' '}
                <span className="italic font-normal text-[#355748]">ton premier lapin</span>
              </h2>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Un guide complet et pédagogique, pensé pour les débutantes : chaque
                étape est expliquée, chaque pièce détaillée, pour ne jamais être
                perdue.
              </p>
            </div>

            {/* B — Pages preview grid */}
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#355748]/15 bg-white px-4 py-1.5 text-xs font-semibold text-[#355748] shadow-xs">
                <Timer className="w-3.5 h-3.5 text-[#D8B876]" aria-hidden="true" />
                <span>PDF 6 pages · Prêt à imprimer</span>
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#252525] font-semibold tracking-tight mt-5 mb-3 leading-tight">
                Un aperçu des vraies pages{' '}
                <span className="italic font-normal text-[#E8B6B0]">du patron</span>
              </h3>
              <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
                Des explications claires, des photos réelles et chaque pièce détaillée
                tour par tour : voici comment le patron est présenté.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-10">
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
                        canOpen ? `Agrandir l’aperçu : ${card.title}` : card.title
                      }
                      className="block w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#355748] focus-visible:ring-offset-2 rounded-t-2xl"
                    >
                      <PdfPagePreview
                        src={card.src}
                        alt={card.alt}
                        pageLabel={card.badge}
                        title={card.title}
                        description={card.description}
                        onLoad={() => markImageReady(index)}
                      />
                    </button>
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
                  <span>Termes français</span>
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
                Facile, rapide, irrésistible
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
                📏 Informations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Fiche technique du patron
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
                Se croche en spirale continue · Fil : poids moyen (worsted), blanc et
                rose · Yeux de sécurité : 15 mm.
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
                    🧶 Matériel nécessaire (non inclus)
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">
                    Fil blanc et rose, yeux de sécurité 15 mm, fil à broder noir,
                    rembourrage, aiguille à laine, marqueur de mailles.
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
                📥 Téléchargement immédiat
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                En 3 étapes, tu es lancée
              </h2>
              <p className="mt-4 text-sm sm:text-base text-[#252525]/75">
                Après paiement, tu reçois le fichier PDF instantanément. Aucun produit
                physique n’est envoyé.
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
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#E8B6B0]/15 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D8B876] block mb-3">
                  Ton Lapin Amigurumi
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  Prêt(e) à crocheter{' '}
                  <span className="italic font-normal text-[#E8B6B0]">
                    ton adorable lapin ?
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#FFF9F2]/85 leading-relaxed mb-8 max-w-xl">
                  Un patron de 6 pages en français, niveau débutant, tour par tour —
                  et une peluche kawaii de 10 cm qui fera craquer tout le monde. 🐰
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
                    <span>PDF 6 pages en français</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Niveau débutant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Taille ≈ 10 cm</span>
                  </div>
                </div>
              </div>

              {/* Right: product visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <img
                    src={IMG.cta}
                    alt="Patron PDF Lapin Amigurumi au crochet — 10 cm, niveau débutant"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 6: Conditions ---- */}
        <section className="py-14 sm:py-16 bg-[#D8B876]/15 border-b border-[#355748]/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-3">
                ⚠️ Conditions d’utilisation
              </span>
            </div>
            <ul className="space-y-3 text-sm sm:text-base text-[#252525]/80">
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#355748] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Tu peux <strong>vendre les peluches terminées</strong> que tu as
                  crochetées toi-même (merci de mentionner le nom de la créatrice du
                  modèle).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#355748] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  Il est <strong>interdit de revendre, partager, copier ou distribuer</strong>{' '}
                  le PDF ou ses photos.
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
                Tout ce qu’il faut savoir sur ce patron de lapin amigurumi.
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
              Gnomes de Noël, bonhomme de neige, breloques et collection complète —
              tous nos patrons PDF en français.
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
        label="Patron PDF 6 pages"
        ctaLabel="Obtenir le patron"
      />
    </div>
  );
};
