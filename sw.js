const CACHE_NAME = "worksync-v1";
const ASSETS = [
  "/",
  "/landing.html",
  "/dashboard.html",
  "/access.html",
  "/js/auth.js",
  "/css/style.css",
  "/assets/icons/icon2.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});