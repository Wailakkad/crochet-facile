import React from 'react';
import { ArrowRight, CheckCircle2, Shield } from 'lucide-react';
import { CHECKOUT_URL, BRAND } from '../config/constants';

export const FinalOffer: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#355748] text-[#FFF9F2] relative overflow-hidden">
      {/* Background delicate decorative circles */}
      <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#91B5A3]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#D8B876]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Offer copy */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#D8B876] block mb-3">
              Votre Collection de Noël
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
              Prête à créer <br />
              <span className="italic font-normal text-[#E8B6B0]">votre Noël fait main ?</span>
            </h2>

            <p className="text-base sm:text-lg text-[#FFF9F2]/85 leading-relaxed mb-8 max-w-xl">
              Quatre décorations à réaliser au crochet, réunies dans un guide PDF en français.
            </p>

            {/* Price block */}
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl sm:text-5xl font-serif font-bold text-[#FFF9F2]">
                {BRAND.price}
              </span>
              <span className="text-sm text-[#91B5A3] font-medium">
                Paiement unique · Accès immédiat
              </span>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
              <a
                href={CHECKOUT_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-[#FFF9F2] hover:bg-white text-[#355748] text-base font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
              >
                <span>Obtenir mes 4 patrons →</span>
                <ArrowRight className="w-4 h-4 text-[#355748]" />
              </a>
            </div>

            <p className="text-xs text-[#FFF9F2]/75 flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#D8B876] shrink-0" />
              <span>Téléchargement numérique après achat via Payhip.</span>
            </p>

            {/* Quick check points */}
            <div className="mt-8 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#FFF9F2]/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#91B5A3] shrink-0" />
                <span>Format PDF pratique</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#91B5A3] shrink-0" />
                <span>100 % en français</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#91B5A3] shrink-0" />
                <span>4 modèles de fête</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Mockup */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xs p-2 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792357024/Votre_Collection_de_No%C3%ABl.jpg"
                alt="Guide PDF 4 Décorations de Noël au Crochet Crochet Facile"
                className="w-full h-auto rounded-xl object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
