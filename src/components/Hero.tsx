import React from 'react';
import { ArrowRight, CheckCircle2, FileText, Download } from 'lucide-react';
import { CHECKOUT_URL } from '../config/constants';
import IMAGES from '../assets/images';

export const Hero: React.FC = () => {
  return (
    <section
      id="le-kit"
      className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#2D4539]"
    >
      {/* Background Image with optimized overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792356091/hero_back_img.jpg"
          alt="Les 4 décorations de Noël au crochet : sapin amigurumi, clochettes, mini chaussette et guirlande"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000 ease-out"
          loading="eager"
          fetchPriority="high"
        />
        {/* Subtle rich gradient overlay for text readability without washing out craft boutique aesthetics */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3027]/95 via-[#1E3027]/80 to-[#1E3027]/30 sm:via-[#1E3027]/75 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E3027]/85 via-transparent to-[#1E3027]/40 md:hidden" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="max-w-2xl text-left">
          {/* Eyebrow Label (Clean typography, no garish pill) */}
          <div className="inline-flex items-center gap-2 mb-4 text-[#D8B876] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-[#D8B876]" />
            <span>Collection Noël · Patrons PDF en Français</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FFF9F2] font-semibold leading-[1.12] mb-4 tracking-tight drop-shadow-sm">
            Créez un Noël <br />
            <span className="italic font-normal text-[#E8B6B0]">qui vous ressemble.</span>
          </h1>

          {/* Secondary Headline */}
          <h2 className="font-serif text-xl sm:text-2xl text-[#FFF9F2]/90 font-medium mb-5 leading-snug">
            4 décorations de Noël au crochet à réaliser vous-même.
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed max-w-xl mb-8 font-normal">
            Un adorable sapin, des clochettes colorées, une mini chaussette et une
            guirlande de sapins : découvrez quatre patrons en français pour
            apporter une touche faite main à vos fêtes.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
            <a
              href={CHECKOUT_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#355748] hover:bg-[#284337] text-white text-base font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98] border border-white/15"
            >
              <span>Je découvre mes 4 patrons →</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="px-3 py-1.5 text-sm font-medium text-[#FFF9F2]/90 bg-black/25 backdrop-blur-sm rounded-lg border border-white/10">
              Le kit complet : <strong className="text-[#D8B876] font-semibold">7,90 €</strong>
            </div>
          </div>

          {/* Trust Information */}
          <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-2 sm:gap-6 text-xs sm:text-sm text-[#FFF9F2]/90">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#91B5A3] shrink-0" />
              <span>4 patrons inclus</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#91B5A3] shrink-0" />
              <span>PDF en français</span>
            </div>
            <div className="flex items-center gap-2">
              <Download className="w-4 h-4 text-[#91B5A3] shrink-0" />
              <span>Téléchargement numérique</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
