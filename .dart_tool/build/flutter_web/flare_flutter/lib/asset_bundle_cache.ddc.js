define(['dart_sdk', 'packages/flare_flutter/cache', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flare_flutter__cache, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cache = packages__flare_flutter__cache.cache;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const asset_bundle_cache = Object.create(dart.library);
  const CT = Object.create(null);
  const _is_AssetBundleCache_default = Symbol('_is_AssetBundleCache_default');
  const AssetBundleCache_bundle = dart.privateName(asset_bundle_cache, "AssetBundleCache.bundle");
  asset_bundle_cache.AssetBundleCache$ = dart.generic(T => {
    class AssetBundleCache extends cache.Cache$(T) {
      get bundle() {
        return this[bundle$];
      }
      set bundle(value) {
        super.bundle = value;
      }
    }
    (AssetBundleCache.new = function(bundle) {
      this[bundle$] = bundle;
      AssetBundleCache.__proto__.new.call(this);
      ;
    }).prototype = AssetBundleCache.prototype;
    dart.addTypeTests(AssetBundleCache);
    AssetBundleCache.prototype[_is_AssetBundleCache_default] = true;
    const bundle$ = AssetBundleCache_bundle;
    dart.setLibraryUri(AssetBundleCache, "package:flare_flutter/asset_bundle_cache.dart");
    dart.setFieldSignature(AssetBundleCache, () => ({
      __proto__: dart.getFields(AssetBundleCache.__proto__),
      bundle: dart.finalFieldType(asset_bundle.AssetBundle)
    }));
    return AssetBundleCache;
  });
  asset_bundle_cache.AssetBundleCache = asset_bundle_cache.AssetBundleCache$();
  dart.addTypeTests(asset_bundle_cache.AssetBundleCache, _is_AssetBundleCache_default);
  dart.trackLibraries("packages/flare_flutter/asset_bundle_cache", {
    "package:flare_flutter/asset_bundle_cache.dart": asset_bundle_cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["asset_bundle_cache.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAOoB;;;;;;;;MACI;AAAtB;;IAA6B","file":"asset_bundle_cache.ddc.js"}');
  // Exports:
  return {
    asset_bundle_cache: asset_bundle_cache
  };
});

//# sourceMappingURL=asset_bundle_cache.ddc.js.map
