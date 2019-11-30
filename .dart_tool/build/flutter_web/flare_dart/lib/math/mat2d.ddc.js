define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _interceptors = dart_sdk._interceptors;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const transform_components = Object.create(dart.library);
  const vec2d = Object.create(dart.library);
  const mat2d = Object.create(dart.library);
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $toString = dartx.toString;
  const $sign = dartx.sign;
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  const CT = Object.create(null);
  const _buffer = dart.privateName(transform_components, "_buffer");
  transform_components.TransformComponents = class TransformComponents extends core.Object {
    get values() {
      return this[_buffer];
    }
    _get(index) {
      return this[_buffer][$_get](index);
    }
    _set(index, value$) {
      let value = value$;
      this[_buffer][$_set](index, value);
      return value$;
    }
    get x() {
      return this[_buffer][$_get](0);
    }
    set x(value) {
      this[_buffer][$_set](0, value);
    }
    get y() {
      return this[_buffer][$_get](1);
    }
    set y(value) {
      this[_buffer][$_set](1, value);
    }
    get scaleX() {
      return this[_buffer][$_get](2);
    }
    set scaleX(value) {
      this[_buffer][$_set](2, value);
    }
    get scaleY() {
      return this[_buffer][$_get](3);
    }
    set scaleY(value) {
      this[_buffer][$_set](3, value);
    }
    get rotation() {
      return this[_buffer][$_get](4);
    }
    set rotation(value) {
      this[_buffer][$_set](4, value);
    }
    get skew() {
      return this[_buffer][$_get](5);
    }
    set skew(value) {
      this[_buffer][$_set](5, value);
    }
    get translation() {
      return new vec2d.Vec2D.fromValues(this[_buffer][$_get](0), this[_buffer][$_get](1));
    }
    get scale() {
      return new vec2d.Vec2D.fromValues(this[_buffer][$_get](2), this[_buffer][$_get](3));
    }
  };
  (transform_components.TransformComponents.new = function() {
    this[_buffer] = null;
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([1.0, 0.0, 0.0, 1.0, 0.0, 0.0]));
  }).prototype = transform_components.TransformComponents.prototype;
  (transform_components.TransformComponents.clone = function(copy) {
    this[_buffer] = null;
    this[_buffer] = _native_typed_data.NativeFloat32List.fromList(copy.values);
  }).prototype = transform_components.TransformComponents.prototype;
  dart.addTypeTests(transform_components.TransformComponents);
  dart.setMethodSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getMethods(transform_components.TransformComponents.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setGetterSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getGetters(transform_components.TransformComponents.__proto__),
    values: typed_data.Float32List,
    x: core.double,
    y: core.double,
    scaleX: core.double,
    scaleY: core.double,
    rotation: core.double,
    skew: core.double,
    translation: vec2d.Vec2D,
    scale: vec2d.Vec2D
  }));
  dart.setSetterSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getSetters(transform_components.TransformComponents.__proto__),
    x: core.double,
    y: core.double,
    scaleX: core.double,
    scaleY: core.double,
    rotation: core.double,
    skew: core.double
  }));
  dart.setLibraryUri(transform_components.TransformComponents, "package:flare_dart/math/transform_components.dart");
  dart.setFieldSignature(transform_components.TransformComponents, () => ({
    __proto__: dart.getFields(transform_components.TransformComponents.__proto__),
    [_buffer]: dart.fieldType(typed_data.Float32List)
  }));
  const _buffer$ = dart.privateName(vec2d, "_buffer");
  vec2d.Vec2D = class Vec2D extends core.Object {
    get values() {
      return this[_buffer$];
    }
    _get(index) {
      return this[_buffer$][$_get](index);
    }
    _set(index, value$) {
      let value = value$;
      this[_buffer$][$_set](index, value);
      return value$;
    }
    static copy(o, a) {
      o._set(0, a._get(0));
      o._set(1, a._get(1));
    }
    static copyFromList(o, a) {
      o._set(0, a[$_get](0));
      o._set(1, a[$_get](1));
    }
    static transformMat2D(o, a, m) {
      let x = a._get(0);
      let y = a._get(1);
      o._set(0, dart.notNull(m._get(0)) * dart.notNull(x) + dart.notNull(m._get(2)) * dart.notNull(y) + dart.notNull(m._get(4)));
      o._set(1, dart.notNull(m._get(1)) * dart.notNull(x) + dart.notNull(m._get(3)) * dart.notNull(y) + dart.notNull(m._get(5)));
      return o;
    }
    static transformMat2(o, a, m) {
      let x = a._get(0);
      let y = a._get(1);
      o._set(0, dart.notNull(m._get(0)) * dart.notNull(x) + dart.notNull(m._get(2)) * dart.notNull(y));
      o._set(1, dart.notNull(m._get(1)) * dart.notNull(x) + dart.notNull(m._get(3)) * dart.notNull(y));
      return o;
    }
    static subtract(o, a, b) {
      o._set(0, dart.notNull(a._get(0)) - dart.notNull(b._get(0)));
      o._set(1, dart.notNull(a._get(1)) - dart.notNull(b._get(1)));
      return o;
    }
    static add(o, a, b) {
      o._set(0, dart.notNull(a._get(0)) + dart.notNull(b._get(0)));
      o._set(1, dart.notNull(a._get(1)) + dart.notNull(b._get(1)));
      return o;
    }
    static scale(o, a, scale) {
      o._set(0, dart.notNull(a._get(0)) * dart.notNull(scale));
      o._set(1, dart.notNull(a._get(1)) * dart.notNull(scale));
      return o;
    }
    static lerp(o, a, b, f) {
      let ax = a._get(0);
      let ay = a._get(1);
      o._set(0, dart.notNull(ax) + dart.notNull(f) * (dart.notNull(b._get(0)) - dart.notNull(ax)));
      o._set(1, dart.notNull(ay) + dart.notNull(f) * (dart.notNull(b._get(1)) - dart.notNull(ay)));
      return o;
    }
    static length(a) {
      let x = a._get(0);
      let y = a._get(1);
      return math.sqrt(dart.notNull(x) * dart.notNull(x) + dart.notNull(y) * dart.notNull(y));
    }
    static squaredLength(a) {
      let x = a._get(0);
      let y = a._get(1);
      return dart.notNull(x) * dart.notNull(x) + dart.notNull(y) * dart.notNull(y);
    }
    static distance(a, b) {
      let x = dart.notNull(b._get(0)) - dart.notNull(a._get(0));
      let y = dart.notNull(b._get(1)) - dart.notNull(a._get(1));
      return math.sqrt(x * x + y * y);
    }
    static squaredDistance(a, b) {
      let x = dart.notNull(b._get(0)) - dart.notNull(a._get(0));
      let y = dart.notNull(b._get(1)) - dart.notNull(a._get(1));
      return x * x + y * y;
    }
    static negate(result, a) {
      result._set(0, -1 * dart.notNull(a._get(0)));
      result._set(1, -1 * dart.notNull(a._get(1)));
      return result;
    }
    static normalize(result, a) {
      let x = a._get(0);
      let y = a._get(1);
      let len = dart.notNull(x) * dart.notNull(x) + dart.notNull(y) * dart.notNull(y);
      if (len > 0.0) {
        len = 1.0 / math.sqrt(len);
        result._set(0, dart.notNull(a._get(0)) * len);
        result._set(1, dart.notNull(a._get(1)) * len);
      }
    }
    static dot(a, b) {
      return dart.notNull(a._get(0)) * dart.notNull(b._get(0)) + dart.notNull(a._get(1)) * dart.notNull(b._get(1));
    }
    static scaleAndAdd(result, a, b, scale) {
      result._set(0, dart.notNull(a._get(0)) + dart.notNull(b._get(0)) * dart.notNull(scale));
      result._set(1, dart.notNull(a._get(1)) + dart.notNull(b._get(1)) * dart.notNull(scale));
      return result;
    }
    toString() {
      let v = dart.toString(this[_buffer$][$_get](0)) + ", ";
      return v + dart.toString(this[_buffer$][$_get](1));
    }
  };
  (vec2d.Vec2D.new = function() {
    this[_buffer$] = null;
    this[_buffer$] = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([0.0, 0.0]));
  }).prototype = vec2d.Vec2D.prototype;
  (vec2d.Vec2D.clone = function(copy) {
    this[_buffer$] = null;
    this[_buffer$] = _native_typed_data.NativeFloat32List.fromList(copy[_buffer$]);
  }).prototype = vec2d.Vec2D.prototype;
  (vec2d.Vec2D.fromValues = function(x, y) {
    this[_buffer$] = null;
    this[_buffer$] = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([x, y]));
  }).prototype = vec2d.Vec2D.prototype;
  dart.addTypeTests(vec2d.Vec2D);
  dart.setMethodSignature(vec2d.Vec2D, () => ({
    __proto__: dart.getMethods(vec2d.Vec2D.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setGetterSignature(vec2d.Vec2D, () => ({
    __proto__: dart.getGetters(vec2d.Vec2D.__proto__),
    values: typed_data.Float32List
  }));
  dart.setLibraryUri(vec2d.Vec2D, "package:flare_dart/math/vec2d.dart");
  dart.setFieldSignature(vec2d.Vec2D, () => ({
    __proto__: dart.getFields(vec2d.Vec2D.__proto__),
    [_buffer$]: dart.fieldType(typed_data.Float32List)
  }));
  dart.defineExtensionMethods(vec2d.Vec2D, ['toString']);
  const _buffer$0 = dart.privateName(mat2d, "_buffer");
  mat2d.Mat2D = class Mat2D extends core.Object {
    get values() {
      return this[_buffer$0];
    }
    get mat4() {
      return _native_typed_data.NativeFloat64List.fromList(JSArrayOfdouble().of([this[_buffer$0][$_get](0), this[_buffer$0][$_get](1), 0.0, 0.0, this[_buffer$0][$_get](2), this[_buffer$0][$_get](3), 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, this[_buffer$0][$_get](4), this[_buffer$0][$_get](5), 0.0, 1.0]));
    }
    _get(index) {
      return this[_buffer$0][$_get](index);
    }
    _set(index, value$) {
      let value = value$;
      this[_buffer$0][$_set](index, value);
      return value$;
    }
    static fromRotation(o, rad) {
      let s = math.sin(rad);
      let c = math.cos(rad);
      o._set(0, c);
      o._set(1, s);
      o._set(2, -s);
      o._set(3, c);
      o._set(4, 0.0);
      o._set(5, 0.0);
    }
    static copy(o, f) {
      o._set(0, f._get(0));
      o._set(1, f._get(1));
      o._set(2, f._get(2));
      o._set(3, f._get(3));
      o._set(4, f._get(4));
      o._set(5, f._get(5));
    }
    static copyFromList(o, f) {
      o._set(0, f[$_get](0));
      o._set(1, f[$_get](1));
      o._set(2, f[$_get](2));
      o._set(3, f[$_get](3));
      o._set(4, f[$_get](4));
      o._set(5, f[$_get](5));
    }
    static scale(o, a, v) {
      let a0 = a._get(0);
      let a1 = a._get(1);
      let a2 = a._get(2);
      let a3 = a._get(3);
      let a4 = a._get(4);
      let a5 = a._get(5);
      let v0 = v._get(0);
      let v1 = v._get(1);
      o._set(0, dart.notNull(a0) * dart.notNull(v0));
      o._set(1, dart.notNull(a1) * dart.notNull(v0));
      o._set(2, dart.notNull(a2) * dart.notNull(v1));
      o._set(3, dart.notNull(a3) * dart.notNull(v1));
      o._set(4, a4);
      o._set(5, a5);
    }
    static multiply(o, a, b) {
      let a0 = a._get(0);
      let a1 = a._get(1);
      let a2 = a._get(2);
      let a3 = a._get(3);
      let a4 = a._get(4);
      let a5 = a._get(5);
      let b0 = b._get(0);
      let b1 = b._get(1);
      let b2 = b._get(2);
      let b3 = b._get(3);
      let b4 = b._get(4);
      let b5 = b._get(5);
      o._set(0, dart.notNull(a0) * dart.notNull(b0) + dart.notNull(a2) * dart.notNull(b1));
      o._set(1, dart.notNull(a1) * dart.notNull(b0) + dart.notNull(a3) * dart.notNull(b1));
      o._set(2, dart.notNull(a0) * dart.notNull(b2) + dart.notNull(a2) * dart.notNull(b3));
      o._set(3, dart.notNull(a1) * dart.notNull(b2) + dart.notNull(a3) * dart.notNull(b3));
      o._set(4, dart.notNull(a0) * dart.notNull(b4) + dart.notNull(a2) * dart.notNull(b5) + dart.notNull(a4));
      o._set(5, dart.notNull(a1) * dart.notNull(b4) + dart.notNull(a3) * dart.notNull(b5) + dart.notNull(a5));
    }
    static cCopy(o, a) {
      o._set(0, a._get(0));
      o._set(1, a._get(1));
      o._set(2, a._get(2));
      o._set(3, a._get(3));
      o._set(4, a._get(4));
      o._set(5, a._get(5));
    }
    static invert(o, a) {
      let aa = a._get(0);
      let ab = a._get(1);
      let ac = a._get(2);
      let ad = a._get(3);
      let atx = a._get(4);
      let aty = a._get(5);
      let det = dart.notNull(aa) * dart.notNull(ad) - dart.notNull(ab) * dart.notNull(ac);
      if (det === 0.0) {
        return false;
      }
      det = 1.0 / det;
      o._set(0, dart.notNull(ad) * det);
      o._set(1, -dart.notNull(ab) * det);
      o._set(2, -dart.notNull(ac) * det);
      o._set(3, dart.notNull(aa) * det);
      o._set(4, (dart.notNull(ac) * dart.notNull(aty) - dart.notNull(ad) * dart.notNull(atx)) * det);
      o._set(5, (dart.notNull(ab) * dart.notNull(atx) - dart.notNull(aa) * dart.notNull(aty)) * det);
      return true;
    }
    static getScale(m, s) {
      let x = m._get(0);
      let y = m._get(1);
      s._set(0, x[$sign] * math.sqrt(dart.notNull(x) * dart.notNull(x) + dart.notNull(y) * dart.notNull(y)));
      x = m._get(2);
      y = m._get(3);
      s._set(1, y[$sign] * math.sqrt(dart.notNull(x) * dart.notNull(x) + dart.notNull(y) * dart.notNull(y)));
    }
    static identity(mat) {
      mat._set(0, 1.0);
      mat._set(1, 0.0);
      mat._set(2, 0.0);
      mat._set(3, 1.0);
      mat._set(4, 0.0);
      mat._set(5, 0.0);
    }
    static decompose(m, result) {
      let m0 = m._get(0);
      let m1 = m._get(1);
      let m2 = m._get(2);
      let m3 = m._get(3);
      let rotation = math.atan2(m1, m0);
      let denom = dart.notNull(m0) * dart.notNull(m0) + dart.notNull(m1) * dart.notNull(m1);
      let scaleX = math.sqrt(denom);
      let scaleY = scaleX === 0 ? 0.0 : (dart.notNull(m0) * dart.notNull(m3) - dart.notNull(m2) * dart.notNull(m1)) / scaleX;
      let skewX = math.atan2(dart.notNull(m0) * dart.notNull(m2) + dart.notNull(m1) * dart.notNull(m3), denom);
      result._set(0, m._get(4));
      result._set(1, m._get(5));
      result._set(2, scaleX);
      result._set(3, scaleY);
      result._set(4, rotation);
      result._set(5, skewX);
    }
    static compose(m, result) {
      let r = result._get(4);
      if (r !== 0.0) {
        mat2d.Mat2D.fromRotation(m, r);
      } else {
        mat2d.Mat2D.identity(m);
      }
      m._set(4, result._get(0));
      m._set(5, result._get(1));
      mat2d.Mat2D.scale(m, m, result.scale);
      let sk = result._get(5);
      if (sk !== 0.0) {
        m._set(2, dart.notNull(m._get(0)) * dart.notNull(sk) + dart.notNull(m._get(2)));
        m._set(3, dart.notNull(m._get(1)) * dart.notNull(sk) + dart.notNull(m._get(3)));
      }
    }
    static areEqual(a, b) {
      return a._get(0) == b._get(0) && a._get(1) == b._get(1) && a._get(2) == b._get(2) && a._get(3) == b._get(3) && a._get(4) == b._get(4) && a._get(5) == b._get(5);
    }
    toString() {
      return dart.toString(this[_buffer$0]);
    }
  };
  (mat2d.Mat2D.new = function() {
    this[_buffer$0] = null;
    this[_buffer$0] = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([1.0, 0.0, 0.0, 1.0, 0.0, 0.0]));
  }).prototype = mat2d.Mat2D.prototype;
  (mat2d.Mat2D.clone = function(copy) {
    this[_buffer$0] = null;
    this[_buffer$0] = _native_typed_data.NativeFloat32List.fromList(copy.values);
  }).prototype = mat2d.Mat2D.prototype;
  dart.addTypeTests(mat2d.Mat2D);
  dart.setMethodSignature(mat2d.Mat2D, () => ({
    __proto__: dart.getMethods(mat2d.Mat2D.__proto__),
    _get: dart.fnType(core.double, [core.int]),
    _set: dart.fnType(dart.void, [core.int, core.double])
  }));
  dart.setGetterSignature(mat2d.Mat2D, () => ({
    __proto__: dart.getGetters(mat2d.Mat2D.__proto__),
    values: typed_data.Float32List,
    mat4: typed_data.Float64List
  }));
  dart.setLibraryUri(mat2d.Mat2D, "package:flare_dart/math/mat2d.dart");
  dart.setFieldSignature(mat2d.Mat2D, () => ({
    __proto__: dart.getFields(mat2d.Mat2D.__proto__),
    [_buffer$0]: dart.fieldType(typed_data.Float32List)
  }));
  dart.defineExtensionMethods(mat2d.Mat2D, ['toString']);
  dart.trackLibraries("packages/flare_dart/math/mat2d", {
    "package:flare_dart/math/transform_components.dart": transform_components,
    "package:flare_dart/math/vec2d.dart": vec2d,
    "package:flare_dart/math/mat2d.dart": mat2d
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transform_components.dart","vec2d.dart","mat2d.dart"],"names":[],"mappings":"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","file":"mat2d.ddc.js"}');
  // Exports:
  return {
    math__transform_components: transform_components,
    math__vec2d: vec2d,
    math__mat2d: mat2d
  };
});

//# sourceMappingURL=mat2d.ddc.js.map
