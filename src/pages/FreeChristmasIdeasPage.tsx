import React, { useState } from 'react';
import { ArrowRight, BookOpen, Gift, Heart, Sparkles } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { Seo } from '../components/blog/Seo';
import { FreeChristmasIdeasSignupForm } from '../components/FreeChristmasIdeasSignupForm';
import { FreeChristmasPagesGrid } from '../components/FreeChristmasPagesGrid';
import { FreeChristmasExperience } from '../components/FreeChristmasExperience';
import { FREE_CHRISTMAS_HERO_IMAGE } from '../config/freeChristmasIdeasConfig';
import { FREE_CHRISTMAS_LEAD_PAGE } from '../content/seo';

const BULLETS = [
  {
    icon: Sparkles,
    text: '40 idées de décorations et amigurumis de Noël au crochet',
  },
  {
    icon: Gift,
    text: '4 univers : Noël Kawaii, Noël Gourmand, Noël Amigurumi, Noël Magique',
  },
  {
    icon: Heart,
    text: 'Des photos et petites histoires pour t’inspirer et choisir tes prochains projets',
  },
] as const;

export const FreeChristmasIdeasPage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={FREE_CHRISTMAS_LEAD_PAGE} />
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
                  <span>Carnet gratuit</span>
                  <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
                </div>

                <h1 className="font-serif text-[2.1rem] sm:text-4xl lg:text-5xl font-semibold text-[#252525] leading-[1.12] tracking-tight mb-5">
                  Télécharge ton carnet gratuit :{' '}
                  <span className="italic font-normal text-[#355748]">
                    40 Idées de Noël au Crochet à Croquer
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#252525]/75 leading-relaxed max-w-xl mb-6">
                  Une collection de 40 inspirations créatives et adorables pour imaginer
                  tes prochaines décorations de Noël au crochet.
                </p>

                <div className="flex flex-col items-start gap-4">
                  <a
                    href="#inscription"
                    className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
                  >
                    <span>Recevoir le carnet gratuit</span>
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

              {/* Hero visual — carnet PDF mockup */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl overflow-hidden border border-[#355748]/15 bg-[#2D4539]/5 shadow-[0_16px_48px_-12px_rgba(53,87,72,0.25)] max-w-md mx-auto lg:max-w-none flex items-center justify-center">
                  <img
                    src={FREE_CHRISTMAS_HERO_IMAGE}
                    alt="Carnet gratuit 40 Idées de Noël au Crochet à Croquer"
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
              Ce que tu vas recevoir
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

            <div className="rounded-[14px] border border-[#D8B876]/50 bg-[#D8B876]/10 px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[13px] sm:text-sm italic text-[#252525]/75 leading-relaxed">
                <span className="font-semibold not-italic text-[#252525]">
                  Important :{' '}
                </span>
                ce carnet ne contient pas de tutoriels pas-à-pas. Il s’agit d’un carnet
                d’inspiration avec photos et descriptions. Les explications complètes
                seront proposées plus tard pour les modèles les plus demandés.
              </p>
            </div>
          </div>
        </section>

        {/* ---- New: 6-page preview ("La Collection Complète" template) ---- */}
        <FreeChristmasPagesGrid />

        {/* ---- New: Storytelling ("L'Expérience Fait Main" template) ---- */}
        <FreeChristmasExperience />

        {/* ---- Section C: Email signup form ---- */}
        <section
          aria-labelledby="signup-title"
          className="py-14 sm:py-20 bg-[#91B5A3]/15 border-y border-[#355748]/10"
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="signup-title"
              className="font-serif text-3xl sm:text-4xl font-semibold text-[#355748] leading-tight mb-3 text-center"
            >
              Rejoins le carnet
            </h2>
            <p className="text-base text-[#252525]/75 leading-relaxed text-center mb-9 max-w-lg mx-auto">
              Laisse ton prénom et ton e-mail pour recevoir le carnet gratuit
              immédiatement.
            </p>

            <FreeChristmasIdeasSignupForm />
          </div>
        </section>

        {/* ---- Section D: Trust / reassurance ---- */}
        <section className="py-12 sm:py-16 bg-[#FFF9F2]">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
