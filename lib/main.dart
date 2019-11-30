import 'package:flutter/material.dart';
import 'page/home.dart';

void main() => runApp(new MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'WeatherLy',
      theme: new ThemeData(
          brightness: Brightness.dark,
          primarySwatch: Colors.cyan,
          textTheme: TextTheme(
            title: TextStyle(color: Colors.white),
            subtitle: TextStyle(color: Colors.white),
            body1: TextStyle(color: Colors.white),
            body2: TextStyle(color: Colors.white),
          )), // ThemeData
      home: Home("Dhaka"),
    ); //MaterialApp
  }
}
