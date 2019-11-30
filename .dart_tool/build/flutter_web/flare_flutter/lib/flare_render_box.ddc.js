define(['dart_sdk', 'packages/flare_flutter/flare_cache_asset', 'packages/flutter/gestures', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/painting/_network_image_web', 'packages/flare_dart/math/mat2d', 'packages/flare_flutter/flare_cache', 'packages/flare_flutter/flare', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flare_flutter__flare_cache_asset, packages__flutter__gestures, packages__flutter__src__rendering__animated_size, packages__flutter__src__painting___network_image_web, packages__flare_dart__math__mat2d, packages__flare_flutter__flare_cache, packages__flare_flutter__flare, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const flare_cache_asset = packages__flare_flutter__flare_cache_asset.flare_cache_asset;
  const binding = packages__flutter__gestures.src__scheduler__binding;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const mat2d = packages__flare_dart__math__mat2d.math__mat2d;
  const vec2d = packages__flare_dart__math__mat2d.math__vec2d;
  const flare_cache = packages__flare_flutter__flare_cache.flare_cache;
  const flare = packages__flare_flutter__flare.flare;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const flare_render_box = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  let LinkedHashSetOfFlareCacheAsset = () => (LinkedHashSetOfFlareCacheAsset = dart.constFn(collection.LinkedHashSet$(flare_cache_asset.FlareCacheAsset)))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.fill",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.contain",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.cover",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.fitHeight",
        index: 4
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.fitWidth",
        index: 3
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.none",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name]: "BoxFit.scaleDown",
        index: 6
      });
    }
  });
  const _assetBundle = dart.privateName(flare_render_box, "_assetBundle");
  const _fit = dart.privateName(flare_render_box, "_fit");
  const _alignment = dart.privateName(flare_render_box, "_alignment");
  const _frameCallbackID = dart.privateName(flare_render_box, "_frameCallbackID");
  const _lastFrameTime = dart.privateName(flare_render_box, "_lastFrameTime");
  const _assets = dart.privateName(flare_render_box, "_assets");
  const _useIntrinsicSize = dart.privateName(flare_render_box, "_useIntrinsicSize");
  const _intrinsicSize = dart.privateName(flare_render_box, "_intrinsicSize");
  const _isLoading = dart.privateName(flare_render_box, "_isLoading");
  const _reloadQueued = dart.privateName(flare_render_box, "_reloadQueued");
  const _unload = dart.privateName(flare_render_box, "_unload");
  const _beginFrame = dart.privateName(flare_render_box, "_beginFrame");
  const _name = dart.privateName(box_fit, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  const _completeLoad = dart.privateName(flare_render_box, "_completeLoad");
  flare_render_box.FlareRenderBox = class FlareRenderBox extends box.RenderBox {
    get useIntrinsicSize() {
      return this[_useIntrinsicSize];
    }
    set useIntrinsicSize(value) {
      if (dart.equals(this[_useIntrinsicSize], value)) {
        return;
      }
      this[_useIntrinsicSize] = value;
      if (this.parent != null) {
        this.markNeedsLayoutForSizedByParentChange();
      }
    }
    get intrinsicSize() {
      return this[_intrinsicSize];
    }
    set intrinsicSize(value) {
      if (dart.equals(this[_intrinsicSize], value)) {
        return;
      }
      this[_intrinsicSize] = value;
      if (this.parent != null) {
        this.markNeedsLayoutForSizedByParentChange();
      }
    }
    get assetBundle() {
      return this[_assetBundle];
    }
    set assetBundle(value) {
      if (dart.equals(this[_assetBundle], value)) {
        return;
      }
      this[_assetBundle] = value;
      if (this[_assetBundle] != null && dart.test(this.attached)) {
        this.load();
      }
    }
    get fit() {
      return this[_fit];
    }
    set fit(value) {
      if (!dart.equals(value, this[_fit])) {
        this[_fit] = value;
        this.markNeedsPaint();
      }
    }
    updatePlayState() {
      if (dart.test(this.isPlaying) && dart.test(this.attached)) {
        this.markNeedsPaint();
      } else {
        this[_lastFrameTime] = 0.0;
        if (this[_frameCallbackID] != null) {
          binding.SchedulerBinding.instance.cancelFrameCallbackWithId(this[_frameCallbackID]);
        }
      }
    }
    get alignment() {
      return this[_alignment];
    }
    set alignment(value) {
      if (!dart.equals(value, this[_alignment])) {
        this[_alignment] = value;
        this.markNeedsPaint();
      }
    }
    get sizedByParent() {
      return !dart.test(this[_useIntrinsicSize]) || this[_intrinsicSize] == null;
    }
    performLayout() {
      if (!dart.test(this.sizedByParent)) {
        this.size = this.constraints.constrain(this[_intrinsicSize]);
      }
    }
    hitTestSelf(screenOffset) {
      return true;
    }
    performResize() {
      this.size = dart.test(this[_useIntrinsicSize]) ? this.constraints.smallest : this.constraints.biggest;
    }
    detach() {
      super.detach();
      this.dispose();
    }
    attach(owner) {
      object.PipelineOwner._check(owner);
      super.attach(owner);
      this.updatePlayState();
      if (dart.test(this[_assets][$isEmpty]) && this.assetBundle != null) {
        this.load();
      }
    }
    dispose() {
      this.updatePlayState();
      this[_unload]();
    }
    [_beginFrame](timestamp) {
      this[_frameCallbackID] = null;
      let t = dart.notNull(timestamp.inMicroseconds) / 1000 / 1000.0;
      let elapsedSeconds = this[_lastFrameTime] === 0.0 ? 0.0 : t - dart.notNull(this[_lastFrameTime]);
      this[_lastFrameTime] = t;
      this.advance(elapsedSeconds);
      if (!dart.test(this.isPlaying)) {
        this[_lastFrameTime] = 0.0;
      }
      this.markNeedsPaint();
    }
    prePaint(canvas, offset) {
    }
    postPaint(canvas, offset) {
    }
    paint(context, offset) {
      if (dart.test(this.isPlaying)) {
        if (this[_frameCallbackID] != null) {
          binding.SchedulerBinding.instance.cancelFrameCallbackWithId(this[_frameCallbackID]);
        }
        this[_frameCallbackID] = binding.SchedulerBinding.instance.scheduleFrameCallback(dart.bind(this, _beginFrame));
      }
      let canvas = context.canvas;
      let bounds = this.aabb;
      if (bounds != null) {
        let contentWidth = dart.notNull(bounds._get(2)) - dart.notNull(bounds._get(0));
        let contentHeight = dart.notNull(bounds._get(3)) - dart.notNull(bounds._get(1));
        let x = -1 * dart.notNull(bounds._get(0)) - contentWidth / 2.0 - dart.notNull(this[_alignment].x) * contentWidth / 2.0;
        let y = -1 * dart.notNull(bounds._get(1)) - contentHeight / 2.0 - dart.notNull(this[_alignment].y) * contentHeight / 2.0;
        let scaleX = 1.0;
        let scaleY = 1.0;
        canvas.save();
        this.prePaint(canvas, offset);
        switch (this[_fit]) {
          case C0 || CT.C0:
          {
            scaleX = dart.notNull(this.size.width) / contentWidth;
            scaleY = dart.notNull(this.size.height) / contentHeight;
            break;
          }
          case C1 || CT.C1:
          {
            let minScale = math.min(core.double, dart.notNull(this.size.width) / contentWidth, dart.notNull(this.size.height) / contentHeight);
            scaleX = scaleY = minScale;
            break;
          }
          case C2 || CT.C2:
          {
            let maxScale = math.max(core.double, dart.notNull(this.size.width) / contentWidth, dart.notNull(this.size.height) / contentHeight);
            scaleX = scaleY = maxScale;
            break;
          }
          case C3 || CT.C3:
          {
            let minScale = dart.notNull(this.size.height) / contentHeight;
            scaleX = scaleY = minScale;
            break;
          }
          case C4 || CT.C4:
          {
            let minScale = dart.notNull(this.size.width) / contentWidth;
            scaleX = scaleY = minScale;
            break;
          }
          case C5 || CT.C5:
          {
            scaleX = scaleY = 1.0;
            break;
          }
          case C6 || CT.C6:
          {
            let minScale = math.min(core.double, dart.notNull(this.size.width) / contentWidth, dart.notNull(this.size.height) / contentHeight);
            scaleX = scaleY = minScale < 1.0 ? minScale : 1.0;
            break;
          }
        }
        let transform = new mat2d.Mat2D.new();
        transform._set(4, dart.notNull(offset.dx) + dart.notNull(this.size.width) / 2.0 + dart.notNull(this[_alignment].x) * dart.notNull(this.size.width) / 2.0);
        transform._set(5, dart.notNull(offset.dy) + dart.notNull(this.size.height) / 2.0 + dart.notNull(this[_alignment].y) * dart.notNull(this.size.height) / 2.0);
        mat2d.Mat2D.scale(transform, transform, new vec2d.Vec2D.fromValues(scaleX, scaleY));
        let center = new mat2d.Mat2D.new();
        center._set(4, x);
        center._set(5, y);
        mat2d.Mat2D.multiply(transform, transform, center);
        canvas.translate(dart.notNull(offset.dx) + dart.notNull(this.size.width) / 2.0 + dart.notNull(this[_alignment].x) * dart.notNull(this.size.width) / 2.0, dart.notNull(offset.dy) + dart.notNull(this.size.height) / 2.0 + dart.notNull(this[_alignment].y) * dart.notNull(this.size.height) / 2.0);
        canvas.scale(scaleX, scaleY);
        canvas.translate(x, y);
        this.paintFlare(canvas, transform);
        canvas.restore();
        this.postPaint(canvas, offset);
      }
    }
    get isLoading() {
      return this[_isLoading];
    }
    warmLoad() {
      return false;
    }
    get canLoad() {
      return dart.test(this.attached) && this[_assetBundle] != null;
    }
    coldLoad() {
      return async.async(dart.void, function* coldLoad() {
      });
    }
    load() {
      if (!dart.test(this.canLoad)) {
        return;
      }
      if (dart.test(this[_isLoading])) {
        this[_reloadQueued] = true;
        return;
      }
      this[_isLoading] = true;
      this[_unload]();
      if (!dart.test(this.warmLoad())) {
        this.coldLoad().then(core.Null, dart.fn(_ => {
          this[_completeLoad]();
        }, voidToNull()));
      } else {
        this[_completeLoad]();
      }
    }
    [_completeLoad]() {
      this[_isLoading] = false;
      if (dart.test(this[_reloadQueued])) {
        this[_reloadQueued] = false;
        this.load();
      }
    }
    [_unload]() {
      for (let asset of this[_assets]) {
        asset.deref();
      }
      this[_assets].clear();
      this.onUnload();
    }
    onUnload() {
    }
    getWarmFlare(filename) {
      if (this.assetBundle == null || filename == null) {
        return null;
      }
      let asset = flare_cache.getWarmActor(this.assetBundle, filename);
      if (!dart.test(this.attached) || asset == null) {
        return null;
      }
      this[_assets].add(asset);
      asset.ref();
      return asset.actor;
    }
    loadFlare(filename) {
      return async.async(flare.FlutterActor, (function* loadFlare() {
        if (this.assetBundle == null || filename == null) {
          return null;
        }
        let asset = (yield flare_cache.cachedActor(this.assetBundle, filename));
        if (!dart.test(this.attached) || asset == null) {
          return null;
        }
        this[_assets].add(asset);
        asset.ref();
        return asset.actor;
      }).bind(this));
    }
  };
  (flare_render_box.FlareRenderBox.new = function() {
    this[_assetBundle] = null;
    this[_fit] = null;
    this[_alignment] = null;
    this[_frameCallbackID] = null;
    this[_lastFrameTime] = 0.0;
    this[_assets] = LinkedHashSetOfFlareCacheAsset().new();
    this[_useIntrinsicSize] = false;
    this[_intrinsicSize] = null;
    this[_isLoading] = false;
    this[_reloadQueued] = false;
    flare_render_box.FlareRenderBox.__proto__.new.call(this);
    ;
  }).prototype = flare_render_box.FlareRenderBox.prototype;
  dart.addTypeTests(flare_render_box.FlareRenderBox);
  dart.setMethodSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getMethods(flare_render_box.FlareRenderBox.__proto__),
    updatePlayState: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    [_beginFrame]: dart.fnType(dart.void, [core.Duration]),
    prePaint: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    postPaint: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    warmLoad: dart.fnType(core.bool, []),
    coldLoad: dart.fnType(async.Future$(dart.void), []),
    load: dart.fnType(dart.void, []),
    [_completeLoad]: dart.fnType(dart.void, []),
    [_unload]: dart.fnType(dart.void, []),
    onUnload: dart.fnType(dart.void, []),
    getWarmFlare: dart.fnType(flare.FlutterActor, [core.String]),
    loadFlare: dart.fnType(async.Future$(flare.FlutterActor), [core.String])
  }));
  dart.setGetterSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getGetters(flare_render_box.FlareRenderBox.__proto__),
    useIntrinsicSize: core.bool,
    intrinsicSize: ui.Size,
    assetBundle: asset_bundle.AssetBundle,
    fit: box_fit.BoxFit,
    alignment: alignment.Alignment,
    isLoading: core.bool,
    canLoad: core.bool
  }));
  dart.setSetterSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getSetters(flare_render_box.FlareRenderBox.__proto__),
    useIntrinsicSize: core.bool,
    intrinsicSize: ui.Size,
    assetBundle: asset_bundle.AssetBundle,
    fit: box_fit.BoxFit,
    alignment: alignment.Alignment
  }));
  dart.setLibraryUri(flare_render_box.FlareRenderBox, "package:flare_flutter/flare_render_box.dart");
  dart.setFieldSignature(flare_render_box.FlareRenderBox, () => ({
    __proto__: dart.getFields(flare_render_box.FlareRenderBox.__proto__),
    [_assetBundle]: dart.fieldType(asset_bundle.AssetBundle),
    [_fit]: dart.fieldType(box_fit.BoxFit),
    [_alignment]: dart.fieldType(alignment.Alignment),
    [_frameCallbackID]: dart.fieldType(core.int),
    [_lastFrameTime]: dart.fieldType(core.double),
    [_assets]: dart.finalFieldType(core.Set$(flare_cache_asset.FlareCacheAsset)),
    [_useIntrinsicSize]: dart.fieldType(core.bool),
    [_intrinsicSize]: dart.fieldType(ui.Size),
    [_isLoading]: dart.fieldType(core.bool),
    [_reloadQueued]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/flare_flutter/flare_render_box", {
    "package:flare_flutter/flare_render_box.dart": flare_render_box
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flare_render_box.dart"],"names":[],"mappings":"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","file":"flare_render_box.ddc.js"}');
  // Exports:
  return {
    flare_render_box: flare_render_box
  };
});

//# sourceMappingURL=flare_render_box.ddc.js.map
