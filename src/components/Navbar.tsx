import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { YarnIcon } from './YarnIcon';
import { CHECKOUT_URL, BRAND } from '../config/constants';
import { ROUTES } from '../config/site';

interface NavbarProps {
  onOpenLegal?: (title: string, content: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Le kit', href: '#le-kit' },
    { label: 'Les modèles', href: '#les-modeles' },
    { label: 'Pourquoi ce kit ?', href: '#pourquoi-ce-kit' },
    { label: 'Carnet d’idées gratuit', href: ROUTES.freeChristmasIdeas },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      // Real page link (e.g. /blog): close the mobile menu and let the browser navigate.
      setMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else if (window.location.pathname !== '/') {
      // Section lives on the landing page: navigate there instead of doing nothing.
      window.location.assign(`/${href}`);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-[#FFF9F2]/95 backdrop-blur-md border-b ${
        scrolled ? 'border-[#355748]/15 shadow-sm py-3' : 'border-[#355748]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-2.5 text-[#355748] group"
            aria-label="Crochet Facile - Accueil"
          >
            <div className="w-9 h-9 rounded-full bg-[#355748]/10 flex items-center justify-center text-[#355748] group-hover:bg-[#355748] group-hover:text-white transition-colors duration-200">
              <YarnIcon className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif tracking-wider font-semibold text-xl text-[#355748] leading-tight">
                {BRAND.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#91B5A3] font-medium hidden sm:block">
                Atelier Numérique
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-[#252525]/80 hover:text-[#355748] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#355748] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-3">
            <a
              href={CHECKOUT_URL}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-[#355748] hover:bg-[#284337] text-white text-xs sm:text-sm font-semibold rounded-[12px] shadow-sm transition-all duration-200 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#355748]"
            >
              <span>Obtenir le kit — 7,90 €</span>
              <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#355748] hover:bg-[#355748]/10 transition-colors"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t border-[#355748]/10 mt-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2 rounded-lg text-base font-medium text-[#252525] hover:bg-[#355748]/10 hover:text-[#355748] transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={CHECKOUT_URL}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#355748] text-white text-sm font-semibold rounded-[12px] shadow-sm hover:bg-[#284337] transition-colors"
                >
                  Obtenir le kit complet — 7,90 €
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
