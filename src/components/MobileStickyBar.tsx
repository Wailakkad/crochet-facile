import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { CHECKOUT_URL, BRAND } from '../config/constants';

export const MobileStickyBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar once user scrolls past hero section (~400px)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside
      aria-label="Barre d'achat mobile"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFF9F2]/95 backdrop-blur-md border-t border-[#355748]/15 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 py-3 animate-in slide-in-from-bottom-4 duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5 text-xs text-[#355748] font-medium">
            <FileText className="w-3.5 h-3.5 text-[#91B5A3]" />
            <span>4 patrons PDF</span>
          </div>
          <span className="font-serif text-lg font-bold text-[#252525] leading-tight">
            {BRAND.price}
          </span>
        </div>

        <a
          href={CHECKOUT_URL}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px] bg-[#355748] hover:bg-[#284337] active:scale-[0.98] text-white text-sm font-semibold rounded-[12px] shadow-sm transition-colors"
        >
          <span>Obtenir le kit</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
