define(['dart_sdk', 'packages/flare_dart/animation/interpolation/cubic_ease', 'packages/flare_dart/animation/interpolation/interpolator', 'packages/flare_dart/binary_reader'], function(dart_sdk, packages__flare_dart__animation__interpolation__cubic_ease, packages__flare_dart__animation__interpolation__interpolator, packages__flare_dart__binary_reader) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cubic_ease = packages__flare_dart__animation__interpolation__cubic_ease.animation__interpolation__cubic_ease;
  const interpolator = packages__flare_dart__animation__interpolation__interpolator.animation__interpolation__interpolator;
  const stream_reader = packages__flare_dart__binary_reader.stream_reader;
  const cubic = Object.create(dart.library);
  const CT = Object.create(null);
  const _cubic = dart.privateName(cubic, "_cubic");
  cubic.CubicInterpolator = class CubicInterpolator extends interpolator.Interpolator {
    getEasedMix(mix) {
      return this[_cubic].ease(mix);
    }
    read(reader) {
      this[_cubic] = cubic_ease.CubicEase.make(reader.readFloat32("cubicX1"), reader.readFloat32("cubicY1"), reader.readFloat32("cubicX2"), reader.readFloat32("cubicY2"));
      return true;
    }
  };
  (cubic.CubicInterpolator.new = function() {
    this[_cubic] = null;
    ;
  }).prototype = cubic.CubicInterpolator.prototype;
  dart.addTypeTests(cubic.CubicInterpolator);
  dart.setMethodSignature(cubic.CubicInterpolator, () => ({
    __proto__: dart.getMethods(cubic.CubicInterpolator.__proto__),
    getEasedMix: dart.fnType(core.double, [core.double]),
    read: dart.fnType(core.bool, [stream_reader.StreamReader])
  }));
  dart.setLibraryUri(cubic.CubicInterpolator, "package:flare_dart/animation/interpolation/cubic.dart");
  dart.setFieldSignature(cubic.CubicInterpolator, () => ({
    __proto__: dart.getFields(cubic.CubicInterpolator.__proto__),
    [_cubic]: dart.fieldType(cubic_ease.CubicEase)
  }));
  dart.trackLibraries("packages/flare_dart/animation/interpolation/cubic", {
    "package:flare_dart/animation/interpolation/cubic.dart": cubic
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cubic.dart"],"names":[],"mappings":";;;;;;;;;;;;gBAO4B;AACxB,YAAO,AAAO,mBAAK,GAAG;IACxB;SAEuB;AAKa,MAJlC,eAAmB,0BACf,AAAO,MAAD,aAAa,YACnB,AAAO,MAAD,aAAa,YACnB,AAAO,MAAD,aAAa,YACnB,AAAO,MAAD,aAAa;AACvB,YAAO;IACT;;;IAbU;;EAcZ","file":"cubic.ddc.js"}');
  // Exports:
  return {
    animation__interpolation__cubic: cubic
  };
});

//# sourceMappingURL=cubic.ddc.js.map
