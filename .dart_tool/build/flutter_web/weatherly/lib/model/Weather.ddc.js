define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Weather = Object.create(dart.library);
  const $_get = dartx._get;
  const $map = dartx.map;
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ListOfWeatherElement = () => (ListOfWeatherElement = dart.constFn(core.List$(Weather.WeatherElement)))();
  let dynamicToWeatherElement = () => (dynamicToWeatherElement = dart.constFn(dart.fnType(Weather.WeatherElement, [dart.dynamic])))();
  let WeatherElementToMapOfString$dynamic = () => (WeatherElementToMapOfString$dynamic = dart.constFn(dart.fnType(MapOfString$dynamic(), [Weather.WeatherElement])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  const Weather_coord = dart.privateName(Weather, "Weather.coord");
  const Weather_weather = dart.privateName(Weather, "Weather.weather");
  const Weather_base = dart.privateName(Weather, "Weather.base");
  const Weather_main = dart.privateName(Weather, "Weather.main");
  const Weather_wind = dart.privateName(Weather, "Weather.wind");
  const Weather_clouds = dart.privateName(Weather, "Weather.clouds");
  const Weather_dt = dart.privateName(Weather, "Weather.dt");
  const Weather_sys = dart.privateName(Weather, "Weather.sys");
  const Weather_timezone = dart.privateName(Weather, "Weather.timezone");
  const Weather_id = dart.privateName(Weather, "Weather.id");
  const Weather_name = dart.privateName(Weather, "Weather.name");
  const Weather_cod = dart.privateName(Weather, "Weather.cod");
  Weather.Weather = class Weather$ extends core.Object {
    get coord() {
      return this[coord$];
    }
    set coord(value) {
      this[coord$] = value;
    }
    get weather() {
      return this[weather$];
    }
    set weather(value) {
      this[weather$] = value;
    }
    get base() {
      return this[base$];
    }
    set base(value) {
      this[base$] = value;
    }
    get main() {
      return this[main$];
    }
    set main(value) {
      this[main$] = value;
    }
    get wind() {
      return this[wind$];
    }
    set wind(value) {
      this[wind$] = value;
    }
    get clouds() {
      return this[clouds$];
    }
    set clouds(value) {
      this[clouds$] = value;
    }
    get dt() {
      return this[dt$];
    }
    set dt(value) {
      this[dt$] = value;
    }
    get sys() {
      return this[sys$];
    }
    set sys(value) {
      this[sys$] = value;
    }
    get timezone() {
      return this[timezone$];
    }
    set timezone(value) {
      this[timezone$] = value;
    }
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
    get cod() {
      return this[cod$];
    }
    set cod(value) {
      this[cod$] = value;
    }
    static fromJson(json) {
      return new Weather.Weather.new({coord: Weather.Coord.fromJson(MapOfString$dynamic()._check(json[$_get]("coord"))), weather: ListOfWeatherElement().from(core.Iterable._check(dart.dsend(json[$_get]("weather"), 'map', [dart.fn(x => Weather.WeatherElement.fromJson(MapOfString$dynamic()._check(x)), dynamicToWeatherElement())]))), base: core.String._check(json[$_get]("base")), main: Weather.Main.fromJson(MapOfString$dynamic()._check(json[$_get]("main"))), wind: Weather.Wind.fromJson(MapOfString$dynamic()._check(json[$_get]("wind"))), clouds: Weather.Clouds.fromJson(MapOfString$dynamic()._check(json[$_get]("clouds"))), dt: core.int._check(json[$_get]("dt")), sys: Weather.Sys.fromJson(MapOfString$dynamic()._check(json[$_get]("sys"))), timezone: core.int._check(json[$_get]("timezone")), id: core.int._check(json[$_get]("id")), name: core.String._check(json[$_get]("name")), cod: core.int._check(json[$_get]("cod"))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["coord", this.coord.toJson(), "weather", core.List.from(this.weather[$map](dart.dynamic, dart.fn(x => x.toJson(), WeatherElementToMapOfString$dynamic()))), "base", this.base, "main", this.main.toJson(), "wind", this.wind.toJson(), "clouds", this.clouds.toJson(), "dt", this.dt, "sys", this.sys.toJson(), "timezone", this.timezone, "id", this.id, "name", this.name, "cod", this.cod]);
    }
  };
  (Weather.Weather.new = function(opts) {
    let coord = opts && 'coord' in opts ? opts.coord : null;
    let weather = opts && 'weather' in opts ? opts.weather : null;
    let base = opts && 'base' in opts ? opts.base : null;
    let main = opts && 'main' in opts ? opts.main : null;
    let wind = opts && 'wind' in opts ? opts.wind : null;
    let clouds = opts && 'clouds' in opts ? opts.clouds : null;
    let dt = opts && 'dt' in opts ? opts.dt : null;
    let sys = opts && 'sys' in opts ? opts.sys : null;
    let timezone = opts && 'timezone' in opts ? opts.timezone : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let name = opts && 'name' in opts ? opts.name : null;
    let cod = opts && 'cod' in opts ? opts.cod : null;
    this[coord$] = coord;
    this[weather$] = weather;
    this[base$] = base;
    this[main$] = main;
    this[wind$] = wind;
    this[clouds$] = clouds;
    this[dt$] = dt;
    this[sys$] = sys;
    this[timezone$] = timezone;
    this[id$] = id;
    this[name$] = name;
    this[cod$] = cod;
    ;
  }).prototype = Weather.Weather.prototype;
  dart.addTypeTests(Weather.Weather);
  const coord$ = Weather_coord;
  const weather$ = Weather_weather;
  const base$ = Weather_base;
  const main$ = Weather_main;
  const wind$ = Weather_wind;
  const clouds$ = Weather_clouds;
  const dt$ = Weather_dt;
  const sys$ = Weather_sys;
  const timezone$ = Weather_timezone;
  const id$ = Weather_id;
  const name$ = Weather_name;
  const cod$ = Weather_cod;
  dart.setMethodSignature(Weather.Weather, () => ({
    __proto__: dart.getMethods(Weather.Weather.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(Weather.Weather, "package:weatherly/model/Weather.dart");
  dart.setFieldSignature(Weather.Weather, () => ({
    __proto__: dart.getFields(Weather.Weather.__proto__),
    coord: dart.fieldType(Weather.Coord),
    weather: dart.fieldType(core.List$(Weather.WeatherElement)),
    base: dart.fieldType(core.String),
    main: dart.fieldType(Weather.Main),
    wind: dart.fieldType(Weather.Wind),
    clouds: dart.fieldType(Weather.Clouds),
    dt: dart.fieldType(core.int),
    sys: dart.fieldType(Weather.Sys),
    timezone: dart.fieldType(core.int),
    id: dart.fieldType(core.int),
    name: dart.fieldType(core.String),
    cod: dart.fieldType(core.int)
  }));
  const Clouds_all = dart.privateName(Weather, "Clouds.all");
  Weather.Clouds = class Clouds extends core.Object {
    get all() {
      return this[all$];
    }
    set all(value) {
      this[all$] = value;
    }
    static fromJson(json) {
      return new Weather.Clouds.new({all: core.int._check(json[$_get]("all"))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["all", this.all]);
    }
  };
  (Weather.Clouds.new = function(opts) {
    let all = opts && 'all' in opts ? opts.all : null;
    this[all$] = all;
    ;
  }).prototype = Weather.Clouds.prototype;
  dart.addTypeTests(Weather.Clouds);
  const all$ = Clouds_all;
  dart.setMethodSignature(Weather.Clouds, () => ({
    __proto__: dart.getMethods(Weather.Clouds.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(Weather.Clouds, "package:weatherly/model/Weather.dart");
  dart.setFieldSignature(Weather.Clouds, () => ({
    __proto__: dart.getFields(Weather.Clouds.__proto__),
    all: dart.fieldType(core.int)
  }));
  const Coord_lon = dart.privateName(Weather, "Coord.lon");
  const Coord_lat = dart.privateName(Weather, "Coord.lat");
  Weather.Coord = class Coord extends core.Object {
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
      return new Weather.Coord.new({lon: core.double._check(dart.dsend(json[$_get]("lon"), 'toDouble', [])), lat: core.double._check(dart.dsend(json[$_get]("lat"), 'toDouble', []))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["lon", this.lon, "lat", this.lat]);
    }
  };
  (Weather.Coord.new = function(opts) {
    let lon = opts && 'lon' in opts ? opts.lon : null;
    let lat = opts && 'lat' in opts ? opts.lat : null;
    this[lon$] = lon;
    this[lat$] = lat;
    ;
  }).prototype = Weather.Coord.prototype;
  dart.addTypeTests(Weather.Coord);
  const lon$ = Coord_lon;
  const lat$ = Coord_lat;
  dart.setMethodSignature(Weather.Coord, () => ({
    __proto__: dart.getMethods(Weather.Coord.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(Weather.Coord, "package:weatherly/model/Weather.dart");
  dart.setFieldSignature(Weather.Coord, () => ({
    __proto__: dart.getFields(Weather.Coord.__proto__),
    lon: dart.fieldType(core.double),
    lat: dart.fieldType(core.double)
  }));
  const Main_temp = dart.privateName(Weather, "Main.temp");
  const Main_pressure = dart.privateName(Weather, "Main.pressure");
  const Main_humidity = dart.privateName(Weather, "Main.humidity");
  const Main_tempMin = dart.privateName(Weather, "Main.tempMin");
  const Main_tempMax = dart.privateName(Weather, "Main.tempMax");
  const Main_seaLevel = dart.privateName(Weather, "Main.seaLevel");
  const Main_grndLevel = dart.privateName(Weather, "Main.grndLevel");
  Weather.Main = class Main extends core.Object {
    get temp() {
      return this[temp$];
    }
    set temp(value) {
      this[temp$] = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      this[pressure$] = value;
    }
    get humidity() {
      return this[humidity$];
    }
    set humidity(value) {
      this[humidity$] = value;
    }
    get tempMin() {
      return this[tempMin$];
    }
    set tempMin(value) {
      this[tempMin$] = value;
    }
    get tempMax() {
      return this[tempMax$];
    }
    set tempMax(value) {
      this[tempMax$] = value;
    }
    get seaLevel() {
      return this[seaLevel$];
    }
    set seaLevel(value) {
      this[seaLevel$] = value;
    }
    get grndLevel() {
      return this[grndLevel$];
    }
    set grndLevel(value) {
      this[grndLevel$] = value;
    }
    static fromJson(json) {
      return new Weather.Main.new({temp: core.double._check(dart.dsend(json[$_get]("temp"), 'toDouble', [])), pressure: core.int._check(json[$_get]("pressure")), humidity: core.int._check(json[$_get]("humidity")), tempMin: core.double._check(dart.dsend(json[$_get]("temp_min"), 'toDouble', [])), tempMax: core.double._check(dart.dsend(json[$_get]("temp_max"), 'toDouble', [])), seaLevel: core.int._check(json[$_get]("sea_level")), grndLevel: core.int._check(json[$_get]("grnd_level"))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["temp", this.temp, "pressure", this.pressure, "humidity", this.humidity, "temp_min", this.tempMin, "temp_max", this.tempMax, "sea_level", this.seaLevel, "grnd_level", this.grndLevel]);
    }
  };
  (Weather.Main.new = function(opts) {
    let temp = opts && 'temp' in opts ? opts.temp : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    let humidity = opts && 'humidity' in opts ? opts.humidity : null;
    let tempMin = opts && 'tempMin' in opts ? opts.tempMin : null;
    let tempMax = opts && 'tempMax' in opts ? opts.tempMax : null;
    let seaLevel = opts && 'seaLevel' in opts ? opts.seaLevel : null;
    let grndLevel = opts && 'grndLevel' in opts ? opts.grndLevel : null;
    this[temp$] = temp;
    this[pressure$] = pressure;
    this[humidity$] = humidity;
    this[tempMin$] = tempMin;
    this[tempMax$] = tempMax;
    this[seaLevel$] = seaLevel;
    this[grndLevel$] = grndLevel;
    ;
  }).prototype = Weather.Main.prototype;
  dart.addTypeTests(Weather.Main);
  const temp$ = Main_temp;
  const pressure$ = Main_pressure;
  const humidity$ = Main_humidity;
  const tempMin$ = Main_tempMin;
  const tempMax$ = Main_tempMax;
  const seaLevel$ = Main_seaLevel;
  const grndLevel$ = Main_grndLevel;
  dart.setMethodSignature(Weather.Main, () => ({
    __proto__: dart.getMethods(Weather.Main.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(Weather.Main, "package:weatherly/model/Weather.dart");
  dart.setFieldSignature(Weather.Main, () => ({
    __proto__: dart.getFields(Weather.Main.__proto__),
    temp: dart.fieldType(core.double),
    pressure: dart.fieldType(core.int),
    humidity: dart.fieldType(core.int),
    tempMin: dart.fieldType(core.double),
    tempMax: dart.fieldType(core.double),
    seaLevel: dart.fieldType(core.int),
    grndLevel: dart.fieldType(core.int)
  }));
  const Sys_country = dart.privateName(Weather, "Sys.country");
  const Sys_sunrise = dart.privateName(Weather, "Sys.sunrise");
  const Sys_sunset = dart.privateName(Weather, "Sys.sunset");
  Weather.Sys = class Sys extends core.Object {
    get country() {
      return this[country$];
    }
    set country(value) {
      this[country$] = value;
    }
    get sunrise() {
      return this[sunrise$];
    }
    set sunrise(value) {
      this[sunrise$] = value;
    }
    get sunset() {
      return this[sunset$];
    }
    set sunset(value) {
      this[sunset$] = value;
    }
    static fromJson(json) {
      return new Weather.Sys.new({country: core.String._check(json[$_get]("country")), sunrise: core.int._check(json[$_get]("sunrise")), sunset: core.int._check(json[$_get]("sunset"))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["country", this.country, "sunrise", this.sunrise, "sunset", this.sunset]);
    }
  };
  (Weather.Sys.new = function(opts) {
    let country = opts && 'country' in opts ? opts.country : null;
    let sunrise = opts && 'sunrise' in opts ? opts.sunrise : null;
    let sunset = opts && 'sunset' in opts ? opts.sunset : null;
    this[country$] = country;
    this[sunrise$] = sunrise;
    this[sunset$] = sunset;
    ;
  }).prototype = Weather.Sys.prototype;
  dart.addTypeTests(Weather.Sys);
  const country$ = Sys_country;
  const sunrise$ = Sys_sunrise;
  const sunset$ = Sys_sunset;
  dart.setMethodSignature(Weather.Sys, () => ({
    __proto__: dart.getMethods(Weather.Sys.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(Weather.Sys, "package:weatherly/model/Weather.dart");
  dart.setFieldSignature(Weather.Sys, () => ({
    __proto__: dart.getFields(Weather.Sys.__proto__),
    country: dart.fieldType(core.String),
    sunrise: dart.fieldType(core.int),
    sunset: dart.fieldType(core.int)
  }));
  const WeatherElement_id = dart.privateName(Weather, "WeatherElement.id");
  const WeatherElement_main = dart.privateName(Weather, "WeatherElement.main");
  const WeatherElement_description = dart.privateName(Weather, "WeatherElement.description");
  const WeatherElement_icon = dart.privateName(Weather, "WeatherElement.icon");
  Weather.WeatherElement = class WeatherElement extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      this[id$0] = value;
    }
    get main() {
      return this[main$0];
    }
    set main(value) {
      this[main$0] = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      this[description$] = value;
    }
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    static fromJson(json) {
      return new Weather.WeatherElement.new({id: core.int._check(json[$_get]("id")), main: core.String._check(json[$_get]("main")), description: core.String._check(json[$_get]("description")), icon: core.String._check(json[$_get]("icon"))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["id", this.id, "main", this.main, "description", this.description, "icon", this.icon]);
    }
  };
  (Weather.WeatherElement.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let main = opts && 'main' in opts ? opts.main : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let icon = opts && 'icon' in opts ? opts.icon : null;
    this[id$0] = id;
    this[main$0] = main;
    this[description$] = description;
    this[icon$] = icon;
    ;
  }).prototype = Weather.WeatherElement.prototype;
  dart.addTypeTests(Weather.WeatherElement);
  const id$0 = WeatherElement_id;
  const main$0 = WeatherElement_main;
  const description$ = WeatherElement_description;
  const icon$ = WeatherElement_icon;
  dart.setMethodSignature(Weather.WeatherElement, () => ({
    __proto__: dart.getMethods(Weather.WeatherElement.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(Weather.WeatherElement, "package:weatherly/model/Weather.dart");
  dart.setFieldSignature(Weather.WeatherElement, () => ({
    __proto__: dart.getFields(Weather.WeatherElement.__proto__),
    id: dart.fieldType(core.int),
    main: dart.fieldType(core.String),
    description: dart.fieldType(core.String),
    icon: dart.fieldType(core.String)
  }));
  const Wind_speed = dart.privateName(Weather, "Wind.speed");
  const Wind_deg = dart.privateName(Weather, "Wind.deg");
  Weather.Wind = class Wind extends core.Object {
    get speed() {
      return this[speed$];
    }
    set speed(value) {
      this[speed$] = value;
    }
    get deg() {
      return this[deg$];
    }
    set deg(value) {
      this[deg$] = value;
    }
    static fromJson(json) {
      return new Weather.Wind.new({speed: core.double._check(dart.dsend(json[$_get]("speed"), 'toDouble', [])), deg: core.int._check(json[$_get]("deg"))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["speed", this.speed, "deg", this.deg]);
    }
  };
  (Weather.Wind.new = function(opts) {
    let speed = opts && 'speed' in opts ? opts.speed : null;
    let deg = opts && 'deg' in opts ? opts.deg : null;
    this[speed$] = speed;
    this[deg$] = deg;
    ;
  }).prototype = Weather.Wind.prototype;
  dart.addTypeTests(Weather.Wind);
  const speed$ = Wind_speed;
  const deg$ = Wind_deg;
  dart.setMethodSignature(Weather.Wind, () => ({
    __proto__: dart.getMethods(Weather.Wind.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(Weather.Wind, "package:weatherly/model/Weather.dart");
  dart.setFieldSignature(Weather.Wind, () => ({
    __proto__: dart.getFields(Weather.Wind.__proto__),
    speed: dart.fieldType(core.double),
    deg: dart.fieldType(core.int)
  }));
  Weather.weatherFromJson = function weatherFromJson(str) {
    return Weather.Weather.fromJson(MapOfString$dynamic()._check(convert.json.decode(str)));
  };
  Weather.weatherToJson = function weatherToJson(data) {
    return convert.json.encode(data.toJson());
  };
  dart.trackLibraries("packages/weatherly/model/Weather", {
    "package:weatherly/model/Weather.dart": Weather
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Weather.dart"],"names":[],"mappings":"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","file":"Weather.ddc.js"}');
  // Exports:
  return {
    model__Weather: Weather
  };
});

//# sourceMappingURL=Weather.ddc.js.map
