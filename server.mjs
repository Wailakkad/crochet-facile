/**
 * Minimal static file server for the production build (optional).
 *
 *   npm run build && npm start
 *
 * Serves dist/ and answers every non-file path with index.html so the blog
 * routes work on direct navigation and browser refresh on any host.
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), 'dist');
const port = Number(process.env.PORT || 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.map': 'application/json; charset=utf-8',
};

async function findFile(pathname) {
  const safePath = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  const candidate = join(root, safePath);
  if (!candidate.startsWith(root)) return null;

  try {
    const info = await stat(candidate);
    if (info.isDirectory()) return join(candidate, 'index.html');
    return candidate;
  } catch {
    if (!extname(safePath)) return join(root, safePath, 'index.html');
    return null;
  }
}

createServer(async (req, res) => {
  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const file = await findFile(url.pathname);

  try {
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': TYPES[extname(file || '')] || 'application/octet-stream',
      'Cache-Control': extname(file) === '.html' ? 'no-cache' : 'public, max-age=3600',
    });
    res.end(body);
  } catch {
    const fallback = await readFile(join(root, 'index.html')).catch(() => null);
    if (fallback) {
      res.writeHead(200, { 'Content-Type': TYPES['.html'] });
      res.end(fallback);
    } else {
      res.writeHead(404, { 'Content-Type': TYPES['.txt'] });
      res.end('Not found');
    }
  }
}).listen(port, () => {
  console.log(`Crochet Facile serving dist/ on http://localhost:${port}`);
});
