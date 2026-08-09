const CACHE = "nova-school-v7-complete";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./styles/tokens.css",
  "./styles/base.css",
  "./styles/components.css",
  "./styles/editor.css",
  "./styles/premium.css",
  "./styles/responsive.css",
  "./styles/complete.css",
  "./src/app.js",
  "./src/router.js",
  "./src/state/store.js",
  "./src/services/storage.js",
  "./src/services/backup.js",
  "./src/services/aiProvider.js",
  "./src/services/scanner.js",
  "./src/components/toast.js",
  "./src/components/modal.js",
  "./src/features/notebooks.js",
  "./src/features/editor.js",
  "./src/features/homework.js",
  "./src/features/capture.js",
  "./src/features/search.js",
  "./src/features/assistant.js",
  "./src/features/trash.js",
  "./src/features/learning.js",
  "./src/features/settings.js",
  "./src/features/dashboard.js",
  "./src/utils/dom.js",
  "./src/utils/id.js",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Stratégie : réseau d'abord pour rester à jour, repli sur le cache hors-ligne (offline-first, section 45).
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
