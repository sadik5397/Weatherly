define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const actor_flags = Object.create(dart.library);
  const CT = Object.create(null);
  actor_flags.ActorFlags = class ActorFlags extends core.Object {};
  (actor_flags.ActorFlags.new = function() {
    ;
  }).prototype = actor_flags.ActorFlags.prototype;
  dart.addTypeTests(actor_flags.ActorFlags);
  dart.setLibraryUri(actor_flags.ActorFlags, "package:flare_dart/actor_flags.dart");
  dart.defineLazy(actor_flags.ActorFlags, {
    /*actor_flags.ActorFlags.isDrawOrderDirty*/get isDrawOrderDirty() {
      return 1;
    },
    /*actor_flags.ActorFlags.isDirty*/get isDirty() {
      return 2;
    }
  });
  actor_flags.DirtyFlags = class DirtyFlags extends core.Object {};
  (actor_flags.DirtyFlags.new = function() {
    ;
  }).prototype = actor_flags.DirtyFlags.prototype;
  dart.addTypeTests(actor_flags.DirtyFlags);
  dart.setLibraryUri(actor_flags.DirtyFlags, "package:flare_dart/actor_flags.dart");
  dart.defineLazy(actor_flags.DirtyFlags, {
    /*actor_flags.DirtyFlags.transformDirty*/get transformDirty() {
      return 1;
    },
    /*actor_flags.DirtyFlags.worldTransformDirty*/get worldTransformDirty() {
      return 2;
    },
    /*actor_flags.DirtyFlags.paintDirty*/get paintDirty() {
      return 4;
    }
  });
  dart.trackLibraries("packages/flare_dart/actor_flags", {
    "package:flare_dart/actor_flags.dart": actor_flags
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["actor_flags.dart"],"names":[],"mappings":";;;;;;;;;;EAGA;;;;MAFmB,uCAAgB;;;MAChB,8BAAO;;;;;;;EAO1B;;;;MAHmB,qCAAc;;;MACd,0CAAmB;;;MACnB,iCAAU","file":"actor_flags.ddc.js"}');
  // Exports:
  return {
    actor_flags: actor_flags
  };
});

//# sourceMappingURL=actor_flags.ddc.js.map
