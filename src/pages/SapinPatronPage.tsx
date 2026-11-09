import React, { useState } from 'react';
import { ArrowDownToLine } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { Seo } from '../components/blog/Seo';
import { SAPIN_PATRON_PDF_URL } from '../config/freeChristmasIdeasConfig';
import { SAPIN_PATRON_PAGE } from '../content/seo';

export const SapinPatronPage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={SAPIN_PATRON_PAGE} />
      <Navbar />

      <main className="flex-grow">
        <section className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden border border-[#355748]/15 bg-white shadow-[0_16px_48px_-12px_rgba(53,87,72,0.25)]">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Sapin_de_No%C3%ABl.jpg"
                alt="Sapin de Noël au crochet amigurumi avec étoile jaune et ruban rouge"
                className="w-full aspect-[4/3] object-cover"
                decoding="async"
              />
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#91B5A3] mb-4">
                <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
                <span>Patron gratuit</span>
                <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252525] leading-tight mb-4">
                Sapin au crochet —{' '}
                <span className="italic font-normal text-[#355748]">
                  patron gratuit en français
                </span>
              </h1>

              <p className="text-base text-[#252525]/75 leading-relaxed max-w-xl mx-auto mb-7">
                Télécharge le patron PDF du sapin de Noël au crochet, entièrement en
                français. Un adorable petit sapin avec son étoile et son nœud rouge :
                un projet simple et festif à croquer pour décorer la maison ou offrir
                à tes proches.
              </p>

              <a
                href={SAPIN_PATRON_PDF_URL}
                download
                className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
              >
                <ArrowDownToLine className="w-4 h-4" aria-hidden="true" />
                <span>Télécharger le PDF gratuit</span>
              </a>

              <p className="mt-4 text-xs text-[#252525]/55">
                Gratuit · PDF · Sans inscription
              </p>
            </div>
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
