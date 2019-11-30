define(['dart_sdk', 'packages/flare_flutter/asset_bundle_cache', 'packages/flare_flutter/cache', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flare_flutter/flare'], function(dart_sdk, packages__flare_flutter__asset_bundle_cache, packages__flare_flutter__cache, packages__flutter__src__foundation___bitfield_web, packages__flare_flutter__flare) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const asset_bundle_cache = packages__flare_flutter__asset_bundle_cache.asset_bundle_cache;
  const cache_asset = packages__flare_flutter__cache.cache_asset;
  const isolates = packages__flutter__src__foundation___bitfield_web.src__foundation__isolates;
  const flare = packages__flare_flutter__flare.flare;
  const flare_cache_asset = Object.create(dart.library);
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [core.bool])))();
  let AssetBundleCacheOfCacheAsset = () => (AssetBundleCacheOfCacheAsset = dart.constFn(asset_bundle_cache.AssetBundleCache$(cache_asset.CacheAsset)))();
  let FutureOfFlutterActor = () => (FutureOfFlutterActor = dart.constFn(async.Future$(flare.FlutterActor)))();
  let ByteDataToFutureOfFlutterActor = () => (ByteDataToFutureOfFlutterActor = dart.constFn(dart.fnType(FutureOfFlutterActor(), [typed_data.ByteData])))();
  let FlutterActorToNull = () => (FlutterActorToNull = dart.constFn(dart.fnType(core.Null, [flare.FlutterActor])))();
  let ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(flare.FlutterActor.loadFromByteData, ByteDataToFutureOfFlutterActor());
    }
  });
  const _actor = dart.privateName(flare_cache_asset, "_actor");
  let C0;
  flare_cache_asset.FlareCacheAsset = class FlareCacheAsset extends cache_asset.CacheAsset {
    get actor() {
      return this[_actor];
    }
    loadedActor(actor, filename) {
      actor.loadImages().then(core.Null, dart.fn(_ => {
        if (actor != null) {
          this[_actor] = actor;
          this.completeLoad();
        } else {
          core.print("Failed to load flare file from " + dart.str(filename) + ".");
        }
      }, boolToNull()));
    }
    load(cache, filename) {
      super.load(cache, filename);
      if (AssetBundleCacheOfCacheAsset().is(cache)) {
        cache.bundle.load(filename).then(core.Null, dart.fn(data => {
          if (dart.test(flare_cache_asset.FlareCacheAsset.useCompute)) {
            isolates.compute(typed_data.ByteData, flare.FlutterActor, C0 || CT.C0, data).then(core.Null, dart.fn(actor => {
              this.loadedActor(actor, filename);
            }, FlutterActorToNull()));
          } else {
            flare.FlutterActor.loadFromByteData(data).then(core.Null, dart.fn(actor => {
              this.loadedActor(actor, filename);
            }, FlutterActorToNull()));
          }
        }, ByteDataToNull()));
      }
    }
    get isAvailable() {
      return this[_actor] != null;
    }
  };
  (flare_cache_asset.FlareCacheAsset.new = function() {
    this[_actor] = null;
    flare_cache_asset.FlareCacheAsset.__proto__.new.call(this);
    ;
  }).prototype = flare_cache_asset.FlareCacheAsset.prototype;
  dart.addTypeTests(flare_cache_asset.FlareCacheAsset);
  dart.setMethodSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getMethods(flare_cache_asset.FlareCacheAsset.__proto__),
    loadedActor: dart.fnType(dart.void, [flare.FlutterActor, core.String])
  }));
  dart.setGetterSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getGetters(flare_cache_asset.FlareCacheAsset.__proto__),
    actor: flare.FlutterActor,
    isAvailable: core.bool
  }));
  dart.setLibraryUri(flare_cache_asset.FlareCacheAsset, "package:flare_flutter/flare_cache_asset.dart");
  dart.setFieldSignature(flare_cache_asset.FlareCacheAsset, () => ({
    __proto__: dart.getFields(flare_cache_asset.FlareCacheAsset.__proto__),
    [_actor]: dart.fieldType(flare.FlutterActor)
  }));
  dart.defineLazy(flare_cache_asset.FlareCacheAsset, {
    /*flare_cache_asset.FlareCacheAsset.useCompute*/get useCompute() {
      return true;
    },
    set useCompute(_) {}
  });
  dart.trackLibraries("packages/flare_flutter/flare_cache_asset", {
    "package:flare_flutter/flare_cache_asset.dart": flare_cache_asset
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_cache_asset.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;AAW4B;IAAM;gBAIF,OAAc;AAQxC,MAPF,AAAM,AAAa,KAAd,8BAAmB,QAAC;AACvB,YAAI,KAAK,IAAI;AACG,UAAd,eAAS,KAAK;AACA,UAAd;;AAEkD,UAAlD,WAAM,AAA2C,6CAAV,QAAQ;;;IAGrD;SAGgB,OAAc;AACD,MAArB,WAAK,KAAK,EAAE,QAAQ;AAC1B,UAAU,kCAAN,KAAK;AAYL,QAXF,AAAM,AAAO,AAAe,KAAvB,aAAa,QAAQ,kBAAO,QAAU;AACzC,wBAAI;AAIA,YAHF,AAAO,AACF,uEADkC,IAAI,kBACjC,QAAc;AACM,cAA5B,iBAAY,KAAK,EAAE,QAAQ;;;AAK3B,YAFW,AAAuB,oCAAN,IAAI,kBAAO,QAAc;AACzB,cAA5B,iBAAY,KAAK,EAAE,QAAQ;;;;;IAKrC;;AAGwB,YAAA,AAAO,iBAAG;IAAI;;;IApCzB;;;EAqCf;;;;;;;;;;;;;;;;;MAlCc,4CAAU;YAAG","file":"flare_cache_asset.ddc.js"}');
  // Exports:
  return {
    flare_cache_asset: flare_cache_asset
  };
});

//# sourceMappingURL=flare_cache_asset.ddc.js.map
