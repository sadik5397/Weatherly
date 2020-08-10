define(['dart_sdk', 'packages/flare_dart/math/mat2d', 'packages/flare_dart/block_types', 'packages/flare_dart/math/aabb', 'packages/flare_dart/binary_reader', 'packages/flare_dart/animation/property_types', 'packages/flare_dart/animation/interpolation/hold', 'packages/flare_dart/animation/interpolation/linear', 'packages/flare_dart/animation/interpolation/cubic', 'packages/flare_dart/animation/interpolation/interpolator', 'packages/flare_dart/path_point'], function(dart_sdk, packages__flare_dart__math__mat2d, packages__flare_dart__block_types, packages__flare_dart__math__aabb, packages__flare_dart__binary_reader, packages__flare_dart__animation__property_types, packages__flare_dart__animation__interpolation__hold, packages__flare_dart__animation__interpolation__linear, packages__flare_dart__animation__interpolation__cubic, packages__flare_dart__animation__interpolation__interpolator, packages__flare_dart__path_point) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _native_typed_data = dart_sdk._native_typed_data;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const mat2d = packages__flare_dart__math__mat2d.math__mat2d;
  const vec2d = packages__flare_dart__math__mat2d.math__vec2d;
  const transform_components = packages__flare_dart__math__mat2d.math__transform_components;
  const block_types = packages__flare_dart__block_types.block_types;
  const aabb$ = packages__flare_dart__math__aabb.math__aabb;
  const stream_reader = packages__flare_dart__binary_reader.stream_reader;
  const property_types = packages__flare_dart__animation__property_types.animation__property_types;
  const hold = packages__flare_dart__animation__interpolation__hold.animation__interpolation__hold;
  const linear = packages__flare_dart__animation__interpolation__linear.animation__interpolation__linear;
  const cubic = packages__flare_dart__animation__interpolation__cubic.animation__interpolation__cubic;
  const interpolator = packages__flare_dart__animation__interpolation__interpolator.animation__interpolation__interpolator;
  const path_point = packages__flare_dart__path_point.path_point;
  const actor_node = Object.create(dart.library);
  const actor_constraint = Object.create(dart.library);
  const actor_component = Object.create(dart.library);
  const actor_artboard = Object.create(dart.library);
  const jelly_component = Object.create(dart.library);
  const actor_root_bone = Object.create(dart.library);
  const actor_bone = Object.create(dart.library);
  const actor_bone_base = Object.create(dart.library);
  const actor_jelly_bone = Object.create(dart.library);
  const dependency_sorter = Object.create(dart.library);
  const actor_animation = Object.create(dart.library);
  const keyframe = Object.create(dart.library);
  const actor_star = Object.create(dart.library);
  const actor_path = Object.create(dart.library);
  const actor_skinnable = Object.create(dart.library);
  const actor_skin = Object.create(dart.library);
  const actor_shape = Object.create(dart.library);
  const actor_drawable = Object.create(dart.library);
  const actor_color = Object.create(dart.library);
  const actor_rectangle = Object.create(dart.library);
  const actor_node_solo = Object.create(dart.library);
  const actor_image = Object.create(dart.library);
  const actor_event = Object.create(dart.library);
  const actor_triangle = Object.create(dart.library);
  const actor_translation_constraint = Object.create(dart.library);
  const actor_axis_constraint = Object.create(dart.library);
  const actor_targeted_constraint = Object.create(dart.library);
  const actor_transform_constraint = Object.create(dart.library);
  const actor_scale_constraint = Object.create(dart.library);
  const actor_rotation_constraint = Object.create(dart.library);
  const actor_polygon = Object.create(dart.library);
  const actor_ik_constraint = Object.create(dart.library);
  const actor_ellipse = Object.create(dart.library);
  const actor_distance_constraint = Object.create(dart.library);
  const actor = Object.create(dart.library);
  const $add = dartx.add;
  const $_set = dartx._set;
  const $remove = dartx.remove;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $contains = dartx.contains;
  const $plus = dartx['+'];
  const $compareTo = dartx.compareTo;
  const $sort = dartx.sort;
  const $abs = dartx.abs;
  const $toDouble = dartx.toDouble;
  const $insert = dartx.insert;
  const $isEmpty = dartx.isEmpty;
  const $rightShift = dartx['>>'];
  const $isNaN = dartx.isNaN;
  const $toInt = dartx.toInt;
  const $modulo = dartx['%'];
  const $floor = dartx.floor;
  const $fold = dartx.fold;
  const $isNotEmpty = dartx.isNotEmpty;
  const $first = dartx.first;
  const $toString = dartx.toString;
  const $firstWhere = dartx.firstWhere;
  const $lengthInBytes = dartx.lengthInBytes;
  const $getUint8 = dartx.getUint8;
  const $buffer = dartx.buffer;
  const $asUint8List = dartx.asUint8List;
  let ListOfActorClip = () => (ListOfActorClip = dart.constFn(core.List$(actor_node.ActorClip)))();
  let JSArrayOfListOfActorClip = () => (JSArrayOfListOfActorClip = dart.constFn(_interceptors.JSArray$(ListOfActorClip())))();
  let JSArrayOfActorNode = () => (JSArrayOfActorNode = dart.constFn(_interceptors.JSArray$(actor_node.ActorNode)))();
  let JSArrayOfActorConstraint = () => (JSArrayOfActorConstraint = dart.constFn(_interceptors.JSArray$(actor_constraint.ActorConstraint)))();
  let JSArrayOfActorComponent = () => (JSArrayOfActorComponent = dart.constFn(_interceptors.JSArray$(actor_component.ActorComponent)))();
  let ListOfActorComponent = () => (ListOfActorComponent = dart.constFn(core.List$(actor_component.ActorComponent)))();
  let ListOfActorNode = () => (ListOfActorNode = dart.constFn(core.List$(actor_node.ActorNode)))();
  let ListOfActorDrawable = () => (ListOfActorDrawable = dart.constFn(core.List$(actor_drawable.ActorDrawable)))();
  let ActorDrawableAndActorDrawableToint = () => (ActorDrawableAndActorDrawableToint = dart.constFn(dart.fnType(core.int, [actor_drawable.ActorDrawable, actor_drawable.ActorDrawable])))();
  let ListOfActorAnimation = () => (ListOfActorAnimation = dart.constFn(core.List$(actor_animation.ActorAnimation)))();
  let ListOfVec2D = () => (ListOfVec2D = dart.constFn(core.List$(vec2d.Vec2D)))();
  let JSArrayOfVec2D = () => (JSArrayOfVec2D = dart.constFn(_interceptors.JSArray$(vec2d.Vec2D)))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let LinkedHashSetOfActorConstraint = () => (LinkedHashSetOfActorConstraint = dart.constFn(collection.LinkedHashSet$(actor_constraint.ActorConstraint)))();
  let JSArrayOfActorJellyBone = () => (JSArrayOfActorJellyBone = dart.constFn(_interceptors.JSArray$(actor_jelly_bone.ActorJellyBone)))();
  let _HashSetOfActorComponent = () => (_HashSetOfActorComponent = dart.constFn(collection._HashSet$(actor_component.ActorComponent)))();
  let StreamReaderAndActorComponentToKeyFrame = () => (StreamReaderAndActorComponentToKeyFrame = dart.constFn(dart.fnType(keyframe.KeyFrame, [stream_reader.StreamReader, actor_component.ActorComponent])))();
  let ListOfKeyFrame = () => (ListOfKeyFrame = dart.constFn(core.List$(keyframe.KeyFrame)))();
  let ListOfPropertyAnimation = () => (ListOfPropertyAnimation = dart.constFn(core.List$(actor_animation.PropertyAnimation)))();
  let ListOfComponentAnimation = () => (ListOfComponentAnimation = dart.constFn(core.List$(actor_animation.ComponentAnimation)))();
  let ListOfDrawOrderIndex = () => (ListOfDrawOrderIndex = dart.constFn(core.List$(keyframe.DrawOrderIndex)))();
  let intAndPathPointToint = () => (intAndPathPointToint = dart.constFn(dart.fnType(core.int, [core.int, path_point.PathPoint])))();
  let HashMapOfint$InterpolationTypes = () => (HashMapOfint$InterpolationTypes = dart.constFn(collection.HashMap$(core.int, keyframe.InterpolationTypes)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfInterpolationTypes = () => (JSArrayOfInterpolationTypes = dart.constFn(_interceptors.JSArray$(keyframe.InterpolationTypes)))();
  let JSArrayOfPathPoint = () => (JSArrayOfPathPoint = dart.constFn(_interceptors.JSArray$(path_point.PathPoint)))();
  let ListOfPathPoint = () => (ListOfPathPoint = dart.constFn(core.List$(path_point.PathPoint)))();
  let ListOfSkinnedBone = () => (ListOfSkinnedBone = dart.constFn(core.List$(actor_skinnable.SkinnedBone)))();
  let JSArrayOfActorBasePath = () => (JSArrayOfActorBasePath = dart.constFn(_interceptors.JSArray$(actor_path.ActorBasePath)))();
  let JSArrayOfActorStroke = () => (JSArrayOfActorStroke = dart.constFn(_interceptors.JSArray$(actor_color.ActorStroke)))();
  let JSArrayOfActorFill = () => (JSArrayOfActorFill = dart.constFn(_interceptors.JSArray$(actor_color.ActorFill)))();
  let ListOfClipShape = () => (ListOfClipShape = dart.constFn(core.List$(actor_drawable.ClipShape)))();
  let JSArrayOfListOfClipShape = () => (JSArrayOfListOfClipShape = dart.constFn(_interceptors.JSArray$(ListOfClipShape())))();
  let JSArrayOfClipShape = () => (JSArrayOfClipShape = dart.constFn(_interceptors.JSArray$(actor_drawable.ClipShape)))();
  let ActorNodeTobool = () => (ActorNodeTobool = dart.constFn(dart.fnType(core.bool, [actor_node.ActorNode])))();
  let HashMapOfint$FillRule = () => (HashMapOfint$FillRule = dart.constFn(collection.HashMap$(core.int, actor_color.FillRule)))();
  let JSArrayOfFillRule = () => (JSArrayOfFillRule = dart.constFn(_interceptors.JSArray$(actor_color.FillRule)))();
  let HashMapOfint$StrokeCap = () => (HashMapOfint$StrokeCap = dart.constFn(collection.HashMap$(core.int, actor_color.StrokeCap)))();
  let JSArrayOfStrokeCap = () => (JSArrayOfStrokeCap = dart.constFn(_interceptors.JSArray$(actor_color.StrokeCap)))();
  let HashMapOfint$StrokeJoin = () => (HashMapOfint$StrokeJoin = dart.constFn(collection.HashMap$(core.int, actor_color.StrokeJoin)))();
  let JSArrayOfStrokeJoin = () => (JSArrayOfStrokeJoin = dart.constFn(_interceptors.JSArray$(actor_color.StrokeJoin)))();
  let HashMapOfint$TrimPath = () => (HashMapOfint$TrimPath = dart.constFn(collection.HashMap$(core.int, actor_color.TrimPath)))();
  let JSArrayOfTrimPath = () => (JSArrayOfTrimPath = dart.constFn(_interceptors.JSArray$(actor_color.TrimPath)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let ListOfBoneChain = () => (ListOfBoneChain = dart.constFn(core.List$(actor_ik_constraint.BoneChain)))();
  let JSArrayOfBoneChain = () => (JSArrayOfBoneChain = dart.constFn(_interceptors.JSArray$(actor_ik_constraint.BoneChain)))();
  let BoneChainTobool = () => (BoneChainTobool = dart.constFn(dart.fnType(core.bool, [actor_ik_constraint.BoneChain])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ListOfInfluencedBone = () => (ListOfInfluencedBone = dart.constFn(core.List$(actor_ik_constraint.InfluencedBone)))();
  let ActorArtboardTobool = () => (ActorArtboardTobool = dart.constFn(dart.fnType(core.bool, [actor_artboard.ActorArtboard])))();
  let ListOfActorArtboard = () => (ListOfActorArtboard = dart.constFn(core.List$(actor_artboard.ActorArtboard)))();
  let FutureOfUint8List = () => (FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))();
  let ListOfFutureOfUint8List = () => (ListOfFutureOfUint8List = dart.constFn(core.List$(FutureOfUint8List())))();
  let ListOfUint8List = () => (ListOfUint8List = dart.constFn(core.List$(typed_data.Uint8List)))();
  let CompleterOfListOfUint8List = () => (CompleterOfListOfUint8List = dart.constFn(async.Completer$(ListOfUint8List())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(keyframe.KeyFramePosX.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C1() {
      return C1 = dart.fn(keyframe.KeyFramePosY.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C2() {
      return C2 = dart.fn(keyframe.KeyFrameScaleX.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C3() {
      return C3 = dart.fn(keyframe.KeyFrameScaleY.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C4() {
      return C4 = dart.fn(keyframe.KeyFrameRotation.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C5() {
      return C5 = dart.fn(keyframe.KeyFrameOpacity.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C6() {
      return C6 = dart.fn(keyframe.KeyFrameDrawOrder.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C7() {
      return C7 = dart.fn(keyframe.KeyFrameLength.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C8() {
      return C8 = dart.fn(keyframe.KeyFrameImageVertices.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C9() {
      return C9 = dart.fn(keyframe.KeyFrameConstraintStrength.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C10() {
      return C10 = dart.fn(keyframe.KeyFrameTrigger.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C11() {
      return C11 = dart.fn(keyframe.KeyFrameIntProperty.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C12() {
      return C12 = dart.fn(keyframe.KeyFrameFloatProperty.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C13() {
      return C13 = dart.fn(keyframe.KeyFrameStringProperty.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C14() {
      return C14 = dart.fn(keyframe.KeyFrameBooleanProperty.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C15() {
      return C15 = dart.fn(keyframe.KeyFrameCollisionEnabledProperty.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C16() {
      return C16 = dart.fn(keyframe.KeyFrameActiveChild.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C17() {
      return C17 = dart.fn(keyframe.KeyFrameSequence.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C18() {
      return C18 = dart.fn(keyframe.KeyFramePathVertices.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C19() {
      return C19 = dart.fn(keyframe.KeyFrameFillColor.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C20() {
      return C20 = dart.fn(keyframe.KeyFrameGradient.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C21() {
      return C21 = dart.fn(keyframe.KeyFrameRadial.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C22() {
      return C22 = dart.fn(keyframe.KeyFrameStrokeColor.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C23() {
      return C23 = dart.fn(keyframe.KeyFrameStrokeWidth.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C24() {
      return C24 = dart.fn(keyframe.KeyFramePaintOpacity.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C25() {
      return C25 = dart.fn(keyframe.KeyFrameShapeWidth.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C26() {
      return C26 = dart.fn(keyframe.KeyFrameShapeHeight.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C27() {
      return C27 = dart.fn(keyframe.KeyFrameCornerRadius.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C28() {
      return C28 = dart.fn(keyframe.KeyFrameInnerRadius.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C29() {
      return C29 = dart.fn(keyframe.KeyFrameStrokeStart.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C30() {
      return C30 = dart.fn(keyframe.KeyFrameStrokeEnd.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C31() {
      return C31 = dart.fn(keyframe.KeyFrameStrokeOffset.read, StreamReaderAndActorComponentToKeyFrame());
    },
    get C32() {
      return C32 = dart.const({
        __proto__: keyframe.InterpolationTypes.prototype,
        [_name$1]: "InterpolationTypes.hold",
        index: 0
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: keyframe.InterpolationTypes.prototype,
        [_name$1]: "InterpolationTypes.linear",
        index: 1
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: keyframe.InterpolationTypes.prototype,
        [_name$1]: "InterpolationTypes.cubic",
        index: 2
      });
    },
    get C35() {
      return C35 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], keyframe.InterpolationTypes);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: path_point.PointType.prototype,
        [_name$2]: "PointType.straight",
        index: 0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_name$3]: "BlendModes.normal",
        index: 0
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_name$3]: "BlendModes.multiply",
        index: 1
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_name$3]: "BlendModes.screen",
        index: 2
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: actor_drawable.BlendModes.prototype,
        [_name$3]: "BlendModes.additive",
        index: 3
      });
    },
    get C41() {
      return C41 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], actor_drawable.BlendModes);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_name$4]: "FillRule.evenOdd",
        index: 0
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_name$4]: "FillRule.nonZero",
        index: 1
      });
    },
    get C44() {
      return C44 = dart.constList([C42 || CT.C42, C43 || CT.C43], actor_color.FillRule);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_name$4]: "StrokeCap.butt",
        index: 0
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_name$4]: "StrokeCap.round",
        index: 1
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_name$4]: "StrokeCap.square",
        index: 2
      });
    },
    get C48() {
      return C48 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47], actor_color.StrokeCap);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_name$4]: "StrokeJoin.miter",
        index: 0
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_name$4]: "StrokeJoin.round",
        index: 1
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_name$4]: "StrokeJoin.bevel",
        index: 2
      });
    },
    get C52() {
      return C52 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], actor_color.StrokeJoin);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: actor_color.TrimPath.prototype,
        [_name$4]: "TrimPath.off",
        index: 0
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: actor_color.TrimPath.prototype,
        [_name$4]: "TrimPath.sequential",
        index: 1
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: actor_color.TrimPath.prototype,
        [_name$4]: "TrimPath.synced",
        index: 2
      });
    },
    get C56() {
      return C56 = dart.constList([C53 || CT.C53, C54 || CT.C54, C55 || CT.C55], actor_color.TrimPath);
    }
  });
  const clipIdx$ = dart.privateName(actor_node, "ActorClip.clipIdx");
  const intersect = dart.privateName(actor_node, "ActorClip.intersect");
  const node = dart.privateName(actor_node, "ActorClip.node");
  actor_node.ActorClip = class ActorClip extends core.Object {
    get clipIdx() {
      return this[clipIdx$];
    }
    set clipIdx(value) {
      this[clipIdx$] = value;
    }
    get intersect() {
      return this[intersect];
    }
    set intersect(value) {
      this[intersect] = value;
    }
    get node() {
      return this[node];
    }
    set node(value) {
      this[node] = value;
    }
  };
  (actor_node.ActorClip.new = function(clipIdx) {
    this[intersect] = true;
    this[node] = null;
    this[clipIdx$] = clipIdx;
    ;
  }).prototype = actor_node.ActorClip.prototype;
  (actor_node.ActorClip.copy = function(from) {
    this[intersect] = true;
    this[node] = null;
    this[clipIdx$] = from.clipIdx;
    this[intersect] = from.intersect;
    ;
  }).prototype = actor_node.ActorClip.prototype;
  dart.addTypeTests(actor_node.ActorClip);
  dart.setLibraryUri(actor_node.ActorClip, "package:flare_dart/actor_node.dart");
  dart.setFieldSignature(actor_node.ActorClip, () => ({
    __proto__: dart.getFields(actor_node.ActorClip.__proto__),
    clipIdx: dart.fieldType(core.int),
    intersect: dart.fieldType(core.bool),
    node: dart.fieldType(actor_node.ActorNode)
  }));
  const _children = dart.privateName(actor_node, "_children");
  const _transform = dart.privateName(actor_node, "_transform");
  const _worldTransform = dart.privateName(actor_node, "_worldTransform");
  const _translation = dart.privateName(actor_node, "_translation");
  const _rotation = dart.privateName(actor_node, "_rotation");
  const _scale = dart.privateName(actor_node, "_scale");
  const _opacity = dart.privateName(actor_node, "_opacity");
  const _renderOpacity = dart.privateName(actor_node, "_renderOpacity");
  const _overrideWorldTransform = dart.privateName(actor_node, "_overrideWorldTransform");
  const _isCollapsedVisibility = dart.privateName(actor_node, "_isCollapsedVisibility");
  const _renderCollapsed = dart.privateName(actor_node, "_renderCollapsed");
  const _clips = dart.privateName(actor_node, "_clips");
  const _constraints = dart.privateName(actor_node, "_constraints");
  const _peerConstraints = dart.privateName(actor_node, "_peerConstraints");
  const _name = dart.privateName(actor_component, "_name");
  const _parentIdx = dart.privateName(actor_component, "_parentIdx");
  const parent = dart.privateName(actor_component, "ActorComponent.parent");
  const artboard$ = dart.privateName(actor_component, "ActorComponent.artboard");
  const idx = dart.privateName(actor_component, "ActorComponent.idx");
  const graphOrder = dart.privateName(actor_component, "ActorComponent.graphOrder");
  const dirtMask = dart.privateName(actor_component, "ActorComponent.dirtMask");
  const dependents = dart.privateName(actor_component, "ActorComponent.dependents");
  actor_component.ActorComponent = class ActorComponent extends core.Object {
    get parent() {
      return this[parent];
    }
    set parent(value) {
      this[parent] = value;
    }
    get artboard() {
      return this[artboard$];
    }
    set artboard(value) {
      this[artboard$] = value;
    }
    get idx() {
      return this[idx];
    }
    set idx(value) {
      this[idx] = value;
    }
    get graphOrder() {
      return this[graphOrder];
    }
    set graphOrder(value) {
      this[graphOrder] = value;
    }
    get dirtMask() {
      return this[dirtMask];
    }
    set dirtMask(value) {
      this[dirtMask] = value;
    }
    get dependents() {
      return this[dependents];
    }
    set dependents(value) {
      this[dependents] = value;
    }
    get name() {
      return this[_name];
    }
    resolveComponentIndices(components) {
      let node = actor_node.ActorNode.as(components[$_get](this[_parentIdx]));
      if (node != null) {
        if (actor_node.ActorNode.is(this)) {
          node.addChild(actor_node.ActorNode.as(this));
        } else {
          this.parent = node;
        }
        this.artboard.addDependency(this, node);
      }
    }
    static read(artboard, reader, component) {
      component.artboard = artboard;
      component[_name] = reader.readString("name");
      component[_parentIdx] = reader.readId("parent");
      return component;
    }
    copyComponent(component, resetArtboard) {
      this[_name] = component[_name];
      this.artboard = resetArtboard;
      this[_parentIdx] = component[_parentIdx];
      this.idx = component.idx;
    }
  };
  (actor_component.ActorComponent.new = function() {
    this[_name] = "Unnamed";
    this[parent] = null;
    this[_parentIdx] = 0;
    this[idx] = 0;
    this[graphOrder] = 0;
    this[dirtMask] = 0;
    this[dependents] = null;
    this[artboard$] = null;
    ;
  }).prototype = actor_component.ActorComponent.prototype;
  (actor_component.ActorComponent.withArtboard = function(artboard) {
    this[_name] = "Unnamed";
    this[parent] = null;
    this[_parentIdx] = 0;
    this[idx] = 0;
    this[graphOrder] = 0;
    this[dirtMask] = 0;
    this[dependents] = null;
    this[artboard$] = artboard;
    ;
  }).prototype = actor_component.ActorComponent.prototype;
  dart.addTypeTests(actor_component.ActorComponent);
  dart.setMethodSignature(actor_component.ActorComponent, () => ({
    __proto__: dart.getMethods(actor_component.ActorComponent.__proto__),
    resolveComponentIndices: dart.fnType(dart.void, [core.List$(actor_component.ActorComponent)]),
    copyComponent: dart.fnType(dart.void, [actor_component.ActorComponent, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_component.ActorComponent, () => ({
    __proto__: dart.getGetters(actor_component.ActorComponent.__proto__),
    name: core.String
  }));
  dart.setLibraryUri(actor_component.ActorComponent, "package:flare_dart/actor_component.dart");
  dart.setFieldSignature(actor_component.ActorComponent, () => ({
    __proto__: dart.getFields(actor_component.ActorComponent.__proto__),
    [_name]: dart.fieldType(core.String),
    parent: dart.fieldType(actor_node.ActorNode),
    artboard: dart.fieldType(actor_artboard.ActorArtboard),
    [_parentIdx]: dart.fieldType(core.int),
    idx: dart.fieldType(core.int),
    graphOrder: dart.fieldType(core.int),
    dirtMask: dart.fieldType(core.int),
    dependents: dart.fieldType(core.List$(actor_component.ActorComponent))
  }));
  actor_node.ActorNode = class ActorNode extends actor_component.ActorComponent {
    get transform() {
      return this[_transform];
    }
    get clips() {
      return this[_clips];
    }
    get worldTransformOverride() {
      return dart.test(this[_overrideWorldTransform]) ? this[_worldTransform] : null;
    }
    set worldTransformOverride(value) {
      if (value == null) {
        this[_overrideWorldTransform] = false;
      } else {
        this[_overrideWorldTransform] = true;
        mat2d.Mat2D.copy(this.worldTransform, value);
      }
      this.markTransformDirty();
    }
    get worldTransform() {
      return this[_worldTransform];
    }
    set worldTransform(value) {
      mat2d.Mat2D.copy(this[_worldTransform], value);
    }
    get x() {
      return this[_translation]._get(0);
    }
    set x(value) {
      if (this[_translation]._get(0) == value) {
        return;
      }
      this[_translation]._set(0, value);
      this.markTransformDirty();
    }
    get y() {
      return this[_translation]._get(1);
    }
    set y(value) {
      if (this[_translation]._get(1) == value) {
        return;
      }
      this[_translation]._set(1, value);
      this.markTransformDirty();
    }
    get translation() {
      return new vec2d.Vec2D.clone(this[_translation]);
    }
    set translation(value) {
      vec2d.Vec2D.copy(this[_translation], value);
      this.markTransformDirty();
    }
    get rotation() {
      return this[_rotation];
    }
    set rotation(value) {
      if (this[_rotation] == value) {
        return;
      }
      this[_rotation] = value;
      this.markTransformDirty();
    }
    get scaleX() {
      return this[_scale]._get(0);
    }
    set scaleX(value) {
      if (this[_scale]._get(0) == value) {
        return;
      }
      this[_scale]._set(0, value);
      this.markTransformDirty();
    }
    get scaleY() {
      return this[_scale]._get(1);
    }
    set scaleY(value) {
      if (this[_scale]._get(1) == value) {
        return;
      }
      this[_scale]._set(1, value);
      this.markTransformDirty();
    }
    get opacity() {
      return this[_opacity];
    }
    set opacity(value) {
      if (this[_opacity] == value) {
        return;
      }
      this[_opacity] = value;
      this.markTransformDirty();
    }
    get renderOpacity() {
      return this[_renderOpacity];
    }
    get renderCollapsed() {
      return this[_renderCollapsed];
    }
    get collapsedVisibility() {
      return this[_isCollapsedVisibility];
    }
    set collapsedVisibility(value) {
      if (!dart.equals(this[_isCollapsedVisibility], value)) {
        this[_isCollapsedVisibility] = value;
        this.markTransformDirty();
      }
    }
    get allClips() {
      let all = JSArrayOfListOfActorClip().of([]);
      let clipSearch = this;
      while (clipSearch != null) {
        if (clipSearch.clips != null) {
          all[$add](clipSearch.clips);
        }
        clipSearch = clipSearch.parent;
      }
      return all;
    }
    markTransformDirty() {
      if (this.artboard == null) {
        return;
      }
      if (!dart.test(this.artboard.addDirt(this, 1, false))) {
        return;
      }
      this.artboard.addDirt(this, 2, true);
    }
    updateTransform() {
      mat2d.Mat2D.fromRotation(this[_transform], this[_rotation]);
      this[_transform]._set(4, this[_translation]._get(0));
      this[_transform]._set(5, this[_translation]._get(1));
      mat2d.Mat2D.scale(this[_transform], this[_transform], this[_scale]);
    }
    getWorldTranslation(vec) {
      vec._set(0, this[_worldTransform]._get(4));
      vec._set(1, this[_worldTransform]._get(5));
      return vec;
    }
    updateWorldTransform() {
      this[_renderOpacity] = this[_opacity];
      if (this.parent != null) {
        this[_renderCollapsed] = dart.test(this[_isCollapsedVisibility]) || dart.test(this.parent[_renderCollapsed]);
        this[_renderOpacity] = dart.notNull(this[_renderOpacity]) * dart.notNull(this.parent[_renderOpacity]);
        if (!dart.test(this[_overrideWorldTransform])) {
          mat2d.Mat2D.multiply(this[_worldTransform], this.parent[_worldTransform], this[_transform]);
        }
      } else {
        mat2d.Mat2D.copy(this[_worldTransform], this[_transform]);
      }
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_node.ActorNode.new() : null;
      actor_component.ActorComponent.read(artboard, reader, node);
      vec2d.Vec2D.copyFromList(node[_translation], reader.readFloat32Array(2, "translation"));
      node[_rotation] = reader.readFloat32("rotation");
      vec2d.Vec2D.copyFromList(node[_scale], reader.readFloat32Array(2, "scale"));
      node[_opacity] = reader.readFloat32("opacity");
      node[_isCollapsedVisibility] = reader.readBool("isCollapsed");
      reader.openArray("clips");
      let clipCount = reader.readUint8Length();
      if (dart.notNull(clipCount) > 0) {
        node[_clips] = ListOfActorClip().new(clipCount);
        for (let i = 0; i < dart.notNull(clipCount); i = i + 1) {
          reader.openObject("clip");
          let clip = new actor_node.ActorClip.new(reader.readId("node"));
          if (dart.notNull(artboard.actor.version) >= 23) {
            clip.intersect = reader.readBool("intersect");
          }
          reader.closeObject();
          node[_clips][$_set](i, clip);
        }
      }
      reader.closeArray();
      return node;
    }
    addChild(node) {
      if (node.parent != null) {
        node.parent[_children][$remove](node);
      }
      node.parent = this;
      this[_children] == null ? this[_children] = JSArrayOfActorNode().of([]) : null;
      this[_children][$add](node);
    }
    get children() {
      return this[_children];
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_node.ActorNode.new();
      instanceNode.copyNode(this, resetArtboard);
      return instanceNode;
    }
    copyNode(node, resetArtboard) {
      this.copyComponent(node, resetArtboard);
      this[_transform] = new mat2d.Mat2D.clone(node[_transform]);
      this[_worldTransform] = new mat2d.Mat2D.clone(node[_worldTransform]);
      this[_translation] = new vec2d.Vec2D.clone(node[_translation]);
      this[_scale] = new vec2d.Vec2D.clone(node[_scale]);
      this[_rotation] = node[_rotation];
      this[_opacity] = node[_opacity];
      this[_renderOpacity] = node[_renderOpacity];
      this[_overrideWorldTransform] = node[_overrideWorldTransform];
      if (node[_clips] != null) {
        this[_clips] = ListOfActorClip().new(node[_clips][$length]);
        for (let i = 0, l = node[_clips][$length]; i < dart.notNull(l); i = i + 1) {
          this[_clips][$_set](i, new actor_node.ActorClip.copy(node[_clips][$_get](i)));
        }
      } else {
        this[_clips] = null;
      }
    }
    onDirty(dirt) {
    }
    addConstraint(constraint) {
      this[_constraints] == null ? this[_constraints] = JSArrayOfActorConstraint().of([]) : null;
      if (dart.test(this[_constraints][$contains](constraint))) {
        return false;
      }
      this[_constraints][$add](constraint);
      return true;
    }
    addPeerConstraint(constraint) {
      this[_peerConstraints] == null ? this[_peerConstraints] = JSArrayOfActorConstraint().of([]) : null;
      if (dart.test(this[_peerConstraints][$contains](constraint))) {
        return false;
      }
      this[_peerConstraints][$add](constraint);
      return true;
    }
    get allConstraints() {
      let t0;
      t0 = this[_constraints] == null ? this[_peerConstraints] : this[_peerConstraints] == null ? this[_constraints] : this[_constraints][$plus](this[_peerConstraints]);
      return t0 == null ? JSArrayOfActorConstraint().of([]) : t0;
    }
    update(dirt) {
      if ((dart.notNull(dirt) & 1) >>> 0 === 1) {
        this.updateTransform();
      }
      if ((dart.notNull(dirt) & 2) >>> 0 === 2) {
        this.updateWorldTransform();
        if (this[_constraints] != null) {
          for (let constraint of this[_constraints]) {
            if (dart.test(constraint.isEnabled)) {
              constraint.constrain(this);
            }
          }
        }
      }
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_clips] == null) {
        return;
      }
      for (let clip of this[_clips]) {
        let component = components[$_get](clip.clipIdx);
        if (actor_node.ActorNode.is(component)) {
          clip.node = component;
        }
      }
    }
    completeResolve() {
    }
    eachChildRecursive(cb) {
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (dart.equals(cb(child), false)) {
            return false;
          }
          if (dart.equals(child.eachChildRecursive(cb), false)) {
            return false;
          }
        }
      }
      return true;
    }
    all(cb) {
      if (dart.equals(cb(this), false)) {
        return false;
      }
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (dart.equals(cb(child), false)) {
            return false;
          }
          child.eachChildRecursive(cb);
        }
      }
      return true;
    }
    invalidateShape() {
    }
  };
  (actor_node.ActorNode.new = function() {
    this[_children] = null;
    this[_transform] = new mat2d.Mat2D.new();
    this[_worldTransform] = new mat2d.Mat2D.new();
    this[_translation] = new vec2d.Vec2D.new();
    this[_rotation] = 0.0;
    this[_scale] = new vec2d.Vec2D.fromValues(1.0, 1.0);
    this[_opacity] = 1.0;
    this[_renderOpacity] = 1.0;
    this[_overrideWorldTransform] = false;
    this[_isCollapsedVisibility] = false;
    this[_renderCollapsed] = false;
    this[_clips] = null;
    this[_constraints] = null;
    this[_peerConstraints] = null;
    actor_node.ActorNode.__proto__.new.call(this);
    ;
  }).prototype = actor_node.ActorNode.prototype;
  (actor_node.ActorNode.withArtboard = function(artboard) {
    this[_children] = null;
    this[_transform] = new mat2d.Mat2D.new();
    this[_worldTransform] = new mat2d.Mat2D.new();
    this[_translation] = new vec2d.Vec2D.new();
    this[_rotation] = 0.0;
    this[_scale] = new vec2d.Vec2D.fromValues(1.0, 1.0);
    this[_opacity] = 1.0;
    this[_renderOpacity] = 1.0;
    this[_overrideWorldTransform] = false;
    this[_isCollapsedVisibility] = false;
    this[_renderCollapsed] = false;
    this[_clips] = null;
    this[_constraints] = null;
    this[_peerConstraints] = null;
    actor_node.ActorNode.__proto__.withArtboard.call(this, artboard);
    ;
  }).prototype = actor_node.ActorNode.prototype;
  dart.addTypeTests(actor_node.ActorNode);
  dart.setMethodSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getMethods(actor_node.ActorNode.__proto__),
    markTransformDirty: dart.fnType(dart.void, []),
    updateTransform: dart.fnType(dart.void, []),
    getWorldTranslation: dart.fnType(vec2d.Vec2D, [vec2d.Vec2D]),
    updateWorldTransform: dart.fnType(dart.void, []),
    addChild: dart.fnType(dart.void, [actor_node.ActorNode]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    copyNode: dart.fnType(dart.void, [actor_node.ActorNode, actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    addConstraint: dart.fnType(core.bool, [actor_constraint.ActorConstraint]),
    addPeerConstraint: dart.fnType(core.bool, [actor_constraint.ActorConstraint]),
    update: dart.fnType(dart.void, [core.int]),
    completeResolve: dart.fnType(dart.void, []),
    eachChildRecursive: dart.fnType(core.bool, [dart.fnType(core.bool, [actor_node.ActorNode])]),
    all: dart.fnType(core.bool, [dart.fnType(core.bool, [actor_node.ActorNode])]),
    invalidateShape: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getGetters(actor_node.ActorNode.__proto__),
    transform: mat2d.Mat2D,
    clips: core.List$(actor_node.ActorClip),
    worldTransformOverride: mat2d.Mat2D,
    worldTransform: mat2d.Mat2D,
    x: core.double,
    y: core.double,
    translation: vec2d.Vec2D,
    rotation: core.double,
    scaleX: core.double,
    scaleY: core.double,
    opacity: core.double,
    renderOpacity: core.double,
    renderCollapsed: core.bool,
    collapsedVisibility: core.bool,
    allClips: core.List$(core.List$(actor_node.ActorClip)),
    children: core.List$(actor_node.ActorNode),
    allConstraints: core.List$(actor_constraint.ActorConstraint)
  }));
  dart.setSetterSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getSetters(actor_node.ActorNode.__proto__),
    worldTransformOverride: mat2d.Mat2D,
    worldTransform: mat2d.Mat2D,
    x: core.double,
    y: core.double,
    translation: vec2d.Vec2D,
    rotation: core.double,
    scaleX: core.double,
    scaleY: core.double,
    opacity: core.double,
    collapsedVisibility: core.bool
  }));
  dart.setLibraryUri(actor_node.ActorNode, "package:flare_dart/actor_node.dart");
  dart.setFieldSignature(actor_node.ActorNode, () => ({
    __proto__: dart.getFields(actor_node.ActorNode.__proto__),
    [_children]: dart.fieldType(core.List$(actor_node.ActorNode)),
    [_transform]: dart.fieldType(mat2d.Mat2D),
    [_worldTransform]: dart.fieldType(mat2d.Mat2D),
    [_translation]: dart.fieldType(vec2d.Vec2D),
    [_rotation]: dart.fieldType(core.double),
    [_scale]: dart.fieldType(vec2d.Vec2D),
    [_opacity]: dart.fieldType(core.double),
    [_renderOpacity]: dart.fieldType(core.double),
    [_overrideWorldTransform]: dart.fieldType(core.bool),
    [_isCollapsedVisibility]: dart.fieldType(core.bool),
    [_renderCollapsed]: dart.fieldType(core.bool),
    [_clips]: dart.fieldType(core.List$(actor_node.ActorClip)),
    [_constraints]: dart.fieldType(core.List$(actor_constraint.ActorConstraint)),
    [_peerConstraints]: dart.fieldType(core.List$(actor_constraint.ActorConstraint))
  }));
  dart.defineLazy(actor_node.ActorNode, {
    /*actor_node.ActorNode.transformDirty*/get transformDirty() {
      return 1;
    },
    /*actor_node.ActorNode.worldTransformDirty*/get worldTransformDirty() {
      return 2;
    }
  });
  const _isEnabled = dart.privateName(actor_constraint, "_isEnabled");
  const _strength = dart.privateName(actor_constraint, "_strength");
  actor_constraint.ActorConstraint = class ActorConstraint extends actor_component.ActorComponent {
    get isEnabled() {
      return this[_isEnabled];
    }
    set isEnabled(value) {
      if (dart.equals(value, this[_isEnabled])) {
        return;
      }
      this[_isEnabled] = value;
      this.markDirty();
    }
    onDirty(dirt) {
      this.markDirty();
    }
    get strength() {
      return this[_strength];
    }
    set strength(value) {
      if (value == this[_strength]) {
        return;
      }
      this[_strength] = value;
      this.markDirty();
    }
    markDirty() {
      this.parent.markTransformDirty();
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this.parent != null) {
        this.parent.addConstraint(this);
      }
    }
    static read(artboard, reader, component) {
      actor_component.ActorComponent.read(artboard, reader, component);
      component[_strength] = reader.readFloat32("strength");
      component[_isEnabled] = reader.readBool("isEnabled");
      return component;
    }
    copyConstraint(node, resetArtboard) {
      this.copyComponent(node, resetArtboard);
      this[_isEnabled] = node[_isEnabled];
      this[_strength] = node[_strength];
    }
  };
  (actor_constraint.ActorConstraint.new = function() {
    this[_isEnabled] = null;
    this[_strength] = null;
    actor_constraint.ActorConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_constraint.ActorConstraint.prototype;
  dart.addTypeTests(actor_constraint.ActorConstraint);
  dart.setMethodSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getMethods(actor_constraint.ActorConstraint.__proto__),
    onDirty: dart.fnType(dart.void, [core.int]),
    markDirty: dart.fnType(dart.void, []),
    copyConstraint: dart.fnType(dart.void, [actor_constraint.ActorConstraint, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getGetters(actor_constraint.ActorConstraint.__proto__),
    isEnabled: core.bool,
    strength: core.double
  }));
  dart.setSetterSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getSetters(actor_constraint.ActorConstraint.__proto__),
    isEnabled: core.bool,
    strength: core.double
  }));
  dart.setLibraryUri(actor_constraint.ActorConstraint, "package:flare_dart/actor_constraint.dart");
  dart.setFieldSignature(actor_constraint.ActorConstraint, () => ({
    __proto__: dart.getFields(actor_constraint.ActorConstraint.__proto__),
    [_isEnabled]: dart.fieldType(core.bool),
    [_strength]: dart.fieldType(core.double)
  }));
  const _flags = dart.privateName(actor_artboard, "_flags");
  const _drawableNodeCount = dart.privateName(actor_artboard, "_drawableNodeCount");
  const _nodeCount = dart.privateName(actor_artboard, "_nodeCount");
  const _dirtDepth = dart.privateName(actor_artboard, "_dirtDepth");
  const _root = dart.privateName(actor_artboard, "_root");
  const _components = dart.privateName(actor_artboard, "_components");
  const _nodes = dart.privateName(actor_artboard, "_nodes");
  const _drawableNodes = dart.privateName(actor_artboard, "_drawableNodes");
  const _animations = dart.privateName(actor_artboard, "_animations");
  const _dependencyOrder = dart.privateName(actor_artboard, "_dependencyOrder");
  const _actor = dart.privateName(actor_artboard, "_actor");
  const _name$ = dart.privateName(actor_artboard, "_name");
  const _translation$ = dart.privateName(actor_artboard, "_translation");
  const _width = dart.privateName(actor_artboard, "_width");
  const _height = dart.privateName(actor_artboard, "_height");
  const _origin = dart.privateName(actor_artboard, "_origin");
  const _clipContents = dart.privateName(actor_artboard, "_clipContents");
  const _color = dart.privateName(actor_artboard, "_color");
  const _modulateOpacity = dart.privateName(actor_artboard, "_modulateOpacity");
  const _overrideColor = dart.privateName(actor_artboard, "_overrideColor");
  actor_artboard.ActorArtboard = class ActorArtboard extends core.Object {
    get name() {
      return this[_name$];
    }
    get width() {
      return this[_width];
    }
    get height() {
      return this[_height];
    }
    get origin() {
      return this[_origin];
    }
    get translation() {
      return this[_translation$];
    }
    get clipContents() {
      return this[_clipContents];
    }
    get modulateOpacity() {
      return this[_modulateOpacity];
    }
    get overrideColor() {
      return this[_overrideColor];
    }
    set overrideColor(value) {
      this[_overrideColor] = value;
      if (this[_drawableNodes] != null) {
        for (let drawable of this[_drawableNodes]) {
          this.addDirt(drawable, 4, true);
        }
      }
    }
    set modulateOpacity(value) {
      if (this[_drawableNodes] != null) {
        this[_modulateOpacity] = value;
        for (let drawable of this[_drawableNodes]) {
          this.addDirt(drawable, 4, true);
        }
      }
    }
    get actor() {
      return this[_actor];
    }
    get components() {
      return this[_components];
    }
    get nodes() {
      return this[_nodes];
    }
    get animations() {
      return this[_animations];
    }
    get drawableNodes() {
      return this[_drawableNodes];
    }
    _get(index) {
      return this[_components][$_get](index);
    }
    get componentCount() {
      return this[_components][$length];
    }
    get nodeCount() {
      return this[_nodeCount];
    }
    get drawNodeCount() {
      return this[_drawableNodeCount];
    }
    get root() {
      return this[_root];
    }
    addDependency(a, b) {
      let dependents = b.dependents;
      if (dependents == null) {
        b.dependents = dependents = JSArrayOfActorComponent().of([]);
      }
      if (dart.test(dependents[$contains](a))) {
        return false;
      }
      dependents[$add](a);
      return true;
    }
    sortDependencies() {
      let t0;
      let sorter = new dependency_sorter.DependencySorter.new();
      this[_dependencyOrder] = sorter.sort(this[_root]);
      let graphOrder = 0;
      for (let component of this[_dependencyOrder]) {
        component.graphOrder = (t0 = graphOrder, graphOrder = t0 + 1, t0);
        component.dirtMask = 255;
      }
      this[_flags] = (dart.notNull(this[_flags]) | 2) >>> 0;
    }
    addDirt(component, value, recurse) {
      if ((dart.notNull(component.dirtMask) & dart.notNull(value)) >>> 0 === value) {
        return false;
      }
      let dirt = (dart.notNull(component.dirtMask) | dart.notNull(value)) >>> 0;
      component.dirtMask = dirt;
      this[_flags] = (dart.notNull(this[_flags]) | 2) >>> 0;
      component.onDirty(dirt);
      if (dart.notNull(component.graphOrder) < dart.notNull(this[_dirtDepth])) {
        this[_dirtDepth] = component.graphOrder;
      }
      if (!dart.test(recurse)) {
        return true;
      }
      let dependents = component.dependents;
      if (dependents != null) {
        for (let d of dependents) {
          this.addDirt(d, value, recurse);
        }
      }
      return true;
    }
    getAnimation(name) {
      for (let a of this[_animations]) {
        if (a.name == name) {
          return a;
        }
      }
      return null;
    }
    getNode(name) {
      for (let node of this[_nodes]) {
        if (node != null && node.name == name) {
          return node;
        }
      }
      return null;
    }
    markDrawOrderDirty() {
      this[_flags] = (dart.notNull(this[_flags]) | 1) >>> 0;
    }
    makeInstance() {
      let artboardInstance = this[_actor].makeArtboard();
      artboardInstance.copyArtboard(this);
      return artboardInstance;
    }
    makeInstanceWithActor(actor) {
      let artboardInstance = actor.makeArtboard();
      artboardInstance.copyArtboard(this);
      return artboardInstance;
    }
    copyArtboard(artboard) {
      let t0, t0$, t0$0, t0$1;
      this[_name$] = artboard[_name$];
      vec2d.Vec2D.copy(this[_translation$], artboard[_translation$]);
      this[_width] = artboard[_width];
      this[_height] = artboard[_height];
      vec2d.Vec2D.copy(this[_origin], artboard[_origin]);
      this[_clipContents] = artboard[_clipContents];
      this[_color][$_set](0, artboard[_color][$_get](0));
      this[_color][$_set](1, artboard[_color][$_get](1));
      this[_color][$_set](2, artboard[_color][$_get](2));
      this[_color][$_set](3, artboard[_color][$_get](3));
      this[_animations] = artboard[_animations];
      this[_drawableNodeCount] = artboard[_drawableNodeCount];
      this[_nodeCount] = artboard[_nodeCount];
      if (artboard.componentCount !== 0) {
        this[_components] = ListOfActorComponent().new(artboard.componentCount);
      }
      if (this[_nodeCount] !== 0) {
        this[_nodes] = ListOfActorNode().new(this[_nodeCount]);
      }
      if (this[_drawableNodeCount] !== 0) {
        this[_drawableNodes] = ListOfActorDrawable().new(this[_drawableNodeCount]);
      }
      if (artboard.componentCount !== 0) {
        let idx = 0;
        let drwIdx = 0;
        let ndIdx = 0;
        for (let component of artboard.components) {
          if (component == null) {
            this[_components][$_set]((t0 = idx, idx = t0 + 1, t0), null);
            continue;
          }
          let instanceComponent = component.makeInstance(this);
          this[_components][$_set]((t0$ = idx, idx = t0$ + 1, t0$), instanceComponent);
          if (actor_node.ActorNode.is(instanceComponent)) {
            this[_nodes][$_set]((t0$0 = ndIdx, ndIdx = t0$0 + 1, t0$0), instanceComponent);
          }
          if (actor_drawable.ActorDrawable.is(instanceComponent)) {
            this[_drawableNodes][$_set]((t0$1 = drwIdx, drwIdx = t0$1 + 1, t0$1), instanceComponent);
          }
        }
      }
      this[_root] = actor_node.ActorNode.as(this[_components][$_get](0));
      for (let component of this[_components]) {
        if (dart.equals(this[_root], component) || component == null) {
          continue;
        }
        component.resolveComponentIndices(this[_components]);
      }
      for (let component of this[_components]) {
        if (dart.equals(this[_root], component) || component == null) {
          continue;
        }
        component.completeResolve();
      }
      this.sortDependencies();
      if (this[_drawableNodes] != null) {
        this[_drawableNodes][$sort](dart.fn((a, b) => a.drawOrder[$compareTo](b.drawOrder), ActorDrawableAndActorDrawableToint()));
        for (let i = 0; i < dart.notNull(this[_drawableNodes][$length]); i = i + 1) {
          this[_drawableNodes][$_get](i).drawIndex = i;
        }
      }
    }
    advance(seconds) {
      if ((dart.notNull(this[_flags]) & 2) !== 0) {
        let step = 0;
        let count = this[_dependencyOrder][$length];
        while ((dart.notNull(this[_flags]) & 2) !== 0 && step < 100) {
          this[_flags] = (dart.notNull(this[_flags]) & ~2 >>> 0) >>> 0;
          for (let i = 0; i < dart.notNull(count); i = i + 1) {
            let component = this[_dependencyOrder][$_get](i);
            this[_dirtDepth] = i;
            let d = component.dirtMask;
            if (d === 0) {
              continue;
            }
            component.dirtMask = 0;
            component.update(d);
            if (dart.notNull(this[_dirtDepth]) < i) {
              break;
            }
          }
          step = step + 1;
        }
      }
      if ((dart.notNull(this[_flags]) & 1) !== 0) {
        this[_flags] = (dart.notNull(this[_flags]) & ~1 >>> 0) >>> 0;
        if (this[_drawableNodes] != null) {
          this[_drawableNodes][$sort](dart.fn((a, b) => a.drawOrder[$compareTo](b.drawOrder), ActorDrawableAndActorDrawableToint()));
          for (let i = 0; i < dart.notNull(this[_drawableNodes][$length]); i = i + 1) {
            this[_drawableNodes][$_get](i).drawIndex = i;
          }
        }
      }
    }
    read(reader) {
      this[_name$] = reader.readString("name");
      vec2d.Vec2D.copyFromList(this[_translation$], reader.readFloat32Array(2, "translation"));
      this[_width] = reader.readFloat32("width");
      this[_height] = reader.readFloat32("height");
      vec2d.Vec2D.copyFromList(this[_origin], reader.readFloat32Array(2, "origin"));
      this[_clipContents] = reader.readBool("clipContents");
      let color = reader.readFloat32Array(4, "color");
      this[_color][$_set](0, color[$_get](0));
      this[_color][$_set](1, color[$_get](1));
      this[_color][$_set](2, color[$_get](2));
      this[_color][$_set](3, color[$_get](3));
      let block = null;
      while ((block = reader.readNextBlock(block_types.blockTypesMap)) != null) {
        switch (block.blockType) {
          case 1:
          {
            this.readComponentsBlock(block);
            break;
          }
          case 8:
          {
            this.readAnimationsBlock(block);
            break;
          }
        }
      }
    }
    readComponentsBlock(block) {
      let t0, t0$;
      let componentCount = block.readUint16Length();
      this[_components] = ListOfActorComponent().new(dart.notNull(componentCount) + 1);
      this[_components][$_set](0, this[_root]);
      this[_nodeCount] = 1;
      for (let componentIndex = 1, end = dart.notNull(componentCount) + 1; componentIndex < end; componentIndex = componentIndex + 1) {
        let nodeBlock = block.readNextBlock(block_types.blockTypesMap);
        if (nodeBlock == null) {
          break;
        }
        let component = null;
        switch (nodeBlock.blockType) {
          case 2:
          {
            component = actor_node.ActorNode.read(this, nodeBlock, null);
            break;
          }
          case 3:
          {
            component = actor_bone.ActorBone.read(this, nodeBlock, null);
            break;
          }
          case 4:
          {
            component = actor_root_bone.ActorRootBone.read(this, nodeBlock, null);
            break;
          }
          case 5:
          {
            component = actor_image.ActorImage.read(this, nodeBlock, this.actor.makeImageNode());
            if (dart.notNull(actor_image.ActorImage.as(component).textureIndex) > dart.notNull(this.actor.maxTextureIndex)) {
              this.actor.maxTextureIndex = actor_image.ActorImage.as(component).textureIndex;
            }
            break;
          }
          case 11:
          {
            break;
          }
          case 12:
          {
            component = actor_event.ActorEvent.read(this, nodeBlock, null);
            break;
          }
          case 13:
          {
            break;
          }
          case 14:
          {
            break;
          }
          case 15:
          {
            break;
          }
          case 16:
          {
            break;
          }
          case 17:
          {
            break;
          }
          case 18:
          {
            break;
          }
          case 19:
          {
            break;
          }
          case 20:
          {
            break;
          }
          case 21:
          {
            break;
          }
          case 23:
          {
            component = actor_node_solo.ActorNodeSolo.read(this, nodeBlock, null);
            break;
          }
          case 29:
          {
            component = actor_jelly_bone.ActorJellyBone.read(this, nodeBlock, null);
            break;
          }
          case 28:
          {
            component = jelly_component.JellyComponent.read(this, nodeBlock, null);
            break;
          }
          case 30:
          {
            component = actor_ik_constraint.ActorIKConstraint.read(this, nodeBlock, null);
            break;
          }
          case 31:
          {
            component = actor_distance_constraint.ActorDistanceConstraint.read(this, nodeBlock, null);
            break;
          }
          case 32:
          {
            component = actor_translation_constraint.ActorTranslationConstraint.read(this, nodeBlock, null);
            break;
          }
          case 34:
          {
            component = actor_scale_constraint.ActorScaleConstraint.read(this, nodeBlock, null);
            break;
          }
          case 33:
          {
            component = actor_rotation_constraint.ActorRotationConstraint.read(this, nodeBlock, null);
            break;
          }
          case 35:
          {
            component = actor_transform_constraint.ActorTransformConstraint.read(this, nodeBlock, null);
            break;
          }
          case 100:
          {
            component = actor_shape.ActorShape.read(this, nodeBlock, this.actor.makeShapeNode(null));
            break;
          }
          case 101:
          {
            component = actor_path.ActorPath.read(this, nodeBlock, this.actor.makePathNode());
            break;
          }
          case 102:
          {
            component = actor_color.ColorFill.read(this, nodeBlock, this.actor.makeColorFill());
            break;
          }
          case 103:
          {
            component = actor_color.ColorStroke.read(this, nodeBlock, this.actor.makeColorStroke());
            break;
          }
          case 104:
          {
            component = actor_color.GradientFill.read(this, nodeBlock, this.actor.makeGradientFill());
            break;
          }
          case 105:
          {
            component = actor_color.GradientStroke.read(this, nodeBlock, this.actor.makeGradientStroke());
            break;
          }
          case 106:
          {
            component = actor_color.RadialGradientFill.read(this, nodeBlock, this.actor.makeRadialFill());
            break;
          }
          case 107:
          {
            component = actor_color.RadialGradientStroke.read(this, nodeBlock, this.actor.makeRadialStroke());
            break;
          }
          case 108:
          {
            component = actor_ellipse.ActorEllipse.read(this, nodeBlock, this.actor.makeEllipse());
            break;
          }
          case 109:
          {
            component = actor_rectangle.ActorRectangle.read(this, nodeBlock, this.actor.makeRectangle());
            break;
          }
          case 110:
          {
            component = actor_triangle.ActorTriangle.read(this, nodeBlock, this.actor.makeTriangle());
            break;
          }
          case 111:
          {
            component = actor_star.ActorStar.read(this, nodeBlock, this.actor.makeStar());
            break;
          }
          case 112:
          {
            component = actor_polygon.ActorPolygon.read(this, nodeBlock, this.actor.makePolygon());
            break;
          }
          case 113:
          {
            component = actor_component.ActorComponent.read(this, nodeBlock, new actor_skin.ActorSkin.new());
            break;
          }
        }
        if (actor_drawable.ActorDrawable.is(component)) {
          this[_drawableNodeCount] = dart.notNull(this[_drawableNodeCount]) + 1;
        }
        if (actor_node.ActorNode.is(component)) {
          this[_nodeCount] = dart.notNull(this[_nodeCount]) + 1;
        }
        this[_components][$_set](componentIndex, component);
        if (component != null) {
          component.idx = componentIndex;
        }
      }
      this[_drawableNodes] = ListOfActorDrawable().new(this[_drawableNodeCount]);
      this[_nodes] = ListOfActorNode().new(this[_nodeCount]);
      this[_nodes][$_set](0, this[_root]);
      let drwIdx = 0;
      let anIdx = 0;
      for (let i = 1; i <= dart.notNull(componentCount); i = i + 1) {
        let c = this[_components][$_get](i);
        if (c != null) {
          c.resolveComponentIndices(this[_components]);
        }
        if (actor_drawable.ActorDrawable.is(c)) {
          this[_drawableNodes][$_set]((t0 = drwIdx, drwIdx = t0 + 1, t0), c);
        }
        if (actor_node.ActorNode.is(c)) {
          let an = c;
          if (an != null) {
            this[_nodes][$_set]((t0$ = anIdx, anIdx = t0$ + 1, t0$), an);
          }
        }
      }
      for (let i = 1; i <= dart.notNull(componentCount); i = i + 1) {
        let c = this.components[$_get](i);
        if (c != null) {
          c.completeResolve();
        }
      }
      this.sortDependencies();
    }
    initializeGraphics() {
      if (this[_drawableNodes] != null) {
        for (let drawable of this[_drawableNodes]) {
          drawable.initializeGraphics();
        }
      }
    }
    readAnimationsBlock(block) {
      let t0;
      let animationCount = block.readUint16Length();
      this[_animations] = ListOfActorAnimation().new(animationCount);
      let animationBlock = null;
      let animationIndex = 0;
      while ((animationBlock = block.readNextBlock(block_types.blockTypesMap)) != null) {
        switch (animationBlock.blockType) {
          case 7:
          {
            let anim = actor_animation.ActorAnimation.read(animationBlock, this[_components]);
            this[_animations][$_set]((t0 = animationIndex, animationIndex = t0 + 1, t0), anim);
            break;
          }
        }
      }
    }
    artboardAABB() {
      let minX = -1 * dart.notNull(this[_origin]._get(0)) * dart.notNull(this.width);
      let minY = -1 * dart.notNull(this[_origin]._get(1)) * dart.notNull(this.height);
      return new aabb$.AABB.fromValues(minX, minY, minX + dart.notNull(this[_width]), minY + dart.notNull(this.height));
    }
    computeAABB() {
      if (this[_drawableNodes] == null) {
        return new aabb$.AABB.new();
      }
      let aabb = null;
      for (let drawable of this[_drawableNodes]) {
        let pathAABB = drawable.computeAABB();
        if (pathAABB == null) {
          continue;
        }
        if (aabb == null) {
          aabb = pathAABB;
        } else {
          aabb._set(0, math.min(core.double, aabb._get(0), pathAABB._get(0)));
          aabb._set(1, math.min(core.double, aabb._get(1), pathAABB._get(1)));
          aabb._set(2, math.max(core.double, aabb._get(2), pathAABB._get(2)));
          aabb._set(3, math.max(core.double, aabb._get(3), pathAABB._get(3)));
        }
      }
      return aabb;
    }
  };
  (actor_artboard.ActorArtboard.new = function(actor) {
    this[_flags] = 1;
    this[_drawableNodeCount] = 0;
    this[_nodeCount] = 0;
    this[_dirtDepth] = 0;
    this[_root] = null;
    this[_components] = null;
    this[_nodes] = null;
    this[_drawableNodes] = null;
    this[_animations] = null;
    this[_dependencyOrder] = null;
    this[_actor] = null;
    this[_name$] = null;
    this[_translation$] = new vec2d.Vec2D.new();
    this[_width] = 0.0;
    this[_height] = 0.0;
    this[_origin] = new vec2d.Vec2D.new();
    this[_clipContents] = true;
    this[_color] = _native_typed_data.NativeFloat32List.new(4);
    this[_modulateOpacity] = 1.0;
    this[_overrideColor] = null;
    this[_actor] = actor;
    this[_root] = new actor_node.ActorNode.withArtboard(this);
  }).prototype = actor_artboard.ActorArtboard.prototype;
  dart.addTypeTests(actor_artboard.ActorArtboard);
  dart.setMethodSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getMethods(actor_artboard.ActorArtboard.__proto__),
    _get: dart.fnType(actor_component.ActorComponent, [core.int]),
    addDependency: dart.fnType(core.bool, [actor_component.ActorComponent, actor_component.ActorComponent]),
    sortDependencies: dart.fnType(dart.void, []),
    addDirt: dart.fnType(core.bool, [actor_component.ActorComponent, core.int, core.bool]),
    getAnimation: dart.fnType(actor_animation.ActorAnimation, [core.String]),
    getNode: dart.fnType(actor_node.ActorNode, [core.String]),
    markDrawOrderDirty: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_artboard.ActorArtboard, []),
    makeInstanceWithActor: dart.fnType(actor_artboard.ActorArtboard, [actor.Actor]),
    copyArtboard: dart.fnType(dart.void, [actor_artboard.ActorArtboard]),
    advance: dart.fnType(dart.void, [core.double]),
    read: dart.fnType(dart.void, [stream_reader.StreamReader]),
    readComponentsBlock: dart.fnType(dart.void, [stream_reader.StreamReader]),
    initializeGraphics: dart.fnType(dart.void, []),
    readAnimationsBlock: dart.fnType(dart.void, [stream_reader.StreamReader]),
    artboardAABB: dart.fnType(aabb$.AABB, []),
    computeAABB: dart.fnType(aabb$.AABB, [])
  }));
  dart.setGetterSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getGetters(actor_artboard.ActorArtboard.__proto__),
    name: core.String,
    width: core.double,
    height: core.double,
    origin: vec2d.Vec2D,
    translation: vec2d.Vec2D,
    clipContents: core.bool,
    modulateOpacity: core.double,
    overrideColor: typed_data.Float32List,
    actor: actor.Actor,
    components: core.List$(actor_component.ActorComponent),
    nodes: core.List$(actor_node.ActorNode),
    animations: core.List$(actor_animation.ActorAnimation),
    drawableNodes: core.List$(actor_drawable.ActorDrawable),
    componentCount: core.int,
    nodeCount: core.int,
    drawNodeCount: core.int,
    root: actor_node.ActorNode
  }));
  dart.setSetterSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getSetters(actor_artboard.ActorArtboard.__proto__),
    overrideColor: typed_data.Float32List,
    modulateOpacity: core.double
  }));
  dart.setLibraryUri(actor_artboard.ActorArtboard, "package:flare_dart/actor_artboard.dart");
  dart.setFieldSignature(actor_artboard.ActorArtboard, () => ({
    __proto__: dart.getFields(actor_artboard.ActorArtboard.__proto__),
    [_flags]: dart.fieldType(core.int),
    [_drawableNodeCount]: dart.fieldType(core.int),
    [_nodeCount]: dart.fieldType(core.int),
    [_dirtDepth]: dart.fieldType(core.int),
    [_root]: dart.fieldType(actor_node.ActorNode),
    [_components]: dart.fieldType(core.List$(actor_component.ActorComponent)),
    [_nodes]: dart.fieldType(core.List$(actor_node.ActorNode)),
    [_drawableNodes]: dart.fieldType(core.List$(actor_drawable.ActorDrawable)),
    [_animations]: dart.fieldType(core.List$(actor_animation.ActorAnimation)),
    [_dependencyOrder]: dart.fieldType(core.List$(actor_component.ActorComponent)),
    [_actor]: dart.fieldType(actor.Actor),
    [_name$]: dart.fieldType(core.String),
    [_translation$]: dart.finalFieldType(vec2d.Vec2D),
    [_width]: dart.fieldType(core.double),
    [_height]: dart.fieldType(core.double),
    [_origin]: dart.finalFieldType(vec2d.Vec2D),
    [_clipContents]: dart.fieldType(core.bool),
    [_color]: dart.finalFieldType(typed_data.Float32List),
    [_modulateOpacity]: dart.fieldType(core.double),
    [_overrideColor]: dart.fieldType(typed_data.Float32List)
  }));
  const _easeIn = dart.privateName(jelly_component, "_easeIn");
  const _easeOut = dart.privateName(jelly_component, "_easeOut");
  const _scaleIn = dart.privateName(jelly_component, "_scaleIn");
  const _scaleOut = dart.privateName(jelly_component, "_scaleOut");
  const _inTargetIdx = dart.privateName(jelly_component, "_inTargetIdx");
  const _outTargetIdx = dart.privateName(jelly_component, "_outTargetIdx");
  const _inTarget = dart.privateName(jelly_component, "_inTarget");
  const _outTarget = dart.privateName(jelly_component, "_outTarget");
  const _bones = dart.privateName(jelly_component, "_bones");
  const _inPoint = dart.privateName(jelly_component, "_inPoint");
  const _inDirection = dart.privateName(jelly_component, "_inDirection");
  const _outPoint = dart.privateName(jelly_component, "_outPoint");
  const _outDirection = dart.privateName(jelly_component, "_outDirection");
  const _cachedTip = dart.privateName(jelly_component, "_cachedTip");
  const _cachedOut = dart.privateName(jelly_component, "_cachedOut");
  const _cachedIn = dart.privateName(jelly_component, "_cachedIn");
  const _cachedScaleIn = dart.privateName(jelly_component, "_cachedScaleIn");
  const _cachedScaleOut = dart.privateName(jelly_component, "_cachedScaleOut");
  const _jellyPoints = dart.privateName(jelly_component, "_jellyPoints");
  jelly_component.JellyComponent = class JellyComponent extends actor_component.ActorComponent {
    static fuzzyEquals(a, b) {
      let a0 = a._get(0);
      let a1 = a._get(1);
      let b0 = b._get(0);
      let b1 = b._get(1);
      return (dart.notNull(a0) - dart.notNull(b0))[$abs]() <= 0.001 * math.max(core.num, 1.0, math.max(core.num, a0[$abs](), b0[$abs]())) && (dart.notNull(a1) - dart.notNull(b1))[$abs]() <= 0.001 * math.max(core.num, 1.0, math.max(core.num, a1[$abs](), b1[$abs]()));
    }
    static forwardDiffBezier(c0, c1, c2, c3, points, count, offset) {
      let f = count[$toDouble]();
      let p0 = c0;
      let p1 = 3.0 * (dart.notNull(c1) - dart.notNull(c0)) / f;
      f = f * dart.notNull(count);
      let p2 = 3.0 * (dart.notNull(c0) - 2.0 * dart.notNull(c1) + dart.notNull(c2)) / f;
      f = f * dart.notNull(count);
      let p3 = (dart.notNull(c3) - dart.notNull(c0) + 3.0 * (dart.notNull(c1) - dart.notNull(c2))) / f;
      c0 = p0;
      c1 = p1 + p2 + p3;
      c2 = 2 * p2 + 6 * p3;
      c3 = 6 * p3;
      for (let a = 0; a <= dart.notNull(count); a = a + 1) {
        points[$_get](a)._set(offset, c0);
        c0 = dart.notNull(c0) + dart.notNull(c1);
        c1 = dart.notNull(c1) + dart.notNull(c2);
        c2 = dart.notNull(c2) + dart.notNull(c3);
      }
    }
    normalizeCurve(curve, numSegments) {
      let points = JSArrayOfVec2D().of([]);
      let curvePointCount = curve[$length];
      let distances = ListOfdouble().new(curvePointCount);
      distances[$_set](0, 0.0);
      for (let i = 0; i < dart.notNull(curvePointCount) - 1; i = i + 1) {
        let p1 = curve[$_get](i);
        let p2 = curve[$_get](i + 1);
        distances[$_set](i + 1, dart.notNull(distances[$_get](i)) + dart.notNull(vec2d.Vec2D.distance(p1, p2)));
      }
      let totalDistance = distances[$_get](dart.notNull(curvePointCount) - 1);
      let segmentLength = dart.notNull(totalDistance) / dart.notNull(numSegments);
      let pointIndex = 1;
      for (let i = 1; i <= dart.notNull(numSegments); i = i + 1) {
        let distance = segmentLength * i;
        while (pointIndex < dart.notNull(curvePointCount) - 1 && dart.notNull(distances[$_get](pointIndex)) < distance) {
          pointIndex = pointIndex + 1;
        }
        let d = distances[$_get](pointIndex);
        let lastCurveSegmentLength = dart.notNull(d) - dart.notNull(distances[$_get](pointIndex - 1));
        let remainderOfDesired = dart.notNull(d) - distance;
        let ratio = remainderOfDesired / lastCurveSegmentLength;
        let iratio = 1.0 - ratio;
        let p1 = curve[$_get](pointIndex - 1);
        let p2 = curve[$_get](pointIndex);
        points[$add](new vec2d.Vec2D.fromValues(dart.notNull(p1._get(0)) * ratio + dart.notNull(p2._get(0)) * iratio, dart.notNull(p1._get(1)) * ratio + dart.notNull(p2._get(1)) * iratio));
      }
      return points;
    }
    get inTarget() {
      return this[_inTarget];
    }
    get outTarget() {
      return this[_inTarget];
    }
    makeInstance(artboard) {
      let instance = new jelly_component.JellyComponent.new();
      instance.copyJelly(this, artboard);
      return instance;
    }
    copyJelly(component, artboard) {
      super.copyComponent(component, artboard);
      this[_easeIn] = component[_easeIn];
      this[_easeOut] = component[_easeOut];
      this[_scaleIn] = component[_scaleIn];
      this[_scaleOut] = component[_scaleOut];
      this[_inTargetIdx] = component[_inTargetIdx];
      this[_outTargetIdx] = component[_outTargetIdx];
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_inTargetIdx] !== 0) {
        this[_inTarget] = actor_node.ActorNode.as(components[$_get](this[_inTargetIdx]));
      }
      if (this[_outTargetIdx] !== 0) {
        this[_outTarget] = actor_node.ActorNode.as(components[$_get](this[_outTargetIdx]));
      }
      let dependencyConstraints = JSArrayOfActorConstraint().of([]);
      let bone = actor_bone.ActorBone.as(this.parent);
      if (bone != null) {
        this.artboard.addDependency(this, bone);
        dependencyConstraints = dependencyConstraints[$plus](bone.allConstraints);
        let firstBone = bone.firstBone;
        if (firstBone != null) {
          this.artboard.addDependency(this, firstBone);
          dependencyConstraints = dependencyConstraints[$plus](firstBone.allConstraints);
          if (this[_outTarget] == null && firstBone.jelly != null && firstBone.jelly.inTarget != null) {
            this.artboard.addDependency(this, firstBone.jelly.inTarget);
            dependencyConstraints = dependencyConstraints[$plus](firstBone.jelly.inTarget.allConstraints);
          }
        }
        if (actor_bone.ActorBone.is(bone.parent)) {
          let parentBone = actor_bone.ActorBone.as(bone.parent);
          let parentBoneJelly = parentBone.jelly;
          if (parentBoneJelly != null && parentBoneJelly.outTarget != null) {
            this.artboard.addDependency(this, parentBoneJelly.outTarget);
            dependencyConstraints = dependencyConstraints[$plus](parentBoneJelly.outTarget.allConstraints);
          }
        }
      }
      if (this[_inTarget] != null) {
        this.artboard.addDependency(this, this[_inTarget]);
        dependencyConstraints = dependencyConstraints[$plus](this[_inTarget].allConstraints);
      }
      if (this[_outTarget] != null) {
        this.artboard.addDependency(this, this[_outTarget]);
        dependencyConstraints = dependencyConstraints[$plus](this[_outTarget].allConstraints);
      }
      let constraints = LinkedHashSetOfActorConstraint().from(dependencyConstraints);
      for (let constraint of constraints) {
        this.artboard.addDependency(this, constraint);
      }
    }
    completeResolve() {
      let bone = actor_bone.ActorBone.as(this.parent);
      bone.jelly = this;
      let children = bone.children;
      if (children == null) {
        return;
      }
      this[_bones] = JSArrayOfActorJellyBone().of([]);
      for (let child of children) {
        if (actor_jelly_bone.ActorJellyBone.is(child)) {
          this[_bones][$add](child);
          this.artboard.addDependency(child, this);
        }
      }
    }
    static read(artboard, reader, node) {
      node == null ? node = new jelly_component.JellyComponent.new() : null;
      actor_component.ActorComponent.read(artboard, reader, node);
      node[_easeIn] = reader.readFloat32("easeIn");
      node[_easeOut] = reader.readFloat32("easeOut");
      node[_scaleIn] = reader.readFloat32("scaleIn");
      node[_scaleOut] = reader.readFloat32("scaleOut");
      node[_inTargetIdx] = reader.readId("inTargetId");
      node[_outTargetIdx] = reader.readId("outTargetId");
      return node;
    }
    updateJellies() {
      if (this[_bones] == null) {
        return;
      }
      let bone = actor_bone.ActorBone.as(this.parent);
      let tipPosition = new vec2d.Vec2D.fromValues(bone.length, 0.0);
      if (dart.test(jelly_component.JellyComponent.fuzzyEquals(this[_cachedTip], tipPosition)) && dart.test(jelly_component.JellyComponent.fuzzyEquals(this[_cachedOut], this[_outPoint])) && dart.test(jelly_component.JellyComponent.fuzzyEquals(this[_cachedIn], this[_inPoint])) && this[_cachedScaleIn] == this[_scaleIn] && this[_cachedScaleOut] == this[_scaleOut]) {
        return;
      }
      vec2d.Vec2D.copy(this[_cachedTip], tipPosition);
      vec2d.Vec2D.copy(this[_cachedOut], this[_outPoint]);
      vec2d.Vec2D.copy(this[_cachedIn], this[_inPoint]);
      this[_cachedScaleIn] = this[_scaleIn];
      this[_cachedScaleOut] = this[_scaleOut];
      let q0 = new vec2d.Vec2D.new();
      let q1 = this[_inPoint];
      let q2 = this[_outPoint];
      let q3 = tipPosition;
      jelly_component.JellyComponent.forwardDiffBezier(q0._get(0), q1._get(0), q2._get(0), q3._get(0), this[_jellyPoints], 16, 0);
      jelly_component.JellyComponent.forwardDiffBezier(q0._get(1), q1._get(1), q2._get(1), q3._get(1), this[_jellyPoints], 16, 1);
      let normalizedPoints = this.normalizeCurve(this[_jellyPoints], this[_bones][$length]);
      let lastPoint = this[_jellyPoints][$_get](0);
      let scale = this[_scaleIn];
      let scaleInc = (dart.notNull(this[_scaleOut]) - dart.notNull(this[_scaleIn])) / (dart.notNull(this[_bones][$length]) - 1);
      for (let i = 0; i < dart.notNull(normalizedPoints[$length]); i = i + 1) {
        let jelly = this[_bones][$_get](i);
        let p = normalizedPoints[$_get](i);
        jelly.translation = lastPoint;
        jelly.length = vec2d.Vec2D.distance(p, lastPoint);
        jelly.scaleY = scale;
        scale = dart.notNull(scale) + scaleInc;
        let diff = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), p, lastPoint);
        jelly.rotation = math.atan2(diff._get(1), diff._get(0));
        lastPoint = p;
      }
    }
    onDirty(dirt) {
    }
    update(dirt) {
      let bone = actor_bone.ActorBone.as(this.parent);
      let parentBone = bone.parent;
      let parentBoneJelly = null;
      if (actor_bone.ActorBone.is(parentBone)) {
        parentBoneJelly = parentBone.jelly;
      }
      let inverseWorld = new mat2d.Mat2D.new();
      if (!dart.test(mat2d.Mat2D.invert(inverseWorld, bone.worldTransform))) {
        return;
      }
      if (this[_inTarget] != null) {
        let translation = this[_inTarget].getWorldTranslation(new vec2d.Vec2D.new());
        vec2d.Vec2D.transformMat2D(this[_inPoint], translation, inverseWorld);
        vec2d.Vec2D.normalize(this[_inDirection], this[_inPoint]);
      } else if (parentBone != null) {
        let firstBone = null;
        if (actor_bone.ActorBone.is(parentBone)) {
          firstBone = parentBone.firstBone;
        } else if (actor_root_bone.ActorRootBone.is(parentBone)) {
          firstBone = parentBone.firstBone;
        }
        if (dart.equals(firstBone, bone) && parentBoneJelly != null && parentBoneJelly[_outTarget] != null) {
          let translation = parentBoneJelly[_outTarget].getWorldTranslation(new vec2d.Vec2D.new());
          let localParentOut = vec2d.Vec2D.transformMat2D(new vec2d.Vec2D.new(), translation, inverseWorld);
          vec2d.Vec2D.normalize(localParentOut, localParentOut);
          vec2d.Vec2D.negate(this[_inDirection], localParentOut);
        } else {
          let d1 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          let d2 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          vec2d.Vec2D.transformMat2(d1, d1, parentBone.worldTransform);
          vec2d.Vec2D.transformMat2(d2, d2, bone.worldTransform);
          let sum = vec2d.Vec2D.add(new vec2d.Vec2D.new(), d1, d2);
          vec2d.Vec2D.transformMat2(this[_inDirection], sum, inverseWorld);
          vec2d.Vec2D.normalize(this[_inDirection], this[_inDirection]);
        }
        this[_inPoint]._set(0, dart.notNull(this[_inDirection]._get(0)) * dart.notNull(this[_easeIn]) * dart.notNull(bone.length) * dart.notNull(jelly_component.JellyComponent.curveConstant));
        this[_inPoint]._set(1, dart.notNull(this[_inDirection]._get(1)) * dart.notNull(this[_easeIn]) * dart.notNull(bone.length) * dart.notNull(jelly_component.JellyComponent.curveConstant));
      } else {
        this[_inDirection]._set(0, 1.0);
        this[_inDirection]._set(1, 0.0);
        this[_inPoint]._set(0, dart.notNull(this[_inDirection]._get(0)) * dart.notNull(this[_easeIn]) * dart.notNull(bone.length) * dart.notNull(jelly_component.JellyComponent.curveConstant));
      }
      if (this[_outTarget] != null) {
        let translation = this[_outTarget].getWorldTranslation(new vec2d.Vec2D.new());
        vec2d.Vec2D.transformMat2D(this[_outPoint], translation, inverseWorld);
        let tip = new vec2d.Vec2D.fromValues(bone.length, 0.0);
        vec2d.Vec2D.subtract(this[_outDirection], this[_outPoint], tip);
        vec2d.Vec2D.normalize(this[_outDirection], this[_outDirection]);
      } else if (bone.firstBone != null) {
        let firstBone = bone.firstBone;
        let firstBoneJelly = firstBone.jelly;
        if (firstBoneJelly != null && firstBoneJelly[_inTarget] != null) {
          let translation = firstBoneJelly[_inTarget].getWorldTranslation(new vec2d.Vec2D.new());
          let worldChildInDir = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), firstBone.getWorldTranslation(new vec2d.Vec2D.new()), translation);
          vec2d.Vec2D.transformMat2(this[_outDirection], worldChildInDir, inverseWorld);
        } else {
          let d1 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          let d2 = new vec2d.Vec2D.fromValues(1.0, 0.0);
          vec2d.Vec2D.transformMat2(d1, d1, firstBone.worldTransform);
          vec2d.Vec2D.transformMat2(d2, d2, bone.worldTransform);
          let sum = vec2d.Vec2D.add(new vec2d.Vec2D.new(), d1, d2);
          let negativeSum = vec2d.Vec2D.negate(new vec2d.Vec2D.new(), sum);
          vec2d.Vec2D.transformMat2(this[_outDirection], negativeSum, inverseWorld);
          vec2d.Vec2D.normalize(this[_outDirection], this[_outDirection]);
        }
        vec2d.Vec2D.normalize(this[_outDirection], this[_outDirection]);
        let scaledOut = vec2d.Vec2D.scale(new vec2d.Vec2D.new(), this[_outDirection], dart.notNull(this[_easeOut]) * dart.notNull(bone.length) * dart.notNull(jelly_component.JellyComponent.curveConstant));
        this[_outPoint]._set(0, bone.length);
        this[_outPoint]._set(1, 0.0);
        vec2d.Vec2D.add(this[_outPoint], this[_outPoint], scaledOut);
      } else {
        this[_outDirection]._set(0, -1.0);
        this[_outDirection]._set(1, 0.0);
        let scaledOut = vec2d.Vec2D.scale(new vec2d.Vec2D.new(), this[_outDirection], dart.notNull(this[_easeOut]) * dart.notNull(bone.length) * dart.notNull(jelly_component.JellyComponent.curveConstant));
        this[_outPoint]._set(0, bone.length);
        this[_outPoint]._set(1, 0.0);
        vec2d.Vec2D.add(this[_outPoint], this[_outPoint], scaledOut);
      }
      this.updateJellies();
    }
  };
  (jelly_component.JellyComponent.new = function() {
    this[_easeIn] = null;
    this[_easeOut] = null;
    this[_scaleIn] = null;
    this[_scaleOut] = null;
    this[_inTargetIdx] = null;
    this[_outTargetIdx] = null;
    this[_inTarget] = null;
    this[_outTarget] = null;
    this[_bones] = null;
    this[_inPoint] = null;
    this[_inDirection] = null;
    this[_outPoint] = null;
    this[_outDirection] = null;
    this[_cachedTip] = null;
    this[_cachedOut] = null;
    this[_cachedIn] = null;
    this[_cachedScaleIn] = null;
    this[_cachedScaleOut] = null;
    this[_jellyPoints] = null;
    jelly_component.JellyComponent.__proto__.new.call(this);
    this[_inPoint] = new vec2d.Vec2D.new();
    this[_inDirection] = new vec2d.Vec2D.new();
    this[_outPoint] = new vec2d.Vec2D.new();
    this[_outDirection] = new vec2d.Vec2D.new();
    this[_cachedTip] = new vec2d.Vec2D.new();
    this[_cachedOut] = new vec2d.Vec2D.new();
    this[_cachedIn] = new vec2d.Vec2D.new();
    this[_jellyPoints] = ListOfVec2D().new(16 + 1);
    for (let i = 0; i <= 16; i = i + 1) {
      this[_jellyPoints][$_set](i, new vec2d.Vec2D.new());
    }
  }).prototype = jelly_component.JellyComponent.prototype;
  dart.addTypeTests(jelly_component.JellyComponent);
  dart.setMethodSignature(jelly_component.JellyComponent, () => ({
    __proto__: dart.getMethods(jelly_component.JellyComponent.__proto__),
    normalizeCurve: dart.fnType(core.List$(vec2d.Vec2D), [core.List$(vec2d.Vec2D), core.int]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    copyJelly: dart.fnType(dart.void, [jelly_component.JellyComponent, actor_artboard.ActorArtboard]),
    completeResolve: dart.fnType(dart.void, []),
    updateJellies: dart.fnType(dart.void, []),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(jelly_component.JellyComponent, () => ({
    __proto__: dart.getGetters(jelly_component.JellyComponent.__proto__),
    inTarget: actor_node.ActorNode,
    outTarget: actor_node.ActorNode
  }));
  dart.setLibraryUri(jelly_component.JellyComponent, "package:flare_dart/jelly_component.dart");
  dart.setFieldSignature(jelly_component.JellyComponent, () => ({
    __proto__: dart.getFields(jelly_component.JellyComponent.__proto__),
    [_easeIn]: dart.fieldType(core.double),
    [_easeOut]: dart.fieldType(core.double),
    [_scaleIn]: dart.fieldType(core.double),
    [_scaleOut]: dart.fieldType(core.double),
    [_inTargetIdx]: dart.fieldType(core.int),
    [_outTargetIdx]: dart.fieldType(core.int),
    [_inTarget]: dart.fieldType(actor_node.ActorNode),
    [_outTarget]: dart.fieldType(actor_node.ActorNode),
    [_bones]: dart.fieldType(core.List$(actor_jelly_bone.ActorJellyBone)),
    [_inPoint]: dart.fieldType(vec2d.Vec2D),
    [_inDirection]: dart.fieldType(vec2d.Vec2D),
    [_outPoint]: dart.fieldType(vec2d.Vec2D),
    [_outDirection]: dart.fieldType(vec2d.Vec2D),
    [_cachedTip]: dart.fieldType(vec2d.Vec2D),
    [_cachedOut]: dart.fieldType(vec2d.Vec2D),
    [_cachedIn]: dart.fieldType(vec2d.Vec2D),
    [_cachedScaleIn]: dart.fieldType(core.double),
    [_cachedScaleOut]: dart.fieldType(core.double),
    [_jellyPoints]: dart.fieldType(core.List$(vec2d.Vec2D))
  }));
  dart.defineLazy(jelly_component.JellyComponent, {
    /*jelly_component.JellyComponent.jellyMax*/get jellyMax() {
      return 16;
    },
    /*jelly_component.JellyComponent.optimalDistance*/get optimalDistance() {
      return 4.0 * (math.sqrt(2.0) - 1.0) / 3.0;
    },
    set optimalDistance(_) {},
    /*jelly_component.JellyComponent.curveConstant*/get curveConstant() {
      return dart.notNull(jelly_component.JellyComponent.optimalDistance) * math.sqrt(2.0) * 0.5;
    },
    set curveConstant(_) {},
    /*jelly_component.JellyComponent.epsilon*/get epsilon() {
      return 0.001;
    }
  });
  const _firstBone = dart.privateName(actor_root_bone, "_firstBone");
  actor_root_bone.ActorRootBone = class ActorRootBone extends actor_node.ActorNode {
    get firstBone() {
      return this[_firstBone];
    }
    completeResolve() {
      super.completeResolve();
      if (this.children == null) {
        return;
      }
      for (let node of this.children) {
        if (actor_bone.ActorBone.is(node)) {
          this[_firstBone] = node;
          return;
        }
      }
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_root_bone.ActorRootBone.new();
      instanceNode.copyNode(this, resetArtboard);
      return instanceNode;
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_root_bone.ActorRootBone.new() : null;
      actor_node.ActorNode.read(artboard, reader, node);
      return node;
    }
  };
  (actor_root_bone.ActorRootBone.new = function() {
    this[_firstBone] = null;
    actor_root_bone.ActorRootBone.__proto__.new.call(this);
    ;
  }).prototype = actor_root_bone.ActorRootBone.prototype;
  dart.addTypeTests(actor_root_bone.ActorRootBone);
  dart.setGetterSignature(actor_root_bone.ActorRootBone, () => ({
    __proto__: dart.getGetters(actor_root_bone.ActorRootBone.__proto__),
    firstBone: actor_bone.ActorBone
  }));
  dart.setLibraryUri(actor_root_bone.ActorRootBone, "package:flare_dart/actor_root_bone.dart");
  dart.setFieldSignature(actor_root_bone.ActorRootBone, () => ({
    __proto__: dart.getFields(actor_root_bone.ActorRootBone.__proto__),
    [_firstBone]: dart.fieldType(actor_bone.ActorBone)
  }));
  const _firstBone$ = dart.privateName(actor_bone, "_firstBone");
  const _length = dart.privateName(actor_bone_base, "_length");
  actor_bone_base.ActorBoneBase = class ActorBoneBase extends actor_node.ActorNode {
    get length() {
      return this[_length];
    }
    set length(value) {
      if (this[_length] == value) {
        return;
      }
      this[_length] = value;
      if (this.children == null) {
        return;
      }
      for (let node of this.children) {
        if (actor_bone_base.ActorBoneBase.is(node)) {
          node.x = value;
        }
      }
    }
    getTipWorldTranslation(vec) {
      let transform = new mat2d.Mat2D.new();
      transform._set(4, this[_length]);
      mat2d.Mat2D.multiply(transform, this.worldTransform, transform);
      vec._set(0, transform._get(4));
      vec._set(1, transform._get(5));
      return vec;
    }
    static read(artboard, reader, node) {
      actor_node.ActorNode.read(artboard, reader, node);
      node[_length] = reader.readFloat32("length");
      return node;
    }
    copyBoneBase(node, resetArtboard) {
      super.copyNode(node, resetArtboard);
      this[_length] = node[_length];
    }
  };
  (actor_bone_base.ActorBoneBase.new = function() {
    this[_length] = null;
    actor_bone_base.ActorBoneBase.__proto__.new.call(this);
    ;
  }).prototype = actor_bone_base.ActorBoneBase.prototype;
  dart.addTypeTests(actor_bone_base.ActorBoneBase);
  dart.setMethodSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getMethods(actor_bone_base.ActorBoneBase.__proto__),
    getTipWorldTranslation: dart.fnType(vec2d.Vec2D, [vec2d.Vec2D]),
    copyBoneBase: dart.fnType(dart.void, [actor_bone_base.ActorBoneBase, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getGetters(actor_bone_base.ActorBoneBase.__proto__),
    length: core.double
  }));
  dart.setSetterSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getSetters(actor_bone_base.ActorBoneBase.__proto__),
    length: core.double
  }));
  dart.setLibraryUri(actor_bone_base.ActorBoneBase, "package:flare_dart/actor_bone_base.dart");
  dart.setFieldSignature(actor_bone_base.ActorBoneBase, () => ({
    __proto__: dart.getFields(actor_bone_base.ActorBoneBase.__proto__),
    [_length]: dart.fieldType(core.double)
  }));
  const jelly = dart.privateName(actor_bone, "ActorBone.jelly");
  actor_bone.ActorBone = class ActorBone extends actor_bone_base.ActorBoneBase {
    get jelly() {
      return this[jelly];
    }
    set jelly(value) {
      this[jelly] = value;
    }
    get firstBone() {
      return this[_firstBone$];
    }
    makeInstance(resetArtboard) {
      let instanceNode = new actor_bone.ActorBone.new();
      instanceNode.copyBoneBase(this, resetArtboard);
      return instanceNode;
    }
    completeResolve() {
      super.completeResolve();
      if (this.children == null) {
        return;
      }
      for (let node of this.children) {
        if (actor_bone.ActorBone.is(node)) {
          this[_firstBone$] = node;
          return;
        }
      }
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_bone.ActorBone.new() : null;
      actor_bone_base.ActorBoneBase.read(artboard, reader, node);
      return node;
    }
  };
  (actor_bone.ActorBone.new = function() {
    this[_firstBone$] = null;
    this[jelly] = null;
    actor_bone.ActorBone.__proto__.new.call(this);
    ;
  }).prototype = actor_bone.ActorBone.prototype;
  dart.addTypeTests(actor_bone.ActorBone);
  dart.setGetterSignature(actor_bone.ActorBone, () => ({
    __proto__: dart.getGetters(actor_bone.ActorBone.__proto__),
    firstBone: actor_bone.ActorBone
  }));
  dart.setLibraryUri(actor_bone.ActorBone, "package:flare_dart/actor_bone.dart");
  dart.setFieldSignature(actor_bone.ActorBone, () => ({
    __proto__: dart.getFields(actor_bone.ActorBone.__proto__),
    [_firstBone$]: dart.fieldType(actor_bone.ActorBone),
    jelly: dart.fieldType(jelly_component.JellyComponent)
  }));
  actor_jelly_bone.ActorJellyBone = class ActorJellyBone extends actor_bone_base.ActorBoneBase {
    makeInstance(artboard) {
      let instanceNode = new actor_jelly_bone.ActorJellyBone.new();
      instanceNode.copyBoneBase(this, artboard);
      return instanceNode;
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_jelly_bone.ActorJellyBone.new() : null;
      actor_component.ActorComponent.read(artboard, reader, node);
      node.opacity = reader.readFloat32("opacity");
      node.collapsedVisibility = reader.readBool("isCollapsed");
      return node;
    }
  };
  (actor_jelly_bone.ActorJellyBone.new = function() {
    actor_jelly_bone.ActorJellyBone.__proto__.new.call(this);
    ;
  }).prototype = actor_jelly_bone.ActorJellyBone.prototype;
  dart.addTypeTests(actor_jelly_bone.ActorJellyBone);
  dart.setLibraryUri(actor_jelly_bone.ActorJellyBone, "package:flare_dart/actor_jelly_bone.dart");
  const _perm = dart.privateName(dependency_sorter, "_perm");
  const _temp = dart.privateName(dependency_sorter, "_temp");
  const _order = dart.privateName(dependency_sorter, "_order");
  dependency_sorter.DependencySorter = class DependencySorter extends core.Object {
    sort(root) {
      this[_order] = JSArrayOfActorComponent().of([]);
      if (!dart.test(this.visit(root))) {
        return null;
      }
      return this[_order];
    }
    visit(n) {
      if (dart.test(this[_perm].contains(n))) {
        return true;
      }
      if (dart.test(this[_temp].contains(n))) {
        core.print("Dependency cycle!");
        return false;
      }
      this[_temp].add(n);
      let dependents = n.dependents;
      if (dependents != null) {
        for (let d of dependents) {
          if (!dart.test(this.visit(d))) {
            return false;
          }
        }
      }
      this[_perm].add(n);
      this[_order][$insert](0, n);
      return true;
    }
  };
  (dependency_sorter.DependencySorter.new = function() {
    this[_perm] = null;
    this[_temp] = null;
    this[_order] = null;
    this[_perm] = new (_HashSetOfActorComponent()).new();
    this[_temp] = new (_HashSetOfActorComponent()).new();
  }).prototype = dependency_sorter.DependencySorter.prototype;
  dart.addTypeTests(dependency_sorter.DependencySorter);
  dart.setMethodSignature(dependency_sorter.DependencySorter, () => ({
    __proto__: dart.getMethods(dependency_sorter.DependencySorter.__proto__),
    sort: dart.fnType(core.List$(actor_component.ActorComponent), [actor_component.ActorComponent]),
    visit: dart.fnType(core.bool, [actor_component.ActorComponent])
  }));
  dart.setLibraryUri(dependency_sorter.DependencySorter, "package:flare_dart/dependency_sorter.dart");
  dart.setFieldSignature(dependency_sorter.DependencySorter, () => ({
    __proto__: dart.getFields(dependency_sorter.DependencySorter.__proto__),
    [_perm]: dart.fieldType(collection.HashSet$(actor_component.ActorComponent)),
    [_temp]: dart.fieldType(collection.HashSet$(actor_component.ActorComponent)),
    [_order]: dart.fieldType(core.List$(actor_component.ActorComponent))
  }));
  const _type = dart.privateName(actor_animation, "_type");
  const _keyFrames = dart.privateName(actor_animation, "_keyFrames");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  actor_animation.PropertyAnimation = class PropertyAnimation extends core.Object {
    get propertyType() {
      return this[_type];
    }
    get keyFrames() {
      return this[_keyFrames];
    }
    static read(reader, component) {
      let propertyBlock = reader.readNextBlock(property_types.propertyTypesMap);
      if (propertyBlock == null) {
        return null;
      }
      let propertyAnimation = new actor_animation.PropertyAnimation.new();
      let type = propertyBlock.blockType;
      propertyAnimation[_type] = type;
      let keyFrameReader = null;
      switch (propertyAnimation[_type]) {
        case 1:
        {
          keyFrameReader = C0 || CT.C0;
          break;
        }
        case 2:
        {
          keyFrameReader = C1 || CT.C1;
          break;
        }
        case 3:
        {
          keyFrameReader = C2 || CT.C2;
          break;
        }
        case 4:
        {
          keyFrameReader = C3 || CT.C3;
          break;
        }
        case 5:
        {
          keyFrameReader = C4 || CT.C4;
          break;
        }
        case 6:
        {
          keyFrameReader = C5 || CT.C5;
          break;
        }
        case 7:
        {
          keyFrameReader = C6 || CT.C6;
          break;
        }
        case 8:
        {
          keyFrameReader = C7 || CT.C7;
          break;
        }
        case 9:
        {
          keyFrameReader = C8 || CT.C8;
          break;
        }
        case 10:
        {
          keyFrameReader = C9 || CT.C9;
          break;
        }
        case 11:
        {
          keyFrameReader = C10 || CT.C10;
          break;
        }
        case 12:
        {
          keyFrameReader = C11 || CT.C11;
          break;
        }
        case 13:
        {
          keyFrameReader = C12 || CT.C12;
          break;
        }
        case 14:
        {
          keyFrameReader = C13 || CT.C13;
          break;
        }
        case 15:
        {
          keyFrameReader = C14 || CT.C14;
          break;
        }
        case 16:
        {
          keyFrameReader = C15 || CT.C15;
          break;
        }
        case 18:
        {
          keyFrameReader = C16 || CT.C16;
          break;
        }
        case 17:
        {
          keyFrameReader = C17 || CT.C17;
          break;
        }
        case 19:
        {
          keyFrameReader = C18 || CT.C18;
          break;
        }
        case 20:
        {
          keyFrameReader = C19 || CT.C19;
          break;
        }
        case 21:
        {
          keyFrameReader = C20 || CT.C20;
          break;
        }
        case 24:
        {
          keyFrameReader = C20 || CT.C20;
          break;
        }
        case 22:
        {
          keyFrameReader = C21 || CT.C21;
          break;
        }
        case 25:
        {
          keyFrameReader = C21 || CT.C21;
          break;
        }
        case 23:
        {
          keyFrameReader = C22 || CT.C22;
          break;
        }
        case 26:
        {
          keyFrameReader = C23 || CT.C23;
          break;
        }
        case 27:
        case 28:
        {
          keyFrameReader = C24 || CT.C24;
          break;
        }
        case 29:
        {
          keyFrameReader = C25 || CT.C25;
          break;
        }
        case 30:
        {
          keyFrameReader = C26 || CT.C26;
          break;
        }
        case 31:
        {
          keyFrameReader = C27 || CT.C27;
          break;
        }
        case 32:
        {
          keyFrameReader = C28 || CT.C28;
          break;
        }
        case 33:
        {
          keyFrameReader = C29 || CT.C29;
          break;
        }
        case 34:
        {
          keyFrameReader = C30 || CT.C30;
          break;
        }
        case 35:
        {
          keyFrameReader = C31 || CT.C31;
          break;
        }
      }
      if (keyFrameReader == null) {
        return null;
      }
      propertyBlock.openArray("frames");
      let keyFrameCount = propertyBlock.readUint16Length();
      propertyAnimation[_keyFrames] = ListOfKeyFrame().new(keyFrameCount);
      let lastKeyFrame = null;
      for (let i = 0; i < dart.notNull(keyFrameCount); i = i + 1) {
        propertyBlock.openObject("frame");
        let frame = keyFrameReader(propertyBlock, component);
        propertyAnimation[_keyFrames][$_set](i, frame);
        if (lastKeyFrame != null) {
          lastKeyFrame.setNext(frame);
        }
        lastKeyFrame = frame;
        propertyBlock.closeObject();
      }
      propertyBlock.closeArray();
      return propertyAnimation;
    }
    apply(time, component, mix) {
      if (dart.test(this[_keyFrames][$isEmpty])) {
        return;
      }
      let idx = 0;
      {
        let mid = 0;
        let element = 0.0;
        let start = 0;
        let end = dart.notNull(this[_keyFrames][$length]) - 1;
        while (start <= end) {
          mid = (start + end)[$rightShift](1);
          element = this[_keyFrames][$_get](mid).time;
          if (dart.notNull(element) < dart.notNull(time)) {
            start = mid + 1;
          } else if (dart.notNull(element) > dart.notNull(time)) {
            end = mid - 1;
          } else {
            start = mid;
            break;
          }
        }
        idx = start;
      }
      if (idx === 0) {
        this[_keyFrames][$_get](0).apply(component, mix);
      } else {
        if (idx < dart.notNull(this[_keyFrames][$length])) {
          let fromFrame = this[_keyFrames][$_get](idx - 1);
          let toFrame = this[_keyFrames][$_get](idx);
          if (time == toFrame.time) {
            toFrame.apply(component, mix);
          } else {
            fromFrame.applyInterpolation(component, time, toFrame, mix);
          }
        } else {
          this[_keyFrames][$_get](idx - 1).apply(component, mix);
        }
      }
    }
  };
  (actor_animation.PropertyAnimation.new = function() {
    this[_type] = null;
    this[_keyFrames] = null;
    ;
  }).prototype = actor_animation.PropertyAnimation.prototype;
  dart.addTypeTests(actor_animation.PropertyAnimation);
  dart.setMethodSignature(actor_animation.PropertyAnimation, () => ({
    __proto__: dart.getMethods(actor_animation.PropertyAnimation.__proto__),
    apply: dart.fnType(dart.void, [core.double, actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(actor_animation.PropertyAnimation, () => ({
    __proto__: dart.getGetters(actor_animation.PropertyAnimation.__proto__),
    propertyType: core.int,
    keyFrames: core.List$(keyframe.KeyFrame)
  }));
  dart.setLibraryUri(actor_animation.PropertyAnimation, "package:flare_dart/animation/actor_animation.dart");
  dart.setFieldSignature(actor_animation.PropertyAnimation, () => ({
    __proto__: dart.getFields(actor_animation.PropertyAnimation.__proto__),
    [_type]: dart.fieldType(core.int),
    [_keyFrames]: dart.fieldType(core.List$(keyframe.KeyFrame))
  }));
  const _componentIndex = dart.privateName(actor_animation, "_componentIndex");
  const _properties = dart.privateName(actor_animation, "_properties");
  actor_animation.ComponentAnimation = class ComponentAnimation extends core.Object {
    get componentIndex() {
      return this[_componentIndex];
    }
    get properties() {
      return this[_properties];
    }
    static read(reader, components) {
      reader.openObject("component");
      let componentAnimation = new actor_animation.ComponentAnimation.new();
      componentAnimation[_componentIndex] = reader.readId("component");
      let numProperties = reader.readUint16Length();
      componentAnimation[_properties] = ListOfPropertyAnimation().new(numProperties);
      for (let i = 0; i < dart.notNull(numProperties); i = i + 1) {
        if (!(dart.notNull(componentAnimation[_componentIndex]) < dart.notNull(components[$length]))) dart.assertFailed(null, "org-dartlang-app:///packages/flare_dart/animation/actor_animation.dart", 230, 14, "componentAnimation._componentIndex < components.length");
        componentAnimation[_properties][$_set](i, actor_animation.PropertyAnimation.read(reader, components[$_get](componentAnimation[_componentIndex])));
      }
      reader.closeObject();
      return componentAnimation;
    }
    apply(time, components, mix) {
      for (let propertyAnimation of this[_properties]) {
        if (propertyAnimation != null) {
          propertyAnimation.apply(time, components[$_get](this[_componentIndex]), mix);
        }
      }
    }
  };
  (actor_animation.ComponentAnimation.new = function() {
    this[_componentIndex] = null;
    this[_properties] = null;
    ;
  }).prototype = actor_animation.ComponentAnimation.prototype;
  dart.addTypeTests(actor_animation.ComponentAnimation);
  dart.setMethodSignature(actor_animation.ComponentAnimation, () => ({
    __proto__: dart.getMethods(actor_animation.ComponentAnimation.__proto__),
    apply: dart.fnType(dart.void, [core.double, core.List$(actor_component.ActorComponent), core.double])
  }));
  dart.setGetterSignature(actor_animation.ComponentAnimation, () => ({
    __proto__: dart.getGetters(actor_animation.ComponentAnimation.__proto__),
    componentIndex: core.int,
    properties: core.List$(actor_animation.PropertyAnimation)
  }));
  dart.setLibraryUri(actor_animation.ComponentAnimation, "package:flare_dart/animation/actor_animation.dart");
  dart.setFieldSignature(actor_animation.ComponentAnimation, () => ({
    __proto__: dart.getFields(actor_animation.ComponentAnimation.__proto__),
    [_componentIndex]: dart.fieldType(core.int),
    [_properties]: dart.fieldType(core.List$(actor_animation.PropertyAnimation))
  }));
  const _name$0 = dart.privateName(actor_animation, "_name");
  const _component = dart.privateName(actor_animation, "_component");
  const _propertyType = dart.privateName(actor_animation, "_propertyType");
  const _keyFrameTime = dart.privateName(actor_animation, "_keyFrameTime");
  const _elapsedTime = dart.privateName(actor_animation, "_elapsedTime");
  actor_animation.AnimationEventArgs = class AnimationEventArgs extends core.Object {
    get name() {
      return this[_name$0];
    }
    get component() {
      return this[_component];
    }
    get propertyType() {
      return this[_propertyType];
    }
    get keyFrameTime() {
      return this[_keyFrameTime];
    }
    get elapsedTime() {
      return this[_elapsedTime];
    }
  };
  (actor_animation.AnimationEventArgs.new = function(name, component, type, keyframeTime, elapsedTime) {
    this[_name$0] = null;
    this[_component] = null;
    this[_propertyType] = null;
    this[_keyFrameTime] = null;
    this[_elapsedTime] = null;
    this[_name$0] = name;
    this[_component] = component;
    this[_propertyType] = type;
    this[_keyFrameTime] = keyframeTime;
    this[_elapsedTime] = elapsedTime;
  }).prototype = actor_animation.AnimationEventArgs.prototype;
  dart.addTypeTests(actor_animation.AnimationEventArgs);
  dart.setGetterSignature(actor_animation.AnimationEventArgs, () => ({
    __proto__: dart.getGetters(actor_animation.AnimationEventArgs.__proto__),
    name: core.String,
    component: actor_component.ActorComponent,
    propertyType: core.int,
    keyFrameTime: core.double,
    elapsedTime: core.double
  }));
  dart.setLibraryUri(actor_animation.AnimationEventArgs, "package:flare_dart/animation/actor_animation.dart");
  dart.setFieldSignature(actor_animation.AnimationEventArgs, () => ({
    __proto__: dart.getFields(actor_animation.AnimationEventArgs.__proto__),
    [_name$0]: dart.fieldType(core.String),
    [_component]: dart.fieldType(actor_component.ActorComponent),
    [_propertyType]: dart.fieldType(core.int),
    [_keyFrameTime]: dart.fieldType(core.double),
    [_elapsedTime]: dart.fieldType(core.double)
  }));
  const _fps = dart.privateName(actor_animation, "_fps");
  const _duration = dart.privateName(actor_animation, "_duration");
  const _isLooping = dart.privateName(actor_animation, "_isLooping");
  const _components$ = dart.privateName(actor_animation, "_components");
  const _triggerComponents = dart.privateName(actor_animation, "_triggerComponents");
  actor_animation.ActorAnimation = class ActorAnimation extends core.Object {
    get name() {
      return this[_name$0];
    }
    get fps() {
      return this[_fps];
    }
    get isLooping() {
      return this[_isLooping];
    }
    get duration() {
      return this[_duration];
    }
    get animatedComponents() {
      return this[_components$];
    }
    triggerEvents(components, fromTime, toTime, triggerEvents) {
      for (let i = 0; i < dart.notNull(this[_triggerComponents][$length]); i = i + 1) {
        let keyedComponent = this[_triggerComponents][$_get](i);
        for (let property of keyedComponent.properties) {
          switch (property.propertyType) {
            case 11:
            {
              let keyFrames = property.keyFrames;
              let kfl = keyFrames[$length];
              if (kfl === 0) {
                continue;
              }
              let idx = 0;
              {
                let mid = 0;
                let element = 0.0;
                let start = 0;
                let end = dart.notNull(kfl) - 1;
                while (start <= end) {
                  mid = (start + end)[$rightShift](1);
                  element = keyFrames[$_get](mid).time;
                  if (dart.notNull(element) < dart.notNull(toTime)) {
                    start = mid + 1;
                  } else if (dart.notNull(element) > dart.notNull(toTime)) {
                    end = mid - 1;
                  } else {
                    start = mid;
                    break;
                  }
                }
                idx = start;
              }
              if (idx === 0) {
                if (dart.notNull(kfl) > 0 && keyFrames[$_get](0).time == toTime) {
                  let component = components[$_get](keyedComponent.componentIndex);
                  triggerEvents[$add](new actor_animation.AnimationEventArgs.new(component.name, component, property.propertyType, toTime, 0.0));
                }
              } else {
                for (let k = idx - 1; k >= 0; k = k - 1) {
                  let frame = keyFrames[$_get](k);
                  if (dart.notNull(frame.time) > dart.notNull(fromTime)) {
                    let component = components[$_get](keyedComponent.componentIndex);
                    triggerEvents[$add](new actor_animation.AnimationEventArgs.new(component.name, component, property.propertyType, frame.time, dart.notNull(toTime) - dart.notNull(frame.time)));
                  } else {
                    break;
                  }
                }
              }
              break;
            }
            default:
            {
              break;
            }
          }
        }
      }
    }
    apply(time, artboard, mix) {
      for (let componentAnimation of this[_components$]) {
        componentAnimation.apply(time, artboard.components, mix);
      }
    }
    static read(reader, components) {
      let t0, t0$;
      let animation = new actor_animation.ActorAnimation.new();
      animation[_name$0] = reader.readString("name");
      animation[_fps] = reader.readUint8("fps");
      animation[_duration] = reader.readFloat32("duration");
      animation[_isLooping] = reader.readBool("isLooping");
      reader.openArray("keyed");
      let numKeyedComponents = reader.readUint16Length();
      let animatedComponentCount = 0;
      let triggerComponentCount = 0;
      let animatedComponents = ListOfComponentAnimation().new(numKeyedComponents);
      for (let i = 0; i < dart.notNull(numKeyedComponents); i = i + 1) {
        let componentAnimation = actor_animation.ComponentAnimation.read(reader, components);
        animatedComponents[$_set](i, componentAnimation);
        if (componentAnimation != null && dart.notNull(componentAnimation.componentIndex) < dart.notNull(components[$length])) {
          let actorComponent = components[$_get](componentAnimation.componentIndex);
          if (actorComponent != null) {
            if (actor_event.ActorEvent.is(actorComponent)) {
              triggerComponentCount = triggerComponentCount + 1;
            } else {
              animatedComponentCount = animatedComponentCount + 1;
            }
          }
        }
      }
      reader.closeArray();
      animation[_components$] = ListOfComponentAnimation().new(animatedComponentCount);
      animation[_triggerComponents] = ListOfComponentAnimation().new(triggerComponentCount);
      let animatedComponentIndex = 0;
      let triggerComponentIndex = 0;
      for (let i = 0; i < dart.notNull(numKeyedComponents); i = i + 1) {
        let componentAnimation = animatedComponents[$_get](i);
        if (componentAnimation != null) {
          let actorComponent = components[$_get](componentAnimation.componentIndex);
          if (actorComponent != null) {
            if (actor_event.ActorEvent.is(actorComponent)) {
              animation[_triggerComponents][$_set]((t0 = triggerComponentIndex, triggerComponentIndex = t0 + 1, t0), componentAnimation);
            } else {
              animation[_components$][$_set]((t0$ = animatedComponentIndex, animatedComponentIndex = t0$ + 1, t0$), componentAnimation);
            }
          }
        }
      }
      return animation;
    }
  };
  (actor_animation.ActorAnimation.new = function() {
    this[_name$0] = null;
    this[_fps] = null;
    this[_duration] = null;
    this[_isLooping] = null;
    this[_components$] = null;
    this[_triggerComponents] = null;
    ;
  }).prototype = actor_animation.ActorAnimation.prototype;
  dart.addTypeTests(actor_animation.ActorAnimation);
  dart.setMethodSignature(actor_animation.ActorAnimation, () => ({
    __proto__: dart.getMethods(actor_animation.ActorAnimation.__proto__),
    triggerEvents: dart.fnType(dart.void, [core.List$(actor_component.ActorComponent), core.double, core.double, core.List$(actor_animation.AnimationEventArgs)]),
    apply: dart.fnType(dart.void, [core.double, actor_artboard.ActorArtboard, core.double])
  }));
  dart.setGetterSignature(actor_animation.ActorAnimation, () => ({
    __proto__: dart.getGetters(actor_animation.ActorAnimation.__proto__),
    name: core.String,
    fps: core.int,
    isLooping: core.bool,
    duration: core.double,
    animatedComponents: core.List$(actor_animation.ComponentAnimation)
  }));
  dart.setLibraryUri(actor_animation.ActorAnimation, "package:flare_dart/animation/actor_animation.dart");
  dart.setFieldSignature(actor_animation.ActorAnimation, () => ({
    __proto__: dart.getFields(actor_animation.ActorAnimation.__proto__),
    [_name$0]: dart.fieldType(core.String),
    [_fps]: dart.fieldType(core.int),
    [_duration]: dart.fieldType(core.double),
    [_isLooping]: dart.fieldType(core.bool),
    [_components$]: dart.fieldType(core.List$(actor_animation.ComponentAnimation)),
    [_triggerComponents]: dart.fieldType(core.List$(actor_animation.ComponentAnimation))
  }));
  const _name$1 = dart.privateName(keyframe, "_name");
  let C32;
  let C33;
  let C34;
  let C35;
  keyframe.InterpolationTypes = class InterpolationTypes extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (keyframe.InterpolationTypes.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = keyframe.InterpolationTypes.prototype;
  dart.addTypeTests(keyframe.InterpolationTypes);
  dart.setLibraryUri(keyframe.InterpolationTypes, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.InterpolationTypes, () => ({
    __proto__: dart.getFields(keyframe.InterpolationTypes.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(keyframe.InterpolationTypes, ['toString']);
  keyframe.InterpolationTypes.hold = C32 || CT.C32;
  keyframe.InterpolationTypes.linear = C33 || CT.C33;
  keyframe.InterpolationTypes.cubic = C34 || CT.C34;
  keyframe.InterpolationTypes.values = C35 || CT.C35;
  const _time = dart.privateName(keyframe, "_time");
  keyframe.KeyFrame = class KeyFrame extends core.Object {
    get time() {
      return this[_time];
    }
    static read(reader, frame) {
      frame[_time] = reader.readFloat64("time");
      return true;
    }
  };
  (keyframe.KeyFrame.new = function() {
    this[_time] = null;
    ;
  }).prototype = keyframe.KeyFrame.prototype;
  dart.addTypeTests(keyframe.KeyFrame);
  dart.setGetterSignature(keyframe.KeyFrame, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrame.__proto__),
    time: core.double
  }));
  dart.setLibraryUri(keyframe.KeyFrame, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrame, () => ({
    __proto__: dart.getFields(keyframe.KeyFrame.__proto__),
    [_time]: dart.fieldType(core.double)
  }));
  const _interpolator = dart.privateName(keyframe, "_interpolator");
  keyframe.KeyFrameWithInterpolation = class KeyFrameWithInterpolation extends keyframe.KeyFrame {
    get interpolator() {
      return this[_interpolator];
    }
    static read(reader, frame) {
      if (!dart.test(keyframe.KeyFrame.read(reader, frame))) {
        return false;
      }
      let type = reader.readUint8("interpolatorType");
      let actualType = keyframe.interpolationTypesLookup[$_get](type);
      actualType == null ? actualType = keyframe.InterpolationTypes.linear : null;
      switch (actualType) {
        case C32 || CT.C32:
        {
          frame[_interpolator] = hold.HoldInterpolator.instance;
          break;
        }
        case C33 || CT.C33:
        {
          frame[_interpolator] = linear.LinearInterpolator.instance;
          break;
        }
        case C34 || CT.C34:
        {
          {
            let interpolator = new cubic.CubicInterpolator.new();
            if (dart.test(interpolator.read(reader))) {
              frame[_interpolator] = interpolator;
            }
            break;
          }
        }
        default:
        {
          frame[_interpolator] = null;
        }
      }
      return true;
    }
    setNext(frame) {
    }
  };
  (keyframe.KeyFrameWithInterpolation.new = function() {
    this[_interpolator] = null;
    keyframe.KeyFrameWithInterpolation.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameWithInterpolation.prototype;
  dart.addTypeTests(keyframe.KeyFrameWithInterpolation);
  dart.setMethodSignature(keyframe.KeyFrameWithInterpolation, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameWithInterpolation.__proto__),
    setNext: dart.fnType(dart.void, [keyframe.KeyFrame])
  }));
  dart.setGetterSignature(keyframe.KeyFrameWithInterpolation, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameWithInterpolation.__proto__),
    interpolator: interpolator.Interpolator
  }));
  dart.setLibraryUri(keyframe.KeyFrameWithInterpolation, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameWithInterpolation, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameWithInterpolation.__proto__),
    [_interpolator]: dart.fieldType(interpolator.Interpolator)
  }));
  const _value = dart.privateName(keyframe, "_value");
  keyframe.KeyFrameNumeric = class KeyFrameNumeric extends keyframe.KeyFrameWithInterpolation {
    get value() {
      return this[_value];
    }
    static read(reader, frame) {
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame))) {
        return false;
      }
      frame[_value] = reader.readFloat32("value");
      if (frame[_value][$isNaN]) {
        frame[_value] = 1.0;
      }
      return true;
    }
    applyInterpolation(component, time, toFrame, mix) {
      let to = keyframe.KeyFrameNumeric.as(toFrame);
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(to[_time]) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      this.setValue(component, dart.notNull(this[_value]) * (1.0 - dart.notNull(f)) + dart.notNull(to[_value]) * dart.notNull(f), mix);
    }
    apply(component, mix) {
      this.setValue(component, this[_value], mix);
    }
  };
  (keyframe.KeyFrameNumeric.new = function() {
    this[_value] = null;
    keyframe.KeyFrameNumeric.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameNumeric.prototype;
  dart.addTypeTests(keyframe.KeyFrameNumeric);
  dart.setMethodSignature(keyframe.KeyFrameNumeric, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameNumeric.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFrameNumeric, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameNumeric.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(keyframe.KeyFrameNumeric, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameNumeric, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameNumeric.__proto__),
    [_value]: dart.fieldType(core.double)
  }));
  keyframe.KeyFrameInt = class KeyFrameInt extends keyframe.KeyFrameWithInterpolation {
    get value() {
      return this[_value];
    }
    static read(reader, frame) {
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame))) {
        return false;
      }
      frame[_value] = reader.readInt32("value")[$toDouble]();
      return true;
    }
    applyInterpolation(component, time, toFrame, mix) {
      let to = keyframe.KeyFrameNumeric.as(toFrame);
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(to[_time]) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      this.setValue(component, dart.notNull(this[_value]) * (1.0 - dart.notNull(f)) + dart.notNull(to[_value]) * dart.notNull(f), mix);
    }
    apply(component, mix) {
      this.setValue(component, this[_value], mix);
    }
  };
  (keyframe.KeyFrameInt.new = function() {
    this[_value] = null;
    keyframe.KeyFrameInt.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameInt.prototype;
  dart.addTypeTests(keyframe.KeyFrameInt);
  dart.setMethodSignature(keyframe.KeyFrameInt, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameInt.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFrameInt, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameInt.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(keyframe.KeyFrameInt, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameInt, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameInt.__proto__),
    [_value]: dart.fieldType(core.double)
  }));
  keyframe.KeyFrameIntProperty = class KeyFrameIntProperty extends keyframe.KeyFrameInt {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameIntProperty.new();
      if (dart.test(keyframe.KeyFrameInt.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
    }
  };
  (keyframe.KeyFrameIntProperty.new = function() {
    keyframe.KeyFrameIntProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameIntProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameIntProperty);
  dart.setMethodSignature(keyframe.KeyFrameIntProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameIntProperty.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameIntProperty, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameFloatProperty = class KeyFrameFloatProperty extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameFloatProperty.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
    }
  };
  (keyframe.KeyFrameFloatProperty.new = function() {
    keyframe.KeyFrameFloatProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameFloatProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameFloatProperty);
  dart.setMethodSignature(keyframe.KeyFrameFloatProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameFloatProperty.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameFloatProperty, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameStringProperty = class KeyFrameStringProperty extends keyframe.KeyFrame {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStringProperty.new();
      if (!dart.test(keyframe.KeyFrame.read(reader, frame))) {
        return null;
      }
      frame[_value] = reader.readString("value");
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    apply(component, mix) {
    }
  };
  (keyframe.KeyFrameStringProperty.new = function() {
    this[_value] = null;
    keyframe.KeyFrameStringProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStringProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameStringProperty);
  dart.setMethodSignature(keyframe.KeyFrameStringProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStringProperty.__proto__),
    setNext: dart.fnType(dart.void, [keyframe.KeyFrame]),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameStringProperty, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameStringProperty, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameStringProperty.__proto__),
    [_value]: dart.fieldType(core.String)
  }));
  keyframe.KeyFrameBooleanProperty = class KeyFrameBooleanProperty extends keyframe.KeyFrame {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameBooleanProperty.new();
      if (!dart.test(keyframe.KeyFrame.read(reader, frame))) {
        return null;
      }
      frame[_value] = reader.readBool("value");
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    apply(component, mix) {
    }
  };
  (keyframe.KeyFrameBooleanProperty.new = function() {
    this[_value] = null;
    keyframe.KeyFrameBooleanProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameBooleanProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameBooleanProperty);
  dart.setMethodSignature(keyframe.KeyFrameBooleanProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameBooleanProperty.__proto__),
    setNext: dart.fnType(dart.void, [keyframe.KeyFrame]),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameBooleanProperty, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameBooleanProperty, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameBooleanProperty.__proto__),
    [_value]: dart.fieldType(core.bool)
  }));
  keyframe.KeyFrameCollisionEnabledProperty = class KeyFrameCollisionEnabledProperty extends keyframe.KeyFrame {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameCollisionEnabledProperty.new();
      if (!dart.test(keyframe.KeyFrame.read(reader, frame))) {
        return null;
      }
      frame[_value] = reader.readBool("value");
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    apply(component, mix) {
    }
  };
  (keyframe.KeyFrameCollisionEnabledProperty.new = function() {
    this[_value] = null;
    keyframe.KeyFrameCollisionEnabledProperty.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameCollisionEnabledProperty.prototype;
  dart.addTypeTests(keyframe.KeyFrameCollisionEnabledProperty);
  dart.setMethodSignature(keyframe.KeyFrameCollisionEnabledProperty, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameCollisionEnabledProperty.__proto__),
    setNext: dart.fnType(dart.void, [keyframe.KeyFrame]),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameCollisionEnabledProperty, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameCollisionEnabledProperty, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameCollisionEnabledProperty.__proto__),
    [_value]: dart.fieldType(core.bool)
  }));
  keyframe.KeyFramePosX = class KeyFramePosX extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFramePosX.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.x = dart.notNull(node.x) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFramePosX.new = function() {
    keyframe.KeyFramePosX.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePosX.prototype;
  dart.addTypeTests(keyframe.KeyFramePosX);
  dart.setMethodSignature(keyframe.KeyFramePosX, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePosX.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFramePosX, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFramePosY = class KeyFramePosY extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFramePosY.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.y = dart.notNull(node.y) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFramePosY.new = function() {
    keyframe.KeyFramePosY.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePosY.prototype;
  dart.addTypeTests(keyframe.KeyFramePosY);
  dart.setMethodSignature(keyframe.KeyFramePosY, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePosY.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFramePosY, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameScaleX = class KeyFrameScaleX extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameScaleX.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.scaleX = dart.notNull(node.scaleX) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameScaleX.new = function() {
    keyframe.KeyFrameScaleX.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameScaleX.prototype;
  dart.addTypeTests(keyframe.KeyFrameScaleX);
  dart.setMethodSignature(keyframe.KeyFrameScaleX, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameScaleX.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameScaleX, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameScaleY = class KeyFrameScaleY extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameScaleY.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.scaleY = dart.notNull(node.scaleY) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameScaleY.new = function() {
    keyframe.KeyFrameScaleY.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameScaleY.prototype;
  dart.addTypeTests(keyframe.KeyFrameScaleY);
  dart.setMethodSignature(keyframe.KeyFrameScaleY, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameScaleY.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameScaleY, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameRotation = class KeyFrameRotation extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameRotation.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.rotation = dart.notNull(node.rotation) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameRotation.new = function() {
    keyframe.KeyFrameRotation.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameRotation.prototype;
  dart.addTypeTests(keyframe.KeyFrameRotation);
  dart.setMethodSignature(keyframe.KeyFrameRotation, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameRotation.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameRotation, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameOpacity = class KeyFrameOpacity extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameOpacity.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_node.ActorNode.as(component);
      node.opacity = dart.notNull(node.opacity) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameOpacity.new = function() {
    keyframe.KeyFrameOpacity.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameOpacity.prototype;
  dart.addTypeTests(keyframe.KeyFrameOpacity);
  dart.setMethodSignature(keyframe.KeyFrameOpacity, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameOpacity.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameOpacity, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameLength = class KeyFrameLength extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameLength.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let bone = actor_bone_base.ActorBoneBase.as(component);
      if (bone == null) {
        return;
      }
      bone.length = dart.notNull(bone.length) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameLength.new = function() {
    keyframe.KeyFrameLength.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameLength.prototype;
  dart.addTypeTests(keyframe.KeyFrameLength);
  dart.setMethodSignature(keyframe.KeyFrameLength, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameLength.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameLength, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameConstraintStrength = class KeyFrameConstraintStrength extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameConstraintStrength.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let constraint = actor_constraint.ActorConstraint.as(component);
      constraint.strength = dart.notNull(constraint.strength) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameConstraintStrength.new = function() {
    keyframe.KeyFrameConstraintStrength.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameConstraintStrength.prototype;
  dart.addTypeTests(keyframe.KeyFrameConstraintStrength);
  dart.setMethodSignature(keyframe.KeyFrameConstraintStrength, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameConstraintStrength.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameConstraintStrength, "package:flare_dart/animation/keyframe.dart");
  const componentIndex = dart.privateName(keyframe, "DrawOrderIndex.componentIndex");
  const order = dart.privateName(keyframe, "DrawOrderIndex.order");
  keyframe.DrawOrderIndex = class DrawOrderIndex extends core.Object {
    get componentIndex() {
      return this[componentIndex];
    }
    set componentIndex(value) {
      this[componentIndex] = value;
    }
    get order() {
      return this[order];
    }
    set order(value) {
      this[order] = value;
    }
  };
  (keyframe.DrawOrderIndex.new = function() {
    this[componentIndex] = null;
    this[order] = null;
    ;
  }).prototype = keyframe.DrawOrderIndex.prototype;
  dart.addTypeTests(keyframe.DrawOrderIndex);
  dart.setLibraryUri(keyframe.DrawOrderIndex, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.DrawOrderIndex, () => ({
    __proto__: dart.getFields(keyframe.DrawOrderIndex.__proto__),
    componentIndex: dart.fieldType(core.int),
    order: dart.fieldType(core.int)
  }));
  const _orderedNodes = dart.privateName(keyframe, "_orderedNodes");
  keyframe.KeyFrameDrawOrder = class KeyFrameDrawOrder extends keyframe.KeyFrame {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameDrawOrder.new();
      if (!dart.test(keyframe.KeyFrame.read(reader, frame))) {
        return null;
      }
      reader.openArray("drawOrder");
      let numOrderedNodes = reader.readUint16Length();
      frame[_orderedNodes] = ListOfDrawOrderIndex().new(numOrderedNodes);
      for (let i = 0; i < dart.notNull(numOrderedNodes); i = i + 1) {
        reader.openObject("order");
        let drawOrder = new keyframe.DrawOrderIndex.new();
        drawOrder.componentIndex = reader.readId("component");
        drawOrder.order = reader.readUint16("order");
        reader.closeObject();
        frame[_orderedNodes][$_set](i, drawOrder);
      }
      reader.closeArray();
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    apply(component, mix) {
      let artboard = component.artboard;
      for (let doi of this[_orderedNodes]) {
        let component = artboard._get(doi.componentIndex);
        if (actor_drawable.ActorDrawable.is(component)) {
          component.drawOrder = doi.order;
        }
      }
    }
  };
  (keyframe.KeyFrameDrawOrder.new = function() {
    this[_orderedNodes] = null;
    keyframe.KeyFrameDrawOrder.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameDrawOrder.prototype;
  dart.addTypeTests(keyframe.KeyFrameDrawOrder);
  dart.setMethodSignature(keyframe.KeyFrameDrawOrder, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameDrawOrder.__proto__),
    setNext: dart.fnType(dart.void, [keyframe.KeyFrame]),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameDrawOrder, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameDrawOrder, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameDrawOrder.__proto__),
    [_orderedNodes]: dart.fieldType(core.List$(keyframe.DrawOrderIndex))
  }));
  const _vertices = dart.privateName(keyframe, "_vertices");
  keyframe.KeyFrameImageVertices = class KeyFrameImageVertices extends keyframe.KeyFrameWithInterpolation {
    get vertices() {
      return this[_vertices];
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameImageVertices.new();
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame))) {
        return null;
      }
      let imageNode = actor_image.ActorImage.as(component);
      frame[_vertices] = reader.readFloat32Array(dart.notNull(imageNode.vertexCount) * 2, "value");
      imageNode.doesAnimationVertexDeform = true;
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      let imageNode = actor_image.ActorImage.as(component);
      let wr = imageNode.animationDeformedVertices;
      let to = keyframe.KeyFrameImageVertices.as(toFrame)[_vertices];
      let l = this[_vertices][$length];
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(toFrame.time) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      let fi = 1.0 - dart.notNull(f);
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, dart.notNull(this[_vertices][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          let v = dart.notNull(this[_vertices][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f);
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + v * dart.notNull(mix));
        }
      }
      imageNode.invalidateDrawable();
    }
    apply(component, mix) {
      let imageNode = actor_image.ActorImage.as(component);
      let l = this[_vertices][$length];
      let wr = imageNode.animationDeformedVertices;
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, this[_vertices][$_get](i));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + dart.notNull(this[_vertices][$_get](i)) * dart.notNull(mix));
        }
      }
      imageNode.invalidateDrawable();
    }
  };
  (keyframe.KeyFrameImageVertices.new = function() {
    this[_vertices] = null;
    keyframe.KeyFrameImageVertices.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameImageVertices.prototype;
  dart.addTypeTests(keyframe.KeyFrameImageVertices);
  dart.setMethodSignature(keyframe.KeyFrameImageVertices, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameImageVertices.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFrameImageVertices, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameImageVertices.__proto__),
    vertices: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameImageVertices, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameImageVertices, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameImageVertices.__proto__),
    [_vertices]: dart.fieldType(typed_data.Float32List)
  }));
  keyframe.KeyFrameTrigger = class KeyFrameTrigger extends keyframe.KeyFrame {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameTrigger.new();
      if (!dart.test(keyframe.KeyFrame.read(reader, frame))) {
        return null;
      }
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
    }
    apply(component, mix) {
    }
  };
  (keyframe.KeyFrameTrigger.new = function() {
    keyframe.KeyFrameTrigger.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameTrigger.prototype;
  dart.addTypeTests(keyframe.KeyFrameTrigger);
  dart.setMethodSignature(keyframe.KeyFrameTrigger, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameTrigger.__proto__),
    setNext: dart.fnType(dart.void, [keyframe.KeyFrame]),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameTrigger, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameActiveChild = class KeyFrameActiveChild extends keyframe.KeyFrame {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameActiveChild.new();
      if (!dart.test(keyframe.KeyFrame.read(reader, frame))) {
        return null;
      }
      frame[_value] = reader.readFloat32("value")[$toInt]();
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      this.apply(component, mix);
    }
    apply(component, mix) {
      let soloNode = actor_node_solo.ActorNodeSolo.as(component);
      soloNode.activeChildIndex = this[_value];
    }
  };
  (keyframe.KeyFrameActiveChild.new = function() {
    this[_value] = null;
    keyframe.KeyFrameActiveChild.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameActiveChild.prototype;
  dart.addTypeTests(keyframe.KeyFrameActiveChild);
  dart.setMethodSignature(keyframe.KeyFrameActiveChild, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameActiveChild.__proto__),
    setNext: dart.fnType(dart.void, [keyframe.KeyFrame]),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameActiveChild, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameActiveChild, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameActiveChild.__proto__),
    [_value]: dart.fieldType(core.int)
  }));
  keyframe.KeyFrameSequence = class KeyFrameSequence extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameSequence.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_image.ActorImage.as(component);
      let frameIndex = value[$floor]()[$modulo](node.sequenceFrames[$length]);
      if (frameIndex < 0) {
        frameIndex = frameIndex + dart.notNull(node.sequenceFrames[$length]);
      }
      node.sequenceFrame = frameIndex;
    }
  };
  (keyframe.KeyFrameSequence.new = function() {
    keyframe.KeyFrameSequence.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameSequence.prototype;
  dart.addTypeTests(keyframe.KeyFrameSequence);
  dart.setMethodSignature(keyframe.KeyFrameSequence, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameSequence.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameSequence, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameFillColor = class KeyFrameFillColor extends keyframe.KeyFrameWithInterpolation {
    get value() {
      return this[_value];
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameFillColor.new();
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame))) {
        return null;
      }
      frame[_value] = reader.readFloat32Array(4, "value");
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      let ac = actor_color.ActorColor.as(component);
      let wr = ac.color;
      let to = keyframe.KeyFrameFillColor.as(toFrame)[_value];
      let l = this[_value][$length];
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(toFrame.time) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      let fi = 1.0 - dart.notNull(f);
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, dart.notNull(this[_value][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          let v = dart.notNull(this[_value][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f);
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + v * dart.notNull(mix));
        }
      }
      ac.markPaintDirty();
    }
    apply(component, mix) {
      let ac = actor_color.ActorColor.as(component);
      let l = this[_value][$length];
      let wr = ac.color;
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, this[_value][$_get](i));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + dart.notNull(this[_value][$_get](i)) * dart.notNull(mix));
        }
      }
      ac.markPaintDirty();
    }
  };
  (keyframe.KeyFrameFillColor.new = function() {
    this[_value] = null;
    keyframe.KeyFrameFillColor.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameFillColor.prototype;
  dart.addTypeTests(keyframe.KeyFrameFillColor);
  dart.setMethodSignature(keyframe.KeyFrameFillColor, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameFillColor.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFrameFillColor, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameFillColor.__proto__),
    value: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameFillColor, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameFillColor, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameFillColor.__proto__),
    [_value]: dart.fieldType(typed_data.Float32List)
  }));
  keyframe.KeyFramePathVertices = class KeyFramePathVertices extends keyframe.KeyFrameWithInterpolation {
    get vertices() {
      return this[_vertices];
    }
    static read(reader, component) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      let frame = new keyframe.KeyFramePathVertices.new();
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame)) || !actor_path.ActorPath.is(component)) {
        return null;
      }
      let pathNode = actor_path.ActorPath.as(component);
      let length = pathNode.points[$fold](core.int, 0, dart.fn((previous, point) => dart.notNull(previous) + 2 + (dart.equals(point.pointType, path_point.PointType.straight) ? 1 : 4), intAndPathPointToint()));
      frame[_vertices] = _native_typed_data.NativeFloat32List.new(length);
      let readIdx = 0;
      reader.openArray("value");
      for (let point of pathNode.points) {
        frame[_vertices][$_set]((t0 = readIdx, readIdx = t0 + 1, t0), reader.readFloat32("translationX"));
        frame[_vertices][$_set]((t0$ = readIdx, readIdx = t0$ + 1, t0$), reader.readFloat32("translationY"));
        if (dart.equals(point.pointType, path_point.PointType.straight)) {
          frame[_vertices][$_set]((t0$0 = readIdx, readIdx = t0$0 + 1, t0$0), reader.readFloat32("radius"));
        } else {
          frame[_vertices][$_set]((t0$1 = readIdx, readIdx = t0$1 + 1, t0$1), reader.readFloat32("inValueX"));
          frame[_vertices][$_set]((t0$2 = readIdx, readIdx = t0$2 + 1, t0$2), reader.readFloat32("inValueY"));
          frame[_vertices][$_set]((t0$3 = readIdx, readIdx = t0$3 + 1, t0$3), reader.readFloat32("outValueX"));
          frame[_vertices][$_set]((t0$4 = readIdx, readIdx = t0$4 + 1, t0$4), reader.readFloat32("outValueY"));
        }
      }
      reader.closeArray();
      pathNode.makeVertexDeform();
      return frame;
    }
    setNext(frame) {
    }
    applyInterpolation(component, time, toFrame, mix) {
      let path = actor_path.ActorPath.as(component);
      let wr = path.vertexDeform;
      let to = keyframe.KeyFramePathVertices.as(toFrame)[_vertices];
      let l = this[_vertices][$length];
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(toFrame.time) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      let fi = 1.0 - dart.notNull(f);
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, dart.notNull(this[_vertices][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          let v = dart.notNull(this[_vertices][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f);
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + v * dart.notNull(mix));
        }
      }
      path.markVertexDeformDirty();
    }
    apply(component, mix) {
      let path = actor_path.ActorPath.as(component);
      let l = this[_vertices][$length];
      let wr = path.vertexDeform;
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, this[_vertices][$_get](i));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(l); i = i + 1) {
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + dart.notNull(this[_vertices][$_get](i)) * dart.notNull(mix));
        }
      }
      path.markVertexDeformDirty();
    }
  };
  (keyframe.KeyFramePathVertices.new = function() {
    this[_vertices] = null;
    keyframe.KeyFramePathVertices.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePathVertices.prototype;
  dart.addTypeTests(keyframe.KeyFramePathVertices);
  dart.setMethodSignature(keyframe.KeyFramePathVertices, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePathVertices.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFramePathVertices, () => ({
    __proto__: dart.getGetters(keyframe.KeyFramePathVertices.__proto__),
    vertices: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFramePathVertices, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFramePathVertices, () => ({
    __proto__: dart.getFields(keyframe.KeyFramePathVertices.__proto__),
    [_vertices]: dart.fieldType(typed_data.Float32List)
  }));
  keyframe.KeyFramePaintOpacity = class KeyFramePaintOpacity extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFramePaintOpacity.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_color.ActorPaint.as(component);
      node.opacity = dart.notNull(node.opacity) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFramePaintOpacity.new = function() {
    keyframe.KeyFramePaintOpacity.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFramePaintOpacity.prototype;
  dart.addTypeTests(keyframe.KeyFramePaintOpacity);
  dart.setMethodSignature(keyframe.KeyFramePaintOpacity, () => ({
    __proto__: dart.getMethods(keyframe.KeyFramePaintOpacity.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFramePaintOpacity, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameStrokeColor = class KeyFrameStrokeColor extends keyframe.KeyFrameWithInterpolation {
    get value() {
      return this[_value];
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeColor.new();
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame))) {
        return null;
      }
      frame[_value] = reader.readFloat32Array(4, "value");
      return frame;
    }
    applyInterpolation(component, time, toFrame, mix) {
      let cs = actor_color.ColorStroke.as(component);
      let wr = cs.color;
      let to = keyframe.KeyFrameStrokeColor.as(toFrame)[_value];
      let len = this[_value][$length];
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(toFrame.time) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      let fi = 1.0 - dart.notNull(f);
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          wr[$_set](i, dart.notNull(this[_value][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          let v = dart.notNull(this[_value][$_get](i)) * fi + dart.notNull(to[$_get](i)) * dart.notNull(f);
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + v * dart.notNull(mix));
        }
      }
      cs.markPaintDirty();
    }
    apply(component, mix) {
      let node = actor_color.ColorStroke.as(component);
      let wr = node.color;
      let len = wr[$length];
      if (mix === 1.0) {
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          wr[$_set](i, this[_value][$_get](i));
        }
      } else {
        let mixi = 1.0 - dart.notNull(mix);
        for (let i = 0; i < dart.notNull(len); i = i + 1) {
          wr[$_set](i, dart.notNull(wr[$_get](i)) * mixi + dart.notNull(this[_value][$_get](i)) * dart.notNull(mix));
        }
      }
      node.markPaintDirty();
    }
  };
  (keyframe.KeyFrameStrokeColor.new = function() {
    this[_value] = null;
    keyframe.KeyFrameStrokeColor.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeColor.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeColor);
  dart.setMethodSignature(keyframe.KeyFrameStrokeColor, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeColor.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFrameStrokeColor, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameStrokeColor.__proto__),
    value: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameStrokeColor, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameStrokeColor, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameStrokeColor.__proto__),
    [_value]: dart.fieldType(typed_data.Float32List)
  }));
  keyframe.KeyFrameCornerRadius = class KeyFrameCornerRadius extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameCornerRadius.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      let node = actor_rectangle.ActorRectangle.as(component);
      node.radius = dart.notNull(node.radius) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameCornerRadius.new = function() {
    keyframe.KeyFrameCornerRadius.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameCornerRadius.prototype;
  dart.addTypeTests(keyframe.KeyFrameCornerRadius);
  dart.setMethodSignature(keyframe.KeyFrameCornerRadius, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameCornerRadius.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameCornerRadius, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameGradient = class KeyFrameGradient extends keyframe.KeyFrameWithInterpolation {
    get value() {
      return this[_value];
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameGradient.new();
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame))) {
        return null;
      }
      let len = reader.readUint16("length");
      frame[_value] = reader.readFloat32Array(len, "value");
      return frame;
    }
    applyInterpolation(component, time, toFrame, mix) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let gradient = actor_color.GradientColor.as(component);
      let v = keyframe.KeyFrameGradient.as(toFrame)[_value];
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(toFrame.time) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      let fi = 1.0 - dart.notNull(f);
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        gradient.start._set(0, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0 = ridx, ridx = t0 + 1, t0))) * dart.notNull(f));
        gradient.start._set(1, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$ = ridx, ridx = t0$ + 1, t0$))) * dart.notNull(f));
        gradient.end._set(0, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$0 = ridx, ridx = t0$0 + 1, t0$0))) * dart.notNull(f));
        gradient.end._set(1, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$1 = ridx, ridx = t0$1 + 1, t0$1))) * dart.notNull(f));
        while (ridx < dart.notNull(v[$length]) && wi < dart.notNull(gradient.colorStops[$length])) {
          gradient.colorStops[$_set]((t0$2 = wi, wi = t0$2 + 1, t0$2), dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$3 = ridx, ridx = t0$3 + 1, t0$3))) * dart.notNull(f));
        }
      } else {
        let imix = 1.0 - dart.notNull(mix);
        let val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        gradient.start._set(0, dart.notNull(gradient.start._get(0)) * imix + val * dart.notNull(mix));
        ridx = ridx + 1;
        val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        gradient.start._set(1, dart.notNull(gradient.start._get(1)) * imix + val * dart.notNull(mix));
        ridx = ridx + 1;
        val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        gradient.end._set(0, dart.notNull(gradient.end._get(0)) * imix + val * dart.notNull(mix));
        ridx = ridx + 1;
        val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        gradient.end._set(1, dart.notNull(gradient.end._get(1)) * imix + val * dart.notNull(mix));
        ridx = ridx + 1;
        while (ridx < dart.notNull(v[$length]) && wi < dart.notNull(gradient.colorStops[$length])) {
          val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
          gradient.colorStops[$_set](wi, dart.notNull(gradient.colorStops[$_get](wi)) * imix + val * dart.notNull(mix));
          ridx = ridx + 1;
          wi = wi + 1;
        }
      }
      gradient.markPaintDirty();
    }
    apply(component, mix) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8;
      let gradient = actor_color.GradientColor.as(component);
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        gradient.start._set(0, this[_value][$_get]((t0 = ridx, ridx = t0 + 1, t0)));
        gradient.start._set(1, this[_value][$_get]((t0$ = ridx, ridx = t0$ + 1, t0$)));
        gradient.end._set(0, this[_value][$_get]((t0$0 = ridx, ridx = t0$0 + 1, t0$0)));
        gradient.end._set(1, this[_value][$_get]((t0$1 = ridx, ridx = t0$1 + 1, t0$1)));
        while (ridx < dart.notNull(this[_value][$length]) && wi < dart.notNull(gradient.colorStops[$length])) {
          gradient.colorStops[$_set]((t0$2 = wi, wi = t0$2 + 1, t0$2), this[_value][$_get]((t0$3 = ridx, ridx = t0$3 + 1, t0$3)));
        }
      } else {
        let imix = 1.0 - dart.notNull(mix);
        gradient.start._set(0, dart.notNull(gradient.start._get(0)) * imix + dart.notNull(this[_value][$_get]((t0$4 = ridx, ridx = t0$4 + 1, t0$4))) * dart.notNull(mix));
        gradient.start._set(1, dart.notNull(gradient.start._get(1)) * imix + dart.notNull(this[_value][$_get]((t0$5 = ridx, ridx = t0$5 + 1, t0$5))) * dart.notNull(mix));
        gradient.end._set(0, dart.notNull(gradient.end._get(0)) * imix + dart.notNull(this[_value][$_get]((t0$6 = ridx, ridx = t0$6 + 1, t0$6))) * dart.notNull(mix));
        gradient.end._set(1, dart.notNull(gradient.end._get(1)) * imix + dart.notNull(this[_value][$_get]((t0$7 = ridx, ridx = t0$7 + 1, t0$7))) * dart.notNull(mix));
        while (ridx < dart.notNull(this[_value][$length]) && wi < dart.notNull(gradient.colorStops[$length])) {
          gradient.colorStops[$_set](wi, dart.notNull(gradient.colorStops[$_get](wi)) * imix + dart.notNull(this[_value][$_get]((t0$8 = ridx, ridx = t0$8 + 1, t0$8))));
          wi = wi + 1;
        }
      }
      gradient.markPaintDirty();
    }
  };
  (keyframe.KeyFrameGradient.new = function() {
    this[_value] = null;
    keyframe.KeyFrameGradient.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameGradient.prototype;
  dart.addTypeTests(keyframe.KeyFrameGradient);
  dart.setMethodSignature(keyframe.KeyFrameGradient, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameGradient.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFrameGradient, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameGradient.__proto__),
    value: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameGradient, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameGradient, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameGradient.__proto__),
    [_value]: dart.fieldType(typed_data.Float32List)
  }));
  keyframe.KeyFrameRadial = class KeyFrameRadial extends keyframe.KeyFrameWithInterpolation {
    get value() {
      return this[_value];
    }
    static read(reader, component) {
      let frame = new keyframe.KeyFrameRadial.new();
      if (!dart.test(keyframe.KeyFrameWithInterpolation.read(reader, frame))) {
        return null;
      }
      let len = reader.readUint16("length");
      frame[_value] = reader.readFloat32Array(len, "value");
      return frame;
    }
    applyInterpolation(component, time, toFrame, mix) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let radial = actor_color.RadialGradientColor.as(component);
      let v = keyframe.KeyFrameRadial.as(toFrame)[_value];
      let f = (dart.notNull(time) - dart.notNull(this[_time])) / (dart.notNull(toFrame.time) - dart.notNull(this[_time]));
      if (this[_interpolator] != null) {
        f = this[_interpolator].getEasedMix(f);
      }
      let fi = 1.0 - dart.notNull(f);
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        radial.secondaryRadiusScale = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0 = ridx, ridx = t0 + 1, t0))) * dart.notNull(f);
        radial.start._set(0, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$ = ridx, ridx = t0$ + 1, t0$))) * dart.notNull(f));
        radial.start._set(1, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$0 = ridx, ridx = t0$0 + 1, t0$0))) * dart.notNull(f));
        radial.end._set(0, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$1 = ridx, ridx = t0$1 + 1, t0$1))) * dart.notNull(f));
        radial.end._set(1, dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$2 = ridx, ridx = t0$2 + 1, t0$2))) * dart.notNull(f));
        while (ridx < dart.notNull(v[$length]) && wi < dart.notNull(radial.colorStops[$length])) {
          radial.colorStops[$_set]((t0$3 = wi, wi = t0$3 + 1, t0$3), dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$4 = ridx, ridx = t0$4 + 1, t0$4))) * dart.notNull(f));
        }
      } else {
        let imix = 1.0 - dart.notNull(mix);
        let val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        radial.secondaryRadiusScale = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get]((t0$5 = ridx, ridx = t0$5 + 1, t0$5))) * dart.notNull(f);
        val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        radial.start._set(0, dart.notNull(this[_value][$_get]((t0$6 = ridx, ridx = t0$6 + 1, t0$6))) * imix + val * dart.notNull(mix));
        val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        radial.start._set(1, dart.notNull(this[_value][$_get]((t0$7 = ridx, ridx = t0$7 + 1, t0$7))) * imix + val * dart.notNull(mix));
        val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        radial.end._set(0, dart.notNull(this[_value][$_get]((t0$8 = ridx, ridx = t0$8 + 1, t0$8))) * imix + val * dart.notNull(mix));
        val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
        radial.end._set(1, dart.notNull(this[_value][$_get]((t0$9 = ridx, ridx = t0$9 + 1, t0$9))) * imix + val * dart.notNull(mix));
        while (ridx < dart.notNull(v[$length]) && wi < dart.notNull(radial.colorStops[$length])) {
          val = dart.notNull(this[_value][$_get](ridx)) * fi + dart.notNull(v[$_get](ridx)) * dart.notNull(f);
          radial.colorStops[$_set](wi, dart.notNull(radial.colorStops[$_get](wi)) * imix + val * dart.notNull(mix));
          ridx = ridx + 1;
          wi = wi + 1;
        }
      }
      radial.markPaintDirty();
    }
    apply(component, mix) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10;
      let radial = actor_color.RadialGradientColor.as(component);
      let ridx = 0;
      let wi = 0;
      if (mix === 1.0) {
        radial.secondaryRadiusScale = this.value[$_get]((t0 = ridx, ridx = t0 + 1, t0));
        radial.start._set(0, this[_value][$_get]((t0$ = ridx, ridx = t0$ + 1, t0$)));
        radial.start._set(1, this[_value][$_get]((t0$0 = ridx, ridx = t0$0 + 1, t0$0)));
        radial.end._set(0, this[_value][$_get]((t0$1 = ridx, ridx = t0$1 + 1, t0$1)));
        radial.end._set(1, this[_value][$_get]((t0$2 = ridx, ridx = t0$2 + 1, t0$2)));
        while (ridx < dart.notNull(this[_value][$length]) && wi < dart.notNull(radial.colorStops[$length])) {
          radial.colorStops[$_set]((t0$3 = wi, wi = t0$3 + 1, t0$3), this[_value][$_get]((t0$4 = ridx, ridx = t0$4 + 1, t0$4)));
        }
      } else {
        let imix = 1.0 - dart.notNull(mix);
        radial.secondaryRadiusScale = dart.notNull(radial.secondaryRadiusScale) * imix + dart.notNull(this.value[$_get]((t0$5 = ridx, ridx = t0$5 + 1, t0$5))) * dart.notNull(mix);
        radial.start._set(0, dart.notNull(radial.start._get(0)) * imix + dart.notNull(this[_value][$_get]((t0$6 = ridx, ridx = t0$6 + 1, t0$6))) * dart.notNull(mix));
        radial.start._set(1, dart.notNull(radial.start._get(1)) * imix + dart.notNull(this[_value][$_get]((t0$7 = ridx, ridx = t0$7 + 1, t0$7))) * dart.notNull(mix));
        radial.end._set(0, dart.notNull(radial.end._get(0)) * imix + dart.notNull(this[_value][$_get]((t0$8 = ridx, ridx = t0$8 + 1, t0$8))) * dart.notNull(mix));
        radial.end._set(1, dart.notNull(radial.end._get(1)) * imix + dart.notNull(this[_value][$_get]((t0$9 = ridx, ridx = t0$9 + 1, t0$9))) * dart.notNull(mix));
        while (ridx < dart.notNull(this[_value][$length]) && wi < dart.notNull(radial.colorStops[$length])) {
          radial.colorStops[$_set](wi, dart.notNull(radial.colorStops[$_get](wi)) * imix + dart.notNull(this[_value][$_get]((t0$10 = ridx, ridx = t0$10 + 1, t0$10))));
          wi = wi + 1;
        }
      }
      radial.markPaintDirty();
    }
  };
  (keyframe.KeyFrameRadial.new = function() {
    this[_value] = null;
    keyframe.KeyFrameRadial.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameRadial.prototype;
  dart.addTypeTests(keyframe.KeyFrameRadial);
  dart.setMethodSignature(keyframe.KeyFrameRadial, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameRadial.__proto__),
    applyInterpolation: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, keyframe.KeyFrame, core.double]),
    apply: dart.fnType(dart.void, [actor_component.ActorComponent, core.double])
  }));
  dart.setGetterSignature(keyframe.KeyFrameRadial, () => ({
    __proto__: dart.getGetters(keyframe.KeyFrameRadial.__proto__),
    value: typed_data.Float32List
  }));
  dart.setLibraryUri(keyframe.KeyFrameRadial, "package:flare_dart/animation/keyframe.dart");
  dart.setFieldSignature(keyframe.KeyFrameRadial, () => ({
    __proto__: dart.getFields(keyframe.KeyFrameRadial.__proto__),
    [_value]: dart.fieldType(typed_data.Float32List)
  }));
  keyframe.KeyFrameShapeWidth = class KeyFrameShapeWidth extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameShapeWidth.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      if (component == null) return;
      if (actor_path.ActorProceduralPath.is(component)) {
        component.width = dart.notNull(component.width) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
      }
    }
  };
  (keyframe.KeyFrameShapeWidth.new = function() {
    keyframe.KeyFrameShapeWidth.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameShapeWidth.prototype;
  dart.addTypeTests(keyframe.KeyFrameShapeWidth);
  dart.setMethodSignature(keyframe.KeyFrameShapeWidth, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameShapeWidth.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameShapeWidth, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameShapeHeight = class KeyFrameShapeHeight extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameShapeHeight.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      if (component == null) return;
      if (actor_path.ActorProceduralPath.is(component)) {
        component.height = dart.notNull(component.height) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
      }
    }
  };
  (keyframe.KeyFrameShapeHeight.new = function() {
    keyframe.KeyFrameShapeHeight.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameShapeHeight.prototype;
  dart.addTypeTests(keyframe.KeyFrameShapeHeight);
  dart.setMethodSignature(keyframe.KeyFrameShapeHeight, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameShapeHeight.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameShapeHeight, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameStrokeWidth = class KeyFrameStrokeWidth extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeWidth.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      if (component == null) return;
      let stroke = actor_color.ActorStroke.as(component);
      stroke.width = dart.notNull(stroke.width) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameStrokeWidth.new = function() {
    keyframe.KeyFrameStrokeWidth.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeWidth.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeWidth);
  dart.setMethodSignature(keyframe.KeyFrameStrokeWidth, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeWidth.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameStrokeWidth, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameInnerRadius = class KeyFrameInnerRadius extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameInnerRadius.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      if (component == null) return;
      let star = actor_star.ActorStar.as(component);
      star.innerRadius = dart.notNull(star.innerRadius) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameInnerRadius.new = function() {
    keyframe.KeyFrameInnerRadius.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameInnerRadius.prototype;
  dart.addTypeTests(keyframe.KeyFrameInnerRadius);
  dart.setMethodSignature(keyframe.KeyFrameInnerRadius, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameInnerRadius.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameInnerRadius, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameStrokeStart = class KeyFrameStrokeStart extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeStart.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      if (component == null) return;
      let star = actor_color.ActorStroke.as(component);
      star.trimStart = dart.notNull(star.trimStart) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameStrokeStart.new = function() {
    keyframe.KeyFrameStrokeStart.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeStart.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeStart);
  dart.setMethodSignature(keyframe.KeyFrameStrokeStart, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeStart.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameStrokeStart, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameStrokeEnd = class KeyFrameStrokeEnd extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeEnd.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      if (component == null) return;
      let star = actor_color.ActorStroke.as(component);
      star.trimEnd = dart.notNull(star.trimEnd) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameStrokeEnd.new = function() {
    keyframe.KeyFrameStrokeEnd.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeEnd.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeEnd);
  dart.setMethodSignature(keyframe.KeyFrameStrokeEnd, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeEnd.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameStrokeEnd, "package:flare_dart/animation/keyframe.dart");
  keyframe.KeyFrameStrokeOffset = class KeyFrameStrokeOffset extends keyframe.KeyFrameNumeric {
    static read(reader, component) {
      let frame = new keyframe.KeyFrameStrokeOffset.new();
      if (dart.test(keyframe.KeyFrameNumeric.read(reader, frame))) {
        return frame;
      }
      return null;
    }
    setValue(component, value, mix) {
      if (component == null) return;
      let star = actor_color.ActorStroke.as(component);
      star.trimOffset = dart.notNull(star.trimOffset) * (1.0 - dart.notNull(mix)) + dart.notNull(value) * dart.notNull(mix);
    }
  };
  (keyframe.KeyFrameStrokeOffset.new = function() {
    keyframe.KeyFrameStrokeOffset.__proto__.new.call(this);
    ;
  }).prototype = keyframe.KeyFrameStrokeOffset.prototype;
  dart.addTypeTests(keyframe.KeyFrameStrokeOffset);
  dart.setMethodSignature(keyframe.KeyFrameStrokeOffset, () => ({
    __proto__: dart.getMethods(keyframe.KeyFrameStrokeOffset.__proto__),
    setValue: dart.fnType(dart.void, [actor_component.ActorComponent, core.double, core.double])
  }));
  dart.setLibraryUri(keyframe.KeyFrameStrokeOffset, "package:flare_dart/animation/keyframe.dart");
  dart.defineLazy(keyframe, {
    /*keyframe.interpolationTypesLookup*/get interpolationTypesLookup() {
      return HashMapOfint$InterpolationTypes().fromIterables(JSArrayOfint().of([0, 1, 2]), JSArrayOfInterpolationTypes().of([keyframe.InterpolationTypes.hold, keyframe.InterpolationTypes.linear, keyframe.InterpolationTypes.cubic]));
    },
    set interpolationTypesLookup(_) {}
  });
  const _numPoints = dart.privateName(actor_star, "_numPoints");
  const _innerRadius = dart.privateName(actor_star, "_innerRadius");
  const _width$ = dart.privateName(actor_path, "_width");
  const _height$ = dart.privateName(actor_path, "_height");
  const _shape = dart.privateName(actor_path, "_shape");
  const _isRootPath = dart.privateName(actor_path, "_isRootPath");
  actor_path.ActorBasePath = class ActorBasePath extends core.Object {
    get shape() {
      return this[_shape];
    }
    get isRootPath() {
      return this[_isRootPath];
    }
    get isPathInWorldSpace() {
      return false;
    }
    get deformedPoints() {
      return this.points;
    }
    getPathAABB() {
      let minX = 1.7976931348623157e+308;
      let minY = 1.7976931348623157e+308;
      let maxX = -1.7976931348623157e+308;
      let maxY = -1.7976931348623157e+308;
      let obb = this.getPathOBB();
      let pts = JSArrayOfVec2D().of([new vec2d.Vec2D.fromValues(obb._get(0), obb._get(1)), new vec2d.Vec2D.fromValues(obb._get(2), obb._get(1)), new vec2d.Vec2D.fromValues(obb._get(2), obb._get(3)), new vec2d.Vec2D.fromValues(obb._get(0), obb._get(3))]);
      let localTransform = null;
      if (dart.test(this.isPathInWorldSpace)) {
        localTransform = new mat2d.Mat2D.new();
        mat2d.Mat2D.invert(localTransform, this.parent.worldTransform);
      } else if (!dart.test(this[_isRootPath])) {
        localTransform = new mat2d.Mat2D.new();
        if (dart.test(mat2d.Mat2D.invert(localTransform, this.shape.worldTransform))) {
          mat2d.Mat2D.multiply(localTransform, localTransform, this.worldTransform);
        }
      } else {
        localTransform = this.transform;
      }
      for (let p of pts) {
        let wp = vec2d.Vec2D.transformMat2D(p, p, localTransform);
        if (dart.notNull(wp._get(0)) < dart.notNull(minX)) {
          minX = wp._get(0);
        }
        if (dart.notNull(wp._get(1)) < dart.notNull(minY)) {
          minY = wp._get(1);
        }
        if (dart.notNull(wp._get(0)) > dart.notNull(maxX)) {
          maxX = wp._get(0);
        }
        if (dart.notNull(wp._get(1)) > dart.notNull(maxY)) {
          maxY = wp._get(1);
        }
      }
      return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
    }
    invalidateDrawable() {
      this.invalidatePath();
      if (this.shape != null) {
        this.shape.invalidateShape();
      }
    }
    getPathOBB() {
      let minX = 1.7976931348623157e+308;
      let minY = 1.7976931348623157e+308;
      let maxX = -1.7976931348623157e+308;
      let maxY = -1.7976931348623157e+308;
      let renderPoints = this.points;
      for (let point of renderPoints) {
        let t = point.translation;
        let x = t._get(0);
        let y = t._get(1);
        if (dart.notNull(x) < dart.notNull(minX)) {
          minX = x;
        }
        if (dart.notNull(y) < dart.notNull(minY)) {
          minY = y;
        }
        if (dart.notNull(x) > dart.notNull(maxX)) {
          maxX = x;
        }
        if (dart.notNull(y) > dart.notNull(maxY)) {
          maxY = y;
        }
        if (path_point.CubicPathPoint.is(point)) {
          let t = point.inPoint;
          x = t._get(0);
          y = t._get(1);
          if (dart.notNull(x) < dart.notNull(minX)) {
            minX = x;
          }
          if (dart.notNull(y) < dart.notNull(minY)) {
            minY = y;
          }
          if (dart.notNull(x) > dart.notNull(maxX)) {
            maxX = x;
          }
          if (dart.notNull(y) > dart.notNull(maxY)) {
            maxY = y;
          }
          t = point.outPoint;
          x = t._get(0);
          y = t._get(1);
          if (dart.notNull(x) < dart.notNull(minX)) {
            minX = x;
          }
          if (dart.notNull(y) < dart.notNull(minY)) {
            minY = y;
          }
          if (dart.notNull(x) > dart.notNull(maxX)) {
            maxX = x;
          }
          if (dart.notNull(y) > dart.notNull(maxY)) {
            maxY = y;
          }
        }
      }
      return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
    }
    updateShape() {
      if (this[_shape] != null) {
        this[_shape].removePath(this);
      }
      let possibleShape = this.parent;
      while (possibleShape != null && !actor_shape.ActorShape.is(possibleShape)) {
        possibleShape = possibleShape.parent;
      }
      if (possibleShape != null) {
        this[_shape] = actor_shape.ActorShape.as(possibleShape);
        this[_shape].addPath(this);
      } else {
        this[_shape] = null;
      }
      this[_isRootPath] = dart.equals(this[_shape], this.parent);
    }
    completeResolve() {
      this.updateShape();
    }
  };
  (actor_path.ActorBasePath.new = function() {
    this[_shape] = null;
    this[_isRootPath] = false;
    ;
  }).prototype = actor_path.ActorBasePath.prototype;
  dart.addTypeTests(actor_path.ActorBasePath);
  dart.setMethodSignature(actor_path.ActorBasePath, () => ({
    __proto__: dart.getMethods(actor_path.ActorBasePath.__proto__),
    getPathAABB: dart.fnType(aabb$.AABB, []),
    invalidateDrawable: dart.fnType(dart.void, []),
    getPathOBB: dart.fnType(aabb$.AABB, []),
    updateShape: dart.fnType(dart.void, []),
    completeResolve: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_path.ActorBasePath, () => ({
    __proto__: dart.getGetters(actor_path.ActorBasePath.__proto__),
    shape: actor_shape.ActorShape,
    isRootPath: core.bool,
    isPathInWorldSpace: core.bool,
    deformedPoints: core.List$(path_point.PathPoint)
  }));
  dart.setLibraryUri(actor_path.ActorBasePath, "package:flare_dart/actor_path.dart");
  dart.setFieldSignature(actor_path.ActorBasePath, () => ({
    __proto__: dart.getFields(actor_path.ActorBasePath.__proto__),
    [_shape]: dart.fieldType(actor_shape.ActorShape),
    [_isRootPath]: dart.fieldType(core.bool)
  }));
  const ActorNode_ActorBasePath$36 = class ActorNode_ActorBasePath extends actor_node.ActorNode {};
  (ActorNode_ActorBasePath$36.new = function() {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36.__proto__.new.call(this);
  }).prototype = ActorNode_ActorBasePath$36.prototype;
  (ActorNode_ActorBasePath$36.withArtboard = function(artboard) {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36.__proto__.withArtboard.call(this, artboard);
  }).prototype = ActorNode_ActorBasePath$36.prototype;
  dart.applyMixin(ActorNode_ActorBasePath$36, actor_path.ActorBasePath);
  actor_path.ActorProceduralPath = class ActorProceduralPath extends ActorNode_ActorBasePath$36 {
    get width() {
      return this[_width$];
    }
    get height() {
      return this[_height$];
    }
    get pathTransform() {
      return this.worldTransform;
    }
    set width(w) {
      if (w != this[_width$]) {
        this[_width$] = w;
        this.invalidateDrawable();
      }
    }
    set height(w) {
      if (w != this[_height$]) {
        this[_height$] = w;
        this.invalidateDrawable();
      }
    }
    copyPath(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this[_width$] = node.width;
      this[_height$] = node.height;
    }
    onDirty(dirt) {
      super.onDirty(dirt);
      if (this.shape != null) {
        this.shape.invalidateShape();
      }
    }
  };
  (actor_path.ActorProceduralPath.new = function() {
    this[_width$] = null;
    this[_height$] = null;
    actor_path.ActorProceduralPath.__proto__.new.call(this);
    ;
  }).prototype = actor_path.ActorProceduralPath.prototype;
  dart.addTypeTests(actor_path.ActorProceduralPath);
  dart.setMethodSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getMethods(actor_path.ActorProceduralPath.__proto__),
    copyPath: dart.fnType(dart.void, [actor_path.ActorProceduralPath, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getGetters(actor_path.ActorProceduralPath.__proto__),
    width: core.double,
    height: core.double,
    pathTransform: mat2d.Mat2D
  }));
  dart.setSetterSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getSetters(actor_path.ActorProceduralPath.__proto__),
    width: core.double,
    height: core.double
  }));
  dart.setLibraryUri(actor_path.ActorProceduralPath, "package:flare_dart/actor_path.dart");
  dart.setFieldSignature(actor_path.ActorProceduralPath, () => ({
    __proto__: dart.getFields(actor_path.ActorProceduralPath.__proto__),
    [_width$]: dart.fieldType(core.double),
    [_height$]: dart.fieldType(core.double)
  }));
  actor_star.ActorStar = class ActorStar extends actor_path.ActorProceduralPath {
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_star.ActorStar.new();
      instance.copyStar(this, resetArtboard);
      return instance;
    }
    copyStar(node, resetArtboard) {
      this.copyPath(node, resetArtboard);
      this[_numPoints] = node[_numPoints];
      this[_innerRadius] = node[_innerRadius];
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_star.ActorStar.new() : null;
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      component[_numPoints] = reader.readUint32("points");
      component[_innerRadius] = reader.readFloat32("innerRadius");
      return component;
    }
    get points() {
      let _starPoints = JSArrayOfPathPoint().of([new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(0.0, -dart.notNull(this.radiusY)))]);
      let angle = -3.141592653589793 / 2.0;
      let inc = 3.141592653589793 * 2.0 / dart.notNull(this.sides);
      let sx = new vec2d.Vec2D.fromValues(this.radiusX, dart.notNull(this.radiusX) * dart.notNull(this[_innerRadius]));
      let sy = new vec2d.Vec2D.fromValues(this.radiusY, dart.notNull(this.radiusY) * dart.notNull(this[_innerRadius]));
      for (let i = 0; i < dart.notNull(this.sides); i = i + 1) {
        _starPoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(math.cos(angle) * dart.notNull(sx._get(i[$modulo](2))), math.sin(angle) * dart.notNull(sy._get(i[$modulo](2))))));
        angle = angle + inc;
      }
      return _starPoints;
    }
    set innerRadius(val) {
      if (val != this[_innerRadius]) {
        this[_innerRadius] = val;
        this.invalidateDrawable();
      }
    }
    get innerRadius() {
      return this[_innerRadius];
    }
    get isClosed() {
      return true;
    }
    get doesDraw() {
      return !dart.test(this.renderCollapsed);
    }
    get radiusX() {
      return dart.notNull(this.width) / 2;
    }
    get radiusY() {
      return dart.notNull(this.height) / 2;
    }
    get numPoints() {
      return this[_numPoints];
    }
    get sides() {
      return dart.notNull(this[_numPoints]) * 2;
    }
  };
  (actor_star.ActorStar.new = function() {
    this[_numPoints] = 5;
    this[_innerRadius] = 0.0;
    actor_star.ActorStar.__proto__.new.call(this);
    ;
  }).prototype = actor_star.ActorStar.prototype;
  dart.addTypeTests(actor_star.ActorStar);
  dart.setMethodSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getMethods(actor_star.ActorStar.__proto__),
    invalidatePath: dart.fnType(dart.void, []),
    copyStar: dart.fnType(dart.void, [actor_star.ActorStar, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getGetters(actor_star.ActorStar.__proto__),
    points: core.List$(path_point.PathPoint),
    innerRadius: core.double,
    isClosed: core.bool,
    doesDraw: core.bool,
    radiusX: core.double,
    radiusY: core.double,
    numPoints: core.int,
    sides: core.int
  }));
  dart.setSetterSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getSetters(actor_star.ActorStar.__proto__),
    innerRadius: core.double
  }));
  dart.setLibraryUri(actor_star.ActorStar, "package:flare_dart/actor_star.dart");
  dart.setFieldSignature(actor_star.ActorStar, () => ({
    __proto__: dart.getFields(actor_star.ActorStar.__proto__),
    [_numPoints]: dart.fieldType(core.int),
    [_innerRadius]: dart.fieldType(core.double)
  }));
  const _isHidden = dart.privateName(actor_path, "_isHidden");
  const _isClosed = dart.privateName(actor_path, "_isClosed");
  const _points = dart.privateName(actor_path, "_points");
  const _name$2 = dart.privateName(path_point, "_name");
  let C36;
  const _connectedBones = dart.privateName(actor_skinnable, "_connectedBones");
  const skin = dart.privateName(actor_skinnable, "ActorSkinnable.skin");
  actor_skinnable.ActorSkinnable = class ActorSkinnable extends core.Object {
    get skin() {
      return this[skin];
    }
    set skin(value) {
      this[skin] = value;
    }
    get connectedBones() {
      return this[_connectedBones];
    }
    get isConnectedToBones() {
      return this[_connectedBones] != null && dart.test(this[_connectedBones][$isNotEmpty]);
    }
    static read(artboard, reader, node) {
      reader.openArray("bones");
      let numConnectedBones = reader.readUint8Length();
      if (numConnectedBones !== 0) {
        node[_connectedBones] = ListOfSkinnedBone().new(numConnectedBones);
        for (let i = 0; i < dart.notNull(numConnectedBones); i = i + 1) {
          let bc = new actor_skinnable.SkinnedBone.new();
          reader.openObject("bone");
          bc.boneIdx = reader.readId("component");
          mat2d.Mat2D.copyFromList(bc.bind, reader.readFloat32Array(6, "bind"));
          reader.closeObject();
          mat2d.Mat2D.invert(bc.inverseBind, bc.bind);
          node[_connectedBones][$_set](i, bc);
        }
        reader.closeArray();
        let worldOverride = new mat2d.Mat2D.new();
        mat2d.Mat2D.copyFromList(worldOverride, reader.readFloat32Array(6, "worldTransform"));
        node.worldTransformOverride = worldOverride;
      } else {
        reader.closeArray();
      }
      return node;
    }
    resolveSkinnable(components) {
      if (this[_connectedBones] != null) {
        for (let i = 0; i < dart.notNull(this[_connectedBones][$length]); i = i + 1) {
          let bc = this[_connectedBones][$_get](i);
          bc.node = actor_node.ActorNode.as(components[$_get](bc.boneIdx));
        }
      }
    }
    copySkinnable(node, resetArtboard) {
      if (node[_connectedBones] != null) {
        this[_connectedBones] = ListOfSkinnedBone().new(node[_connectedBones][$length]);
        for (let i = 0; i < dart.notNull(node[_connectedBones][$length]); i = i + 1) {
          let from = node[_connectedBones][$_get](i);
          let bc = new actor_skinnable.SkinnedBone.new();
          bc.boneIdx = from.boneIdx;
          mat2d.Mat2D.copy(bc.bind, from.bind);
          mat2d.Mat2D.copy(bc.inverseBind, from.inverseBind);
          this[_connectedBones][$_set](i, bc);
        }
      }
    }
  };
  (actor_skinnable.ActorSkinnable.new = function() {
    this[skin] = null;
    this[_connectedBones] = null;
    ;
  }).prototype = actor_skinnable.ActorSkinnable.prototype;
  dart.addTypeTests(actor_skinnable.ActorSkinnable);
  dart.setMethodSignature(actor_skinnable.ActorSkinnable, () => ({
    __proto__: dart.getMethods(actor_skinnable.ActorSkinnable.__proto__),
    resolveSkinnable: dart.fnType(dart.void, [core.List$(actor_component.ActorComponent)]),
    copySkinnable: dart.fnType(dart.void, [actor_skinnable.ActorSkinnable, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_skinnable.ActorSkinnable, () => ({
    __proto__: dart.getGetters(actor_skinnable.ActorSkinnable.__proto__),
    connectedBones: core.List$(actor_skinnable.SkinnedBone),
    isConnectedToBones: core.bool
  }));
  dart.setLibraryUri(actor_skinnable.ActorSkinnable, "package:flare_dart/actor_skinnable.dart");
  dart.setFieldSignature(actor_skinnable.ActorSkinnable, () => ({
    __proto__: dart.getFields(actor_skinnable.ActorSkinnable.__proto__),
    skin: dart.fieldType(actor_skin.ActorSkin),
    [_connectedBones]: dart.fieldType(core.List$(actor_skinnable.SkinnedBone))
  }));
  const vertexDeform = dart.privateName(actor_path, "ActorPath.vertexDeform");
  const ActorNode_ActorSkinnable$36 = class ActorNode_ActorSkinnable extends actor_node.ActorNode {};
  (ActorNode_ActorSkinnable$36.new = function() {
    actor_skinnable.ActorSkinnable.new.call(this);
    ActorNode_ActorSkinnable$36.__proto__.new.call(this);
  }).prototype = ActorNode_ActorSkinnable$36.prototype;
  (ActorNode_ActorSkinnable$36.withArtboard = function(artboard) {
    actor_skinnable.ActorSkinnable.new.call(this);
    ActorNode_ActorSkinnable$36.__proto__.withArtboard.call(this, artboard);
  }).prototype = ActorNode_ActorSkinnable$36.prototype;
  dart.applyMixin(ActorNode_ActorSkinnable$36, actor_skinnable.ActorSkinnable);
  const ActorNode_ActorBasePath$36$ = class ActorNode_ActorBasePath extends ActorNode_ActorSkinnable$36 {};
  (ActorNode_ActorBasePath$36$.new = function() {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36$.__proto__.new.call(this);
  }).prototype = ActorNode_ActorBasePath$36$.prototype;
  (ActorNode_ActorBasePath$36$.withArtboard = function(artboard) {
    actor_path.ActorBasePath.new.call(this);
    ActorNode_ActorBasePath$36$.__proto__.withArtboard.call(this, artboard);
  }).prototype = ActorNode_ActorBasePath$36$.prototype;
  dart.applyMixin(ActorNode_ActorBasePath$36$, actor_path.ActorBasePath);
  actor_path.ActorPath = class ActorPath extends ActorNode_ActorBasePath$36$ {
    get vertexDeform() {
      return this[vertexDeform];
    }
    set vertexDeform(value) {
      this[vertexDeform] = value;
    }
    get isPathInWorldSpace() {
      return this.isConnectedToBones;
    }
    invalidatePath() {
    }
    get pathTransform() {
      return dart.test(this.isConnectedToBones) ? null : this.worldTransform;
    }
    get points() {
      return this[_points];
    }
    get deformedPoints() {
      if (!dart.test(this.isConnectedToBones) || this.skin == null) {
        return this[_points];
      }
      let boneMatrices = this.skin.boneMatrices;
      let deformed = JSArrayOfPathPoint().of([]);
      for (let point of this[_points]) {
        deformed[$add](point.skin(this.worldTransform, boneMatrices));
      }
      return deformed;
    }
    get isClosed() {
      return this[_isClosed];
    }
    onDirty(dirt) {
      super.onDirty(dirt);
      if (this.shape != null) {
        this.shape.invalidateShape();
      }
    }
    makeVertexDeform() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      if (this.vertexDeform != null) {
        return;
      }
      let length = this.points[$fold](core.int, 0, dart.fn((previous, point) => dart.notNull(previous) + 2 + (dart.equals(point.pointType, path_point.PointType.straight) ? 1 : 4), intAndPathPointToint()));
      let vertices = _native_typed_data.NativeFloat32List.new(length);
      let readIdx = 0;
      for (let point of this.points) {
        vertices[$_set]((t0 = readIdx, readIdx = t0 + 1, t0), point.translation._get(0));
        vertices[$_set]((t0$ = readIdx, readIdx = t0$ + 1, t0$), point.translation._get(1));
        if (dart.equals(point.pointType, path_point.PointType.straight)) {
          vertices[$_set]((t0$0 = readIdx, readIdx = t0$0 + 1, t0$0), path_point.StraightPathPoint.as(point).radius);
        } else {
          let cubicPoint = path_point.CubicPathPoint.as(point);
          vertices[$_set]((t0$1 = readIdx, readIdx = t0$1 + 1, t0$1), cubicPoint.inPoint._get(0));
          vertices[$_set]((t0$2 = readIdx, readIdx = t0$2 + 1, t0$2), cubicPoint.inPoint._get(1));
          vertices[$_set]((t0$3 = readIdx, readIdx = t0$3 + 1, t0$3), cubicPoint.outPoint._get(0));
          vertices[$_set]((t0$4 = readIdx, readIdx = t0$4 + 1, t0$4), cubicPoint.outPoint._get(1));
        }
      }
      this.vertexDeform = vertices;
    }
    markVertexDeformDirty() {
      if (this.artboard == null) {
        return;
      }
      this.artboard.addDirt(this, 2, false);
    }
    update(dirt) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
      if (this.vertexDeform != null && (dart.notNull(dirt) & 2) >>> 0 === 2) {
        let readIdx = 0;
        for (let point of this[_points]) {
          point.translation._set(0, this.vertexDeform[$_get]((t0 = readIdx, readIdx = t0 + 1, t0)));
          point.translation._set(1, this.vertexDeform[$_get]((t0$ = readIdx, readIdx = t0$ + 1, t0$)));
          switch (point.pointType) {
            case C36 || CT.C36:
            {
              path_point.StraightPathPoint.as(point).radius = this.vertexDeform[$_get]((t0$0 = readIdx, readIdx = t0$0 + 1, t0$0));
              break;
            }
            default:
            {
              let cubicPoint = path_point.CubicPathPoint.as(point);
              cubicPoint.inPoint._set(0, this.vertexDeform[$_get]((t0$1 = readIdx, readIdx = t0$1 + 1, t0$1)));
              cubicPoint.inPoint._set(1, this.vertexDeform[$_get]((t0$2 = readIdx, readIdx = t0$2 + 1, t0$2)));
              cubicPoint.outPoint._set(0, this.vertexDeform[$_get]((t0$3 = readIdx, readIdx = t0$3 + 1, t0$3)));
              cubicPoint.outPoint._set(1, this.vertexDeform[$_get]((t0$4 = readIdx, readIdx = t0$4 + 1, t0$4)));
              break;
            }
          }
        }
      }
      this.invalidateDrawable();
      super.update(dirt);
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_path.ActorPath.new() : null;
      actor_node.ActorNode.read(artboard, reader, component);
      actor_skinnable.ActorSkinnable.read(artboard, reader, component);
      component[_isHidden] = !dart.test(reader.readBool("isVisible"));
      component[_isClosed] = reader.readBool("isClosed");
      reader.openArray("points");
      let pointCount = reader.readUint16Length();
      component[_points] = ListOfPathPoint().new(pointCount);
      for (let i = 0; i < dart.notNull(pointCount); i = i + 1) {
        reader.openObject("point");
        let point = null;
        let type = path_point.pointTypeLookup[$_get](reader.readUint8("pointType"));
        switch (type) {
          case C36 || CT.C36:
          {
            {
              point = new path_point.StraightPathPoint.new();
              break;
            }
          }
          default:
          {
            {
              point = new path_point.CubicPathPoint.new(type);
              break;
            }
          }
        }
        if (point == null) {
          dart.throw(new core.UnsupportedError.new("Invalid point type " + dart.notNull(dart.toString(type))));
        } else {
          point.read(reader, component.isConnectedToBones);
        }
        reader.closeObject();
        component[_points][$_set](i, point);
      }
      reader.closeArray();
      return component;
    }
    makeInstance(resetArtboard) {
      let instanceEvent = new actor_path.ActorPath.new();
      instanceEvent.copyPath(this, resetArtboard);
      return instanceEvent;
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      this.resolveSkinnable(components);
    }
    copyPath(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this.copySkinnable(node, resetArtboard);
      this[_isHidden] = node[_isHidden];
      this[_isClosed] = node[_isClosed];
      let pointCount = node[_points][$length];
      this[_points] = ListOfPathPoint().new(pointCount);
      for (let i = 0; i < dart.notNull(pointCount); i = i + 1) {
        this[_points][$_set](i, node[_points][$_get](i).makeInstance());
      }
      if (node.vertexDeform != null) {
        this.vertexDeform = _native_typed_data.NativeFloat32List.fromList(node.vertexDeform);
      }
    }
  };
  (actor_path.ActorPath.new = function() {
    this[_isHidden] = null;
    this[_isClosed] = null;
    this[_points] = null;
    this[vertexDeform] = null;
    actor_path.ActorPath.__proto__.new.call(this);
    ;
  }).prototype = actor_path.ActorPath.prototype;
  dart.addTypeTests(actor_path.ActorPath);
  dart.setMethodSignature(actor_path.ActorPath, () => ({
    __proto__: dart.getMethods(actor_path.ActorPath.__proto__),
    invalidatePath: dart.fnType(dart.void, []),
    makeVertexDeform: dart.fnType(dart.void, []),
    markVertexDeformDirty: dart.fnType(dart.void, []),
    copyPath: dart.fnType(dart.void, [actor_path.ActorPath, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_path.ActorPath, () => ({
    __proto__: dart.getGetters(actor_path.ActorPath.__proto__),
    pathTransform: mat2d.Mat2D,
    points: core.List$(path_point.PathPoint),
    isClosed: core.bool
  }));
  dart.setLibraryUri(actor_path.ActorPath, "package:flare_dart/actor_path.dart");
  dart.setFieldSignature(actor_path.ActorPath, () => ({
    __proto__: dart.getFields(actor_path.ActorPath.__proto__),
    [_isHidden]: dart.fieldType(core.bool),
    [_isClosed]: dart.fieldType(core.bool),
    [_points]: dart.fieldType(core.List$(path_point.PathPoint)),
    vertexDeform: dart.fieldType(typed_data.Float32List)
  }));
  dart.defineLazy(actor_path.ActorPath, {
    /*actor_path.ActorPath.vertexDeformDirty*/get vertexDeformDirty() {
      return 2;
    }
  });
  const boneIdx = dart.privateName(actor_skinnable, "SkinnedBone.boneIdx");
  const node$ = dart.privateName(actor_skinnable, "SkinnedBone.node");
  const bind = dart.privateName(actor_skinnable, "SkinnedBone.bind");
  const inverseBind = dart.privateName(actor_skinnable, "SkinnedBone.inverseBind");
  actor_skinnable.SkinnedBone = class SkinnedBone extends core.Object {
    get boneIdx() {
      return this[boneIdx];
    }
    set boneIdx(value) {
      this[boneIdx] = value;
    }
    get node() {
      return this[node$];
    }
    set node(value) {
      this[node$] = value;
    }
    get bind() {
      return this[bind];
    }
    set bind(value) {
      this[bind] = value;
    }
    get inverseBind() {
      return this[inverseBind];
    }
    set inverseBind(value) {
      this[inverseBind] = value;
    }
  };
  (actor_skinnable.SkinnedBone.new = function() {
    this[boneIdx] = null;
    this[node$] = null;
    this[bind] = new mat2d.Mat2D.new();
    this[inverseBind] = new mat2d.Mat2D.new();
    ;
  }).prototype = actor_skinnable.SkinnedBone.prototype;
  dart.addTypeTests(actor_skinnable.SkinnedBone);
  dart.setLibraryUri(actor_skinnable.SkinnedBone, "package:flare_dart/actor_skinnable.dart");
  dart.setFieldSignature(actor_skinnable.SkinnedBone, () => ({
    __proto__: dart.getFields(actor_skinnable.SkinnedBone.__proto__),
    boneIdx: dart.fieldType(core.int),
    node: dart.fieldType(actor_node.ActorNode),
    bind: dart.fieldType(mat2d.Mat2D),
    inverseBind: dart.fieldType(mat2d.Mat2D)
  }));
  const _boneMatrices = dart.privateName(actor_skin, "_boneMatrices");
  actor_skin.ActorSkin = class ActorSkin extends actor_component.ActorComponent {
    get boneMatrices() {
      return this[_boneMatrices];
    }
    onDirty(dirt) {
    }
    update(dirt) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      let skinnable = actor_skinnable.ActorSkinnable.as(this.parent);
      if (skinnable == null) {
        return;
      }
      if (dart.test(skinnable.isConnectedToBones)) {
        let connectedBones = skinnable.connectedBones;
        let length = (dart.notNull(connectedBones[$length]) + 1) * 6;
        if (this[_boneMatrices] == null || this[_boneMatrices][$length] !== length) {
          this[_boneMatrices] = _native_typed_data.NativeFloat32List.new(length);
          this[_boneMatrices][$_set](0, 1.0);
          this[_boneMatrices][$_set](1, 0.0);
          this[_boneMatrices][$_set](2, 0.0);
          this[_boneMatrices][$_set](3, 1.0);
          this[_boneMatrices][$_set](4, 0.0);
          this[_boneMatrices][$_set](5, 0.0);
        }
        let bidx = 6;
        let mat = new mat2d.Mat2D.new();
        for (let cb of connectedBones) {
          if (cb.node == null) {
            this[_boneMatrices][$_set]((t0 = bidx, bidx = t0 + 1, t0), 1.0);
            this[_boneMatrices][$_set]((t0$ = bidx, bidx = t0$ + 1, t0$), 0.0);
            this[_boneMatrices][$_set]((t0$0 = bidx, bidx = t0$0 + 1, t0$0), 0.0);
            this[_boneMatrices][$_set]((t0$1 = bidx, bidx = t0$1 + 1, t0$1), 1.0);
            this[_boneMatrices][$_set]((t0$2 = bidx, bidx = t0$2 + 1, t0$2), 0.0);
            this[_boneMatrices][$_set]((t0$3 = bidx, bidx = t0$3 + 1, t0$3), 0.0);
            continue;
          }
          mat2d.Mat2D.multiply(mat, cb.node.worldTransform, cb.inverseBind);
          this[_boneMatrices][$_set]((t0$4 = bidx, bidx = t0$4 + 1, t0$4), mat._get(0));
          this[_boneMatrices][$_set]((t0$5 = bidx, bidx = t0$5 + 1, t0$5), mat._get(1));
          this[_boneMatrices][$_set]((t0$6 = bidx, bidx = t0$6 + 1, t0$6), mat._get(2));
          this[_boneMatrices][$_set]((t0$7 = bidx, bidx = t0$7 + 1, t0$7), mat._get(3));
          this[_boneMatrices][$_set]((t0$8 = bidx, bidx = t0$8 + 1, t0$8), mat._get(4));
          this[_boneMatrices][$_set]((t0$9 = bidx, bidx = t0$9 + 1, t0$9), mat._get(5));
        }
      }
      skinnable.invalidateDrawable();
    }
    completeResolve() {
      let skinnable = actor_skinnable.ActorSkinnable.as(this.parent);
      if (skinnable == null) {
        return;
      }
      skinnable.skin = this;
      this.artboard.addDependency(this, actor_component.ActorComponent.as(skinnable));
      if (dart.test(skinnable.isConnectedToBones)) {
        let connectedBones = skinnable.connectedBones;
        for (let skinnedBone of connectedBones) {
          this.artboard.addDependency(this, skinnedBone.node);
          let constraints = skinnedBone.node.allConstraints;
          if (constraints != null) {
            for (let constraint of constraints) {
              this.artboard.addDependency(this, constraint);
            }
          }
        }
      }
    }
    makeInstance(resetArtboard) {
      let instance = new actor_skin.ActorSkin.new();
      instance.copyComponent(this, resetArtboard);
      return instance;
    }
  };
  (actor_skin.ActorSkin.new = function() {
    this[_boneMatrices] = null;
    actor_skin.ActorSkin.__proto__.new.call(this);
    ;
  }).prototype = actor_skin.ActorSkin.prototype;
  dart.addTypeTests(actor_skin.ActorSkin);
  dart.setMethodSignature(actor_skin.ActorSkin, () => ({
    __proto__: dart.getMethods(actor_skin.ActorSkin.__proto__),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int]),
    completeResolve: dart.fnType(dart.void, []),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_skin.ActorSkin, () => ({
    __proto__: dart.getGetters(actor_skin.ActorSkin.__proto__),
    boneMatrices: typed_data.Float32List
  }));
  dart.setLibraryUri(actor_skin.ActorSkin, "package:flare_dart/actor_skin.dart");
  dart.setFieldSignature(actor_skin.ActorSkin, () => ({
    __proto__: dart.getFields(actor_skin.ActorSkin.__proto__),
    [_boneMatrices]: dart.fieldType(typed_data.Float32List)
  }));
  const _paths = dart.privateName(actor_shape, "_paths");
  const _strokes = dart.privateName(actor_shape, "_strokes");
  const _fills = dart.privateName(actor_shape, "_fills");
  const _transformAffectsStroke = dart.privateName(actor_shape, "_transformAffectsStroke");
  const _clipShapes = dart.privateName(actor_drawable, "_clipShapes");
  const _drawOrder = dart.privateName(actor_drawable, "_drawOrder");
  const drawIndex = dart.privateName(actor_drawable, "ActorDrawable.drawIndex");
  const isHidden = dart.privateName(actor_drawable, "ActorDrawable.isHidden");
  actor_drawable.ActorDrawable = class ActorDrawable extends actor_node.ActorNode {
    get drawIndex() {
      return this[drawIndex];
    }
    set drawIndex(value) {
      this[drawIndex] = value;
    }
    get isHidden() {
      return this[isHidden];
    }
    set isHidden(value) {
      this[isHidden] = value;
    }
    get clipShapes() {
      return this[_clipShapes];
    }
    get drawOrder() {
      return this[_drawOrder];
    }
    set drawOrder(value) {
      if (this[_drawOrder] == value) {
        return;
      }
      this[_drawOrder] = value;
      this.artboard.markDrawOrderDirty();
    }
    get doesDraw() {
      return !dart.test(this.isHidden) && !dart.test(this.renderCollapsed);
    }
    static read(artboard, reader, component) {
      actor_node.ActorNode.read(artboard, reader, component);
      component.isHidden = !dart.test(reader.readBool("isVisible"));
      if (dart.notNull(artboard.actor.version) < 21) {
        component.blendModeId = 3;
      } else {
        component.blendModeId = reader.readUint8("blendMode");
      }
      component.drawOrder = reader.readUint16("drawOrder");
      return component;
    }
    copyDrawable(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this.drawOrder = node.drawOrder;
      this.blendModeId = node.blendModeId;
      this.isHidden = node.isHidden;
    }
    initializeGraphics() {
    }
    completeResolve() {
      this[_clipShapes] = JSArrayOfListOfClipShape().of([]);
      let clippers = this.allClips;
      for (let clips of clippers) {
        let shapes = JSArrayOfClipShape().of([]);
        for (let clip of clips) {
          clip.node.all(dart.fn(node => {
            if (actor_shape.ActorShape.is(node)) {
              shapes[$add](new actor_drawable.ClipShape.new(node, clip.intersect));
            }
            return true;
          }, ActorNodeTobool()));
        }
        if (dart.test(shapes[$isNotEmpty])) {
          this[_clipShapes][$add](shapes);
        }
      }
    }
  };
  (actor_drawable.ActorDrawable.new = function() {
    this[_clipShapes] = null;
    this[_drawOrder] = null;
    this[drawIndex] = null;
    this[isHidden] = null;
    actor_drawable.ActorDrawable.__proto__.new.call(this);
    ;
  }).prototype = actor_drawable.ActorDrawable.prototype;
  dart.addTypeTests(actor_drawable.ActorDrawable);
  dart.setMethodSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getMethods(actor_drawable.ActorDrawable.__proto__),
    copyDrawable: dart.fnType(dart.void, [actor_drawable.ActorDrawable, actor_artboard.ActorArtboard]),
    initializeGraphics: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getGetters(actor_drawable.ActorDrawable.__proto__),
    clipShapes: core.List$(core.List$(actor_drawable.ClipShape)),
    drawOrder: core.int,
    doesDraw: core.bool
  }));
  dart.setSetterSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getSetters(actor_drawable.ActorDrawable.__proto__),
    drawOrder: core.int
  }));
  dart.setLibraryUri(actor_drawable.ActorDrawable, "package:flare_dart/actor_drawable.dart");
  dart.setFieldSignature(actor_drawable.ActorDrawable, () => ({
    __proto__: dart.getFields(actor_drawable.ActorDrawable.__proto__),
    [_clipShapes]: dart.fieldType(core.List$(core.List$(actor_drawable.ClipShape))),
    [_drawOrder]: dart.fieldType(core.int),
    drawIndex: dart.fieldType(core.int),
    isHidden: dart.fieldType(core.bool)
  }));
  actor_shape.ActorShape = class ActorShape extends actor_drawable.ActorDrawable {
    get transformAffectsStroke() {
      return this[_transformAffectsStroke];
    }
    get fill() {
      return dart.test(this[_fills][$isNotEmpty]) ? this[_fills][$first] : null;
    }
    get stroke() {
      return dart.test(this[_strokes][$isNotEmpty]) ? this[_strokes][$first] : null;
    }
    get fills() {
      return this[_fills];
    }
    get strokes() {
      return this[_strokes];
    }
    get paths() {
      return this[_paths];
    }
    update(dirt) {
      super.update(dirt);
      this.invalidateShape();
    }
    static read(artboard, reader, component) {
      actor_drawable.ActorDrawable.read(artboard, reader, component);
      if (dart.notNull(artboard.actor.version) >= 22) {
        component[_transformAffectsStroke] = reader.readBool("transformAffectsStroke");
      }
      return component;
    }
    makeInstance(resetArtboard) {
      let instanceShape = resetArtboard.actor.makeShapeNode(this);
      instanceShape.copyShape(this, resetArtboard);
      return instanceShape;
    }
    copyShape(node, resetArtboard) {
      this.copyDrawable(node, resetArtboard);
      this[_transformAffectsStroke] = node[_transformAffectsStroke];
    }
    computeAABB() {
      let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
      let aabb = null;
      for (let clips of this.clipShapes) {
        for (let clipShape of clips) {
          let bounds = clipShape.shape.computeAABB();
          if (bounds == null) {
            continue;
          }
          if (aabb == null) {
            aabb = bounds;
          } else {
            if (dart.notNull(bounds._get(0)) < dart.notNull(aabb._get(0))) {
              aabb._set(0, bounds._get(0));
            }
            if (dart.notNull(bounds._get(1)) < dart.notNull(aabb._get(1))) {
              aabb._set(1, bounds._get(1));
            }
            if (dart.notNull(bounds._get(2)) > dart.notNull(aabb._get(2))) {
              aabb._set(2, bounds._get(2));
            }
            if (dart.notNull(bounds._get(3)) > dart.notNull(aabb._get(3))) {
              aabb._set(3, bounds._get(3));
            }
          }
        }
      }
      if (aabb != null) {
        return aabb;
      }
      for (let node of this.children) {
        let path = actor_path.ActorBasePath.as(node);
        if (path == null) {
          continue;
        }
        let pathAABB = path.getPathAABB();
        if (aabb == null) {
          aabb = pathAABB;
        } else {
          aabb._set(0, math.min(core.double, aabb._get(0), pathAABB._get(0)));
          aabb._set(1, math.min(core.double, aabb._get(1), pathAABB._get(1)));
          aabb._set(2, math.max(core.double, aabb._get(2), pathAABB._get(2)));
          aabb._set(3, math.max(core.double, aabb._get(3), pathAABB._get(3)));
        }
      }
      let minX = 1.7976931348623157e+308;
      let minY = 1.7976931348623157e+308;
      let maxX = -1.7976931348623157e+308;
      let maxY = -1.7976931348623157e+308;
      if (aabb == null) {
        return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
      }
      let world = this.worldTransform;
      if (this[_strokes] != null) {
        let maxStroke = 0.0;
        for (let stroke of this[_strokes]) {
          if (dart.notNull(stroke.width) > dart.notNull(maxStroke)) {
            maxStroke = stroke.width;
          }
        }
        let padStroke = dart.notNull(maxStroke) / 2.0;
        t0 = aabb;
        t1 = 0;
        t0._set(t1, dart.notNull(t0._get(t1)) - padStroke);
        t0$ = aabb;
        t1$ = 2;
        t0$._set(t1$, dart.notNull(t0$._get(t1$)) + padStroke);
        t0$0 = aabb;
        t1$0 = 1;
        t0$0._set(t1$0, dart.notNull(t0$0._get(t1$0)) - padStroke);
        t0$1 = aabb;
        t1$1 = 3;
        t0$1._set(t1$1, dart.notNull(t0$1._get(t1$1)) + padStroke);
      }
      let points = JSArrayOfVec2D().of([new vec2d.Vec2D.fromValues(aabb._get(0), aabb._get(1)), new vec2d.Vec2D.fromValues(aabb._get(2), aabb._get(1)), new vec2d.Vec2D.fromValues(aabb._get(2), aabb._get(3)), new vec2d.Vec2D.fromValues(aabb._get(0), aabb._get(3))]);
      for (let i = 0; i < dart.notNull(points[$length]); i = i + 1) {
        let pt = points[$_get](i);
        let wp = vec2d.Vec2D.transformMat2D(pt, pt, world);
        if (dart.notNull(wp._get(0)) < dart.notNull(minX)) {
          minX = wp._get(0);
        }
        if (dart.notNull(wp._get(1)) < dart.notNull(minY)) {
          minY = wp._get(1);
        }
        if (dart.notNull(wp._get(0)) > dart.notNull(maxX)) {
          maxX = wp._get(0);
        }
        if (dart.notNull(wp._get(1)) > dart.notNull(maxY)) {
          maxY = wp._get(1);
        }
      }
      return new aabb$.AABB.fromValues(minX, minY, maxX, maxY);
    }
    addStroke(stroke) {
      this[_strokes][$add](stroke);
    }
    addFill(fill) {
      this[_fills][$add](fill);
    }
    initializeGraphics() {
      for (let stroke of this[_strokes]) {
        stroke.initializeGraphics();
      }
      for (let fill of this[_fills]) {
        fill.initializeGraphics();
      }
    }
    get blendModeId() {
      return 0;
    }
    set blendModeId(value) {
    }
    addPath(path) {
      if (dart.test(this[_paths][$contains](path))) {
        return false;
      }
      this[_paths][$add](path);
      return true;
    }
    removePath(path) {
      return this[_paths][$remove](path);
    }
  };
  (actor_shape.ActorShape.new = function() {
    this[_paths] = JSArrayOfActorBasePath().of([]);
    this[_strokes] = JSArrayOfActorStroke().of([]);
    this[_fills] = JSArrayOfActorFill().of([]);
    this[_transformAffectsStroke] = false;
    actor_shape.ActorShape.__proto__.new.call(this);
    ;
  }).prototype = actor_shape.ActorShape.prototype;
  dart.addTypeTests(actor_shape.ActorShape);
  dart.setMethodSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getMethods(actor_shape.ActorShape.__proto__),
    copyShape: dart.fnType(dart.void, [actor_shape.ActorShape, actor_artboard.ActorArtboard]),
    computeAABB: dart.fnType(aabb$.AABB, []),
    addStroke: dart.fnType(dart.void, [actor_color.ActorStroke]),
    addFill: dart.fnType(dart.void, [actor_color.ActorFill]),
    addPath: dart.fnType(core.bool, [actor_path.ActorBasePath]),
    removePath: dart.fnType(core.bool, [actor_path.ActorBasePath])
  }));
  dart.setGetterSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getGetters(actor_shape.ActorShape.__proto__),
    transformAffectsStroke: core.bool,
    fill: actor_color.ActorFill,
    stroke: actor_color.ActorStroke,
    fills: core.List$(actor_color.ActorFill),
    strokes: core.List$(actor_color.ActorStroke),
    paths: core.List$(actor_path.ActorBasePath),
    blendModeId: core.int
  }));
  dart.setSetterSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getSetters(actor_shape.ActorShape.__proto__),
    blendModeId: core.int
  }));
  dart.setLibraryUri(actor_shape.ActorShape, "package:flare_dart/actor_shape.dart");
  dart.setFieldSignature(actor_shape.ActorShape, () => ({
    __proto__: dart.getFields(actor_shape.ActorShape.__proto__),
    [_paths]: dart.finalFieldType(core.List$(actor_path.ActorBasePath)),
    [_strokes]: dart.finalFieldType(core.List$(actor_color.ActorStroke)),
    [_fills]: dart.finalFieldType(core.List$(actor_color.ActorFill)),
    [_transformAffectsStroke]: dart.fieldType(core.bool)
  }));
  const _name$3 = dart.privateName(actor_drawable, "_name");
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  actor_drawable.BlendModes = class BlendModes extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (actor_drawable.BlendModes.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = actor_drawable.BlendModes.prototype;
  dart.addTypeTests(actor_drawable.BlendModes);
  dart.setLibraryUri(actor_drawable.BlendModes, "package:flare_dart/actor_drawable.dart");
  dart.setFieldSignature(actor_drawable.BlendModes, () => ({
    __proto__: dart.getFields(actor_drawable.BlendModes.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(actor_drawable.BlendModes, ['toString']);
  actor_drawable.BlendModes.normal = C37 || CT.C37;
  actor_drawable.BlendModes.multiply = C38 || CT.C38;
  actor_drawable.BlendModes.screen = C39 || CT.C39;
  actor_drawable.BlendModes.additive = C40 || CT.C40;
  actor_drawable.BlendModes.values = C41 || CT.C41;
  const shape$ = dart.privateName(actor_drawable, "ClipShape.shape");
  const intersect$ = dart.privateName(actor_drawable, "ClipShape.intersect");
  actor_drawable.ClipShape = class ClipShape extends core.Object {
    get shape() {
      return this[shape$];
    }
    set shape(value) {
      super.shape = value;
    }
    get intersect() {
      return this[intersect$];
    }
    set intersect(value) {
      super.intersect = value;
    }
  };
  (actor_drawable.ClipShape.new = function(shape, intersect) {
    this[shape$] = shape;
    this[intersect$] = intersect;
    ;
  }).prototype = actor_drawable.ClipShape.prototype;
  dart.addTypeTests(actor_drawable.ClipShape);
  dart.setLibraryUri(actor_drawable.ClipShape, "package:flare_dart/actor_drawable.dart");
  dart.setFieldSignature(actor_drawable.ClipShape, () => ({
    __proto__: dart.getFields(actor_drawable.ClipShape.__proto__),
    shape: dart.finalFieldType(actor_shape.ActorShape),
    intersect: dart.finalFieldType(core.bool)
  }));
  const _name$4 = dart.privateName(actor_color, "_name");
  let C42;
  let C43;
  let C44;
  actor_color.FillRule = class FillRule extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (actor_color.FillRule.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = actor_color.FillRule.prototype;
  dart.addTypeTests(actor_color.FillRule);
  dart.setLibraryUri(actor_color.FillRule, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.FillRule, () => ({
    __proto__: dart.getFields(actor_color.FillRule.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$4]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(actor_color.FillRule, ['toString']);
  actor_color.FillRule.evenOdd = C42 || CT.C42;
  actor_color.FillRule.nonZero = C43 || CT.C43;
  actor_color.FillRule.values = C44 || CT.C44;
  let C45;
  let C46;
  let C47;
  let C48;
  actor_color.StrokeCap = class StrokeCap extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (actor_color.StrokeCap.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = actor_color.StrokeCap.prototype;
  dart.addTypeTests(actor_color.StrokeCap);
  dart.setLibraryUri(actor_color.StrokeCap, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.StrokeCap, () => ({
    __proto__: dart.getFields(actor_color.StrokeCap.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$4]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(actor_color.StrokeCap, ['toString']);
  actor_color.StrokeCap.butt = C45 || CT.C45;
  actor_color.StrokeCap.round = C46 || CT.C46;
  actor_color.StrokeCap.square = C47 || CT.C47;
  actor_color.StrokeCap.values = C48 || CT.C48;
  let C49;
  let C50;
  let C51;
  let C52;
  actor_color.StrokeJoin = class StrokeJoin extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (actor_color.StrokeJoin.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = actor_color.StrokeJoin.prototype;
  dart.addTypeTests(actor_color.StrokeJoin);
  dart.setLibraryUri(actor_color.StrokeJoin, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.StrokeJoin, () => ({
    __proto__: dart.getFields(actor_color.StrokeJoin.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$4]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(actor_color.StrokeJoin, ['toString']);
  actor_color.StrokeJoin.miter = C49 || CT.C49;
  actor_color.StrokeJoin.round = C50 || CT.C50;
  actor_color.StrokeJoin.bevel = C51 || CT.C51;
  actor_color.StrokeJoin.values = C52 || CT.C52;
  let C53;
  let C54;
  let C55;
  let C56;
  actor_color.TrimPath = class TrimPath extends core.Object {
    toString() {
      return this[_name$4];
    }
  };
  (actor_color.TrimPath.new = function(index, _name) {
    this.index = index;
    this[_name$4] = _name;
    ;
  }).prototype = actor_color.TrimPath.prototype;
  dart.addTypeTests(actor_color.TrimPath);
  dart.setLibraryUri(actor_color.TrimPath, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.TrimPath, () => ({
    __proto__: dart.getFields(actor_color.TrimPath.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$4]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(actor_color.TrimPath, ['toString']);
  actor_color.TrimPath.off = C53 || CT.C53;
  actor_color.TrimPath.sequential = C54 || CT.C54;
  actor_color.TrimPath.synced = C55 || CT.C55;
  actor_color.TrimPath.values = C56 || CT.C56;
  const _opacity$ = dart.privateName(actor_color, "_opacity");
  actor_color.ActorPaint = class ActorPaint extends actor_component.ActorComponent {
    get opacity() {
      return this[_opacity$];
    }
    set opacity(value) {
      if (value == this[_opacity$]) {
        return;
      }
      this[_opacity$] = value;
      this.markPaintDirty();
    }
    copyPaint(component, resetArtboard) {
      this.copyComponent(component, resetArtboard);
      this.opacity = component.opacity;
    }
    static read(artboard, reader, component) {
      actor_component.ActorComponent.read(artboard, reader, component);
      component.opacity = reader.readFloat32("opacity");
      return component;
    }
    completeResolve() {
      this.artboard.addDependency(this, this.parent);
    }
    get shape() {
      return actor_shape.ActorShape.as(this.parent);
    }
    markPaintDirty() {
      this.artboard.addDirt(this, 4, false);
    }
  };
  (actor_color.ActorPaint.new = function() {
    this[_opacity$] = 1.0;
    actor_color.ActorPaint.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ActorPaint.prototype;
  dart.addTypeTests(actor_color.ActorPaint);
  dart.setMethodSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getMethods(actor_color.ActorPaint.__proto__),
    copyPaint: dart.fnType(dart.void, [actor_color.ActorPaint, actor_artboard.ActorArtboard]),
    completeResolve: dart.fnType(dart.void, []),
    markPaintDirty: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getGetters(actor_color.ActorPaint.__proto__),
    opacity: core.double,
    shape: actor_shape.ActorShape
  }));
  dart.setSetterSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getSetters(actor_color.ActorPaint.__proto__),
    opacity: core.double
  }));
  dart.setLibraryUri(actor_color.ActorPaint, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.ActorPaint, () => ({
    __proto__: dart.getFields(actor_color.ActorPaint.__proto__),
    [_opacity$]: dart.fieldType(core.double)
  }));
  const _color$ = dart.privateName(actor_color, "_color");
  actor_color.ActorColor = class ActorColor extends actor_color.ActorPaint {
    get color() {
      return this[_color$];
    }
    get displayColor() {
      let t0, t0$;
      t0$ = (t0 = this.artboard, t0 == null ? null : t0.overrideColor);
      return t0$ == null ? this[_color$] : t0$;
    }
    set color(value) {
      if (value[$length] !== 4) {
        return;
      }
      this[_color$][$_set](0, value[$_get](0));
      this[_color$][$_set](1, value[$_get](1));
      this[_color$][$_set](2, value[$_get](2));
      this[_color$][$_set](3, value[$_get](3));
      this.markPaintDirty();
    }
    copyColor(node, resetArtboard) {
      this.copyPaint(node, resetArtboard);
      this[_color$][$_set](0, node[_color$][$_get](0));
      this[_color$][$_set](1, node[_color$][$_get](1));
      this[_color$][$_set](2, node[_color$][$_get](2));
      this[_color$][$_set](3, node[_color$][$_get](3));
    }
    static read(artboard, reader, component) {
      actor_color.ActorPaint.read(artboard, reader, component);
      component[_color$] = reader.readFloat32Array(4, "color");
      return component;
    }
    onDirty(dirt) {
    }
    update(dirt) {
    }
  };
  (actor_color.ActorColor.new = function() {
    this[_color$] = _native_typed_data.NativeFloat32List.new(4);
    actor_color.ActorColor.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ActorColor.prototype;
  dart.addTypeTests(actor_color.ActorColor);
  dart.setMethodSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getMethods(actor_color.ActorColor.__proto__),
    copyColor: dart.fnType(dart.void, [actor_color.ActorColor, actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getGetters(actor_color.ActorColor.__proto__),
    color: typed_data.Float32List,
    displayColor: typed_data.Float32List
  }));
  dart.setSetterSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getSetters(actor_color.ActorColor.__proto__),
    color: typed_data.Float32List
  }));
  dart.setLibraryUri(actor_color.ActorColor, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.ActorColor, () => ({
    __proto__: dart.getFields(actor_color.ActorColor.__proto__),
    [_color$]: dart.fieldType(typed_data.Float32List)
  }));
  const _fillRule = dart.privateName(actor_color, "_fillRule");
  actor_color.ActorFill = class ActorFill extends core.Object {
    get fillRule() {
      return this[_fillRule];
    }
    static read(artboard, reader, component) {
      component[_fillRule] = actor_color.fillRuleLookup[$_get](reader.readUint8("fillRule"));
    }
    copyFill(node, resetArtboard) {
      this[_fillRule] = node[_fillRule];
    }
  };
  (actor_color.ActorFill.new = function() {
    this[_fillRule] = actor_color.FillRule.evenOdd;
    ;
  }).prototype = actor_color.ActorFill.prototype;
  dart.addTypeTests(actor_color.ActorFill);
  dart.setMethodSignature(actor_color.ActorFill, () => ({
    __proto__: dart.getMethods(actor_color.ActorFill.__proto__),
    copyFill: dart.fnType(dart.void, [actor_color.ActorFill, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_color.ActorFill, () => ({
    __proto__: dart.getGetters(actor_color.ActorFill.__proto__),
    fillRule: actor_color.FillRule
  }));
  dart.setLibraryUri(actor_color.ActorFill, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.ActorFill, () => ({
    __proto__: dart.getFields(actor_color.ActorFill.__proto__),
    [_fillRule]: dart.fieldType(actor_color.FillRule)
  }));
  const _width$0 = dart.privateName(actor_color, "_width");
  const _cap = dart.privateName(actor_color, "_cap");
  const _join = dart.privateName(actor_color, "_join");
  const _trim = dart.privateName(actor_color, "_trim");
  const _trimStart = dart.privateName(actor_color, "_trimStart");
  const _trimEnd = dart.privateName(actor_color, "_trimEnd");
  const _trimOffset = dart.privateName(actor_color, "_trimOffset");
  actor_color.ActorStroke = class ActorStroke extends core.Object {
    get width() {
      return this[_width$0];
    }
    set width(value) {
      if (value == this[_width$0]) {
        return;
      }
      this[_width$0] = value;
      this.markPaintDirty();
    }
    get cap() {
      return this[_cap];
    }
    get join() {
      return this[_join];
    }
    get trim() {
      return this[_trim];
    }
    get isTrimmed() {
      return !dart.equals(this[_trim], actor_color.TrimPath.off);
    }
    get trimStart() {
      return this[_trimStart];
    }
    set trimStart(value) {
      if (this[_trimStart] == value) {
        return;
      }
      this[_trimStart] = value;
      this.markPathEffectsDirty();
    }
    get trimEnd() {
      return this[_trimEnd];
    }
    set trimEnd(value) {
      if (this[_trimEnd] == value) {
        return;
      }
      this[_trimEnd] = value;
      this.markPathEffectsDirty();
    }
    get trimOffset() {
      return this[_trimOffset];
    }
    set trimOffset(value) {
      if (this[_trimOffset] == value) {
        return;
      }
      this[_trimOffset] = value;
      this.markPathEffectsDirty();
    }
    static read(artboard, reader, component) {
      let t0;
      component.width = reader.readFloat32("width");
      if (dart.notNull(artboard.actor.version) >= 19) {
        component[_cap] = actor_color.strokeCapLookup[$_get](reader.readUint8("cap"));
        component[_join] = actor_color.strokeJoinLookup[$_get](reader.readUint8("join"));
        if (dart.notNull(artboard.actor.version) >= 20) {
          component[_trim] = (t0 = actor_color.trimPathLookup[$_get](reader.readUint8("trim")), t0 == null ? actor_color.TrimPath.off : t0);
          if (dart.test(component.isTrimmed)) {
            component[_trimStart] = reader.readFloat32("start");
            component[_trimEnd] = reader.readFloat32("end");
            component[_trimOffset] = reader.readFloat32("offset");
          }
        }
      }
    }
    copyStroke(node, resetArtboard) {
      this.width = node.width;
      this[_cap] = node[_cap];
      this[_join] = node[_join];
      this[_trim] = node[_trim];
      this[_trimStart] = node[_trimStart];
      this[_trimEnd] = node[_trimEnd];
      this[_trimOffset] = node[_trimOffset];
    }
  };
  (actor_color.ActorStroke.new = function() {
    this[_width$0] = 1.0;
    this[_cap] = actor_color.StrokeCap.butt;
    this[_join] = actor_color.StrokeJoin.miter;
    this[_trim] = actor_color.TrimPath.off;
    this[_trimStart] = 0.0;
    this[_trimEnd] = 0.0;
    this[_trimOffset] = 0.0;
    ;
  }).prototype = actor_color.ActorStroke.prototype;
  dart.addTypeTests(actor_color.ActorStroke);
  dart.setMethodSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getMethods(actor_color.ActorStroke.__proto__),
    copyStroke: dart.fnType(dart.void, [actor_color.ActorStroke, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getGetters(actor_color.ActorStroke.__proto__),
    width: core.double,
    cap: actor_color.StrokeCap,
    join: actor_color.StrokeJoin,
    trim: actor_color.TrimPath,
    isTrimmed: core.bool,
    trimStart: core.double,
    trimEnd: core.double,
    trimOffset: core.double
  }));
  dart.setSetterSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getSetters(actor_color.ActorStroke.__proto__),
    width: core.double,
    trimStart: core.double,
    trimEnd: core.double,
    trimOffset: core.double
  }));
  dart.setLibraryUri(actor_color.ActorStroke, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.ActorStroke, () => ({
    __proto__: dart.getFields(actor_color.ActorStroke.__proto__),
    [_width$0]: dart.fieldType(core.double),
    [_cap]: dart.fieldType(actor_color.StrokeCap),
    [_join]: dart.fieldType(actor_color.StrokeJoin),
    [_trim]: dart.fieldType(actor_color.TrimPath),
    [_trimStart]: dart.fieldType(core.double),
    [_trimEnd]: dart.fieldType(core.double),
    [_trimOffset]: dart.fieldType(core.double)
  }));
  const ActorColor_ActorFill$36 = class ActorColor_ActorFill extends actor_color.ActorColor {};
  (ActorColor_ActorFill$36.new = function() {
    actor_color.ActorFill.new.call(this);
    ActorColor_ActorFill$36.__proto__.new.call(this);
  }).prototype = ActorColor_ActorFill$36.prototype;
  dart.applyMixin(ActorColor_ActorFill$36, actor_color.ActorFill);
  actor_color.ColorFill = class ColorFill extends ActorColor_ActorFill$36 {
    copyColorFill(node, resetArtboard) {
      this.copyColor(node, resetArtboard);
      this.copyFill(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.ActorColor.read(artboard, reader, component);
      actor_color.ActorFill.read(artboard, reader, component);
      return component;
    }
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addFill(this);
      }
    }
  };
  (actor_color.ColorFill.new = function() {
    actor_color.ColorFill.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ColorFill.prototype;
  dart.addTypeTests(actor_color.ColorFill);
  dart.setMethodSignature(actor_color.ColorFill, () => ({
    __proto__: dart.getMethods(actor_color.ColorFill.__proto__),
    copyColorFill: dart.fnType(dart.void, [actor_color.ColorFill, actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(actor_color.ColorFill, "package:flare_dart/actor_color.dart");
  const ActorColor_ActorStroke$36 = class ActorColor_ActorStroke extends actor_color.ActorColor {};
  (ActorColor_ActorStroke$36.new = function() {
    actor_color.ActorStroke.new.call(this);
    ActorColor_ActorStroke$36.__proto__.new.call(this);
  }).prototype = ActorColor_ActorStroke$36.prototype;
  dart.applyMixin(ActorColor_ActorStroke$36, actor_color.ActorStroke);
  actor_color.ColorStroke = class ColorStroke extends ActorColor_ActorStroke$36 {
    copyColorStroke(node, resetArtboard) {
      this.copyColor(node, resetArtboard);
      this.copyStroke(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.ActorColor.read(artboard, reader, component);
      actor_color.ActorStroke.read(artboard, reader, component);
      return component;
    }
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addStroke(this);
      }
    }
  };
  (actor_color.ColorStroke.new = function() {
    actor_color.ColorStroke.__proto__.new.call(this);
    ;
  }).prototype = actor_color.ColorStroke.prototype;
  dart.addTypeTests(actor_color.ColorStroke);
  dart.setMethodSignature(actor_color.ColorStroke, () => ({
    __proto__: dart.getMethods(actor_color.ColorStroke.__proto__),
    copyColorStroke: dart.fnType(dart.void, [actor_color.ColorStroke, actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(actor_color.ColorStroke, "package:flare_dart/actor_color.dart");
  const _colorStops = dart.privateName(actor_color, "_colorStops");
  const _start = dart.privateName(actor_color, "_start");
  const _end = dart.privateName(actor_color, "_end");
  const _renderStart = dart.privateName(actor_color, "_renderStart");
  const _renderEnd = dart.privateName(actor_color, "_renderEnd");
  actor_color.GradientColor = class GradientColor extends actor_color.ActorPaint {
    get start() {
      return this[_start];
    }
    get end() {
      return this[_end];
    }
    get renderStart() {
      return this[_renderStart];
    }
    get renderEnd() {
      return this[_renderEnd];
    }
    get colorStops() {
      return this[_colorStops];
    }
    copyGradient(node, resetArtboard) {
      this.copyPaint(node, resetArtboard);
      this[_colorStops] = _native_typed_data.NativeFloat32List.fromList(node[_colorStops]);
      vec2d.Vec2D.copy(this[_start], node[_start]);
      vec2d.Vec2D.copy(this[_end], node[_end]);
      this.opacity = node.opacity;
    }
    static read(artboard, reader, component) {
      actor_color.ActorPaint.read(artboard, reader, component);
      let numStops = reader.readUint8("numColorStops");
      let stops = reader.readFloat32Array(dart.notNull(numStops) * 5, "colorStops");
      component[_colorStops] = stops;
      vec2d.Vec2D.copyFromList(component[_start], reader.readFloat32Array(2, "start"));
      vec2d.Vec2D.copyFromList(component[_end], reader.readFloat32Array(2, "end"));
      return component;
    }
    onDirty(dirt) {
    }
    update(dirt) {
      let shape = actor_shape.ActorShape.as(this.parent);
      let world = shape.worldTransform;
      if (dart.test(shape.transformAffectsStroke)) {
        vec2d.Vec2D.copy(this[_renderStart], this[_start]);
        vec2d.Vec2D.copy(this[_renderEnd], this[_end]);
      } else {
        vec2d.Vec2D.transformMat2D(this[_renderStart], this[_start], world);
        vec2d.Vec2D.transformMat2D(this[_renderEnd], this[_end], world);
      }
    }
  };
  (actor_color.GradientColor.new = function() {
    this[_colorStops] = _native_typed_data.NativeFloat32List.new(10);
    this[_start] = new vec2d.Vec2D.new();
    this[_end] = new vec2d.Vec2D.new();
    this[_renderStart] = new vec2d.Vec2D.new();
    this[_renderEnd] = new vec2d.Vec2D.new();
    actor_color.GradientColor.__proto__.new.call(this);
    ;
  }).prototype = actor_color.GradientColor.prototype;
  dart.addTypeTests(actor_color.GradientColor);
  dart.setMethodSignature(actor_color.GradientColor, () => ({
    __proto__: dart.getMethods(actor_color.GradientColor.__proto__),
    copyGradient: dart.fnType(dart.void, [actor_color.GradientColor, actor_artboard.ActorArtboard]),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(actor_color.GradientColor, () => ({
    __proto__: dart.getGetters(actor_color.GradientColor.__proto__),
    start: vec2d.Vec2D,
    end: vec2d.Vec2D,
    renderStart: vec2d.Vec2D,
    renderEnd: vec2d.Vec2D,
    colorStops: typed_data.Float32List
  }));
  dart.setLibraryUri(actor_color.GradientColor, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.GradientColor, () => ({
    __proto__: dart.getFields(actor_color.GradientColor.__proto__),
    [_colorStops]: dart.fieldType(typed_data.Float32List),
    [_start]: dart.finalFieldType(vec2d.Vec2D),
    [_end]: dart.finalFieldType(vec2d.Vec2D),
    [_renderStart]: dart.finalFieldType(vec2d.Vec2D),
    [_renderEnd]: dart.finalFieldType(vec2d.Vec2D)
  }));
  const GradientColor_ActorFill$36 = class GradientColor_ActorFill extends actor_color.GradientColor {};
  (GradientColor_ActorFill$36.new = function() {
    actor_color.ActorFill.new.call(this);
    GradientColor_ActorFill$36.__proto__.new.call(this);
  }).prototype = GradientColor_ActorFill$36.prototype;
  dart.applyMixin(GradientColor_ActorFill$36, actor_color.ActorFill);
  actor_color.GradientFill = class GradientFill extends GradientColor_ActorFill$36 {
    copyGradientFill(node, resetArtboard) {
      this.copyGradient(node, resetArtboard);
      this.copyFill(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.GradientColor.read(artboard, reader, component);
      component[_fillRule] = actor_color.fillRuleLookup[$_get](reader.readUint8("fillRule"));
      return component;
    }
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addFill(this);
      }
    }
  };
  (actor_color.GradientFill.new = function() {
    actor_color.GradientFill.__proto__.new.call(this);
    ;
  }).prototype = actor_color.GradientFill.prototype;
  dart.addTypeTests(actor_color.GradientFill);
  dart.setMethodSignature(actor_color.GradientFill, () => ({
    __proto__: dart.getMethods(actor_color.GradientFill.__proto__),
    copyGradientFill: dart.fnType(dart.void, [actor_color.GradientFill, actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(actor_color.GradientFill, "package:flare_dart/actor_color.dart");
  const GradientColor_ActorStroke$36 = class GradientColor_ActorStroke extends actor_color.GradientColor {};
  (GradientColor_ActorStroke$36.new = function() {
    actor_color.ActorStroke.new.call(this);
    GradientColor_ActorStroke$36.__proto__.new.call(this);
  }).prototype = GradientColor_ActorStroke$36.prototype;
  dart.applyMixin(GradientColor_ActorStroke$36, actor_color.ActorStroke);
  actor_color.GradientStroke = class GradientStroke extends GradientColor_ActorStroke$36 {
    copyGradientStroke(node, resetArtboard) {
      this.copyGradient(node, resetArtboard);
      this.copyStroke(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.GradientColor.read(artboard, reader, component);
      actor_color.ActorStroke.read(artboard, reader, component);
      return component;
    }
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addStroke(this);
      }
    }
  };
  (actor_color.GradientStroke.new = function() {
    actor_color.GradientStroke.__proto__.new.call(this);
    ;
  }).prototype = actor_color.GradientStroke.prototype;
  dart.addTypeTests(actor_color.GradientStroke);
  dart.setMethodSignature(actor_color.GradientStroke, () => ({
    __proto__: dart.getMethods(actor_color.GradientStroke.__proto__),
    copyGradientStroke: dart.fnType(dart.void, [actor_color.GradientStroke, actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(actor_color.GradientStroke, "package:flare_dart/actor_color.dart");
  const secondaryRadiusScale = dart.privateName(actor_color, "RadialGradientColor.secondaryRadiusScale");
  actor_color.RadialGradientColor = class RadialGradientColor extends actor_color.GradientColor {
    get secondaryRadiusScale() {
      return this[secondaryRadiusScale];
    }
    set secondaryRadiusScale(value) {
      this[secondaryRadiusScale] = value;
    }
    copyRadialGradient(node, resetArtboard) {
      this.copyGradient(node, resetArtboard);
      this.secondaryRadiusScale = node.secondaryRadiusScale;
    }
    static read(artboard, reader, component) {
      actor_color.GradientColor.read(artboard, reader, component);
      component.secondaryRadiusScale = reader.readFloat32("secondaryRadiusScale");
      return component;
    }
  };
  (actor_color.RadialGradientColor.new = function() {
    this[secondaryRadiusScale] = 1.0;
    actor_color.RadialGradientColor.__proto__.new.call(this);
    ;
  }).prototype = actor_color.RadialGradientColor.prototype;
  dart.addTypeTests(actor_color.RadialGradientColor);
  dart.setMethodSignature(actor_color.RadialGradientColor, () => ({
    __proto__: dart.getMethods(actor_color.RadialGradientColor.__proto__),
    copyRadialGradient: dart.fnType(dart.void, [actor_color.RadialGradientColor, actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(actor_color.RadialGradientColor, "package:flare_dart/actor_color.dart");
  dart.setFieldSignature(actor_color.RadialGradientColor, () => ({
    __proto__: dart.getFields(actor_color.RadialGradientColor.__proto__),
    secondaryRadiusScale: dart.fieldType(core.double)
  }));
  const RadialGradientColor_ActorFill$36 = class RadialGradientColor_ActorFill extends actor_color.RadialGradientColor {};
  (RadialGradientColor_ActorFill$36.new = function() {
    actor_color.ActorFill.new.call(this);
    RadialGradientColor_ActorFill$36.__proto__.new.call(this);
  }).prototype = RadialGradientColor_ActorFill$36.prototype;
  dart.applyMixin(RadialGradientColor_ActorFill$36, actor_color.ActorFill);
  actor_color.RadialGradientFill = class RadialGradientFill extends RadialGradientColor_ActorFill$36 {
    copyRadialFill(node, resetArtboard) {
      this.copyRadialGradient(node, resetArtboard);
      this.copyFill(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.RadialGradientColor.read(artboard, reader, component);
      actor_color.ActorFill.read(artboard, reader, component);
      return component;
    }
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addFill(this);
      }
    }
  };
  (actor_color.RadialGradientFill.new = function() {
    actor_color.RadialGradientFill.__proto__.new.call(this);
    ;
  }).prototype = actor_color.RadialGradientFill.prototype;
  dart.addTypeTests(actor_color.RadialGradientFill);
  dart.setMethodSignature(actor_color.RadialGradientFill, () => ({
    __proto__: dart.getMethods(actor_color.RadialGradientFill.__proto__),
    copyRadialFill: dart.fnType(dart.void, [actor_color.RadialGradientFill, actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(actor_color.RadialGradientFill, "package:flare_dart/actor_color.dart");
  const RadialGradientColor_ActorStroke$36 = class RadialGradientColor_ActorStroke extends actor_color.RadialGradientColor {};
  (RadialGradientColor_ActorStroke$36.new = function() {
    actor_color.ActorStroke.new.call(this);
    RadialGradientColor_ActorStroke$36.__proto__.new.call(this);
  }).prototype = RadialGradientColor_ActorStroke$36.prototype;
  dart.applyMixin(RadialGradientColor_ActorStroke$36, actor_color.ActorStroke);
  actor_color.RadialGradientStroke = class RadialGradientStroke extends RadialGradientColor_ActorStroke$36 {
    copyRadialStroke(node, resetArtboard) {
      this.copyRadialGradient(node, resetArtboard);
      this.copyStroke(node, resetArtboard);
    }
    static read(artboard, reader, component) {
      actor_color.RadialGradientColor.read(artboard, reader, component);
      actor_color.ActorStroke.read(artboard, reader, component);
      return component;
    }
    completeResolve() {
      super.completeResolve();
      let parentNode = this.parent;
      if (actor_shape.ActorShape.is(parentNode)) {
        parentNode.addStroke(this);
      }
    }
  };
  (actor_color.RadialGradientStroke.new = function() {
    actor_color.RadialGradientStroke.__proto__.new.call(this);
    ;
  }).prototype = actor_color.RadialGradientStroke.prototype;
  dart.addTypeTests(actor_color.RadialGradientStroke);
  dart.setMethodSignature(actor_color.RadialGradientStroke, () => ({
    __proto__: dart.getMethods(actor_color.RadialGradientStroke.__proto__),
    copyRadialStroke: dart.fnType(dart.void, [actor_color.RadialGradientStroke, actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(actor_color.RadialGradientStroke, "package:flare_dart/actor_color.dart");
  dart.defineLazy(actor_color, {
    /*actor_color.fillRuleLookup*/get fillRuleLookup() {
      return HashMapOfint$FillRule().fromIterables(JSArrayOfint().of([0, 1]), JSArrayOfFillRule().of([actor_color.FillRule.evenOdd, actor_color.FillRule.nonZero]));
    },
    /*actor_color.strokeCapLookup*/get strokeCapLookup() {
      return HashMapOfint$StrokeCap().fromIterables(JSArrayOfint().of([0, 1, 2]), JSArrayOfStrokeCap().of([actor_color.StrokeCap.butt, actor_color.StrokeCap.round, actor_color.StrokeCap.square]));
    },
    /*actor_color.strokeJoinLookup*/get strokeJoinLookup() {
      return HashMapOfint$StrokeJoin().fromIterables(JSArrayOfint().of([0, 1, 2]), JSArrayOfStrokeJoin().of([actor_color.StrokeJoin.miter, actor_color.StrokeJoin.round, actor_color.StrokeJoin.bevel]));
    },
    /*actor_color.trimPathLookup*/get trimPathLookup() {
      return HashMapOfint$TrimPath().fromIterables(JSArrayOfint().of([0, 1, 2]), JSArrayOfTrimPath().of([actor_color.TrimPath.off, actor_color.TrimPath.sequential, actor_color.TrimPath.synced]));
    }
  });
  const _radius = dart.privateName(actor_rectangle, "_radius");
  actor_rectangle.ActorRectangle = class ActorRectangle extends actor_path.ActorProceduralPath {
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_rectangle.ActorRectangle.new();
      instance.copyRectangle(this, resetArtboard);
      return instance;
    }
    copyRectangle(node, resetArtboard) {
      this.copyPath(node, resetArtboard);
      this[_radius] = node[_radius];
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_rectangle.ActorRectangle.new() : null;
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      component[_radius] = reader.readFloat32("cornerRadius");
      return component;
    }
    get points() {
      let halfWidth = dart.notNull(this.width) / 2;
      let halfHeight = dart.notNull(this.height) / 2;
      let renderRadius = math.min(core.double, this[_radius], math.min(core.double, halfWidth, halfHeight));
      let _rectanglePathPoints = JSArrayOfPathPoint().of([]);
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(-halfWidth, -halfHeight), renderRadius));
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(halfWidth, -halfHeight), renderRadius));
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(halfWidth, halfHeight), renderRadius));
      _rectanglePathPoints[$add](new path_point.StraightPathPoint.fromValues(new vec2d.Vec2D.fromValues(-halfWidth, halfHeight), renderRadius));
      return _rectanglePathPoints;
    }
    set radius(rd) {
      if (rd != this[_radius]) {
        this[_radius] = rd;
        this.invalidateDrawable();
      }
    }
    get isClosed() {
      return true;
    }
    get doesDraw() {
      return !dart.test(this.renderCollapsed);
    }
    get radius() {
      return this[_radius];
    }
  };
  (actor_rectangle.ActorRectangle.new = function() {
    this[_radius] = 0.0;
    actor_rectangle.ActorRectangle.__proto__.new.call(this);
    ;
  }).prototype = actor_rectangle.ActorRectangle.prototype;
  dart.addTypeTests(actor_rectangle.ActorRectangle);
  dart.setMethodSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getMethods(actor_rectangle.ActorRectangle.__proto__),
    invalidatePath: dart.fnType(dart.void, []),
    copyRectangle: dart.fnType(dart.void, [actor_rectangle.ActorRectangle, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getGetters(actor_rectangle.ActorRectangle.__proto__),
    points: core.List$(path_point.PathPoint),
    isClosed: core.bool,
    doesDraw: core.bool,
    radius: core.double
  }));
  dart.setSetterSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getSetters(actor_rectangle.ActorRectangle.__proto__),
    radius: core.double
  }));
  dart.setLibraryUri(actor_rectangle.ActorRectangle, "package:flare_dart/actor_rectangle.dart");
  dart.setFieldSignature(actor_rectangle.ActorRectangle, () => ({
    __proto__: dart.getFields(actor_rectangle.ActorRectangle.__proto__),
    [_radius]: dart.fieldType(core.double)
  }));
  const _activeChildIndex = dart.privateName(actor_node_solo, "_activeChildIndex");
  actor_node_solo.ActorNodeSolo = class ActorNodeSolo extends actor_node.ActorNode {
    set activeChildIndex(idx) {
      if (idx != this[_activeChildIndex]) {
        this.setActiveChildIndex(idx);
      }
    }
    get activeChildIndex() {
      return this[_activeChildIndex];
    }
    setActiveChildIndex(idx) {
      if (this.children != null) {
        this[_activeChildIndex] = math.min(core.int, this.children[$length], math.max(core.int, 0, idx));
        for (let i = 0; i < dart.notNull(this.children[$length]); i = i + 1) {
          let child = this.children[$_get](i);
          let cv = i !== dart.notNull(this[_activeChildIndex]) - 1;
          child.collapsedVisibility = cv;
        }
      }
    }
    makeInstance(resetArtboard) {
      let soloInstance = new actor_node_solo.ActorNodeSolo.new();
      soloInstance.copySolo(this, resetArtboard);
      return soloInstance;
    }
    copySolo(node, resetArtboard) {
      this.copyNode(node, resetArtboard);
      this[_activeChildIndex] = node[_activeChildIndex];
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_node_solo.ActorNodeSolo.new() : null;
      actor_node.ActorNode.read(artboard, reader, node);
      node[_activeChildIndex] = reader.readUint32("activeChild");
      return node;
    }
    completeResolve() {
      super.completeResolve();
      this.setActiveChildIndex(this.activeChildIndex);
    }
  };
  (actor_node_solo.ActorNodeSolo.new = function() {
    this[_activeChildIndex] = 0;
    actor_node_solo.ActorNodeSolo.__proto__.new.call(this);
    ;
  }).prototype = actor_node_solo.ActorNodeSolo.prototype;
  dart.addTypeTests(actor_node_solo.ActorNodeSolo);
  dart.setMethodSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getMethods(actor_node_solo.ActorNodeSolo.__proto__),
    setActiveChildIndex: dart.fnType(dart.void, [core.int]),
    copySolo: dart.fnType(dart.void, [actor_node_solo.ActorNodeSolo, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getGetters(actor_node_solo.ActorNodeSolo.__proto__),
    activeChildIndex: core.int
  }));
  dart.setSetterSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getSetters(actor_node_solo.ActorNodeSolo.__proto__),
    activeChildIndex: core.int
  }));
  dart.setLibraryUri(actor_node_solo.ActorNodeSolo, "package:flare_dart/actor_node_solo.dart");
  dart.setFieldSignature(actor_node_solo.ActorNodeSolo, () => ({
    __proto__: dart.getFields(actor_node_solo.ActorNodeSolo.__proto__),
    [_activeChildIndex]: dart.fieldType(core.int)
  }));
  const _atlasIndex$ = dart.privateName(actor_image, "_atlasIndex");
  const _offset$ = dart.privateName(actor_image, "_offset");
  actor_image.SequenceFrame = class SequenceFrame extends core.Object {
    toString() {
      return "(" + dart.toString(this[_atlasIndex$]) + ", " + dart.toString(this[_offset$]) + ")";
    }
    get atlasIndex() {
      return this[_atlasIndex$];
    }
    get offset() {
      return this[_offset$];
    }
  };
  (actor_image.SequenceFrame.new = function(_atlasIndex, _offset) {
    this[_atlasIndex$] = _atlasIndex;
    this[_offset$] = _offset;
    ;
  }).prototype = actor_image.SequenceFrame.prototype;
  dart.addTypeTests(actor_image.SequenceFrame);
  dart.setGetterSignature(actor_image.SequenceFrame, () => ({
    __proto__: dart.getGetters(actor_image.SequenceFrame.__proto__),
    atlasIndex: core.int,
    offset: core.int
  }));
  dart.setLibraryUri(actor_image.SequenceFrame, "package:flare_dart/actor_image.dart");
  dart.setFieldSignature(actor_image.SequenceFrame, () => ({
    __proto__: dart.getFields(actor_image.SequenceFrame.__proto__),
    [_atlasIndex$]: dart.finalFieldType(core.int),
    [_offset$]: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(actor_image.SequenceFrame, ['toString']);
  const _textureIndex = dart.privateName(actor_image, "_textureIndex");
  const _vertices$ = dart.privateName(actor_image, "_vertices");
  const _dynamicUV = dart.privateName(actor_image, "_dynamicUV");
  const _triangles = dart.privateName(actor_image, "_triangles");
  const _vertexCount = dart.privateName(actor_image, "_vertexCount");
  const _triangleCount = dart.privateName(actor_image, "_triangleCount");
  const _animationDeformedVertices = dart.privateName(actor_image, "_animationDeformedVertices");
  const _sequenceFrames = dart.privateName(actor_image, "_sequenceFrames");
  const _sequenceUVs = dart.privateName(actor_image, "_sequenceUVs");
  const _sequenceFrame = dart.privateName(actor_image, "_sequenceFrame");
  const drawOrder = dart.privateName(actor_image, "ActorImage.drawOrder");
  const ActorDrawable_ActorSkinnable$36 = class ActorDrawable_ActorSkinnable extends actor_drawable.ActorDrawable {};
  (ActorDrawable_ActorSkinnable$36.new = function() {
    actor_skinnable.ActorSkinnable.new.call(this);
    ActorDrawable_ActorSkinnable$36.__proto__.new.call(this);
  }).prototype = ActorDrawable_ActorSkinnable$36.prototype;
  dart.applyMixin(ActorDrawable_ActorSkinnable$36, actor_skinnable.ActorSkinnable);
  actor_image.ActorImage = class ActorImage extends ActorDrawable_ActorSkinnable$36 {
    get drawOrder() {
      return this[drawOrder];
    }
    set drawOrder(value) {
      this[drawOrder] = value;
    }
    get dynamicUV() {
      return this[_dynamicUV];
    }
    get sequenceFrame() {
      return this[_sequenceFrame];
    }
    get sequenceUVs() {
      return this[_sequenceUVs];
    }
    get sequenceFrames() {
      return this[_sequenceFrames];
    }
    set sequenceFrame(value) {
      this[_sequenceFrame] = value;
    }
    get textureIndex() {
      return this[_textureIndex];
    }
    get vertexCount() {
      return this[_vertexCount];
    }
    get triangleCount() {
      return this[_triangleCount];
    }
    get triangles() {
      return this[_triangles];
    }
    get vertices() {
      return this[_vertices$];
    }
    get vertexPositionOffset() {
      return 0;
    }
    get vertexUVOffset() {
      return 2;
    }
    get vertexBoneIndexOffset() {
      return 4;
    }
    get vertexBoneWeightOffset() {
      return 8;
    }
    get vertexStride() {
      return dart.test(this.isConnectedToBones) ? 12 : 4;
    }
    get doesAnimationVertexDeform() {
      return this[_animationDeformedVertices] != null;
    }
    set doesAnimationVertexDeform(value) {
      let t0, t0$;
      if (dart.test(value)) {
        if (this[_animationDeformedVertices] == null || this[_animationDeformedVertices][$length] !== dart.notNull(this[_vertexCount]) * 2) {
          this[_animationDeformedVertices] = _native_typed_data.NativeFloat32List.new(dart.notNull(this.vertexCount) * 2);
          let writeIdx = 0;
          let readIdx = 0;
          let readStride = this.vertexStride;
          for (let i = 0; i < dart.notNull(this[_vertexCount]); i = i + 1) {
            this[_animationDeformedVertices][$_set]((t0 = writeIdx, writeIdx = t0 + 1, t0), this[_vertices$][$_get](readIdx));
            this[_animationDeformedVertices][$_set]((t0$ = writeIdx, writeIdx = t0$ + 1, t0$), this[_vertices$][$_get](readIdx + 1));
            readIdx = readIdx + dart.notNull(readStride);
          }
        }
      } else {
        this[_animationDeformedVertices] = null;
      }
    }
    get animationDeformedVertices() {
      return this[_animationDeformedVertices];
    }
    disposeGeometry() {
      if (this[_animationDeformedVertices] == null) {
        this[_vertices$] = null;
      }
      this[_triangles] = null;
    }
    static read(artboard, reader, node) {
      node == null ? node = new actor_image.ActorImage.new() : null;
      actor_drawable.ActorDrawable.read(artboard, reader, node);
      actor_skinnable.ActorSkinnable.read(artboard, reader, node);
      if (!dart.test(node.isHidden)) {
        node[_textureIndex] = reader.readUint8("atlas");
        let numVertices = reader.readUint32("numVertices");
        node[_vertexCount] = numVertices;
        node[_vertices$] = reader.readFloat32Array(dart.notNull(numVertices) * dart.notNull(node.vertexStride), "vertices");
        if (dart.notNull(artboard.actor.version) >= 24) {
          let isDynamic = reader.readBool("isDynamic");
          if (dart.test(isDynamic)) {
            node[_dynamicUV] = reader.readFloat32Array(dart.notNull(numVertices) * 2, "uv");
          }
        }
        let numTris = reader.readUint32("numTriangles");
        node[_triangles] = _native_typed_data.NativeUint16List.new(dart.notNull(numTris) * 3);
        node[_triangleCount] = numTris;
        node[_triangles] = reader.readUint16Array(dart.notNull(numTris) * 3, "triangles");
      }
      return node;
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      this.resolveSkinnable(components);
    }
    makeInstance(resetArtboard) {
      let instanceNode = resetArtboard.actor.makeImageNode();
      instanceNode.copyImage(this, resetArtboard);
      return instanceNode;
    }
    copyImage(node, resetArtboard) {
      this.copyDrawable(node, resetArtboard);
      this.copySkinnable(node, resetArtboard);
      this[_textureIndex] = node[_textureIndex];
      this[_vertexCount] = node[_vertexCount];
      this[_triangleCount] = node[_triangleCount];
      this[_vertices$] = node[_vertices$];
      this[_triangles] = node[_triangles];
      this[_dynamicUV] = node[_dynamicUV];
      if (node[_animationDeformedVertices] != null) {
        this[_animationDeformedVertices] = _native_typed_data.NativeFloat32List.fromList(node[_animationDeformedVertices]);
      }
    }
    makeVertexPositionBuffer() {
      return _native_typed_data.NativeFloat32List.new(dart.notNull(this[_vertexCount]) * 2);
    }
    makeVertexUVBuffer() {
      return _native_typed_data.NativeFloat32List.new(dart.notNull(this[_vertexCount]) * 2);
    }
    transformDeformVertices(wt) {
      if (this[_animationDeformedVertices] == null) {
        return;
      }
      let fv = this[_animationDeformedVertices];
      let vidx = 0;
      for (let j = 0; j < dart.notNull(this[_vertexCount]); j = j + 1) {
        let x = fv[$_get](vidx);
        let y = fv[$_get](vidx + 1);
        fv[$_set](vidx, dart.notNull(wt._get(0)) * dart.notNull(x) + dart.notNull(wt._get(2)) * dart.notNull(y) + dart.notNull(wt._get(4)));
        fv[$_set](vidx + 1, dart.notNull(wt._get(1)) * dart.notNull(x) + dart.notNull(wt._get(3)) * dart.notNull(y) + dart.notNull(wt._get(5)));
        vidx = vidx + 2;
      }
    }
    updateVertexUVBuffer(buffer) {
      let t0, t0$;
      let readIdx = this.vertexUVOffset;
      let writeIdx = 0;
      let stride = this.vertexStride;
      let v = this[_vertices$];
      for (let i = 0; i < dart.notNull(this[_vertexCount]); i = i + 1) {
        buffer[$_set]((t0 = writeIdx, writeIdx = t0 + 1, t0), v[$_get](readIdx));
        buffer[$_set]((t0$ = writeIdx, writeIdx = t0$ + 1, t0$), v[$_get](dart.notNull(readIdx) + 1));
        readIdx = dart.notNull(readIdx) + dart.notNull(stride);
      }
    }
    updateVertexPositionBuffer(buffer, isSkinnedDeformInWorld) {
      let t2, t1, t0, t2$, t1$, t0$, t2$0, t1$0, t0$0, t2$1, t1$1, t0$1, t2$2, t1$2, t0$2, t1$3, t0$3, t0$4, t0$5, t0$6, t0$7;
      let worldTransform = this.worldTransform;
      let readIdx = 0;
      let writeIdx = 0;
      let v = this[_animationDeformedVertices] != null ? this[_animationDeformedVertices] : this[_vertices$];
      let stride = this[_animationDeformedVertices] != null ? 2 : this.vertexStride;
      if (this.skin != null) {
        let boneTransforms = this.skin.boneMatrices;
        let influenceMatrix = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([0.0, 0.0, 0.0, 0.0, 0.0, 0.0]));
        let boneIndexOffset = this.vertexBoneIndexOffset;
        let weightOffset = this.vertexBoneWeightOffset;
        for (let i = 0; i < dart.notNull(this[_vertexCount]); i = i + 1) {
          let x = v[$_get](readIdx);
          let y = v[$_get](readIdx + 1);
          let px = null;
          let py = null;
          if (this[_animationDeformedVertices] != null && dart.test(isSkinnedDeformInWorld)) {
            px = x;
            py = y;
          } else {
            px = dart.notNull(worldTransform._get(0)) * dart.notNull(x) + dart.notNull(worldTransform._get(2)) * dart.notNull(y) + dart.notNull(worldTransform._get(4));
            py = dart.notNull(worldTransform._get(1)) * dart.notNull(x) + dart.notNull(worldTransform._get(3)) * dart.notNull(y) + dart.notNull(worldTransform._get(5));
          }
          influenceMatrix[$_set](0, (t0$2 = influenceMatrix, t1$2 = 1, t2$2 = (t0$1 = influenceMatrix, t1$1 = 2, t2$1 = (t0$0 = influenceMatrix, t1$0 = 3, t2$0 = (t0$ = influenceMatrix, t1$ = 4, t2$ = (t0 = influenceMatrix, t1 = 5, t2 = 0.0, t0[$_set](t1, t2), t2), t0$[$_set](t1$, t2$), t2$), t0$0[$_set](t1$0, t2$0), t2$0), t0$1[$_set](t1$1, t2$1), t2$1), t0$2[$_set](t1$2, t2$2), t2$2));
          for (let wi = 0; wi < 4; wi = wi + 1) {
            let boneIndex = this[_vertices$][$_get](dart.notNull(boneIndexOffset) + wi)[$toInt]();
            let weight = this[_vertices$][$_get](dart.notNull(weightOffset) + wi);
            let boneTransformIndex = boneIndex * 6;
            if (boneIndex <= dart.notNull(this.connectedBones[$length])) {
              for (let j = 0; j < 6; j = j + 1) {
                t0$3 = influenceMatrix;
                t1$3 = j;
                t0$3[$_set](t1$3, dart.notNull(t0$3[$_get](t1$3)) + dart.notNull(boneTransforms[$_get](boneTransformIndex + j)) * dart.notNull(weight));
              }
            }
          }
          x = dart.notNull(influenceMatrix[$_get](0)) * dart.notNull(px) + dart.notNull(influenceMatrix[$_get](2)) * dart.notNull(py) + dart.notNull(influenceMatrix[$_get](4));
          y = dart.notNull(influenceMatrix[$_get](1)) * dart.notNull(px) + dart.notNull(influenceMatrix[$_get](3)) * dart.notNull(py) + dart.notNull(influenceMatrix[$_get](5));
          readIdx = readIdx + dart.notNull(stride);
          boneIndexOffset = dart.notNull(boneIndexOffset) + dart.notNull(this.vertexStride);
          weightOffset = dart.notNull(weightOffset) + dart.notNull(this.vertexStride);
          buffer[$_set]((t0$4 = writeIdx, writeIdx = t0$4 + 1, t0$4), x);
          buffer[$_set]((t0$5 = writeIdx, writeIdx = t0$5 + 1, t0$5), y);
        }
      } else {
        for (let i = 0; i < dart.notNull(this[_vertexCount]); i = i + 1) {
          buffer[$_set]((t0$6 = writeIdx, writeIdx = t0$6 + 1, t0$6), v[$_get](readIdx));
          buffer[$_set]((t0$7 = writeIdx, writeIdx = t0$7 + 1, t0$7), v[$_get](readIdx + 1));
          readIdx = readIdx + dart.notNull(stride);
        }
      }
    }
    computeAABB() {
      let worldTransform = this.worldTransform;
      return new aabb$.AABB.fromValues(worldTransform._get(4), worldTransform._get(5), worldTransform._get(4), worldTransform._get(5));
    }
    get imageTransform() {
      return dart.test(this.isConnectedToBones) ? null : this.worldTransform;
    }
    initializeGraphics() {
    }
    invalidateDrawable() {
    }
    get blendModeId() {
      return 0;
    }
    set blendModeId(value) {
    }
  };
  (actor_image.ActorImage.new = function() {
    this[drawOrder] = null;
    this[_textureIndex] = -1;
    this[_vertices$] = null;
    this[_dynamicUV] = null;
    this[_triangles] = null;
    this[_vertexCount] = 0;
    this[_triangleCount] = 0;
    this[_animationDeformedVertices] = null;
    this[_sequenceFrames] = null;
    this[_sequenceUVs] = null;
    this[_sequenceFrame] = 0;
    actor_image.ActorImage.__proto__.new.call(this);
    ;
  }).prototype = actor_image.ActorImage.prototype;
  dart.addTypeTests(actor_image.ActorImage);
  dart.setMethodSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getMethods(actor_image.ActorImage.__proto__),
    disposeGeometry: dart.fnType(dart.void, []),
    copyImage: dart.fnType(dart.void, [actor_image.ActorImage, actor_artboard.ActorArtboard]),
    makeVertexPositionBuffer: dart.fnType(typed_data.Float32List, []),
    makeVertexUVBuffer: dart.fnType(typed_data.Float32List, []),
    transformDeformVertices: dart.fnType(dart.void, [mat2d.Mat2D]),
    updateVertexUVBuffer: dart.fnType(dart.void, [typed_data.Float32List]),
    updateVertexPositionBuffer: dart.fnType(dart.void, [typed_data.Float32List, core.bool]),
    computeAABB: dart.fnType(aabb$.AABB, []),
    invalidateDrawable: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getGetters(actor_image.ActorImage.__proto__),
    dynamicUV: typed_data.Float32List,
    sequenceFrame: core.int,
    sequenceUVs: typed_data.Float32List,
    sequenceFrames: core.List$(actor_image.SequenceFrame),
    textureIndex: core.int,
    vertexCount: core.int,
    triangleCount: core.int,
    triangles: typed_data.Uint16List,
    vertices: typed_data.Float32List,
    vertexPositionOffset: core.int,
    vertexUVOffset: core.int,
    vertexBoneIndexOffset: core.int,
    vertexBoneWeightOffset: core.int,
    vertexStride: core.int,
    doesAnimationVertexDeform: core.bool,
    animationDeformedVertices: typed_data.Float32List,
    imageTransform: mat2d.Mat2D,
    blendModeId: core.int
  }));
  dart.setSetterSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getSetters(actor_image.ActorImage.__proto__),
    sequenceFrame: core.int,
    doesAnimationVertexDeform: core.bool,
    blendModeId: core.int
  }));
  dart.setLibraryUri(actor_image.ActorImage, "package:flare_dart/actor_image.dart");
  dart.setFieldSignature(actor_image.ActorImage, () => ({
    __proto__: dart.getFields(actor_image.ActorImage.__proto__),
    drawOrder: dart.fieldType(core.int),
    [_textureIndex]: dart.fieldType(core.int),
    [_vertices$]: dart.fieldType(typed_data.Float32List),
    [_dynamicUV]: dart.fieldType(typed_data.Float32List),
    [_triangles]: dart.fieldType(typed_data.Uint16List),
    [_vertexCount]: dart.fieldType(core.int),
    [_triangleCount]: dart.fieldType(core.int),
    [_animationDeformedVertices]: dart.fieldType(typed_data.Float32List),
    [_sequenceFrames]: dart.fieldType(core.List$(actor_image.SequenceFrame)),
    [_sequenceUVs]: dart.fieldType(typed_data.Float32List),
    [_sequenceFrame]: dart.fieldType(core.int)
  }));
  actor_event.ActorEvent = class ActorEvent extends actor_component.ActorComponent {
    static read(artboard, reader, component) {
      component == null ? component = new actor_event.ActorEvent.new() : null;
      actor_component.ActorComponent.read(artboard, reader, component);
      return component;
    }
    makeInstance(resetArtboard) {
      let instanceEvent = new actor_event.ActorEvent.new();
      instanceEvent.copyComponent(this, resetArtboard);
      return instanceEvent;
    }
    completeResolve() {
    }
    onDirty(dirt) {
    }
    update(dirt) {
    }
  };
  (actor_event.ActorEvent.new = function() {
    actor_event.ActorEvent.__proto__.new.call(this);
    ;
  }).prototype = actor_event.ActorEvent.prototype;
  dart.addTypeTests(actor_event.ActorEvent);
  dart.setMethodSignature(actor_event.ActorEvent, () => ({
    __proto__: dart.getMethods(actor_event.ActorEvent.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    completeResolve: dart.fnType(dart.void, []),
    onDirty: dart.fnType(dart.void, [core.int]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setLibraryUri(actor_event.ActorEvent, "package:flare_dart/actor_event.dart");
  actor_triangle.ActorTriangle = class ActorTriangle extends actor_path.ActorProceduralPath {
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_triangle.ActorTriangle.new();
      instance.copyPath(this, resetArtboard);
      return instance;
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_triangle.ActorTriangle.new() : null;
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      return component;
    }
    get points() {
      let _trianglePoints = JSArrayOfPathPoint().of([]);
      _trianglePoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(0.0, -dart.notNull(this.radiusY))));
      _trianglePoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(this.radiusX, this.radiusY)));
      _trianglePoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(-dart.notNull(this.radiusX), this.radiusY)));
      return _trianglePoints;
    }
    get isClosed() {
      return true;
    }
    get doesDraw() {
      return !dart.test(this.renderCollapsed);
    }
    get radiusX() {
      return dart.notNull(this.width) / 2;
    }
    get radiusY() {
      return dart.notNull(this.height) / 2;
    }
  };
  (actor_triangle.ActorTriangle.new = function() {
    actor_triangle.ActorTriangle.__proto__.new.call(this);
    ;
  }).prototype = actor_triangle.ActorTriangle.prototype;
  dart.addTypeTests(actor_triangle.ActorTriangle);
  dart.setMethodSignature(actor_triangle.ActorTriangle, () => ({
    __proto__: dart.getMethods(actor_triangle.ActorTriangle.__proto__),
    invalidatePath: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_triangle.ActorTriangle, () => ({
    __proto__: dart.getGetters(actor_triangle.ActorTriangle.__proto__),
    points: core.List$(path_point.PathPoint),
    isClosed: core.bool,
    doesDraw: core.bool,
    radiusX: core.double,
    radiusY: core.double
  }));
  dart.setLibraryUri(actor_triangle.ActorTriangle, "package:flare_dart/actor_triangle.dart");
  const _copyX = dart.privateName(actor_axis_constraint, "_copyX");
  const _copyY = dart.privateName(actor_axis_constraint, "_copyY");
  const _enableMinX = dart.privateName(actor_axis_constraint, "_enableMinX");
  const _enableMaxX = dart.privateName(actor_axis_constraint, "_enableMaxX");
  const _enableMinY = dart.privateName(actor_axis_constraint, "_enableMinY");
  const _enableMaxY = dart.privateName(actor_axis_constraint, "_enableMaxY");
  const _offset = dart.privateName(actor_axis_constraint, "_offset");
  const _scaleX = dart.privateName(actor_axis_constraint, "_scaleX");
  const _scaleY = dart.privateName(actor_axis_constraint, "_scaleY");
  const _minX = dart.privateName(actor_axis_constraint, "_minX");
  const _maxX = dart.privateName(actor_axis_constraint, "_maxX");
  const _minY = dart.privateName(actor_axis_constraint, "_minY");
  const _maxY = dart.privateName(actor_axis_constraint, "_maxY");
  const _sourceSpace = dart.privateName(actor_axis_constraint, "_sourceSpace");
  const _destSpace = dart.privateName(actor_axis_constraint, "_destSpace");
  const _minMaxSpace = dart.privateName(actor_axis_constraint, "_minMaxSpace");
  const _targetIdx = dart.privateName(actor_targeted_constraint, "_targetIdx");
  const _target = dart.privateName(actor_targeted_constraint, "_target");
  actor_targeted_constraint.ActorTargetedConstraint = class ActorTargetedConstraint extends actor_constraint.ActorConstraint {
    get target() {
      return this[_target];
    }
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_targetIdx] !== 0) {
        this[_target] = components[$_get](this[_targetIdx]);
        if (this[_target] != null) {
          this.artboard.addDependency(this.parent, this[_target]);
        }
      }
    }
    static read(artboard, reader, component) {
      actor_constraint.ActorConstraint.read(artboard, reader, component);
      component[_targetIdx] = reader.readId("target");
      return component;
    }
    copyTargetedConstraint(node, resetArtboard) {
      this.copyConstraint(node, resetArtboard);
      this[_targetIdx] = node[_targetIdx];
    }
  };
  (actor_targeted_constraint.ActorTargetedConstraint.new = function() {
    this[_targetIdx] = null;
    this[_target] = null;
    actor_targeted_constraint.ActorTargetedConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_targeted_constraint.ActorTargetedConstraint.prototype;
  dart.addTypeTests(actor_targeted_constraint.ActorTargetedConstraint);
  dart.setMethodSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ({
    __proto__: dart.getMethods(actor_targeted_constraint.ActorTargetedConstraint.__proto__),
    copyTargetedConstraint: dart.fnType(dart.void, [actor_targeted_constraint.ActorTargetedConstraint, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ({
    __proto__: dart.getGetters(actor_targeted_constraint.ActorTargetedConstraint.__proto__),
    target: actor_component.ActorComponent
  }));
  dart.setLibraryUri(actor_targeted_constraint.ActorTargetedConstraint, "package:flare_dart/actor_targeted_constraint.dart");
  dart.setFieldSignature(actor_targeted_constraint.ActorTargetedConstraint, () => ({
    __proto__: dart.getFields(actor_targeted_constraint.ActorTargetedConstraint.__proto__),
    [_targetIdx]: dart.fieldType(core.int),
    [_target]: dart.fieldType(actor_component.ActorComponent)
  }));
  actor_axis_constraint.ActorAxisConstraint = class ActorAxisConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    static read(artboard, reader, component) {
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_copyX] = reader.readBool("copyX");
      if (dart.test(component[_copyX])) {
        component[_scaleX] = reader.readFloat32("scaleX");
      }
      component[_enableMinX] = reader.readBool("enableMinX");
      if (dart.test(component[_enableMinX])) {
        component[_minX] = reader.readFloat32("minX");
      }
      component[_enableMaxX] = reader.readBool("enableMaxX");
      if (dart.test(component[_enableMaxX])) {
        component[_maxX] = reader.readFloat32("maxX");
      }
      component[_copyY] = reader.readBool("copyY");
      if (dart.test(component[_copyY])) {
        component[_scaleY] = reader.readFloat32("scaleY");
      }
      component[_enableMinY] = reader.readBool("enableMinY");
      if (dart.test(component[_enableMinY])) {
        component[_minY] = reader.readFloat32("minY");
      }
      component[_enableMaxY] = reader.readBool("enableMaxY");
      if (dart.test(component[_enableMaxY])) {
        component[_maxY] = reader.readFloat32("maxY");
      }
      component[_offset] = reader.readBool("offset");
      component[_sourceSpace] = reader.readUint8("sourceSpaceId");
      component[_destSpace] = reader.readUint8("destSpaceId");
      component[_minMaxSpace] = reader.readUint8("minMaxSpaceId");
      return component;
    }
    copyAxisConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_copyX] = node[_copyX];
      this[_copyY] = node[_copyY];
      this[_enableMinX] = node[_enableMinX];
      this[_enableMaxX] = node[_enableMaxX];
      this[_enableMinY] = node[_enableMinY];
      this[_enableMaxY] = node[_enableMaxY];
      this[_offset] = node[_offset];
      this[_scaleX] = node[_scaleX];
      this[_scaleY] = node[_scaleY];
      this[_minX] = node[_minX];
      this[_maxX] = node[_maxX];
      this[_minY] = node[_minY];
      this[_maxY] = node[_maxY];
      this[_sourceSpace] = node[_sourceSpace];
      this[_destSpace] = node[_destSpace];
      this[_minMaxSpace] = node[_minMaxSpace];
    }
    onDirty(dirt) {
      this.markDirty();
    }
    get copyX() {
      return this[_copyX];
    }
    get copyY() {
      return this[_copyY];
    }
    get destSpace() {
      return this[_destSpace];
    }
    get enableMaxX() {
      return this[_enableMaxX];
    }
    get enableMaxY() {
      return this[_enableMaxY];
    }
    get enableMinX() {
      return this[_enableMinX];
    }
    get enableMinY() {
      return this[_enableMinY];
    }
    get maxX() {
      return this[_maxX];
    }
    get maxY() {
      return this[_maxY];
    }
    get minMaxSpace() {
      return this[_minMaxSpace];
    }
    get minX() {
      return this[_minX];
    }
    get minY() {
      return this[_minY];
    }
    get offset() {
      return this[_offset];
    }
    get scaleX() {
      return this[_scaleX];
    }
    get scaleY() {
      return this[_scaleY];
    }
    get sourceSpace() {
      return this[_sourceSpace];
    }
  };
  (actor_axis_constraint.ActorAxisConstraint.new = function() {
    this[_copyX] = false;
    this[_copyY] = false;
    this[_enableMinX] = false;
    this[_enableMaxX] = false;
    this[_enableMinY] = false;
    this[_enableMaxY] = false;
    this[_offset] = false;
    this[_scaleX] = 1.0;
    this[_scaleY] = 1.0;
    this[_minX] = 0.0;
    this[_maxX] = 0.0;
    this[_minY] = 0.0;
    this[_maxY] = 0.0;
    this[_sourceSpace] = 1;
    this[_destSpace] = 1;
    this[_minMaxSpace] = 1;
    actor_axis_constraint.ActorAxisConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_axis_constraint.ActorAxisConstraint.prototype;
  dart.addTypeTests(actor_axis_constraint.ActorAxisConstraint);
  dart.setMethodSignature(actor_axis_constraint.ActorAxisConstraint, () => ({
    __proto__: dart.getMethods(actor_axis_constraint.ActorAxisConstraint.__proto__),
    copyAxisConstraint: dart.fnType(dart.void, [actor_axis_constraint.ActorAxisConstraint, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_axis_constraint.ActorAxisConstraint, () => ({
    __proto__: dart.getGetters(actor_axis_constraint.ActorAxisConstraint.__proto__),
    copyX: core.bool,
    copyY: core.bool,
    destSpace: core.int,
    enableMaxX: core.bool,
    enableMaxY: core.bool,
    enableMinX: core.bool,
    enableMinY: core.bool,
    maxX: core.double,
    maxY: core.double,
    minMaxSpace: core.int,
    minX: core.double,
    minY: core.double,
    offset: core.bool,
    scaleX: core.double,
    scaleY: core.double,
    sourceSpace: core.int
  }));
  dart.setLibraryUri(actor_axis_constraint.ActorAxisConstraint, "package:flare_dart/actor_axis_constraint.dart");
  dart.setFieldSignature(actor_axis_constraint.ActorAxisConstraint, () => ({
    __proto__: dart.getFields(actor_axis_constraint.ActorAxisConstraint.__proto__),
    [_copyX]: dart.fieldType(core.bool),
    [_copyY]: dart.fieldType(core.bool),
    [_enableMinX]: dart.fieldType(core.bool),
    [_enableMaxX]: dart.fieldType(core.bool),
    [_enableMinY]: dart.fieldType(core.bool),
    [_enableMaxY]: dart.fieldType(core.bool),
    [_offset]: dart.fieldType(core.bool),
    [_scaleX]: dart.fieldType(core.double),
    [_scaleY]: dart.fieldType(core.double),
    [_minX]: dart.fieldType(core.double),
    [_maxX]: dart.fieldType(core.double),
    [_minY]: dart.fieldType(core.double),
    [_maxY]: dart.fieldType(core.double),
    [_sourceSpace]: dart.fieldType(core.int),
    [_destSpace]: dart.fieldType(core.int),
    [_minMaxSpace]: dart.fieldType(core.int)
  }));
  actor_translation_constraint.ActorTranslationConstraint = class ActorTranslationConstraint extends actor_axis_constraint.ActorAxisConstraint {
    static read(artboard, reader, component) {
      component == null ? component = new actor_translation_constraint.ActorTranslationConstraint.new() : null;
      actor_axis_constraint.ActorAxisConstraint.read(artboard, reader, component);
      return component;
    }
    makeInstance(resetArtboard) {
      let node = new actor_translation_constraint.ActorTranslationConstraint.new();
      node.copyAxisConstraint(this, resetArtboard);
      return node;
    }
    constrain(node) {
      let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
      let t = actor_node.ActorNode.as(this.target);
      let p = this.parent;
      let grandParent = p.parent;
      let transformA = this.parent.worldTransform;
      let translationA = new vec2d.Vec2D.fromValues(transformA._get(4), transformA._get(5));
      let translationB = new vec2d.Vec2D.new();
      if (t == null) {
        vec2d.Vec2D.copy(translationB, translationA);
      } else {
        let transformB = new mat2d.Mat2D.clone(t.worldTransform);
        if (this.sourceSpace === 0) {
          let sourceGrandParent = t.parent;
          if (sourceGrandParent != null) {
            let inverse = new mat2d.Mat2D.new();
            mat2d.Mat2D.invert(inverse, sourceGrandParent.worldTransform);
            mat2d.Mat2D.multiply(transformB, inverse, transformB);
          }
        }
        translationB._set(0, transformB._get(4));
        translationB._set(1, transformB._get(5));
        if (!dart.test(this.copyX)) {
          translationB._set(0, this.destSpace === 0 ? 0.0 : translationA._get(0));
        } else {
          t0 = translationB;
          t1 = 0;
          t0._set(t1, dart.notNull(t0._get(t1)) * dart.notNull(this.scaleX));
          if (dart.test(this.offset)) {
            t0$ = translationB;
            t1$ = 0;
            t0$._set(t1$, dart.notNull(t0$._get(t1$)) + dart.notNull(this.parent.translation._get(0)));
          }
        }
        if (!dart.test(this.copyY)) {
          translationB._set(1, this.destSpace === 0 ? 0.0 : translationA._get(1));
        } else {
          t0$0 = translationB;
          t1$0 = 1;
          t0$0._set(t1$0, dart.notNull(t0$0._get(t1$0)) * dart.notNull(this.scaleY));
          if (dart.test(this.offset)) {
            t0$1 = translationB;
            t1$1 = 1;
            t0$1._set(t1$1, dart.notNull(t0$1._get(t1$1)) + dart.notNull(this.parent.translation._get(1)));
          }
        }
        if (this.destSpace === 0) {
          if (grandParent != null) {
            vec2d.Vec2D.transformMat2D(translationB, translationB, grandParent.worldTransform);
          }
        }
      }
      let clampLocal = this.minMaxSpace === 0 && grandParent != null;
      if (clampLocal) {
        let temp = new mat2d.Mat2D.new();
        mat2d.Mat2D.invert(temp, grandParent.worldTransform);
        vec2d.Vec2D.transformMat2D(translationB, translationB, temp);
      }
      if (dart.test(this.enableMaxX) && dart.notNull(translationB._get(0)) > dart.notNull(this.maxX)) {
        translationB._set(0, this.maxX);
      }
      if (dart.test(this.enableMinX) && dart.notNull(translationB._get(0)) < dart.notNull(this.minX)) {
        translationB._set(0, this.minX);
      }
      if (dart.test(this.enableMaxY) && dart.notNull(translationB._get(1)) > dart.notNull(this.maxY)) {
        translationB._set(1, this.maxY);
      }
      if (dart.test(this.enableMinY) && dart.notNull(translationB._get(1)) < dart.notNull(this.minY)) {
        translationB._set(1, this.minY);
      }
      if (clampLocal) {
        vec2d.Vec2D.transformMat2D(translationB, translationB, grandParent.worldTransform);
      }
      let ti = 1.0 - dart.notNull(this.strength);
      transformA._set(4, dart.notNull(translationA._get(0)) * ti + dart.notNull(translationB._get(0)) * dart.notNull(this.strength));
      transformA._set(5, dart.notNull(translationA._get(1)) * ti + dart.notNull(translationB._get(1)) * dart.notNull(this.strength));
    }
    update(dirt) {
    }
    completeResolve() {
    }
  };
  (actor_translation_constraint.ActorTranslationConstraint.new = function() {
    actor_translation_constraint.ActorTranslationConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_translation_constraint.ActorTranslationConstraint.prototype;
  dart.addTypeTests(actor_translation_constraint.ActorTranslationConstraint);
  dart.setMethodSignature(actor_translation_constraint.ActorTranslationConstraint, () => ({
    __proto__: dart.getMethods(actor_translation_constraint.ActorTranslationConstraint.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    update: dart.fnType(dart.void, [core.int]),
    completeResolve: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(actor_translation_constraint.ActorTranslationConstraint, "package:flare_dart/actor_translation_constraint.dart");
  const _sourceSpace$ = dart.privateName(actor_transform_constraint, "_sourceSpace");
  const _destSpace$ = dart.privateName(actor_transform_constraint, "_destSpace");
  const _componentsA = dart.privateName(actor_transform_constraint, "_componentsA");
  const _componentsB = dart.privateName(actor_transform_constraint, "_componentsB");
  actor_transform_constraint.ActorTransformConstraint = class ActorTransformConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    static read(artboard, reader, component) {
      component == null ? component = new actor_transform_constraint.ActorTransformConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_sourceSpace$] = reader.readUint8("sourceSpaceId");
      component[_destSpace$] = reader.readUint8("destSpaceId");
      return component;
    }
    makeInstance(resetArtboard) {
      let node = new actor_transform_constraint.ActorTransformConstraint.new();
      node.copyTransformConstraint(this, resetArtboard);
      return node;
    }
    copyTransformConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_sourceSpace$] = node[_sourceSpace$];
      this[_destSpace$] = node[_destSpace$];
    }
    constrain(node) {
      let t = actor_node.ActorNode.as(this.target);
      if (t == null) {
        return;
      }
      let parent = this.parent;
      let transformA = parent.worldTransform;
      let transformB = new mat2d.Mat2D.clone(t.worldTransform);
      if (this[_sourceSpace$] === 0) {
        let grandParent = this.target.parent;
        if (grandParent != null) {
          let inverse = new mat2d.Mat2D.new();
          mat2d.Mat2D.invert(inverse, grandParent.worldTransform);
          mat2d.Mat2D.multiply(transformB, inverse, transformB);
        }
      }
      if (this[_destSpace$] === 0) {
        let grandParent = parent.parent;
        if (grandParent != null) {
          mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
        }
      }
      mat2d.Mat2D.decompose(transformA, this[_componentsA]);
      mat2d.Mat2D.decompose(transformB, this[_componentsB]);
      let angleA = this[_componentsA]._get(4)[$modulo](6.283185307179586);
      let angleB = this[_componentsB]._get(4)[$modulo](6.283185307179586);
      let diff = angleB - angleA;
      if (diff > 3.141592653589793) {
        diff = diff - 6.283185307179586;
      } else if (diff < -3.141592653589793) {
        diff = diff + 6.283185307179586;
      }
      let ti = 1.0 - dart.notNull(this.strength);
      this[_componentsB]._set(4, angleA + diff * dart.notNull(this.strength));
      this[_componentsB]._set(0, dart.notNull(this[_componentsA]._get(0)) * ti + dart.notNull(this[_componentsB]._get(0)) * dart.notNull(this.strength));
      this[_componentsB]._set(1, dart.notNull(this[_componentsA]._get(1)) * ti + dart.notNull(this[_componentsB]._get(1)) * dart.notNull(this.strength));
      this[_componentsB]._set(2, dart.notNull(this[_componentsA]._get(2)) * ti + dart.notNull(this[_componentsB]._get(2)) * dart.notNull(this.strength));
      this[_componentsB]._set(3, dart.notNull(this[_componentsA]._get(3)) * ti + dart.notNull(this[_componentsB]._get(3)) * dart.notNull(this.strength));
      this[_componentsB]._set(5, dart.notNull(this[_componentsA]._get(5)) * ti + dart.notNull(this[_componentsB]._get(5)) * dart.notNull(this.strength));
      mat2d.Mat2D.compose(parent.worldTransform, this[_componentsB]);
    }
    update(dirt) {
    }
    completeResolve() {
    }
  };
  (actor_transform_constraint.ActorTransformConstraint.new = function() {
    this[_sourceSpace$] = 1;
    this[_destSpace$] = 1;
    this[_componentsA] = new transform_components.TransformComponents.new();
    this[_componentsB] = new transform_components.TransformComponents.new();
    actor_transform_constraint.ActorTransformConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_transform_constraint.ActorTransformConstraint.prototype;
  dart.addTypeTests(actor_transform_constraint.ActorTransformConstraint);
  dart.setMethodSignature(actor_transform_constraint.ActorTransformConstraint, () => ({
    __proto__: dart.getMethods(actor_transform_constraint.ActorTransformConstraint.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    copyTransformConstraint: dart.fnType(dart.void, [actor_transform_constraint.ActorTransformConstraint, actor_artboard.ActorArtboard]),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    update: dart.fnType(dart.void, [core.int]),
    completeResolve: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(actor_transform_constraint.ActorTransformConstraint, "package:flare_dart/actor_transform_constraint.dart");
  dart.setFieldSignature(actor_transform_constraint.ActorTransformConstraint, () => ({
    __proto__: dart.getFields(actor_transform_constraint.ActorTransformConstraint.__proto__),
    [_sourceSpace$]: dart.fieldType(core.int),
    [_destSpace$]: dart.fieldType(core.int),
    [_componentsA]: dart.finalFieldType(transform_components.TransformComponents),
    [_componentsB]: dart.finalFieldType(transform_components.TransformComponents)
  }));
  dart.defineLazy(actor_transform_constraint, {
    /*actor_transform_constraint.pi2*/get pi2() {
      return 6.283185307179586;
    }
  });
  const _componentsA$ = dart.privateName(actor_scale_constraint, "_componentsA");
  const _componentsB$ = dart.privateName(actor_scale_constraint, "_componentsB");
  actor_scale_constraint.ActorScaleConstraint = class ActorScaleConstraint extends actor_axis_constraint.ActorAxisConstraint {
    static read(artboard, reader, component) {
      component == null ? component = new actor_scale_constraint.ActorScaleConstraint.new() : null;
      actor_axis_constraint.ActorAxisConstraint.read(artboard, reader, component);
      return component;
    }
    makeInstance(resetArtboard) {
      let node = new actor_scale_constraint.ActorScaleConstraint.new();
      node.copyAxisConstraint(this, resetArtboard);
      return node;
    }
    constrain(node) {
      let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
      let t = actor_node.ActorNode.as(this.target);
      let p = this.parent;
      let grandParent = p.parent;
      let transformA = this.parent.worldTransform;
      let transformB = new mat2d.Mat2D.new();
      mat2d.Mat2D.decompose(transformA, this[_componentsA$]);
      if (t == null) {
        mat2d.Mat2D.copy(transformB, transformA);
        this[_componentsB$]._set(0, this[_componentsA$]._get(0));
        this[_componentsB$]._set(1, this[_componentsA$]._get(1));
        this[_componentsB$]._set(2, this[_componentsA$]._get(2));
        this[_componentsB$]._set(3, this[_componentsA$]._get(3));
        this[_componentsB$]._set(4, this[_componentsA$]._get(4));
        this[_componentsB$]._set(5, this[_componentsA$]._get(5));
      } else {
        mat2d.Mat2D.copy(transformB, t.worldTransform);
        if (this.sourceSpace === 0) {
          let sourceGrandParent = t.parent;
          if (sourceGrandParent != null) {
            let inverse = new mat2d.Mat2D.new();
            mat2d.Mat2D.invert(inverse, sourceGrandParent.worldTransform);
            mat2d.Mat2D.multiply(transformB, inverse, transformB);
          }
        }
        mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
        if (!dart.test(this.copyX)) {
          this[_componentsB$]._set(2, this.destSpace === 0 ? 1.0 : this[_componentsA$]._get(2));
        } else {
          t0 = this[_componentsB$];
          t1 = 2;
          t0._set(t1, dart.notNull(t0._get(t1)) * dart.notNull(this.scaleX));
          if (dart.test(this.offset)) {
            t0$ = this[_componentsB$];
            t1$ = 2;
            t0$._set(t1$, dart.notNull(t0$._get(t1$)) * dart.notNull(this.parent.scaleX));
          }
        }
        if (!dart.test(this.copyY)) {
          this[_componentsB$]._set(3, this.destSpace === 0 ? 0.0 : this[_componentsA$]._get(3));
        } else {
          t0$0 = this[_componentsB$];
          t1$0 = 3;
          t0$0._set(t1$0, dart.notNull(t0$0._get(t1$0)) * dart.notNull(this.scaleY));
          if (dart.test(this.offset)) {
            t0$1 = this[_componentsB$];
            t1$1 = 3;
            t0$1._set(t1$1, dart.notNull(t0$1._get(t1$1)) * dart.notNull(this.parent.scaleY));
          }
        }
        if (this.destSpace === 0) {
          if (grandParent != null) {
            mat2d.Mat2D.compose(transformB, this[_componentsB$]);
            mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
            mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
          }
        }
      }
      let clampLocal = this.minMaxSpace === 0 && grandParent != null;
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$]);
        let inverse = new mat2d.Mat2D.new();
        mat2d.Mat2D.invert(inverse, grandParent.worldTransform);
        mat2d.Mat2D.multiply(transformB, inverse, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
      }
      if (dart.test(this.enableMaxX) && dart.notNull(this[_componentsB$]._get(2)) > dart.notNull(this.maxX)) {
        this[_componentsB$]._set(2, this.maxX);
      }
      if (dart.test(this.enableMinX) && dart.notNull(this[_componentsB$]._get(2)) < dart.notNull(this.minX)) {
        this[_componentsB$]._set(2, this.minX);
      }
      if (dart.test(this.enableMaxY) && dart.notNull(this[_componentsB$]._get(3)) > dart.notNull(this.maxY)) {
        this[_componentsB$]._set(3, this.maxY);
      }
      if (dart.test(this.enableMinY) && dart.notNull(this[_componentsB$]._get(3)) < dart.notNull(this.minY)) {
        this[_componentsB$]._set(3, this.minY);
      }
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$]);
        mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$]);
      }
      let ti = 1.0 - dart.notNull(this.strength);
      this[_componentsB$]._set(4, this[_componentsA$]._get(4));
      this[_componentsB$]._set(0, this[_componentsA$]._get(0));
      this[_componentsB$]._set(1, this[_componentsA$]._get(1));
      this[_componentsB$]._set(2, dart.notNull(this[_componentsA$]._get(2)) * ti + dart.notNull(this[_componentsB$]._get(2)) * dart.notNull(this.strength));
      this[_componentsB$]._set(3, dart.notNull(this[_componentsA$]._get(3)) * ti + dart.notNull(this[_componentsB$]._get(3)) * dart.notNull(this.strength));
      this[_componentsB$]._set(5, this[_componentsA$]._get(5));
      mat2d.Mat2D.compose(this.parent.worldTransform, this[_componentsB$]);
    }
    update(dirt) {
    }
    completeResolve() {
    }
  };
  (actor_scale_constraint.ActorScaleConstraint.new = function() {
    this[_componentsA$] = new transform_components.TransformComponents.new();
    this[_componentsB$] = new transform_components.TransformComponents.new();
    actor_scale_constraint.ActorScaleConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_scale_constraint.ActorScaleConstraint.prototype;
  dart.addTypeTests(actor_scale_constraint.ActorScaleConstraint);
  dart.setMethodSignature(actor_scale_constraint.ActorScaleConstraint, () => ({
    __proto__: dart.getMethods(actor_scale_constraint.ActorScaleConstraint.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    update: dart.fnType(dart.void, [core.int]),
    completeResolve: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(actor_scale_constraint.ActorScaleConstraint, "package:flare_dart/actor_scale_constraint.dart");
  dart.setFieldSignature(actor_scale_constraint.ActorScaleConstraint, () => ({
    __proto__: dart.getFields(actor_scale_constraint.ActorScaleConstraint.__proto__),
    [_componentsA$]: dart.finalFieldType(transform_components.TransformComponents),
    [_componentsB$]: dart.finalFieldType(transform_components.TransformComponents)
  }));
  const _copy = dart.privateName(actor_rotation_constraint, "_copy");
  const _scale$ = dart.privateName(actor_rotation_constraint, "_scale");
  const _enableMin = dart.privateName(actor_rotation_constraint, "_enableMin");
  const _enableMax = dart.privateName(actor_rotation_constraint, "_enableMax");
  const _max = dart.privateName(actor_rotation_constraint, "_max");
  const _min = dart.privateName(actor_rotation_constraint, "_min");
  const _offset$0 = dart.privateName(actor_rotation_constraint, "_offset");
  const _sourceSpace$0 = dart.privateName(actor_rotation_constraint, "_sourceSpace");
  const _destSpace$0 = dart.privateName(actor_rotation_constraint, "_destSpace");
  const _minMaxSpace$ = dart.privateName(actor_rotation_constraint, "_minMaxSpace");
  const _componentsA$0 = dart.privateName(actor_rotation_constraint, "_componentsA");
  const _componentsB$0 = dart.privateName(actor_rotation_constraint, "_componentsB");
  actor_rotation_constraint.ActorRotationConstraint = class ActorRotationConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    static read(artboard, reader, component) {
      component == null ? component = new actor_rotation_constraint.ActorRotationConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_copy] = reader.readBool("copy");
      if (dart.test(component[_copy])) {
        component[_scale$] = reader.readFloat32("scale");
      }
      component[_enableMin] = reader.readBool("enableMin");
      if (dart.test(component[_enableMin])) {
        component[_min] = reader.readFloat32("min");
      }
      component[_enableMax] = reader.readBool("enableMax");
      if (dart.test(component[_enableMax])) {
        component[_max] = reader.readFloat32("max");
      }
      component[_offset$0] = reader.readBool("offset");
      component[_sourceSpace$0] = reader.readUint8("sourceSpaceId");
      component[_destSpace$0] = reader.readUint8("destSpaceId");
      component[_minMaxSpace$] = reader.readUint8("minMaxSpaceId");
      return component;
    }
    constrain(node) {
      let t0, t0$;
      let target = actor_node.ActorNode.as(this.target);
      let grandParent = this.parent.parent;
      let transformA = this.parent.worldTransform;
      let transformB = new mat2d.Mat2D.new();
      mat2d.Mat2D.decompose(transformA, this[_componentsA$0]);
      if (target == null) {
        mat2d.Mat2D.copy(transformB, transformA);
        this[_componentsB$0]._set(0, this[_componentsA$0]._get(0));
        this[_componentsB$0]._set(1, this[_componentsA$0]._get(1));
        this[_componentsB$0]._set(2, this[_componentsA$0]._get(2));
        this[_componentsB$0]._set(3, this[_componentsA$0]._get(3));
        this[_componentsB$0]._set(4, this[_componentsA$0]._get(4));
        this[_componentsB$0]._set(5, this[_componentsA$0]._get(5));
      } else {
        mat2d.Mat2D.copy(transformB, target.worldTransform);
        if (this[_sourceSpace$0] === 0) {
          let sourceGrandParent = target.parent;
          if (sourceGrandParent != null) {
            let inverse = new mat2d.Mat2D.new();
            if (!dart.test(mat2d.Mat2D.invert(inverse, sourceGrandParent.worldTransform))) {
              return;
            }
            mat2d.Mat2D.multiply(transformB, inverse, transformB);
          }
        }
        mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
        if (!dart.test(this[_copy])) {
          this[_componentsB$0].rotation = this[_destSpace$0] === 0 ? 1.0 : this[_componentsA$0].rotation;
        } else {
          t0 = this[_componentsB$0];
          t0.rotation = dart.notNull(t0.rotation) * dart.notNull(this[_scale$]);
          if (dart.test(this[_offset$0])) {
            t0$ = this[_componentsB$0];
            t0$.rotation = dart.notNull(t0$.rotation) + dart.notNull(this.parent.rotation);
          }
        }
        if (this[_destSpace$0] === 0) {
          if (grandParent != null) {
            mat2d.Mat2D.compose(transformB, this[_componentsB$0]);
            mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
            mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
          }
        }
      }
      let clampLocal = this[_minMaxSpace$] === 0 && grandParent != null;
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$0]);
        let inverse = new mat2d.Mat2D.new();
        if (!dart.test(mat2d.Mat2D.invert(inverse, grandParent.worldTransform))) {
          return;
        }
        mat2d.Mat2D.multiply(transformB, inverse, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
      }
      if (dart.test(this[_enableMax]) && dart.notNull(this[_componentsB$0].rotation) > dart.notNull(this[_max])) {
        this[_componentsB$0].rotation = this[_max];
      }
      if (dart.test(this[_enableMin]) && dart.notNull(this[_componentsB$0].rotation) < dart.notNull(this[_min])) {
        this[_componentsB$0].rotation = this[_min];
      }
      if (clampLocal) {
        mat2d.Mat2D.compose(transformB, this[_componentsB$0]);
        mat2d.Mat2D.multiply(transformB, grandParent.worldTransform, transformB);
        mat2d.Mat2D.decompose(transformB, this[_componentsB$0]);
      }
      let angleA = this[_componentsA$0].rotation[$modulo](6.283185307179586);
      let angleB = this[_componentsB$0].rotation[$modulo](6.283185307179586);
      let diff = angleB - angleA;
      if (diff > 3.141592653589793) {
        diff = diff - 6.283185307179586;
      } else if (diff < -3.141592653589793) {
        diff = diff + 6.283185307179586;
      }
      this[_componentsB$0].rotation = dart.notNull(this[_componentsA$0].rotation) + diff * dart.notNull(this.strength);
      this[_componentsB$0].x = this[_componentsA$0].x;
      this[_componentsB$0].y = this[_componentsA$0].y;
      this[_componentsB$0].scaleX = this[_componentsA$0].scaleX;
      this[_componentsB$0].scaleY = this[_componentsA$0].scaleY;
      this[_componentsB$0].skew = this[_componentsA$0].skew;
      mat2d.Mat2D.compose(this.parent.worldTransform, this[_componentsB$0]);
    }
    makeInstance(resetArtboard) {
      let instance = new actor_rotation_constraint.ActorRotationConstraint.new();
      instance.copyRotationConstraint(this, resetArtboard);
      return instance;
    }
    copyRotationConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_copy] = node[_copy];
      this[_scale$] = node[_scale$];
      this[_enableMin] = node[_enableMin];
      this[_enableMax] = node[_enableMax];
      this[_min] = node[_min];
      this[_max] = node[_max];
      this[_offset$0] = node[_offset$0];
      this[_sourceSpace$0] = node[_sourceSpace$0];
      this[_destSpace$0] = node[_destSpace$0];
      this[_minMaxSpace$] = node[_minMaxSpace$];
    }
    update(dirt) {
    }
    completeResolve() {
    }
  };
  (actor_rotation_constraint.ActorRotationConstraint.new = function() {
    this[_copy] = false;
    this[_scale$] = 1.0;
    this[_enableMin] = false;
    this[_enableMax] = false;
    this[_max] = 6.283185307179586;
    this[_min] = -6.283185307179586;
    this[_offset$0] = false;
    this[_sourceSpace$0] = 1;
    this[_destSpace$0] = 1;
    this[_minMaxSpace$] = 1;
    this[_componentsA$0] = new transform_components.TransformComponents.new();
    this[_componentsB$0] = new transform_components.TransformComponents.new();
    actor_rotation_constraint.ActorRotationConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_rotation_constraint.ActorRotationConstraint.prototype;
  dart.addTypeTests(actor_rotation_constraint.ActorRotationConstraint);
  dart.setMethodSignature(actor_rotation_constraint.ActorRotationConstraint, () => ({
    __proto__: dart.getMethods(actor_rotation_constraint.ActorRotationConstraint.__proto__),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    copyRotationConstraint: dart.fnType(dart.void, [actor_rotation_constraint.ActorRotationConstraint, actor_artboard.ActorArtboard]),
    update: dart.fnType(dart.void, [core.int]),
    completeResolve: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(actor_rotation_constraint.ActorRotationConstraint, "package:flare_dart/actor_rotation_constraint.dart");
  dart.setFieldSignature(actor_rotation_constraint.ActorRotationConstraint, () => ({
    __proto__: dart.getFields(actor_rotation_constraint.ActorRotationConstraint.__proto__),
    [_copy]: dart.fieldType(core.bool),
    [_scale$]: dart.fieldType(core.double),
    [_enableMin]: dart.fieldType(core.bool),
    [_enableMax]: dart.fieldType(core.bool),
    [_max]: dart.fieldType(core.double),
    [_min]: dart.fieldType(core.double),
    [_offset$0]: dart.fieldType(core.bool),
    [_sourceSpace$0]: dart.fieldType(core.int),
    [_destSpace$0]: dart.fieldType(core.int),
    [_minMaxSpace$]: dart.fieldType(core.int),
    [_componentsA$0]: dart.finalFieldType(transform_components.TransformComponents),
    [_componentsB$0]: dart.finalFieldType(transform_components.TransformComponents)
  }));
  dart.defineLazy(actor_rotation_constraint.ActorRotationConstraint, {
    /*actor_rotation_constraint.ActorRotationConstraint.pi2*/get pi2() {
      return 6.283185307179586;
    }
  });
  const sides = dart.privateName(actor_polygon, "ActorPolygon.sides");
  actor_polygon.ActorPolygon = class ActorPolygon extends actor_path.ActorProceduralPath {
    get sides() {
      return this[sides];
    }
    set sides(value) {
      this[sides] = value;
    }
    invalidatePath() {
    }
    makeInstance(resetArtboard) {
      let instance = new actor_polygon.ActorPolygon.new();
      instance.copyPolygon(this, resetArtboard);
      return instance;
    }
    copyPolygon(node, resetArtboard) {
      this.copyPath(node, resetArtboard);
      this.sides = node.sides;
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_polygon.ActorPolygon.new() : null;
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      component.sides = reader.readUint32("sides");
      return component;
    }
    get points() {
      let _polygonPoints = JSArrayOfPathPoint().of([]);
      let angle = -3.141592653589793 / 2.0;
      let inc = 3.141592653589793 * 2.0 / dart.notNull(this.sides);
      for (let i = 0; i < dart.notNull(this.sides); i = i + 1) {
        _polygonPoints[$add](new path_point.StraightPathPoint.fromTranslation(new vec2d.Vec2D.fromValues(math.cos(angle) * dart.notNull(this.radiusX), math.sin(angle) * dart.notNull(this.radiusY))));
        angle = angle + inc;
      }
      return _polygonPoints;
    }
    get isClosed() {
      return true;
    }
    get doesDraw() {
      return !dart.test(this.renderCollapsed);
    }
    get radiusX() {
      return dart.notNull(this.width) / 2;
    }
    get radiusY() {
      return dart.notNull(this.height) / 2;
    }
  };
  (actor_polygon.ActorPolygon.new = function() {
    this[sides] = 5;
    actor_polygon.ActorPolygon.__proto__.new.call(this);
    ;
  }).prototype = actor_polygon.ActorPolygon.prototype;
  dart.addTypeTests(actor_polygon.ActorPolygon);
  dart.setMethodSignature(actor_polygon.ActorPolygon, () => ({
    __proto__: dart.getMethods(actor_polygon.ActorPolygon.__proto__),
    invalidatePath: dart.fnType(dart.void, []),
    copyPolygon: dart.fnType(dart.void, [actor_polygon.ActorPolygon, actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(actor_polygon.ActorPolygon, () => ({
    __proto__: dart.getGetters(actor_polygon.ActorPolygon.__proto__),
    points: core.List$(path_point.PathPoint),
    isClosed: core.bool,
    doesDraw: core.bool,
    radiusX: core.double,
    radiusY: core.double
  }));
  dart.setLibraryUri(actor_polygon.ActorPolygon, "package:flare_dart/actor_polygon.dart");
  dart.setFieldSignature(actor_polygon.ActorPolygon, () => ({
    __proto__: dart.getFields(actor_polygon.ActorPolygon.__proto__),
    sides: dart.fieldType(core.int)
  }));
  const boneIdx$ = dart.privateName(actor_ik_constraint, "InfluencedBone.boneIdx");
  const bone = dart.privateName(actor_ik_constraint, "InfluencedBone.bone");
  actor_ik_constraint.InfluencedBone = class InfluencedBone extends core.Object {
    get boneIdx() {
      return this[boneIdx$];
    }
    set boneIdx(value) {
      this[boneIdx$] = value;
    }
    get bone() {
      return this[bone];
    }
    set bone(value) {
      this[bone] = value;
    }
  };
  (actor_ik_constraint.InfluencedBone.new = function() {
    this[boneIdx$] = null;
    this[bone] = null;
    ;
  }).prototype = actor_ik_constraint.InfluencedBone.prototype;
  dart.addTypeTests(actor_ik_constraint.InfluencedBone);
  dart.setLibraryUri(actor_ik_constraint.InfluencedBone, "package:flare_dart/actor_ik_constraint.dart");
  dart.setFieldSignature(actor_ik_constraint.InfluencedBone, () => ({
    __proto__: dart.getFields(actor_ik_constraint.InfluencedBone.__proto__),
    boneIdx: dart.fieldType(core.int),
    bone: dart.fieldType(actor_bone.ActorBone)
  }));
  const index = dart.privateName(actor_ik_constraint, "BoneChain.index");
  const bone$ = dart.privateName(actor_ik_constraint, "BoneChain.bone");
  const angle = dart.privateName(actor_ik_constraint, "BoneChain.angle");
  const included = dart.privateName(actor_ik_constraint, "BoneChain.included");
  const transformComponents = dart.privateName(actor_ik_constraint, "BoneChain.transformComponents");
  const parentWorldInverse = dart.privateName(actor_ik_constraint, "BoneChain.parentWorldInverse");
  actor_ik_constraint.BoneChain = class BoneChain extends core.Object {
    get index() {
      return this[index];
    }
    set index(value) {
      this[index] = value;
    }
    get bone() {
      return this[bone$];
    }
    set bone(value) {
      this[bone$] = value;
    }
    get angle() {
      return this[angle];
    }
    set angle(value) {
      this[angle] = value;
    }
    get included() {
      return this[included];
    }
    set included(value) {
      this[included] = value;
    }
    get transformComponents() {
      return this[transformComponents];
    }
    set transformComponents(value) {
      this[transformComponents] = value;
    }
    get parentWorldInverse() {
      return this[parentWorldInverse];
    }
    set parentWorldInverse(value) {
      this[parentWorldInverse] = value;
    }
  };
  (actor_ik_constraint.BoneChain.new = function() {
    this[index] = null;
    this[bone$] = null;
    this[angle] = null;
    this[included] = null;
    this[transformComponents] = null;
    this[parentWorldInverse] = null;
    ;
  }).prototype = actor_ik_constraint.BoneChain.prototype;
  dart.addTypeTests(actor_ik_constraint.BoneChain);
  dart.setLibraryUri(actor_ik_constraint.BoneChain, "package:flare_dart/actor_ik_constraint.dart");
  dart.setFieldSignature(actor_ik_constraint.BoneChain, () => ({
    __proto__: dart.getFields(actor_ik_constraint.BoneChain.__proto__),
    index: dart.fieldType(core.int),
    bone: dart.fieldType(actor_bone.ActorBone),
    angle: dart.fieldType(core.double),
    included: dart.fieldType(core.bool),
    transformComponents: dart.fieldType(transform_components.TransformComponents),
    parentWorldInverse: dart.fieldType(mat2d.Mat2D)
  }));
  const _invertDirection = dart.privateName(actor_ik_constraint, "_invertDirection");
  const _influencedBones = dart.privateName(actor_ik_constraint, "_influencedBones");
  const _fkChain = dart.privateName(actor_ik_constraint, "_fkChain");
  const _boneData = dart.privateName(actor_ik_constraint, "_boneData");
  actor_ik_constraint.ActorIKConstraint = class ActorIKConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    resolveComponentIndices(components) {
      super.resolveComponentIndices(components);
      if (this[_influencedBones] != null) {
        for (let influenced of this[_influencedBones]) {
          influenced.bone = actor_bone.ActorBone.as(components[$_get](influenced.boneIdx));
          if (!dart.equals(influenced.bone, this.parent)) {
            influenced.bone.addPeerConstraint(this);
          }
        }
      }
    }
    completeResolve() {
      let t0;
      if (this[_influencedBones] == null || dart.test(this[_influencedBones][$isEmpty])) {
        return;
      }
      let start = this[_influencedBones][$_get](0).bone;
      let end = this[_influencedBones][$_get](dart.notNull(this[_influencedBones][$length]) - 1).bone;
      let count = 0;
      while (end != null && !dart.equals(end, start.parent)) {
        count = count + 1;
        end = end.parent;
      }
      let allIn = count < 3;
      end = this[_influencedBones][$_get](dart.notNull(this[_influencedBones][$length]) - 1).bone;
      this[_fkChain] = ListOfBoneChain().new(count);
      let idx = count - 1;
      while (end != null && !dart.equals(end, start.parent)) {
        let bc = new actor_ik_constraint.BoneChain.new();
        bc.bone = actor_bone.ActorBone.as(end);
        bc.angle = 0.0;
        bc.included = allIn;
        bc.transformComponents = new transform_components.TransformComponents.new();
        bc.parentWorldInverse = new mat2d.Mat2D.new();
        bc.index = idx;
        this[_fkChain][$_set]((t0 = idx, idx = t0 - 1, t0), bc);
        end = end.parent;
      }
      this[_boneData] = JSArrayOfBoneChain().of([]);
      for (let bone of this[_influencedBones]) {
        let item = this[_fkChain][$firstWhere](dart.fn(chainItem => dart.equals(chainItem.bone, bone.bone), BoneChainTobool()), {orElse: dart.fn(() => null, VoidToNull())});
        if (item == null) {
          core.print("Bone not in chain: " + dart.notNull(bone.bone.name));
          continue;
        }
        this[_boneData][$add](item);
      }
      if (!allIn) {
        for (let i = 0; i < dart.notNull(this[_boneData][$length]) - 1; i = i + 1) {
          let item = this[_boneData][$_get](i);
          item.included = true;
          this[_fkChain][$_get](dart.notNull(item.index) + 1).included = true;
        }
      }
      for (let bone of this[_influencedBones]) {
        if (dart.equals(bone.bone, this.parent)) {
          continue;
        }
        this.artboard.addDependency(this, bone.bone);
      }
      if (this.target != null) {
        this.artboard.addDependency(this, this.target);
      }
      let tip = this[_fkChain][$_get](dart.notNull(this[_fkChain][$length]) - 1);
      for (let fk of this[_fkChain]) {
        if (dart.equals(fk, tip)) {
          continue;
        }
        let bone = fk.bone;
        for (let node of bone.children) {
          let item = this[_fkChain][$firstWhere](dart.fn(chainItem => dart.equals(chainItem.bone, node), BoneChainTobool()), {orElse: dart.fn(() => null, VoidToNull())});
          if (item != null) {
            continue;
          }
          this.artboard.addDependency(node, tip.bone);
        }
      }
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_ik_constraint.ActorIKConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_invertDirection] = reader.readBool("isInverted");
      reader.openArray("bones");
      let numInfluencedBones = reader.readUint8Length();
      if (dart.notNull(numInfluencedBones) > 0) {
        component[_influencedBones] = ListOfInfluencedBone().new(numInfluencedBones);
        for (let i = 0; i < dart.notNull(numInfluencedBones); i = i + 1) {
          let ib = new actor_ik_constraint.InfluencedBone.new();
          ib.boneIdx = reader.readId("");
          component[_influencedBones][$_set](i, ib);
        }
      }
      reader.closeArray();
      return component;
    }
    constrain(node) {
      let target = actor_node.ActorNode.as(this.target);
      if (target == null) {
        return;
      }
      let worldTargetTranslation = new vec2d.Vec2D.new();
      target.getWorldTranslation(worldTargetTranslation);
      if (dart.test(this[_influencedBones][$isEmpty])) {
        return;
      }
      for (let item of this[_fkChain]) {
        let bone = item.bone;
        let parentWorld = bone.parent.worldTransform;
        mat2d.Mat2D.invert(item.parentWorldInverse, parentWorld);
        mat2d.Mat2D.multiply(bone.transform, item.parentWorldInverse, bone.worldTransform);
        mat2d.Mat2D.decompose(bone.transform, item.transformComponents);
      }
      let count = this[_boneData][$length];
      if (count === 1) {
        this.solve1(this[_boneData][$_get](0), worldTargetTranslation);
      } else if (count === 2) {
        this.solve2(this[_boneData][$_get](0), this[_boneData][$_get](1), worldTargetTranslation);
      } else {
        let tip = this[_boneData][$_get](dart.notNull(count) - 1);
        for (let i = 0; i < dart.notNull(count) - 1; i = i + 1) {
          let item = this[_boneData][$_get](i);
          this.solve2(item, tip, worldTargetTranslation);
          for (let j = dart.notNull(item.index) + 1; j < dart.notNull(this[_fkChain][$length]) - 1; j = j + 1) {
            let fk = this[_fkChain][$_get](j);
            mat2d.Mat2D.invert(fk.parentWorldInverse, fk.bone.parent.worldTransform);
          }
        }
      }
      if (this.strength !== 1.0) {
        for (let fk of this[_fkChain]) {
          if (!dart.test(fk.included)) {
            let bone = fk.bone;
            mat2d.Mat2D.multiply(bone.worldTransform, bone.parent.worldTransform, bone.transform);
            continue;
          }
          let fromAngle = fk.transformComponents.rotation[$modulo](6.283185307179586);
          let toAngle = fk.angle[$modulo](6.283185307179586);
          let diff = toAngle - fromAngle;
          if (diff > 3.141592653589793) {
            diff = diff - 6.283185307179586;
          } else if (diff < -3.141592653589793) {
            diff = diff + 6.283185307179586;
          }
          let angle = fromAngle + diff * dart.notNull(this.strength);
          this.constrainRotation(fk, angle);
        }
      }
    }
    constrainRotation(fk, rotation) {
      let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
      let bone = fk.bone;
      let parentWorld = bone.parent.worldTransform;
      let transform = bone.transform;
      let c = fk.transformComponents;
      if (rotation === 0.0) {
        mat2d.Mat2D.identity(transform);
      } else {
        mat2d.Mat2D.fromRotation(transform, rotation);
      }
      transform._set(4, c.x);
      transform._set(5, c.y);
      let scaleX = c.scaleX;
      let scaleY = c.scaleY;
      t0 = transform;
      t1 = 0;
      t0._set(t1, dart.notNull(t0._get(t1)) * dart.notNull(scaleX));
      t0$ = transform;
      t1$ = 1;
      t0$._set(t1$, dart.notNull(t0$._get(t1$)) * dart.notNull(scaleX));
      t0$0 = transform;
      t1$0 = 2;
      t0$0._set(t1$0, dart.notNull(t0$0._get(t1$0)) * dart.notNull(scaleY));
      t0$1 = transform;
      t1$1 = 3;
      t0$1._set(t1$1, dart.notNull(t0$1._get(t1$1)) * dart.notNull(scaleY));
      let skew = c.skew;
      if (skew !== 0.0) {
        transform._set(2, dart.notNull(transform._get(0)) * dart.notNull(skew) + dart.notNull(transform._get(2)));
        transform._set(3, dart.notNull(transform._get(1)) * dart.notNull(skew) + dart.notNull(transform._get(3)));
      }
      mat2d.Mat2D.multiply(bone.worldTransform, parentWorld, transform);
    }
    solve1(fk1, worldTargetTranslation) {
      let iworld = fk1.parentWorldInverse;
      let pA = new vec2d.Vec2D.new();
      fk1.bone.getWorldTranslation(pA);
      let pBT = new vec2d.Vec2D.clone(worldTargetTranslation);
      let toTarget = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pBT, pA);
      let toTargetLocal = vec2d.Vec2D.transformMat2(new vec2d.Vec2D.new(), toTarget, iworld);
      let r = math.atan2(toTargetLocal._get(1), toTargetLocal._get(0));
      this.constrainRotation(fk1, r);
      fk1.angle = r;
    }
    solve2(fk1, fk2, worldTargetTranslation) {
      let b1 = fk1.bone;
      let b2 = fk2.bone;
      let firstChild = this[_fkChain][$_get](dart.notNull(fk1.index) + 1);
      let iworld = fk1.parentWorldInverse;
      let pA = b1.getWorldTranslation(new vec2d.Vec2D.new());
      let pC = firstChild.bone.getWorldTranslation(new vec2d.Vec2D.new());
      let pB = b2.getTipWorldTranslation(new vec2d.Vec2D.new());
      let pBT = new vec2d.Vec2D.clone(worldTargetTranslation);
      pA = vec2d.Vec2D.transformMat2D(pA, pA, iworld);
      pC = vec2d.Vec2D.transformMat2D(pC, pC, iworld);
      pB = vec2d.Vec2D.transformMat2D(pB, pB, iworld);
      pBT = vec2d.Vec2D.transformMat2D(pBT, pBT, iworld);
      let av = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pB, pC);
      let a = vec2d.Vec2D.length(av);
      let bv = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pC, pA);
      let b = vec2d.Vec2D.length(bv);
      let cv = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pBT, pA);
      let c = vec2d.Vec2D.length(cv);
      let A = math.acos(math.max(core.num, -1, math.min(core.num, 1, (-dart.notNull(a) * dart.notNull(a) + dart.notNull(b) * dart.notNull(b) + dart.notNull(c) * dart.notNull(c)) / (2 * dart.notNull(b) * dart.notNull(c)))));
      let C = math.acos(math.max(core.num, -1, math.min(core.num, 1, (dart.notNull(a) * dart.notNull(a) + dart.notNull(b) * dart.notNull(b) - dart.notNull(c) * dart.notNull(c)) / (2 * dart.notNull(a) * dart.notNull(b)))));
      let r1 = null;
      let r2 = null;
      if (!dart.equals(b2.parent, b1)) {
        let secondChild = this[_fkChain][$_get](dart.notNull(fk1.index) + 2);
        let secondChildWorldInverse = secondChild.parentWorldInverse;
        pC = firstChild.bone.getWorldTranslation(new vec2d.Vec2D.new());
        pB = b2.getTipWorldTranslation(new vec2d.Vec2D.new());
        let avec = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), pB, pC);
        let avLocal = vec2d.Vec2D.transformMat2(new vec2d.Vec2D.new(), avec, secondChildWorldInverse);
        let angleCorrection = -math.atan2(avLocal._get(1), avLocal._get(0));
        if (dart.test(this[_invertDirection])) {
          r1 = math.atan2(cv._get(1), cv._get(0)) - A;
          r2 = -C + 3.141592653589793 + angleCorrection;
        } else {
          r1 = A + math.atan2(cv._get(1), cv._get(0));
          r2 = C - 3.141592653589793 + angleCorrection;
        }
      } else if (dart.test(this[_invertDirection])) {
        r1 = math.atan2(cv._get(1), cv._get(0)) - A;
        r2 = -C + 3.141592653589793;
      } else {
        r1 = A + math.atan2(cv._get(1), cv._get(0));
        r2 = C - 3.141592653589793;
      }
      this.constrainRotation(fk1, r1);
      this.constrainRotation(firstChild, r2);
      if (!dart.equals(firstChild, fk2)) {
        let bone = fk2.bone;
        mat2d.Mat2D.multiply(bone.worldTransform, bone.parent.worldTransform, bone.transform);
      }
      fk1.angle = r1;
      firstChild.angle = r2;
    }
    makeInstance(artboard) {
      let instance = new actor_ik_constraint.ActorIKConstraint.new();
      instance.copyIKConstraint(this, artboard);
      return instance;
    }
    copyIKConstraint(node, artboard) {
      this.copyTargetedConstraint(node, artboard);
      this[_invertDirection] = node[_invertDirection];
      if (node[_influencedBones] != null) {
        this[_influencedBones] = ListOfInfluencedBone().new(node[_influencedBones][$length]);
        for (let i = 0; i < dart.notNull(this[_influencedBones][$length]); i = i + 1) {
          let ib = new actor_ik_constraint.InfluencedBone.new();
          ib.boneIdx = node[_influencedBones][$_get](i).boneIdx;
          this[_influencedBones][$_set](i, ib);
        }
      }
    }
    update(dirt) {
    }
  };
  (actor_ik_constraint.ActorIKConstraint.new = function() {
    this[_invertDirection] = false;
    this[_influencedBones] = null;
    this[_fkChain] = null;
    this[_boneData] = null;
    actor_ik_constraint.ActorIKConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_ik_constraint.ActorIKConstraint.prototype;
  dart.addTypeTests(actor_ik_constraint.ActorIKConstraint);
  dart.setMethodSignature(actor_ik_constraint.ActorIKConstraint, () => ({
    __proto__: dart.getMethods(actor_ik_constraint.ActorIKConstraint.__proto__),
    completeResolve: dart.fnType(dart.void, []),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    constrainRotation: dart.fnType(dart.void, [actor_ik_constraint.BoneChain, core.double]),
    solve1: dart.fnType(dart.void, [actor_ik_constraint.BoneChain, vec2d.Vec2D]),
    solve2: dart.fnType(dart.void, [actor_ik_constraint.BoneChain, actor_ik_constraint.BoneChain, vec2d.Vec2D]),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard]),
    copyIKConstraint: dart.fnType(dart.void, [actor_ik_constraint.ActorIKConstraint, actor_artboard.ActorArtboard]),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setLibraryUri(actor_ik_constraint.ActorIKConstraint, "package:flare_dart/actor_ik_constraint.dart");
  dart.setFieldSignature(actor_ik_constraint.ActorIKConstraint, () => ({
    __proto__: dart.getFields(actor_ik_constraint.ActorIKConstraint.__proto__),
    [_invertDirection]: dart.fieldType(core.bool),
    [_influencedBones]: dart.fieldType(core.List$(actor_ik_constraint.InfluencedBone)),
    [_fkChain]: dart.fieldType(core.List$(actor_ik_constraint.BoneChain)),
    [_boneData]: dart.fieldType(core.List$(actor_ik_constraint.BoneChain))
  }));
  dart.defineLazy(actor_ik_constraint.ActorIKConstraint, {
    /*actor_ik_constraint.ActorIKConstraint.PI2*/get PI2() {
      return 6.283185307179586;
    }
  });
  actor_ellipse.ActorEllipse = class ActorEllipse extends actor_path.ActorProceduralPath {
    makeInstance(resetArtboard) {
      let instance = new actor_ellipse.ActorEllipse.new();
      instance.copyPath(this, resetArtboard);
      return instance;
    }
    invalidatePath() {
    }
    static read(artboard, reader, component) {
      component == null ? component = new actor_ellipse.ActorEllipse.new() : null;
      actor_node.ActorNode.read(artboard, reader, component);
      component.width = reader.readFloat32("width");
      component.height = reader.readFloat32("height");
      return component;
    }
    get points() {
      let _ellipsePathPoints = JSArrayOfPathPoint().of([]);
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(0.0, -dart.notNull(this.radiusY)), new vec2d.Vec2D.fromValues(-dart.notNull(this.radiusX) * 0.55, -dart.notNull(this.radiusY)), new vec2d.Vec2D.fromValues(dart.notNull(this.radiusX) * 0.55, -dart.notNull(this.radiusY))));
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(this.radiusX, 0.0), new vec2d.Vec2D.fromValues(this.radiusX, 0.55 * -dart.notNull(this.radiusY)), new vec2d.Vec2D.fromValues(this.radiusX, 0.55 * dart.notNull(this.radiusY))));
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(0.0, this.radiusY), new vec2d.Vec2D.fromValues(dart.notNull(this.radiusX) * 0.55, this.radiusY), new vec2d.Vec2D.fromValues(-dart.notNull(this.radiusX) * 0.55, this.radiusY)));
      _ellipsePathPoints[$add](new path_point.CubicPathPoint.fromValues(new vec2d.Vec2D.fromValues(-dart.notNull(this.radiusX), 0.0), new vec2d.Vec2D.fromValues(-dart.notNull(this.radiusX), dart.notNull(this.radiusY) * 0.55), new vec2d.Vec2D.fromValues(-dart.notNull(this.radiusX), -dart.notNull(this.radiusY) * 0.55)));
      return _ellipsePathPoints;
    }
    get isClosed() {
      return true;
    }
    get doesDraw() {
      return !dart.test(this.renderCollapsed);
    }
    get radiusX() {
      return dart.notNull(this.width) / 2;
    }
    get radiusY() {
      return dart.notNull(this.height) / 2;
    }
  };
  (actor_ellipse.ActorEllipse.new = function() {
    actor_ellipse.ActorEllipse.__proto__.new.call(this);
    ;
  }).prototype = actor_ellipse.ActorEllipse.prototype;
  dart.addTypeTests(actor_ellipse.ActorEllipse);
  dart.setMethodSignature(actor_ellipse.ActorEllipse, () => ({
    __proto__: dart.getMethods(actor_ellipse.ActorEllipse.__proto__),
    invalidatePath: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(actor_ellipse.ActorEllipse, () => ({
    __proto__: dart.getGetters(actor_ellipse.ActorEllipse.__proto__),
    points: core.List$(path_point.PathPoint),
    isClosed: core.bool,
    doesDraw: core.bool,
    radiusX: core.double,
    radiusY: core.double
  }));
  dart.setLibraryUri(actor_ellipse.ActorEllipse, "package:flare_dart/actor_ellipse.dart");
  dart.defineLazy(actor_ellipse, {
    /*actor_ellipse.circleConstant*/get circleConstant() {
      return 0.55;
    }
  });
  actor_distance_constraint.DistanceMode = class DistanceMode extends core.Object {};
  (actor_distance_constraint.DistanceMode.new = function() {
    ;
  }).prototype = actor_distance_constraint.DistanceMode.prototype;
  dart.addTypeTests(actor_distance_constraint.DistanceMode);
  dart.setLibraryUri(actor_distance_constraint.DistanceMode, "package:flare_dart/actor_distance_constraint.dart");
  dart.defineLazy(actor_distance_constraint.DistanceMode, {
    /*actor_distance_constraint.DistanceMode.closer*/get closer() {
      return 0;
    },
    /*actor_distance_constraint.DistanceMode.further*/get further() {
      return 1;
    },
    /*actor_distance_constraint.DistanceMode.exact*/get exact() {
      return 2;
    }
  });
  const _distance = dart.privateName(actor_distance_constraint, "_distance");
  const _mode = dart.privateName(actor_distance_constraint, "_mode");
  actor_distance_constraint.ActorDistanceConstraint = class ActorDistanceConstraint extends actor_targeted_constraint.ActorTargetedConstraint {
    static read(artboard, reader, component) {
      component == null ? component = new actor_distance_constraint.ActorDistanceConstraint.new() : null;
      actor_targeted_constraint.ActorTargetedConstraint.read(artboard, reader, component);
      component[_distance] = reader.readFloat32("distance");
      component[_mode] = reader.readUint8("modeId");
      return component;
    }
    makeInstance(resetArtboard) {
      let node = new actor_distance_constraint.ActorDistanceConstraint.new();
      node.copyDistanceConstraint(this, resetArtboard);
      return node;
    }
    copyDistanceConstraint(node, resetArtboard) {
      this.copyTargetedConstraint(node, resetArtboard);
      this[_distance] = node[_distance];
      this[_mode] = node[_mode];
    }
    constrain(node) {
      let t = actor_node.ActorNode.as(this.target);
      if (t == null) {
        return;
      }
      let p = this.parent;
      let targetTranslation = t.getWorldTranslation(new vec2d.Vec2D.new());
      let ourTranslation = p.getWorldTranslation(new vec2d.Vec2D.new());
      let toTarget = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), ourTranslation, targetTranslation);
      let currentDistance = vec2d.Vec2D.length(toTarget);
      switch (this[_mode]) {
        case 0:
        {
          if (dart.notNull(currentDistance) < dart.notNull(this[_distance])) {
            return;
          }
          break;
        }
        case 1:
        {
          if (dart.notNull(currentDistance) > dart.notNull(this[_distance])) {
            return;
          }
          break;
        }
      }
      if (dart.notNull(currentDistance) < 0.001) {
        return;
      }
      vec2d.Vec2D.scale(toTarget, toTarget, 1.0 / dart.notNull(currentDistance));
      vec2d.Vec2D.scale(toTarget, toTarget, this[_distance]);
      let world = p.worldTransform;
      let position = vec2d.Vec2D.lerp(new vec2d.Vec2D.new(), ourTranslation, vec2d.Vec2D.add(new vec2d.Vec2D.new(), targetTranslation, toTarget), this.strength);
      world._set(4, position._get(0));
      world._set(5, position._get(1));
    }
    get distance() {
      return this[_distance];
    }
    get mode() {
      return this[_mode];
    }
    set distance(d) {
      if (this[_distance] != d) {
        this[_distance] = d;
        this.markDirty();
      }
    }
    set mode(m) {
      if (this[_mode] != m) {
        this[_mode] = m;
        this.markDirty();
      }
    }
    completeResolve() {
    }
    update(dirt) {
    }
  };
  (actor_distance_constraint.ActorDistanceConstraint.new = function() {
    this[_distance] = 100.0;
    this[_mode] = 0;
    actor_distance_constraint.ActorDistanceConstraint.__proto__.new.call(this);
    ;
  }).prototype = actor_distance_constraint.ActorDistanceConstraint.prototype;
  dart.addTypeTests(actor_distance_constraint.ActorDistanceConstraint);
  dart.setMethodSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getMethods(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    makeInstance: dart.fnType(actor_distance_constraint.ActorDistanceConstraint, [actor_artboard.ActorArtboard]),
    copyDistanceConstraint: dart.fnType(dart.void, [actor_distance_constraint.ActorDistanceConstraint, actor_artboard.ActorArtboard]),
    constrain: dart.fnType(dart.void, [actor_node.ActorNode]),
    completeResolve: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getGetters(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    distance: core.double,
    mode: core.int
  }));
  dart.setSetterSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getSetters(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    distance: core.double,
    mode: core.int
  }));
  dart.setLibraryUri(actor_distance_constraint.ActorDistanceConstraint, "package:flare_dart/actor_distance_constraint.dart");
  dart.setFieldSignature(actor_distance_constraint.ActorDistanceConstraint, () => ({
    __proto__: dart.getFields(actor_distance_constraint.ActorDistanceConstraint.__proto__),
    [_distance]: dart.fieldType(core.double),
    [_mode]: dart.fieldType(core.int)
  }));
  const _version = dart.privateName(actor, "_version");
  const _artboards = dart.privateName(actor, "_artboards");
  const maxTextureIndex = dart.privateName(actor, "Actor.maxTextureIndex");
  actor.Actor = class Actor extends core.Object {
    get maxTextureIndex() {
      return this[maxTextureIndex];
    }
    set maxTextureIndex(value) {
      this[maxTextureIndex] = value;
    }
    get artboard() {
      return dart.test(this[_artboards][$isNotEmpty]) ? this[_artboards][$first] : null;
    }
    getArtboard(name) {
      return name == null ? this.artboard : this[_artboards][$firstWhere](dart.fn(artboard => {
        let t0;
        return (t0 = artboard, t0 == null ? null : t0.name) == name;
      }, ActorArtboardTobool()), {orElse: dart.fn(() => null, VoidToNull())});
    }
    get version() {
      return this[_version];
    }
    get texturesUsed() {
      return dart.notNull(this.maxTextureIndex) + 1;
    }
    copyActor(actor) {
      let t0, t0$;
      this.maxTextureIndex = actor.maxTextureIndex;
      let artboardCount = actor[_artboards][$length];
      if (dart.notNull(artboardCount) > 0) {
        let idx = 0;
        this[_artboards] = ListOfActorArtboard().new(artboardCount);
        for (let artboard of actor[_artboards]) {
          if (artboard == null) {
            this[_artboards][$_set]((t0 = idx, idx = t0 + 1, t0), null);
            continue;
          }
          let instanceArtboard = artboard.makeInstanceWithActor(this);
          this[_artboards][$_set]((t0$ = idx, idx = t0$ + 1, t0$), instanceArtboard);
        }
      }
    }
    makeArtboard() {
      return new actor_artboard.ActorArtboard.new(this);
    }
    makeImageNode() {
      return new actor_image.ActorImage.new();
    }
    makePathNode() {
      return new actor_path.ActorPath.new();
    }
    makeShapeNode(source) {
      return new actor_shape.ActorShape.new();
    }
    makeRectangle() {
      return new actor_rectangle.ActorRectangle.new();
    }
    makeTriangle() {
      return new actor_triangle.ActorTriangle.new();
    }
    makeStar() {
      return new actor_star.ActorStar.new();
    }
    makePolygon() {
      return new actor_polygon.ActorPolygon.new();
    }
    makeEllipse() {
      return new actor_ellipse.ActorEllipse.new();
    }
    load(data, context) {
      return async.async(core.bool, (function* load() {
        if (dart.notNull(data[$lengthInBytes]) < 5) {
          dart.throw(new core.UnsupportedError.new("Not a valid Flare file."));
        }
        let success = true;
        let F = data[$getUint8](0);
        let L = data[$getUint8](1);
        let A = data[$getUint8](2);
        let R = data[$getUint8](3);
        let E = data[$getUint8](4);
        let inputData = data;
        if (F !== 70 || L !== 76 || A !== 65 || R !== 82 || E !== 69) {
          let charCodes = data[$buffer][$asUint8List]();
          let stringData = core.String.fromCharCodes(charCodes);
          let jsonActor = convert.jsonDecode(stringData);
          let jsonObject = new _js_helper.LinkedMap.new();
          jsonObject[$_set]("container", jsonActor);
          inputData = jsonObject;
        }
        let reader = stream_reader.StreamReader.new(inputData);
        this[_version] = reader.readVersion();
        let block = null;
        while ((block = reader.readNextBlock(block_types.blockTypesMap)) != null) {
          switch (block.blockType) {
            case 115:
            {
              this.readArtboardsBlock(block);
              break;
            }
            case 9:
            {
              let rawAtlases = (yield this.readAtlasesBlock(block, context));
              success = (yield this.loadAtlases(rawAtlases));
              break;
            }
          }
        }
        return success;
      }).bind(this));
    }
    readArtboardsBlock(block) {
      let artboardCount = block.readUint16Length();
      this[_artboards] = ListOfActorArtboard().new(artboardCount);
      for (let artboardIndex = 0, end = this[_artboards][$length]; artboardIndex < dart.notNull(end); artboardIndex = artboardIndex + 1) {
        let artboardBlock = block.readNextBlock(block_types.blockTypesMap);
        if (artboardBlock == null) {
          break;
        }
        switch (artboardBlock.blockType) {
          case 114:
          {
            {
              let artboard = this.makeArtboard();
              artboard.read(artboardBlock);
              this[_artboards][$_set](artboardIndex, artboard);
              break;
            }
          }
        }
      }
    }
    readAtlasesBlock(block, context) {
      let isOOB = block.readBool("isOOB");
      block.openArray("data");
      let numAtlases = block.readUint16Length();
      let result = null;
      if (dart.test(isOOB)) {
        let waitingFor = ListOfFutureOfUint8List().new(numAtlases);
        for (let i = 0; i < dart.notNull(numAtlases); i = i + 1) {
          waitingFor[$_set](i, this.readOutOfBandAsset(block.readString("data"), context));
        }
        result = async.Future.wait(typed_data.Uint8List, waitingFor);
      } else {
        let inBandAssets = ListOfUint8List().new(numAtlases);
        for (let i = 0; i < dart.notNull(numAtlases); i = i + 1) {
          inBandAssets[$_set](i, block.readAsset());
        }
        let completer = CompleterOfListOfUint8List().new();
        completer.complete(inBandAssets);
        result = completer.future;
      }
      block.closeArray();
      return result;
    }
  };
  (actor.Actor.new = function() {
    this[maxTextureIndex] = 0;
    this[_version] = 0;
    this[_artboards] = null;
    ;
  }).prototype = actor.Actor.prototype;
  dart.addTypeTests(actor.Actor);
  dart.setMethodSignature(actor.Actor, () => ({
    __proto__: dart.getMethods(actor.Actor.__proto__),
    getArtboard: dart.fnType(actor_artboard.ActorArtboard, [core.String]),
    copyActor: dart.fnType(dart.void, [actor.Actor]),
    makeArtboard: dart.fnType(actor_artboard.ActorArtboard, []),
    makeImageNode: dart.fnType(actor_image.ActorImage, []),
    makePathNode: dart.fnType(actor_path.ActorPath, []),
    makeShapeNode: dart.fnType(actor_shape.ActorShape, [actor_shape.ActorShape]),
    makeRectangle: dart.fnType(actor_rectangle.ActorRectangle, []),
    makeTriangle: dart.fnType(actor_triangle.ActorTriangle, []),
    makeStar: dart.fnType(actor_star.ActorStar, []),
    makePolygon: dart.fnType(actor_polygon.ActorPolygon, []),
    makeEllipse: dart.fnType(actor_ellipse.ActorEllipse, []),
    load: dart.fnType(async.Future$(core.bool), [typed_data.ByteData, dart.dynamic]),
    readArtboardsBlock: dart.fnType(dart.void, [stream_reader.StreamReader]),
    readAtlasesBlock: dart.fnType(async.Future$(core.List$(typed_data.Uint8List)), [stream_reader.StreamReader, dart.dynamic])
  }));
  dart.setGetterSignature(actor.Actor, () => ({
    __proto__: dart.getGetters(actor.Actor.__proto__),
    artboard: actor_artboard.ActorArtboard,
    version: core.int,
    texturesUsed: core.int
  }));
  dart.setLibraryUri(actor.Actor, "package:flare_dart/actor.dart");
  dart.setFieldSignature(actor.Actor, () => ({
    __proto__: dart.getFields(actor.Actor.__proto__),
    maxTextureIndex: dart.fieldType(core.int),
    [_version]: dart.fieldType(core.int),
    [_artboards]: dart.fieldType(core.List$(actor_artboard.ActorArtboard))
  }));
  dart.trackLibraries("packages/flare_dart/actor", {
    "package:flare_dart/actor_node.dart": actor_node,
    "package:flare_dart/actor_constraint.dart": actor_constraint,
    "package:flare_dart/actor_component.dart": actor_component,
    "package:flare_dart/actor_artboard.dart": actor_artboard,
    "package:flare_dart/jelly_component.dart": jelly_component,
    "package:flare_dart/actor_root_bone.dart": actor_root_bone,
    "package:flare_dart/actor_bone.dart": actor_bone,
    "package:flare_dart/actor_bone_base.dart": actor_bone_base,
    "package:flare_dart/actor_jelly_bone.dart": actor_jelly_bone,
    "package:flare_dart/dependency_sorter.dart": dependency_sorter,
    "package:flare_dart/animation/actor_animation.dart": actor_animation,
    "package:flare_dart/animation/keyframe.dart": keyframe,
    "package:flare_dart/actor_star.dart": actor_star,
    "package:flare_dart/actor_path.dart": actor_path,
    "package:flare_dart/actor_skinnable.dart": actor_skinnable,
    "package:flare_dart/actor_skin.dart": actor_skin,
    "package:flare_dart/actor_shape.dart": actor_shape,
    "package:flare_dart/actor_drawable.dart": actor_drawable,
    "package:flare_dart/actor_color.dart": actor_color,
    "package:flare_dart/actor_rectangle.dart": actor_rectangle,
    "package:flare_dart/actor_node_solo.dart": actor_node_solo,
    "package:flare_dart/actor_image.dart": actor_image,
    "package:flare_dart/actor_event.dart": actor_event,
    "package:flare_dart/actor_triangle.dart": actor_triangle,
    "package:flare_dart/actor_translation_constraint.dart": actor_translation_constraint,
    "package:flare_dart/actor_axis_constraint.dart": actor_axis_constraint,
    "package:flare_dart/actor_targeted_constraint.dart": actor_targeted_constraint,
    "package:flare_dart/actor_transform_constraint.dart": actor_transform_constraint,
    "package:flare_dart/actor_scale_constraint.dart": actor_scale_constraint,
    "package:flare_dart/actor_rotation_constraint.dart": actor_rotation_constraint,
    "package:flare_dart/actor_polygon.dart": actor_polygon,
    "package:flare_dart/actor_ik_constraint.dart": actor_ik_constraint,
    "package:flare_dart/actor_ellipse.dart": actor_ellipse,
    "package:flare_dart/actor_distance_constraint.dart": actor_distance_constraint,
    "package:flare_dart/actor.dart": actor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["actor_node.dart","actor_component.dart","actor_constraint.dart","actor_artboard.dart","jelly_component.dart","actor_root_bone.dart","actor_bone_base.dart","actor_bone.dart","actor_jelly_bone.dart","dependency_sorter.dart","animation/actor_animation.dart","animation/keyframe.dart","actor_path.dart","actor_star.dart","actor_skinnable.dart","actor_skin.dart","actor_drawable.dart","actor_shape.dart","actor_color.dart","actor_rectangle.dart","actor_node_solo.dart","actor_image.dart","actor_event.dart","actor_triangle.dart","actor_targeted_constraint.dart","actor_axis_constraint.dart","actor_translation_constraint.dart","actor_transform_constraint.dart","actor_scale_constraint.dart","actor_rotation_constraint.dart","actor_polygon.dart","actor_ik_constraint.dart","actor_ellipse.dart","actor_distance_constraint.dart","actor.dart"],"names":[],"mappings":"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","file":"actor.ddc.js"}');
  // Exports:
  return {
    actor_node: actor_node,
    actor_constraint: actor_constraint,
    actor_component: actor_component,
    actor_artboard: actor_artboard,
    jelly_component: jelly_component,
    actor_root_bone: actor_root_bone,
    actor_bone: actor_bone,
    actor_bone_base: actor_bone_base,
    actor_jelly_bone: actor_jelly_bone,
    dependency_sorter: dependency_sorter,
    animation__actor_animation: actor_animation,
    animation__keyframe: keyframe,
    actor_star: actor_star,
    actor_path: actor_path,
    actor_skinnable: actor_skinnable,
    actor_skin: actor_skin,
    actor_shape: actor_shape,
    actor_drawable: actor_drawable,
    actor_color: actor_color,
    actor_rectangle: actor_rectangle,
    actor_node_solo: actor_node_solo,
    actor_image: actor_image,
    actor_event: actor_event,
    actor_triangle: actor_triangle,
    actor_translation_constraint: actor_translation_constraint,
    actor_axis_constraint: actor_axis_constraint,
    actor_targeted_constraint: actor_targeted_constraint,
    actor_transform_constraint: actor_transform_constraint,
    actor_scale_constraint: actor_scale_constraint,
    actor_rotation_constraint: actor_rotation_constraint,
    actor_polygon: actor_polygon,
    actor_ik_constraint: actor_ik_constraint,
    actor_ellipse: actor_ellipse,
    actor_distance_constraint: actor_distance_constraint,
    actor: actor
  };
});

//# sourceMappingURL=actor.ddc.js.map
