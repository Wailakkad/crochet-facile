import React, { useState } from 'react';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { Seo } from '../components/blog/Seo';
import { PageHero } from '../components/PageHero';
import { FREE_RESOURCES } from '../config/resources';
import { FREE_RESOURCES_PAGE } from '../content/seo';

export const FreeResourcesPage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={FREE_RESOURCES_PAGE} />
      <Navbar />

      <main className="flex-grow">
        <PageHero
          eyebrow="Ressources gratuites"
          title={
            <>
              Nos ressources{' '}
              <span className="italic font-normal text-[#355748]">gratuites</span>
            </>
          }
          subtitle="Patrons et carnets à télécharger gratuitement, sans friction. Choisissez une ressource et commencez à créer dès aujourd’hui."
        />

        {/* ---- Resource cards ---- */}
        <section className="py-14 sm:py-20 bg-[#FFF9F2]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {FREE_RESOURCES.map((resource) => (
                <article
                  key={resource.slug}
                  className="group bg-white rounded-2xl overflow-hidden border border-[#355748]/10 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_16px_40px_-10px_rgba(53,87,72,0.16)] transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#2D4539]/5">
                    <img
                      src={resource.image}
                      alt={resource.imageAlt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#FFF9F2]/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider text-[#355748] shadow-xs">
                      Gratuit · {resource.badge}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col grow">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#91B5A3] block mb-2">
                      {resource.category}
                    </span>
                    <h2 className="font-serif text-2xl font-semibold text-[#252525] mb-3 group-hover:text-[#355748] transition-colors leading-snug">
                      {resource.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed grow mb-5">
                      {resource.description}
                    </p>

                    <a
                      href={resource.href}
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#355748] hover:bg-[#284337] text-white text-sm font-semibold rounded-[12px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98] self-start"
                    >
                      <span>{resource.ctaLabel}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Newsletter note */}
            <div className="mt-10 rounded-2xl border border-[#D8B876]/50 bg-[#D8B876]/10 px-5 py-5 sm:px-7 sm:py-6 flex items-start gap-4">
              <span className="w-9 h-9 shrink-0 rounded-full bg-[#D8B876]/25 flex items-center justify-center text-[#355748]">
                <Newspaper className="w-4.5 h-4.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[#252525] mb-1">
                  D’autres ressources arrivent
                </h3>
                <p className="text-sm text-[#252525]/75 leading-relaxed">
                  Inscris-toi au carnet d’idées pour recevoir les prochains patrons et
                  inspirations gratuits en avant-première dans ta boîte mail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Store cross-link ---- */}
        <section className="py-16 sm:py-20 bg-[#355748] text-[#FFF9F2] relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#91B5A3]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#D8B876]/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D8B876] block mb-3">
              Prêt à créer ?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              Passer aux{' '}
              <span className="italic font-normal text-[#E8B6B0]">patrons complets</span>
            </h2>
            <p className="text-base sm:text-lg text-[#FFF9F2]/85 leading-relaxed mb-8 max-w-xl mx-auto">
              Quatre décorations de Noël détaillées pas à pas, réunies dans un guide
              PDF en français, à partir de 7,90 €.
            </p>
            <a
              href="/boutique"
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#FFF9F2] hover:bg-white text-[#355748] text-base font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
            >
              <span>Découvrir la boutique</span>
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
    </div>
  );
};
