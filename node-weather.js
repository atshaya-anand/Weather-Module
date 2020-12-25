const request = require('request');

var weather = '';
var error = '';


exports.getWeather = function(loc){
    
    loc = loc.trim();
    var city = loc.replace(/[^a-zA-Z ]/g, "");
    var reqCity = city.split(" ");
    
    if (reqCity.length > 1){
      
      for(var i=0;i<reqCity.length;i++){
        reqCity[i] = reqCity[i].charAt(0).toUpperCase() + reqCity[i].slice(1);
      }
      city = reqCity.join();
      city = city.replace(",","-");

    }else{
      
      city = city.charAt(0).toUpperCase() + city.slice(1);
    
    }

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


