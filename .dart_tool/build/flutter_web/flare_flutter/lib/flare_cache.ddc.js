define(['dart_sdk', 'packages/flare_flutter/flare_cache_asset', 'packages/flare_flutter/asset_bundle_cache', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flare_flutter__flare_cache_asset, packages__flare_flutter__asset_bundle_cache, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flare_cache_asset = packages__flare_flutter__flare_cache_asset.flare_cache_asset;
  const asset_bundle_cache = packages__flare_flutter__asset_bundle_cache.asset_bundle_cache;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const flare_cache = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  let LinkedMapOfAssetBundle$FlareCache = () => (LinkedMapOfAssetBundle$FlareCache = dart.constFn(_js_helper.LinkedMap$(asset_bundle.AssetBundle, flare_cache.FlareCache)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 2000000
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  flare_cache.FlareCache = class FlareCache extends asset_bundle_cache.AssetBundleCache$(flare_cache_asset.FlareCacheAsset) {
    get isPruningEnabled() {
      return flare_cache.FlareCache.doesPrune;
    }
    get pruneAfter() {
      return flare_cache.FlareCache.pruneDelay;
    }
    makeAsset() {
      return new flare_cache_asset.FlareCacheAsset.new();
    }
  };
  (flare_cache.FlareCache.new = function(bundle) {
    flare_cache.FlareCache.__proto__.new.call(this, bundle);
    ;
  }).prototype = flare_cache.FlareCache.prototype;
  dart.addTypeTests(flare_cache.FlareCache);
  dart.setMethodSignature(flare_cache.FlareCache, () => ({
    __proto__: dart.getMethods(flare_cache.FlareCache.__proto__),
    makeAsset: dart.fnType(flare_cache_asset.FlareCacheAsset, [])
  }));
  dart.setGetterSignature(flare_cache.FlareCache, () => ({
    __proto__: dart.getGetters(flare_cache.FlareCache.__proto__),
    pruneAfter: core.Duration
  }));
  dart.setLibraryUri(flare_cache.FlareCache, "package:flare_flutter/flare_cache.dart");
  dart.defineLazy(flare_cache.FlareCache, {
    /*flare_cache.FlareCache.doesPrune*/get doesPrune() {
      return true;
    },
    set doesPrune(_) {},
    /*flare_cache.FlareCache.pruneDelay*/get pruneDelay() {
      return C0 || CT.C0;
    },
    set pruneDelay(_) {}
  });
  flare_cache.cachedActor = function cachedActor(bundle, filename) {
    return async.async(flare_cache_asset.FlareCacheAsset, function* cachedActor() {
      let cache = flare_cache._cache[$_get](bundle);
      if (cache == null) {
        flare_cache._cache[$_set](bundle, cache = new flare_cache.FlareCache.new(bundle));
      }
      return cache.getAsset(filename);
    });
  };
  flare_cache.getWarmActor = function getWarmActor(bundle, filename) {
    let t0;
    t0 = flare_cache._cache[$_get](bundle);
    return t0 == null ? null : t0.getWarmAsset(filename);
  };
  dart.defineLazy(flare_cache, {
    /*flare_cache._cache*/get _cache() {
      return new (LinkedMapOfAssetBundle$FlareCache()).new();
    }
  });
  dart.trackLibraries("packages/flare_flutter/flare_cache", {
    "package:flare_flutter/flare_cache.dart": flare_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_cache.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAc+B;IAAS;;AAGX;IAAU;;AAInC,YAAO;IACT;;yCAduB;AAAU,oDAAM,MAAM;;EAAC;;;;;;;;;;;;MAElC,gCAAS;YAAG;;;MACR,iCAAU;;;;;iDAkBoB,QAAe;AAA5B;AACtB,kBAAQ,AAAM,0BAAC,MAAM;AAChC,UAAI,AAAM,KAAD,IAAI;AACgC,QAA3C,AAAM,0BAAC,MAAM,EAAI,QAAQ,+BAAW,MAAM;;AAE5C,YAAO,AAAM,MAAD,UAAU,QAAQ;IAChC;;mDAGyC,QAAe;;AACtD,SAAO,AAAM,0BAAC,MAAM;wBAAP,OAAU,gBAAa,QAAQ;EAC9C;;MAdmC,kBAAM;YAAG","file":"flare_cache.ddc.js"}');
  // Exports:
  return {
    flare_cache: flare_cache
  };
});

//# sourceMappingURL=flare_cache.ddc.js.map
