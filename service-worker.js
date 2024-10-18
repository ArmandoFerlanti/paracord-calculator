const cacheName = "paracord-calculator-cache-v1";
const assetsToCache = [
  "/paracord/",
  "/paracord/index.html",
  "/paracord/styles.css",
  "/paracord/app.js",
  "/paracord/manifest.json",
  "/paracord/icons/icon-192x192.png",
  "/paracord/icons/icon-512x512.png",
];

// Install Service Worker e cache delle risorse statiche
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Gestisci le richieste e servile dalla cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

// Aggiorna la cache quando ci sono cambiamenti
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [cacheName];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (!cacheWhitelist.includes(cache)) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});
