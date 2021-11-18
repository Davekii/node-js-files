const mysql = require('mysql');
const connection = mysql.createConnection ({
	host: 'localhost',
	port: '3306',
	user: 'davek',
	password: 'hill0208',
	database: 'nodelogin'
});
