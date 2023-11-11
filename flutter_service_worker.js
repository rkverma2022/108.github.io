'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "af034dba549ebd857ca4ff0379b05ed3",
".git/config": "c8cfd38572540dc2368a9fdeafc2d404",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ff13b4b25a2b60f30cbbc2ce17855a09",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ec483339a5d856bc302e67806e090e0c",
".git/logs/refs/heads/main": "c38ec7b622199ed62c735b18e43eb245",
".git/logs/refs/remotes/origin/main": "1019577f0c82575d623129aa2f2304f1",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/06/9e98d563a723f05e38cccfb81545c4e9abb141": "fdb0dcc1c34bcbdc232594c5500c46a9",
".git/objects/0a/0a3312208ca2b8cd2d8c396668659881b5997c": "99faba40018020522f39d8927eac608b",
".git/objects/0a/24e4353e453b0162d8556eb29bfa0f4acca16e": "e8ca6051d0af0b324801165f5df5aa71",
".git/objects/0b/ccab041c7053035ae85b811fae8451ad4e9d5c": "6d7ba9bffd43e37315fd4d80d76c07d3",
".git/objects/0e/2562554f0a63ef34e36cbdf703e7514c806228": "c1ece03c2f66cf07e9e1cfe824e176cf",
".git/objects/11/dc37e25a422ffc94d8e332b13e85490c71cf42": "2b9f7afbf8375e2d45a9b161dea110f0",
".git/objects/13/a638c90fc84af8068fa1354ac6c5f5f6ae98bb": "7a6eede05fb8b2463ac9f4508dec125b",
".git/objects/15/32fd291ea7f665c2af10c3a7806133950fcd50": "b3b6197a7ae5b383cad93baf81e4511c",
".git/objects/17/ed87d1895d376e35d8088a241fb73c0d6947aa": "4d3e9b583164452abbea9dc54c2d8540",
".git/objects/18/0a157c9d739e4c3242ce77ae068d96333d8372": "124e338bfe41e1143320874bb2a0103b",
".git/objects/18/6dd706d0e3a359bda6987b0555ec1f8b6aa0eb": "97e0536a7068a6a0636ef51cab877218",
".git/objects/1c/18833a858410ac67344084ce02a1aa3b8e9aec": "8d3df2fd9dfdfb87dec7f6d62885e06c",
".git/objects/21/40991ab6e1884cd5beda9bc7b672d36f408dc9": "4c2e90f1d1ed857b61c707e591671564",
".git/objects/28/e2a69968f89aae4ae329cfcfcdf6fc7c68ab00": "053901148cd28ce6de78e29cce06dc15",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3f/d2a7a6757f80fc21aafe4ec375f1e8e8961806": "2176af943d53b957c6946e9ad207b572",
".git/objects/45/473d64dbcf3dd6fcbd73f2b791c04b4921902e": "e8f728915ccf42c025d4fa2d42b063aa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/738c390c8f571259cc7048d92fa96123ad18ee": "8666088da106b6f2f20212cd5a5d2a3e",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4c/caf4ff5fd0518fde6adf0e9c14d9f744ac7993": "949ce6b17f8940b3aaad17809b1de7a5",
".git/objects/4e/b0154f35c160a6a4e56dc9c08988ff5301f133": "f28f2fb9c0e97f122ecd846e51f848c0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/c19c24ca3f4518dfb16c7cdb0709ac4268b943": "960e5105a6f0032e7ae7ae70dcb24fe1",
".git/objects/5d/6b2062c8c2b4b0d9982be81656a24ce3bf351e": "a52832dd2ae0cda2b55cf7c45d1e536e",
".git/objects/5e/5529edd994298d04f80416a87a3b9072abeb6c": "d2cd8012745635582469b9b06b11726c",
".git/objects/61/a4c708e6f6d83ebff66eaa53c8f6b64c875b33": "5bccf31266172002f1d362b9fd5e0b72",
".git/objects/65/e192e01577603322464895302063bc1d26d233": "7742c9fefca76f622e5a39923a6a7480",
".git/objects/68/a7932bdeac53cb73c9a88f7f6c43889188692f": "9533b15edb45e617017f16cae58022b0",
".git/objects/69/dcdd5dbdfcd59af2775edc67ac44670ea21778": "c351ef06e49f1774d31dfa2108bdddde",
".git/objects/71/dcce288107d90922c0f44702605b88a2001c94": "6033d261aa71d10e2f3ab48aa5404b42",
".git/objects/73/05d92bbcdf5d50d503a0edf36e40b736e5743a": "d64b574f53bd59aee3ad0b77ad4c4b9e",
".git/objects/75/bcc54426bfe845e79cb691f0f726fb4d30b51b": "a10fbad0cfe811790678efb6af0c775c",
".git/objects/78/84d1ba66430f0660febb35090c5897ffc7b633": "eecba8cd0e764ae3b8b4df9c460ca486",
".git/objects/7b/30318fef11f72226eb3f986ed943dfcfa9cb52": "04d4706256152661359a5ed277242601",
".git/objects/7c/eb45078bab4dc5ee634b8e542e678f9e1d6466": "61a0982d429e34dbc535a79375f55272",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/b8374c6fe2eba82e9d234ea25f9fa06dced409": "2fa28c10179f4e1f8d81ffb8d06265fe",
".git/objects/8c/6e2d28af16c304600ae81dd32aede4e23194ab": "e5c19a3d5cf5549442acb862e6b8750d",
".git/objects/8d/1e03997dfd35fc0a7c1b4efb55039fe1893bd4": "b9fc10dbe4d106cf0c6702a2b2e7d635",
".git/objects/8d/e873bb229841224e829411fe40781b4ec66043": "bf1ce50f9cb0f9695b47678e56d99612",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/99/8b6cdf71b6baefb6a60400ad6047db2680753c": "ff19692b62bd6589d883c7a4549d5a2b",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ad/58bd403491247d5456aff43efaff22769d3f9d": "3caa84047c7218cbbfefa40ca383cc99",
".git/objects/ad/ca5cfcf05aff7dcbd1320f0597c64bbf7650b3": "3ace9955464bec72035356ec18685939",
".git/objects/b3/021a5b05fa61eca39512ab7a3cf674e98a27f6": "328ff46ffe1c532273b59b2f8c5dfc02",
".git/objects/b9/282c102dc3d326c2977ab30542e1ff84b3e4ff": "aa88912fa446df17bf3e2fa3dc7f2b3f",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/c3ce0f55ce3dc3d929629266ca85acdef0ef68": "792f8a3dc9d7657913a56e55e1387485",
".git/objects/c6/dd2980785aa5ec6602dc134ada93fbc3a96d8e": "dc07543772372d42b71a30f67165965c",
".git/objects/cf/162180e2f0bc894fc0e7484a0cd4fac9238cf6": "802aca57d0c216786cea76ee5200bc90",
".git/objects/d2/24aecaceee9528a4ed4af5a059d496b124a9f8": "b06ce0cdcd95177a249e6da253efa6a3",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/6a6328bbc32a668e8eacfe8a344044b9a8d54c": "2b793008b4259d4d6386ab80b133eef8",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/47be2f83fcfd94ed2c56bc1363b34fc06e96dc": "4425fc776edaf2eefad8a010e0d04ee4",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/69e6f2e6f0b9895c8fba47cfeac441f16a6e76": "1ad2c831df1d32f7d7938ba637485085",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/757976b6c5017a4a3b6443a7db716982a26a91": "9fa5bae09482c1c3f11cc0e760e4e051",
".git/objects/ee/ba8d5f7ac7c8521ffe5db3fe91fed485fde0a2": "610c210704ee9779eb66c93b598d738e",
".git/objects/f5/35b84c9dca2cd2a1aeee5a8bb81e1dc9206310": "445b5f6c859d32b274ea273788f9f2b5",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/97fdb6d2aad94ac41fd4943d58f74a97f55f6a": "8ac57138387cd61dae8ec20e369f2f0c",
".git/refs/heads/main": "3c0d752badd478774aa56cd3f53752d3",
".git/refs/remotes/origin/main": "3c0d752badd478774aa56cd3f53752d3",
"assets/AssetManifest.bin": "a993d923c4a7fb8c170efee888216296",
"assets/AssetManifest.json": "3c50ddc5917a53724f1def1963963437",
"assets/assets/facebookLogo.png": "4073836f2fdb4bcd7ec76a1ff2f08886",
"assets/assets/googleLogo.png": "1e01fe36388e7453ab926c23b190827c",
"assets/assets/icon-512.png": "54f02d068a68659477a74821402c753c",
"assets/assets/MS_Dark.png": "8faea41284b91797486b2e932f710e16",
"assets/assets/MS_Light.png": "31dd3ddf23b756066dfb7432c93b4d26",
"assets/assets/SHER_logo.png": "8f03acac52621a9db169d739fc444015",
"assets/assets/SHER_ROUND.png": "c884290bedcd7b5dda8d8ecd974f80e5",
"assets/assets/socialMedia/facebook.png": "b68ce92011db542740ae37a77bdf4988",
"assets/assets/socialMedia/Instagram.png": "cfaf4397964554a5e28e4c3416e66233",
"assets/assets/socialMedia/Linkdin.png": "fa32807d6f1bfb53da3c4db62dc8e44d",
"assets/assets/socialMedia/twitter.png": "9a3a06f78cc0a8d79fce59e2de6da146",
"assets/assets/socialMedia/Youtube.png": "c411682ae9f3688a1c662f45bf9a685a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dc01ac81b49a1ca0812fa2b9ab99a085",
"assets/NOTICES": "0d40f244d88191366ae401150cb7f3da",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "959c01f24bf14021127bb1948c958e01",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "54fa87745e5e474a6bc98ad9d349f26e",
"icons/Icon-512.png": "533f0b7e90a284d8acbc054252ca8729",
"icons/Icon-maskable-192.png": "54fa87745e5e474a6bc98ad9d349f26e",
"icons/Icon-maskable-512.png": "533f0b7e90a284d8acbc054252ca8729",
"index.html": "ce38809394faa564ed85fb2a57a5d568",
"/": "ce38809394faa564ed85fb2a57a5d568",
"main.dart.js": "5132a4e7c04774da8675b4716ae78848",
"manifest.json": "394bf23141dbe0cda67c3581d0bb1383",
"version.json": "7e42dc36fb5aa20bad84c1954784ffee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
