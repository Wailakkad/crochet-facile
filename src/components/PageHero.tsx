import React from 'react';

interface PageHeroProps {
  /** Small uppercase eyebrow label rendered between hairlines. */
  eyebrow: string;
  /** Main serif headline; the `accent` part is rendered italic + green. */
  title: React.ReactNode;
  subtitle?: string;
  children?: React.ReactNode;
}

/**
 * Shared hero for inner pages (store, resources hub, …): soft blurred blobs,
 * centered eyebrow / serif headline / subtitle — keeps every page consistent.
 */
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  subtitle,
  children,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FFF9F2] pt-12 sm:pt-16 pb-14 sm:pb-16 border-b border-[#355748]/10">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#91B5A3]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-16 w-96 h-96 rounded-full bg-[#E8B6B0]/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.28em] text-[#91B5A3] mb-5">
          <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
          <span>{eyebrow}</span>
          <span className="h-px w-8 bg-[#355748]/25" aria-hidden="true" />
        </div>

        <h1 className="font-serif text-[2.1rem] sm:text-4xl lg:text-5xl font-semibold text-[#252525] leading-[1.12] tracking-tight mb-5">
          {title}
        </h1>

        {subtitle && (
          <p className="text-base sm:text-lg text-[#252525]/75 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}

        {children && <div className="mt-7">{children}</div>}
      </div>
    </section>
  );
};
