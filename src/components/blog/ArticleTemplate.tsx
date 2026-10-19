import React from 'react';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { CHECKOUT_URL, BRAND } from '../../config/constants';
import { Link } from '../../router';
import { ROUTES } from '../../config/site';
import {
  resized,
  srcSetFor,
  type Article,
  type ArticleBlock,
} from '../../content/blog';
import { Breadcrumbs } from './Breadcrumbs';
import { ProductCtaCard } from './ProductCtaCard';

const INLINE_LINK_CLASS =
  'text-[#355748] font-medium underline underline-offset-4 decoration-[#91B5A3]/70 hover:decoration-[#355748] transition-colors';

const isInternalRoute = (to: string): boolean => to.startsWith('/blog');

const InlineLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) =>
  isInternalRoute(to) ? (
    <Link to={to} className={INLINE_LINK_CLASS}>
      {children}
    </Link>
  ) : (
    <a href={to} className={INLINE_LINK_CLASS}>
      {children}
    </a>
  );

const renderParagraph = (block: Extract<ArticleBlock, { type: 'p' }>) => {
  const { link, text } = block;
  if (!link) return text;

  const index = text.indexOf(link.text);
  if (index === -1) return text;

  return (
    <>
      {text.slice(0, index)}
      <InlineLink to={link.to}>{link.text}</InlineLink>
      {text.slice(index + link.text.length)}
    </>
  );
};

interface ArticleFigureProps {
  src: string;
  alt: string;
  loading?: 'lazy' | 'eager';
}

const ArticleFigure: React.FC<ArticleFigureProps> = ({ src, alt, loading }) => (
  <figure className="my-8 sm:my-10">
    <div className="rounded-2xl overflow-hidden border border-[#355748]/10 bg-[#F7F3ED] shadow-[0_4px_24px_-6px_rgba(53,87,72,0.08)]">
      <img
        src={resized(src, 1200)}
        srcSet={srcSetFor(src, [640, 960, 1200, 1600])}
        sizes="(min-width: 1024px) 820px, 92vw"
        alt={alt}
        loading={loading ?? 'lazy'}
        decoding="async"
        className="w-full h-auto object-cover"
      />
    </div>
  </figure>
);

