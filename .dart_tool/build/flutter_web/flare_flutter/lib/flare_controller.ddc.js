define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const flare_controller = Object.create(dart.library);
  let ValueNotifierOfbool = () => (ValueNotifierOfbool = dart.constFn(change_notifier.ValueNotifier$(core.bool)))();
  const CT = Object.create(null);
  const FlareController_isActive = dart.privateName(flare_controller, "FlareController.isActive");
  flare_controller.FlareController = class FlareController extends core.Object {
    get isActive() {
      return this[isActive];
    }
    set isActive(value) {
      this[isActive] = value;
    }
  };
  (flare_controller.FlareController.new = function() {
    this[isActive] = new (ValueNotifierOfbool()).new(true);
    ;
  }).prototype = flare_controller.FlareController.prototype;
  dart.addTypeTests(flare_controller.FlareController);
  const isActive = FlareController_isActive;
  dart.setLibraryUri(flare_controller.FlareController, "package:flare_flutter/flare_controller.dart");
  dart.setFieldSignature(flare_controller.FlareController, () => ({
    __proto__: dart.getFields(flare_controller.FlareController.__proto__),
    isActive: dart.fieldType(change_notifier.ValueNotifier$(core.bool))
  }));
  dart.trackLibraries("packages/flare_flutter/flare_controller", {
    "package:flare_flutter/flare_controller.dart": flare_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_controller.dart"],"names":[],"mappings":";;;;;;;;;;;IAyBsB;;;;;;;;qBAAW,gCAAoB;;EAYrD","file":"flare_controller.ddc.js"}');
  // Exports:
  return {
    flare_controller: flare_controller
  };
});

//# sourceMappingURL=flare_controller.ddc.js.map
