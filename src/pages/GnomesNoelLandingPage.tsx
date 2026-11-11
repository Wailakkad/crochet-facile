import React, { useState } from 'react';
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
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { MobileStickyBar } from '../components/MobileStickyBar';
import { Seo } from '../components/blog/Seo';
import { GNOMES_PRODUCT } from '../config/catalog';
import { GNOMES_NOEL_LANDING_PAGE } from '../content/seo';

const product = GNOMES_PRODUCT;

const IMG = {
  hero: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394794/Gnomes_de_No%C3%ABl_au_Crochet_hero_image.jpg',
  group: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394874/Tes_5_Gnomes_de_No%C3%ABl_image.jpg',
  pdf: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394793/Ce_que_contient_le_PDF_image.jpg',
  pereNoel: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394793/Le_P%C3%A8re_No%C3%ABl.jpg',
  sapin: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394793/Le_Sapin_de_No%C3%ABl.jpg',
  bonhommeNeige: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394793/Le_Bonhomme_de_neige.jpg',
  flocon: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394794/Le_Flocon_de_neige.jpg',
  painEpices: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794394793/Le_Pain_d_%C3%A9pices.jpg',
} as const;

/* ------------------------------------------------------------------ */
/* The 5 gnomes                                                        */
/* ------------------------------------------------------------------ */

const GNOMES = [
  {
    number: '01',
    title: 'Le Père Noël',
    description:
      'Bonnet rouge à pompon, ceinture noire et boucle jaune : le classique indémodable de la collection.',
    image: IMG.pereNoel,
    alt: 'Gnome Père Noël au crochet — patron PDF',
  },
  {
    number: '02',
    title: 'Le Sapin de Noël',
    description:
      'Étoile jaune sur le bonnet et ampoules brodées tout autour : un gnome qui brille de mille feux.',
    image: IMG.sapin,
    alt: 'Gnome Sapin de Noël au crochet — patron PDF',
  },
  {
    number: '03',
    title: 'Le Bonhomme de neige',
    description:
      'Bonnet noir, houx, baie et écharpe rouge : la douceur hivernale incarnée dans un mini amigurumi.',
    image: IMG.bonhommeNeige,
    alt: 'Gnome Bonhomme de neige au crochet — patron PDF',
  },
  {
    number: '04',
    title: 'Le Flocon de neige',
    description:
      'Bonnet bleu clair, gland et flocon brodé : une touche glacée et élégante pour la cheminée.',
    image: IMG.flocon,
    alt: 'Gnome Flocon de neige au crochet — patron PDF',
  },
  {
    number: '05',
    title: 'Le Pain d’épices',
    description:
      'Glaçage, bouton et zigzags brodés : les senteurs de Noël recréées au crochet, mignon à croquer.',
    image: IMG.painEpices,
    alt: 'Gnome Pain d’épices au crochet — patron PDF',
  },
] as const;

/* ------------------------------------------------------------------ */
/* What's inside the PDF                                               */
/* ------------------------------------------------------------------ */

