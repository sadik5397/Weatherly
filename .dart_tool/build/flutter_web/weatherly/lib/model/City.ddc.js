define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const City = Object.create(dart.library);
  const $_get = dartx._get;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  const City_id = dart.privateName(City, "City.id");
  const City_name = dart.privateName(City, "City.name");
  const City_country = dart.privateName(City, "City.country");
  const City_coord = dart.privateName(City, "City.coord");
  City.City = class City$ extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      this[id$] = value;
    }
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    get country() {
      return this[country$];
    }
    set country(value) {
      this[country$] = value;
    }
    get coord() {
      return this[coord$];
    }
    set coord(value) {
      this[coord$] = value;
    }
    static fromJson(json) {
      return new City.City.new({id: core.int._check(json[$_get]("id")), name: core.String._check(json[$_get]("name")), country: core.String._check(json[$_get]("country")), coord: City.Coord.fromJson(MapOfString$dynamic()._check(json[$_get]("coord")))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["id", this.id, "name", this.name, "country", this.country, "coord", this.coord.toJson()]);
    }
  };
  (City.City.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let country = opts && 'country' in opts ? opts.country : null;
    let coord = opts && 'coord' in opts ? opts.coord : null;
    this[id$] = id;
    this[name$] = name;
    this[country$] = country;
    this[coord$] = coord;
    ;
  }).prototype = City.City.prototype;
  dart.addTypeTests(City.City);
  const id$ = City_id;
  const name$ = City_name;
  const country$ = City_country;
  const coord$ = City_coord;
  dart.setMethodSignature(City.City, () => ({
    __proto__: dart.getMethods(City.City.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(City.City, "package:weatherly/model/City.dart");
  dart.setFieldSignature(City.City, () => ({
    __proto__: dart.getFields(City.City.__proto__),
    id: dart.fieldType(core.int),
    name: dart.fieldType(core.String),
    country: dart.fieldType(core.String),
    coord: dart.fieldType(City.Coord)
  }));
  const Coord_lon = dart.privateName(City, "Coord.lon");
  const Coord_lat = dart.privateName(City, "Coord.lat");
  City.Coord = class Coord extends core.Object {
    get lon() {
      return this[lon$];
    }
    set lon(value) {
      this[lon$] = value;
    }
    get lat() {
      return this[lat$];
    }
    set lat(value) {
      this[lat$] = value;
    }
    static fromJson(json) {
      return new City.Coord.new({lon: core.double._check(dart.dsend(json[$_get]("lon"), 'toDouble', [])), lat: core.double._check(dart.dsend(json[$_get]("lat"), 'toDouble', []))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["lon", this.lon, "lat", this.lat]);
    }
  };
  (City.Coord.new = function(opts) {
    let lon = opts && 'lon' in opts ? opts.lon : null;
    let lat = opts && 'lat' in opts ? opts.lat : null;
    this[lon$] = lon;
    this[lat$] = lat;
    ;
  }).prototype = City.Coord.prototype;
  dart.addTypeTests(City.Coord);
  const lon$ = Coord_lon;
  const lat$ = Coord_lat;
  dart.setMethodSignature(City.Coord, () => ({
    __proto__: dart.getMethods(City.Coord.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(City.Coord, "package:weatherly/model/City.dart");
  dart.setFieldSignature(City.Coord, () => ({
    __proto__: dart.getFields(City.Coord.__proto__),
    lon: dart.fieldType(core.double),
    lat: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/weatherly/model/City", {
    "package:weatherly/model/City.dart": City
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["City.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IACM;;;;;;IACG;;;;;;IACA;;;;;;IACD;;;;;;oBASqC;AAAS,oDAC9C,AAAI,IAAA,QAAC,iCACH,AAAI,IAAA,QAAC,sCACF,AAAI,IAAA,QAAC,oBACD,iDAAS,AAAI,IAAA,QAAC;IAC5B;;AAEgC,uDAC/B,MAAM,SACN,QAAQ,WACR,WAAW,cACX,SAAS,AAAM;IAChB;;;QAlBM;QACA;QACA;QACA;IAHA;IACA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;IAkBK;;;;;;IACA;;;;;;oBAOqC;AAAS,yDAClC,WAAZ,AAAI,IAAA,QAAC,kDACO,WAAZ,AAAI,IAAA,QAAC;IACX;;AAEgC,uDAC/B,OAAO,UACP,OAAO;IACR;;;QAZM;QACA;IADA;IACA;;EACL","file":"City.ddc.js"}');
  // Exports:
  return {
    model__City: City
  };
});

//# sourceMappingURL=City.ddc.js.map
