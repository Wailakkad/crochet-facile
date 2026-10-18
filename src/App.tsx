/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChoose } from './components/WhyChoose';
import { PatternsGrid } from './components/PatternsGrid';
import { EditorialGallery } from './components/EditorialGallery';
import { CrochetExperience } from './components/CrochetExperience';
import { PdfInside } from './components/PdfInside';
import { HowItWorks } from './components/HowItWorks';
import { FinalOffer } from './components/FinalOffer';
import { FaqAccordion } from './components/FaqAccordion';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [legalModalType, setLegalModalType] = useState<'cgv' | 'privacy' | 'mentions' | 'contact' | null>(null);

  const handleOpenLegal = (type: 'cgv' | 'privacy' | 'mentions' | 'contact') => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      {/* SECTION 1: Premium Navigation Header */}
      <Navbar />

      <main className="flex-grow">
        {/* SECTION 2: Full-Width Immersive Hero */}
        <Hero />

        {/* SECTION 3: Why Choose Crochet Facile? */}
        <WhyChoose />

        {/* SECTION 4: The Four Crochet Patterns */}
        <PatternsGrid />

        {/* SECTION 5: Editorial Image Gallery */}
        <EditorialGallery />

        {/* SECTION 6: The Crochet Experience */}
        <CrochetExperience />

        {/* SECTION 7: What's Inside The PDF? */}
        <PdfInside />

        {/* SECTION 8: How It Works */}
        <HowItWorks />

        {/* SECTION 9: Final Product Offer */}
        <FinalOffer />

        {/* SECTION 10: FAQ Accordion */}
        <FaqAccordion />
      </main>

      {/* SECTION 11: Professional Footer */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Mobile Sticky Bottom Conversion Bar */}
      <MobileStickyBar />

      {/* Legal & Contact Modal */}
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={handleCloseLegal}
        type={legalModalType}
      />
    </div>
  );
}
