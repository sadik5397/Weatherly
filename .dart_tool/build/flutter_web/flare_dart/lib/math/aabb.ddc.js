define(['dart_sdk', 'packages/flare_dart/math/mat2d'], function(dart_sdk, packages__flare_dart__math__mat2d) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vec2d = packages__flare_dart__math__mat2d.math__vec2d;
  const aabb = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $toString = dartx.toString;
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  const CT = Object.create(null);
  const _buffer = dart.privateName(aabb, "_buffer");
  aabb.AABB = class AABB extends core.Object {
    get values() {
      return this[_buffer];
    }
    get minimum() {
      return new vec2d.Vec2D.fromValues(this[_buffer][$_get](0), this[_buffer][$_get](1));
    }
    get maximum() {
      return new vec2d.Vec2D.fromValues(this[_buffer][$_get](2), this[_buffer][$_get](3));
    }
    _get(idx) {
      return this[_buffer][$_get](idx);
    }
    _set(idx, v$) {
      let v = v$;
      this[_buffer][$_set](idx, v);
      return v$;
    }
    static copy(out, a) {
      out._set(0, a._get(0));
      out._set(1, a._get(1));
      out._set(2, a._get(2));
      out._set(3, a._get(3));
      return out;
    }
    static center(out, a) {
      out._set(0, (dart.notNull(a._get(0)) + dart.notNull(a._get(2))) * 0.5);
      out._set(1, (dart.notNull(a._get(1)) + dart.notNull(a._get(3))) * 0.5);
      return out;
    }
    static size(out, a) {
      out._set(0, dart.notNull(a._get(2)) - dart.notNull(a._get(0)));
      out._set(1, dart.notNull(a._get(3)) - dart.notNull(a._get(1)));
      return out;
    }
    static extents(out, a) {
      out._set(0, (dart.notNull(a._get(2)) - dart.notNull(a._get(0))) * 0.5);
      out._set(1, (dart.notNull(a._get(3)) - dart.notNull(a._get(1))) * 0.5);
      return out;
    }
    static perimeter(a) {
      let wx = dart.notNull(a._get(2)) - dart.notNull(a._get(0));
      let wy = dart.notNull(a._get(3)) - dart.notNull(a._get(1));
      return 2.0 * (wx + wy);
    }
    static combine(out, a, b) {
      out._set(0, math.min(core.double, a._get(0), b._get(0)));
      out._set(1, math.min(core.double, a._get(1), b._get(1)));
      out._set(2, math.max(core.double, a._get(2), b._get(2)));
      out._set(3, math.max(core.double, a._get(3), b._get(3)));
      return out;
    }
    static contains(a, b) {
      return dart.notNull(a._get(0)) <= dart.notNull(b._get(0)) && dart.notNull(a._get(1)) <= dart.notNull(b._get(1)) && dart.notNull(b._get(2)) <= dart.notNull(a._get(2)) && dart.notNull(b._get(3)) <= dart.notNull(a._get(3));
    }
    static isValid(a) {
      let dx = dart.notNull(a._get(2)) - dart.notNull(a._get(0));
      let dy = dart.notNull(a._get(3)) - dart.notNull(a._get(1));
      return dx >= 0 && dy >= 0 && dart.notNull(a._get(0)) <= 1.7976931348623157e+308 && dart.notNull(a._get(1)) <= 1.7976931348623157e+308 && dart.notNull(a._get(2)) <= 1.7976931348623157e+308 && dart.notNull(a._get(3)) <= 1.7976931348623157e+308;
    }
    static testOverlap(a, b) {
      let d1x = dart.notNull(b._get(0)) - dart.notNull(a._get(2));
      let d1y = dart.notNull(b._get(1)) - dart.notNull(a._get(3));
      let d2x = dart.notNull(a._get(0)) - dart.notNull(b._get(2));
      let d2y = dart.notNull(a._get(1)) - dart.notNull(b._get(3));
      if (d1x > 0.0 || d1y > 0.0) {
        return false;
      }
      if (d2x > 0.0 || d2y > 0.0) {
        return false;
      }
      return true;
    }
    toString() {
      return dart.toString(this[_buffer]);
    }
  };
  (aabb.AABB.new = function() {
    this[_buffer] = null;
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([0.0, 0.0, 0.0, 0.0]));
  }).prototype = aabb.AABB.prototype;
  (aabb.AABB.clone = function(a) {
    this[_buffer] = null;
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(a.values);
  }).prototype = aabb.AABB.prototype;
  (aabb.AABB.fromValues = function(a, b, c, d) {
    this[_buffer] = null;
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([a, b, c, d]));
  }).prototype = aabb.AABB.prototype;
  dart.addTypeTests(aabb.AABB);
  dart.setMethodSignature(aabb.AABB, () => ({
    __proto__: dart.getMethods(aabb.AABB.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setGetterSignature(aabb.AABB, () => ({
    __proto__: dart.getGetters(aabb.AABB.__proto__),
    values: typed_data.Float32List,
    minimum: vec2d.Vec2D,
    maximum: vec2d.Vec2D
  }));
  dart.setLibraryUri(aabb.AABB, "package:flare_dart/math/aabb.dart");
  dart.setFieldSignature(aabb.AABB, () => ({
    __proto__: dart.getFields(aabb.AABB.__proto__),
    [_buffer]: dart.fieldType(typed_data.Float32List)
  }));
  dart.defineExtensionMethods(aabb.AABB, ['toString']);
  dart.trackLibraries("packages/flare_dart/math/aabb", {
    "package:flare_dart/math/aabb.dart": aabb
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["aabb.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;AAQI,YAAO;IACT;;AAGE,YAAa,4BAAW,AAAO,qBAAC,IAAI,AAAO,qBAAC;IAC9C;;AAGE,YAAa,4BAAW,AAAO,qBAAC,IAAI,AAAO,qBAAC;IAC9C;SAcuB;AACrB,YAAO,AAAO,sBAAC,GAAG;IACpB;SAEsB;UAAY;AAChB,MAAhB,AAAO,qBAAC,GAAG,EAAI,CAAC;;IAClB;gBAEsB,KAAU;AACjB,MAAb,AAAG,GAAA,MAAC,GAAK,AAAC,CAAA,MAAC;AACE,MAAb,AAAG,GAAA,MAAC,GAAK,AAAC,CAAA,MAAC;AACE,MAAb,AAAG,GAAA,MAAC,GAAK,AAAC,CAAA,MAAC;AACE,MAAb,AAAG,GAAA,MAAC,GAAK,AAAC,CAAA,MAAC;AACX,YAAO,IAAG;IACZ;kBAE0B,KAAU;AACN,MAA5B,AAAG,GAAA,MAAC,GAAmB,CAAR,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC,OAAM;AACG,MAA5B,AAAG,GAAA,MAAC,GAAmB,CAAR,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC,OAAM;AACzB,YAAO,IAAG;IACZ;gBAEwB,KAAU;AACZ,MAApB,AAAG,GAAA,MAAC,GAAU,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AACE,MAApB,AAAG,GAAA,MAAC,GAAU,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AAClB,YAAO,IAAG;IACZ;mBAE2B,KAAU;AACP,MAA5B,AAAG,GAAA,MAAC,GAAmB,CAAR,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC,OAAM;AACG,MAA5B,AAAG,GAAA,MAAC,GAAmB,CAAR,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC,OAAM;AACzB,YAAO,IAAG;IACZ;qBAE6B;AACpB,eAAU,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AACd,eAAU,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AACrB,YAAO,AAAI,QAAG,AAAG,EAAD,GAAG,EAAE;IACvB;mBAEyB,KAAU,GAAQ;AACjB,MAAxB,AAAG,GAAA,MAAC,GAAK,sBAAI,AAAC,CAAA,MAAC,IAAI,AAAC,CAAA,MAAC;AACG,MAAxB,AAAG,GAAA,MAAC,GAAK,sBAAI,AAAC,CAAA,MAAC,IAAI,AAAC,CAAA,MAAC;AACG,MAAxB,AAAG,GAAA,MAAC,GAAK,sBAAI,AAAC,CAAA,MAAC,IAAI,AAAC,CAAA,MAAC;AACG,MAAxB,AAAG,GAAA,MAAC,GAAK,sBAAI,AAAC,CAAA,MAAC,IAAI,AAAC,CAAA,MAAC;AACrB,YAAO,IAAG;IACZ;oBAE0B,GAAQ;AAChC,YAAY,AAAwC,cAA7C,AAAC,CAAA,MAAC,oBAAM,AAAC,CAAA,MAAC,OAAW,aAAL,AAAC,CAAA,MAAC,oBAAM,AAAC,CAAA,MAAC,OAAW,aAAL,AAAC,CAAA,MAAC,oBAAM,AAAC,CAAA,MAAC,OAAW,aAAL,AAAC,CAAA,MAAC,oBAAM,AAAC,CAAA,MAAC;IACnE;mBAEyB;AAChB,eAAU,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AACd,eAAU,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AACrB,YAAO,AAAG,AAImB,GAJpB,IAAI,KACT,AAAG,EAAD,IAAI,KACD,aAAL,AAAC,CAAA,MAAC,kCACG,aAAL,AAAC,CAAA,MAAC,kCACG,aAAL,AAAC,CAAA,MAAC,kCACG,aAAL,AAAC,CAAA,MAAC;IACR;uBAE6B,GAAQ;AAC5B,gBAAW,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AACf,gBAAW,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AAEf,gBAAW,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AACf,gBAAW,aAAL,AAAC,CAAA,MAAC,mBAAK,AAAC,CAAA,MAAC;AAEtB,UAAI,AAAI,GAAD,GAAG,OAAO,AAAI,GAAD,GAAG;AACrB,cAAO;;AAGT,UAAI,AAAI,GAAD,GAAG,OAAO,AAAI,GAAD,GAAG;AACrB,cAAO;;AAGT,YAAO;IACT;;AAIE,YAAe,eAAR;IACT;;;IA9GY;AAe0C,IAApD,gBAAsB,8CAAS,sBAAC,KAAK,KAAK,KAAK;EACjD;8BAEgB;IAlBJ;AAmB8B,IAAxC,gBAAsB,8CAAS,AAAE,CAAD;EAClC;mCAEuB,GAAU,GAAU,GAAU;IAtBzC;AAuBkC,IAA5C,gBAAsB,8CAAS,sBAAC,CAAC,EAAE,CAAC,EAAE,CAAC,EAAE,CAAC;EAC5C","file":"aabb.ddc.js"}');
  // Exports:
  return {
    math__aabb: aabb
  };
});

//# sourceMappingURL=aabb.ddc.js.map
