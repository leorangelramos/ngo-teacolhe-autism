const CACHE_NAME = 'teacolhe-cache-v2'; 
const ASSETS_TO_CACHE = [
    '/',
    '/index.html', 
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/image/TEAcolhe.png',
    '/image/banner.png',
    '/image/definicao.png',
    '/image/autodefesa.png',
    '/image/profissionais.jpg'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Fazendo cache dos ativos estáticos');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log('[Service Worker] Deletando cache antigo:', cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                return cachedResponse || fetch(event.request).catch(() => {
                    // Fallback principal
                    if (event.request.mode === 'navigate') {
                        return caches.match('/index.html');
                    }
                });
            })
    );
});