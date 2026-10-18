// Open Pulse offline support: always try the network first, and keep a copy of each answer so the
// last data can still be shown when the device is offline.
const CACHE = 'open-pulse-v2';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
// Large or endless resources that are not worth keeping offline.
const SKIP = /tile\.openstreetmap\.org|fonts\.gstatic\.com|coin-images\.coingecko\.com|upload\.wikimedia\.org|archive-api\.open-meteo\.com/;
const MAX_ENTRIES = 250;

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ENTRIES; i++) await cache.delete(keys[i]);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || SKIP.test(req.url) || !/^https?:/.test(req.url)) return;
  e.respondWith((async () => {
    try {
      const res = await fetch(req);
      if (res.ok && (res.type === 'basic' || res.type === 'cors')) {
        const copy = res.clone();
        e.waitUntil(caches.open(CACHE).then(async c => { await c.put(req, copy); await trim(c); }));
      }
      return res;
    } catch (err) {
      const hit = await caches.match(req, { ignoreVary: true });
      if (hit) return hit;
      if (req.mode === 'navigate') return (await caches.match('./index.html')) || Response.error();
      throw err;
    }
  })());
});
