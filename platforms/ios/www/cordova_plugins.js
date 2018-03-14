cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admob-simple.AdMob",
    "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
    "pluginId": "cordova-plugin-admob-simple",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  },
  {
    "id": "onesignal-cordova-plugin.OneSignal",
    "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
    "pluginId": "onesignal-cordova-plugin",
    "clobbers": [
      "OneSignal"
    ]
  },
  {
    "id": "cordova-plugin-network-information.network",
    "file": "plugins/cordova-plugin-network-information/www/network.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "navigator.connection",
      "navigator.network.connection"
    ]
  },
  {
    "id": "cordova-plugin-network-information.Connection",
    "file": "plugins/cordova-plugin-network-information/www/Connection.js",
    "pluginId": "cordova-plugin-network-information",
    "clobbers": [
      "Connection"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-admob-sdklibs": "2.1.6",
  "cordova-plugin-admob-simple": "3.3.4",
  "onesignal-cordova-plugin": "2.3.1",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-network-information": "2.0.1"
};
// BOTTOM OF METADATA
});