import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../config/constants';
import { BLOG_PAGES, HUB_CARDS, resized, srcSetFor } from '../content/blog';
import { ROUTES } from '../config/site';
import { Link } from '../router';
import { BlogLayout } from '../components/blog/BlogLayout';

export const BlogHub: React.FC = () => {
  return (
    <BlogLayout record={BLOG_PAGES[ROUTES.blog]}>
      {/* ---- Editorial hero ---- */}
      <section className="relative overflow-hidden bg-[#FFF9F2] pt-12 sm:pt-16 pb-14 sm:pb-20 border-b border-[#355748]/10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#91B5A3]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-[#E8B6B0]/15 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#91B5A3] mb-5">
            <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
            <Sparkles className="w-3.5 h-3.5 text-[#D8B876]" aria-hidden="true" />
            <span>Le Journal Crochet</span>
            <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
          </div>

          <h1 className="font-serif text-[2.35rem] sm:text-5xl lg:text-6xl font-semibold text-[#252525] leading-[1.1] tracking-tight mb-5">
            Des idées à crocheter,
            <br />
            <span className="italic font-normal text-[#355748]">
              des histoires à créer.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#252525]/75 leading-relaxed max-w-xl mx-auto">
            Inspirations, conseils et créations faites main pour donner vie à vos
            projets crochet.
          </p>
        </div>
      </section>

      {/* ---- Article grid ---- */}
      <section aria-labelledby="articles-title" className="py-14 sm:py-20 bg-[#FFF9F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="articles-title" className="sr-only">
            Les articles du journal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {HUB_CARDS.map((card) => (
              <article key={card.path}>
                <Link
                  to={card.path}
                  className="group flex h-full flex-col bg-[#FFF9F2] rounded-2xl overflow-hidden border border-[#355748]/10 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_16px_40px_-10px_rgba(53,87,72,0.16)] transition-all duration-300"
                >
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#2D4539]/5">
                    <img
                      src={resized(card.image, 1200)}
                      srcSet={srcSetFor(card.image, [640, 960, 1200])}
                      sizes="(min-width: 768px) 46vw, 92vw"
                      alt={card.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-[#FFF9F2]/92 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase text-[#355748] shadow-xs">
                      {card.category}
                    </div>
                  </div>

                  <div className="flex flex-col flex-grow p-6 sm:p-7">
                    <h3 className="font-serif text-2xl sm:text-[1.75rem] font-semibold text-[#252525] leading-snug mb-3 group-hover:text-[#355748] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-[15px] sm:text-base text-[#252525]/75 leading-relaxed mb-6">
                      {card.description}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-medium text-[#355748] border-t border-[#355748]/10 pt-5">
                      Lire l’article
                      <ArrowRight
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Sage CTA ---- */}
      <section
        aria-labelledby="hub-cta-title"
        className="py-16 sm:py-20 bg-[#91B5A3]/20 border-y border-[#355748]/10"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2
            id="hub-cta-title"
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-[#355748] leading-tight mb-5"
          >
            Envie de passer de l’inspiration
            <br className="hidden sm:block" /> à la création ?
          </h2>
          <p className="text-base sm:text-lg text-[#252525]/75 leading-relaxed max-w-xl mx-auto mb-9">
            Découvrez notre collection de quatre patrons de décorations de Noël au
            crochet, réunis dans un guide PDF en français.
          </p>
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>Découvrir les 4 patrons — 7,90 €</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </BlogLayout>
  );
};
