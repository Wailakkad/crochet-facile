import React, { useState } from 'react';
import { ArrowRight, BookOpen, Gift, Heart, Sparkles } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { Seo } from '../components/blog/Seo';
import { LeadMagnetSignupForm } from '../components/LeadMagnetSignupForm';
import {
  CACA_LICORNE_PDF_URL,
  CACA_LICORNE_SOURCE_TAG,
} from '../config/freeChristmasIdeasConfig';
import { CACA_LICORNE_PAGE } from '../content/seo';

const CACA_LICORNE_HERO_IMAGE =
  'https://res.cloudinary.com/dhkyla1rv/image/upload/v1794655778/Crochet_pattern_photo_page_98653186_2K.jpg';

const BULLETS = [
  {
    icon: Sparkles,
    text: 'Un patron PDF gratuit de 7 pages, entièrement en français',
  },
  {
    icon: BookOpen,
    text: 'Instructions tour par tour (49 tours) avec le nombre de mailles à chaque tour',
  },
  {
    icon: Gift,
    text: 'La corne, la broderie de la bouche et des joues, plus le façonnage en spirale',
  },
  {
    icon: Heart,
    text: 'Des photos d’étapes pour t’aider à obtenir la forme en spirale parfaite',
  },
] as const;

const MATERIEL = [
  'Fil de coton pour crochet de 2,5 mm : un dégradé brillant, rose, noir et beige',
  'Crochet de 2,5 mm',
  'Une paire de yeux de sécurité kawaii de 12 mm',
  'Ouate synthétique pour le rembourrage',
  'Aiguille à laine et ciseaux',
] as const;

