const request = require('request');

let weather = '';
var error = '';


exports.getWeather = function(city){
    
    var url = `https://www.weather-forecast.com/locations/`+city+`/forecasts/latest`;
    request(url, function (err, response, body) {
        if(err){
          console.log('error:', error);
        } else {
          var pageArray = body.split('(1&ndash;3 days):</div><p class="location-summary__text"><span class="phrase">');
          var secondPageArray = pageArray[1].split('</span></p></div><div class="location-summary__item location-summary__item--js is-truncated"><div class="location-summary__heading-with-ext"><h2 class="location-summary__heading">');
          weather = secondPageArray[0];
          console.log(weather);
        }
      });
    //console.log(weather);
    //return weather;

}


