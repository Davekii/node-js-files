const ipInfo = require('ipinfo')
const log = require('log-to-file');

function get_ipInfo() {  
	return ipInfo((err, Cloc) => {console.log(err || Cloc)});
};

var res_ipData = get_ipInfo();
log(res_ipData, '/Users/davek/working_files/nodejs_files/weather/weather.log', '\n');
