define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cubic_ease = Object.create(dart.library);
  const $_set = dartx._set;
  const $_get = dartx._get;
  const $abs = dartx.abs;
  const CT = Object.create(null);
  cubic_ease.CubicEase = class CubicEase extends core.Object {
    static make(x1, y1, x2, y2) {
      if (x1 == y1 && x2 == y2) {
        return new cubic_ease.LinearCubicEase.new();
      } else {
        return new cubic_ease.Cubic.new(x1, y1, x2, y2);
      }
    }
  };
  (cubic_ease.CubicEase.new = function() {
    ;
  }).prototype = cubic_ease.CubicEase.prototype;
  dart.addTypeTests(cubic_ease.CubicEase);
  dart.setLibraryUri(cubic_ease.CubicEase, "package:flare_dart/animation/interpolation/cubic_ease.dart");
  cubic_ease.LinearCubicEase = class LinearCubicEase extends cubic_ease.CubicEase {
    ease(t) {
      return t;
    }
  };
  (cubic_ease.LinearCubicEase.new = function() {
    ;
  }).prototype = cubic_ease.LinearCubicEase.prototype;
  dart.addTypeTests(cubic_ease.LinearCubicEase);
  dart.setMethodSignature(cubic_ease.LinearCubicEase, () => ({
    __proto__: dart.getMethods(cubic_ease.LinearCubicEase.__proto__),
    ease: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(cubic_ease.LinearCubicEase, "package:flare_dart/animation/interpolation/cubic_ease.dart");
  const _values = dart.privateName(cubic_ease, "_values");
  const x1$ = dart.privateName(cubic_ease, "Cubic.x1");
  const y1$ = dart.privateName(cubic_ease, "Cubic.y1");
  const x2$ = dart.privateName(cubic_ease, "Cubic.x2");
  const y2$ = dart.privateName(cubic_ease, "Cubic.y2");
  cubic_ease.Cubic = class Cubic extends cubic_ease.CubicEase {
    get x1() {
      return this[x1$];
    }
    set x1(value) {
      super.x1 = value;
    }
    get y1() {
      return this[y1$];
    }
    set y1(value) {
      super.y1 = value;
    }
    get x2() {
      return this[x2$];
    }
    set x2(value) {
      super.x2 = value;
    }
    get y2() {
      return this[y2$];
    }
    set y2(value) {
      super.y2 = value;
    }
    getT(x) {
      let intervalStart = 0.0;
      let currentSample = 1;
      let lastSample = 11 - 1;
      for (; currentSample !== lastSample && dart.notNull(this[_values][$_get](currentSample)) <= dart.notNull(x); currentSample = currentSample + 1) {
        intervalStart = dart.notNull(intervalStart) + 0.1;
      }
      currentSample = currentSample - 1;
      let dist = (dart.notNull(x) - dart.notNull(this[_values][$_get](currentSample))) / (dart.notNull(this[_values][$_get](currentSample + 1)) - dart.notNull(this[_values][$_get](currentSample)));
      let guessForT = dart.notNull(intervalStart) + dist * 0.1;
      let initialSlope = cubic_ease.getSlope(guessForT, this.x1, this.x2);
      if (dart.notNull(initialSlope) >= 0.001) {
        for (let i = 0; i < 4; i = i + 1) {
          let currentSlope = cubic_ease.getSlope(guessForT, this.x1, this.x2);
          if (currentSlope === 0.0) {
            return guessForT;
          }
          let currentX = dart.notNull(cubic_ease.calcBezier(guessForT, this.x1, this.x2)) - dart.notNull(x);
          guessForT = guessForT - currentX / dart.notNull(currentSlope);
        }
        return guessForT;
      } else if (initialSlope === 0.0) {
        return guessForT;
      } else {
        let aB = dart.notNull(intervalStart) + 0.1;
        let currentX = null;
        let currentT = null;
        let i = 0;
        do {
          currentT = dart.notNull(intervalStart) + (dart.notNull(aB) - dart.notNull(intervalStart)) / 2.0;
          currentX = dart.notNull(cubic_ease.calcBezier(currentT, this.x1, this.x2)) - dart.notNull(x);
          if (dart.notNull(currentX) > 0.0) {
            aB = currentT;
          } else {
            intervalStart = currentT;
          }
        } while (currentX[$abs]() > 1e-7 && (i = i + 1) < 10);
        return currentT;
      }
    }
    ease(mix) {
      return cubic_ease.calcBezier(this.getT(mix), this.y1, this.y2);
    }
  };
  (cubic_ease.Cubic.new = function(x1, y1, x2, y2) {
    this[_values] = null;
    this[x1$] = x1;
    this[y1$] = y1;
    this[x2$] = x2;
    this[y2$] = y2;
    this[_values] = _native_typed_data.NativeFloat64List.new(11);
    for (let i = 0; i < 11; i = i + 1) {
      this[_values][$_set](i, cubic_ease.calcBezier(i * 0.1, this.x1, this.x2));
    }
  }).prototype = cubic_ease.Cubic.prototype;
  dart.addTypeTests(cubic_ease.Cubic);
  dart.setMethodSignature(cubic_ease.Cubic, () => ({
    __proto__: dart.getMethods(cubic_ease.Cubic.__proto__),
    getT: dart.fnType(core.double, [core.double]),
    ease: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(cubic_ease.Cubic, "package:flare_dart/animation/interpolation/cubic_ease.dart");
  dart.setFieldSignature(cubic_ease.Cubic, () => ({
    __proto__: dart.getFields(cubic_ease.Cubic.__proto__),
    [_values]: dart.fieldType(typed_data.Float64List),
    x1: dart.finalFieldType(core.double),
    y1: dart.finalFieldType(core.double),
    x2: dart.finalFieldType(core.double),
    y2: dart.finalFieldType(core.double)
  }));
  cubic_ease.calcBezier = function calcBezier(aT, aA1, aA2) {
    return (((1.0 - 3.0 * dart.notNull(aA2) + 3.0 * dart.notNull(aA1)) * dart.notNull(aT) + (3.0 * dart.notNull(aA2) - 6.0 * dart.notNull(aA1))) * dart.notNull(aT) + 3.0 * dart.notNull(aA1)) * dart.notNull(aT);
  };
  cubic_ease.getSlope = function getSlope(aT, aA1, aA2) {
    return 3.0 * (1.0 - 3.0 * dart.notNull(aA2) + 3.0 * dart.notNull(aA1)) * dart.notNull(aT) * dart.notNull(aT) + 2.0 * (3.0 * dart.notNull(aA2) - 6.0 * dart.notNull(aA1)) * dart.notNull(aT) + 3.0 * dart.notNull(aA1);
  };
  cubic_ease.newtonRaphsonIterate = function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < 4; i = i + 1) {
      let currentSlope = cubic_ease.getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0.0) {
        return aGuessT;
      }
      let currentX = dart.notNull(cubic_ease.calcBezier(aGuessT, mX1, mX2)) - dart.notNull(aX);
      aGuessT = dart.notNull(aGuessT) - currentX / dart.notNull(currentSlope);
    }
    return aGuessT;
  };
  dart.defineLazy(cubic_ease, {
    /*cubic_ease.newtonIterations*/get newtonIterations() {
      return 4;
    },
    /*cubic_ease.newtonMinSlope*/get newtonMinSlope() {
      return 0.001;
    },
    /*cubic_ease.subdivisionPrecision*/get subdivisionPrecision() {
      return 1e-7;
    },
    /*cubic_ease.subdivisionMaxIterations*/get subdivisionMaxIterations() {
      return 10;
    },
    /*cubic_ease.splineTableSize*/get splineTableSize() {
      return 11;
    },
    /*cubic_ease.sampleStepSize*/get sampleStepSize() {
      return 0.1;
    }
  });
  dart.trackLibraries("packages/flare_dart/animation/interpolation/cubic_ease", {
    "package:flare_dart/animation/interpolation/cubic_ease.dart": cubic_ease
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["cubic_ease.dart"],"names":[],"mappings":";;;;;;;;;;;;;gBAsC+B,IAAW,IAAW,IAAW;AAC5D,UAAI,AAAG,EAAD,IAAI,EAAE,IAAI,AAAG,EAAD,IAAI,EAAE;AACtB,cAAO;;AAEP,cAAO,0BAAM,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;;IAE/B;;;;EAGF;;;;SAIqB;AACjB,YAAO,EAAC;IACV;;;;EACF;;;;;;;;;;;;;IAIe;;;;;;IAAI;;;;;;IAAI;;;;;;IAAI;;;;;;SASN;AACV,0BAAgB;AACnB,0BAAgB;AAChB,uBAA6B,KAAE;AAEnC,aACI,aAAa,KAAI,UAAU,IAA2B,aAAvB,AAAO,qBAAC,aAAa,mBAAK,CAAC,GACxD,gBAAF,AAAE,aAAa,GAAf;AAC6B,QAA/B,gBAAc,aAAd,aAAa;;AAEA,MAAb,gBAAF,AAAE,aAAa,GAAf;AAGI,iBAAoC,CAA1B,aAAF,CAAC,iBAAG,AAAO,qBAAC,aAAa,OACL,aAA3B,AAAO,qBAAC,AAAc,aAAD,GAAG,mBAAK,AAAO,qBAAC,aAAa;AACnD,sBAA0B,aAAd,aAAa,IAAG,AAAK,IAAD;AAEhC,yBAAe,oBAAS,SAAS,EAAE,SAAI;AAC3C,UAAiB,aAAb,YAAY;AACd,iBAAS,IAAI,GAAG,AAAE,CAAD,MAAuB,IAAF,AAAE,CAAC,GAAH;AAC7B,6BAAe,oBAAS,SAAS,EAAE,SAAI;AAC9C,cAAI,AAAa,YAAD,KAAI;AAClB,kBAAO,UAAS;;AAEX,yBAAyC,aAA9B,sBAAW,SAAS,EAAE,SAAI,yBAAM,CAAC;AACf,UAApC,YAAA,AAAU,SAAD,GAAI,AAAS,QAAD,gBAAG,YAAY;;AAEtC,cAAO,UAAS;YACX,KAAI,AAAa,YAAD,KAAI;AACzB,cAAO,UAAS;;AAET,iBAAmB,aAAd,aAAa;AAClB;AAAU;AACb,gBAAI;AACR;AACuD,UAArD,WAAyB,aAAd,aAAa,IAAwB,CAAjB,aAAH,EAAE,iBAAG,aAAa,KAAI;AACP,UAA3C,WAAwC,aAA7B,sBAAW,QAAQ,EAAE,SAAI,yBAAM,CAAC;AAC3C,cAAa,aAAT,QAAQ,IAAG;AACA,YAAb,KAAK,QAAQ;;AAEW,YAAxB,gBAAgB,QAAQ;;iBAEnB,AAAS,AAAM,QAAP,mBACT,CAAF,IAAF,AAAE,CAAC,GAAH;AACJ,cAAO,SAAQ;;IAEnB;SAGmB;AACjB,YAAO,uBAAW,UAAK,GAAG,GAAG,SAAI;IACnC;;mCA3DW,IAAS,IAAS,IAAS;IAF1B;IAED;IAAS;IAAS;IAAS;AAEE,IAAtC,gBAAU;AACV,aAAS,IAAI,GAAG,AAAE,CAAD,OAAsB,IAAF,AAAE,CAAC,GAAH;AACgB,MAAnD,AAAO,qBAAC,CAAC,EAAI,sBAAW,AAAE,CAAD,QAAmB,SAAI;;EAEpD;;;;;;;;;;;;;;;;8CArDuB,IAAW,KAAY;AAC9C,UACqB,EADkD,AAAK,CAArC,AAAK,CAAlC,AAAI,AAAY,MAAV,AAAI,mBAAE,GAAG,IAAG,AAAI,mBAAE,GAAG,kBAAI,EAAE,KAAI,AAAI,AAAM,mBAAJ,GAAG,IAAG,AAAI,mBAAE,GAAG,mBAAK,EAAE,IAClE,AAAI,mBAAE,GAAG,kBACd,EAAE;EACR;0CAGuB,IAAW,KAAY;AAC5C,UAAO,AAAI,AAAgC,AAAK,AAAK,AACd,QADzB,AAAI,AAAY,MAAV,AAAI,mBAAE,GAAG,IAAG,AAAI,mBAAE,GAAG,kBAAI,EAAE,iBAAG,EAAE,IAChD,AAAI,AAA0B,OAAvB,AAAI,AAAM,mBAAJ,GAAG,IAAG,AAAI,mBAAE,GAAG,kBAAI,EAAE,IACjC,AAAI,mBAAE,GAAG;EAChB;kEAEmC,IAAW,SAAgB,KAAY;AACxE,aAAS,IAAI,GAAG,AAAE,CAAD,MAAuB,IAAF,AAAE,CAAC,GAAH;AAC7B,yBAAe,oBAAS,OAAO,EAAE,GAAG,EAAE,GAAG;AAChD,UAAI,AAAa,YAAD,KAAI;AAClB,cAAO,QAAO;;AAET,qBAAyC,aAA9B,sBAAW,OAAO,EAAE,GAAG,EAAE,GAAG,kBAAI,EAAE;AAClB,MAAlC,UAAQ,aAAR,OAAO,IAAI,AAAS,QAAD,gBAAG,YAAY;;AAEpC,UAAO,QAAO;EAChB;;MAhCU,2BAAgB;;;MACb,yBAAc;;;MACd,+BAAoB;;;MACvB,mCAAwB;;;MAExB,0BAAe;;;MACZ,yBAAc","file":"cubic_ease.ddc.js"}');
  // Exports:
  return {
    animation__interpolation__cubic_ease: cubic_ease
  };
});

//# sourceMappingURL=cubic_ease.ddc.js.map
