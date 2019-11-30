define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const trim_path = Object.create(dart.library);
  const CT = Object.create(null);
  trim_path._appendPathSegmentSequential = function _appendPathSegmentSequential(metricsIterator, to, offset, start, stop) {
    let nextOffset = offset;
    do {
      let metric = metricsIterator.current;
      nextOffset = dart.notNull(offset) + dart.notNull(metric.length);
      if (dart.notNull(start) < dart.notNull(nextOffset)) {
        let extracted = metric.extractPath(dart.notNull(start) - dart.notNull(offset), dart.notNull(stop) - dart.notNull(offset));
        if (extracted != null) {
          to.addPath(extracted, ui.Offset.zero);
        }
        if (dart.notNull(stop) < dart.notNull(nextOffset)) {
          break;
        }
      }
      offset = nextOffset;
    } while (dart.test(metricsIterator.moveNext()));
    return offset;
  };
  trim_path._appendPathSegmentSync = function _appendPathSegmentSync(metric, to, offset, start, stop) {
    let nextOffset = dart.notNull(offset) + dart.notNull(metric.length);
    if (dart.notNull(start) < nextOffset) {
      let extracted = metric.extractPath(dart.notNull(start) - dart.notNull(offset), dart.notNull(stop) - dart.notNull(offset));
      if (extracted != null) {
        to.addPath(extracted, ui.Offset.zero);
      }
    }
  };
  trim_path._trimPathSequential = function _trimPathSequential(path, startT, stopT, complement) {
    let result = ui.Path.new();
    let metrics = path.computeMetrics();
    let totalLength = 0.0;
    for (let metric of metrics) {
      totalLength = totalLength + dart.notNull(metric.length);
    }
    metrics = path.computeMetrics();
    let trimStart = totalLength * dart.notNull(startT);
    let trimStop = totalLength * dart.notNull(stopT);
    let offset = 0.0;
    let metricsIterator = metrics.iterator;
    metricsIterator.moveNext();
    if (dart.test(complement)) {
      if (trimStart > 0.0) {
        offset = trim_path._appendPathSegmentSequential(metricsIterator, result, offset, 0.0, trimStart);
      }
      if (trimStop < totalLength) {
        offset = trim_path._appendPathSegmentSequential(metricsIterator, result, offset, trimStop, totalLength);
      }
    } else {
      if (trimStart < trimStop) {
        offset = trim_path._appendPathSegmentSequential(metricsIterator, result, offset, trimStart, trimStop);
      }
    }
    return result;
  };
  trim_path._trimPathSync = function _trimPathSync(path, startT, stopT, complement) {
    let result = ui.Path.new();
    let metrics = path.computeMetrics();
    for (let metric of metrics) {
      let length = metric.length;
      let trimStart = dart.notNull(length) * dart.notNull(startT);
      let trimStop = dart.notNull(length) * dart.notNull(stopT);
      if (dart.test(complement)) {
        if (trimStart > 0.0) {
          trim_path._appendPathSegmentSync(metric, result, 0.0, 0.0, trimStart);
        }
        if (trimStop < dart.notNull(length)) {
          trim_path._appendPathSegmentSync(metric, result, 0.0, trimStop, length);
        }
      } else {
        if (trimStart < trimStop) {
          trim_path._appendPathSegmentSync(metric, result, 0.0, trimStart, trimStop);
        }
      }
    }
    return result;
  };
  trim_path.trimPath = function trimPath(path, startT, stopT, complement, isSequential) {
    if (dart.test(isSequential)) {
      return trim_path._trimPathSequential(path, startT, stopT, complement);
    } else {
      return trim_path._trimPathSync(path, startT, stopT, complement);
    }
  };
  dart.trackLibraries("packages/flare_flutter/trim_path", {
    "package:flare_flutter/trim_path.dart": trim_path
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["trim_path.dart"],"names":[],"mappings":";;;;;;;;iFAIyD,iBAChD,IAAW,QAAe,OAAc;AACxC,qBAAa,MAAM;AAC1B;AACa,mBAAS,AAAgB,eAAD;AACA,MAAnC,aAAoB,aAAP,MAAM,iBAAG,AAAO,MAAD;AAC5B,UAAU,aAAN,KAAK,iBAAG,UAAU;AACf,wBAAY,AAAO,MAAD,aAAmB,aAAN,KAAK,iBAAG,MAAM,GAAO,aAAL,IAAI,iBAAG,MAAM;AACjE,YAAI,SAAS,IAAI;AACmB,UAAlC,AAAG,EAAD,SAAS,SAAS,EAAS;;AAE/B,YAAS,aAAL,IAAI,iBAAG,UAAU;AACnB;;;AAGe,MAAnB,SAAS,UAAU;uBACZ,AAAgB,eAAD;AACxB,UAAO,OAAM;EACf;qEAGe,QAAa,IAAW,QAAe,OAAc;AAC3D,qBAAoB,aAAP,MAAM,iBAAG,AAAO,MAAD;AACnC,QAAU,aAAN,KAAK,IAAG,UAAU;AACf,sBAAY,AAAO,MAAD,aAAmB,aAAN,KAAK,iBAAG,MAAM,GAAO,aAAL,IAAI,iBAAG,MAAM;AACjE,UAAI,SAAS,IAAI;AACmB,QAAlC,AAAG,EAAD,SAAS,SAAS,EAAS;;;EAGnC;+DAGS,MAAa,QAAe,OAAY;AACpC,iBAAS;AAGR,kBAAU,AAAK,IAAD;AACnB,sBAAc;AACrB,aAAsB,SAAU,QAAO;AACT,MAA5B,cAAA,AAAY,WAAD,gBAAI,AAAO,MAAD;;AAIQ,IAA/B,UAAU,AAAK,IAAD;AACP,oBAAY,AAAY,WAAD,gBAAG,MAAM;AAChC,mBAAW,AAAY,WAAD,gBAAG,KAAK;AAC9B,iBAAS;AAEK,0BAAkB,AAAQ,OAAD;AACpB,IAA1B,AAAgB,eAAD;AACf,kBAAI,UAAU;AACZ,UAAI,AAAU,SAAD,GAAG;AAEsC,QADpD,SAAS,uCACL,eAAe,EAAE,MAAM,EAAE,MAAM,EAAE,KAAK,SAAS;;AAErD,UAAI,AAAS,QAAD,GAAG,WAAW;AAEmC,QAD3D,SAAS,uCACL,eAAe,EAAE,MAAM,EAAE,MAAM,EAAE,QAAQ,EAAE,WAAW;;;AAG5D,UAAI,AAAU,SAAD,GAAG,QAAQ;AAEmC,QADzD,SAAS,uCACL,eAAe,EAAE,MAAM,EAAE,MAAM,EAAE,SAAS,EAAE,QAAQ;;;AAI5D,UAAO,OAAM;EACf;mDAEwB,MAAa,QAAe,OAAY;AACnD,iBAAS;AAEF,kBAAU,AAAK,IAAD;AAChC,aAAsB,SAAU,QAAO;AAC9B,mBAAS,AAAO,MAAD;AACf,sBAAmB,aAAP,MAAM,iBAAG,MAAM;AAC3B,qBAAkB,aAAP,MAAM,iBAAG,KAAK;AAEhC,oBAAI,UAAU;AACZ,YAAI,AAAU,SAAD,GAAG;AAC6C,UAA3D,iCAAuB,MAAM,EAAE,MAAM,EAAE,KAAK,KAAK,SAAS;;AAE5D,YAAI,AAAS,QAAD,gBAAG,MAAM;AAC0C,UAA7D,iCAAuB,MAAM,EAAE,MAAM,EAAE,KAAK,QAAQ,EAAE,MAAM;;;AAG9D,YAAI,AAAU,SAAD,GAAG,QAAQ;AAC0C,UAAhE,iCAAuB,MAAM,EAAE,MAAM,EAAE,KAAK,SAAS,EAAE,QAAQ;;;;AAIrE,UAAO,OAAM;EACf;yCAEmB,MAAa,QAAe,OAAY,YAClD;AACP,kBAAI,YAAY;AACd,YAAO,+BAAoB,IAAI,EAAE,MAAM,EAAE,KAAK,EAAE,UAAU;;AAE1D,YAAO,yBAAc,IAAI,EAAE,MAAM,EAAE,KAAK,EAAE,UAAU;;EAExD","file":"trim_path.ddc.js"}');
  // Exports:
  return {
    trim_path: trim_path
  };
});

//# sourceMappingURL=trim_path.ddc.js.map
