define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/weatherly/component/appBar', 'packages/flare_flutter/flare_actor', 'packages/flutter/src/painting/_network_image_web', 'packages/weatherly/model/Weather', 'packages/weatherly/component/textStyle', 'packages/http/http', 'packages/weatherly/model/City', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__weatherly__component__appBar, packages__flare_flutter__flare_actor, packages__flutter__src__painting___network_image_web, packages__weatherly__model__Weather, packages__weatherly__component__textStyle, packages__http__http, packages__weatherly__model__City, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const material_button = packages__flutter__material.src__material__material_button;
  const colors = packages__flutter__material.src__material__colors;
  const page = packages__flutter__material.src__material__page;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const circle_avatar = packages__flutter__material.src__material__circle_avatar;
  const appBar = packages__weatherly__component__appBar.component__appBar;
  const flare_actor = packages__flare_flutter__flare_actor.flare_actor;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const Weather = packages__weatherly__model__Weather.model__Weather;
  const textStyle = packages__weatherly__component__textStyle.component__textStyle;
  const http = packages__http__http.http;
  const City = packages__weatherly__model__City.model__City;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const home = Object.create(dart.library);
  const changeCity = Object.create(dart.library);
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $toUpperCase = dartx.toUpperCase;
  const $addAll = dartx.addAll;
  const $toLowerCase = dartx.toLowerCase;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $clear = dartx.clear;
  const $length = dartx.length;
  const $isNotEmpty = dartx.isNotEmpty;
  let FutureBuilderOfWeather = () => (FutureBuilderOfWeather = dart.constFn(async$.FutureBuilder$(Weather.Weather)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let AsyncSnapshotOfWeather = () => (AsyncSnapshotOfWeather = dart.constFn(async$.AsyncSnapshot$(Weather.Weather)))();
  let BuildContextAndAsyncSnapshotOfWeatherToWidget = () => (BuildContextAndAsyncSnapshotOfWeatherToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, AsyncSnapshotOfWeather()])))();
  let BuildContextToChangeCity = () => (BuildContextToChangeCity = dart.constFn(dart.fnType(changeCity.ChangeCity, [framework.BuildContext])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfCity = () => (JSArrayOfCity = dart.constFn(_interceptors.JSArray$(City.City)))();
  let IterableOfCity = () => (IterableOfCity = dart.constFn(core.Iterable$(City.City)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let BuildContextToHome = () => (BuildContextToHome = dart.constFn(dart.fnType(home.Home, [framework.BuildContext])))();
  let BuildContextAndintToListTile = () => (BuildContextAndintToListTile = dart.constFn(dart.fnType(list_tile.ListTile, [framework.BuildContext, core.int])))();
  let ListOfCity = () => (ListOfCity = dart.constFn(core.List$(City.City)))();
  let dynamicToCity = () => (dynamicToCity = dart.constFn(dart.fnType(City.City, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "filename",
        [_Location_column]: 22,
        [_Location_line]: 51,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 15,
        [_Location_line]: 52,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 15,
        [_Location_line]: 53,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 15,
        [_Location_line]: 54,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 51,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 66,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C7 || CT.C7,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 65,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 74,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 33,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C10 || CT.C10,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C14 || CT.C14,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 40,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22], widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C21 || CT.C21,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 80,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 62,
        [_Location_line]: 88,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 31,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 83,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 31,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C28 || CT.C28,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 92,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 57,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 37,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 37,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C31 || CT.C31,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 98,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 46,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 37,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 37,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C36 || CT.C36,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 106,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 33,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C41 || CT.C41,
        [_Location_name]: null,
        [_Location_column]: 38,
        [_Location_line]: 96,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 31,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 95,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 27,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C47 || CT.C47,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 120,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 120,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C53() {
      return C53 = dart.constList([], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 122,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "future",
        [_Location_column]: 21,
        [_Location_line]: 60,
        [_Location_file]: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 21,
        [_Location_line]: 61,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.constList([C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C55 || CT.C55,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 59,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 59,
        [_Location_file]: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C59 || CT.C59,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 58,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 58,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 57,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 27,
        [_Location_line]: 136,
        [_Location_file]: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 27,
        [_Location_line]: 137,
        [_Location_file]: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66, C67 || CT.C67], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C65 || CT.C65,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 135,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 145,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 25,
        [_Location_line]: 133,
        [_Location_file]: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 25,
        [_Location_line]: 134,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 25,
        [_Location_line]: 135,
        [_Location_file]: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 25,
        [_Location_line]: 139,
        [_Location_file]: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C70 || CT.C70,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 132,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 132,
        [_Location_file]: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C76 || CT.C76,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 131,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 155,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C79 || CT.C79,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 154,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 56,
        [_Location_line]: 161,
        [_Location_file]: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "style",
        [_Location_column]: 25,
        [_Location_line]: 162,
        [_Location_file]: null
      });
    },
    get C82() {
      return C82 = dart.constList([C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C82 || CT.C82,
        [_Location_name]: null,
        [_Location_column]: 30,
        [_Location_line]: 160,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 23,
        [_Location_line]: 158,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 159,
        [_Location_file]: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 23,
        [_Location_line]: 160,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 23,
        [_Location_line]: 164,
        [_Location_file]: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C86 || CT.C86,
        [_Location_name]: null,
        [_Location_column]: 21,
        [_Location_line]: 157,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 19,
        [_Location_line]: 130,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C92 || CT.C92,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 129,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 17,
        [_Location_line]: 128,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 129,
        [_Location_file]: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C95 || CT.C95,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 127,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 13,
        [_Location_line]: 56,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C99 || CT.C99,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 55,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 9,
        [_Location_line]: 50,
        [_Location_file]: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C102 || CT.C102,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 49,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 48,
        [_Location_file]: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 49,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C105 || CT.C105,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 47,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/home.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "autofocus",
        [_Location_column]: 13,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 13,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onChanged",
        [_Location_column]: 13,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111, C112 || CT.C112, C113 || CT.C113], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C109 || CT.C109,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 77,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 11,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C115 || CT.C115,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 76,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "filename",
        [_Location_column]: 13,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 13,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 13,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C118 || CT.C118,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 45,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C123 || CT.C123,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 109,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 109,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C126 || CT.C126,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 108,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 49,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C129 || CT.C129,
        [_Location_name]: null,
        [_Location_column]: 24,
        [_Location_line]: 111,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 25,
        [_Location_line]: 113,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 112,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "data",
        [_Location_column]: 52,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C135() {
      return C135 = dart.constList([C136 || CT.C136], widget_inspector._Location);
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C135 || CT.C135,
        [_Location_name]: null,
        [_Location_column]: 27,
        [_Location_line]: 115,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "name",
        [_Location_column]: 62,
        [_Location_line]: 121,
        [_Location_file]: null
      });
    },
    get C138() {
      return C138 = dart.constList([C139 || CT.C139], widget_inspector._Location);
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C138 || CT.C138,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 121,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "leading",
        [_Location_column]: 17,
        [_Location_line]: 108,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "title",
        [_Location_column]: 17,
        [_Location_line]: 111,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "subtitle",
        [_Location_column]: 17,
        [_Location_line]: 112,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "trailing",
        [_Location_column]: 17,
        [_Location_line]: 115,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 17,
        [_Location_line]: 116,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143, C144 || CT.C144, C145 || CT.C145, C146 || CT.C146], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C141 || CT.C141,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 107,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 13,
        [_Location_line]: 105,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 13,
        [_Location_line]: 106,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C148 || CT.C148,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 104,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C152 || CT.C152,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 97,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 9,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 9,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156, C157 || CT.C157], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C155 || CT.C155,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/weatherly/page/changeCity.dart"
      });
    }
  });
  const name$ = dart.privateName(home, "Home.name");
  home.Home = class Home extends framework.StatefulWidget {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    createState() {
      return new home._HomeState.new(this.name);
    }
  };
  (home.Home.new = function(name, opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[name$] = name;
    home.Home.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = home.Home.prototype;
  dart.addTypeTests(home.Home);
  dart.setMethodSignature(home.Home, () => ({
    __proto__: dart.getMethods(home.Home.__proto__),
    createState: dart.fnType(home._HomeState, [])
  }));
  dart.setLibraryUri(home.Home, "package:weatherly/page/home.dart");
  dart.setFieldSignature(home.Home, () => ({
    __proto__: dart.getFields(home.Home.__proto__),
    name: dart.fieldType(core.String)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C4;
  let C5;
  let C1;
  let C0;
  let C8;
  let C7;
  let C6;
  let C11;
  let C12;
  let C10;
  let C9;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C17;
  let C16;
  let C22;
  let C21;
  let C20;
  let C25;
  let C26;
  let C24;
  let C23;
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C34;
  let C31;
  let C30;
  let C37;
  let C38;
  let C39;
  let C36;
  let C35;
  let C42;
  let C41;
  let C40;
  let C45;
  let C44;
  let C43;
  let C48;
  let C47;
  let C46;
  let C51;
  let C50;
  let C49;
  let C53;
  let C52;
  let C56;
  let C57;
  let C55;
  let C54;
  let C60;
  let C59;
  let C58;
  let C63;
  let C62;
  let C61;
  let C66;
  let C67;
  let C65;
  let C64;
  let C68;
  let C71;
  let C72;
  let C73;
  let C74;
  let C70;
  let C69;
  let C77;
  let C76;
  let C75;
  let C80;
  let C79;
  let C78;
  let C83;
  let C84;
  let C82;
  let C81;
  let C87;
  let C88;
  let C89;
  let C90;
  let C86;
  let C85;
  let C93;
  let C92;
  let C91;
  let C96;
  let C97;
  let C95;
  let C94;
  let C100;
  let C99;
  let C98;
  let C103;
  let C102;
  let C101;
  let C106;
  let C107;
  let C105;
  let C104;
  home._HomeState = class _HomeState extends framework.State$(home.Home) {
    initState() {
      super.initState();
      this.post = home.fetchPost(this.name);
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: appBar.appBar("WeatherLy Home"), body: new basic.Stack.new({children: JSArrayOfWidget().of([new flare_actor.FlareActor.new("lib/database/WeatherLy.flr", {alignment: alignment.Alignment.topCenter, fit: box_fit.BoxFit.fitWidth, animation: "WWF dzen", $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new basic.Column.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Center.new({child: new (FutureBuilderOfWeather()).new({future: this.post, builder: dart.fn((context, snapshot) => {
                        if (dart.test(snapshot.hasData)) {
                          return new basic.Column.new({children: JSArrayOfWidget().of([new basic.SizedBox.new({height: 40.0, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new text.Text.new(dart.toString(snapshot.data.main.temp) + "°" + dart.notNull(home.unit), {style: textStyle.weatherDigit, $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new basic.SizedBox.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), new text.Text.new(dart.toString(snapshot.data.name) + ", " + (dart.toString(snapshot.data.sys.country) === "IN" ? "BD" : dart.toString(snapshot.data.sys.country)), {style: textStyle.location, $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new basic.SizedBox.new({height: 10.0, $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new text.Text.new((dart.notNull(new core.DateTime.now().hour) > 12 ? dart.str(dart.notNull(new core.DateTime.now().hour) - 12) : new core.DateTime.now().hour === 0 ? "12" : dart.str(new core.DateTime.now().hour)) + ":" + dart.str(new core.DateTime.now().minute) + ":" + dart.str(new core.DateTime.now().second) + (" " + (dart.notNull(new core.DateTime.now().hour) < 12 ? "AM" : "PM")), {style: textStyle.time, $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), new basic.SizedBox.new({height: 60.0, $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new basic.Center.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new image.Image.network("http://openweathermap.org/img/wn/" + dart.toString(snapshot.data.weather[$_get](0).icon) + "@2x.png", {height: 100.0, width: 100.0, $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), new text.Text.new(snapshot.data.weather[$_get](0).main[$toUpperCase]() + "\n" + dart.notNull(snapshot.data.weather[$_get](0).description), {style: textStyle.weatherStatus, textAlign: ui.TextAlign.center, $creationLocationd_0dea112b090073317d4: C35 || CT.C35})]), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}), $creationLocationd_0dea112b090073317d4: C43 || CT.C43})]), $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
                        } else if (dart.test(snapshot.hasError)) {
                          return new text.Text.new(dart.str(snapshot.error), {$creationLocationd_0dea112b090073317d4: C49 || CT.C49});
                        }
                        return new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C52 || CT.C52});
                      }, BuildContextAndAsyncSnapshotOfWeatherToWidget()), $creationLocationd_0dea112b090073317d4: C54 || CT.C54}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(16.0), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(16.0), color: colors.Colors.white, child: new text.Text.new("Change Location", {style: textStyle.buttonText, $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), onPressed: dart.fn(() => {
                            this.setState(dart.fn(() => {
                              navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new changeCity.ChangeCity.new({$creationLocationd_0dea112b090073317d4: C68 || CT.C68}), BuildContextToChangeCity())}));
                            }, VoidToNull()));
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C69 || CT.C69}), $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new basic.SizedBox.new({width: 16.0, $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), new material_button.MaterialButton.new({padding: new edge_insets.EdgeInsets.all(16.0), color: colors.Colors.white, child: new text.Text.new("°" + (home.unit === "C" ? "F" : "C"), {style: textStyle.buttonText, $creationLocationd_0dea112b090073317d4: C81 || CT.C81}), onPressed: dart.fn(() => {
                          this.setState(dart.fn(() => {
                            home.unit === "C" ? home.unit = "F" : home.unit === "F" ? home.unit = "C" : home.unit = "F";
                            this.post = home.fetchPost(this.name);
                          }, VoidToNull()));
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C85 || CT.C85})]), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C94 || CT.C94})]), $creationLocationd_0dea112b090073317d4: C98 || CT.C98})]), $creationLocationd_0dea112b090073317d4: C101 || CT.C101}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104});
    }
  };
  (home._HomeState.new = function(name) {
    this.post = null;
    this.name = name;
    home._HomeState.__proto__.new.call(this);
    ;
  }).prototype = home._HomeState.prototype;
  dart.addTypeTests(home._HomeState);
  dart.setMethodSignature(home._HomeState, () => ({
    __proto__: dart.getMethods(home._HomeState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(home._HomeState, "package:weatherly/page/home.dart");
  dart.setFieldSignature(home._HomeState, () => ({
    __proto__: dart.getFields(home._HomeState.__proto__),
    name: dart.fieldType(core.String),
    post: dart.fieldType(async.Future$(Weather.Weather))
  }));
  home.fetchPost = function fetchPost(city) {
    return async.async(Weather.Weather, function* fetchPost() {
      let response = (yield http.get("http://api.openweathermap.org/data/2.5/weather?q=" + dart.str(city) + "&appid=f772e575f072b5cf925609b176f4428c&units=" + (home.unit === "C" ? "metric" : "imperial")));
      if (response.statusCode === 200) {
        return Weather.Weather.fromJson(MapOfString$dynamic()._check(convert.json.decode(response.body)));
      } else {
        dart.throw(core.Exception.new("Failed to load post"));
      }
    });
  };
  dart.defineLazy(home, {
    /*home.unit*/get unit() {
      return "C";
    },
    set unit(_) {}
  });
  changeCity.ChangeCity = class ChangeCity extends framework.StatefulWidget {
    createState() {
      return new changeCity._ChangeCityState.new();
    }
  };
  (changeCity.ChangeCity.new = function(opts) {
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    changeCity.ChangeCity.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = changeCity.ChangeCity.prototype;
  dart.addTypeTests(changeCity.ChangeCity);
  dart.setMethodSignature(changeCity.ChangeCity, () => ({
    __proto__: dart.getMethods(changeCity.ChangeCity.__proto__),
    createState: dart.fnType(changeCity._ChangeCityState, [])
  }));
  dart.setLibraryUri(changeCity.ChangeCity, "package:weatherly/page/changeCity.dart");
  const _isLoading = dart.privateName(changeCity, "_isLoading");
  let C110;
  let C111;
  let C112;
  let C113;
  let C109;
  let C108;
  let C116;
  let C115;
  let C114;
  let C119;
  let C120;
  let C121;
  let C118;
  let C117;
  let C124;
  let C123;
  let C122;
  let C127;
  let C126;
  let C125;
  let C130;
  let C129;
  let C128;
  let C133;
  let C132;
  let C131;
  let C136;
  let C135;
  let C134;
  let C139;
  let C138;
  let C137;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C141;
  let C140;
  let C149;
  let C150;
  let C148;
  let C147;
  let C153;
  let C152;
  let C151;
  let C156;
  let C157;
  let C155;
  let C154;
  changeCity._ChangeCityState = class _ChangeCityState extends framework.State$(changeCity.ChangeCity) {
    initState() {
      super.initState();
      this.city = changeCity.fetchCity();
      this.city.then(core.Null, dart.fn(value => {
        this.setState(dart.fn(() => {
          this.allCity[$addAll](IterableOfCity()._check(value));
          this.filteredCity[$addAll](this.allCity);
          this[_isLoading] = false;
        }, VoidToNull()));
      }, dynamicToNull()));
    }
    filterData(data, filter) {
      let filteredData = JSArrayOfCity().of([]);
      for (let e of data) {
        if (e.name[$toLowerCase]()[$contains](filter[$toLowerCase]())) {
          filteredData[$add](e);
        }
      }
      return filteredData;
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text_field.TextField.new({autofocus: false, maxLines: 1, decoration: new input_decorator.InputDecoration.new({hintText: "Search for Location"}), onChanged: dart.fn(string => {
              if (string === "") {
                this.setState(dart.fn(() => {
                  this.filteredCity[$clear]();
                  this.filteredCity[$addAll](this.allCity);
                }, VoidToNull()));
              } else {
                this.setState(dart.fn(() => {
                  this.filteredCity = this.filterData(this.allCity, string);
                }, VoidToNull()));
              }
            }, StringToNull()), $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), body: new basic.Center.new({child: dart.test(this[_isLoading]) ? new flare_actor.FlareActor.new("lib/database/Earth.flr", {animation: "roll", alignment: alignment.Alignment.center, $creationLocationd_0dea112b090073317d4: C117 || CT.C117}) : new scroll_view.ListView.builder({itemCount: this.filteredCity[$length], itemBuilder: dart.fn((context, index) => new list_tile.ListTile.new({leading: new circle_avatar.CircleAvatar.new({child: new text.Text.new(dart.str(dart.notNull(index) + 1), {$creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), title: new text.Text.new(this.filteredCity[$_get](index).name, {$creationLocationd_0dea112b090073317d4: C128 || CT.C128}), subtitle: new text.Text.new(dart.toString(this.filteredCity[$_get](index).coord.lat) + "," + dart.toString(this.filteredCity[$_get](index).coord.lon), {$creationLocationd_0dea112b090073317d4: C131 || CT.C131}), trailing: new text.Text.new(this.filteredCity[$_get](index).country, {$creationLocationd_0dea112b090073317d4: C134 || CT.C134}), onTap: dart.fn(() => {
                navigator.Navigator.of(context).push(dart.dynamic, new page.MaterialPageRoute.new({builder: dart.fn(context => new home.Home.new(dart.toString(this.filteredCity[$_get](index).name), {$creationLocationd_0dea112b090073317d4: C137 || CT.C137}), BuildContextToHome())}));
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C140 || CT.C140}), BuildContextAndintToListTile()), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), $creationLocationd_0dea112b090073317d4: C151 || CT.C151}), $creationLocationd_0dea112b090073317d4: C154 || CT.C154});
    }
  };
  (changeCity._ChangeCityState.new = function() {
    this.city = null;
    this.allCity = JSArrayOfCity().of([]);
    this.filteredCity = JSArrayOfCity().of([]);
    this[_isLoading] = true;
    changeCity._ChangeCityState.__proto__.new.call(this);
    ;
  }).prototype = changeCity._ChangeCityState.prototype;
  dart.addTypeTests(changeCity._ChangeCityState);
  dart.setMethodSignature(changeCity._ChangeCityState, () => ({
    __proto__: dart.getMethods(changeCity._ChangeCityState.__proto__),
    filterData: dart.fnType(core.List$(City.City), [core.List$(City.City), core.String]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(changeCity._ChangeCityState, "package:weatherly/page/changeCity.dart");
  dart.setFieldSignature(changeCity._ChangeCityState, () => ({
    __proto__: dart.getFields(changeCity._ChangeCityState.__proto__),
    city: dart.fieldType(async.Future),
    allCity: dart.fieldType(core.List$(City.City)),
    filteredCity: dart.fieldType(core.List$(City.City)),
    [_isLoading]: dart.fieldType(core.bool)
  }));
  changeCity.fetchCity = function fetchCity() {
    return async.async(core.List, function* fetchCity() {
      let response = (yield asset_bundle.rootBundle.loadString("lib/database/city.json"));
      if (response[$isNotEmpty]) {
        return ListOfCity().from(core.Iterable._check(dart.dsend(convert.json.decode(response), 'map', [dart.fn(data => City.City.fromJson(MapOfString$dynamic()._check(data)), dynamicToCity())])));
      } else {
        dart.throw(core.Exception.new("Failed to load post"));
      }
    });
  };
  dart.trackLibraries("packages/weatherly/page/changeCity", {
    "package:weatherly/page/home.dart": home,
    "package:weatherly/page/changeCity.dart": changeCity
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["home.dart","changeCity.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"changeCity.ddc.js"}');
  // Exports:
  return {
    page__home: home,
    page__changeCity: changeCity
  };
});

//# sourceMappingURL=changeCity.ddc.js.map
