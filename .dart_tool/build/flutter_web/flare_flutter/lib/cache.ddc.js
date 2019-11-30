define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cache_asset = Object.create(dart.library);
  const cache = Object.create(dart.library);
  const $add = dartx.add;
  const $removeWhere = dartx.removeWhere;
  const $_get = dartx._get;
  const $lastIndexOf = dartx.lastIndexOf;
  const $_set = dartx._set;
  let CompleterOfCacheAsset = () => (CompleterOfCacheAsset = dart.constFn(async.Completer$(cache_asset.CacheAsset)))();
  let JSArrayOfCompleterOfCacheAsset = () => (JSArrayOfCompleterOfCacheAsset = dart.constFn(_interceptors.JSArray$(CompleterOfCacheAsset())))();
  const CT = Object.create(null);
  const _cache = dart.privateName(cache_asset, "_cache");
  const _refCount = dart.privateName(cache_asset, "_refCount");
  const _callbacks = dart.privateName(cache_asset, "_callbacks");
  cache_asset.CacheAsset = class CacheAsset extends core.Object {
    ref() {
      this[_refCount] = dart.notNull(this[_refCount]) + 1;
      if (this[_refCount] === 1) {
        this[_cache].hold(this);
      }
    }
    deref() {
      this[_refCount] = dart.notNull(this[_refCount]) - 1;
      if (this[_refCount] === 0) {
        this[_cache].drop(this);
      }
    }
    onLoaded() {
      return async.async(cache_asset.CacheAsset, (function* onLoaded() {
        if (dart.test(this.isAvailable)) {
          return this;
        }
        this[_callbacks] == null ? this[_callbacks] = JSArrayOfCompleterOfCacheAsset().of([]) : null;
        let completer = CompleterOfCacheAsset().new();
        this[_callbacks][$add](completer);
        return completer.future;
      }).bind(this));
    }
    load(cache, filename) {
      this[_cache] = cache;
    }
    completeLoad() {
      if (this[_callbacks] != null) {
        for (let callback of this[_callbacks]) {
          callback.complete(this);
        }
        this[_callbacks] = null;
      }
    }
  };
  (cache_asset.CacheAsset.new = function() {
    this[_cache] = null;
    this[_refCount] = 0;
    this[_callbacks] = null;
    ;
  }).prototype = cache_asset.CacheAsset.prototype;
  dart.addTypeTests(cache_asset.CacheAsset);
  dart.setMethodSignature(cache_asset.CacheAsset, () => ({
    __proto__: dart.getMethods(cache_asset.CacheAsset.__proto__),
    ref: dart.fnType(dart.void, []),
    deref: dart.fnType(dart.void, []),
    onLoaded: dart.fnType(async.Future$(cache_asset.CacheAsset), []),
    load: dart.fnType(dart.void, [cache.Cache$(cache_asset.CacheAsset), core.String]),
    completeLoad: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(cache_asset.CacheAsset, "package:flare_flutter/cache_asset.dart");
  dart.setFieldSignature(cache_asset.CacheAsset, () => ({
    __proto__: dart.getFields(cache_asset.CacheAsset.__proto__),
    [_cache]: dart.fieldType(cache.Cache$(cache_asset.CacheAsset)),
    [_refCount]: dart.fieldType(core.int),
    [_callbacks]: dart.fieldType(core.List$(async.Completer$(cache_asset.CacheAsset)))
  }));
  const _assets = dart.privateName(cache, "_assets");
  const _toPrune = dart.privateName(cache, "_toPrune");
  const _pruneTimer = dart.privateName(cache, "_pruneTimer");
  const _prune = dart.privateName(cache, "_prune");
  const _is_Cache_default = Symbol('_is_Cache_default');
  cache.Cache$ = dart.generic(T => {
    let IdentityMapOfString$T = () => (IdentityMapOfString$T = dart.constFn(_js_helper.IdentityMap$(core.String, T)))();
    let _HashSetOfT = () => (_HashSetOfT = dart.constFn(collection._HashSet$(T)))();
    let StringAndTTobool = () => (StringAndTTobool = dart.constFn(dart.fnType(core.bool, [core.String, T])))();
    class Cache extends core.Object {
      get isPruningEnabled() {
        return true;
      }
      [_prune]() {
        for (let asset of this[_toPrune]) {
          this[_assets][$removeWhere](dart.fn((filename, cached) => dart.equals(cached, asset), StringAndTTobool()));
        }
        this[_toPrune].clear();
        this[_pruneTimer] = null;
      }
      drop(asset) {
        T._check(asset);
        this[_toPrune].add(asset);
        if (this[_pruneTimer] != null) {
          this[_pruneTimer].cancel();
        }
        if (dart.test(this.isPruningEnabled)) {
          this[_pruneTimer] = async.Timer.new(this.pruneAfter, dart.bind(this, _prune));
        }
      }
      hold(asset) {
        T._check(asset);
        this[_toPrune].remove(asset);
      }
      getAsset(filename) {
        return async.async(T, (function* getAsset() {
          let asset = this[_assets][$_get](filename);
          if (asset != null) {
            if (dart.test(asset.isAvailable)) {
              return asset;
            } else {
              return T.as(yield asset.onLoaded());
            }
          }
          let lastDot = filename[$lastIndexOf](".");
          if (lastDot !== -1) {
            asset = this.makeAsset();
            if (asset != null) {
              this[_assets][$_set](filename, asset);
              asset.load(this, filename);
              if (dart.test(asset.isAvailable)) {
                return asset;
              } else {
                return T.as(yield asset.onLoaded());
              }
            }
          }
          return asset;
        }).bind(this));
      }
      getWarmAsset(filename) {
        let t0, t0$;
        let asset = this[_assets][$_get](filename);
        return dart.test((t0$ = (t0 = asset, t0 == null ? null : t0.isAvailable), t0$ == null ? false : t0$)) ? asset : null;
      }
    }
    (Cache.new = function() {
      this[_assets] = new (IdentityMapOfString$T()).new();
      this[_toPrune] = new (_HashSetOfT()).new();
      this[_pruneTimer] = null;
      ;
    }).prototype = Cache.prototype;
    dart.addTypeTests(Cache);
    Cache.prototype[_is_Cache_default] = true;
    dart.setMethodSignature(Cache, () => ({
      __proto__: dart.getMethods(Cache.__proto__),
      [_prune]: dart.fnType(dart.void, []),
      drop: dart.fnType(dart.void, [core.Object]),
      hold: dart.fnType(dart.void, [core.Object]),
      getAsset: dart.fnType(async.Future$(T), [core.String]),
      getWarmAsset: dart.fnType(T, [core.String])
    }));
    dart.setGetterSignature(Cache, () => ({
      __proto__: dart.getGetters(Cache.__proto__),
      isPruningEnabled: core.bool
    }));
    dart.setLibraryUri(Cache, "package:flare_flutter/cache.dart");
    dart.setFieldSignature(Cache, () => ({
      __proto__: dart.getFields(Cache.__proto__),
      [_assets]: dart.finalFieldType(core.Map$(core.String, T)),
      [_toPrune]: dart.finalFieldType(core.Set$(T)),
      [_pruneTimer]: dart.fieldType(async.Timer)
    }));
    return Cache;
  });
  cache.Cache = cache.Cache$();
  dart.addTypeTests(cache.Cache, _is_Cache_default);
  dart.trackLibraries("packages/flare_flutter/cache", {
    "package:flare_flutter/cache_asset.dart": cache_asset,
    "package:flare_flutter/cache.dart": cache
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cache_asset.dart","cache.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAUe,MAAX,kBAAS,aAAT,mBAAS;AACT,UAAI,AAAU,oBAAG;AACE,QAAjB,AAAO,kBAAK;;IAEhB;;AAGa,MAAX,kBAAS,aAAT,mBAAS;AACT,UAAI,AAAU,oBAAG;AACE,QAAjB,AAAO,kBAAK;;IAEhB;;AAG2B;AACzB,sBAAI;AACF,gBAAO;;AAEQ,QAAjB,AAAW,oBAAA,OAAX,mBAAe,0CAAJ;AACW,wBAAY;AACT,QAAzB,AAAW,uBAAI,SAAS;AACxB,cAAO,AAAU,UAAD;MAClB;;SAEgB,OAAc;AACd,MAAd,eAAS,KAAK;IAChB;;AAGE,UAAI,oBAAc;AAChB,iBAAiC,WAAY;AACpB,UAAvB,AAAS,QAAD,UAAU;;AAEH,QAAjB,mBAAa;;IAEjB;;;IAxCM;IACF,kBAAY;IAiBY;;EAuB9B;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACjC+B;MAAI;;AAI/B,iBAAa,QAAS;AAGlB,UAFF,AAAQ,4BAAY,SAAQ,UAAY,WACxB,YAAP,MAAM,EAAI,KAAK;;AAGV,QAAhB,AAAS;AACS,QAAlB,oBAAc;MAChB;WAEY;;AACS,QAAnB,AAAS,mBAAI,KAAK;AAClB,YAAI,qBAAe;AACG,UAApB,AAAY;;AAEd,sBAAI;AACqC,UAAvC,oBAAc,gBAAM,2BAAY;;MAEpC;WAEY;;AACY,QAAtB,AAAS,sBAAO,KAAK;MACvB;eAG0B;AAAR;AACd,sBAAQ,AAAO,qBAAC,QAAQ;AAC1B,cAAI,KAAK,IAAI;AACX,0BAAI,AAAM,KAAD;AACP,oBAAO,MAAK;;AAEZ,oBAA8B,MAAvB,MAAM,AAAM,KAAD;;;AAGlB,wBAAU,AAAS,QAAD,eAAa;AACnC,cAAI,OAAO,KAAI,CAAC;AACK,YAAnB,QAAQ;AACR,gBAAI,KAAK,IAAI;AACc,cAAzB,AAAO,qBAAC,QAAQ,EAAI,KAAK;AACC,cAA1B,AAAM,KAAD,MAAM,MAAM,QAAQ;AACzB,4BAAI,AAAM,KAAD;AACP,sBAAO,MAAK;;AAEZ,sBAA8B,MAAvB,MAAM,AAAM,KAAD;;;;AAIxB,gBAAO,MAAK;QACd;;mBAGsB;;AAClB,oBAAQ,AAAO,qBAAC,QAAQ;AAC1B,0BAA2B,YAAnB,KAAK,eAAL,OAAO,wBAAP,OAAsB,gBAAS,KAAK,GAAG;MACjD;;;MA/DqB,gBAAU;MAClB,iBAAW;MAClB;;IA8DR","file":"cache.ddc.js"}');
  // Exports:
  return {
    cache_asset: cache_asset,
    cache: cache
  };
});

//# sourceMappingURL=cache.ddc.js.map
