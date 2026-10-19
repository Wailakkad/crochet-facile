const env = import.meta.env as unknown as Record<string, string | undefined>;

/**
 * Absolute base URL of the deployed website.
 * Environment-driven: set VITE_SITE_URL (e.g. https://www.crochetfacile.fr)
 * before running `npm run build` so canonical / Open Graph URLs are absolute.
 */
export const SITE_URL = (env.VITE_SITE_URL ?? '').replace(/\/+$/, '');

export const ROUTES = {
  home: '/',
  blog: '/blog',
  decorationsNoel: '/blog/decorations-noel-crochet',
  crochetNoelFacile: '/blog/crochet-noel-facile',
} as const;

/** Returns an absolute URL when SITE_URL is configured, otherwise a root-relative path. */
export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return SITE_URL ? `${SITE_URL}${normalized}` : normalized;
}
