import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { CHECKOUT_URL } from '../config/constants';

export const PatternsGrid: React.FC = () => {
  const patterns = [
    {
      number: '01',
      title: 'Sapin de Noël',
      description: 'Un adorable petit sapin avec son étoile et son nœud rouge.',
      image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Sapin_de_No%C3%ABl.jpg',
      alt: 'Sapin de Noël au crochet amigurumi avec étoile jaune et ruban rouge',
      details: 'Amigurumi de table ou suspension',
    },
    {
      number: '02',
      title: 'Clochettes de Noël',
      description: 'De jolies clochettes colorées pour décorer votre intérieur.',
      image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Clochettes_de_No%C3%ABl.jpg',
      alt: 'Clochettes de Noël au crochet festives et colorées',
      details: 'Ornements de sapin et table',
    },
    {
      number: '03',
      title: 'Mini chaussette',
      description: 'Une décoration traditionnelle aux couleurs de Noël.',
      image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/Mini_chaussette.jpg',
      alt: 'Mini chaussette de Noël au crochet faite main',
      details: 'Suspension délicate pour sapin',
    },
    {
      number: '04',
      title: 'Guirlande de sapins',
      description: 'Une guirlande colorée pour une décoration faite main.',
      image: 'https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356092/Guirlande_de_sapins.jpg',
      alt: 'Guirlande de sapins au crochet sur ficelle naturelle',
      details: 'Décoration murale ou cheminée',
    },
  ];

  return (
    <section id="les-modeles" className="py-20 sm:py-28 bg-[#F7F3ED]/70 border-y border-[#355748]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[#355748] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8B876]" />
            <span>La Collection Complète</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Découvrez les 4 créations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#252525]/75">
            Quatre idées pour apporter une touche unique à votre Noël.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {patterns.map((item) => (
            <div
              key={item.number}
              className="group bg-[#FFF9F2] rounded-2xl overflow-hidden border border-[#355748]/10 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_12px_36px_-8px_rgba(53,87,72,0.14)] transition-all duration-300 flex flex-col"
            >
              {/* Image Container with subtle zoom */}
              <div className="relative aspect-square w-full overflow-hidden bg-[#2D4539]/5">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#FFF9F2]/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-xs font-serif font-bold text-[#355748] shadow-xs">
                  Projet {item.number}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[11px] font-medium uppercase tracking-wider text-[#91B5A3] block mb-1">
                    {item.details}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-[#252525] mb-2 group-hover:text-[#355748] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#252525]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#355748]/10 flex items-center justify-between text-xs text-[#355748] font-medium">
                  <span>Inclus dans le kit</span>
                  <span className="font-serif italic text-sm text-[#355748]">Patron PDF</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Below Grid CTA Button */}
        <div className="mt-14 sm:mt-16 text-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>Obtenir les 4 patrons — 7,90 €</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#252525]/60 mt-3">
            Téléchargement immédiat · Aucun abonnement · Format PDF en français
          </p>
        </div>
      </div>
    </section>
  );
};
