define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const transform_space = Object.create(dart.library);
  const CT = Object.create(null);
  transform_space.TransformSpace = class TransformSpace extends core.Object {};
  (transform_space.TransformSpace.new = function() {
    ;
  }).prototype = transform_space.TransformSpace.prototype;
  dart.addTypeTests(transform_space.TransformSpace);
  dart.setLibraryUri(transform_space.TransformSpace, "package:flare_dart/transform_space.dart");
  dart.defineLazy(transform_space.TransformSpace, {
    /*transform_space.TransformSpace.local*/get local() {
      return 0;
    },
    /*transform_space.TransformSpace.world*/get world() {
      return 1;
    }
  });
  dart.trackLibraries("packages/flare_dart/transform_space", {
    "package:flare_dart/transform_space.dart": transform_space
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["transform_space.dart"],"names":[],"mappings":";;;;;;;;;;EAGA;;;;MAFmB,oCAAK;;;MACL,oCAAK","file":"transform_space.ddc.js"}');
  // Exports:
  return {
    transform_space: transform_space
  };
});

//# sourceMappingURL=transform_space.ddc.js.map
