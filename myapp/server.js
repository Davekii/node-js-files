var express = require('express');
var app = express();
const hostname = '127.0.0.1';

app.get('/', function (req, res) {
	console.log('Got a POST requests for the homepage');
	res.send('hello DELETE');
})

app.post('/', function (req, res) {
	console.log('Got a DELETE request for /del_user');
	res.send('hello delete');
})

app.delete('/del_user', function (req, res) {
	console.log('got a get requests for /list_user');
	res.send('page listing');
})

app.get('/list_user', function ( req, res ) { 
	console.log('got a get requests for /ab*cd');
	res.send('page pattern match');
})

var server = app.listen(8081, function () { 
	var host = server.address().address
	var port = server.address().port

    console.log(`Server running at http://${hostname}:${port}/`);
})
