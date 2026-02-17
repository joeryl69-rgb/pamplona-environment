const CACHE_NAME = 'pamplona-env-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/pamplona_boundary.geojson',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
  'https://unpkg.com/leaflet-pip/leaflet-pip.min.js'
];

self.addEventListener('install', event=>{
  event.waitUntil(caches.open(CACHE_NAME).then(cache=>cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event=>{
  event.respondWith(caches.match(event.request).then(resp=>resp||fetch(event.request)));
});
