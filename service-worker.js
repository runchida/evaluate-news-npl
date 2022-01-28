import { precacheAndRoute } from 'workbox-precaching';
precacheAndRoute(self.__WB_MANIFEST);

console.log('Hello from service-worker.js');

self.addEventListener('fetch', (event) => {
    console.log('No Service now')
    event.respondWith(
        new Response('<p>This is a response that comes from your service worker!</p>', {
            headers: { 'Content-Type': 'text/html' },
            body: {data: {stories: {title: 'hello', links: {permalink: '1234'}}}}
        })
    )
});
