class City {
  int id;
  String name;
  String country;
  Coord coord;

  City({
    this.id,
    this.name,
    this.country,
    this.coord,
  });

  factory City.fromJson(Map<String, dynamic> json) => City(
    id: json["id"],
    name: json["name"],
    country: json["country"],
    coord: Coord.fromJson(json["coord"]),
  );

  Map<String, dynamic> toJson() => {
    "id": id,
    "name": name,
    "country": country,
    "coord": coord.toJson(),
  };
}

class Coord {
  double lon;
  double lat;

  Coord({
    this.lon,
    this.lat,
  });

  factory Coord.fromJson(Map<String, dynamic> json) => Coord(
    lon: json["lon"].toDouble(),
    lat: json["lat"].toDouble(),
  );

  Map<String, dynamic> toJson() => {
    "lon": lon,
    "lat": lat,
  };
}