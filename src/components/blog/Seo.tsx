import React, { useEffect } from 'react';
import { buildHeadHtml, type SeoRecord } from '../../content/seo';

/**
 * Applies the head tags (title, description, canonical, Open Graph, Twitter,
 * JSON-LD) of the current route. The very same markup is written statically by
 * the prerender step, so the values always match.
 */
export const Seo: React.FC<{ record: SeoRecord }> = ({ record }) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const head = document.head;
    head
      .querySelectorAll('[data-seo]')
      .forEach((node) => node.remove());
    head
      .querySelectorAll(
        'meta[name="description"], meta[name="keywords"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], script[type="application/ld+json"]'
      )
      .forEach((node) => node.remove());

    head.insertAdjacentHTML('beforeend', `\n    ${buildHeadHtml(record)}\n  `);
    document.title = record.title;
  }, [record]);

  return null;
};
