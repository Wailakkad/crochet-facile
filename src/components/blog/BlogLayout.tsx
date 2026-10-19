import React, { useState } from 'react';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { LegalModal } from '../LegalModal';
import { Seo } from './Seo';
import type { SeoRecord } from '../../content/seo';

interface BlogLayoutProps {
  record: SeoRecord;
  children: React.ReactNode;
}

/**
 * Shared chrome for every blog page: same header, footer and legal modal as the
 * landing page, plus the page SEO tags.
 */
export const BlogLayout: React.FC<BlogLayoutProps> = ({ record, children }) => {
  const [legalModalType, setLegalModalType] = useState<
    'cgv' | 'privacy' | 'mentions' | 'contact' | null
  >(null);

  return (
    <div className="blog-scope min-h-screen bg-[#FFF9F2] text-[#252525] flex flex-col font-sans selection:bg-[#91B5A3]/30 selection:text-[#355748]">
      <Seo record={record} />
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer onOpenLegal={setLegalModalType} />
      <LegalModal
        isOpen={legalModalType !== null}
        onClose={() => setLegalModalType(null)}
        type={legalModalType}
      />
    </div>
  );
};
