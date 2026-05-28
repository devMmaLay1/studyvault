const CACHE_NAME = "studyvault-offline-v2";

const CORE_ASSETS = [
    "./index.html",
    "./level.html",
    "./semester.html",
    "./course.html",
    "./module.html",
    "./unit.html",
    "./recall.html",
    "./lesson.html",
    "./site.webmanifest",
    "./assets/icons/studyvault-icon.svg",
    "./assets/css/styles.css",
    "./assets/css/lesson.css",
    "./assets/css/lesson-diagrams.css",
    "./assets/js/lucide.minn.js",
    "./assets/js/lucide.min.js",
    "./assets/js/data.js",
    "./assets/js/examQuestions.js",
    "./assets/js/icons.js",
    "./assets/js/animations.js",
    "./assets/js/app.js",
    "./assets/js/dashboard.js",
    "./assets/js/level.js",
    "./assets/js/semester.js",
    "./assets/js/course.js",
    "./assets/js/module.js",
    "./assets/js/unit.js",
    "./assets/js/recall.js",
    "./assets/js/lesson-diagrams.js",
    "./assets/js/lesson-engine.js",
    "./assets/js/lessons/CIT108_m2_u3.js"
];

self.addEventListener("install", function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                return cache.addAll(CORE_ASSETS);
            })
            .then(function () {
                return self.skipWaiting();
            })
    );
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys()
            .then(function (cacheNames) {
                return Promise.all(
                    cacheNames
                        .filter(function (cacheName) {
                            return cacheName !== CACHE_NAME;
                        })
                        .map(function (cacheName) {
                            return caches.delete(cacheName);
                        })
                );
            })
            .then(function () {
                return self.clients.claim();
            })
    );
});

self.addEventListener("fetch", function (event) {
    const request = event.request;

    if (request.method !== "GET") return;

    const requestUrl = new URL(request.url);
    if (requestUrl.origin !== self.location.origin) return;

    if (request.mode === "navigate") {
        event.respondWith(handleNavigationRequest(request));
        return;
    }

    event.respondWith(handleAssetRequest(request));
});

function handleNavigationRequest(request) {
    return fetch(request)
        .then(function (response) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function (cache) {
                cache.put(request, copy);
            });
            return response;
        })
        .catch(function () {
            return caches.match(request, { ignoreSearch: true })
                .then(function (cachedResponse) {
                    return cachedResponse || caches.match("./index.html");
                });
        });
}

function handleAssetRequest(request) {
    return caches.match(request, { ignoreSearch: true })
        .then(function (cachedResponse) {
            if (cachedResponse) return cachedResponse;

            return fetch(request).then(function (response) {
                if (!response || response.status !== 200 || response.type !== "basic") {
                    return response;
                }

                const copy = response.clone();
                caches.open(CACHE_NAME).then(function (cache) {
                    cache.put(request, copy);
                });

                return response;
            });
        });
}
