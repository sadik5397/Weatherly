define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const interpolator = Object.create(dart.library);
  const CT = Object.create(null);
  interpolator.Interpolator = class Interpolator extends core.Object {};
  (interpolator.Interpolator.new = function() {
    ;
  }).prototype = interpolator.Interpolator.prototype;
  dart.addTypeTests(interpolator.Interpolator);
  dart.setLibraryUri(interpolator.Interpolator, "package:flare_dart/animation/interpolation/interpolator.dart");
  dart.trackLibraries("packages/flare_dart/animation/interpolation/interpolator", {
    "package:flare_dart/animation/interpolation/interpolator.dart": interpolator
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interpolator.dart"],"names":[],"mappings":";;;;;;;;;;EAEA","file":"interpolator.ddc.js"}');
  // Exports:
  return {
    animation__interpolation__interpolator: interpolator
  };
});

//# sourceMappingURL=interpolator.ddc.js.map
