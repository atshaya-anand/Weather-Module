const weather = require('./node-weather.js');

var city = "Coimbatore";

console.log(`Today's Weather for `+city+` is ----- `);
weather.getWeather(city);
