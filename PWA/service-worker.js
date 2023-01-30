console.log("works");
self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('v1').then(function (cache) {
			return cache.addAll([
				'/',
				'../PWA/index.html',
				'../PWA/style.css',
				'../PWA/app.js',
				'../PWA/Gallery/icon190.png',
				'../PWA/Gallery/icon320.png'
			]);
		})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			return response || fetch(event.request);
		})
	);
});
