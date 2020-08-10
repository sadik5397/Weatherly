define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const block_reader = Object.create(dart.library);
  const binary_reader = Object.create(dart.library);
  const stream_reader = Object.create(dart.library);
  const json_block_reader = Object.create(dart.library);
  const json_reader = Object.create(dart.library);
  const $offsetInBytes = dartx.offsetInBytes;
  const $buffer = dartx.buffer;
  const $asByteData = dartx.asByteData;
  const $getFloat32 = dartx.getFloat32;
  const $getFloat64 = dartx.getFloat64;
  const $getUint8 = dartx.getUint8;
  const $lengthInBytes = dartx.lengthInBytes;
  const $getInt8 = dartx.getInt8;
  const $getUint16 = dartx.getUint16;
  const $_set = dartx._set;
  const $getInt16 = dartx.getInt16;
  const $getUint32 = dartx.getUint32;
  const $getInt32 = dartx.getInt32;
  const $rightShift = dartx['>>'];
  const $asUint8List = dartx.asUint8List;
  const $remove = dartx.remove;
  const $removeAt = dartx.removeAt;
  const $_get = dartx._get;
  const $toDouble = dartx.toDouble;
  const $length = dartx.length;
  const $first = dartx.first;
  const $toInt = dartx.toInt;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: convert.Base64Decoder.prototype
      });
    }
  });
  const _raw = dart.privateName(binary_reader, "_raw");
  const _readIndex = dart.privateName(binary_reader, "_readIndex");
  binary_reader.BinaryReader = class BinaryReader extends core.Object {
    get raw() {
      return this[_raw];
    }
    get readIndex() {
      return this[_readIndex];
    }
    readBytes(length) {
      let offset = dart.notNull(this[_readIndex]) + dart.notNull(this.raw[$offsetInBytes]);
      this[_readIndex] = dart.notNull(this[_readIndex]) + dart.notNull(length);
      return this.raw[$buffer][$asByteData](offset, length);
    }
    readFloat32(label) {
      if (label === void 0) label = null;
      let value = this[_raw][$getFloat32](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = dart.notNull(this[_readIndex]) + 4;
      return value;
    }
    readFloat64(label) {
      if (label === void 0) label = null;
      let value = this[_raw][$getFloat64](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = dart.notNull(this[_readIndex]) + 8;
      return value;
    }
    readUint8(label) {
      let t0;
      if (label === void 0) label = null;
      return this[_raw][$getUint8]((t0 = this[_readIndex], this[_readIndex] = dart.notNull(t0) + 1, t0));
    }
    isEOF() {
      return dart.notNull(this[_readIndex]) >= dart.notNull(this[_raw][$lengthInBytes]);
    }
    readInt8(label) {
      let t0;
      if (label === void 0) label = null;
      return this[_raw][$getInt8]((t0 = this[_readIndex], this[_readIndex] = dart.notNull(t0) + 1, t0));
    }
    readUint16(label) {
      if (label === void 0) label = null;
      let value = this[_raw][$getUint16](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = dart.notNull(this[_readIndex]) + 2;
      return value;
    }
    readUint16Array(length, label) {
      if (label === void 0) label = null;
      let list = _native_typed_data.NativeUint16List.new(length);
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        list[$_set](i, this[_raw][$getUint16](this[_readIndex], typed_data.Endian.little));
        this[_readIndex] = dart.notNull(this[_readIndex]) + 2;
      }
      return list;
    }
    readInt16(label) {
      if (label === void 0) label = null;
      let value = this[_raw][$getInt16](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = dart.notNull(this[_readIndex]) + 2;
      return value;
    }
    readUint32(label) {
      if (label === void 0) label = null;
      let value = this[_raw][$getUint32](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = dart.notNull(this[_readIndex]) + 4;
      return value;
    }
    readInt32(label) {
      if (label === void 0) label = null;
      let value = this[_raw][$getInt32](this[_readIndex], typed_data.Endian.little);
      this[_readIndex] = dart.notNull(this[_readIndex]) + 4;
      return value;
    }
    readString(label) {
      if (label === void 0) label = null;
      let length = this.readUint32();
      let end = dart.notNull(this[_readIndex]) + dart.notNull(length);
      let stringBuffer = new core.StringBuffer.new();
      while (dart.notNull(this[_readIndex]) < end) {
        let c1 = this.readUint8();
        if (dart.notNull(c1) < 128) {
          stringBuffer.writeCharCode(c1);
        } else if (dart.notNull(c1) > 191 && dart.notNull(c1) < 224) {
          let c2 = this.readUint8();
          stringBuffer.writeCharCode((dart.notNull(c1) & 31) << 6 | dart.notNull(c2) & 63);
        } else if (dart.notNull(c1) > 239 && dart.notNull(c1) < 365) {
          let c2 = this.readUint8();
          let c3 = this.readUint8();
          let c4 = this.readUint8();
          let u = ((dart.notNull(c1) & 7) << 18 | (dart.notNull(c2) & 63) << 12 | (dart.notNull(c3) & 63) << 6 | dart.notNull(c4) & 63) - 65536;
          stringBuffer.writeCharCode(55296 + u[$rightShift](10));
          stringBuffer.writeCharCode(56320 + (u & 1023));
        } else {
          let c2 = this.readUint8();
          let c3 = this.readUint8();
          stringBuffer.writeCharCode((dart.notNull(c1) & 15) << 12 | (dart.notNull(c2) & 63) << 6 | dart.notNull(c3) & 63);
        }
      }
      return stringBuffer.toString();
    }
    readUint8Array(length, label) {
      if (label === void 0) label = null;
      let offset = dart.notNull(this[_readIndex]) + dart.notNull(this[_raw][$offsetInBytes]);
      this[_readIndex] = dart.notNull(this[_readIndex]) + dart.notNull(length);
      return this[_raw][$buffer][$asUint8List](offset, length);
    }
    readVersion() {
      return this.readUint32();
    }
    readUint8Length() {
      return this.readUint8();
    }
    readUint32Length() {
      return this.readUint32();
    }
    readUint16Length() {
      return this.readUint16();
    }
    readId(label) {
      return this.readUint16(label);
    }
    readFloat32Array(length, label) {
      let list = _native_typed_data.NativeFloat32List.new(length);
      for (let i = 0; i < dart.notNull(length); i = i + 1) {
        list[$_set](i, this[_raw][$getFloat32](this[_readIndex], typed_data.Endian.little));
        this[_readIndex] = dart.notNull(this[_readIndex]) + 4;
      }
      return list;
    }
    readBool(label) {
      return this.readUint8(label) === 1;
    }
    readAsset() {
      let length = this.readUint32();
      return this.readUint8Array(length);
    }
    openArray(label) {
    }
    closeArray() {
    }
    openObject(label) {
    }
    closeObject() {
    }
    get containerType() {
      return "bin";
    }
  };
  (binary_reader.BinaryReader.new = function(data) {
    this[_raw] = null;
    this[_readIndex] = null;
    this[_raw] = data;
    this[_readIndex] = 0;
  }).prototype = binary_reader.BinaryReader.prototype;
  dart.addTypeTests(binary_reader.BinaryReader);
  binary_reader.BinaryReader[dart.implements] = () => [stream_reader.StreamReader];
  dart.setMethodSignature(binary_reader.BinaryReader, () => ({
    __proto__: dart.getMethods(binary_reader.BinaryReader.__proto__),
    readBytes: dart.fnType(typed_data.ByteData, [core.int]),
    readFloat32: dart.fnType(core.double, [], [core.String]),
    readFloat64: dart.fnType(core.double, [], [core.String]),
    readUint8: dart.fnType(core.int, [], [core.String]),
    isEOF: dart.fnType(core.bool, []),
    readInt8: dart.fnType(core.int, [], [core.String]),
    readUint16: dart.fnType(core.int, [], [core.String]),
    readUint16Array: dart.fnType(typed_data.Uint16List, [core.int], [core.String]),
    readInt16: dart.fnType(core.int, [], [core.String]),
    readUint32: dart.fnType(core.int, [], [core.String]),
    readInt32: dart.fnType(core.int, [], [core.String]),
    readString: dart.fnType(core.String, [], [core.String]),
    readUint8Array: dart.fnType(typed_data.Uint8List, [core.int], [core.String]),
    readVersion: dart.fnType(core.int, []),
    readUint8Length: dart.fnType(core.int, []),
    readUint32Length: dart.fnType(core.int, []),
    readUint16Length: dart.fnType(core.int, []),
    readId: dart.fnType(core.int, [core.String]),
    readFloat32Array: dart.fnType(typed_data.Float32List, [core.int, core.String]),
    readBool: dart.fnType(core.bool, [core.String]),
    readAsset: dart.fnType(typed_data.Uint8List, []),
    openArray: dart.fnType(dart.void, [core.String]),
    closeArray: dart.fnType(dart.void, []),
    openObject: dart.fnType(dart.void, [core.String]),
    closeObject: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(binary_reader.BinaryReader, () => ({
    __proto__: dart.getGetters(binary_reader.BinaryReader.__proto__),
    raw: typed_data.ByteData,
    readIndex: core.int,
    containerType: core.String
  }));
  dart.setLibraryUri(binary_reader.BinaryReader, "package:flare_dart/binary_reader.dart");
  dart.setFieldSignature(binary_reader.BinaryReader, () => ({
    __proto__: dart.getFields(binary_reader.BinaryReader.__proto__),
    [_raw]: dart.fieldType(typed_data.ByteData),
    [_readIndex]: dart.fieldType(core.int)
  }));
  const blockType$ = dart.privateName(block_reader, "BlockReader.blockType");
  block_reader.BlockReader = class BlockReader extends binary_reader.BinaryReader {
    get blockType() {
      return this[blockType$];
    }
    set blockType(value) {
      this[blockType$] = value;
    }
    readNextBlock(types) {
      if (dart.test(this.isEOF())) {
        return null;
      }
      let blockType = this.readUint8();
      let length = this.readUint32();
      return new block_reader.BlockReader.fromBlock(blockType, this.readBytes(length));
    }
  };
  (block_reader.BlockReader.new = function(data) {
    this[blockType$] = null;
    block_reader.BlockReader.__proto__.new.call(this, data);
    this.blockType = 0;
  }).prototype = block_reader.BlockReader.prototype;
  (block_reader.BlockReader.fromBlock = function(blockType, stream) {
    this[blockType$] = blockType;
    block_reader.BlockReader.__proto__.new.call(this, stream);
    ;
  }).prototype = block_reader.BlockReader.prototype;
  dart.addTypeTests(block_reader.BlockReader);
  dart.setMethodSignature(block_reader.BlockReader, () => ({
    __proto__: dart.getMethods(block_reader.BlockReader.__proto__),
    readNextBlock: dart.fnType(block_reader.BlockReader, [core.Map$(core.String, core.int)])
  }));
  dart.setLibraryUri(block_reader.BlockReader, "package:flare_dart/block_reader.dart");
  dart.setFieldSignature(block_reader.BlockReader, () => ({
    __proto__: dart.getFields(block_reader.BlockReader.__proto__),
    blockType: dart.fieldType(core.int)
  }));
  const blockType = dart.privateName(stream_reader, "StreamReader.blockType");
  stream_reader.StreamReader = class StreamReader extends core.Object {
    get blockType() {
      return this[blockType];
    }
    set blockType(value) {
      this[blockType] = value;
    }
    static new(data) {
      let reader = null;
      if (typed_data.ByteData.is(data)) {
        reader = new block_reader.BlockReader.new(data);
        reader.readUint8("F");
        reader.readUint8("L");
        reader.readUint8("A");
        reader.readUint8("R");
        reader.readUint8("E");
      } else if (core.Map.is(data)) {
        reader = new json_block_reader.JSONBlockReader.new(data);
      }
      return reader;
    }
  };
  (stream_reader.StreamReader[dart.mixinNew] = function() {
    this[blockType] = 0;
  }).prototype = stream_reader.StreamReader.prototype;
  dart.addTypeTests(stream_reader.StreamReader);
  dart.setLibraryUri(stream_reader.StreamReader, "package:flare_dart/stream_reader.dart");
  dart.setFieldSignature(stream_reader.StreamReader, () => ({
    __proto__: dart.getFields(stream_reader.StreamReader.__proto__),
    blockType: dart.fieldType(core.int)
  }));
  const _peek = dart.privateName(json_block_reader, "_peek");
  const _readObject = dart.privateName(json_reader, "_readObject");
  const _context = dart.privateName(json_reader, "_context");
  const _readArray = dart.privateName(json_reader, "_readArray");
  const _readLength = dart.privateName(json_reader, "_readLength");
  let C0;
  const blockType$0 = dart.privateName(json_reader, "JSONReader.blockType");
  json_reader.JSONReader = class JSONReader extends core.Object {
    get blockType() {
      return this[blockType$0];
    }
    set blockType(value) {
      this[blockType$0] = value;
    }
    readProp(T, label) {
      let head = this[_context].first;
      if (core.Map.is(head)) {
        let prop = head[$_get](label);
        head[$remove](label);
        if (T.is(prop)) {
          return prop;
        } else {
          return null;
        }
      } else if (core.List.is(head)) {
        let prop = head[$removeAt](0);
        if (T.is(prop)) {
          return prop;
        } else {
          return null;
        }
      }
      return null;
    }
    readFloat32(label) {
      let t0, t0$;
      let f = this.readProp(core.num, label);
      t0$ = (t0 = f, t0 == null ? null : t0[$toDouble]());
      return t0$ == null ? 0.0 : t0$;
    }
    readFloat32Array(length, label) {
      let ar = _native_typed_data.NativeFloat32List.new(length);
      this[_readArray](ar, label);
      return ar;
    }
    [_readArray](ar, label) {
      let array = this.readProp(core.List, label);
      if (array == null) {
        return;
      }
      for (let i = 0; i < dart.notNull(ar[$length]); i = i + 1) {
        let val = core.num.as(array[$_get](i));
        ar[$_set](i, typeof ar[$first] == 'number' ? val[$toDouble]() : val[$toInt]());
      }
    }
    readFloat64(label) {
      let t0, t0$;
      let f = this.readProp(core.num, label);
      t0$ = (t0 = f, t0 == null ? null : t0[$toDouble]());
      return t0$ == null ? 0.0 : t0$;
    }
    readUint8(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint8Length() {
      return this[_readLength]();
    }
    isEOF() {
      return dart.notNull(this[_context].length) <= 1 && dart.equals(dart.dload(this[_readObject], 'length'), 0);
    }
    readInt8(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint16(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint8Array(length, label) {
      let ar = _native_typed_data.NativeUint8List.new(length);
      this[_readArray](ar, label);
      return ar;
    }
    readUint16Array(length, label) {
      let ar = _native_typed_data.NativeUint16List.new(length);
      this[_readArray](ar, label);
      return ar;
    }
    readInt16(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readUint16Length() {
      return this[_readLength]();
    }
    readUint32Length() {
      return this[_readLength]();
    }
    readUint32(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readInt32(label) {
      let t0;
      t0 = this.readProp(core.int, label);
      return t0 == null ? 0 : t0;
    }
    readVersion() {
      let t0;
      t0 = this.readProp(core.int, "version");
      return t0 == null ? 0 : t0;
    }
    readString(label) {
      let t0;
      t0 = this.readProp(core.String, label);
      return t0 == null ? "" : t0;
    }
    readBool(label) {
      let t0;
      t0 = this.readProp(core.bool, label);
      return t0 == null ? false : t0;
    }
    readId(label) {
      let val = this.readProp(core.num, label);
      return val != null ? val[$toInt]() + 1 : 0;
    }
    openArray(label) {
      let array = this.readProp(dart.dynamic, label);
      this[_context].addFirst(array);
    }
    closeArray() {
      this[_context].removeFirst();
    }
    openObject(label) {
      let o = this.readProp(dart.dynamic, label);
      this[_context].addFirst(o);
    }
    closeObject() {
      this[_context].removeFirst();
    }
    [_readLength]() {
      if (core.List.is(this[_context].first)) {
        return core.List.as(this[_context].first)[$length];
      } else if (core.Map.is(this[_context].first)) {
        return core.Map.as(this[_context].first)[$length];
      }
      return 0;
    }
    readAsset() {
      let encodedAsset = this.readString("data");
      return (C0 || CT.C0).convert(encodedAsset, 22);
    }
    get containerType() {
      return "json";
    }
    get context() {
      return this[_context];
    }
  };
  (json_reader.JSONReader.new = function(object) {
    this[blockType$0] = null;
    this[_readObject] = null;
    this[_context] = null;
    this[_readObject] = object[$_get]("container");
    this[_context] = new collection.ListQueue.new();
    this[_context].addFirst(this[_readObject]);
  }).prototype = json_reader.JSONReader.prototype;
  dart.addTypeTests(json_reader.JSONReader);
  json_reader.JSONReader[dart.implements] = () => [stream_reader.StreamReader];
  dart.setMethodSignature(json_reader.JSONReader, () => ({
    __proto__: dart.getMethods(json_reader.JSONReader.__proto__),
    readProp: dart.gFnType(T => [T, [core.String]]),
    readFloat32: dart.fnType(core.double, [core.String]),
    readFloat32Array: dart.fnType(typed_data.Float32List, [core.int, core.String]),
    [_readArray]: dart.fnType(dart.void, [core.List, core.String]),
    readFloat64: dart.fnType(core.double, [core.String]),
    readUint8: dart.fnType(core.int, [core.String]),
    readUint8Length: dart.fnType(core.int, []),
    isEOF: dart.fnType(core.bool, []),
    readInt8: dart.fnType(core.int, [core.String]),
    readUint16: dart.fnType(core.int, [core.String]),
    readUint8Array: dart.fnType(typed_data.Uint8List, [core.int, core.String]),
    readUint16Array: dart.fnType(typed_data.Uint16List, [core.int, core.String]),
    readInt16: dart.fnType(core.int, [core.String]),
    readUint16Length: dart.fnType(core.int, []),
    readUint32Length: dart.fnType(core.int, []),
    readUint32: dart.fnType(core.int, [core.String]),
    readInt32: dart.fnType(core.int, [core.String]),
    readVersion: dart.fnType(core.int, []),
    readString: dart.fnType(core.String, [core.String]),
    readBool: dart.fnType(core.bool, [core.String]),
    readId: dart.fnType(core.int, [core.String]),
    openArray: dart.fnType(dart.void, [core.String]),
    closeArray: dart.fnType(dart.void, []),
    openObject: dart.fnType(dart.void, [core.String]),
    closeObject: dart.fnType(dart.void, []),
    [_readLength]: dart.fnType(core.int, []),
    readAsset: dart.fnType(typed_data.Uint8List, [])
  }));
  dart.setGetterSignature(json_reader.JSONReader, () => ({
    __proto__: dart.getGetters(json_reader.JSONReader.__proto__),
    containerType: core.String,
    context: collection.ListQueue
  }));
  dart.setLibraryUri(json_reader.JSONReader, "package:flare_dart/json_reader.dart");
  dart.setFieldSignature(json_reader.JSONReader, () => ({
    __proto__: dart.getFields(json_reader.JSONReader.__proto__),
    blockType: dart.fieldType(core.int),
    [_readObject]: dart.fieldType(dart.dynamic),
    [_context]: dart.fieldType(collection.ListQueue)
  }));
  json_block_reader.JSONBlockReader = class JSONBlockReader extends json_reader.JSONReader {
    readNextBlock(blockTypes) {
      if (blockTypes === void 0) blockTypes = null;
      if (dart.test(this.isEOF())) {
        return null;
      }
      let obj = new _js_helper.LinkedMap.new();
      obj[$_set]("container", this[_peek]());
      let type = this.readBlockType(blockTypes);
      let c = this.context.first;
      if (core.Map.is(c)) {
        c[$remove](this.nextKey);
      } else if (core.List.is(c)) {
        c[$removeAt](0);
      }
      return new json_block_reader.JSONBlockReader.fromObject(type, obj);
    }
    readBlockType(blockTypes) {
      let next = this[_peek]();
      let bType = null;
      if (core.Map.is(next)) {
        let c = this.context.first;
        if (core.Map.is(c)) {
          bType = blockTypes[$_get](this.nextKey);
        } else if (core.List.is(c)) {
          let nType = next[$_get]("type");
          bType = blockTypes[$_get](nType);
        }
      } else if (core.List.is(next)) {
        bType = blockTypes[$_get](this.nextKey);
      }
      return bType;
    }
    [_peek]() {
      let stream = this.context.first;
      let next = null;
      if (core.Map.is(stream)) {
        next = stream[$_get](this.nextKey);
      } else if (core.List.is(stream)) {
        next = stream[$_get](0);
      }
      return next;
    }
    get nextKey() {
      return dart.dload(dart.dload(this.context.first, 'keys'), 'first');
    }
  };
  (json_block_reader.JSONBlockReader.new = function(object) {
    json_block_reader.JSONBlockReader.__proto__.new.call(this, object);
    ;
  }).prototype = json_block_reader.JSONBlockReader.prototype;
  (json_block_reader.JSONBlockReader.fromObject = function(type, object) {
    json_block_reader.JSONBlockReader.__proto__.new.call(this, object);
    this.blockType = type;
  }).prototype = json_block_reader.JSONBlockReader.prototype;
  dart.addTypeTests(json_block_reader.JSONBlockReader);
  dart.setMethodSignature(json_block_reader.JSONBlockReader, () => ({
    __proto__: dart.getMethods(json_block_reader.JSONBlockReader.__proto__),
    readNextBlock: dart.fnType(json_block_reader.JSONBlockReader, [], [core.Map$(core.String, core.int)]),
    readBlockType: dart.fnType(core.int, [core.Map$(core.String, core.int)]),
    [_peek]: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(json_block_reader.JSONBlockReader, () => ({
    __proto__: dart.getGetters(json_block_reader.JSONBlockReader.__proto__),
    nextKey: dart.dynamic
  }));
  dart.setLibraryUri(json_block_reader.JSONBlockReader, "package:flare_dart/json_block_reader.dart");
  dart.trackLibraries("packages/flare_dart/binary_reader", {
    "package:flare_dart/block_reader.dart": block_reader,
    "package:flare_dart/binary_reader.dart": binary_reader,
    "package:flare_dart/stream_reader.dart": stream_reader,
    "package:flare_dart/json_block_reader.dart": json_block_reader,
    "package:flare_dart/json_reader.dart": json_reader
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["binary_reader.dart","block_reader.dart","stream_reader.dart","json_reader.dart","json_block_reader.dart"],"names":[],"mappings":"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","file":"binary_reader.ddc.js"}');
  // Exports:
  return {
    block_reader: block_reader,
    binary_reader: binary_reader,
    stream_reader: stream_reader,
    json_block_reader: json_block_reader,
    json_reader: json_reader
  };
});

//# sourceMappingURL=binary_reader.ddc.js.map
