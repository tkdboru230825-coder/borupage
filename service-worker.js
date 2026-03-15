const CACHE_NAME = "boru-tkd-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/escudo_boru_.webp",
  "/videostyles.css",
  "/1_.webp",
  "/2_.webp",
  "/3_.webp",
  "/4_.webp",
  "/5_.webp",
  "/6_.webp"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );

});

self.addEventListener("fetch", event => {

  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );

});
