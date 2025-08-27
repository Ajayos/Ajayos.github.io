/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-ecdd2ace'], (function (workbox) { 'use strict';

  self.skipWaiting();
  workbox.clientsClaim();

  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */
  workbox.precacheAndRoute([{
    "url": "assets/index-BDp1Dhz1.js",
    "revision": null
  }, {
    "url": "assets/index-d822VoZL.css",
    "revision": null
  }, {
    "url": "assets/workbox-window.prod.es5-B9K5rw8f.js",
    "revision": null
  }, {
    "url": "index.html",
    "revision": "5eee2caffb72dbb0b2db63ae68998578"
  }, {
    "url": "offline.html",
    "revision": "9ee2b2182f7a80dfeb4257050b123cd9"
  }, {
    "url": "z75co8kjlyukaxklltt4csngqv72fm.html",
    "revision": "62ef7524b88db7ec545232c98d77b777"
  }, {
    "url": "ajayos.png",
    "revision": "710f30dc4f15603514f17db5eabb4f89"
  }, {
    "url": "android-chrome-192x192.png",
    "revision": "310778758d1774acbc1e71703044f7bd"
  }, {
    "url": "android-chrome-512x512.png",
    "revision": "b4258f0301d4cda98cb998e0c0e4e394"
  }, {
    "url": "apple-touch-icon.png",
    "revision": "199b12320097724e95d5c1e92a5028d0"
  }, {
    "url": "favicon.ico",
    "revision": "551299ecd846a440d1337c7741104cd9"
  }, {
    "url": "offline.html",
    "revision": "9ee2b2182f7a80dfeb4257050b123cd9"
  }, {
    "url": "manifest.webmanifest",
    "revision": "6494c506d349b50a6bc7e71ccf1955ac"
  }], {});
  workbox.cleanupOutdatedCaches();
  workbox.registerRoute(new workbox.NavigationRoute(workbox.createHandlerBoundToURL("/offline.html")));
  workbox.registerRoute(({
    request
  }) => request.destination === "document", new workbox.NetworkFirst({
    "cacheName": "html-cache",
    plugins: []
  }), 'GET');
  workbox.registerRoute(({
    request
  }) => request.destination === "script" || request.destination === "style", new workbox.StaleWhileRevalidate({
    "cacheName": "static-resources",
    plugins: []
  }), 'GET');
  workbox.registerRoute(({
    request
  }) => request.destination === "image", new workbox.CacheFirst({
    "cacheName": "image-cache",
    plugins: [new workbox.ExpirationPlugin({
      maxEntries: 50,
      maxAgeSeconds: 2592000
    })]
  }), 'GET');

}));
