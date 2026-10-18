self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'NOTIFICACION_PERSONALIZADA') {
        self.registration.showNotification(event.data.titulo, {
            body: event.data.mensaje,
            icon: 'https://cdn-icons-png.flaticon.com/512/3603/3603850.png',
            badge: 'https://cdn-icons-png.flaticon.com/512/3603/3603850.png',
            vibrate: [300, 100, 300, 100, 500]
        });
    }
});
