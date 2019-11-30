//appBar.dart
import 'package:flutter/material.dart';

AppBar appBar(String title) {
  return AppBar(
    title: Text(title),
    leading: Icon(Icons.wb_sunny),
    actions: <Widget>[
      IconButton(
        icon: Icon(Icons.more_vert),
        onPressed: () {},
      ),
    ],
  );
}
