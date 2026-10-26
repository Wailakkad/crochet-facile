/**
 * Post-build prerender step.
 *
 * Renders the three blog routes to static HTML inside dist/ so that:
 *   - direct navigation and browser refresh work on any static host,
 *   - crawlers and social scrapers receive the real content + metadata
 *     without executing JavaScript.
 *
 * Requires `vite build --ssr` output in dist-ssr/ (see the `build` script).
 * Set VITE_SITE_URL to your production domain to get absolute canonical /
 * Open Graph URLs and a sitemap.xml — no domain is ever invented here.
 */
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(root, 'dist');
const ssrDir = join(root, 'dist-ssr');
const templatePath = join(distDir, 'index.html');
const entryPath = join(ssrDir, 'entry-server.js');

// Mirror Vite's env loading so VITE_SITE_URL set in .env(.local) applies here too.
for (const name of [
  '.env.production.local',
  '.env.production',
  '.env.local',
  '.env',
]) {
  try {
    process.loadEnvFile(join(root, name));
  } catch {
    /* file not present */
  }
}

const BLOG_ROUTES = [
  '/blog',
  '/blog/decorations-noel-crochet',
  '/blog/crochet-noel-facile',
  '/40-idees-noel-crochet-gratuit',
];
const SITEMAP_PATHS = ['/', ...BLOG_ROUTES];

const fail = (message) => {
  console.error(`[prerender] ${message}`);
  process.exit(1);
};

if (!existsSync(templatePath)) fail('dist/index.html not found. Run `vite build` first.');
if (!existsSync(entryPath)) fail('dist-ssr/entry-server.js not found.');

/** Remove the homepage-specific head tags from the shared HTML template. */
const stripStaticSeo = (html) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/gi, '')
    .replace(/\s*<meta\s+name="(description|keywords)"[^>]*>/gi, '')
    .replace(/\s*<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/\s*<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
    .replace(/\s*<link\s+rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '');

const { render } = await import(pathToFileURL(entryPath).href);
const template = readFileSync(templatePath, 'utf8');

for (const route of BLOG_ROUTES) {
  const { html, head } = render(route);
  if (!html) fail(`no markup rendered for ${route}`);

  let output = stripStaticSeo(template);
  if (head) output = output.replace('</head>', `  ${head}\n  </head>`);

  const rootPlaceholder = '<div id="root"></div>';
  if (!output.includes(rootPlaceholder)) {
    fail(`missing ${rootPlaceholder} in dist/index.html — cannot inject ${route}`);
  }
  output = output.replace(rootPlaceholder, `<div id="root">${html}</div>`);

  const segments = route.split('/').filter(Boolean);
  const target = join(distDir, ...segments, 'index.html');
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, output, 'utf8');
  console.log(`[prerender] ${route} -> dist/${segments.join('/')}/index.html`);
}

const siteUrl = (process.env.VITE_SITE_URL || process.env.SITE_URL || '').replace(
  /\/+$/,
  ''
);

if (siteUrl) {
  const urls = SITEMAP_PATHS.map(
    (path) =>
      `  <url>\n    <loc>${siteUrl}${path === '/' ? '/' : path}</loc>\n  </url>`
  ).join('\n');
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  writeFileSync(join(distDir, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`[prerender] sitemap.xml written for ${siteUrl}`);
} else {
  console.warn(
    '[prerender] VITE_SITE_URL not set — canonical URLs are root-relative and sitemap.xml was skipped (no domain invented).'
  );
}

rmSync(ssrDir, { recursive: true, force: true });
console.log('[prerender] done');
