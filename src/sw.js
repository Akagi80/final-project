var cacheName = 'app-name';
var filesToCache = [
  '/static/css/main.395c5c07.chunk.css',
  '/static/css/main.395c5c07.chunk.css.map',
  '/static/js/2.bc013ae5.chunk.js',
  '/static/js/2.bc013ae5.chunk.js.map',
  '/static/js/main.909d4f2c.chunk.js',
  '/static/js/main.909d4f2c.chunk.js.map',
  '/static/js/runtime-main.34a9e7d6.js',
  '/static/js/runtime-main.34a9e7d6.js.map',
  'index.html',

];
self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('activate',  event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch:true}).then(response => {
      return response || fetch(event.request);
    })
  );
});
