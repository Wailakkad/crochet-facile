import React from 'react';
import { ArrowRight, Heart, Palette, Coffee } from 'lucide-react';
import { FREE_CHRISTMAS_EXPERIENCE_IMAGES } from '../config/freeChristmasIdeasConfig';

/**
 * "L'Expérience Fait Main" template adapted to the free carnet:
 * the same 3 alternating storytelling blocks, with copy focused on
 * inspiration and the 4 univers of « 40 Idées de Noël à Croquer ».
 */
export const FreeChristmasExperience: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F7F3ED]/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#91B5A3] block mb-2">
            L&apos;Expérience Fait Main
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight">
            Votre Noël, inspiration après inspiration.
          </h2>
        </div>

        {/* Storytelling Blocks */}
        <div className="space-y-20 sm:space-y-28">
          {/* BLOCK 1: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg border border-[#355748]/10 bg-[#2D4539]/5 flex items-center justify-center">
              <img
                src={FREE_CHRISTMAS_EXPERIENCE_IMAGES.inspiration}
                alt="Le carnet d’idées de Noël au crochet ouvert - L’inspiration avant tout"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-[#355748]/10 text-[#355748] flex items-center justify-center mb-5">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252525] mb-5 leading-tight">
                L’inspiration avant tout
              </h3>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed mb-4">
                Parcoure 40 idées de décorations et d’amigurumis de Noël au crochet,
                photos et petites histoires à l’appui.
              </p>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Garde près de toi les projets qui te font envie et imagine déjà tes
                prochaines mailles de fêtes.
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
                4 univers, 4 ambiances
              </h3>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed mb-4">
                Kawaii, Gourmand, Amigurumi, Magique : chaque univers du carnet a sa
                propre atmosphère et sa palette de couleurs.
              </p>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Feuillete les pages comme on promène son regard dans une vitrine de
                fêtes — sans pression, juste pour le plaisir.
              </p>
            </div>
            <div className="order-2 relative rounded-2xl overflow-hidden shadow-lg border border-[#355748]/10 bg-[#2D4539]/5 flex items-center justify-center">
              <img
                src={FREE_CHRISTMAS_EXPERIENCE_IMAGES.univers}
                alt="Les 4 univers du carnet : Kawaii, Gourmand, Amigurumi et Magique"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* BLOCK 3: Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden shadow-lg border border-[#355748]/10 bg-[#2D4539]/5 flex items-center justify-center">
              <img
                src={FREE_CHRISTMAS_EXPERIENCE_IMAGES.moment}
                alt="Ambiance chaleureuse avec une boisson chaude - Un moment de douceur à savourer"
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="w-10 h-10 rounded-lg bg-[#355748]/10 text-[#355748] flex items-center justify-center mb-5">
                <Coffee className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-[#252525] mb-5 leading-tight">
                Un moment de douceur à savourer
              </h3>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed mb-4">
                Installe-toi avec une boisson chaude et feuillete le carnet comme un
                petit roman de Noël, page après page.
              </p>
              <p className="text-base sm:text-lg text-[#252525]/80 leading-relaxed">
                Aucun tutoriel, aucune obligation : juste de l’inspiration pour rêver
                à tes créations de fêtes.
              </p>
            </div>
          </div>
        </div>

        {/* CTA beneath third block — scrolls to the signup form */}
        <div className="mt-16 sm:mt-24 text-center">
          <a
            href="#inscription"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
          >
            <span>Je veux mon carnet gratuit →</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
