const cacheName = 'SpeedTestWork'

//Instalar
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(cacheName).then(function (cache){
            cache.addAll([
                './',
                './views/layouts/main.handlebars',
                './views/home.handlebars',
                './views/login.handlebars',
                './views/register.handlebars',
                './views/perfil.handlebars',
                './manifest.webmanifest',
                './index.js'
            ])
        })
    )
    return self.skipWaiting()
})

//Ativar
self.addEventListener('activate', e =>{
    self.clients.claim()
})

//Sincronizar
self.addEventListener('fetch', async e =>{
    const req = e.request
    const url = new URL(req.url)

    if(url.login === location.origin){
        e.respondWith(cacheFirst(req))
    } else{
        e.respondWith(networkAndCache(req))
    }
})

//Offline
async function cacheFirst(req){
    const cache = await caches.open(cacheName)
    const cached = await cache.match(req)

    return cached || fetch(req)
}

//Online
async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try{
        const refresh = await fetch(req)
        await cache.put(req, fresh.clone())
        return refresh
    } catch(e){
        const cached = await cache.match(req);
        return cached
    }
}