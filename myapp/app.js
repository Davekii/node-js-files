const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.usr(bodyParser.urlencoded({ extended: true }));

app.post('/post', (req, res) => {
	res.send('<h1> welcome! </h1>' + req.body.input);
});
