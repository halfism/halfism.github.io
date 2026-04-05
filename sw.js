/**
 * Service Worker for PWA Support
 * Implements caching strategies for offline access
 */

const CACHE_NAME = 'halfism-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to pre-cache during installation
const PRECACHE_ASSETS = [
    '/',
    '/about/',
    '/blog/',
    '/contact/',
    '/manifest.json',
    '/assets/css/style.css',
    '/assets/js/main.js',
    '/assets/js/i18n.js'
];

// External resources to cache (CDN)
const EXTERNAL_CACHE = 'external-v1';
const EXTERNAL_URLS = [
    'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css',
    'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX' // Will be replaced with actual GA ID
];

// Install event - Pre-cache static assets
self.addEventListener('install', event => {
    console.log('[SW] Installing...');

    event.waitUntil(
        Promise.all([
            // Cache static assets
            caches.open(STATIC_CACHE).then(cache => {
                console.log('[SW] Pre-caching static assets');
                return cache.addAll(PRECACHE_ASSETS);
            }),

            // Cache external resources
            caches.open(EXTERNAL_CACHE).then(cache => {
                console.log('[SW] Caching external resources');
                return Promise.allSettled(
                    EXTERNAL_URLS.map(url =>
                        fetch(url, { mode: 'cors' })
                            .then(response => {
                                if (response.ok) {
                                    cache.put(url, response);
                                }
                            })
                            .catch(err => console.warn('[SW] Failed to cache:', url))
                    )
                );
            })
        ])
    );

    // Activate immediately without waiting for old SW to finish
    self.skipWaiting();
});

// Activate event - Clean up old caches
self.addEventListener('activate', event => {
    console.log('[SW] Activating...');

    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(
                keys
                    .filter(key => key !== STATIC_CACHE && key !== DYNAMIC_CACHE && key !== EXTERNAL_CACHE)
                    .map(key => {
                        console.log('[SW] Removing old cache:', key);
                        return caches.delete(key);
                    })
            );
        }).then(() => {
            // Take control of all pages immediately
            return self.clients.claim();
        })
    );
});

// Fetch event - Network first strategy for navigation, stale-while-revalidate for assets
self.addEventListener('fetch', event => {
    const { request } = event;
    const url = new URL(request.url);

    // Skip non-GET requests
    if (request.method !== 'GET') return;

    // Skip chrome-extension and other non-http(s) requests
    if (!url.protocol.startsWith('http')) return;

    // Strategy 1: Network First for HTML pages (navigation)
    if (request.headers.get('Accept')?.includes('text/html')) {
        event.respondWith(networkFirst(request));
        return;
    }

    // Strategy 2: Stale While Revalidate for static assets (CSS/JS/Images)
    if (isStaticAsset(url.pathname)) {
        event.respondWith(staleWhileRevalidate(request));
        return;
    }

    // Strategy 3: Cache First for external resources (CDN)
    if (isExternalResource(url.href)) {
        event.respondWith(cacheFirst(request, EXTERNAL_CACHE));
        return;
    }

    // Default: Network only
    event.respondWith(fetch(request));
});

/**
 * Network First Strategy
 * Try network first, fallback to cache
 */
async function networkFirst(request) {
    try {
        const response = await fetch(request);

        if (response.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        console.log('[SW] Network failed, trying cache');

        const cachedResponse = await caches.match(request);

        if (cachedResponse) {
            return cachedResponse;
        }

        // Return offline page if available
        const offlinePage = await caches.match('/offline.html');
        return offlinePage || new Response('Offline', { status: 503 });
    }
}

/**
 * Stale While Revalidate Strategy
 * Serve from cache immediately, update in background
 */
async function staleWhileRevalidate(request) {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);

    // Update cache in background
    const fetchPromise = fetch(request)
        .then(response => {
            if (response.ok) {
                cache.put(request, response.clone());
            }
            return response;
        })
        .catch(error => {
            console.log('[SW] Background revalidation failed');
            return null; // Don't fail if background update fails
        });

    // Return cached version or wait for network
    return cachedResponse || fetchPromise;
}

/**
 * Cache First Strategy
 * Serve from cache, fallback to network and cache
 */
async function cacheFirst(request, cacheName) {
    const cache = await caches.open(cacheName);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
        return cachedResponse;
    }

    try {
        const response = await fetch(request);

        if (response.ok) {
            cache.put(request, response.clone());
        }

        return response;
    } catch (error) {
        console.error('[SW] Both cache and network failed');
        return new Response('Resource not available offline', { status: 503 });
    }
}

/**
 * Check if URL is a static asset
 */
function isStaticAsset(pathname) {
    const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2'];
    return staticExtensions.some(ext => pathname.endsWith(ext));
}

/**
 * Check if URL is an external resource
 */
function isExternalResource(url) {
    return url.includes('cdn.jsdelivr.net') ||
           url.includes('googletagmanager.com') ||
           url.includes('giscus.app');
}

// Handle messages from the main thread
self.addEventListener('message', event => {
    if (event.data?.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }

    if (event.data?.type === 'CLEAR_CACHE') {
        caches.keys().then(keys => {
            keys.forEach(key => caches.delete(key));
        });
    }
});

// Background sync for form submissions (if supported)
self.addEventListener('sync', event => {
    if (event.tag === 'sync-form-data') {
        event.waitUntil(syncFormData());
    }
});

async function syncFormData() {
    // Implement form data sync logic here
    console.log('[SW] Syncing form data...');
}
