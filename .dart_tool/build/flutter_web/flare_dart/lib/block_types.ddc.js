define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const block_types = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constMap(core.String, core.int, ["unknown", 0, "nodes", 1, "node", 2, "bone", 3, "rootBone", 4, "image", 5, "view", 6, "animation", 7, "animations", 8, "atlases", 9, "atlas", 10, "event", 12, "customInt", 13, "customFloat", 14, "customString", 15, "customBoolean", 16, "rectangleCollider", 17, "triangleCollider", 18, "circleCollider", 19, "polygonCollider", 20, "lineCollider", 21, "imageSequence", 22, "solo", 23, "jelly", 28, "jellyBone", 29, "ikConstraint", 30, "distanceConstraint", 31, "translationConstraint", 32, "rotationConstraint", 33, "scaleConstraint", 34, "transformConstraint", 35, "shape", 100, "path", 101, "colorFill", 102, "colorStroke", 103, "gradientFill", 104, "gradientStroke", 105, "radialGradientFill", 106, "radialGradientStroke", 107, "ellipse", 108, "rectangle", 109, "triangle", 110, "star", 111, "polygon", 112, "artboards", 115, "artboard", 114]);
    }
  });
  block_types.BlockTypes = class BlockTypes extends core.Object {};
  (block_types.BlockTypes.new = function() {
    ;
  }).prototype = block_types.BlockTypes.prototype;
  dart.addTypeTests(block_types.BlockTypes);
  dart.setLibraryUri(block_types.BlockTypes, "package:flare_dart/block_types.dart");
  dart.defineLazy(block_types.BlockTypes, {
    /*block_types.BlockTypes.unknown*/get unknown() {
      return 0;
    },
    /*block_types.BlockTypes.components*/get components() {
      return 1;
    },
    /*block_types.BlockTypes.actorNode*/get actorNode() {
      return 2;
    },
    /*block_types.BlockTypes.actorBone*/get actorBone() {
      return 3;
    },
    /*block_types.BlockTypes.actorRootBone*/get actorRootBone() {
      return 4;
    },
    /*block_types.BlockTypes.actorImage*/get actorImage() {
      return 5;
    },
    /*block_types.BlockTypes.view*/get view() {
      return 6;
    },
    /*block_types.BlockTypes.animation*/get animation() {
      return 7;
    },
    /*block_types.BlockTypes.animations*/get animations() {
      return 8;
    },
    /*block_types.BlockTypes.atlases*/get atlases() {
      return 9;
    },
    /*block_types.BlockTypes.atlas*/get atlas() {
      return 10;
    },
    /*block_types.BlockTypes.actorIKTarget*/get actorIKTarget() {
      return 11;
    },
    /*block_types.BlockTypes.actorEvent*/get actorEvent() {
      return 12;
    },
    /*block_types.BlockTypes.customIntProperty*/get customIntProperty() {
      return 13;
    },
    /*block_types.BlockTypes.customFloatProperty*/get customFloatProperty() {
      return 14;
    },
    /*block_types.BlockTypes.customStringProperty*/get customStringProperty() {
      return 15;
    },
    /*block_types.BlockTypes.customBooleanProperty*/get customBooleanProperty() {
      return 16;
    },
    /*block_types.BlockTypes.actorColliderRectangle*/get actorColliderRectangle() {
      return 17;
    },
    /*block_types.BlockTypes.actorColliderTriangle*/get actorColliderTriangle() {
      return 18;
    },
    /*block_types.BlockTypes.actorColliderCircle*/get actorColliderCircle() {
      return 19;
    },
    /*block_types.BlockTypes.actorColliderPolygon*/get actorColliderPolygon() {
      return 20;
    },
    /*block_types.BlockTypes.actorColliderLine*/get actorColliderLine() {
      return 21;
    },
    /*block_types.BlockTypes.actorImageSequence*/get actorImageSequence() {
      return 22;
    },
    /*block_types.BlockTypes.actorNodeSolo*/get actorNodeSolo() {
      return 23;
    },
    /*block_types.BlockTypes.jellyComponent*/get jellyComponent() {
      return 28;
    },
    /*block_types.BlockTypes.actorJellyBone*/get actorJellyBone() {
      return 29;
    },
    /*block_types.BlockTypes.actorIKConstraint*/get actorIKConstraint() {
      return 30;
    },
    /*block_types.BlockTypes.actorDistanceConstraint*/get actorDistanceConstraint() {
      return 31;
    },
    /*block_types.BlockTypes.actorTranslationConstraint*/get actorTranslationConstraint() {
      return 32;
    },
    /*block_types.BlockTypes.actorRotationConstraint*/get actorRotationConstraint() {
      return 33;
    },
    /*block_types.BlockTypes.actorScaleConstraint*/get actorScaleConstraint() {
      return 34;
    },
    /*block_types.BlockTypes.actorTransformConstraint*/get actorTransformConstraint() {
      return 35;
    },
    /*block_types.BlockTypes.actorShape*/get actorShape() {
      return 100;
    },
    /*block_types.BlockTypes.actorPath*/get actorPath() {
      return 101;
    },
    /*block_types.BlockTypes.colorFill*/get colorFill() {
      return 102;
    },
    /*block_types.BlockTypes.colorStroke*/get colorStroke() {
      return 103;
    },
    /*block_types.BlockTypes.gradientFill*/get gradientFill() {
      return 104;
    },
    /*block_types.BlockTypes.gradientStroke*/get gradientStroke() {
      return 105;
    },
    /*block_types.BlockTypes.radialGradientFill*/get radialGradientFill() {
      return 106;
    },
    /*block_types.BlockTypes.radialGradientStroke*/get radialGradientStroke() {
      return 107;
    },
    /*block_types.BlockTypes.actorEllipse*/get actorEllipse() {
      return 108;
    },
    /*block_types.BlockTypes.actorRectangle*/get actorRectangle() {
      return 109;
    },
    /*block_types.BlockTypes.actorTriangle*/get actorTriangle() {
      return 110;
    },
    /*block_types.BlockTypes.actorStar*/get actorStar() {
      return 111;
    },
    /*block_types.BlockTypes.actorPolygon*/get actorPolygon() {
      return 112;
    },
    /*block_types.BlockTypes.actorSkin*/get actorSkin() {
      return 113;
    },
    /*block_types.BlockTypes.actorArtboard*/get actorArtboard() {
      return 114;
    },
    /*block_types.BlockTypes.artboards*/get artboards() {
      return 115;
    }
  });
  let C0;
  dart.defineLazy(block_types, {
    /*block_types.blockTypesMap*/get blockTypesMap() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/flare_dart/block_types", {
    "package:flare_dart/block_types.dart": block_types
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["block_types.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;EAkGA;;;;MAhDmB,8BAAO;;;MACP,iCAAU;;;MACV,gCAAS;;;MACT,gCAAS;;;MACT,oCAAa;;;MACb,iCAAU;;;MACV,2BAAI;;;MACJ,gCAAS;;;MACT,iCAAU;;;MACV,8BAAO;;;MACP,4BAAK;;;MACL,oCAAa;;;MACb,iCAAU;;;MACV,wCAAiB;;;MACjB,0CAAmB;;;MACnB,2CAAoB;;;MACpB,4CAAqB;;;MACrB,6CAAsB;;;MACtB,4CAAqB;;;MACrB,0CAAmB;;;MACnB,2CAAoB;;;MACpB,wCAAiB;;;MACjB,yCAAkB;;;MAClB,oCAAa;;;MACb,qCAAc;;;MACd,qCAAc;;;MACd,wCAAiB;;;MACjB,8CAAuB;;;MACvB,iDAA0B;;;MAC1B,8CAAuB;;;MACvB,2CAAoB;;;MACpB,+CAAwB;;;MACxB,iCAAU;;;MACV,gCAAS;;;MACT,gCAAS;;;MACT,kCAAW;;;MACX,mCAAY;;;MACZ,qCAAc;;;MACd,yCAAkB;;;MAClB,2CAAoB;;;MACpB,mCAAY;;;MACZ,qCAAc;;;MACd,oCAAa;;;MACb,gCAAS;;;MACT,mCAAY;;;MACZ,gCAAS;;;MACT,oCAAa;;;MACb,gCAAS;;;;;;MAjGL,yBAAa","file":"block_types.ddc.js"}');
  // Exports:
  return {
    block_types: block_types
  };
});

//# sourceMappingURL=block_types.ddc.js.map
