import React from 'react';
import { YarnIcon } from './YarnIcon';
import { BRAND } from '../config/constants';

interface FooterProps {
  onOpenLegal: (type: 'cgv' | 'privacy' | 'mentions' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.pathname !== '/') {
      // Section lives on the landing page: navigate there instead of doing nothing.
      window.location.assign(`/${id}`);
    }
  };

  return (
    <footer className="bg-[#355748] text-[#FFF9F2] pt-16 sm:pt-20 pb-12 border-t border-[#91B5A3]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16 border-b border-white/15">
          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#FFF9F2]">
                <YarnIcon className="w-5 h-5" />
              </div>
              <span className="font-serif tracking-wider font-semibold text-2xl text-[#FFF9F2]">
                {BRAND.name}
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#FFF9F2]/80 leading-relaxed max-w-sm mb-6">
              Des patrons de crochet PDF en français pour donner vie à vos idées créatives.
            </p>
            <div className="text-xs text-[#D8B876] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              Support client : {BRAND.supportEmail}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FFF9F2] mb-5 tracking-wide">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-[#FFF9F2]/80">
              <li>
                <a
                  href="#le-kit"
                  onClick={(e) => scrollTo(e, '#le-kit')}
                  className="hover:text-white transition-colors"
                >
                  Le kit
                </a>
              </li>
              <li>
                <a
                  href="#les-modeles"
                  onClick={(e) => scrollTo(e, '#les-modeles')}
                  className="hover:text-white transition-colors"
                >
                  Les modèles
                </a>
              </li>
              <li>
                <a
                  href="#pourquoi-ce-kit"
                  onClick={(e) => scrollTo(e, '#pourquoi-ce-kit')}
                  className="hover:text-white transition-colors"
                >
                  Pourquoi ce kit ?
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => scrollTo(e, '#faq')}
                  className="hover:text-white transition-colors"
                >
                  Questions fréquentes
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Informations */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-[#FFF9F2] mb-5 tracking-wide">
              Informations
            </h4>
            <ul className="space-y-3 text-sm text-[#FFF9F2]/80">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('contact')}
                  className="hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('cgv')}
                  className="hover:text-white transition-colors text-left"
                >
                  Conditions générales de vente
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Politique de confidentialité
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenLegal('mentions')}
                  className="hover:text-white transition-colors text-left"
                >
                  Mentions légales
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F2]/65 text-center sm:text-left">
          <p>© 2026 Crochet Facile. Tous droits réservés.</p>
          <p className="italic">
            Produit numérique — Aucun article physique expédié.
          </p>
        </div>
      </div>
    </footer>
  );
};
