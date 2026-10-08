// Service worker: makes the app installable, keeps the last app shell for offline start,
// and shows reminder notifications. Pushes arrive without a payload; the text comes from the API.
const CACHE = 'eq-v2';
const API_URL = 'https://script.google.com/macros/s/AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w/exec';

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './icons/icon-192.png', './icons/badge-96.png'])));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Network first, so updates show up immediately; cache only as an offline fallback.
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});

self.addEventListener('push', e => {
  e.waitUntil((async () => {
    let msg = { title: 'English Quest', body: 'Your 10 minutes of English are waiting.' };
    try {
      const sub = await self.registration.pushManager.getSubscription();
      const r = await fetch(API_URL, {
        method: 'POST', credentials: 'omit', headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ fn: 'apiPushMessage', args: [sub ? sub.endpoint : ''] })
      }).then(res => res.json());
      if (r.ok && r.data) msg = r.data;
    } catch (err) {}
    await self.registration.showNotification(msg.title, {
      body: msg.body, icon: 'icons/icon-192.png', badge: 'icons/badge-96.png', tag: 'eq-reminder', renotify: true
    });
  })());
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (wins.length) return wins[0].focus();
    return self.clients.openWindow('./');
  })());
});
