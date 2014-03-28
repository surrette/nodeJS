var express = require('express')
  , mongoose = require('mongoose');
var app = express();
app.use(express.logger());

mongoose.connect("mongodb://steve:steve@ds033797.mongolab.com:33797/heroku_app23345901");
var Cat = mongoose.model('Cat', { name: String });


app.get('/', function(request, response) {
	var kitty = new Cat({ name: 'Zildjian' });
	kitty.save(function (err) {
	  if (err) // ...
 	 console.log('meow');
    });
  response.send('Hello World! database test change');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
