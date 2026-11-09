import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Download, ShoppingBag } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LegalModal } from '../components/LegalModal';
import { Seo } from '../components/blog/Seo';
import { PageHero } from '../components/PageHero';
import { ProductVisual } from '../components/ProductVisual';
import { PRODUCTS, STORE_TRUST_BADGES, isImagePlaceholder } from '../config/catalog';
import { FREE_RESOURCES } from '../config/resources';
import { STORE_PAGE } from '../content/seo';

export const StorePage: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={STORE_PAGE} />
      <Navbar />

      <main className="flex-grow">
        <PageHero
          eyebrow="Boutique"
          title={
            <>
              Nos patrons{' '}
              <span className="italic font-normal text-[#355748]">PDF en français</span>
            </>
          }
          subtitle="Des guides numériques à télécharger immédiatement, pensés pour tous les niveaux. Choisissez votre prochain projet et commencez dès aujourd’hui."
        >
          <div className="inline-flex items-center gap-2 text-xs font-medium text-[#355748] bg-white/70 border border-[#355748]/15 rounded-full px-4 py-2">
            <ShoppingBag className="w-3.5 h-3.5" aria-hidden="true" />
            <span>
              {PRODUCTS.length} produits disponibles · Téléchargement instantané
            </span>
          </div>
        </PageHero>

        {/* ---- Product grid ---- */}
        <section className="py-14 sm:py-20 bg-[#FFF9F2]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {PRODUCTS.map((product) => (
                <article
                  key={product.slug}
                  className="group bg-white rounded-[20px] overflow-hidden border border-[#355748]/10 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_20px_48px_-12px_rgba(53,87,72,0.18)] hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Visual */}
                  <a
                    href={product.landingHref}
                    tabIndex={-1}
                    aria-hidden="true"
                    className="relative block aspect-[4/3] w-full overflow-hidden bg-[#2D4539]/5"
                  >
                    <ProductVisual
                      product={product}
                      className={`w-full h-full ${isImagePlaceholder(product) ? '' : 'group-hover:scale-105'} transition-transform duration-500 ease-out`}
                      loading="lazy"
                    />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 bg-[#FFF9F2]/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-wider shadow-xs">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          product.badge === 'Nouveau'
                            ? 'bg-[#A83E46]'
                            : 'bg-[#D8B876]'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-[#355748]">{product.badge}</span>
                    </span>
                  </a>

                  {/* Content */}
                  <div className="p-6 sm:p-7 flex flex-col grow">
                    <span className="text-[11px] font-medium uppercase tracking-wider text-[#91B5A3] block mb-2">
                      {product.category}
                    </span>
                    <h2 className="font-serif text-2xl sm:text-[1.7rem] font-semibold text-[#252525] leading-snug mb-2 group-hover:text-[#355748] transition-colors">
                      <a href={product.landingHref} className="focus-visible:outline-none">
                        {product.name}
                      </a>
                    </h2>
                    <p className="font-serif italic text-[15px] text-[#355748] mb-3">
                      {product.tagline}
                    </p>
                    <p className="text-sm sm:text-[15px] text-[#252525]/75 leading-relaxed grow mb-5">
                      {product.description}
                    </p>

                    {/* Feature ticks */}
                    <ul className="space-y-2 mb-6">
                      {product.features.slice(0, 3).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-[13px] sm:text-sm text-[#252525]/80"
                        >
                          <CheckCircle2
                            className="w-4 h-4 text-[#91B5A3] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price + CTAs */}
                    <div className="mt-auto pt-5 border-t border-[#355748]/10">
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-serif text-3xl font-bold text-[#355748]">
                          {product.price}
                        </span>
                        <span className="text-xs text-[#252525]/55">
                          Paiement unique
                        </span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={product.landingHref}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#355748] hover:bg-[#284337] text-white text-sm font-semibold rounded-[12px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.98]"
                        >
                          <span>Découvrir</span>
                          <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <a
                          href={product.checkoutUrl}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-[#F7F3ED] text-[#355748] text-sm font-semibold rounded-[12px] border border-[#355748]/25 shadow-sm transition-all duration-200 active:scale-[0.98]"
                        >
                          <Download className="w-4 h-4" aria-hidden="true" />
                          <span>Acheter</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-[#252525]/55">
              Produits numériques — aucun article physique expédié. Livraison
              instantanée via Payhip.
            </p>
          </div>
        </section>

        {/* ---- Trust badges ---- */}
        <section className="py-14 bg-[#F7F3ED]/70 border-y border-[#355748]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {STORE_TRUST_BADGES.map((badge) => (
                <div
                  key={badge.title}
                  className="rounded-2xl border border-[#355748]/10 bg-white px-5 py-6 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)]"
                >
                  <div className="w-9 h-9 rounded-full bg-[#91B5A3]/20 flex items-center justify-center text-[#355748] mb-3">
                    <CheckCircle2 className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#252525] mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-sm text-[#252525]/70 leading-relaxed">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Free resources cross-link ---- */}
        <section className="py-16 sm:py-20 bg-[#91B5A3]/15 border-b border-[#355748]/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-3">
                Avant d’acheter
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-[#355748] tracking-tight">
                Découvre nos ressources gratuites
              </h2>
              <p className="mt-4 text-base text-[#252525]/75">
                Un carnet d’inspiration et un patron à télécharger librement, pour
                commencer dès aujourd’hui.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
              {FREE_RESOURCES.map((resource) => (
                <a
                  key={resource.slug}
                  href={resource.href}
                  className="group flex items-center gap-4 rounded-2xl border border-[#355748]/15 bg-white p-4 shadow-[0_4px_20px_-8px_rgba(53,87,72,0.08)] hover:shadow-[0_12px_36px_-8px_rgba(53,87,72,0.14)] transition-all duration-300"
                >
                  <img
                    src={resource.image}
                    alt={resource.imageAlt}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#91B5A3]">
                      Gratuit · {resource.badge}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[#252525] group-hover:text-[#355748] transition-colors leading-snug">
                      {resource.title}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[#355748]">
                      {resource.ctaLabel}
                      <ArrowRight
                        className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-10 text-center">
              <a
                href="/ressources-gratuites"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#355748] hover:text-[#284337] transition-colors"
              >
                <span>Voir toutes les ressources gratuites</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
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