export const CacaLicornePage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={CACA_LICORNE_PAGE} />
      <Navbar />

      <main className="flex-grow">
        {/* ---- Section A: Hero ---- */}
        <section className="relative overflow-hidden bg-[#FFF9F2] pt-12 sm:pt-16 pb-14 sm:pb-16 border-b border-[#355748]/10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#91B5A3]/15 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-[#E8B6B0]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#91B5A3] mb-5">
                  <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
                  <span>Patron gratuit</span>
                  <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
                </div>

                <h1 className="font-serif text-[2.1rem] sm:text-4xl lg:text-5xl font-semibold text-[#252525] leading-[1.12] tracking-tight mb-5">
                  Caca de Licorne Amigurumi :{' '}
                  <span className="italic font-normal text-[#355748]">
                    patron crochet gratuit en français
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#252525]/75 leading-relaxed max-w-xl mb-6">
                  Crochetez votre propre Caca de Licorne, un amigurumi kawaii, pastel
                  et pailleté, avec ce patron PDF 100 % gratuit en français.
                </p>

                <div className="flex flex-col items-start gap-4">
                  <a
                    href="#inscription"
                    className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>Télécharger le patron gratuit</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>

                  <p className="inline-flex items-center gap-2 text-sm font-medium text-[#355748] bg-[#91B5A3]/15 rounded-full px-4 py-2">
                    <BookOpen className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span>
                      Reçois le PDF immédiatement dans ton navigateur après ton
                      inscription.
                    </span>
                  </p>

                  <p className="text-xs text-[#252525]/55">
                    Gratuit · Sans engagement · Désinscription en un clic
                  </p>
                </div>
              </div>

              {/* Hero visual */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#355748]/15 bg-[#2D4539]/5 shadow-[0_16px_48px_-12px_rgba(53,87,72,0.25)] max-w-md mx-auto lg:max-w-none">
                  <img
                    src={CACA_LICORNE_HERO_IMAGE}
                    alt="Caca de Licorne amigurumi au crochet — patron PDF gratuit en français"
                    className="w-full h-auto object-contain"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Section B: What's inside ---- */}
        <section aria-labelledby="inside-title" className="py-14 sm:py-20 bg-[#FFF9F2]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="inside-title"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#355748] leading-tight mb-8 text-center"
            >
              Ce que vous recevez
            </h2>

            <ul className="space-y-5 mb-8">
              {BULLETS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-4 rounded-2xl border border-[#355748]/10 bg-white px-5 py-4 sm:px-6 sm:py-5 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]"
                >
                  <span className="mt-0.5 w-9 h-9 shrink-0 rounded-full bg-[#91B5A3]/20 flex items-center justify-center text-[#355748]">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </span>
                  <span className="text-[15px] sm:text-base text-[#252525]/85 leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Matériel ---- */}
        <section aria-labelledby="materiel-title" className="py-14 sm:py-20 bg-[#91B5A3]/15 border-y border-[#355748]/10">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="materiel-title"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#355748] leading-tight mb-3 text-center"
            >
              Matériel nécessaire
            </h2>
            <p className="text-sm text-[#252525]/65 text-center mb-8">
              (non inclus)
            </p>

            <ul className="space-y-3 mb-8">
              {MATERIEL.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-[#355748]/10 bg-white px-5 py-4 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]"
                >
                  <span className="mt-1 w-2 h-2 shrink-0 rounded-full bg-[#E8B6B0]" aria-hidden="true" />
                  <span className="text-[15px] text-[#252525]/85 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="rounded-[14px] border border-[#D8B876]/50 bg-[#D8B876]/10 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[13px] sm:text-sm italic text-[#252525]/75 leading-relaxed">
                <span className="font-semibold not-italic text-[#252525]">
                  Téléchargement immédiat :{' '}
                </span>
                cliquez sur le bouton, puis téléchargez le PDF tout de suite. Aucun
                produit physique n’est envoyé.
              </p>
            </div>
          </div>
        </section>

        {/* ---- Cross-sell ---- */}
        <section className="py-14 sm:py-20 bg-[#FFF9F2]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#355748] leading-tight mb-4">
              Vous avez aimé{' '}
              <span className="italic font-normal text-[#E8B6B0]">ce patron ?</span>
            </h2>
            <p className="text-base text-[#252525]/75 leading-relaxed mb-8 max-w-xl mx-auto">
              À la fin du PDF, découvrez mes autres patrons détaillés en français :
              Lapin Amigurumi, Bonhomme de neige, 5 Gnomes de Noël et Mini Breloques.
            </p>
            <a
              href="/boutique"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
            >
              <span>Voir la boutique</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* ---- Section: Email signup form ---- */}
        <section
          aria-labelledby="signup-title"
          className="py-14 sm:py-20 bg-[#E8B6B0]/20 border-y border-[#355748]/10"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="signup-title"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#355748] leading-tight mb-3 text-center"
            >
              Recevoir le patron gratuit
            </h2>
            <p className="text-base text-[#252525]/75 leading-relaxed text-center mb-9 max-w-lg mx-auto">
              Laisse ton prénom et ton e-mail pour télécharger le PDF immédiatement.
            </p>

            <LeadMagnetSignupForm
              pdfUrl={CACA_LICORNE_PDF_URL}
              sourceTag={CACA_LICORNE_SOURCE_TAG}
              nameId="caca-licorne-name"
              emailId="caca-licorne-email"
              submitLabel="Recevoir le patron gratuit"
              downloadLabel="Télécharger le patron (PDF)"
              successTitle="Licorne en route ! 🦄"
              successText="Merci pour ton inscription. Ton lien de téléchargement est prêt :"
            />
          </div>
        </section>

        {/* ---- Conditions + trust ---- */}
        <section className="py-12 sm:py-16 bg-[#FFF9F2]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="rounded-[14px] border border-[#355748]/15 bg-white px-5 py-4 sm:px-6 sm:py-5 mb-8 text-left shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]">
              <p className="text-[13px] sm:text-sm text-[#252525]/75 leading-relaxed">
                <span className="font-semibold text-[#252525]">
                  Conditions d’utilisation :{' '}
                </span>
                ce patron gratuit est destiné à un usage personnel. Il est interdit de
                le revendre, de le copier ou de le partager comme votre propre création.
              </p>
            </div>

            <p className="text-[13px] sm:text-sm text-[#252525]/60 leading-relaxed">
              En t’inscrivant, tu rejoins la liste e-mail de Crochet Facile. Tu recevras
              parfois d’autres idées au crochet, des coulisses et des offres spéciales.
              Tu pourras te désinscrire à tout moment en un clic.
            </p>
          </div>
        </section>
      </main>

      <Footer onOpenLegal={setLegalModalType} />
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType}
      />
    </div>
  );
};
