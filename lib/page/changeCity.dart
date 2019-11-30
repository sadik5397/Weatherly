import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';
import 'dart:async';
import '../model/City.dart';
import 'home.dart';
import 'package:flutter/services.dart' show rootBundle;
import 'package:flare_flutter/flare_actor.dart';

// ignore: must_be_immutable
class ChangeCity extends StatefulWidget {
  @override
  _ChangeCityState createState() => _ChangeCityState();
}

//Get CityList from Network
//=======================
//Future<List> fetchCity() async {
//  final response = await http.get('http://homebuoy.com.au/city.list.json');
//  if (response.statusCode == 200) {
//    // If server returns an OK response, parse the JSON.
//    return List<City>.from(
//        json.decode(response.body).map((data) => City.fromJson(data)));
//  } else {
//    // If that response was not OK, throw an error.
//    throw Exception('Failed to load post');
//  }
//}

//Load from Local Database
//=======================
Future<List> fetchCity() async {
  final response = await rootBundle.loadString("lib/database/city.json");
  if (response.isNotEmpty) {
    // If server returns an OK response, parse the JSON.
    return List<City>.from(
        json.decode(response).map((data) => City.fromJson(data)));
  } else {
    // If that response was not OK, throw an error.
    throw Exception('Failed to load post');
  }
}

class _ChangeCityState extends State<ChangeCity> {
  Future city;
  List<City> filteredCity = List();

  @override
  void initState() {
    super.initState();
    city = fetchCity();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: TextField(
          autofocus: false,
          maxLines: 1,
          decoration: InputDecoration(
            hintText: 'Search for Location',
          ),
          onChanged: (string) {
            print(string);
          },
        ),
      ),
      body: Center(
        child: FutureBuilder<List>(
          future: city,
          builder: (context, snapshot) {
            if (snapshot.hasData) {
              return ListView.builder(
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  return ListTile(
                    leading: CircleAvatar(
                      child: Text("${index + 1}"),
                    ),
                    title: Text(snapshot.data[index].name),
                    subtitle: Text(snapshot.data[index].coord.lat.toString() +
                        "," +
                        snapshot.data[index].coord.lon.toString()),
                    trailing: Text(snapshot.data[index].country),
                    onTap: () {
                      //Navigation
                      Navigator.of(context).push(
                        MaterialPageRoute(
                          builder: (BuildContext context) {
                            return Home(snapshot.data[index].name.toString());
                          },
                        ),
                      );
                    },
                  );
                },
              );
            } else if (snapshot.hasError) {
              return Text("${snapshot.error}");
            }
            return FlareActor(
              "lib/database/Earth.flr",
              animation: "roll",
              alignment: Alignment.center,
            );
          },
        ),
      ),
    );
  }
}
