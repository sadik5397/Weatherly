import 'package:flutter/material.dart';
import '../component/appBar.dart';
import '../component/textStyle.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';
import '../model/Weather.dart';
import 'changeCity.dart';
import 'package:flare_flutter/flare_actor.dart';

// ignore: must_be_immutable
class Home extends StatefulWidget {
  String name;

  Home(this.name);

  @override
  _HomeState createState() => _HomeState(this.name);
}

String unit = "C";

Future<Weather> fetchPost(String city) async {
  final response = await http.get(
      "http://api.openweathermap.org/data/2.5/weather?q=$city&appid=f772e575f072b5cf925609b176f4428c&units=${(unit == "C") ? "metric" : "imperial"}");
  if (response.statusCode == 200) {
    return Weather.fromJson(json.decode(response.body));
  } else {
    throw Exception('Failed to load post');
  }
}

class _HomeState extends State<Home> {
  String name;
  Future<Weather> post;

  _HomeState(this.name);

  @override
  void initState() {
    super.initState();
    post = fetchPost(name);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: appBar("WeatherLy Home"),
      body: Stack(
        children: <Widget>[
          FlareActor("lib/database/WeatherLy.flr",
              alignment: Alignment.topCenter,
              fit: BoxFit.fitWidth,
              animation: "WWF dzen"),
          Column(
            children: <Widget>[
              Expanded(
                child: Center(
                  child: FutureBuilder<Weather>(
                    future: post,
                    builder: (context, snapshot) {
                      if (snapshot.hasData) {
                        return Column(
                          children: <Widget>[
                            SizedBox(
                              height: 40,
                            ),
                            Text(
                                snapshot.data.main.temp.toString() + "°" + unit,
                                style: weatherDigit),
                            SizedBox(
                              height: 30,
                            ),
                            Text(
                              snapshot.data.name.toString() +
                                  ", " +
                                  "${(snapshot.data.sys.country.toString() == "IN") ? "BD" : snapshot.data.sys.country.toString()}",
                              style: location,
                            ),
                            SizedBox(
                              height: 10,
                            ),
                            Text(
                              "${(DateTime.now().hour > 12) ? "${DateTime.now().hour - 12}" : "${(DateTime.now().hour == 0) ? "12" : "${DateTime.now().hour}"}"}" +
                                  ":" +
                                  "${DateTime.now().minute}" +
                                  ":" +
                                  "${DateTime.now().second}" +
                                  " ${(DateTime.now().hour < 12) ? "AM" : "PM"}",
                              style: time,
                            ),
                            SizedBox(
                              height: 60,
                            ),
                            Center(
                              child: Column(
                                children: <Widget>[
                                  Image.network(
                                    "http://openweathermap.org/img/wn/" +
                                        snapshot.data.weather[0].icon
                                            .toString() +
                                        "@2x.png",
                                    height: 100,
                                    width: 100,
                                  ),
                                  Text(
                                    snapshot.data.weather[0].main
                                            .toUpperCase() +
                                        "\n" +
                                        snapshot.data.weather[0].description,
                                    style: weatherStatus,
                                    textAlign: TextAlign.center,
                                  ),
                                ],
                              ),
                            ),
                          ],
                        );
                      } else if (snapshot.hasError) {
                        return Text("${snapshot.error}");
                      }
                      return CircularProgressIndicator();
                    },
                  ),
                ),
              ),
              Padding(
                padding: EdgeInsets.all(16.0),
                child: Row(
                  children: <Widget>[
                    Expanded(
                      child: MaterialButton(
                        padding: EdgeInsets.all(16),
                        color: Colors.white,
                        child: Text(
                          "Change Location",
                          style: buttonText,
                        ),
                        onPressed: () {
                          setState(
                            () {
                              Navigator.of(context).push(
                                MaterialPageRoute(
                                  builder: (BuildContext context) {
                                    return ChangeCity();
                                  },
                                ),
                              );
                            },
                          );
                        },
                      ),
                    ),
                    SizedBox(
                      width: 16,
                    ),
                    MaterialButton(
                      padding: EdgeInsets.all(16),
                      color: Colors.white,
                      child: Text(
                        "°${(unit == "C") ? "F" : "C"}",
                        style: buttonText,
                      ),
                      onPressed: () {
                        setState(
                          () {
                            (unit == "C")
                                ? unit = "F"
                                : (unit == "F") ? unit = "C" : unit = "F";
                            post = fetchPost(name);
                          },
                        );
                      },
                    ),
                  ],
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}
