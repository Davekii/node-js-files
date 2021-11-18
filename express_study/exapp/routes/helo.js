var express = require('express');
var router = express.Router();

// get helo page 
router.get('/', function(req, res, next) {
	res.render('helo', {
		title: 'helo',
		data: { 
			'tester': 'test@test.com',
			'tester': 'test@test.com',
			'tester': 'test@test.com',
		}
	});
});

module.exports = router;
