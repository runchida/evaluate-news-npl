import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);
self.addEventListener('activate', function(event) {
  console.log('Claiming control');
  return self.clients.claim();
});
self.addEventListener('fetch', (event) => {
  console.log('fetch incoming, no connection');
  });