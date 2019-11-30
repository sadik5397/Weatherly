import 'dart:ui' as ui;

import "file:///D:/FlutterWorks/weatherly/lib/main.dart" as entrypoint;

Future<void> main() async {
  if (true) {
    await ui.webOnlyInitializePlatform();
  }
  entrypoint.main();
}