const Block: React.FC<{ block: ArticleBlock }> = ({ block }) => {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="font-serif text-[1.75rem] sm:text-4xl font-semibold text-[#355748] leading-snug mt-12 sm:mt-14 mb-4 scroll-mt-24">
          {block.text}
        </h2>
      );
    case 'h3':
      return (
        <h3 className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-[#252525] leading-snug mt-9 mb-3 scroll-mt-24">
          {block.text}
        </h3>
      );
    case 'p':
      return (
        <p className="text-[17px] sm:text-[18px] leading-[1.75] text-[#252525]/85 mb-5">
          {renderParagraph(block)}
        </p>
      );
    case 'image':
      return <ArticleFigure src={block.src} alt={block.alt} />;
    case 'list':
      if (block.format === 'terms') {
        return (
          <ul className="my-6 rounded-xl border border-[#355748]/12 bg-[#FFF9F2] divide-y divide-[#355748]/10 overflow-hidden">
            {block.items.map((item) => {
              const [term, ...rest] = item.split(' : ');
              return (
                <li
                  key={item}
                  className="flex flex-wrap items-baseline gap-x-2 px-4 sm:px-5 py-2.5 text-[16px] sm:text-[17px] text-[#252525]/85"
                >
                  <span className="font-semibold text-[#355748]">{term}</span>
                  <span className="text-[#252525]/50">:</span>
                  <span>{rest.join(' : ')}</span>
                </li>
              );
            })}
          </ul>
        );
      }
      return (
        <ul className="my-6 space-y-2.5">
          {block.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[17px] leading-relaxed text-[#252525]/85"
            >
              <span
                className="mt-[0.6em] w-1.5 h-1.5 shrink-0 rounded-full bg-[#91B5A3]"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case 'cta':
      return (
        <ProductCtaCard
          heading={block.heading}
          text={block.text}
          price={block.price}
          button={block.button}
        />
      );
    default:
      return null;
  }
};

/**
 * Shared editorial layout used by both blog articles.
 */
export const ArticleTemplate: React.FC<{ article: Article }> = ({ article }) => {
  const published = new Date(`${article.publishedOn}T00:00:00Z`).toLocaleDateString(
    'fr-FR',
    { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }
  );

  return (
    <article>
      {/* ---- Editorial header (first viewport) ---- */}
      <header className="bg-[#FFF9F2] border-b border-[#355748]/10 pt-8 sm:pt-12 pb-10 sm:pb-14">
        <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'Accueil', path: ROUTES.home },
              { label: 'Le Journal Crochet', path: ROUTES.blog },
              { label: article.breadcrumbLabel, path: article.path },
            ]}
          />

          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#91B5A3] mb-3">
            {article.category}
          </span>

          <h1 className="font-serif text-[2.15rem] sm:text-5xl lg:text-[3.4rem] font-semibold text-[#252525] leading-[1.12] tracking-tight mb-5">
            {article.title}
          </h1>

          <p className="text-[17px] sm:text-[19px] leading-[1.7] text-[#252525]/75 mb-6">
            {article.intro}
          </p>

          <p className="flex items-center gap-2 text-xs text-[#252525]/55 mb-7">
            <CalendarDays className="w-4 h-4 text-[#D8B876]" aria-hidden="true" />
            <time dateTime={article.publishedOn}>Publié le {published}</time>
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#355748]/10 bg-[#F7F3ED] shadow-[0_8px_32px_-10px_rgba(53,87,72,0.16)]">
            <img
              src={resized(article.hero.src, 1400)}
              srcSet={srcSetFor(article.hero.src, [640, 960, 1400])}
              sizes="(min-width: 1024px) 840px, 94vw"
              alt={article.hero.alt}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </header>

      {/* ---- Body ---- */}
      <div className="bg-[#FFF9F2] py-10 sm:py-14">
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          {article.blocks.map((block, index) => (
            <Block key={`${block.type}-${index}`} block={block} />
          ))}
        </div>
      </div>

      {/* ---- Related article ---- */}
      <section
        aria-labelledby="related-title"
        className="bg-[#F7F3ED]/70 border-t border-[#355748]/10 py-12 sm:py-16"
      >
        <div className="max-w-[820px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="related-title"
            className="font-serif text-2xl sm:text-3xl font-semibold text-[#252525] mb-6"
          >
            À lire ensuite
          </h2>
          <Link
            to={article.related.path}
            className="group flex flex-col sm:flex-row gap-5 sm:gap-7 items-start bg-[#FFF9F2] rounded-2xl border border-[#355748]/10 p-4 sm:p-5 shadow-[0_4px_24px_-6px_rgba(53,87,72,0.06)] hover:shadow-[0_12px_36px_-8px_rgba(53,87,72,0.14)] transition-all duration-300"
          >
            <div className="w-full sm:w-48 shrink-0 aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-[#2D4539]/5">
              <img
                src={resized(article.related.image, 640)}
                alt={article.related.imageAlt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#91B5A3] mb-2">
                Article associé
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#252525] leading-snug group-hover:text-[#355748] transition-colors">
                {article.related.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#355748]">
                Lire l’article
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* ---- Final product CTA ---- */}
      <section className="relative overflow-hidden bg-[#355748] text-[#FFF9F2] py-16 sm:py-20">
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#91B5A3]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#D8B876]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[720px] mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D8B876] block mb-3">
            Le kit complet · {BRAND.price}
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-semibold leading-snug mb-4">
            {BRAND.productName}
          </h2>
          <p className="text-[17px] text-[#FFF9F2]/85 leading-relaxed mb-8">
            4 patrons de décorations de Noël au crochet, réunis dans un guide PDF en
            français.
          </p>
          <a
            href={CHECKOUT_URL}
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 sm:px-10 py-4 bg-[#FFF9F2] hover:bg-white text-[#355748] text-base font-semibold rounded-[12px] shadow-lg hover:shadow-xl transition-all duration-200 active:scale-[0.98]"
          >
            <span>{article.finalCtaLabel}</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </article>
  );
};
