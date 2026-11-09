import React, { useState } from 'react';
import {
  ArrowRight,
  Check,
  ChevronDown,
  Download,
  FileText,
  Leaf,
  Puzzle,
  Ruler,
  Scissors,
  ShoppingBag,
  Sparkles,
  Star,
  Timer,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { MobileStickyBar } from '../components/MobileStickyBar';
import { Seo } from '../components/blog/Seo';
import { BRELOQUES_PRODUCT } from '../config/catalog';
import { BRELOQUES_LANDING_PAGE } from '../content/seo';

const product = BRELOQUES_PRODUCT;

/* ------------------------------------------------------------------ */
/* The 3 models                                                        */
/* ------------------------------------------------------------------ */

const MODELS = [
  {
    number: '01',
    title: 'La Grenouille farceuse',
    description:
      'Une grenouille espiègle avec ses grands yeux de sécurité, parfaite comme porte-clés rigolo.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222376/La_Grenouille_farceuse.jpg',
    alt: 'Grenouille farceuse au crochet — mini breloque amigurumi',
  },
  {
    number: '02',
    title: 'Le Panda mignon',
    description:
      'Le panda tout doux au rendu impeccable, idéal à accrocher à votre sac ou trousse.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222376/Le_Panda_mignon.jpg',
    alt: 'Panda mignon au crochet — mini breloque amigurumi',
  },
  {
    number: '03',
    title: 'Le Citron pétillant',
    description:
      'Un citron lumineux avec ses petites feuilles vertes, la touche frais qui sourit à tout le monde.',
    image:
      'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222383/Le_Citron_p%C3%A9tillant.jpg',
    alt: 'Citron pétillant au crochet avec petites feuilles — mini breloque amigurumi',
  },
] as const;

/* ------------------------------------------------------------------ */
/* What's inside the PDF                                               */
/* ------------------------------------------------------------------ */

const INCLUDED = [
  {
    icon: Puzzle,
    title: '3 modèles exclusifs en un seul guide',
    text: 'La Grenouille farceuse, le Panda mignon et le Citron pétillant avec ses petites feuilles.',
  },
  {
    icon: FileText,
    title: '100 % en français',
    text: 'Terminologie technique française rigoureuse (ms, aug, dim, tours en spirale continue) pour zéro confusion.',
  },
  {
    icon: Sparkles,
    title: 'Tutoriel visuel pas-à-pas',
    text: 'Plus de 20 photographies haute définition et des diagrammes de points clairs, du cercle magique aux finitions invisibles.',
  },
  {
    icon: Star,
    title: 'Bonus guide lifestyle',
    text: 'Un chapitre complet d’inspiration : bijoux de sac, trousses, porte-clés, idées cadeaux.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Technical specs                                                     */
/* ------------------------------------------------------------------ */

const SPECS = [
  {
    icon: Star,
    label: 'Niveau',
    value: 'Débutant',
    detail: 'Maîtrise de base du crochet en rond requise.',
  },
  {
    icon: Scissors,
    label: 'Matériel',
    value: 'Fil & crochet 4,0 mm',
    detail: 'Fil de poids moyen (Catégorie 4 / Medium), yeux de sécurité et anneaux porte-clés.',
  },
  {
    icon: FileText,
    label: 'Format',
    value: 'PDF A4 · 14 pages',
    detail: 'Mise en page épurée, optimisée pour l’impression ou la lecture sur tablette.',
  },
  {
    icon: Download,
    label: 'Livraison',
    value: 'Instantanée',
    detail: 'Fichier disponible immédiatement après l’achat, partout dans le monde.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* How it works                                                        */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    number: '1',
    icon: ShoppingBag,
    title: 'Choisissez votre patron',
    text: 'Réglez le paiement unique en toute sécurité via Payhip.',
  },
  {
    number: '2',
    icon: Download,
    title: 'Téléchargez le PDF',
    text: 'Votre guide de 14 pages vous est livré immédiatement.',
  },
  {
    number: '3',
    icon: Scissors,
    title: 'Crochetez vos breloques',
    text: 'Suivez le tutoriel illustré et transformez vos restes de fil en accessoires.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Que vais-je recevoir après mon achat ?',
    a: 'Un fichier PDF numérique de 14 pages contenant les trois patrons (Grenouille, Panda, Citron), le tutoriel pas-à-pas illustré et le bonus guide lifestyle.',
  },
  {
    q: 'Le patron est-il en français ?',
    a: 'Oui, entièrement en français, avec la terminologie technique française (ms, aug, dim, tours en spirale continue) : zéro confusion.',
  },
  {
    q: 'Quel niveau faut-il pour réaliser ce projet ?',
    a: 'Le patron est destiné aux débutants qui maîtrisent de base le crochet en rond (cercle magique). Les étapes sont détaillées avec plus de 20 photos et des diagrammes.',
  },
  {
    q: 'Quel matériel dois-je prévoir ?',
    a: 'Un fil de poids moyen (catégorie 4 / medium), un crochet de 4,0 mm, des yeux de sécurité et des anneaux porte-clés. Le reste dépend de vos couleurs préférées !',
  },
  {
    q: 'Est-ce un produit physique ?',
    a: 'Non, il s’agit uniquement d’un produit numérique. Aucun matériel ni breloque terminée n’est expédié.',
  },
  {
    q: 'Comment accéder à mon PDF ?',
    a: 'Après confirmation de votre achat, le téléchargement est disponible immédiatement via le processus de livraison numérique de Payhip.',
  },
] as const;

/* ------------------------------------------------------------------ */

export const BreloquesLandingPage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={BRELOQUES_LANDING_PAGE} />
      <Navbar />

      <main className="flex-grow">
        {/* ---- SECTION 1: Hero ---- */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#2D4539]">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1E3027] via-[#2D4539] to-[#355748]" />
            <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-[#91B5A3]/15 blur-3xl" />
            <div className="absolute -bottom-40 -left-24 w-96 h-96 rounded-full bg-[#D8B876]/10 blur-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E3027]/85 via-transparent to-[#1E3027]/40 md:hidden" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Copy */}
              <div className="max-w-xl text-left">
                <div className="inline-flex items-center gap-2 mb-4 text-[#D8B876] text-xs sm:text-sm font-semibold tracking-widest uppercase">
                  <span className="w-2 h-2 rounded-full bg-[#D8B876]" />
                  <span>Nouveau · Patron PDF en français</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] text-[#FFF9F2] font-semibold leading-[1.1] mb-4 tracking-tight drop-shadow-sm">
                  Trio de Mini Breloques{' '}
                  <span className="italic font-normal text-[#E8B6B0]">Amigurumi</span>
                </h1>

                <p className="font-serif text-xl sm:text-2xl text-[#FFF9F2]/90 font-medium mb-5 leading-snug">
                  Grenouille, Panda &amp; Citron — transformez vos restes de fil en
                  accessoires irrésistibles !
                </p>

                <p className="text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed mb-8 font-normal">
                  Un projet rapide, ultra-mignon et parfait pour écouler vos pelotes.
                  Que ce soit pour accessoiriser votre sac à main, vos clés ou offrir
                  un cadeau fait main qui fera fondre vos proches, ce patron est fait
                  pour vous.
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
                    Guide PDF de{' '}
                    <strong className="text-[#D8B876] font-semibold">14 pages</strong>
                  </div>
                </div>

                {/* Trust row */}
                <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm text-[#FFF9F2]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>3 modèles inclus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>20+ photos HD</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Téléchargement immédiat</span>
                  </div>
                </div>
              </div>

              {/* Hero visual */}
              <div className="hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-white/5 backdrop-blur-sm shadow-2xl">
                  <img
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222377/hero_-_Trio_de_Mini_Breloques_Amigurumi_image.jpg"
                    alt="Trio de Mini Breloques Amigurumi au crochet : grenouille, panda et citron"
                    className="w-full h-auto object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 2: The 3 models ---- */}
        <section id="les-modeles" className="py-20 sm:py-28 bg-[#F7F3ED]/70 border-b border-[#355748]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#355748] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#D8B876]" />
                <span>La Collection</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Découvrez les 3 breloques
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
                Trois mini-amigurumis pleins de caractère, prêts à accentuer vos
                clés, sacs et cadeaux.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
              {MODELS.map((model) => (
                <article
                  key={model.number}
                  className="group bg-[#FFF9F2] rounded-2xl overflow-hidden border border-[#355748]/10 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_12px_36px_-8px_rgba(53,87,72,0.14)] transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#2D4539]/5">
                    <img
                      src={model.image}
                      alt={model.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#FFF9F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-serif font-bold text-[#355748] shadow-xs">
                      Projet {model.number}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h3 className="font-serif text-2xl font-semibold text-[#252525] mb-2 group-hover:text-[#355748] transition-colors">
                      {model.title}
                    </h3>
                    <p className="text-sm text-[#252525]/75 leading-relaxed grow">
                      {model.description}
                    </p>
                    <div className="pt-4 mt-4 border-t border-[#355748]/10 flex items-center justify-between text-xs text-[#355748] font-medium">
                      <span>Inclus dans le guide</span>
                      <span className="font-serif italic text-sm text-[#355748]">Patron PDF</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 text-center">
              <a
                href={product.checkoutUrl}
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Obtenir les 3 patrons — {product.price}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-xs text-[#252525]/60 mt-3">
                Téléchargement immédiat · Aucun abonnement · Format PDF en français
              </p>
            </div>
          </div>
        </section>

        {/* ---- SECTION 3: What's inside the PDF ---- */}
        <section className="py-20 sm:py-28 bg-[#91B5A3]/15 border-b border-[#355748]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left: PDF content preview */}
              <div className="lg:col-span-5 relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#355748]/15 bg-white p-2 sm:p-3 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222376/Contenu_D%C3%A9taill%C3%A9_du_Fichier_image.jpg"
                    alt="Aperçu du contenu détaillé du guide PDF Trio de Mini Breloques Amigurumi"
                    className="w-full h-auto rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#355748] text-[#FFF9F2] px-4 py-2 rounded-xl text-xs font-semibold shadow-lg hidden sm:flex items-center gap-2">
                  <Timer className="w-4 h-4 text-[#D8B876]" />
                  <span>PDF 14 pages · Prêt à imprimer</span>
                </div>
              </div>

              {/* Right: included checklist */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-2">
                  Contenu Détaillé du Fichier
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight mb-4 leading-tight">
                  Ce qui est inclus dans le guide de{' '}
                  <span className="italic font-normal text-[#355748]">14 pages</span>
                </h2>
                <p className="text-base sm:text-lg text-[#252525]/80 mb-8 leading-relaxed">
                  Ce n’est pas un simple tutoriel, c’est un véritable guide de
                  conception haut de gamme, conçu pour les débutants comme pour les
                  passionnés de crochet.
                </p>

                <ul className="space-y-4">
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
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 4: Technical specs ---- */}
        <section className="py-20 sm:py-28 bg-[#FFF9F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
                Fiche Technique
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Caractéristiques du patron
              </h2>
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

            {/* Why choose strip */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-[#355748]/15 bg-white px-6 py-5 flex items-start gap-4 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]">
                <span className="w-9 h-9 shrink-0 rounded-full bg-[#91B5A3]/20 flex items-center justify-center text-[#355748]">
                  <Leaf className="w-4.5 h-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#252525] mb-1">
                    Zéro blabla, 100 % technique
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">
                    L’essentiel est centré sur le plaisir de crocheter et sur un
                    rendu professionnel.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-[#355748]/15 bg-white px-6 py-5 flex items-start gap-4 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]">
                <span className="w-9 h-9 shrink-0 rounded-full bg-[#91B5A3]/20 flex items-center justify-center text-[#355748]">
                  <Download className="w-4.5 h-4.5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[#252525] mb-1">
                    Téléchargement instantané
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">
                    Accédez à votre fichier PDF immédiatement après l’achat, où que
                    vous soyez dans le monde.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 5: How it works ---- */}
        <section className="py-20 sm:py-28 bg-[#F7F3ED]/50 border-y border-[#355748]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
                Simplicité &amp; Rapidité
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Comment ça fonctionne ?
              </h2>
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

        {/* ---- SECTION 6: Final offer ---- */}
        <section className="py-20 sm:py-28 bg-[#355748] text-[#FFF9F2] relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#91B5A3]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#D8B876]/10 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#D8B876] block mb-3">
                  Votre Patron de Breloques
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  Prêt à transformer vos restes de fil{' '}
                  <span className="italic font-normal text-[#E8B6B0]">
                    en accessoires irrésistibles ?
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#FFF9F2]/85 leading-relaxed mb-8 max-w-xl">
                  Trois mini-amigurumis, un guide PDF de 14 pages en français,
                  plus de 20 photos et un bonus lifestyle.
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
                    <span>Obtenir mes 3 patrons →</span>
                    <ArrowRight className="w-4 h-4 text-[#355748]" />
                  </a>
                </div>

                <p className="text-xs text-[#FFF9F2]/75 flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#D8B876] shrink-0" />
                  <span>Téléchargement numérique après achat via Payhip.</span>
                </p>

                <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#FFF9F2]/80">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Guide PDF 14 pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>100 % en français</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Niveau débutant</span>
                  </div>
                </div>
              </div>

              {/* Right: product visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 p-2 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1794222376/Votre_Patron_de_Breloques_image.jpg"
                    alt="Patron PDF Trio de Mini Breloques Amigurumi — grenouille, panda et citron au crochet"
                    className="w-full h-auto rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
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
                Tout ce qu’il faut savoir sur ce patron de mini breloques.
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
              <p className="text-sm text-[#252525]/65 mb-4">
                Une autre question ?
              </p>
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
              Collection Noël (4 décorations) et autres ressources pour tous vos
              projets crochet.
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
        label="Guide PDF 14 pages"
        ctaLabel="Obtenir le patron"
      />
    </div>
  );
};
