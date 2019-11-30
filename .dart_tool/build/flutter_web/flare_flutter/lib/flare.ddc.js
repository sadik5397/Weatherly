define(['dart_sdk', 'packages/flare_dart/actor', 'packages/flare_flutter/trim_path', 'packages/flare_dart/math/mat2d', 'packages/flutter/material', 'packages/flutter/src/gestures/arena', 'packages/flare_dart/path_point', 'packages/flare_dart/math/aabb'], function(dart_sdk, packages__flare_dart__actor, packages__flare_flutter__trim_path, packages__flare_dart__math__mat2d, packages__flutter__material, packages__flutter__src__gestures__arena, packages__flare_dart__path_point, packages__flare_dart__math__aabb) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const actor_color = packages__flare_dart__actor.actor_color;
  const actor_shape = packages__flare_dart__actor.actor_shape;
  const actor_component = packages__flare_dart__actor.actor_component;
  const actor_artboard = packages__flare_dart__actor.actor_artboard;
  const actor = packages__flare_dart__actor.actor;
  const actor_path = packages__flare_dart__actor.actor_path;
  const actor_ellipse = packages__flare_dart__actor.actor_ellipse;
  const actor_polygon = packages__flare_dart__actor.actor_polygon;
  const actor_star = packages__flare_dart__actor.actor_star;
  const actor_rectangle = packages__flare_dart__actor.actor_rectangle;
  const actor_triangle = packages__flare_dart__actor.actor_triangle;
  const actor_image = packages__flare_dart__actor.actor_image;
  const trim_path = packages__flare_flutter__trim_path.trim_path;
  const mat2d = packages__flare_dart__math__mat2d.math__mat2d;
  const vec2d = packages__flare_dart__math__mat2d.math__vec2d;
  const colors$ = packages__flutter__material.src__material__colors;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const path_point = packages__flare_dart__path_point.path_point;
  const aabb = packages__flare_dart__math__aabb.math__aabb;
  const flare = Object.create(dart.library);
  const $_get = dartx._get;
  const $clamp = dartx.clamp;
  const $toDouble = dartx.toDouble;
  const $abs = dartx.abs;
  const $modulo = dartx['%'];
  const $round = dartx.round;
  const $length = dartx.length;
  const $add = dartx.add;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $lastIndexOf = dartx.lastIndexOf;
  const $substring = dartx.substring;
  const $buffer = dartx.buffer;
  const $isEmpty = dartx.isEmpty;
  const $_set = dartx._set;
  const $truncate = dartx.truncate;
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  let FutureOfCodec = () => (FutureOfCodec = dart.constFn(async.Future$(ui.Codec)))();
  let Uint8List__ToFutureOfCodec = () => (Uint8List__ToFutureOfCodec = dart.constFn(dart.fnType(FutureOfCodec(), [typed_data.Uint8List], {targetHeight: core.int, targetWidth: core.int})))();
  let FutureOfFrameInfo = () => (FutureOfFrameInfo = dart.constFn(async.Future$(ui.FrameInfo)))();
  let CodecToFutureOfFrameInfo = () => (CodecToFutureOfFrameInfo = dart.constFn(dart.fnType(FutureOfFrameInfo(), [ui.Codec])))();
  let FrameInfoToImage = () => (FrameInfoToImage = dart.constFn(dart.fnType(ui.Image, [ui.FrameInfo])))();
  let JSArrayOfPathPoint = () => (JSArrayOfPathPoint = dart.constFn(_interceptors.JSArray$(path_point.PathPoint)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_name]: "FillRule.evenOdd",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: actor_color.FillRule.prototype,
        [_name]: "FillRule.nonZero",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_name]: "StrokeCap.butt",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_name]: "StrokeCap.round",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: actor_color.StrokeCap.prototype,
        [_name]: "StrokeCap.square",
        index: 2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_name]: "StrokeJoin.miter",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_name]: "StrokeJoin.round",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: actor_color.StrokeJoin.prototype,
        [_name]: "StrokeJoin.bevel",
        index: 2
      });
    },
    get C8() {
      return C8 = dart.fn(ui.instantiateImageCodec, Uint8List__ToFutureOfCodec());
    },
    get C9() {
      return C9 = dart.const({
        __proto__: path_point.PointType.prototype,
        [_name$]: "PointType.straight",
        index: 0
      });
    }
  });
  const _blendMode = dart.privateName(flare, "_blendMode");
  flare.FlutterActorDrawable = class FlutterActorDrawable extends core.Object {
    get blendModeId() {
      return this[_blendMode].index;
    }
    set blendModeId(index) {
      this.blendMode = ui.BlendMode.values[$_get](index);
    }
    get blendMode() {
      return this[_blendMode];
    }
    set blendMode(mode) {
      if (dart.equals(this[_blendMode], mode)) {
        return;
      }
      this[_blendMode] = mode;
      this.onBlendModeChanged(this[_blendMode]);
    }
    clip(canvas) {
      let t0, t0$;
      for (let clips of this.clipShapes) {
        for (let clipShape of clips) {
          let shape = clipShape.shape;
          if (dart.test(shape.renderCollapsed)) {
            continue;
          }
          if (dart.test(clipShape.intersect)) {
            canvas.clipPath(flare.FlutterActorShape.as(shape).path);
          } else {
            let artboardRect = new ui.Rect.fromLTWH(dart.notNull(this.artboard.origin._get(0)) * dart.notNull(this.artboard.width), dart.notNull(this.artboard.origin._get(1)) * dart.notNull(this.artboard.height), this.artboard.width, this.artboard.height);
            if (shape.fill != null && dart.equals(shape.fill.fillRule, actor_color.FillRule.evenOdd)) {
              let clipPath = ui.Path.new();
              clipPath.addRect(artboardRect);
              for (let path of shape.paths) {
                clipPath.addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: (t0 = path.pathTransform, t0 == null ? null : t0.mat4)});
              }
              clipPath.fillType = ui.PathFillType.evenOdd;
              canvas.clipPath(clipPath);
            } else {
              for (let path of shape.paths) {
                let clipPath = ui.Path.new();
                clipPath.addRect(artboardRect);
                clipPath.addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: (t0$ = path.pathTransform, t0$ == null ? null : t0$.mat4)});
                clipPath.fillType = ui.PathFillType.evenOdd;
                canvas.clipPath(clipPath);
              }
            }
          }
        }
      }
    }
  };
  (flare.FlutterActorDrawable.new = function() {
    this[_blendMode] = null;
    ;
  }).prototype = flare.FlutterActorDrawable.prototype;
  dart.addTypeTests(flare.FlutterActorDrawable);
  dart.setMethodSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getMethods(flare.FlutterActorDrawable.__proto__),
    clip: dart.fnType(dart.void, [ui.Canvas])
  }));
  dart.setGetterSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getGetters(flare.FlutterActorDrawable.__proto__),
    blendModeId: core.int,
    blendMode: ui.BlendMode
  }));
  dart.setSetterSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getSetters(flare.FlutterActorDrawable.__proto__),
    blendModeId: core.int,
    blendMode: ui.BlendMode
  }));
  dart.setLibraryUri(flare.FlutterActorDrawable, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterActorDrawable, () => ({
    __proto__: dart.getFields(flare.FlutterActorDrawable.__proto__),
    [_blendMode]: dart.fieldType(ui.BlendMode)
  }));
  const _paint = dart.privateName(flare, "_paint");
  const _name = dart.privateName(actor_color, "_name");
  let C0;
  let C1;
  flare.FlutterFill = class FlutterFill extends core.Object {
    onPaintUpdated(paint) {
    }
    initializeGraphics() {
      let t0;
      this[_paint] = (t0 = new ui.Paint.new(), t0.style = ui.PaintingStyle.fill, t0);
      this.onPaintUpdated(this[_paint]);
    }
    paint(fill, canvas, path) {
      switch (fill.fillRule) {
        case C0 || CT.C0:
        {
          path.fillType = ui.PathFillType.evenOdd;
          break;
        }
        case C1 || CT.C1:
        {
          path.fillType = ui.PathFillType.nonZero;
          break;
        }
      }
      canvas.drawPath(path, this[_paint]);
    }
  };
  (flare.FlutterFill.new = function() {
    this[_paint] = null;
    ;
  }).prototype = flare.FlutterFill.prototype;
  dart.addTypeTests(flare.FlutterFill);
  dart.setMethodSignature(flare.FlutterFill, () => ({
    __proto__: dart.getMethods(flare.FlutterFill.__proto__),
    onPaintUpdated: dart.fnType(dart.void, [ui.Paint]),
    initializeGraphics: dart.fnType(dart.void, []),
    paint: dart.fnType(dart.void, [actor_color.ActorFill, ui.Canvas, ui.Path])
  }));
  dart.setLibraryUri(flare.FlutterFill, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterFill, () => ({
    __proto__: dart.getFields(flare.FlutterFill.__proto__),
    [_paint]: dart.fieldType(ui.Paint)
  }));
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  const FlutterStroke_effectPath = dart.privateName(flare, "FlutterStroke.effectPath");
  flare.FlutterStroke = class FlutterStroke extends core.Object {
    get effectPath() {
      return this[effectPath];
    }
    set effectPath(value) {
      this[effectPath] = value;
    }
    onPaintUpdated(paint) {
    }
    initializeGraphics() {
      let t0;
      let stroke = actor_color.ActorStroke.as(this);
      this[_paint] = (t0 = new ui.Paint.new(), t0.style = ui.PaintingStyle.stroke, t0.strokeWidth = stroke.width, t0.strokeCap = flare.FlutterStroke.getStrokeCap(stroke.cap), t0.strokeJoin = flare.FlutterStroke.getStrokeJoin(stroke.join), t0);
      this.onPaintUpdated(this[_paint]);
    }
    static getStrokeCap(cap) {
      switch (cap) {
        case C2 || CT.C2:
        {
          return ui.StrokeCap.butt;
        }
        case C3 || CT.C3:
        {
          return ui.StrokeCap.round;
        }
        case C4 || CT.C4:
        {
          return ui.StrokeCap.square;
        }
      }
      return ui.StrokeCap.butt;
    }
    static getStrokeJoin(join) {
      switch (join) {
        case C5 || CT.C5:
        {
          return ui.StrokeJoin.miter;
        }
        case C6 || CT.C6:
        {
          return ui.StrokeJoin.round;
        }
        case C7 || CT.C7:
        {
          return ui.StrokeJoin.bevel;
        }
      }
      return ui.StrokeJoin.miter;
    }
    paint(stroke, canvas, path) {
      if (stroke.width === 0) {
        return;
      }
      if (dart.test(stroke.isTrimmed)) {
        if (this.effectPath == null) {
          let isSequential = dart.equals(stroke.trim, actor_color.TrimPath.sequential);
          let start = stroke.trimStart[$clamp](0, 1)[$toDouble]();
          let end = stroke.trimEnd[$clamp](0, 1)[$toDouble]();
          let offset = stroke.trimOffset;
          let inverted = start > end;
          if ((start - end)[$abs]() !== 1.0) {
            start = (start + dart.notNull(offset))[$modulo](1.0);
            end = (end + dart.notNull(offset))[$modulo](1.0);
            if (start < 0) {
              start = start + 1.0;
            }
            if (end < 0) {
              end = end + 1.0;
            }
            if (inverted) {
              let swap = end;
              end = start;
              start = swap;
            }
            if (end >= start) {
              this.effectPath = trim_path.trimPath(path, start, end, false, isSequential);
            } else {
              this.effectPath = trim_path.trimPath(path, end, start, true, isSequential);
            }
          } else {
            this.effectPath = path;
          }
        }
        path = this.effectPath;
      }
      canvas.drawPath(path, this[_paint]);
    }
    markPathEffectsDirty() {
      this.effectPath = null;
    }
  };
  (flare.FlutterStroke.new = function() {
    this[_paint] = null;
    this[effectPath] = null;
    ;
  }).prototype = flare.FlutterStroke.prototype;
  dart.addTypeTests(flare.FlutterStroke);
  const effectPath = FlutterStroke_effectPath;
  dart.setMethodSignature(flare.FlutterStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterStroke.__proto__),
    onPaintUpdated: dart.fnType(dart.void, [ui.Paint]),
    initializeGraphics: dart.fnType(dart.void, []),
    paint: dart.fnType(dart.void, [actor_color.ActorStroke, ui.Canvas, ui.Path]),
    markPathEffectsDirty: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(flare.FlutterStroke, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterStroke, () => ({
    __proto__: dart.getFields(flare.FlutterStroke.__proto__),
    [_paint]: dart.fieldType(ui.Paint),
    effectPath: dart.fieldType(ui.Path)
  }));
  const _path = dart.privateName(flare, "_path");
  const _isValid = dart.privateName(flare, "_isValid");
  const ActorShape_FlutterActorDrawable$36 = class ActorShape_FlutterActorDrawable extends actor_shape.ActorShape {};
  (ActorShape_FlutterActorDrawable$36.new = function() {
    flare.FlutterActorDrawable.new.call(this);
    ActorShape_FlutterActorDrawable$36.__proto__.new.call(this);
  }).prototype = ActorShape_FlutterActorDrawable$36.prototype;
  dart.applyMixin(ActorShape_FlutterActorDrawable$36, flare.FlutterActorDrawable);
  flare.FlutterActorShape = class FlutterActorShape extends ActorShape_FlutterActorDrawable$36 {
    initializeGraphics() {
      super.initializeGraphics();
      this[_path] = ui.Path.new();
      for (let path of this.paths) {
        flare.FlutterPath.as(path).initializeGraphics();
      }
    }
    invalidateShape() {
      let t0;
      this[_isValid] = false;
      t0 = this.stroke;
      t0 == null ? null : t0.markPathEffectsDirty();
    }
    onBlendModeChanged(mode) {
      if (this.fills != null) {
        for (let actorFill of this.fills) {
          actor_color.ActorPaint.as(actorFill).markPaintDirty();
        }
      }
      if (this.strokes != null) {
        for (let actorStroke of this.strokes) {
          actor_color.ActorPaint.as(actorStroke).markPaintDirty();
        }
      }
    }
    get path() {
      let t0;
      if (dart.test(this[_isValid])) {
        return this[_path];
      }
      this[_isValid] = true;
      this[_path].reset();
      if (this.fill != null && dart.equals(this.fill.fillRule, actor_color.FillRule.evenOdd)) {
        this[_path].fillType = ui.PathFillType.evenOdd;
      } else {
        this[_path].fillType = ui.PathFillType.nonZero;
      }
      for (let path of this.paths) {
        let transform = path.pathTransform;
        this[_path].addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: (t0 = transform, t0 == null ? null : t0.mat4)});
      }
      return this[_path];
    }
    getRenderPath(canvas) {
      return this.path;
    }
    draw(canvas) {
      if (!dart.test(this.doesDraw)) {
        return;
      }
      canvas.save();
      this.clip(canvas);
      let renderPath = this.getRenderPath(canvas);
      if (this.fills != null) {
        for (let actorFill of this.fills) {
          let fill = flare.FlutterFill.as(actorFill);
          fill.paint(actorFill, canvas, renderPath);
        }
      }
      if (this.strokes != null) {
        for (let actorStroke of this.strokes) {
          let stroke = flare.FlutterStroke.as(actorStroke);
          stroke.paint(actorStroke, canvas, renderPath);
        }
      }
      canvas.restore();
    }
  };
  (flare.FlutterActorShape.new = function() {
    this[_path] = null;
    this[_isValid] = false;
    flare.FlutterActorShape.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorShape.prototype;
  dart.addTypeTests(flare.FlutterActorShape);
  dart.setMethodSignature(flare.FlutterActorShape, () => ({
    __proto__: dart.getMethods(flare.FlutterActorShape.__proto__),
    onBlendModeChanged: dart.fnType(dart.void, [ui.BlendMode]),
    getRenderPath: dart.fnType(ui.Path, [ui.Canvas]),
    draw: dart.fnType(dart.void, [ui.Canvas])
  }));
  dart.setGetterSignature(flare.FlutterActorShape, () => ({
    __proto__: dart.getGetters(flare.FlutterActorShape.__proto__),
    path: ui.Path
  }));
  dart.setLibraryUri(flare.FlutterActorShape, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterActorShape, () => ({
    __proto__: dart.getFields(flare.FlutterActorShape.__proto__),
    [_path]: dart.fieldType(ui.Path),
    [_isValid]: dart.fieldType(core.bool)
  }));
  const _localPath = dart.privateName(flare, "_localPath");
  const _isLocalValid = dart.privateName(flare, "_isLocalValid");
  flare.FlutterActorShapeWithTransformedStroke = class FlutterActorShapeWithTransformedStroke extends flare.FlutterActorShape {
    initializeGraphics() {
      super.initializeGraphics();
      this[_localPath] = ui.Path.new();
    }
    invalidateShape() {
      this[_isLocalValid] = false;
      super.invalidateShape();
    }
    get localPath() {
      let t0;
      if (dart.test(this[_isLocalValid])) {
        return this[_localPath];
      }
      this[_isLocalValid] = true;
      this[_localPath].reset();
      let inverseWorld = new mat2d.Mat2D.new();
      if (!dart.test(mat2d.Mat2D.invert(inverseWorld, this.worldTransform))) {
        mat2d.Mat2D.identity(inverseWorld);
      }
      for (let path of this.paths) {
        let transform = path.pathTransform;
        let localTransform = null;
        if (transform != null) {
          localTransform = new mat2d.Mat2D.new();
          mat2d.Mat2D.multiply(localTransform, inverseWorld, transform);
        }
        this[_localPath].addPath(flare.FlutterPath.as(path).path, ui.Offset.zero, {matrix4: (t0 = localTransform, t0 == null ? null : t0.mat4)});
      }
      return this[_localPath];
    }
    getRenderPath(canvas) {
      canvas.transform(this.worldTransform.mat4);
      return this.localPath;
    }
  };
  (flare.FlutterActorShapeWithTransformedStroke.new = function() {
    this[_localPath] = null;
    this[_isLocalValid] = false;
    flare.FlutterActorShapeWithTransformedStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorShapeWithTransformedStroke.prototype;
  dart.addTypeTests(flare.FlutterActorShapeWithTransformedStroke);
  dart.setGetterSignature(flare.FlutterActorShapeWithTransformedStroke, () => ({
    __proto__: dart.getGetters(flare.FlutterActorShapeWithTransformedStroke.__proto__),
    localPath: ui.Path
  }));
  dart.setLibraryUri(flare.FlutterActorShapeWithTransformedStroke, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterActorShapeWithTransformedStroke, () => ({
    __proto__: dart.getFields(flare.FlutterActorShapeWithTransformedStroke.__proto__),
    [_localPath]: dart.fieldType(ui.Path),
    [_isLocalValid]: dart.fieldType(core.bool)
  }));
  const ColorFill_FlutterFill$36 = class ColorFill_FlutterFill extends actor_color.ColorFill {};
  (ColorFill_FlutterFill$36.new = function() {
    flare.FlutterFill.new.call(this);
    ColorFill_FlutterFill$36.__proto__.new.call(this);
  }).prototype = ColorFill_FlutterFill$36.prototype;
  dart.applyMixin(ColorFill_FlutterFill$36, flare.FlutterFill);
  flare.FlutterColorFill = class FlutterColorFill extends ColorFill_FlutterFill$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterColorFill.new();
      instanceNode.copyColorFill(this, resetArtboard);
      return instanceNode;
    }
    get uiColor() {
      let c = this.displayColor;
      let o = (dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]();
      return new ui.Color.fromRGBO((dart.notNull(c[$_get](0)) * 255.0)[$round](), (dart.notNull(c[$_get](1)) * 255.0)[$round](), (dart.notNull(c[$_get](2)) * 255.0)[$round](), dart.notNull(c[$_get](3)) * o);
    }
    set uiColor(c) {
      this.color = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([dart.notNull(c.red) / 255, dart.notNull(c.green) / 255, dart.notNull(c.blue) / 255, c.opacity]));
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      t0 = this[_paint];
      t0.color = this.uiColor;
      t0.blendMode = flare.FlutterActorShape.as(this.parent).blendMode;
      t0;
      this.onPaintUpdated(this[_paint]);
    }
  };
  (flare.FlutterColorFill.new = function() {
    flare.FlutterColorFill.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterColorFill.prototype;
  dart.addTypeTests(flare.FlutterColorFill);
  dart.setMethodSignature(flare.FlutterColorFill, () => ({
    __proto__: dart.getMethods(flare.FlutterColorFill.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(flare.FlutterColorFill, () => ({
    __proto__: dart.getGetters(flare.FlutterColorFill.__proto__),
    uiColor: ui.Color
  }));
  dart.setSetterSignature(flare.FlutterColorFill, () => ({
    __proto__: dart.getSetters(flare.FlutterColorFill.__proto__),
    uiColor: ui.Color
  }));
  dart.setLibraryUri(flare.FlutterColorFill, "package:flare_flutter/flare.dart");
  const ColorStroke_FlutterStroke$36 = class ColorStroke_FlutterStroke extends actor_color.ColorStroke {};
  (ColorStroke_FlutterStroke$36.new = function() {
    flare.FlutterStroke.new.call(this);
    ColorStroke_FlutterStroke$36.__proto__.new.call(this);
  }).prototype = ColorStroke_FlutterStroke$36.prototype;
  dart.applyMixin(ColorStroke_FlutterStroke$36, flare.FlutterStroke);
  flare.FlutterColorStroke = class FlutterColorStroke extends ColorStroke_FlutterStroke$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterColorStroke.new();
      instanceNode.copyColorStroke(this, resetArtboard);
      return instanceNode;
    }
    get uiColor() {
      let c = this.displayColor;
      let o = (dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]();
      return new ui.Color.fromRGBO((dart.notNull(c[$_get](0)) * 255.0)[$round](), (dart.notNull(c[$_get](1)) * 255.0)[$round](), (dart.notNull(c[$_get](2)) * 255.0)[$round](), dart.notNull(c[$_get](3)) * o);
    }
    set uiColor(c) {
      this.color = _native_typed_data.NativeFloat32List.fromList(JSArrayOfdouble().of([dart.notNull(c.red) / 255, dart.notNull(c.green) / 255, dart.notNull(c.blue) / 255, c.opacity]));
    }
    update(dirt) {
      let t0;
      super.update(dirt);
      t0 = this[_paint];
      t0.color = this.uiColor;
      t0.strokeWidth = this.width;
      t0.blendMode = flare.FlutterActorShape.as(this.parent).blendMode;
      t0;
      this.onPaintUpdated(this[_paint]);
    }
  };
  (flare.FlutterColorStroke.new = function() {
    flare.FlutterColorStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterColorStroke.prototype;
  dart.addTypeTests(flare.FlutterColorStroke);
  dart.setMethodSignature(flare.FlutterColorStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterColorStroke.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setGetterSignature(flare.FlutterColorStroke, () => ({
    __proto__: dart.getGetters(flare.FlutterColorStroke.__proto__),
    uiColor: ui.Color
  }));
  dart.setSetterSignature(flare.FlutterColorStroke, () => ({
    __proto__: dart.getSetters(flare.FlutterColorStroke.__proto__),
    uiColor: ui.Color
  }));
  dart.setLibraryUri(flare.FlutterColorStroke, "package:flare_flutter/flare.dart");
  const GradientFill_FlutterFill$36 = class GradientFill_FlutterFill extends actor_color.GradientFill {};
  (GradientFill_FlutterFill$36.new = function() {
    flare.FlutterFill.new.call(this);
    GradientFill_FlutterFill$36.__proto__.new.call(this);
  }).prototype = GradientFill_FlutterFill$36.prototype;
  dart.applyMixin(GradientFill_FlutterFill$36, flare.FlutterFill);
  flare.FlutterGradientFill = class FlutterGradientFill extends GradientFill_FlutterFill$36 {
    update(dirt) {
      let t0;
      super.update(dirt);
      let colors = JSArrayOfColor().of([]);
      let stops = JSArrayOfdouble().of([]);
      let numStops = (dart.notNull(this.colorStops[$length]) / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((dart.notNull(this.colorStops[$_get](idx)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 1)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 2)) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = this.artboard.overrideColor;
        let o = (dart.notNull(overrideColor[$_get](3)) * dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((dart.notNull(overrideColor[$_get](0)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](1)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](2)) * 255.0)[$round](), o);
      }
      t0 = this[_paint];
      t0.color = paintColor;
      t0.blendMode = flare.FlutterActorShape.as(this.parent).blendMode;
      t0.shader = ui.Gradient.linear(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), new ui.Offset.new(this.renderEnd._get(0), this.renderEnd._get(1)), colors, stops);
      t0;
      this.onPaintUpdated(this[_paint]);
    }
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterGradientFill.new();
      instanceNode.copyGradientFill(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterGradientFill.new = function() {
    flare.FlutterGradientFill.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterGradientFill.prototype;
  dart.addTypeTests(flare.FlutterGradientFill);
  dart.setMethodSignature(flare.FlutterGradientFill, () => ({
    __proto__: dart.getMethods(flare.FlutterGradientFill.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterGradientFill, "package:flare_flutter/flare.dart");
  const GradientStroke_FlutterStroke$36 = class GradientStroke_FlutterStroke extends actor_color.GradientStroke {};
  (GradientStroke_FlutterStroke$36.new = function() {
    flare.FlutterStroke.new.call(this);
    GradientStroke_FlutterStroke$36.__proto__.new.call(this);
  }).prototype = GradientStroke_FlutterStroke$36.prototype;
  dart.applyMixin(GradientStroke_FlutterStroke$36, flare.FlutterStroke);
  flare.FlutterGradientStroke = class FlutterGradientStroke extends GradientStroke_FlutterStroke$36 {
    update(dirt) {
      let t0;
      super.update(dirt);
      let colors = JSArrayOfColor().of([]);
      let stops = JSArrayOfdouble().of([]);
      let numStops = (dart.notNull(this.colorStops[$length]) / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((dart.notNull(this.colorStops[$_get](idx)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 1)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 2)) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = this.artboard.overrideColor;
        let o = (dart.notNull(overrideColor[$_get](3)) * dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((dart.notNull(overrideColor[$_get](0)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](1)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](2)) * 255.0)[$round](), o);
      }
      t0 = this[_paint];
      t0.color = paintColor;
      t0.blendMode = flare.FlutterActorShape.as(this.parent).blendMode;
      t0.strokeWidth = this.width;
      t0.shader = ui.Gradient.linear(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), new ui.Offset.new(this.renderEnd._get(0), this.renderEnd._get(1)), colors, stops);
      t0;
      this.onPaintUpdated(this[_paint]);
    }
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterGradientStroke.new();
      instanceNode.copyGradientStroke(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterGradientStroke.new = function() {
    flare.FlutterGradientStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterGradientStroke.prototype;
  dart.addTypeTests(flare.FlutterGradientStroke);
  dart.setMethodSignature(flare.FlutterGradientStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterGradientStroke.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterGradientStroke, "package:flare_flutter/flare.dart");
  const RadialGradientFill_FlutterFill$36 = class RadialGradientFill_FlutterFill extends actor_color.RadialGradientFill {};
  (RadialGradientFill_FlutterFill$36.new = function() {
    flare.FlutterFill.new.call(this);
    RadialGradientFill_FlutterFill$36.__proto__.new.call(this);
  }).prototype = RadialGradientFill_FlutterFill$36.prototype;
  dart.applyMixin(RadialGradientFill_FlutterFill$36, flare.FlutterFill);
  flare.FlutterRadialFill = class FlutterRadialFill extends RadialGradientFill_FlutterFill$36 {
    update(dirt) {
      let t0;
      super.update(dirt);
      let radius = vec2d.Vec2D.distance(this.renderStart, this.renderEnd);
      let colors = JSArrayOfColor().of([]);
      let stops = JSArrayOfdouble().of([]);
      let numStops = (dart.notNull(this.colorStops[$length]) / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((dart.notNull(this.colorStops[$_get](idx)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 1)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 2)) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let radial = ui.Gradient.radial(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), radius, colors, stops, ui.TileMode.clamp);
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = this.artboard.overrideColor;
        let o = (dart.notNull(overrideColor[$_get](3)) * dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((dart.notNull(overrideColor[$_get](0)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](1)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](2)) * 255.0)[$round](), o);
      }
      t0 = this[_paint];
      t0.color = paintColor;
      t0.blendMode = flare.FlutterActorShape.as(this.parent).blendMode;
      t0.shader = radial;
      t0;
      this.onPaintUpdated(this[_paint]);
    }
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterRadialFill.new();
      instanceNode.copyRadialFill(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterRadialFill.new = function() {
    flare.FlutterRadialFill.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterRadialFill.prototype;
  dart.addTypeTests(flare.FlutterRadialFill);
  dart.setMethodSignature(flare.FlutterRadialFill, () => ({
    __proto__: dart.getMethods(flare.FlutterRadialFill.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterRadialFill, "package:flare_flutter/flare.dart");
  const RadialGradientStroke_FlutterStroke$36 = class RadialGradientStroke_FlutterStroke extends actor_color.RadialGradientStroke {};
  (RadialGradientStroke_FlutterStroke$36.new = function() {
    flare.FlutterStroke.new.call(this);
    RadialGradientStroke_FlutterStroke$36.__proto__.new.call(this);
  }).prototype = RadialGradientStroke_FlutterStroke$36.prototype;
  dart.applyMixin(RadialGradientStroke_FlutterStroke$36, flare.FlutterStroke);
  flare.FlutterRadialStroke = class FlutterRadialStroke extends RadialGradientStroke_FlutterStroke$36 {
    update(dirt) {
      let t0;
      super.update(dirt);
      let radius = vec2d.Vec2D.distance(this.renderStart, this.renderEnd);
      let colors = JSArrayOfColor().of([]);
      let stops = JSArrayOfdouble().of([]);
      let numStops = (dart.notNull(this.colorStops[$length]) / 5)[$round]();
      let idx = 0;
      for (let i = 0; i < numStops; i = i + 1) {
        let o = this.colorStops[$_get](idx + 3)[$clamp](0.0, 1.0)[$toDouble]();
        let color = new ui.Color.fromRGBO((dart.notNull(this.colorStops[$_get](idx)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 1)) * 255.0)[$round](), (dart.notNull(this.colorStops[$_get](idx + 2)) * 255.0)[$round](), o);
        colors[$add](color);
        stops[$add](this.colorStops[$_get](idx + 4));
        idx = idx + 5;
      }
      let paintColor = null;
      if (this.artboard.overrideColor == null) {
        paintColor = colors$.Colors.white.withOpacity((dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]());
      } else {
        let overrideColor = this.artboard.overrideColor;
        let o = (dart.notNull(overrideColor[$_get](3)) * dart.notNull(this.artboard.modulateOpacity) * dart.notNull(this.opacity) * dart.notNull(this.shape.renderOpacity))[$clamp](0.0, 1.0)[$toDouble]();
        paintColor = new ui.Color.fromRGBO((dart.notNull(overrideColor[$_get](0)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](1)) * 255.0)[$round](), (dart.notNull(overrideColor[$_get](2)) * 255.0)[$round](), o);
      }
      t0 = this[_paint];
      t0.color = paintColor;
      t0.strokeWidth = this.width;
      t0.blendMode = flare.FlutterActorShape.as(this.parent).blendMode;
      t0.shader = ui.Gradient.radial(new ui.Offset.new(this.renderStart._get(0), this.renderStart._get(1)), radius, colors, stops, ui.TileMode.clamp);
      t0;
      this.onPaintUpdated(this[_paint]);
    }
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterRadialStroke.new();
      instanceNode.copyRadialStroke(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterRadialStroke.new = function() {
    flare.FlutterRadialStroke.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterRadialStroke.prototype;
  dart.addTypeTests(flare.FlutterRadialStroke);
  dart.setMethodSignature(flare.FlutterRadialStroke, () => ({
    __proto__: dart.getMethods(flare.FlutterRadialStroke.__proto__),
    makeInstance: dart.fnType(actor_component.ActorComponent, [actor_artboard.ActorArtboard])
  }));
  dart.setLibraryUri(flare.FlutterRadialStroke, "package:flare_flutter/flare.dart");
  const AssetBundleContext_filename = dart.privateName(flare, "AssetBundleContext.filename");
  const AssetBundleContext_bundle = dart.privateName(flare, "AssetBundleContext.bundle");
  flare.AssetBundleContext = class AssetBundleContext extends core.Object {
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get bundle() {
      return this[bundle$];
    }
    set bundle(value) {
      super.bundle = value;
    }
  };
  (flare.AssetBundleContext.new = function(bundle, filename) {
    this[bundle$] = bundle;
    this[filename$] = filename;
    ;
  }).prototype = flare.AssetBundleContext.prototype;
  dart.addTypeTests(flare.AssetBundleContext);
  const filename$ = AssetBundleContext_filename;
  const bundle$ = AssetBundleContext_bundle;
  dart.setLibraryUri(flare.AssetBundleContext, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.AssetBundleContext, () => ({
    __proto__: dart.getFields(flare.AssetBundleContext.__proto__),
    filename: dart.finalFieldType(core.String),
    bundle: dart.finalFieldType(asset_bundle.AssetBundle)
  }));
  const _images = dart.privateName(flare, "_images");
  const _rawAtlasData = dart.privateName(flare, "_rawAtlasData");
  let C8;
  const load = Symbol("load");
  flare.FlutterActor = class FlutterActor extends actor.Actor {
    get images() {
      return this[_images];
    }
    makeArtboard() {
      return new flare.FlutterActorArtboard.new(this);
    }
    makeShapeNode(source) {
      let t0, t0$;
      return dart.test((t0$ = (t0 = source, t0 == null ? null : t0.transformAffectsStroke), t0$ == null ? false : t0$)) ? new flare.FlutterActorShapeWithTransformedStroke.new() : new flare.FlutterActorShape.new();
    }
    makePathNode() {
      return new flare.FlutterActorPath.new();
    }
    makeImageNode() {
      return new flare.FlutterActorImage.new();
    }
    makeRectangle() {
      return new flare.FlutterActorRectangle.new();
    }
    makeTriangle() {
      return new flare.FlutterActorTriangle.new();
    }
    makeStar() {
      return new flare.FlutterActorStar.new();
    }
    makePolygon() {
      return new flare.FlutterActorPolygon.new();
    }
    makeEllipse() {
      return new flare.FlutterActorEllipse.new();
    }
    makeColorFill() {
      return new flare.FlutterColorFill.new();
    }
    makeColorStroke() {
      return new flare.FlutterColorStroke.new();
    }
    makeGradientFill() {
      return new flare.FlutterGradientFill.new();
    }
    makeGradientStroke() {
      return new flare.FlutterGradientStroke.new();
    }
    makeRadialFill() {
      return new flare.FlutterRadialFill.new();
    }
    makeRadialStroke() {
      return new flare.FlutterRadialStroke.new();
    }
    static loadFromByteData(data) {
      return async.async(flare.FlutterActor, function* loadFromByteData() {
        let actor = new flare.FlutterActor.new();
        yield actor.load(data, null);
        return actor;
      });
    }
    loadFromBundle(assetBundle, filename) {
      return async.async(core.bool, (function* loadFromBundle() {
        let data = (yield assetBundle.load(filename));
        return this[load](data, new flare.AssetBundleContext.new(assetBundle, filename));
      }).bind(this));
    }
    copyFlutterActor(actor) {
      this.copyActor(actor);
      this[_images] = actor[_images];
    }
    dispose() {
    }
    loadAtlases(rawAtlases) {
      return async.async(core.bool, (function* loadAtlases() {
        this[_rawAtlasData] = rawAtlases;
        return true;
      }).bind(this));
    }
    loadImages() {
      return async.async(core.bool, (function* loadImages() {
        if (this[_rawAtlasData] == null) {
          return false;
        }
        let data = this[_rawAtlasData];
        this[_rawAtlasData] = null;
        let codecs = (yield async.Future.wait(ui.Codec, data[$map](FutureOfCodec(), C8 || CT.C8)));
        let frames = (yield async.Future.wait(ui.FrameInfo, codecs[$map](FutureOfFrameInfo(), dart.fn(codec => codec.getNextFrame(), CodecToFutureOfFrameInfo()))));
        this[_images] = frames[$map](ui.Image, dart.fn(frame => frame.image, FrameInfoToImage()))[$toList]({growable: false});
        return true;
      }).bind(this));
    }
    readOutOfBandAsset(assetFilename, context) {
      return async.async(typed_data.Uint8List, function* readOutOfBandAsset() {
        let bundleContext = flare.AssetBundleContext.as(context);
        let pathIdx = bundleContext.filename[$lastIndexOf]("/") + 1;
        let basePath = bundleContext.filename[$substring](0, pathIdx);
        let data = (yield bundleContext.bundle.load(basePath + dart.notNull(assetFilename)));
        return typed_data.Uint8List.view(data[$buffer]);
      });
    }
    [load](data, context) {
      return super.load(data, context);
    }
  };
  (flare.FlutterActor.new = function() {
    this[_images] = null;
    this[_rawAtlasData] = null;
    flare.FlutterActor.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActor.prototype;
  dart.addTypeTests(flare.FlutterActor);
  dart.setMethodSignature(flare.FlutterActor, () => ({
    __proto__: dart.getMethods(flare.FlutterActor.__proto__),
    makeColorFill: dart.fnType(actor_color.ColorFill, []),
    makeColorStroke: dart.fnType(actor_color.ColorStroke, []),
    makeGradientFill: dart.fnType(actor_color.GradientFill, []),
    makeGradientStroke: dart.fnType(actor_color.GradientStroke, []),
    makeRadialFill: dart.fnType(actor_color.RadialGradientFill, []),
    makeRadialStroke: dart.fnType(actor_color.RadialGradientStroke, []),
    loadFromBundle: dart.fnType(async.Future$(core.bool), [asset_bundle.AssetBundle, core.String]),
    copyFlutterActor: dart.fnType(dart.void, [flare.FlutterActor]),
    dispose: dart.fnType(dart.void, []),
    loadAtlases: dart.fnType(async.Future$(core.bool), [core.List$(typed_data.Uint8List)]),
    loadImages: dart.fnType(async.Future$(core.bool), []),
    readOutOfBandAsset: dart.fnType(async.Future$(typed_data.Uint8List), [core.String, dart.dynamic])
  }));
  dart.setGetterSignature(flare.FlutterActor, () => ({
    __proto__: dart.getGetters(flare.FlutterActor.__proto__),
    images: core.List$(ui.Image)
  }));
  dart.setLibraryUri(flare.FlutterActor, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterActor, () => ({
    __proto__: dart.getFields(flare.FlutterActor.__proto__),
    [_images]: dart.fieldType(core.List$(ui.Image)),
    [_rawAtlasData]: dart.fieldType(core.List$(typed_data.Uint8List))
  }));
  flare.FlutterActorArtboard = class FlutterActorArtboard extends actor_artboard.ActorArtboard {
    draw(canvas) {
      if (dart.test(this.clipContents)) {
        canvas.save();
        let aabb = this.artboardAABB();
        canvas.clipRect(new ui.Rect.fromLTRB(aabb._get(0), aabb._get(1), aabb._get(2), aabb._get(3)));
      }
      if (this.drawableNodes != null) {
        for (let drawable of this.drawableNodes) {
          if (flare.FlutterActorDrawable.is(drawable)) {
            flare.FlutterActorDrawable.as(drawable).draw(canvas);
          }
        }
      }
      if (dart.test(this.clipContents)) {
        canvas.restore();
      }
    }
    dispose() {
    }
  };
  (flare.FlutterActorArtboard.new = function(actor) {
    flare.FlutterActorArtboard.__proto__.new.call(this, actor);
    ;
  }).prototype = flare.FlutterActorArtboard.prototype;
  dart.addTypeTests(flare.FlutterActorArtboard);
  dart.setMethodSignature(flare.FlutterActorArtboard, () => ({
    __proto__: dart.getMethods(flare.FlutterActorArtboard.__proto__),
    draw: dart.fnType(dart.void, [ui.Canvas]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(flare.FlutterActorArtboard, "package:flare_flutter/flare.dart");
  const _makePath = dart.privateName(flare, "_makePath");
  const _name$ = dart.privateName(path_point, "_name");
  let C9;
  flare.FlutterPathPointsPath = class FlutterPathPointsPath extends core.Object {
    initializeGraphics() {
      this[_path] = ui.Path.new();
    }
    get path() {
      if (dart.test(this[_isValid])) {
        return this[_path];
      }
      return this[_makePath]();
    }
    invalidatePath() {
      this[_isValid] = false;
    }
    [_makePath]() {
      let t1, t0, t1$, t0$, t1$0, t0$0, t1$1, t0$1;
      this[_isValid] = true;
      this[_path].reset();
      let pts = this.deformedPoints;
      if (pts == null || dart.test(pts[$isEmpty])) {
        return this[_path];
      }
      let renderPoints = JSArrayOfPathPoint().of([]);
      let pl = pts[$length];
      let previous = dart.test(this.isClosed) ? pts[$_get](dart.notNull(pl) - 1) : null;
      for (let i = 0; i < dart.notNull(pl); i = i + 1) {
        let point = pts[$_get](i);
        switch (point.pointType) {
          case C9 || CT.C9:
          {
            {
              let straightPoint = path_point.StraightPathPoint.as(point);
              let radius = straightPoint.radius;
              if (dart.notNull(radius) > 0) {
                if (!dart.test(this.isClosed) && (i === 0 || i === dart.notNull(pl) - 1)) {
                  renderPoints[$add](point);
                  previous = point;
                } else {
                  let next = pts[$_get]((i + 1)[$modulo](pl));
                  let prevPoint = path_point.CubicPathPoint.is(previous) ? previous.outPoint : previous.translation;
                  let nextPoint = path_point.CubicPathPoint.is(next) ? next.inPoint : next.translation;
                  let pos = point.translation;
                  let toPrev = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), prevPoint, pos);
                  let toPrevLength = vec2d.Vec2D.length(toPrev);
                  t0 = toPrev;
                  t1 = 0;
                  t0._set(t1, dart.notNull(t0._get(t1)) / dart.notNull(toPrevLength));
                  t0$ = toPrev;
                  t1$ = 1;
                  t0$._set(t1$, dart.notNull(t0$._get(t1$)) / dart.notNull(toPrevLength));
                  let toNext = vec2d.Vec2D.subtract(new vec2d.Vec2D.new(), nextPoint, pos);
                  let toNextLength = vec2d.Vec2D.length(toNext);
                  t0$0 = toNext;
                  t1$0 = 0;
                  t0$0._set(t1$0, dart.notNull(t0$0._get(t1$0)) / dart.notNull(toNextLength));
                  t0$1 = toNext;
                  t1$1 = 1;
                  t0$1._set(t1$1, dart.notNull(t0$1._get(t1$1)) / dart.notNull(toNextLength));
                  let renderRadius = math.min(core.double, toPrevLength, math.min(core.double, toNextLength, radius));
                  let translation = vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toPrev, renderRadius);
                  renderPoints[$add](new path_point.CubicPathPoint.fromValues(translation, translation, vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toPrev, 0.44999999999999996 * renderRadius)));
                  translation = vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toNext, renderRadius);
                  previous = new path_point.CubicPathPoint.fromValues(translation, vec2d.Vec2D.scaleAndAdd(new vec2d.Vec2D.new(), pos, toNext, 0.44999999999999996 * renderRadius), translation);
                  renderPoints[$add](previous);
                }
              } else {
                renderPoints[$add](point);
                previous = point;
              }
              break;
            }
          }
          default:
          {
            renderPoints[$add](point);
            previous = point;
            break;
          }
        }
      }
      let firstPoint = renderPoints[$_get](0);
      this[_path].moveTo(firstPoint.translation._get(0), firstPoint.translation._get(1));
      for (let i = 0, l = dart.test(this.isClosed) ? renderPoints[$length] : dart.notNull(renderPoints[$length]) - 1, pl = renderPoints[$length]; i < dart.notNull(l); i = i + 1) {
        let point = renderPoints[$_get](i);
        let nextPoint = renderPoints[$_get]((i + 1)[$modulo](pl));
        let cin = path_point.CubicPathPoint.is(nextPoint) ? nextPoint.inPoint : null;
        let cout = path_point.CubicPathPoint.is(point) ? point.outPoint : null;
        if (cin == null && cout == null) {
          this[_path].lineTo(nextPoint.translation._get(0), nextPoint.translation._get(1));
        } else {
          cout == null ? cout = point.translation : null;
          cin == null ? cin = nextPoint.translation : null;
          this[_path].cubicTo(cout._get(0), cout._get(1), cin._get(0), cin._get(1), nextPoint.translation._get(0), nextPoint.translation._get(1));
        }
      }
      if (dart.test(this.isClosed)) {
        this[_path].close();
      }
      return this[_path];
    }
  };
  (flare.FlutterPathPointsPath.new = function() {
    this[_path] = null;
    this[_isValid] = false;
    ;
  }).prototype = flare.FlutterPathPointsPath.prototype;
  dart.addTypeTests(flare.FlutterPathPointsPath);
  flare.FlutterPathPointsPath[dart.implements] = () => [flare.FlutterPath];
  dart.setMethodSignature(flare.FlutterPathPointsPath, () => ({
    __proto__: dart.getMethods(flare.FlutterPathPointsPath.__proto__),
    initializeGraphics: dart.fnType(dart.void, []),
    invalidatePath: dart.fnType(dart.void, []),
    [_makePath]: dart.fnType(ui.Path, [])
  }));
  dart.setGetterSignature(flare.FlutterPathPointsPath, () => ({
    __proto__: dart.getGetters(flare.FlutterPathPointsPath.__proto__),
    path: ui.Path
  }));
  dart.setLibraryUri(flare.FlutterPathPointsPath, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterPathPointsPath, () => ({
    __proto__: dart.getFields(flare.FlutterPathPointsPath.__proto__),
    [_path]: dart.fieldType(ui.Path),
    [_isValid]: dart.fieldType(core.bool)
  }));
  const ActorPath_FlutterPathPointsPath$36 = class ActorPath_FlutterPathPointsPath extends actor_path.ActorPath {};
  (ActorPath_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorPath_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorPath_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorPath_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorPath = class FlutterActorPath extends ActorPath_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorPath.new();
      instanceNode.copyPath(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterActorPath.new = function() {
    flare.FlutterActorPath.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorPath.prototype;
  dart.addTypeTests(flare.FlutterActorPath);
  dart.setLibraryUri(flare.FlutterActorPath, "package:flare_flutter/flare.dart");
  const ActorEllipse_FlutterPathPointsPath$36 = class ActorEllipse_FlutterPathPointsPath extends actor_ellipse.ActorEllipse {};
  (ActorEllipse_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorEllipse_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorEllipse_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorEllipse_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorEllipse = class FlutterActorEllipse extends ActorEllipse_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorEllipse.new();
      instanceNode.copyPath(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterActorEllipse.new = function() {
    flare.FlutterActorEllipse.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorEllipse.prototype;
  dart.addTypeTests(flare.FlutterActorEllipse);
  dart.setLibraryUri(flare.FlutterActorEllipse, "package:flare_flutter/flare.dart");
  const ActorPolygon_FlutterPathPointsPath$36 = class ActorPolygon_FlutterPathPointsPath extends actor_polygon.ActorPolygon {};
  (ActorPolygon_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorPolygon_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorPolygon_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorPolygon_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorPolygon = class FlutterActorPolygon extends ActorPolygon_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorPolygon.new();
      instanceNode.copyPolygon(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterActorPolygon.new = function() {
    flare.FlutterActorPolygon.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorPolygon.prototype;
  dart.addTypeTests(flare.FlutterActorPolygon);
  dart.setLibraryUri(flare.FlutterActorPolygon, "package:flare_flutter/flare.dart");
  const ActorStar_FlutterPathPointsPath$36 = class ActorStar_FlutterPathPointsPath extends actor_star.ActorStar {};
  (ActorStar_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorStar_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorStar_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorStar_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorStar = class FlutterActorStar extends ActorStar_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorStar.new();
      instanceNode.copyStar(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterActorStar.new = function() {
    flare.FlutterActorStar.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorStar.prototype;
  dart.addTypeTests(flare.FlutterActorStar);
  dart.setLibraryUri(flare.FlutterActorStar, "package:flare_flutter/flare.dart");
  const ActorRectangle_FlutterPathPointsPath$36 = class ActorRectangle_FlutterPathPointsPath extends actor_rectangle.ActorRectangle {};
  (ActorRectangle_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorRectangle_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorRectangle_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorRectangle_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorRectangle = class FlutterActorRectangle extends ActorRectangle_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorRectangle.new();
      instanceNode.copyRectangle(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterActorRectangle.new = function() {
    flare.FlutterActorRectangle.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorRectangle.prototype;
  dart.addTypeTests(flare.FlutterActorRectangle);
  dart.setLibraryUri(flare.FlutterActorRectangle, "package:flare_flutter/flare.dart");
  const ActorTriangle_FlutterPathPointsPath$36 = class ActorTriangle_FlutterPathPointsPath extends actor_triangle.ActorTriangle {};
  (ActorTriangle_FlutterPathPointsPath$36.new = function() {
    flare.FlutterPathPointsPath.new.call(this);
    ActorTriangle_FlutterPathPointsPath$36.__proto__.new.call(this);
  }).prototype = ActorTriangle_FlutterPathPointsPath$36.prototype;
  dart.applyMixin(ActorTriangle_FlutterPathPointsPath$36, flare.FlutterPathPointsPath);
  flare.FlutterActorTriangle = class FlutterActorTriangle extends ActorTriangle_FlutterPathPointsPath$36 {
    makeInstance(resetArtboard) {
      let instanceNode = new flare.FlutterActorTriangle.new();
      instanceNode.copyPath(this, resetArtboard);
      return instanceNode;
    }
  };
  (flare.FlutterActorTriangle.new = function() {
    flare.FlutterActorTriangle.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorTriangle.prototype;
  dart.addTypeTests(flare.FlutterActorTriangle);
  dart.setLibraryUri(flare.FlutterActorTriangle, "package:flare_flutter/flare.dart");
  flare.FlutterPath = class FlutterPath extends core.Object {};
  (flare.FlutterPath.new = function() {
    ;
  }).prototype = flare.FlutterPath.prototype;
  dart.addTypeTests(flare.FlutterPath);
  dart.setLibraryUri(flare.FlutterPath, "package:flare_flutter/flare.dart");
  const _vertexBuffer = dart.privateName(flare, "_vertexBuffer");
  const _uvBuffer = dart.privateName(flare, "_uvBuffer");
  const _canvasVertices = dart.privateName(flare, "_canvasVertices");
  const _indices = dart.privateName(flare, "_indices");
  const _identityMatrix = dart.privateName(flare, "_identityMatrix");
  const ActorImage_FlutterActorDrawable$36 = class ActorImage_FlutterActorDrawable extends actor_image.ActorImage {};
  (ActorImage_FlutterActorDrawable$36.new = function() {
    flare.FlutterActorDrawable.new.call(this);
    ActorImage_FlutterActorDrawable$36.__proto__.new.call(this);
  }).prototype = ActorImage_FlutterActorDrawable$36.prototype;
  dart.applyMixin(ActorImage_FlutterActorDrawable$36, flare.FlutterActorDrawable);
  flare.FlutterActorImage = class FlutterActorImage extends ActorImage_FlutterActorDrawable$36 {
    onPaintUpdated(paint) {
    }
    set textureIndex(value) {
      let t0;
      if (this.textureIndex != value) {
        let images = flare.FlutterActor.as(this.artboard.actor).images;
        this[_paint] = (t0 = new ui.Paint.new(), t0.blendMode = this.blendMode, t0.shader = images != null ? new ui.ImageShader.new(images[$_get](this.textureIndex), ui.TileMode.clamp, ui.TileMode.clamp, this[_identityMatrix]) : null, t0.filterQuality = ui.FilterQuality.low, t0.isAntiAlias = true, t0);
        this.onPaintUpdated(this[_paint]);
      }
    }
    get textureIndex() {
      return super.textureIndex;
    }
    dispose() {
      this[_uvBuffer] = null;
      this[_vertexBuffer] = null;
      this[_indices] = null;
      this[_paint] = null;
    }
    onBlendModeChanged(mode) {
      if (this[_paint] != null) {
        this[_paint].blendMode = mode;
        this.onPaintUpdated(this[_paint]);
      }
    }
    changeImage(image) {
      if (this.triangles == null || this.dynamicUV == null) {
        return false;
      }
      this[_uvBuffer] = this.makeVertexUVBuffer();
      let count = this.vertexCount;
      let idx = 0;
      for (let i = 0; i < dart.notNull(count); i = i + 1) {
        this[_uvBuffer][$_set](idx, dart.notNull(this.dynamicUV[$_get](idx)) * dart.notNull(image.width));
        this[_uvBuffer][$_set](idx + 1, dart.notNull(this.dynamicUV[$_get](idx + 1)) * dart.notNull(image.height));
        idx = idx + 2;
      }
      this[_paint].shader = image != null ? new ui.ImageShader.new(image, ui.TileMode.clamp, ui.TileMode.clamp, this[_identityMatrix]) : null;
      this[_canvasVertices] = ui.Vertices.raw(ui.VertexMode.triangles, this[_vertexBuffer], {indices: this[_indices], textureCoordinates: this[_uvBuffer]});
      this.onPaintUpdated(this[_paint]);
      return true;
    }
    changeImageFromBundle(bundle, filename) {
      return async.async(core.bool, (function* changeImageFromBundle() {
        let data = (yield bundle.load(filename));
        let codec = (yield ui.instantiateImageCodec(typed_data.Uint8List.view(data[$buffer])));
        let frame = (yield codec.getNextFrame());
        return this.changeImage(frame.image);
      }).bind(this));
    }
    initializeGraphics() {
      let t0, t1, t0$, t1$, t0$0, t0$1;
      super.initializeGraphics();
      if (this.triangles == null) {
        return;
      }
      this[_vertexBuffer] = this.makeVertexPositionBuffer();
      this[_uvBuffer] = this.makeVertexUVBuffer();
      this[_indices] = this.triangles;
      this.updateVertexUVBuffer(this[_uvBuffer]);
      let count = this.vertexCount;
      let idx = 0;
      let images = flare.FlutterActor.as(this.artboard.actor).images;
      let image = null;
      if (images != null) {
        image = flare.FlutterActor.as(this.artboard.actor).images[$_get](this.textureIndex);
        for (let i = 0; i < dart.notNull(count); i = i + 1) {
          this[_uvBuffer][$_set](idx, dart.notNull(this[_uvBuffer][$_get](idx)) * dart.notNull(image.width));
          this[_uvBuffer][$_set](idx + 1, dart.notNull(this[_uvBuffer][$_get](idx + 1)) * dart.notNull(image.height));
          idx = idx + 2;
        }
        if (this.sequenceUVs != null) {
          for (let i = 0; i < dart.notNull(this.sequenceUVs[$length]); i = i + 1) {
            t0$ = this.sequenceUVs;
            t1 = (t0 = i, i = t0 + 1, t0);
            t0$[$_set](t1, dart.notNull(t0$[$_get](t1)) * dart.notNull(image.width));
            t0$0 = this.sequenceUVs;
            t1$ = i;
            t0$0[$_set](t1$, dart.notNull(t0$0[$_get](t1$)) * dart.notNull(image.height));
          }
        }
      }
      this[_paint] = (t0$1 = new ui.Paint.new(), t0$1.blendMode = this.blendMode, t0$1.shader = image != null ? new ui.ImageShader.new(image, ui.TileMode.clamp, ui.TileMode.clamp, this[_identityMatrix]) : null, t0$1);
      this[_paint].filterQuality = ui.FilterQuality.low;
      this[_paint].isAntiAlias = true;
      this.onPaintUpdated(this[_paint]);
    }
    invalidateDrawable() {
      this[_canvasVertices] = null;
    }
    updateVertices() {
      if (this.triangles == null) {
        return false;
      }
      this.updateVertexPositionBuffer(this[_vertexBuffer], false);
      this[_canvasVertices] = ui.Vertices.raw(ui.VertexMode.triangles, this[_vertexBuffer], {indices: this[_indices], textureCoordinates: this[_uvBuffer]});
      return true;
    }
    draw(canvas) {
      if (this.triangles == null || dart.test(this.renderCollapsed) || dart.notNull(this.renderOpacity) <= 0) {
        return;
      }
      if (this[_canvasVertices] == null && !dart.test(this.updateVertices())) {
        return;
      }
      canvas.save();
      this.clip(canvas);
      this[_paint].color = this[_paint].color.withOpacity(this.renderOpacity[$clamp](0.0, 1.0)[$toDouble]());
      if (this.imageTransform != null) {
        canvas.transform(this.imageTransform.mat4);
        canvas.drawVertices(this[_canvasVertices], ui.BlendMode.srcOver, this[_paint]);
      } else {
        canvas.drawVertices(this[_canvasVertices], ui.BlendMode.srcOver, this[_paint]);
      }
      canvas.restore();
    }
    computeAABB() {
      let t0, t0$;
      this.updateVertices();
      let minX = 1 / 0;
      let minY = 1 / 0;
      let maxX = -1 / 0;
      let maxY = -1 / 0;
      let readIdx = 0;
      if (this[_vertexBuffer] != null) {
        let nv = (dart.notNull(this[_vertexBuffer][$length]) / 2)[$truncate]();
        for (let i = 0; i < nv; i = i + 1) {
          let x = this[_vertexBuffer][$_get]((t0 = readIdx, readIdx = t0 + 1, t0));
          let y = this[_vertexBuffer][$_get]((t0$ = readIdx, readIdx = t0$ + 1, t0$));
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
      return new aabb.AABB.fromValues(minX, minY, maxX, maxY);
    }
    update(dirt) {
      super.update(dirt);
      if ((dart.notNull(dirt) & 4) !== 0) {
        this.onPaintUpdated(this[_paint]);
      }
    }
  };
  (flare.FlutterActorImage.new = function() {
    this[_vertexBuffer] = null;
    this[_uvBuffer] = null;
    this[_paint] = null;
    this[_canvasVertices] = null;
    this[_indices] = null;
    this[_identityMatrix] = _native_typed_data.NativeFloat64List.fromList(JSArrayOfdouble().of([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
    flare.FlutterActorImage.__proto__.new.call(this);
    ;
  }).prototype = flare.FlutterActorImage.prototype;
  dart.addTypeTests(flare.FlutterActorImage);
  dart.setMethodSignature(flare.FlutterActorImage, () => ({
    __proto__: dart.getMethods(flare.FlutterActorImage.__proto__),
    onPaintUpdated: dart.fnType(dart.void, [ui.Paint]),
    dispose: dart.fnType(dart.void, []),
    onBlendModeChanged: dart.fnType(dart.void, [ui.BlendMode]),
    changeImage: dart.fnType(core.bool, [ui.Image]),
    changeImageFromBundle: dart.fnType(async.Future$(core.bool), [asset_bundle.AssetBundle, core.String]),
    updateVertices: dart.fnType(core.bool, []),
    draw: dart.fnType(dart.void, [ui.Canvas])
  }));
  dart.setSetterSignature(flare.FlutterActorImage, () => ({
    __proto__: dart.getSetters(flare.FlutterActorImage.__proto__),
    textureIndex: core.int
  }));
  dart.setLibraryUri(flare.FlutterActorImage, "package:flare_flutter/flare.dart");
  dart.setFieldSignature(flare.FlutterActorImage, () => ({
    __proto__: dart.getFields(flare.FlutterActorImage.__proto__),
    [_vertexBuffer]: dart.fieldType(typed_data.Float32List),
    [_uvBuffer]: dart.fieldType(typed_data.Float32List),
    [_paint]: dart.fieldType(ui.Paint),
    [_canvasVertices]: dart.fieldType(ui.Vertices),
    [_indices]: dart.fieldType(typed_data.Uint16List),
    [_identityMatrix]: dart.finalFieldType(typed_data.Float64List)
  }));
  dart.trackLibraries("packages/flare_flutter/flare", {
    "package:flare_flutter/flare.dart": flare
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAoCI,YAAO,AAAW;IACpB;oBAEoB;AACoB,MAAtC,iBAAyB,AAAM,2BAAC,KAAK;IACvC;;AAE8B;IAAU;kBACb;AACzB,UAAe,YAAX,kBAAc,IAAI;AACpB;;AAEe,MAAjB,mBAAa,IAAI;AACa,MAA9B,wBAAmB;IACrB;SASoB;;AAClB,eAA2B,QAAS;AAClC,iBAAqB,YAAa,MAAK;AACjC,sBAAQ,AAAU,SAAD;AACrB,wBAAI,AAAM,KAAD;AACP;;AAEF,wBAAI,AAAU,SAAD;AACuC,YAAlD,AAAO,MAAD,UAAiB,AAAsB,2BAA5B,KAAK;;AAElB,+BAAoB,qBACD,aAAnB,AAAS,AAAM,0BAAC,mBAAK,AAAS,sBACX,aAAnB,AAAS,AAAM,0BAAC,mBAAK,AAAS,uBAC9B,AAAS,qBACT,AAAS;AAEb,gBAAI,AAAM,KAAD,SAAS,QAA4B,YAApB,AAAM,AAAK,KAAN,gBAA2B;AAEpD,6BAAc;AACY,cAA9B,AAAS,QAAD,SAAS,YAAY;AAC7B,uBAAW,OAAQ,AAAM,MAAD;AAEgB,gBADtC,AAAS,QAAD,SAAe,AAAgB,qBAArB,IAAI,QAAiC,gCAC1C,AAAK,IAAD,6BAAC,OAAe;;AAEK,cAAxC,AAAS,QAAD,YAAyB;AACR,cAAzB,AAAO,MAAD,UAAU,QAAQ;;AAGxB,uBAAW,OAAQ,AAAM,MAAD;AAClB,+BAAc;AACY,gBAA9B,AAAS,QAAD,SAAS,YAAY;AAES,gBADtC,AAAS,QAAD,SAAe,AAAgB,qBAArB,IAAI,QAAiC,iCAC1C,AAAK,IAAD,8BAAC,OAAe;AACO,gBAAxC,AAAS,QAAD,YAAyB;AACR,gBAAzB,AAAO,MAAD,UAAU,QAAQ;;;;;;IAMpC;;;IAjEa;;EAkEf;;;;;;;;;;;;;;;;;;;;;;;;;;mBAK+B;IAAQ;;;AAGY,MAA/C,qBAAY,oBAAS,WAAsB;AACrB,MAAtB,oBAAe;IACjB;UAEqB,MAAgB,QAAgB;AACnD,cAAQ,AAAK,IAAD;;;AAE+B,UAAvC,AAAK,IAAD,YAA4B;AAChC;;;;AAEuC,UAAvC,AAAK,IAAD,YAA4B;AAChC;;;AAEyB,MAA7B,AAAO,MAAD,UAAU,IAAI,EAAE;IACxB;;;IAnBS;;EAoBX;;;;;;;;;;;;;;;;;;;;;IAKU;;;;;;mBADqB;IAAQ;;;AAKvB,mBAAc,2BAAL;AAMoC,MAJzD,qBAAY,oBACR,WAAyB,yBACzB,iBAAc,AAAO,MAAD,QACpB,eAA0B,iCAAa,AAAO,MAAD,OAC7C,gBAA2B,kCAAc,AAAO,MAAD;AAC7B,MAAtB,oBAAe;IACjB;wBAE2C;AACzC,cAAQ,GAAG;;;AAEP,gBAAoB;;;;AAEpB,gBAAoB;;;;AAEpB,gBAAoB;;;AAExB,YAAoB;IACtB;yBAE8C;AAC5C,cAAQ,IAAI;;;AAER,gBAAqB;;;;AAErB,gBAAqB;;;;AAErB,gBAAqB;;;AAEzB,YAAqB;IACvB;UAEuB,QAAkB,QAAgB;AACvD,UAAI,AAAO,AAAM,MAAP,WAAU;AAClB;;AAGF,oBAAI,AAAO,MAAD;AACR,YAAI,AAAW,mBAAG;AACX,6BAA2B,YAAZ,AAAO,MAAD,OAAkB;AACrC,sBAAQ,AAAO,AAAU,AAAY,MAAvB,mBAAiB,GAAG;AAClC,oBAAM,AAAO,AAAQ,AAAY,MAArB,iBAAe,GAAG;AAC9B,uBAAS,AAAO,MAAD;AACjB,yBAAW,AAAM,KAAD,GAAG,GAAG;AAC3B,cAAkB,CAAb,AAAM,KAAD,GAAG,GAAG,cAAW;AACK,YAA9B,QAAyB,CAAhB,AAAM,KAAD,gBAAG,MAAM,YAAI;AACD,YAA1B,MAAqB,CAAd,AAAI,GAAD,gBAAG,MAAM,YAAI;AAEvB,gBAAI,AAAM,KAAD,GAAG;AACE,cAAZ,QAAA,AAAM,KAAD,GAAI;;AAEX,gBAAI,AAAI,GAAD,GAAG;AACE,cAAV,MAAA,AAAI,GAAD,GAAI;;AAET,gBAAI,QAAQ;AACG,yBAAO,GAAG;AACZ,cAAX,MAAM,KAAK;AACC,cAAZ,QAAQ,IAAI;;AAEd,gBAAI,AAAI,GAAD,IAAI,KAAK;AAC8C,cAA5D,kBAAa,mBAAS,IAAI,EAAE,KAAK,EAAE,GAAG,EAAE,OAAO,YAAY;;AAEA,cAA3D,kBAAa,mBAAS,IAAI,EAAE,GAAG,EAAE,KAAK,EAAE,MAAM,YAAY;;;AAG3C,YAAjB,kBAAa,IAAI;;;AAGJ,QAAjB,OAAO;;AAEoB,MAA7B,AAAO,MAAD,UAAU,IAAI,EAAE;IACxB;;AAGmB,MAAjB,kBAAa;IACf;;;IAnFS;IAED;;EAkFV;;;;;;;;;;;;;;;;;;;;;;;;;;AAQ8B,MAApB;AACW,MAAjB,cAAW;AACX,eAAyB,OAAQ;AACW,QAApC,AAAgB,qBAArB,IAAI;;IAET;;;AAIkB,MAAhB,iBAAW;AACmB,WAA9B;0BAAQ;IACV;uBAGqC;AACnC,UAAI,cAAS;AACX,iBAAqB,YAAa;AACU,UAA/B,AAAe,0BAAzB,SAAS;;;AAGd,UAAI,gBAAW;AACb,iBAAuB,cAAe;AACQ,UAA/B,AAAe,0BAA3B,WAAW;;;IAGlB;;;AAGE,oBAAI;AACF,cAAO;;AAEM,MAAf,iBAAW;AACE,MAAb,AAAM;AAEN,UAAI,aAAQ,QAAsB,YAAd,AAAK,oBAAqB;AACP,QAArC,AAAM,uBAAwB;;AAEO,QAArC,AAAM,uBAAwB;;AAGhC,eAAyB,OAAQ;AACzB,wBAAY,AAAK,IAAD;AAEO,QAD7B,AAAM,oBAAc,AAAgB,qBAArB,IAAI,QAAiC,gCACvC,SAAS,eAAT,OAAW;;AAE1B,YAAO;IACT;kBAEgC;AAC9B,YAAO;IACT;SAGoB;AAClB,qBAAK;AACH;;AAGW,MAAb,AAAO,MAAD;AAEM,MAAZ,UAAK,MAAM;AAEH,uBAAa,mBAAc,MAAM;AAEzC,UAAI,cAAS;AACX,iBAAqB,YAAa;AACpB,qBAAiB,qBAAV,SAAS;AACa,UAAzC,AAAK,IAAD,OAAO,SAAS,EAAE,MAAM,EAAE,UAAU;;;AAG5C,UAAI,gBAAW;AACb,iBAAuB,cAAe;AACtB,uBAAqB,uBAAZ,WAAW;AACW,UAA7C,AAAO,MAAD,OAAO,WAAW,EAAE,MAAM,EAAE,UAAU;;;AAIhC,MAAhB,AAAO,MAAD;IACR;;;IAnFQ;IACH,iBAAW;;;EAmFlB;;;;;;;;;;;;;;;;;;;;;;AAQ8B,MAApB;AACgB,MAAtB,mBAAgB;IAClB;;AAIuB,MAArB,sBAAgB;AACO,MAAjB;IACR;;;AAGE,oBAAI;AACF,cAAO;;AAEW,MAApB,sBAAgB;AACE,MAAlB,AAAW;AAEL,yBAAe;AACrB,qBAAW,mBAAO,YAAY,EAAE;AACF,QAAtB,qBAAS,YAAY;;AAG7B,eAAyB,OAAQ;AACzB,wBAAY,AAAK,IAAD;AAEhB;AACN,YAAI,SAAS,IAAI;AACS,UAAxB,iBAAiB;AACsC,UAAjD,qBAAS,cAAc,EAAE,YAAY,EAAE,SAAS;;AAGtB,QADlC,AAAW,yBAAc,AAAgB,qBAArB,IAAI,QAAiC,gCAC5C,cAAc,eAAd,OAAgB;;AAE/B,YAAO;IACT;kBAGgC;AACO,MAArC,AAAO,MAAD,WAAW,AAAe;AAChC,YAAO;IACT;;;IA7CQ;IACH,sBAAgB;;;EA6CvB;;;;;;;;;;;;;;;;;;;iBAI4C;AACvB,yBAAe;AACe,MAA/C,AAAa,YAAD,eAAe,MAAM,aAAa;AAC9C,YAAO,aAAY;IACrB;;AAGc,cAAI;AACT,cACF,AACA,CAFgC,AAAU,aAAnC,AAAS,8CAAkB,6BAAU,AAAM,mCAC5C,KAAK;AAEhB,YAAa,uBAAwB,CAAT,aAAL,AAAC,CAAA,QAAC,MAAK,kBAA+B,CAAT,aAAL,AAAC,CAAA,QAAC,MAAK,kBACnC,CAAT,aAAL,AAAC,CAAA,QAAC,MAAK,kBAAqB,aAAL,AAAC,CAAA,QAAC,MAAK,CAAC;IACtC;gBAEkB;AAE0C,MAD1D,aAAoB,8CAChB,sBAAO,aAAN,AAAE,CAAD,QAAO,KAAa,aAAR,AAAE,CAAD,UAAS,KAAY,aAAP,AAAE,CAAD,SAAQ,KAAK,AAAE,CAAD;IAClD;WAGgB;;AACI,MAAZ,aAAO,IAAI;AAGsC,WAFvD;MACI,WAAQ;MACR,eAAoB,AAAsB,2BAA7B;;AACK,MAAtB,oBAAe;IACjB;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;iBAI4C;AACrB,yBAAe;AACe,MAAjD,AAAa,YAAD,iBAAiB,MAAM,aAAa;AAChD,YAAO,aAAY;IACrB;;AAGc,cAAI;AACT,cACF,AACA,CAFgC,AAAU,aAAnC,AAAS,8CAAkB,6BAAU,AAAM,mCAC5C,KAAK;AAEhB,YAAa,uBAAwB,CAAT,aAAL,AAAC,CAAA,QAAC,MAAK,kBAA+B,CAAT,aAAL,AAAC,CAAA,QAAC,MAAK,kBACnC,CAAT,aAAL,AAAC,CAAA,QAAC,MAAK,kBAAqB,aAAL,AAAC,CAAA,QAAC,MAAK,CAAC;IACtC;gBAEkB;AAE0C,MAD1D,aAAoB,8CAChB,sBAAO,aAAN,AAAE,CAAD,QAAO,KAAa,aAAR,AAAE,CAAD,UAAS,KAAY,aAAP,AAAE,CAAD,SAAQ,KAAK,AAAE,CAAD;IAClD;WAGgB;;AACI,MAAZ,aAAO,IAAI;AAIsC,WAHvD;MACI,WAAQ;MACR,iBAAc;MACd,eAAoB,AAAsB,2BAA7B;;AACK,MAAtB,oBAAe;IACjB;;;;;EACF;;;;;;;;;;;;;;;;;;;;;;WAIkB;;AACI,MAAZ,aAAO,IAAI;AACF,mBAAmB;AACrB,kBAAgB;AACzB,qBAAmC,CAAL,aAAlB,AAAW,4BAAS;AAEhC,gBAAM;AACV,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,QAAQ,EAAE,IAAA,AAAC,CAAA;AACtB,gBAAI,AAAU,AAAU,AAAgB,uBAAzB,AAAI,GAAD,GAAG,WAAS,KAAK;AACjC,oBAAiB,sBACI,CAAT,aAAhB,AAAU,uBAAC,GAAG,KAAI,kBACW,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACO,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACvB,CAAC;AACY,QAAjB,AAAO,MAAD,OAAK,KAAK;AACc,QAA9B,AAAM,KAAD,OAAK,AAAU,uBAAC,AAAI,GAAD,GAAG;AACnB,QAAR,MAAA,AAAI,GAAD,GAAI;;AAGH;AACN,UAAI,AAAS,AAAc,+BAAG;AAIR,QAHpB,aAAoB,AAAM,iCAEjB,AACA,CAFqB,AAAU,aAAnC,AAAS,8CAAkB,6BAAU,AAAM,mCACjC,KAAK;;AAGR,4BAAgB,AAAS;AAC9B,gBAIF,AACA,CALwB,AACI,AACjB,aAFJ,AAAa,aAAA,QAAC,mBAClB,AAAS,8CACT,6BACA,AAAM,mCACH,KAAK;AAMV,QAJN,aAAsB,sBACS,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACpB,CAAC;;AAMoD,WAJ3D;MACI,WAAQ,UAAU;MAClB,eAAoB,AAAsB,2BAA7B;MACb,YAAqB,mBAAU,kBAAO,AAAW,sBAAC,IAAI,AAAW,sBAAC,KAC7D,kBAAO,AAAS,oBAAC,IAAI,AAAS,oBAAC,KAAK,MAAM,EAAE,KAAK;;AACpC,MAAtB,oBAAe;IACjB;iBAG0C;AACpB,yBAAe;AACe,MAAlD,AAAa,YAAD,kBAAkB,MAAM,aAAa;AACjD,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;;;;;WAIkB;;AACI,MAAZ,aAAO,IAAI;AACF,mBAAmB;AACrB,kBAAgB;AACzB,qBAAmC,CAAL,aAAlB,AAAW,4BAAS;AAEhC,gBAAM;AACV,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,QAAQ,EAAE,IAAA,AAAC,CAAA;AACtB,gBAAI,AAAU,AAAU,AAAgB,uBAAzB,AAAI,GAAD,GAAG,WAAS,KAAK;AACjC,oBAAiB,sBACI,CAAT,aAAhB,AAAU,uBAAC,GAAG,KAAI,kBACW,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACO,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACvB,CAAC;AACY,QAAjB,AAAO,MAAD,OAAK,KAAK;AACc,QAA9B,AAAM,KAAD,OAAK,AAAU,uBAAC,AAAI,GAAD,GAAG;AACnB,QAAR,MAAA,AAAI,GAAD,GAAI;;AAGH;AACN,UAAI,AAAS,AAAc,+BAAG;AAIR,QAHpB,aAAoB,AAAM,iCAEjB,AACA,CAFqB,AAAU,aAAnC,AAAS,8CAAkB,6BAAU,AAAM,mCACjC,KAAK;;AAGR,4BAAgB,AAAS;AAC9B,gBAIF,AACA,CALwB,AACI,AACjB,aAFJ,AAAa,aAAA,QAAC,mBAClB,AAAS,8CACT,6BACA,AAAM,mCACH,KAAK;AAMV,QAJN,aAAsB,sBACS,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACpB,CAAC;;AAOoD,WAL3D;MACI,WAAQ,UAAU;MAClB,eAAoB,AAAsB,2BAA7B;MACb,iBAAc;MACd,YAAqB,mBAAU,kBAAO,AAAW,sBAAC,IAAI,AAAW,sBAAC,KAC7D,kBAAO,AAAS,oBAAC,IAAI,AAAS,oBAAC,KAAK,MAAM,EAAE,KAAK;;AACpC,MAAtB,oBAAe;IACjB;iBAG0C;AAClB,yBAAe;AACe,MAApD,AAAa,YAAD,oBAAoB,MAAM,aAAa;AACnD,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;;;;;WAIkB;;AACI,MAAZ,aAAO,IAAI;AACV,mBAAe,qBAAS,kBAAa;AAC7B,mBAAmB;AACrB,kBAAgB;AACzB,qBAAmC,CAAL,aAAlB,AAAW,4BAAS;AAEhC,gBAAM;AACV,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,QAAQ,EAAE,IAAA,AAAC,CAAA;AACtB,gBAAI,AAAU,AAAU,AAAgB,uBAAzB,AAAI,GAAD,GAAG,WAAS,KAAK;AACjC,oBAAiB,sBACI,CAAT,aAAhB,AAAU,uBAAC,GAAG,KAAI,kBACW,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACO,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACvB,CAAC;AACY,QAAjB,AAAO,MAAD,OAAK,KAAK;AACc,QAA9B,AAAM,KAAD,OAAK,AAAU,uBAAC,AAAI,GAAD,GAAG;AACnB,QAAR,MAAA,AAAI,GAAD,GAAI;;AAEG,mBAAqB,mBAC7B,kBAAO,AAAW,sBAAC,IAAI,AAAW,sBAAC,KACnC,MAAM,EACN,MAAM,EACN,KAAK,EACO;AAEV;AACN,UAAI,AAAS,AAAc,+BAAG;AAIR,QAHpB,aAAoB,AAAM,iCAEjB,AACA,CAFqB,AAAU,aAAnC,AAAS,8CAAkB,6BAAU,AAAM,mCACjC,KAAK;;AAGR,4BAAgB,AAAS;AAC9B,gBAIF,AACA,CALwB,AACI,AACjB,aAFJ,AAAa,aAAA,QAAC,mBAClB,AAAS,8CACT,6BACA,AAAM,mCACH,KAAK;AAMV,QAJN,aAAsB,sBACS,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACpB,CAAC;;AAMY,WAHnB;MACI,WAAQ,UAAU;MAClB,eAAoB,AAAsB,2BAA7B;MACb,YAAS,MAAM;;AACG,MAAtB,oBAAe;IACjB;iBAG0C;AACtB,yBAAe;AACe,MAAhD,AAAa,YAAD,gBAAgB,MAAM,aAAa;AAC/C,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;;;;;WAIkB;;AACI,MAAZ,aAAO,IAAI;AACV,mBAAe,qBAAS,kBAAa;AAC7B,mBAAmB;AACrB,kBAAgB;AACzB,qBAAmC,CAAL,aAAlB,AAAW,4BAAS;AAEhC,gBAAM;AACV,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,QAAQ,EAAE,IAAA,AAAC,CAAA;AACtB,gBAAI,AAAU,AAAU,AAAgB,uBAAzB,AAAI,GAAD,GAAG,WAAS,KAAK;AACjC,oBAAiB,sBACI,CAAT,aAAhB,AAAU,uBAAC,GAAG,KAAI,kBACW,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACO,CAAT,aAApB,AAAU,uBAAC,AAAI,GAAD,GAAG,MAAK,kBACvB,CAAC;AACY,QAAjB,AAAO,MAAD,OAAK,KAAK;AACc,QAA9B,AAAM,KAAD,OAAK,AAAU,uBAAC,AAAI,GAAD,GAAG;AACnB,QAAR,MAAA,AAAI,GAAD,GAAI;;AAGH;AACN,UAAI,AAAS,AAAc,+BAAG;AAIR,QAHpB,aAAoB,AAAM,iCAEjB,AACA,CAFqB,AAAU,aAAnC,AAAS,8CAAkB,6BAAU,AAAM,mCACjC,KAAK;;AAGR,4BAAgB,AAAS;AAC9B,gBAIF,AACA,CALwB,AACI,AACjB,aAFJ,AAAa,aAAA,QAAC,mBAClB,AAAS,8CACT,6BACA,AAAM,mCACH,KAAK;AAMV,QAJN,aAAsB,sBACS,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACO,CAAT,aAAjB,AAAa,aAAA,QAAC,MAAK,kBACpB,CAAC;;AAQwC,WAL/C;MACI,WAAQ,UAAU;MAClB,iBAAc;MACd,eAAoB,AAAsB,2BAA7B;MACb,YAAqB,mBAAO,kBAAO,AAAW,sBAAC,IAAI,AAAW,sBAAC,KAC7D,MAAM,EAAE,MAAM,EAAE,KAAK,EAAc;;AACnB,MAAtB,oBAAe;IACjB;iBAG0C;AACpB,yBAAe;AACe,MAAlD,AAAa,YAAD,kBAAkB,MAAM,aAAa;AACjD,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;IAGe;;;;;;IACK;;;;;;;2CACM,QAAa;IAAb;IAAa;;EAAS;;;;;;;;;;;;;;;;AAO5C,YAAO;IACT;;AAIE,YAAO,oCAAqB;IAC9B;kBAGoC;;AAClC,wBAAsC,YAA/B,MAAM,eAAN,OAAQ,mCAAR,OAAkC,gBACnC,yDACA;IACR;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;;AAIE,YAAO;IACT;4BAEsD;AAAV;AAE7B,oBAAQ;AACO,QAA5B,MAAM,AAAM,KAAD,MAAM,IAAI,EAAE;AACvB,cAAO,MAAK;MACd;;mBAEwC,aAAoB;AAAjC;AAChB,oBAAO,MAAM,AAAY,WAAD,MAAM,QAAQ;AAC/C,cAAa,YAAK,IAAI,EAAE,iCAAmB,WAAW,EAAE,QAAQ;MAClE;;qBAEmC;AACjB,MAAhB,eAAU,KAAK;AACQ,MAAvB,gBAAU,AAAM,KAAD;IACjB;;IAEgB;gBAIyB;AAAjB;AACI,QAA1B,sBAAgB,UAAU;AAC1B,cAAO;MACT;;;AAEuB;AACrB,YAAI,AAAc,uBAAG;AACnB,gBAAO;;AAEO,mBAAO;AACH,QAApB,sBAAgB;AACD,sBACX,MAAa,4BAAK,AAAK,IAAD;AACP,sBACf,MAAa,gCAAK,AAAO,MAAD,4BAAK,QAAU,SAAU,AAAM,KAAD;AAEiB,QAD3E,gBACI,AAAO,AAAyC,MAA1C,iBAAK,QAAc,SAAU,AAAM,KAAD,iDAAyB;AACrE,cAAO;MACT;;uBAIW,eAAuB;AADE;AAEf,4BAAwB,4BAAR,OAAO;AACtC,sBAAU,AAAc,AAAS,AAAiB,aAA3B,wBAAsB,OAAO;AACjD,uBAAW,AAAc,AAAS,aAAV,sBAAoB,GAAG,OAAO;AACpD,oBAAO,MAAM,AAAc,AAAO,aAAR,aAAa,AAAS,QAAD,gBAAG,aAAa;AACxE,cAAiB,2BAAK,AAAK,IAAD;MAC5B;;;;;;;IApIe;IAsGC;;;EA+BlB;;;;;;;;;;;;;;;;;;;;;;;;;;;;SAKsB;AAClB,oBAAI;AACW,QAAb,AAAO,MAAD;AACD,mBAAO;AACsD,QAAlE,AAAO,MAAD,UAAe,qBAAS,AAAI,IAAA,MAAC,IAAI,AAAI,IAAA,MAAC,IAAI,AAAI,IAAA,MAAC,IAAI,AAAI,IAAA,MAAC;;AAEhE,UAAI,sBAAiB;AACnB,iBAAyB,WAAY;AACnC,cAAa,8BAAT,QAAQ;AACqC,YAArC,AAAyB,8BAAlC,QAAQ,OAA+B,MAAM;;;;AAIpD,oBAAI;AACc,QAAhB,AAAO,MAAD;;IAEV;;IAEgB;;6CApBkB;AAAS,wDAAM,KAAK;;EAAC;;;;;;;;;;;;;AAgGpC,MAAjB,cAAW;IACb;;AAIE,oBAAI;AACF,cAAO;;AAET,YAAO;IACT;;AAGkB,MAAhB,iBAAW;IACb;;;AAGiB,MAAf,iBAAW;AACE,MAAb,AAAM;AACU,gBAAM;AACtB,UAAI,AAAI,GAAD,IAAI,kBAAQ,AAAI,GAAD;AACpB,cAAO;;AAGO,yBAAe;AAC3B,eAAK,AAAI,GAAD;AAIF,+BAAW,iBAAW,AAAG,GAAA,QAAI,aAAH,EAAE,IAAG,KAAK;AAC9C,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,EAAE,GAAE,IAAA,AAAC,CAAA;AACb,oBAAQ,AAAG,GAAA,QAAC,CAAC;AACvB,gBAAQ,AAAM,KAAD;;;;AAGW,kCAAsB,gCAAN,KAAK;AAChC,2BAAS,AAAc,aAAD;AAC7B,kBAAW,aAAP,MAAM,IAAG;AACX,+BAAK,mBAAa,AAAE,CAAD,KAAI,KAAK,AAAE,CAAD,KAAO,aAAH,EAAE,IAAG;AACb,kBAAvB,AAAa,YAAD,OAAK,KAAK;AACN,kBAAhB,WAAW,KAAK;;AAEN,6BAAO,AAAG,GAAA,QAAS,CAAP,AAAE,CAAD,GAAG,YAAK,EAAE;AAC3B,kCAAqB,6BAAT,QAAQ,IACpB,AAAS,QAAD,YACR,AAAS,QAAD;AACR,kCACG,6BAAL,IAAI,IAAqB,AAAK,IAAD,WAAW,AAAK,IAAD;AAC1C,4BAAM,AAAM,KAAD;AAEX,+BAAe,qBAAS,uBAAS,SAAS,EAAE,GAAG;AAC9C,qCAAqB,mBAAO,MAAM;AAChB,uBAAzB,MAAM;uBAAC;kBAAD,YAAI,aAAJ,4BAAO,YAAY;AACA,wBAAzB,MAAM;wBAAC;kBAAD,cAAI,aAAJ,8BAAO,YAAY;AAEnB,+BAAe,qBAAS,uBAAS,SAAS,EAAE,GAAG;AAC9C,qCAAqB,mBAAO,MAAM;AAChB,yBAAzB,MAAM;yBAAC;kBAAD,gBAAI,aAAJ,gCAAO,YAAY;AACA,yBAAzB,MAAM;yBAAC;kBAAD,gBAAI,aAAJ,gCAAO,YAAY;AAElB,qCACH,sBAAI,YAAY,EAAE,sBAAI,YAAY,EAAE,MAAM;AAExC,oCACI,wBAAY,uBAAS,GAAG,EAAE,MAAM,EAAE,YAAY;AAKI,kBAJ5D,AAAa,YAAD,OAAoB,yCAC5B,WAAW,EACX,WAAW,EACL,wBACF,uBAAS,GAAG,EAAE,MAAM,EAAe,sBAAE,YAAY;AAEA,kBADzD,cACU,wBAAY,uBAAS,GAAG,EAAE,MAAM,EAAE,YAAY;AAKxC,kBAJhB,WAA0B,yCACtB,WAAW,EACL,wBACF,uBAAS,GAAG,EAAE,MAAM,EAAe,sBAAE,YAAY,GACrD,WAAW;AACW,kBAA1B,AAAa,YAAD,OAAK,QAAQ;;;AAGJ,gBAAvB,AAAa,YAAD,OAAK,KAAK;AACN,gBAAhB,WAAW,KAAK;;AAElB;;;;;AAGqB,YAAvB,AAAa,YAAD,OAAK,KAAK;AACN,YAAhB,WAAW,KAAK;AAChB;;;;AAII,uBAAa,AAAY,YAAA,QAAC;AAC8B,MAAlE,AAAM,mBAAO,AAAW,AAAW,UAAZ,kBAAa,IAAI,AAAW,AAAW,UAAZ,kBAAa;AAC/D,eAAS,IAAI,GACL,cAAI,iBAAW,AAAa,YAAD,YAA8B,aAApB,AAAa,YAAD,aAAU,GAC3D,KAAK,AAAa,YAAD,WACrB,AAAE,CAAD,gBAAG,CAAC,GACL,IAAA,AAAC,CAAA;AACO,oBAAQ,AAAY,YAAA,QAAC,CAAC;AACtB,wBAAY,AAAY,YAAA,QAAS,CAAP,AAAE,CAAD,GAAG,YAAK,EAAE;AACzC,kBAAgB,6BAAV,SAAS,IAAqB,AAAU,SAAD,WAAW;AACxD,mBAAa,6BAAN,KAAK,IAAqB,AAAM,KAAD,YAAY;AACxD,YAAI,AAAI,GAAD,IAAI,QAAQ,AAAK,IAAD,IAAI;AACuC,UAAhE,AAAM,mBAAO,AAAU,AAAW,SAAZ,kBAAa,IAAI,AAAU,AAAW,SAAZ,kBAAa;;AAEnC,UAA1B,AAAK,IAAD,IAAC,OAAL,OAAS,AAAM,KAAD,eAAT;AACwB,UAA7B,AAAI,GAAD,IAAC,OAAJ,MAAQ,AAAU,SAAD,eAAb;AAGmD,UADvD,AAAM,oBAAQ,AAAI,IAAA,MAAC,IAAI,AAAI,IAAA,MAAC,IAAI,AAAG,GAAA,MAAC,IAAI,AAAG,GAAA,MAAC,IACxC,AAAU,AAAW,SAAZ,kBAAa,IAAI,AAAU,AAAW,SAAZ,kBAAa;;;AAIxD,oBAAI;AACW,QAAb,AAAM;;AAGR,YAAO;IACT;;;IA7HQ;IAGH,iBAAW;;EA2HlB;;;;;;;;;;;;;;;;;;;;;;;;;;iBA9L4C;AACvB,yBAAe;AACU,MAA1C,AAAa,YAAD,UAAU,MAAM,aAAa;AACzC,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;iBAI4C;AACpB,yBAAe;AACO,MAA1C,AAAa,YAAD,UAAU,MAAM,aAAa;AACzC,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;iBAI4C;AACpB,yBAAe;AACU,MAA7C,AAAa,YAAD,aAAa,MAAM,aAAa;AAC5C,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;iBAI4C;AACvB,yBAAe;AACU,MAA1C,AAAa,YAAD,UAAU,MAAM,aAAa;AACzC,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;iBAI4C;AAClB,yBAAe;AACU,MAA/C,AAAa,YAAD,eAAe,MAAM,aAAa;AAC9C,YAAO,aAAY;IACrB;;;;;EACF;;;;;;;;;;iBAI4C;AACnB,yBAAe;AACM,MAA1C,AAAa,YAAD,UAAU,MAAM,aAAa;AACzC,YAAO,aAAY;IACrB;;;;;EACF;;;;;;EAOA;;;;;;;;;;;;;;;mBA8I+B;IAAQ;qBAoBhB;;AACnB,UAAI,qBAAgB,KAAK;AACR,qBAAyB,AAAiB,sBAAhC,AAAS;AAQZ,QAPtB,qBAAY,oBACR,eAAY,gBACZ,YAAS,AAAO,MAAD,IAAI,OACZ,uBAAY,AAAM,MAAA,QAAC,oBAA2B,mBACnC,mBAAO,yBACrB,MACJ,mBAAiC,sBACjC,iBAAc;AACI,QAAtB,oBAAe;;IAEnB;;;;;AAGkB,MAAhB,kBAAY;AACQ,MAApB,sBAAgB;AACD,MAAf,iBAAW;AACE,MAAb,eAAS;IACX;uBAGqC;AACnC,UAAI,gBAAU;AACW,QAAvB,AAAO,yBAAY,IAAI;AACD,QAAtB,oBAAe;;IAEnB;gBAI0B;AACxB,UAAI,AAAU,kBAAG,QAAQ,AAAU,kBAAG;AACpC,cAAO;;AAEuB,MAAhC,kBAAY;AACR,kBAAQ;AAIR,gBAAM;AACV,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,KAAK,GAAE,IAAA,AAAC,CAAA;AACmB,QAA7C,AAAS,uBAAC,GAAG,EAAmB,aAAf,AAAS,sBAAC,GAAG,kBAAI,AAAM,KAAD;AACe,QAAtD,AAAS,uBAAC,AAAI,GAAD,GAAG,GAAwB,aAAnB,AAAS,sBAAC,AAAI,GAAD,GAAG,mBAAK,AAAM,KAAD;AACvC,QAAR,MAAA,AAAI,GAAD,GAAI;;AAMC,MAHV,AAAO,sBAAS,AAAM,KAAD,IAAI,OAChB,uBACD,KAAK,EAAc,mBAAmB,mBAAO,yBAC/C;AAG+C,MADrD,wBAA8B,gBAAkB,yBAAW,+BAC9C,oCAA8B;AAErB,MAAtB,oBAAe;AAEf,YAAO;IACT;0BA0BgB,QAAe;AADG;AAEvB,oBAAO,MAAM,AAAO,MAAD,MAAM,QAAQ;AACjC,qBACL,MAAM,yBAAmC,0BAAK,AAAK,IAAD;AACzC,qBAAQ,MAAM,AAAM,KAAD;AAChC,cAAO,kBAAY,AAAM,KAAD;MAC1B;;;;AAI4B,MAApB;AACN,UAAI,AAAU,kBAAG;AACf;;AAEwC,MAA1C,sBAAgB;AACgB,MAAhC,kBAAY;AACQ,MAApB,iBAAW;AACoB,MAA/B,0BAAqB;AACjB,kBAAQ;AACR,gBAAM;AACK,mBAAyB,AAAiB,sBAAhC,AAAS;AACzB;AACT,UAAI,MAAM,IAAI;AACiD,QAA7D,QAAwB,AAAiB,AAAM,sBAAtC,AAAS,mCAA8B;AAIhD,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,KAAK,GAAE,IAAA,AAAC,CAAA;AACmB,UAA7C,AAAS,uBAAC,GAAG,EAAmB,aAAf,AAAS,uBAAC,GAAG,kBAAI,AAAM,KAAD;AACe,UAAtD,AAAS,uBAAC,AAAI,GAAD,GAAG,GAAwB,aAAnB,AAAS,uBAAC,AAAI,GAAD,GAAG,mBAAK,AAAM,KAAD;AACvC,UAAR,MAAA,AAAI,GAAD,GAAI;;AAGT,YAAI,oBAAe;AACjB,mBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAY,4BAAQ,IAAA,AAAC,CAAA;AACR,kBAA/B;kBAAa,KAAD,CAAC;YAAF,eAAM,aAAN,+BAAS,AAAM,KAAD;AACK,mBAA9B;kBAAY,CAAC;YAAF,iBAAI,aAAJ,iCAAO,AAAM,KAAD;;;;AAUjB,MALZ,uBAAY,oBACR,iBAAY,gBACZ,cAAS,AAAM,KAAD,IAAI,OACX,uBACD,KAAK,EAAc,mBAAmB,mBAAO,yBAC/C;AACmC,MAA3C,AAAO,6BAAiC;AACf,MAAzB,AAAO,2BAAc;AACC,MAAtB,oBAAe;IACjB;;AAIwB,MAAtB,wBAAkB;IACpB;;AAGE,UAAI,AAAU,kBAAG;AACf,cAAO;;AAEuC,MAAhD,gCAA2B,qBAAe;AAGW,MADrD,wBAA8B,gBAAkB,yBAAW,+BAC9C,oCAA8B;AAC3C,YAAO;IACT;SAGoB;AAClB,UAAI,AAAU,kBAAG,kBAAQ,yBAAiC,aAAd,uBAAiB;AAC3D;;AAGF,UAAI,AAAgB,yBAAG,mBAAS;AAC9B;;AAEW,MAAb,AAAO,MAAD;AAEM,MAAZ,UAAK,MAAM;AAE2D,MADtE,AAAO,qBACH,AAAO,AAAM,+BAAY,AAAc,AAAgB,2BAAV,KAAK;AAEtD,UAAI,uBAAkB;AACiB,QAArC,AAAO,MAAD,WAAW,AAAe;AACkC,QAAlE,AAAO,MAAD,cAAc,uBAA8B,sBAAS;;AAEO,QAAlE,AAAO,MAAD,cAAc,uBAA8B,sBAAS;;AAG7C,MAAhB,AAAO,MAAD;IACR;;;AAIkB,MAAhB;AAEO;AACA;AACA;AACA;AAEH,oBAAU;AACd,UAAI,uBAAiB;AACf,iBAA0B,cAArB,AAAc,gCAAU;AAEjC,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,EAAE,EAAE,IAAA,AAAC,CAAA;AAChB,kBAAI,AAAa,4BAAQ,KAAP,OAAO;AACzB,kBAAI,AAAa,4BAAQ,MAAP,OAAO;AAChC,cAAM,aAAF,CAAC,iBAAG,IAAI;AACF,YAAR,OAAO,CAAC;;AAEV,cAAM,aAAF,CAAC,iBAAG,IAAI;AACF,YAAR,OAAO,CAAC;;AAEV,cAAM,aAAF,CAAC,iBAAG,IAAI;AACF,YAAR,OAAO,CAAC;;AAEV,cAAM,aAAF,CAAC,iBAAG,IAAI;AACF,YAAR,OAAO,CAAC;;;;AAKd,YAAY,0BAAW,IAAI,EAAE,IAAI,EAAE,IAAI,EAAE,IAAI;IAC/C;WAGgB;AACI,MAAZ,aAAO,IAAI;AACjB,WAAS,aAAL,IAAI,WAA4B;AACZ,QAAtB,oBAAe;;IAEnB;;;IApPY;IACA;IACH;IACG;IACD;IAGO,wBAA8B,8CAAiB,sBAC/D,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA,KACA;;;EA8NJ","file":"flare.ddc.js"}');
  // Exports:
  return {
    flare: flare
  };
});

//# sourceMappingURL=flare.ddc.js.map
