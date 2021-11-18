/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js?a`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
    },
    offline () {
      // TODO: why doesn't this actually fire?
      console.log('No internet connection found. App is running in offline mode.')
      displayNotification('No internet connection found. App is running in offline mode.', 'banana')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

const notificationsSupported = () =>
    'Notification' in window &&
    'serviceWorker' in navigator &&
    'PushManager' in window;

function displayNotification(body, title) {
  if (notificationsSupported() && Notification.permission === 'granted') {
    const options = {
      body: body
    };

    navigator.serviceWorker.getRegistration().then(reg => {
      reg.showNotification(title, options).then(notification => {
        console.log(notification);
      });
    });
  }
}

// TODO: Firefox needs this to happen from an explicit user action.
if (notificationsSupported() && Notification.permission !== "granted") {
  Notification.requestPermission().then(permission => {
    console.log(permission);
    displayNotification("You are now set up to use notifications", 'Vue');
  })
}
