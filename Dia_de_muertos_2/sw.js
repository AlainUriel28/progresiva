//asignar nombre y version de cache
const CACHE_NAME = 'v1_cache';


//eventos de service worker

//Intercepta las solicitudes y maneja las respuestas desde la cache
//instalacion del service worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mi-cache').then((cache) => {
            return cache.addAll([
                '/',
                'nov1.html',
                '.vscode/launch.json',
                'img/comida.jpg',
                'img/dia.jpg',
                'img/disfraz.jpg',
                'img/historia.jpg',
                'img/ofrenda.jpg',
                'img/story.jfif',
                'app.js',
                'de.gif',
                'dias.jpg',
                'emoji-sunglasses-fill.svg',
                'favicon.ico',
                'main.js',
                'manifest.json',
                
                'package-lock.json',
                'package.json',
                'styles.css',
                'sw.js'

                /* 'node_modules/@popperjs\core/dist/cjs/enums.js',
                 'node_modules/@popperjs\core/dist/cjs/enums.js.flow',
                 'node_modules/@popperjs\core/dist/cjs/enums.js.map',
                 'node_modules/@popperjs\core/dist/cjs/popper-base.js',
                 'node_modules/@popperjs\core/dist/cjs/popper-base.js.flow',
                 'node_modules/@popperjs\core/dist/cjs/popper-base.js.map',
                 'node_modules/@popperjs\core/dist/cjs/popper-lite.js',
                 'node_modules/@popperjs\core/dist/cjs/popper-lite.js.flow',
                 'node_modules/@popperjs\core/dist/cjs/popper-lite.js.map',
                 'node_modules/@popperjs\core/dist/cjs/popper.js',
                 'node_modules/@popperjs\core/dist/cjs/popper.js.flow',
                 'node_modules/@popperjs\core/dist/cjs/popper.js.map',
 
                 'node_modules/@popperjs\core/dist/esm/createPopper.js',
                 'node_modules/@popperjs\core/dist/esm/enums.js',
                 'node_modules/@popperjs\core/dist/esm/index.js',
                 'node_modules/@popperjs\core/dist/esm/popper-base.js',
                 'node_modules/@popperjs\core/dist/esm/popper-lite.js',
                 'node_modules/@popperjs\core/dist/esm/popper.js',
                 'node_modules/@popperjs\core/dist/esm/types.js',
 
                 'node_modules/@popperjs\core/dist/dom-utils/contains.js',
                 'node_modules/@popperjs\core/dist/dom-utils/getBoundingClientRect.js',
                 'node_modules/@popperjs\core/dist/dom-utils/getClippingRect.js',
                 'node_modules/@popperjs\core/dist/dom-utils/getCompositeRect.js',
                 'node_modules/@popperjs\core/dist/dom-utils/getComputedStyle.js',
                 'node_modules/@popperjs\core/dist/dom-utils/getDocumentElement.js',
                 'node_modules/@popperjs\core/dist/dom-utils/.js',*/
            ]);
        })
    );
});
   
   
   
   
    //Activacion del service worker
    self.addEventListener('activate', (event) => {
        event.waitUntil(
            caches.keys().then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (cacheName !== 'mi-cache') {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
        );
    });

    //asignar nombre y version de cache
    


    //eventos de service worker

    //Intercepta las solicitudes y maneja las respuestas desde la cache

    self.addEventListener('fetch', (event) => {
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    });


