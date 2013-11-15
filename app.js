var express = require('express');
var ejs = require('ejs');

//new express instance
var app = express();

//sets the templating engine to ejs
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', function(req, res){

	//simple render w/o data being passed
	res.render('home-body');
});


app.get('/test', function(req, res){
	var data = {};
	data.title = "I Like Meat";

	//render "test" page passing the data object
	//for dynamic echoing
	res.render('test', data);
});

app.get('/admin', function(req, res){

	res.render('admin');
});

//listen on port 3000
app.listen(3000);

