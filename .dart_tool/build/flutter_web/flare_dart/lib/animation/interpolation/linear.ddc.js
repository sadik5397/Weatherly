define(['dart_sdk', 'packages/flare_dart/animation/interpolation/interpolator'], function(dart_sdk, packages__flare_dart__animation__interpolation__interpolator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interpolator = packages__flare_dart__animation__interpolation__interpolator.animation__interpolation__interpolator;
  const linear = Object.create(dart.library);
  const CT = Object.create(null);
  linear.LinearInterpolator = class LinearInterpolator extends interpolator.Interpolator {
    static get instance() {
      return linear._instance;
    }
    getEasedMix(mix) {
      return mix;
    }
  };
  (linear.LinearInterpolator.new = function() {
    ;
  }).prototype = linear.LinearInterpolator.prototype;
  dart.addTypeTests(linear.LinearInterpolator);
  dart.setMethodSignature(linear.LinearInterpolator, () => ({
    __proto__: dart.getMethods(linear.LinearInterpolator.__proto__),
    getEasedMix: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(linear.LinearInterpolator, "package:flare_dart/animation/interpolation/linear.dart");
  dart.defineLazy(linear, {
    /*linear._instance*/get _instance() {
      return new linear.LinearInterpolator.new();
    },
    set _instance(_) {}
  });
  dart.trackLibraries("packages/flare_dart/animation/interpolation/linear", {
    "package:flare_dart/animation/interpolation/linear.dart": linear
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["linear.dart"],"names":[],"mappings":";;;;;;;;;;AAII,YAAO;IACT;gBAG0B;AACxB,YAAO,IAAG;IACZ;;;;EACF;;;;;;;;MAEmB,gBAAS;YAAG","file":"linear.ddc.js"}');
  // Exports:
  return {
    animation__interpolation__linear: linear
  };
});

//# sourceMappingURL=linear.ddc.js.map
