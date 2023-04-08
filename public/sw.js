const CACHE_NAME = `FastDAW-v0.4`;

// Use the install event to pre-cache all initial resources.
self.addEventListener("install", (event) => {
  console.log("Service worker installing...");
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      cache.addAll([
        "/offline.html",
        "/notes/A3.wav",
        "/notes/A4.wav",
        "/notes/ASharp3.wav",
        "/notes/ASharp4.wav",
        "/notes/B3.wav",
        "/notes/B4.wav",
        "/notes/C3.wav",
        "/notes/C4.wav",
        "/notes/CSharp3.wav",
        "/notes/CSharp4.wav",
        "/notes/D3.wav",
        "/notes/D4.wav",
        "/notes/DSharp3.wav",
        "/notes/DSharp4.wav",
        "/notes/E3.wav",
        "/notes/E4.wav",
        "/notes/F3.wav",
        "/notes/F4.wav",
        "/notes/FSharp3.wav",
        "/notes/FSharp4.wav",
        "/notes/G3.wav",
        "/notes/G4.wav",
        "/notes/GSharp3.wav",
        "/notes/GSharp4.wav",
      ]);
    })()
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cachedResponse = await cache.match(event.request);
      if (cachedResponse) {
        return cachedResponse;
      } else {
        try {
          const fetchResponse = await fetch(event.request);
          //   cache.put(event.request, fetchResponse.clone());
          return fetchResponse;
        } catch (e) {
          return caches.match("/offline.html");
        }
      }
    })()
  );
});
