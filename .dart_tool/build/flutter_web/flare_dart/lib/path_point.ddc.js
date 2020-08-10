define(['dart_sdk', 'packages/flare_dart/math/mat2d', 'packages/flare_dart/binary_reader'], function(dart_sdk, packages__flare_dart__math__mat2d, packages__flare_dart__binary_reader) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const vec2d = packages__flare_dart__math__mat2d.math__vec2d;
  const mat2d = packages__flare_dart__math__mat2d.math__mat2d;
  const stream_reader = packages__flare_dart__binary_reader.stream_reader;
  const path_point = Object.create(dart.library);
  const $_get = dartx._get;
  const $floor = dartx.floor;
  let HashMapOfint$PointType = () => (HashMapOfint$PointType = dart.constFn(collection.HashMap$(core.int, path_point.PointType)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfPointType = () => (JSArrayOfPointType = dart.constFn(_interceptors.JSArray$(path_point.PointType)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: path_point.PointType.prototype,
        [_name$]: "PointType.straight",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: path_point.PointType.prototype,
        [_name$]: "PointType.mirror",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: path_point.PointType.prototype,
        [_name$]: "PointType.disconnected",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: path_point.PointType.prototype,
        [_name$]: "PointType.asymmetric",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], path_point.PointType);
    }
  });
  const _name$ = dart.privateName(path_point, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  path_point.PointType = class PointType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (path_point.PointType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = path_point.PointType.prototype;
  dart.addTypeTests(path_point.PointType);
  dart.setLibraryUri(path_point.PointType, "package:flare_dart/path_point.dart");
  dart.setFieldSignature(path_point.PointType, () => ({
    __proto__: dart.getFields(path_point.PointType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(path_point.PointType, ['toString']);
  path_point.PointType.straight = C0 || CT.C0;
  path_point.PointType.mirror = C1 || CT.C1;
  path_point.PointType.disconnected = C2 || CT.C2;
  path_point.PointType.asymmetric = C3 || CT.C3;
  path_point.PointType.values = C4 || CT.C4;
  const _type = dart.privateName(path_point, "_type");
  const _translation = dart.privateName(path_point, "_translation");
  const _weights = dart.privateName(path_point, "_weights");
  path_point.PathPoint = class PathPoint extends core.Object {
    get pointType() {
      return this[_type];
    }
    get translation() {
      return this[_translation];
    }
    copy(from) {
      this[_type] = from[_type];
      vec2d.Vec2D.copy(this[_translation], from[_translation]);
      if (from[_weights] != null) {
        this[_weights] = _native_typed_data.NativeFloat32List.fromList(from[_weights]);
      }
    }
    read(reader, isConnectedToBones) {
      vec2d.Vec2D.copyFromList(this[_translation], reader.readFloat32Array(2, "translation"));
      let weightLength = this.readPoint(reader, isConnectedToBones);
      if (weightLength !== 0) {
        this[_weights] = reader.readFloat32Array(weightLength, "weights");
      }
    }
    transformed(transform) {
      let result = this.makeInstance();
      vec2d.Vec2D.transformMat2D(result.translation, result.translation, transform);
      return result;
    }
  };
  (path_point.PathPoint.new = function(type) {
    this[_type] = null;
    this[_translation] = new vec2d.Vec2D.new();
    this[_weights] = null;
    this[_type] = type;
  }).prototype = path_point.PathPoint.prototype;
  dart.addTypeTests(path_point.PathPoint);
  dart.setMethodSignature(path_point.PathPoint, () => ({
    __proto__: dart.getMethods(path_point.PathPoint.__proto__),
    copy: dart.fnType(dart.void, [path_point.PathPoint]),
    read: dart.fnType(dart.void, [stream_reader.StreamReader, core.bool]),
    transformed: dart.fnType(path_point.PathPoint, [mat2d.Mat2D])
  }));
  dart.setGetterSignature(path_point.PathPoint, () => ({
    __proto__: dart.getGetters(path_point.PathPoint.__proto__),
    pointType: path_point.PointType,
    translation: vec2d.Vec2D
  }));
  dart.setLibraryUri(path_point.PathPoint, "package:flare_dart/path_point.dart");
  dart.setFieldSignature(path_point.PathPoint, () => ({
    __proto__: dart.getFields(path_point.PathPoint.__proto__),
    [_type]: dart.fieldType(path_point.PointType),
    [_translation]: dart.fieldType(vec2d.Vec2D),
    [_weights]: dart.fieldType(typed_data.Float32List)
  }));
  const radius$ = dart.privateName(path_point, "StraightPathPoint.radius");
  path_point.StraightPathPoint = class StraightPathPoint extends path_point.PathPoint {
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      this[radius$] = value;
    }
    makeInstance() {
      let node = new path_point.StraightPathPoint.new();
      node.copyStraight(this);
      return node;
    }
    copyStraight(from) {
      super.copy(from);
      this.radius = from.radius;
    }
    readPoint(reader, isConnectedToBones) {
      this.radius = reader.readFloat32("radius");
      if (dart.test(isConnectedToBones)) {
        return 8;
      }
      return 0;
    }
    skin(world, bones) {
      let t0;
      let point = (t0 = new path_point.StraightPathPoint.new(), t0.radius = this.radius, t0);
      let px = dart.notNull(world._get(0)) * dart.notNull(this.translation._get(0)) + dart.notNull(world._get(2)) * dart.notNull(this.translation._get(1)) + dart.notNull(world._get(4));
      let py = dart.notNull(world._get(1)) * dart.notNull(this.translation._get(0)) + dart.notNull(world._get(3)) * dart.notNull(this.translation._get(1)) + dart.notNull(world._get(5));
      let a = 0.0;
      let b = 0.0;
      let c = 0.0;
      let d = 0.0;
      let e = 0.0;
      let f = 0.0;
      for (let i = 0; i < 4; i = i + 1) {
        let boneIndex = this[_weights][$_get](i)[$floor]();
        let weight = this[_weights][$_get](i + 4);
        if (dart.notNull(weight) > 0) {
          let bb = boneIndex * 6;
          a = a + dart.notNull(bones[$_get](bb)) * dart.notNull(weight);
          b = b + dart.notNull(bones[$_get](bb + 1)) * dart.notNull(weight);
          c = c + dart.notNull(bones[$_get](bb + 2)) * dart.notNull(weight);
          d = d + dart.notNull(bones[$_get](bb + 3)) * dart.notNull(weight);
          e = e + dart.notNull(bones[$_get](bb + 4)) * dart.notNull(weight);
          f = f + dart.notNull(bones[$_get](bb + 5)) * dart.notNull(weight);
        }
      }
      let pos = point.translation;
      pos._set(0, a * px + c * py + e);
      pos._set(1, b * px + d * py + f);
      return point;
    }
  };
  (path_point.StraightPathPoint.new = function() {
    this[radius$] = 0.0;
    path_point.StraightPathPoint.__proto__.new.call(this, path_point.PointType.straight);
    ;
  }).prototype = path_point.StraightPathPoint.prototype;
  (path_point.StraightPathPoint.fromTranslation = function(translation) {
    this[radius$] = 0.0;
    path_point.StraightPathPoint.__proto__.new.call(this, path_point.PointType.straight);
    this[_translation] = translation;
  }).prototype = path_point.StraightPathPoint.prototype;
  (path_point.StraightPathPoint.fromValues = function(translation, radius) {
    this[radius$] = 0.0;
    this[radius$] = radius;
    path_point.StraightPathPoint.__proto__.new.call(this, path_point.PointType.straight);
    this[_translation] = translation;
  }).prototype = path_point.StraightPathPoint.prototype;
  dart.addTypeTests(path_point.StraightPathPoint);
  dart.setMethodSignature(path_point.StraightPathPoint, () => ({
    __proto__: dart.getMethods(path_point.StraightPathPoint.__proto__),
    makeInstance: dart.fnType(path_point.PathPoint, []),
    copyStraight: dart.fnType(dart.void, [path_point.StraightPathPoint]),
    readPoint: dart.fnType(core.int, [stream_reader.StreamReader, core.bool]),
    skin: dart.fnType(path_point.PathPoint, [mat2d.Mat2D, typed_data.Float32List])
  }));
  dart.setLibraryUri(path_point.StraightPathPoint, "package:flare_dart/path_point.dart");
  dart.setFieldSignature(path_point.StraightPathPoint, () => ({
    __proto__: dart.getFields(path_point.StraightPathPoint.__proto__),
    radius: dart.fieldType(core.double)
  }));
  const _in = dart.privateName(path_point, "_in");
  const _out = dart.privateName(path_point, "_out");
  path_point.CubicPathPoint = class CubicPathPoint extends path_point.PathPoint {
    get inPoint() {
      return this[_in];
    }
    get outPoint() {
      return this[_out];
    }
    makeInstance() {
      let node = new path_point.CubicPathPoint.new(this[_type]);
      node.copyCubic(this);
      return node;
    }
    copyCubic(from) {
      super.copy(from);
      vec2d.Vec2D.copy(this[_in], from[_in]);
      vec2d.Vec2D.copy(this[_out], from[_out]);
    }
    readPoint(reader, isConnectedToBones) {
      vec2d.Vec2D.copyFromList(this[_in], reader.readFloat32Array(2, "in"));
      vec2d.Vec2D.copyFromList(this[_out], reader.readFloat32Array(2, "out"));
      if (dart.test(isConnectedToBones)) {
        return 24;
      }
      return 0;
    }
    transformed(transform) {
      let result = path_point.CubicPathPoint.as(super.transformed(transform));
      vec2d.Vec2D.transformMat2D(result.inPoint, result.inPoint, transform);
      vec2d.Vec2D.transformMat2D(result.outPoint, result.outPoint, transform);
      return result;
    }
    skin(world, bones) {
      let point = new path_point.CubicPathPoint.new(this.pointType);
      let px = dart.notNull(world._get(0)) * dart.notNull(this.translation._get(0)) + dart.notNull(world._get(2)) * dart.notNull(this.translation._get(1)) + dart.notNull(world._get(4));
      let py = dart.notNull(world._get(1)) * dart.notNull(this.translation._get(0)) + dart.notNull(world._get(3)) * dart.notNull(this.translation._get(1)) + dart.notNull(world._get(5));
      {
        let a = 0.0;
        let b = 0.0;
        let c = 0.0;
        let d = 0.0;
        let e = 0.0;
        let f = 0.0;
        for (let i = 0; i < 4; i = i + 1) {
          let boneIndex = this[_weights][$_get](i)[$floor]();
          let weight = this[_weights][$_get](i + 4);
          if (dart.notNull(weight) > 0) {
            let bb = boneIndex * 6;
            a = a + dart.notNull(bones[$_get](bb)) * dart.notNull(weight);
            b = b + dart.notNull(bones[$_get](bb + 1)) * dart.notNull(weight);
            c = c + dart.notNull(bones[$_get](bb + 2)) * dart.notNull(weight);
            d = d + dart.notNull(bones[$_get](bb + 3)) * dart.notNull(weight);
            e = e + dart.notNull(bones[$_get](bb + 4)) * dart.notNull(weight);
            f = f + dart.notNull(bones[$_get](bb + 5)) * dart.notNull(weight);
          }
        }
        let pos = point.translation;
        pos._set(0, a * px + c * py + e);
        pos._set(1, b * px + d * py + f);
      }
      {
        let a = 0.0;
        let b = 0.0;
        let c = 0.0;
        let d = 0.0;
        let e = 0.0;
        let f = 0.0;
        px = dart.notNull(world._get(0)) * dart.notNull(this[_in]._get(0)) + dart.notNull(world._get(2)) * dart.notNull(this[_in]._get(1)) + dart.notNull(world._get(4));
        py = dart.notNull(world._get(1)) * dart.notNull(this[_in]._get(0)) + dart.notNull(world._get(3)) * dart.notNull(this[_in]._get(1)) + dart.notNull(world._get(5));
        for (let i = 8; i < 12; i = i + 1) {
          let boneIndex = this[_weights][$_get](i)[$floor]();
          let weight = this[_weights][$_get](i + 4);
          if (dart.notNull(weight) > 0) {
            let bb = boneIndex * 6;
            a = a + dart.notNull(bones[$_get](bb)) * dart.notNull(weight);
            b = b + dart.notNull(bones[$_get](bb + 1)) * dart.notNull(weight);
            c = c + dart.notNull(bones[$_get](bb + 2)) * dart.notNull(weight);
            d = d + dart.notNull(bones[$_get](bb + 3)) * dart.notNull(weight);
            e = e + dart.notNull(bones[$_get](bb + 4)) * dart.notNull(weight);
            f = f + dart.notNull(bones[$_get](bb + 5)) * dart.notNull(weight);
          }
        }
        let pos = point.inPoint;
        pos._set(0, a * px + c * py + e);
        pos._set(1, b * px + d * py + f);
      }
      {
        let a = 0.0;
        let b = 0.0;
        let c = 0.0;
        let d = 0.0;
        let e = 0.0;
        let f = 0.0;
        px = dart.notNull(world._get(0)) * dart.notNull(this[_out]._get(0)) + dart.notNull(world._get(2)) * dart.notNull(this[_out]._get(1)) + dart.notNull(world._get(4));
        py = dart.notNull(world._get(1)) * dart.notNull(this[_out]._get(0)) + dart.notNull(world._get(3)) * dart.notNull(this[_out]._get(1)) + dart.notNull(world._get(5));
        for (let i = 16; i < 20; i = i + 1) {
          let boneIndex = this[_weights][$_get](i)[$floor]();
          let weight = this[_weights][$_get](i + 4);
          if (dart.notNull(weight) > 0) {
            let bb = boneIndex * 6;
            a = a + dart.notNull(bones[$_get](bb)) * dart.notNull(weight);
            b = b + dart.notNull(bones[$_get](bb + 1)) * dart.notNull(weight);
            c = c + dart.notNull(bones[$_get](bb + 2)) * dart.notNull(weight);
            d = d + dart.notNull(bones[$_get](bb + 3)) * dart.notNull(weight);
            e = e + dart.notNull(bones[$_get](bb + 4)) * dart.notNull(weight);
            f = f + dart.notNull(bones[$_get](bb + 5)) * dart.notNull(weight);
          }
        }
        let pos = point.outPoint;
        pos._set(0, a * px + c * py + e);
        pos._set(1, b * px + d * py + f);
      }
      return point;
    }
  };
  (path_point.CubicPathPoint.new = function(type) {
    this[_in] = new vec2d.Vec2D.new();
    this[_out] = new vec2d.Vec2D.new();
    path_point.CubicPathPoint.__proto__.new.call(this, type);
    ;
  }).prototype = path_point.CubicPathPoint.prototype;
  (path_point.CubicPathPoint.fromValues = function(translation, inPoint, outPoint) {
    this[_in] = new vec2d.Vec2D.new();
    this[_out] = new vec2d.Vec2D.new();
    path_point.CubicPathPoint.__proto__.new.call(this, path_point.PointType.disconnected);
    this[_translation] = translation;
    this[_in] = inPoint;
    this[_out] = outPoint;
  }).prototype = path_point.CubicPathPoint.prototype;
  dart.addTypeTests(path_point.CubicPathPoint);
  dart.setMethodSignature(path_point.CubicPathPoint, () => ({
    __proto__: dart.getMethods(path_point.CubicPathPoint.__proto__),
    makeInstance: dart.fnType(path_point.PathPoint, []),
    copyCubic: dart.fnType(dart.void, [path_point.CubicPathPoint]),
    readPoint: dart.fnType(core.int, [stream_reader.StreamReader, core.bool]),
    skin: dart.fnType(path_point.PathPoint, [mat2d.Mat2D, typed_data.Float32List])
  }));
  dart.setGetterSignature(path_point.CubicPathPoint, () => ({
    __proto__: dart.getGetters(path_point.CubicPathPoint.__proto__),
    inPoint: vec2d.Vec2D,
    outPoint: vec2d.Vec2D
  }));
  dart.setLibraryUri(path_point.CubicPathPoint, "package:flare_dart/path_point.dart");
  dart.setFieldSignature(path_point.CubicPathPoint, () => ({
    __proto__: dart.getFields(path_point.CubicPathPoint.__proto__),
    [_in]: dart.fieldType(vec2d.Vec2D),
    [_out]: dart.fieldType(vec2d.Vec2D)
  }));
  dart.defineLazy(path_point, {
    /*path_point.pointTypeLookup*/get pointTypeLookup() {
      return HashMapOfint$PointType().fromIterables(JSArrayOfint().of([0, 1, 2, 3]), JSArrayOfPointType().of([path_point.PointType.straight, path_point.PointType.mirror, path_point.PointType.disconnected, path_point.PointType.asymmetric]));
    },
    set pointTypeLookup(_) {}
  });
  dart.trackLibraries("packages/flare_dart/path_point", {
    "package:flare_dart/path_point.dart": path_point
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["path_point.dart"],"names":[],"mappings":"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","file":"path_point.ddc.js"}');
  // Exports:
  return {
    path_point: path_point
  };
});

//# sourceMappingURL=path_point.ddc.js.map
