import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FREE_CHRISTMAS_PAGE_IMAGES } from '../config/freeChristmasIdeasConfig';

/**
 * "La Collection Complète" template adapted to the free carnet:
 * a grid previewing the 6 pages of « 40 Idées de Noël au Crochet à Croquer ».
 */
export const FreeChristmasPagesGrid: React.FC = () => {
  const pages = [
    {
      number: '01',
      title: 'Sapin lait fraise',
      description:
        'Un sapin de Noël rose pastel inspiré du lait fraise des bois, aussi joli à poser sur une étagère qu’à suspendre au sapin.',
      image: FREE_CHRISTMAS_PAGE_IMAGES.page01,
      alt: 'Sapin de Noël rose lait fraise au crochet - idée du carnet',
      details: 'Kawaii & Gourmand',
    },
    {
      number: '02',
      title: 'Fantôme au bonnet de Noël',
      description:
        'Un petit fantôme espiègle coiffé d’un bonnet de Père Noël : une décoration aussi drôle que tendre pour les fêtes.',
      image: FREE_CHRISTMAS_PAGE_IMAGES.page02,
      alt: 'Fantôme de Noël avec bonnet du Père Noël au crochet - idée du carnet',
      details: 'Univers Kawaii',
    },
    {
      number: '03',
      title: 'Chat en pain d’épices',
      description:
        'Un chaton endormi à la forme de biscuit de pain d’épices, réalisé dans des tons chauds et épicés.',
      image: FREE_CHRISTMAS_PAGE_IMAGES.page03,
      alt: 'Chat en pain d’épices au crochet - idée du carnet de Noël',
      details: 'Gourmand & Kawaii',
    },
    {
      number: '04',
      title: 'Cadeau à oreilles de lapin',
      description:
        'Une boîte cadeau déguisée en lapin, oreilles rebondies et nœud festif en guise de ruban.',
      image: FREE_CHRISTMAS_PAGE_IMAGES.page04,
      alt: 'Cadeau de Noël à oreilles de lapin au crochet - idée du carnet',
      details: 'Univers Kawaii',
    },
    {
      number: '05',
      title: 'Mug neigeux aux guimauves',
      description:
        'Un mug de Noël souriant garni de personnages en guimauve : l’accessoire festif idéal pour l’hiver.',
      image: FREE_CHRISTMAS_PAGE_IMAGES.page05,
      alt: 'Mug de Noël avec personnages guimauves au crochet - idée du carnet',
      details: 'Univers Gourmand',
    },
    {
      number: '06',
      title: 'Axolotl de Noël',
      description:
        'Un axolotl pastel habillé pour les fêtes : une création originale entre amigurumi et décoration de Noël.',
      image: FREE_CHRISTMAS_PAGE_IMAGES.page06,
      alt: 'Axolotl pastel de Noël au crochet - idée du carnet',
      details: 'Amigurumi festif',
    },
  ];

  return (
    <section
      id="apercu-carnet"
      className="py-20 sm:py-28 bg-[#F7F3ED]/70 border-y border-[#355748]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#355748] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B876]" />
            <span>La Collection Complète</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Feuillete les 6 pages du carnet
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
            Un aperçu des pages qui t’attendent dans le carnet gratuit.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pages.map((page) => (
            <div
              key={page.number}
              className="group bg-[#FFF9F2] rounded-2xl overflow-hidden border border-[#355748]/10 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_12px_36px_-8px_rgba(53,87,72,0.14)] transition-all duration-300 flex flex-col"
            >
              {/* Page preview — displayed at its natural size (no crop) */}
              <div className="relative w-full overflow-hidden bg-[#2D4539]/5">
                <img
                  src={page.image}
                  alt={page.alt}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-3 left-3 bg-[#FFF9F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-serif font-bold text-[#355748] shadow-xs">
                  Page {page.number}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#91B5A3] block mb-1">
                    {page.details}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#252525] mb-2 group-hover:text-[#355748] transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">
                    {page.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#355748]/10 flex items-center justify-between text-xs text-[#355748] font-medium">
                  <span>Dans le carnet gratuit</span>
                  <span className="font-serif italic text-sm text-[#355748]">PDF offert</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Below Grid CTA — scrolls to the signup form */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href="#inscription"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>Recevoir les 6 pages — gratuit</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#252525]/60 mt-3">
            Carnet PDF offert · Accès immédiat après inscription · 40 idées à croquer
          </p>
        </div>
      </div>
    </section>
  );
};
