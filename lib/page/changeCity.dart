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
  List<City> allCity = [];
  List<City> filteredCity = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    city = fetchCity();
    city.then((value){
      setState(() {
        this.allCity.addAll(value);
        this.filteredCity.addAll(this.allCity);
        this._isLoading = false;
      });
    });
  }

  List<City> filterData(List<City> data, String filter){
    List<City> filteredData = [];
    for(City e in data){
      if(e.name.toLowerCase().contains(filter.toLowerCase())){
      filteredData.add(e);
      }
    }
    return filteredData;
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
              if (string == "") {
                setState(() {
                  this.filteredCity.clear();
                  this.filteredCity.addAll(this.allCity);
                });
              }else{
                setState(() {
                  this.filteredCity = filterData(allCity, string);
                });
              }
            },
          ),
        ),
        body: Center(
          child: _isLoading ? // If its loading then show loading animation
          FlareActor(
            "lib/database/Earth.flr",
            animation: "roll",
            alignment: Alignment.center,
          )
              : ListView.builder(
            itemCount: filteredCity.length,
            itemBuilder: (context, index) {
              return ListTile(
                leading: CircleAvatar(
                  child: Text("${index + 1}"),
                ),
                title: Text(filteredCity[index].name),
                subtitle: Text(filteredCity[index].coord.lat.toString() +
                    "," +
                    filteredCity[index].coord.lon.toString()),
                trailing: Text(filteredCity[index].country),
                onTap: () {
                  //Navigation
                  Navigator.of(context).push(
                    MaterialPageRoute(
                      builder: (BuildContext context) {
                        return Home(filteredCity[index].name.toString());
                      },
                    ),
                  );
                },
              );
            }, // Item builder
          ),
        )
    );
  }
}
