const weather = require('./node-weather.js');

var city = "%65san diego!!    ";

console.log(`Today's Weather for `+city+` is ----- `);
var det = weather.getWeather(city);
console.log('weather',det);
