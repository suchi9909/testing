var cacheName = "taxify-app";
var filesToCache = [
  "./",
  "./index.html",
  "./assets/css/vendors/aos.css",
  "./assets/css/vendors/bootstrap.css",
  "./assets/css/vendors/bootstrap.rtl.min.css",
  "./assets/css/vendors/calender.min.css",
  "./assets/css/vendors/iconsax.css",
  "./assets/css/vendors/swiper-bundle.min.css",
  "./assets/css/style.css",
  "./assets/js/aos.js",
  "./assets/js/bootstrap.bundle.min.js",
  "./assets/js/calender.min.js",
  "./assets/js/chatting-chat.js",
  "./assets/js/custom-aos.js",
  "./assets/js/custom-calender.js",
  "./assets/js/custom-map.js",
  "./assets/js/custom-swiper.js",
  "./assets/js/custom-tip.js",
  "./assets/js/homescreen-popup.js",
  "./assets/js/iconsax.js",
  "./assets/js/image-change.js",
  "./assets/js/offcanvas-popup.js",
  "./assets/js/onload-modal.js",
  "./assets/js/otp.js",
  "./assets/js/script.js",
  "./assets/js/sticky-header.js", 
  "./assets/js/swiper-bundle.min.js",
  "./assets/js/template-setting.js",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});