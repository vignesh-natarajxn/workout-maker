let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/static/js/bundle.js",
        "favicon.ico",
        "/static/media/logo.82aba768aad5b9041f437be964931645.svg",
        `https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap`,
        `https://fonts.googleapis.com/icon?family=Material+Icons`,
        `https://fonts.googleapis.com/css2?family=Exo:wght@100;200;300;400;500;600;700&display=swap`,
        `https://fonts.gstatic.com/s/exo/v18/4UaOrEtFpBISc36j.woff2`,
        "/index.html",
        "/",
        "/edit",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      if (resp) return resp;
    })
  );
});
