'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b76fcdb8e10c583a5b47b6d894750c6f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "737cc75986cb2d2b4c66e93c7edbd3a7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5db21b799d16ae9d77f100b2042d1453",
".git/logs/refs/heads/main": "55af414aa791aa5ebe97782d850021c4",
".git/logs/refs/remotes/origin/main": "0c05024ec54a48208cf36627c4c3e6d9",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/7ee2f581dee8105a1bb221a89e6a1d421aefc0": "7b5eb2631135696427c304a2e84b0039",
".git/objects/07/32e785226ed8f751d3682648bda3b3f60bb050": "623674469c32e60b1c22367be5029914",
".git/objects/08/86495ebc86e6574c97a5a2c2458741439d5f62": "c08053bb547f3811423b9ffa58b0f181",
".git/objects/0e/69b8e864616f494453e8891b14bfbb55b9c372": "74c8f49fdd3b386c3ba662285f5cae8a",
".git/objects/13/7c774b82e8141c896c1239218125c86ff51864": "4db1c95cbdec5107e4c8a54127cfbda9",
".git/objects/18/df03110c6632ebb7cfdf7129206e9e2a822ec8": "bd278982774cc47a98a812f2efd30d26",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/e3470f722dad57889a544417f5bd0804202697": "40f1fe403924e7792e76db10c686af41",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/35/760a2853daeecc1724444b7d15a43da30e61ed": "8534e971743241b526e5212868b0c39c",
".git/objects/37/d56532eddce61bd9dd2f7404db2c33e28c9a57": "cbed7c44d9dc9ac802a4ec911d1ab377",
".git/objects/38/e882a28f20500f9ccf465067414facca2dd632": "e6e22485eae2341d7d1fb1b5d83df25d",
".git/objects/3e/c09c69dfbcf6bb9ec1924c65c83ce4b1af0525": "d63b098fb061f313d7ff6d236f83e36a",
".git/objects/40/a59f301ff136cfcac7c5dd0596722dff093188": "ac416664dc6b24a0d0c703d1772e7fc2",
".git/objects/4a/87aa3825b223a1f7321a12772f4097413df483": "70c71525aa2ca752f2f34be074b5ebcf",
".git/objects/4e/1e54952977922e7f53adb5ac1dddc257e380a3": "bee9dabda0a6e8567e109db2c03367f7",
".git/objects/5b/65cc84d7f539c8ebbf958676756fb09a456b0f": "06de8d2db9548a0893b6c95b90843fbc",
".git/objects/5f/4a14ca661bc9f4f31e3c58abc7c2ec977dce6b": "b9da5547343ce9d264f28191b4b74934",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6f/9f51dbb589302259ac4dd69fe304d42950859f": "8ede48e7eef1b68cb11601c68eaf4fd7",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7a/29ca59e7f484391a782faa1b798d458bbd656a": "b9c7d435a56fa8f088ca6cc726db60f6",
".git/objects/7e/483b2c846ea19090e34853046f18a6a386de15": "269fa724652947ca5dbb4c458416d3e4",
".git/objects/81/04d8914232098f7034b86cfb0eaa9038a9ef02": "5c4636f606fe23a2032add1bcb00049a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/967d5f7c589c694431183159188925bb2b5de1": "389b82c0b2e93823ca5cdea2b576f321",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a5/4d78e86f0efe375ea60770b32eeaed6aff477e": "f385c8a1fb5535801defac4a86c9545e",
".git/objects/ab/9ef56a959b72482683711ce45fc7e62a8300f2": "f07b5dc2f40f8bba62ce293dc49d77ed",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/baa8e9142e7f4ea6d444988bf63aeaa065080a": "5c410ce370ddaf72ddc1317364414506",
".git/objects/c0/bfe839a96ff5c7ee3a78ad49af8042418ac294": "68f995924e849f775ad7e49f267416aa",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ca/de4369251c1706a85eb04a41d93fd111e7e644": "0d60f63f21ed0846720dd297d6350e1c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/8878ec40e49cbd519567c8d7933edfe3d293bc": "a9166bae349f3ab203541de10269b930",
".git/objects/e1/cedf0f638503e9e28d6a88306342100caf6fd6": "b8d5e49c462cc09190aec1625a70da2c",
".git/objects/e2/28b8aa3e096b213ba38a292efe1bf0b86a9c15": "1a75a9a152cd3d6ca940931151d1ce62",
".git/objects/ea/95a44b6914f3bbd71714cd4aff6bfcdbea4144": "3e7eb2cd5817dcb7942ad6290dcf2303",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/db6469446425a576634eaf17aea4be79630e27": "508d476597d7fbaebfd0f80ac9dac6d5",
".git/objects/f5/761cb57ad0f6165054cccd0a4ef52eb02b67be": "182fcc4a73a84ba6dd7e50ac70448eef",
".git/objects/fc/5d84078297cbdcb31a01f684e059da2da29300": "c9c3fe91450c38cfa55463c11e401835",
".git/refs/heads/main": "0c01d351b81e43d78362b43c7e95dc49",
".git/refs/remotes/origin/main": "0c01d351b81e43d78362b43c7e95dc49",
"assets/AssetManifest.bin": "f8674366b7636e8b0e037d4bc9305f8f",
"assets/AssetManifest.bin.json": "a3bde4e40f5142478ec5b19c00574821",
"assets/AssetManifest.json": "46a1138e097ea4a7d1c1e73229a58d30",
"assets/FontManifest.json": "5d520641ed6c616221f2359c8cbfbe9e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/Raleway-Bold.ttf": "9aefa157ae4a8f7ff923dd88cee3917f",
"assets/fonts/Raleway-BoldItalic.ttf": "9b2fd35772aa95d64c88d655a53a1715",
"assets/fonts/Raleway-ExtraLightItalic.ttf": "429362d36a625285ba2e28b864e3c834",
"assets/fonts/Raleway-ThinItalic.ttf": "fe397b9bebda4ab94ed5f5af6c924551",
"assets/images/myimage.jpeg": "be3a1cbad3812785c865461b7b3a573a",
"assets/NOTICES": "382a4cfea2996c1184ca1aaf83a0f148",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "aa78051565dc5eaf943f3584c4fd4c48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "dec146da6b56771a02ae020d5f115990",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "744521a79c0456f0216cf1ef2a678f11",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "969a8518224b559f85adcc4ddb8fe43b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9047eb69a7f691027cfc1eec30651c54",
"/": "9047eb69a7f691027cfc1eec30651c54",
"main.dart.js": "8aa08833d3a365e558eb6221356351af",
"manifest.json": "9c62288df46258cc65239c3f00e8caf8",
"version.json": "81588d8a7170a469f9496bd90cee7507"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
