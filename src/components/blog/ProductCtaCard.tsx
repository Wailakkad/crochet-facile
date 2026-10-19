import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { CHECKOUT_URL } from '../../config/constants';

interface ProductCtaCardProps {
  heading: string;
  text: string;
  price: string;
  button: string;
}

/**
 * Contextual product card displayed inside an article body.
 * Every purchase CTA points straight to the Payhip checkout.
 */
export const ProductCtaCard: React.FC<ProductCtaCardProps> = ({
  heading,
  text,
  price,
  button,
}) => {
  return (
    <aside
      aria-label="Patrons PDF disponibles"
      className="my-10 sm:my-12 rounded-2xl border border-[#355748]/15 bg-[#F7F3ED] p-6 sm:p-8 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.08)]"
    >
      <div className="flex items-start gap-3 mb-4">
        <span className="mt-1 w-9 h-9 shrink-0 rounded-full bg-[#355748]/10 text-[#355748] flex items-center justify-center">
          <FileText className="w-4.5 h-4.5" aria-hidden="true" />
        </span>
        <div>
          <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#91B5A3] mb-1">
            Patrons PDF en français
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#355748] leading-snug">
            {heading}
          </h2>
        </div>
      </div>

      <p className="text-[17px] leading-relaxed text-[#252525]/80 mb-5">{text}</p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <a
          href={CHECKOUT_URL}
          className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 py-3.5 bg-[#355748] hover:bg-[#284337] text-white text-sm font-semibold rounded-[12px] shadow-md hover:shadow-lg transition-all duration-200 active:scale-[0.98]"
        >
          <span>{button}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </a>
        <span className="font-serif text-3xl font-bold text-[#252525] sm:ml-1">
          {price}
        </span>
      </div>

      <p className="text-xs text-[#252525]/60 mt-4">
        Téléchargement numérique après achat · Paiement sécurisé via Payhip.
      </p>
    </aside>
  );
};
