import React from 'react';
import { ArrowRight, Heart, Palette, Coffee } from 'lucide-react';
import { CHECKOUT_URL } from '../config/constants';

export const CrochetExperience: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3ED]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
            L'Expérience Fait Main
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Votre Noël, maille après maille.
          </h2>
        </div>

        {/* Storytelling Blocks */}
        <div className="space-y-20 sm:space-y-28">
          {/* BLOCK 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg border border-[#355748]/10 bg-[#2D4539]/5 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792357025/Le_plaisir_de_cr%C3%A9er_soi-m%C3%AAme.jpg"
                alt="Mains au crochet - Le plaisir de créer soi-même"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-[#355748]/10 text-[#355748] flex items-center justify-center mb-5">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252525] mb-5 leading-tight">
                Le plaisir de créer soi-même
              </h3>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed mb-4">
                Imaginez la satisfaction de réaliser vos propres décorations de Noël.
              </p>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Avec cette collection de quatre patrons, transformez quelques pelotes de fil
                en créations pleines de charme.
              </p>
            </div>
          </div>

          {/* BLOCK 2: Text Left, Image Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-1 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-[#355748]/10 text-[#355748] flex items-center justify-center mb-5">
                <Palette className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252525] mb-5 leading-tight">
                Des décorations qui vous ressemblent
              </h3>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed mb-4">
                Choisissez vos couleurs préférées et personnalisez vos créations selon
                l'ambiance de votre maison.
              </p>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Du sapin aux clochettes, chaque projet apporte une touche artisanale
                à votre décoration.
              </p>
            </div>
            <div className="order-2 relative rounded-2xl overflow-hidden shadow-lg border border-[#355748]/10 bg-[#2D4539]/5 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792357026/Des_d%C3%A9corations_qui_vous_ressemblent.jpg"
                alt="Pelotes et fournitures de Noël - Des décorations qui vous ressemblent"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* BLOCK 3: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg border border-[#355748]/10 bg-[#2D4539]/5 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792357025/Un_moment_cr%C3%A9atif_%C3%A0_savourer.jpg"
                alt="Ambiance chaleureuse atelier - Un moment créatif à savourer"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-[#355748]/10 text-[#355748] flex items-center justify-center mb-5">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252525] mb-5 leading-tight">
                Un moment créatif à savourer
              </h3>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed mb-4">
                Installez-vous confortablement, préparez votre crochet et profitez
                du plaisir de créer à votre rythme.
              </p>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Des projets de Noël à réaliser pour soi ou pour faire plaisir.
              </p>
            </div>
          </div>
        </div>

        {/* CTA beneath third block */}
        <div className="mt-16 sm:mt-24 text-center">
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>Je veux créer mes décorations →</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
