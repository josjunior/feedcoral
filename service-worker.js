/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

 importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

 workbox.skipWaiting();
 workbox.clientsClaim();
 
 /**
  * The workboxSW.precacheAndRoute() method efficiently caches and responds to
  * requests for URLs in the manifest.
  * See https://goo.gl/S9QRab
  */
 self.__precacheManifest = [
   {
     "url": "icons/144.png",
     "revision": "da5ec497d9ee5bf3a6a24ac55b37d0bf"
   },
   {
     "url": "icons/192.png",
     "revision": "3c87fc33df2cc7e7040432bd974ea677"
   },
   {
     "url": "icons/256.png",
     "revision": "edbfab5a83ae79acab9505d48013b89e"
   },
   {
     "url": "icons/48.png",
     "revision": "c307f944eb02157ee0f5b48ca586acbb"
   },
   {
     "url": "icons/512.png",
     "revision": "d7fe7426ad0aa8872e21a2044cc85fdf"
   },
   {
     "url": "icons/72.png",
     "revision": "8d68c9bf3f5303d21dccc0a1be7873a5"
   },
   {
     "url": "icons/96.png",
     "revision": "1d97876535048c901fe1d9f68edab79c"
   },
   {
     "url": "icons/favicon.ico",
     "revision": "6155d0e3f24f1100a9794bc2ebe22551"
   },
   {
     "url": "index.html",
     "revision": "180b975ad681e4e73f74eec760b14bed"
   },
   {
     "url": "manifest.json",
     "revision": "ca58d539f0b048400be1d1f91d3eaf90"
   },
   {
     "url": "scripts/ios-install-button.js",
     "revision": "17ac01353a6a674adb69c40350a2fa87"
   },
   {
     "url": "scripts/media-session-controller.js",
     "revision": "ddb0dbbd55a78521483d4e4dfaf5dade"
   },
   {
     "url": "sounds/silence.mp3",
     "revision": "4c014957d1387437b56d40d049531d2c"
   }
 ].concat(self.__precacheManifest || []);
 workbox.precaching.suppressWarnings();
 workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
 
 workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/, workbox.strategies.cacheFirst({ "cacheName":"googleapis", plugins: [new workbox.expiration.Plugin({"maxEntries":30,"purgeOnQuotaError":false})] }), 'GET');
 
 workbox.googleAnalytics.initialize({});
 