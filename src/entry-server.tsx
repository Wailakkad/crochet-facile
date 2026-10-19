import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Router } from './router';
import Root from './Root';
import { BLOG_PAGES } from './content/blog';
import { buildHeadHtml, HOME_PAGE } from './content/seo';

/**
 * Static prerender entry point (built with `vite build --ssr`).
 * Returns the rendered markup of a route plus its <head> tags so the build can
 * emit real HTML files for direct navigation, refresh and social previews.
 */
export function render(url: string): { html: string; head: string } {
  const path = url.split('?')[0].split('#')[0].replace(/\/+$/, '') || '/';

  const html = renderToStaticMarkup(
    <Router initialPath={path}>
      <Root />
    </Router>
  );

  const record = path === '/' ? HOME_PAGE : BLOG_PAGES[path];

  return { html, head: record ? buildHeadHtml(record) : '' };
}
