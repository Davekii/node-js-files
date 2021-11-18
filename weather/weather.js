const fs = require('fs');
const log = require('log-to-file');
const util = require('util');
let ownKey = '8838c6ec9419edfd5883c619e8111696'

var weather = require('openweather-apis');

weather.setLang('en');

weather.setCity('Seoul');

weather.setAPPID(ownKey)

weather.getTemperature(function(err, temp){

	var log_data = 'Seoul Temperature: ' + temp; 
	log(log_data, 'weather.log', '\n');
	console.log(temp);
});

