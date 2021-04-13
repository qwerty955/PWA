const ass = [
    'index.html',
    'index.js',
    'style.css'
];

self.addEventListener("install", async event =>{
    const cache = await caches.open("s-app-v1")
    await cache.addAll(ass)
    console.log('[sv] install');
});

self.addEventListener("activate", event =>{
    console.log('[sv] activate');
});

self.addEventListener("fetch", ev =>{
    console.log(ev.request.url);

    ev.respondWith(cf(ev.request));
});

async function cf(request) {
    const ac = await caches.match(request);
    return ac ?? await fetch(request)
}