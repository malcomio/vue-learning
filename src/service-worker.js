import { Plugin } from 'workbox-background-sync';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { NetworkFirst, NetworkOnly } from 'workbox-strategies';

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);

// Cache local requests.
registerRoute(
    ({url}) => url.origin === self.location.origin,
    new NetworkFirst(),
    'GET'
);

// Sync POSTs when we get network back.
const bgSyncPlugin = new Plugin('ehc-offline-queue', { // eslint-disable-line
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
    ({url}) => url.pathname.startsWith('/vue/api/'),
    new NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);
