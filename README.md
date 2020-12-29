# Whethere

A simple node package that gives the current weather of a particular location scrapped from [Weather-Forecast.com](https://www.weather-forecast.com/).

## Installation

As with any other node package:

```
npm install whethere
```

## Usage

The package exports a function called - **getWeather()**.

The function takes **one argument**: the required city's name of string type.

And the function returns the current weather for the given city or location.

### Examples

Use it as follows:

```js
// import the function
const weather = require('whethere');

// given a particular location
var city = "berlin";

weather.getWeather(city).then(response =>{
    // logs the current weather for the given location
    console.log('Today's Weather:',response);        
});
```

An other example for using the weather data:

```js
// import the function
const weather = require('whethere');

// given a particular location
var city = "berlin";

weather.getWeather(city).then(response =>{  
    // since the module uses async method call, every operation you do with the data should be done from this scope
    print(response);
});

function print(currentWeather){
    console.log('Today's Weather:',currentWeather);
}
```

### Note

The module performs string manipulations in order to remove all the special characters and extra white spaces from the argument passed to the function. Therefore, no need of string validation or manipulation code.

## Dependencies

The package has one dependency - **request** module 

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

