import React from 'react';
import { Check, Download, ShieldCheck } from 'lucide-react';
import { CHECKOUT_URL, BRAND } from '../config/constants';

export const PdfInside: React.FC = () => {
  const contentItems = [
    'Patron du sapin de Noël',
    'Patron des clochettes',
    'Patron de la mini chaussette',
    'Patron de la guirlande de sapins',
    'Présentation des projets',
    'Conseils de préparation',
    'Instructions de crochet',
    'Format PDF à télécharger',
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#91B5A3]/15 border-y border-[#91B5A3]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 3D PDF Mockup */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#355748]/15 bg-white p-2 sm:p-3 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/dhkyla1rv/image/upload/v1792357025/Contenu_D%C3%A9taill%C3%A9_du_Fichier.jpg"
                alt="Aperçu du livret numérique PDF 4 Décorations de Noël au Crochet sur tablette et pages imprimées"
                className="w-full h-auto rounded-xl object-contain"
                loading="lazy"
              />
            </div>
            {/* Subtle decorative stamp */}
            <div className="absolute -bottom-4 -right-4 bg-[#355748] text-[#FFF9F2] px-4 py-2 rounded-xl text-xs font-semibold shadow-lg hidden sm:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D8B876]" />
              <span>PDF haute définition · Prêt à imprimer</span>
            </div>
          </div>

          {/* Right: Product Information */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#355748] block mb-2">
              Contenu Détaillé du Fichier
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#252525] font-semibold tracking-tight mb-4 leading-tight">
              Tout votre kit dans un seul PDF.
            </h2>

            <p className="text-base sm:text-lg text-[#252525]/80 mb-8 leading-relaxed">
              Retrouvez vos quatre patrons de décorations de Noël dans une collection
              numérique en français.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {contentItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#355748] text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-sm font-medium text-[#252525]/85">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & Purchase CTA */}
            <div className="bg-[#FFF9F2] p-6 rounded-2xl border border-[#355748]/15 shadow-sm mb-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-[#252525]/70 block">Tarif unique du kit complet</span>
                  <div className="font-serif text-3xl sm:text-4xl font-bold text-[#355748]">
                    {BRAND.price}
                  </div>
                </div>

                <a
                  href={CHECKOUT_URL}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#355748] hover:bg-[#284337] text-white text-sm sm:text-base font-semibold rounded-[12px] shadow-sm hover:shadow transition-all duration-200 active:scale-[0.98]"
                >
                  <Download className="w-4 h-4" />
                  <span>Télécharger mon kit PDF</span>
                </a>
              </div>
            </div>

            {/* Small Disclaimer */}
            <p className="text-xs text-[#252525]/70 leading-relaxed italic">
              Produit numérique uniquement. Aucune décoration physique ni fourniture n'est expédiée.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
