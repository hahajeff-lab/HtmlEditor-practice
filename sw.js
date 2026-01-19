const cacheName = 'editor-v1';
const assets = [
  './',
  './index.html',
  './codemirror.js',
  './codemirror.css',
  './monokai.css',
  './xml.js'
];

// 安裝並快取檔案
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// 沒網路時，從快取讀取
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});