const INCLUDED = [
  {
    icon: FileText,
    title: 'Un patron 100 % en français',
    text: 'Aucune traduction à faire : abréviations expliquées (ms, mc, ml, br, dim…) pour avancer sans bloquer.',
  },
  {
    icon: Sparkles,
    title: 'La liste du matériel et des couleurs',
    text: 'Pour chaque gnome, la liste exacte des fils et couleurs : tu prépares ta commande en un clin d’œil.',
  },
  {
    icon: Check,
    title: 'Instructions tour par tour',
    text: 'Le total de mailles à chaque étape, pour vérifier ton avancement et rassurer ton comptage.',
  },
  {
    icon: Ruler,
    title: 'Échantillon et hauteur finale',
    text: 'Environ 18 cm une fois terminé : tu sais exactement à quoi ressemble ton gnome avant de commencer.',
  },
  {
    icon: Scissors,
    title: 'Finitions détaillées',
    text: 'Pompon, gland, broderies et assemblage expliqués pas à pas pour un rendu propre et pro.',
  },
  {
    icon: Timer,
    title: '23 pages, lis partout',
    text: 'À lire sur ordinateur, tablette ou smartphone — ou à imprimer pour crocheter les yeux dans le fil.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Technical specs                                                     */
/* ------------------------------------------------------------------ */

const SPECS = [
  {
    icon: Star,
    label: 'Niveau',
    value: 'Amigurumi débutant',
    detail:
      'Maîtrise des bases en rond : anneau magique, ms, aug et dim. Si tu as déjà fait un amigurumi, tu peux te lancer.',
  },
  {
    icon: Scissors,
    label: 'Matériel',
    value: 'Crochet 3,75 mm',
    detail:
      'Fil aux couleurs de chaque gnome, marqueurs de mailles, ouate de rembourrage et aiguille à laine.',
  },
  {
    icon: FileText,
    label: 'Format',
    value: 'PDF A4 · 23 pages',
    detail:
      'Mise en page claire, optimisée pour la lecture sur tous tes écrans ou pour l’impression à la maison.',
  },
  {
    icon: Download,
    label: 'Livraison',
    value: 'Instantanée',
    detail:
      'Fichier disponible immédiatement après l’achat, partout dans le monde — aucun abonnement.',
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
    text: 'Paiement unique et sécurisé via Payhip, sans engagement.',
  },
  {
    number: '2',
    icon: Download,
    title: 'Télécharge ton PDF',
    text: 'Ton guide de 23 pages t’est livré juste après le paiement.',
  },
  {
    number: '3',
    icon: Sparkles,
    title: 'Choisis ton premier gnome',
    text: 'Suis le tour par tour, maîtrise la base, puis enchaîne les quatre autres.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* Why you'll love it                                                  */
/* ------------------------------------------------------------------ */

const REASONS = [
  {
    icon: Heart,
    title: 'Un seul apprentissage, cinq résultats',
    text: 'Tu maîtrises la base dès le premier gnome — les suivants vont plus vite, et tu prends plaisir à voir ta collection grandir.',
  },
  {
    icon: Gift,
    title: 'Des déco faites par toi',
    text: 'Des décorations de Noël à garder, à offrir ou à exposer : la cheminée, le sapin ou les cadeaux de tes proches.',
  },
  {
    icon: Users,
    title: 'Un patron en français',
    text: 'Écrit pour les crocheteuses francophones, sans traduction ni jargon importé : tu avances en confiance.',
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const FAQS = [
  {
    q: 'Que vais-je recevoir après mon achat ?',
    a: 'Un fichier PDF numérique de 23 pages contenant le patron complet des 5 gnomes (Père Noël, sapin, bonhomme de neige, flocon de neige et pain d’épices), la liste du matériel et des couleurs, les instructions tour par tour et le guide des finitions.',
  },
  {
    q: 'Le patron est-il en français ?',
    a: 'Oui, entièrement en français, avec les abréviations expliquées (ms, mc, ml, br, dim…) : zéro confusion, aucune traduction à faire.',
  },
  {
    q: 'Quel niveau faut-il pour réaliser ce projet ?',
    a: 'Il faut connaître les bases du crochet en rond : anneau magique, mailles serrées, augmentations et diminutions. Si tu as déjà crocheté un amigurumi, tu peux te lancer sans hésiter. Le corps, le bonnet, le nez et la barbe étant identiques pour les 5 gnomes, tu répètes la même base et tu changes seulement les couleurs et les détails.',
  },
  {
    q: 'Quel matériel dois-je prévoir ?',
    a: 'Un crochet de 3,75 mm, des fils aux couleurs de chaque gnome, des marqueurs de mailles, de l’ouate de rembourrage et une aiguille à laine. La liste détaillée figure dans le PDF.',
  },
  {
    q: 'Quelle est la taille des gnomes terminés ?',
    a: 'Environ 18 cm de hauteur, selon ton fil, ton crochet et ta tension. L’échantillon et la hauteur finale sont indiqués dans le patron.',
  },
  {
    q: 'Est-ce un produit physique ?',
    a: 'Non, il s’agit uniquement d’un patron numérique. Tu ne reçois ni les gnomes terminés ni le matériel. Les couleurs et dimensions peuvent varier selon ton fil, ton crochet et ta tension.',
  },
  {
    q: 'Comment accéder à mon PDF ?',
    a: 'Après confirmation de ton achat, le téléchargement est disponible immédiatement via le processus de livraison numérique de Payhip.',
  },
] as const;

/* ------------------------------------------------------------------ */

export const GnomesNoelLandingPage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={GNOMES_NOEL_LANDING_PAGE} />
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

                <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.2rem] text-[#FFF9F2] font-semibold leading-[1.1] mb-4 tracking-tight drop-shadow-sm">
                  5 Gnomes de Noël{' '}
                  <span className="italic font-normal text-[#E8B6B0]">au Crochet</span>
                </h1>

                <p className="font-serif text-xl sm:text-2xl text-[#FFF9F2]/90 font-medium mb-5 leading-snug">
                  1 base, 5 décos uniques — apprends une seule fois, crochète cinq
                  fois !
                </p>

                <p className="text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed mb-8 font-normal">
                  Et si tu apprenais une seule base… pour crocheter 5 gnomes de Noël
                  tous différents ? 🎄 Un seul corps, un seul bonnet, un seul nez, une
                  seule barbe : tu changes les couleurs et les petits détails, et chaque
                  gnome devient un personnage à part. Père Noël, sapin, bonhomme de
                  neige, flocon de neige, pain d’épices — de quoi décorer ta cheminée,
                  ton sapin ou préparer des cadeaux faits main.
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
                    <strong className="text-[#D8B876] font-semibold">23 pages</strong>
                  </div>
                </div>

                {/* Trust row */}
                <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm text-[#FFF9F2]/90">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>5 gnomes inclus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Tour par tour</span>
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
                    src={IMG.hero}
                    alt="Les 5 gnomes de Noël au crochet : Père Noël, sapin, bonhomme de neige, flocon et pain d’épices"
                    className="w-full h-auto object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 2: The 5 gnomes ---- */}
        <section id="les-gnomes" className="py-20 sm:py-28 bg-[#F7F3ED]/70 border-b border-[#355748]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#355748] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#D8B876]" />
                <span>🎅 Les 5 gnomes du patron</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Cinq personnages, une seule base
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
                Un seul corps, un seul bonnet, un seul nez, une seule barbe — tu
                changes les couleurs et les petits détails, et chaque gnome devient un
                personnage à part.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {GNOMES.map((gnome) => (
                <article
                  key={gnome.number}
                  className="group bg-[#FFF9F2] rounded-2xl overflow-hidden border border-[#355748]/10 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_12px_36px_-8px_rgba(53,87,72,0.14)] transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-square w-full overflow-hidden bg-[#2D4539]/5">
                    <img
                      src={gnome.image}
                      alt={gnome.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#FFF9F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-serif font-bold text-[#355748] shadow-xs">
                      Gnome {gnome.number}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <h3 className="font-serif text-2xl font-semibold text-[#252525] mb-2 group-hover:text-[#355748] transition-colors">
                      {gnome.title}
                    </h3>
                    <p className="text-sm text-[#252525]/75 leading-relaxed grow">
                      {gnome.description}
                    </p>
                    <div className="pt-4 mt-4 border-t border-[#355748]/10 flex items-center justify-between text-xs text-[#355748] font-medium">
                      <span>Inclus dans le patron</span>
                      <span className="font-serif italic text-sm text-[#355748]">Patron PDF</span>
                    </div>
                  </div>
                </article>
              ))}

              {/* Bonus card */}
              <article className="rounded-2xl border border-dashed border-[#355748]/30 bg-[#91B5A3]/15 p-7 flex flex-col items-center justify-center text-center min-h-[280px]">
                <span className="w-14 h-14 rounded-full bg-[#355748] text-[#FFF9F2] flex items-center justify-center mb-4 shadow-sm">
                  <Gift className="w-6 h-6" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#252525] mb-2">
                  Et en bonus…
                </h3>
                <p className="text-sm text-[#252525]/75 leading-relaxed max-w-[240px]">
                  Tu maîtrises la base dès le premier gnome — les quatre suivants vont
                  plus vite. Une collection qui grandit avec toi.
                </p>
              </article>
            </div>

            <div className="mt-14 text-center">
              <a
                href={product.checkoutUrl}
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <span>Obtenir les 5 patrons — {product.price}</span>
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
                    src={IMG.pdf}
                    alt="Aperçu du contenu du patron PDF 5 Gnomes de Noël au Crochet"
                    className="w-full h-auto rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#355748] text-[#FFF9F2] px-4 py-2 rounded-xl text-xs font-semibold shadow-lg hidden sm:flex items-center gap-2">
                  <Timer className="w-4 h-4 text-[#D8B876]" />
                  <span>PDF 23 pages · Prêt à imprimer</span>
                </div>
              </div>

              {/* Right: included checklist */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-2">
                  ✅ Ce que contient le PDF
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight mb-4 leading-tight">
                  Tout ce qu’il faut pour{' '}
                  <span className="italic font-normal text-[#355748]">réussir du premier coup</span>
                </h2>
                <p className="text-base sm:text-lg text-[#252525]/80 mb-8 leading-relaxed">
                  Ce n’est pas une simple liste de points : c’est un guide complet,
                  pensé pour que tu saches toujours où tu en es — et que tu termines
                  tes 5 gnomes fièrement.
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

        {/* ---- SECTION 4: Why you'll love it + specs ---- */}
        <section className="py-20 sm:py-28 bg-[#FFF9F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
                🎁 Pourquoi tu vas l’adorer
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Fait pour prendre plaisir
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
                Fiche Technique
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                Caractéristiques du patron
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
                👩 Pour celles qui connaissent déjà les bases du crochet en rond :
                anneau magique, mailles serrées, augmentations et diminutions. Si tu as
                déjà crocheté un amigurumi, tu peux te lancer.
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
                    Crochet 3,75 mm · fil aux couleurs de chaque gnome · marqueurs de
                    mailles · ouate de rembourrage · aiguille à laine.
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
                📥 Comment ça marche
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
                En 3 étapes, tu es lancée
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
                  Tes 5 Gnomes de Noël
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
                  Noël approche : lance-toi dès maintenant{' '}
                  <span className="italic font-normal text-[#E8B6B0]">
                    et télécharge ton patron !
                  </span>
                </h2>

                <p className="text-base sm:text-lg text-[#FFF9F2]/85 leading-relaxed mb-8 max-w-xl">
                  Un patron de 23 pages en français, 5 gnomes uniques sur une seule
                  base, le tour par tour avec le total de mailles — et une collection
                  de déco faite main qui fera fondre tes proches. 🎄
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
                    <span>Obtenir mes 5 gnomes →</span>
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
                    <span>Patron PDF 23 pages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>100 % en français</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#91B5A3] shrink-0" />
                    <span>Hauteur ≈ 18 cm</span>
                  </div>
                </div>
              </div>

              {/* Right: product visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 p-2 flex items-center justify-center">
                  <img
                    src={IMG.group}
                    alt="Patron PDF 5 Gnomes de Noël au Crochet — 1 base, 5 décos uniques"
                    className="w-full h-auto rounded-xl object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- SECTION 7: Before you buy ---- */}
        <section className="py-14 sm:py-16 bg-[#D8B876]/15 border-b border-[#355748]/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-3">
              ⚠️ À savoir avant d’acheter
            </span>
            <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
              Ce produit est un <strong>patron PDF numérique</strong> : tu ne reçois ni
              les gnomes terminés ni le matériel. Les couleurs et les dimensions peuvent
              varier selon ton fil, ton crochet et ta tension.
            </p>
          </div>
        </section>

        {/* ---- SECTION 8: FAQ ---- */}
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
                Tout ce qu’il faut savoir sur ce patron de 5 gnomes de Noël.
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

        {/* ---- SECTION 9: Cross-link to store ---- */}
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
              Collection Noël (4 décorations), mini breloques et autres ressources pour
              tous vos projets crochet.
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
        label="Patron PDF 23 pages"
        ctaLabel="Obtenir le patron"
      />
    </div>
  );
};
