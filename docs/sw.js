// Service worker: makes the app installable, opens it from the phone and shows notifications (reminders,
// duel invites). Pushes arrive without a payload; the text comes from the API, with an optional url to open
// on tap (a duel: ./?duel=CODE).
// Caching (specs/perf-phase1.md):
// - the app page: from the phone at once, refreshed in the background; a newer page is announced to the app
//   ("eq-update"), which offers a tap to update, and the next open shows it anyway;
// - pictures, icons and the versioned game bank (games.js?v=N): from the phone once they are there, since
//   they never change under the same address;
// - anything else of this site: network first, the phone's copy when offline.
const SHELL = 'eq-shell-v5', ASSETS = 'eq-assets-v1';
const API_URL = 'https://script.google.com/macros/s/AKfycbzN95JPrZcVFtwOc5yYpZLEh5fhySlDWHim1wAF_-3kdQpij1s6g4-ixld8NgK27HNI3w/exec';

self.addEventListener('install', e => {
  self.skipWaiting();
  // Best effort: a file that is missing (a test copy of the app) must not stop the install.
  e.waitUntil(caches.open(SHELL).then(c => Promise.all(['./', './icons/icon-192.png', './icons/badge-96.png'].map(u => c.add(u).catch(() => {})))));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== SHELL && k !== ASSETS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const isAsset = url => /\/(pets|pics|icons)\//.test(url.pathname) || (/games\.js$/.test(url.pathname) && url.searchParams.has('v'));
const isPage = (req, url) => req.mode === 'navigate' || /\/$|\.html$/.test(url.pathname);

self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (isAsset(url)) return e.respondWith(fromPhoneFirst(req));
  if (isPage(req, url)) return e.respondWith(pageNowThenFresh(e, req, url));
  e.respondWith(fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
    return res;
  }).catch(() => caches.match(req, { ignoreSearch: true })));
});

async function fromPhoneFirst(req) {
  const c = await caches.open(ASSETS);
  const hit = await c.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) c.put(req, res.clone());
  return res;
}

// One copy per page address (?g=… and ?duel=… share it).
async function pageNowThenFresh(e, req, url) {
  const key = url.origin + url.pathname, c = await caches.open(SHELL);
  const hit = await c.match(key), old = hit && hit.clone();
  const fresh = fetch(req).then(async res => {
    if (res && res.ok && res.type === 'basic') {
      const changed = old && !(await samePage(old, res.clone()));
      await c.put(key, res.clone());
      if (changed) (await self.clients.matchAll({ type: 'window' })).forEach(w => w.postMessage({ type: 'eq-update' }));
    }
    return res;
  }).catch(() => null);
  if (hit) { e.waitUntil(fresh); return hit; }
  return (await fresh) || (await c.match('./')) || Response.error();
}

async function samePage(a, b) {
  const tag = r => r.headers.get('etag') || r.headers.get('last-modified');
  if (tag(a) && tag(b)) return tag(a) === tag(b);
  return (await a.text()) === (await b.text());
}

// The app asks for what it will show next (the game bank, the pets of the opening, the kid's pet).
self.addEventListener('message', e => {
  const d = e.data || {};
  if (d.type !== 'precache' || !Array.isArray(d.urls)) return;
  e.waitUntil(caches.open(ASSETS).then(c => Promise.all(d.urls.slice(0, 60).map(async u => {
    try {
      const url = new URL(u, self.location.href);
      if (url.origin !== self.location.origin || !isAsset(url) || await c.match(url.href)) return;
      const res = await fetch(url.href);
      if (res.ok) await c.put(url.href, res);
    } catch (err) {}
  }))));
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
      body: msg.body, icon: 'icons/icon-192.png', badge: 'icons/badge-96.png', tag: msg.tag || 'eq-reminder', renotify: true,
      data: { url: msg.url || './' }
    });
  })());
});

// An open app gets the url as a message (it opens the duel itself); otherwise open a window there.
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil((async () => {
    const wins = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    if (wins.length) {
      if (url !== './') wins[0].postMessage({ url });
      return wins[0].focus();
    }
    return self.clients.openWindow(url);
  })());
});
