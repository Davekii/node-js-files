var ipInfo = require('ip-info-finder');

ipInfo.getIPInfo('203.132.183.161').then(data => {
	console.log(data);

})
.catch(err => console.log(err))
