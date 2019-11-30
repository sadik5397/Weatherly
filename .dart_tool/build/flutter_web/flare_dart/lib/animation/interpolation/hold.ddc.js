define(['dart_sdk', 'packages/flare_dart/animation/interpolation/interpolator'], function(dart_sdk, packages__flare_dart__animation__interpolation__interpolator) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interpolator = packages__flare_dart__animation__interpolation__interpolator.animation__interpolation__interpolator;
  const hold = Object.create(dart.library);
  const CT = Object.create(null);
  hold.HoldInterpolator = class HoldInterpolator extends interpolator.Interpolator {
    static get instance() {
      return hold._instance;
    }
    getEasedMix(mix) {
      return 0.0;
    }
  };
  (hold.HoldInterpolator.new = function() {
    ;
  }).prototype = hold.HoldInterpolator.prototype;
  dart.addTypeTests(hold.HoldInterpolator);
  dart.setMethodSignature(hold.HoldInterpolator, () => ({
    __proto__: dart.getMethods(hold.HoldInterpolator.__proto__),
    getEasedMix: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(hold.HoldInterpolator, "package:flare_dart/animation/interpolation/hold.dart");
  dart.defineLazy(hold, {
    /*hold._instance*/get _instance() {
      return new hold.HoldInterpolator.new();
    },
    set _instance(_) {}
  });
  dart.trackLibraries("packages/flare_dart/animation/interpolation/hold", {
    "package:flare_dart/animation/interpolation/hold.dart": hold
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hold.dart"],"names":[],"mappings":";;;;;;;;;;AAII,YAAO;IACT;gBAG0B;AACxB,YAAO;IACT;;;;EACF;;;;;;;;MAEiB,cAAS;YAAG","file":"hold.ddc.js"}');
  // Exports:
  return {
    animation__interpolation__hold: hold
  };
});

//# sourceMappingURL=hold.ddc.js.map
