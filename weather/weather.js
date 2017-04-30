const request = require('request');

var getWeather = (lat, long, callback) => {
    request({
        url: `https://api.darksky.net/forecast/e600e35c97827c3c04bde66128b5dc5b/${lat},${long}`,
        json: true
    }, (error, response, body) => {

        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }

    });
};

module.exports.getWeather = getWeather;

