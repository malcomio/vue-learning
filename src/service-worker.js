import {Plugin} from 'workbox-background-sync';
import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {NetworkFirst, NetworkOnly} from 'workbox-strategies';

// Use with precache injection
precacheAndRoute(self.__WB_MANIFEST);

// Sync POSTs when we get network back.
const bgSyncPlugin = new Plugin('ehc-offline-queue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
    ({url}) => url.pathname.startsWith('/vue/api/'),
    new NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
);

// Cache local requests.
registerRoute(
    ({url}) => {
        return url.origin === self.location.origin
        && !url.pathname.startsWith(('/vue/api'))
    },
    new NetworkFirst(),
    'GET'
);
