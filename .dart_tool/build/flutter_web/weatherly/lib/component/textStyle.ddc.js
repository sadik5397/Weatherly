define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__material.src__material__colors;
  const textStyle = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(textStyle, {
    /*textStyle.main*/get main() {
      return new text_style.TextStyle.new({color: colors.Colors.black87, fontSize: 15.0, fontWeight: ui.FontWeight.w600});
    },
    set main(_) {},
    /*textStyle.weatherDigit*/get weatherDigit() {
      return new text_style.TextStyle.new({color: colors.Colors.pinkAccent.shade50, fontSize: 90.0, fontWeight: ui.FontWeight.w100});
    },
    set weatherDigit(_) {},
    /*textStyle.location*/get location() {
      return new text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui.FontWeight.w600});
    },
    set location(_) {},
    /*textStyle.time*/get time() {
      return new text_style.TextStyle.new({fontSize: 30.0, fontWeight: ui.FontWeight.w400});
    },
    set time(_) {},
    /*textStyle.buttonText*/get buttonText() {
      return new text_style.TextStyle.new({color: colors.Colors.black87, fontSize: 16.0, fontWeight: ui.FontWeight.w800});
    },
    set buttonText(_) {},
    /*textStyle.weatherStatus*/get weatherStatus() {
      return new text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui.FontWeight.w500});
    },
    set weatherStatus(_) {}
  });
  dart.trackLibraries("packages/weatherly/component/textStyle", {
    "package:weatherly/component/textStyle.dart": textStyle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["textStyle.dart"],"names":[],"mappings":";;;;;;;;;;;MAEU,cAAI;YAAG,sCACD,iCACJ,kBACa;;;MAEf,sBAAY;YAAG,sCACT,AAAW,4CACf,kBACa;;;MAEf,kBAAQ;YAAG,yCAET,kBACa;;;MAEf,cAAI;YAAG,yCAEL,kBACa;;;MAEf,oBAAU;YAAG,sCACP,iCACJ,kBACa;;;MAEf,uBAAa;YAAG,yCAEd,kBACa","file":"textStyle.ddc.js"}');
  // Exports:
  return {
    component__textStyle: textStyle
  };
});

//# sourceMappingURL=textStyle.ddc.js.map
