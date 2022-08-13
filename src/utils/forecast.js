// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/" +
//     latitude +
//     "," +
//     longitude;

//   request({ url, json: true }, (error, { body }) => {
//     if (error) {
//       callback("Unable to connect to weather service!", undefined);
//     } else if (body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(
//         undefined,
//         body.daily.data[0].summary +
//           " It is currently " +
//           body.currently.temperature +
//           " degress out. This high today is " +
//           body.daily.data[0].temperatureHigh +
//           " with a low of " +
//           body.daily.data[0].temperatureLow +
//           ". There is a " +
//           body.currently.precipProbability +
//           "% chance of rain."
//       );
//     }
//   });
// };

// module.exports = forecast;

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=07cc84c08888f584dd74b5566d35a757&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback("Unable to connect to weather services", undefined);
    } else if (body.error) {
      callback("Unable to find weather.", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ", It is currently:  " +
          body.current.temperature +
          "  degrees out,it feels like:   " +
          body.current.feelslike +
          "  degree"
      );
    }
  });
};

module.exports = forecast;
