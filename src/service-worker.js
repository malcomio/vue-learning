require('workbox-sw');
import { Plugin } from 'workbox-background-sync';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, NetworkOnly } from 'workbox-strategies';

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);

// Cache local API requests.
registerRoute(
    ({url}) => url.origin === self.location.origin &&
        url.pathname.startsWith('/api/'),
    new StaleWhileRevalidate(),
    'GET'
);

// Sync POSTs when we get network back.
const bgSyncPlugin = new Plugin('ehc-offline-queue', { // eslint-disable-line
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

console.log(bgSyncPlugin);
registerRoute(
    /\/api\/.*/,
    new NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);
