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
