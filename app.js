var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var MongoStore = require('connect-mongo')(express);

var app = express();

//database connection
// var mongodb = require('mongodb');
// mongodb.connect('mongodb://localhost/mydb');

//sets the templating engine to ejs
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('1234567890QWERTY'));
//uses mongo to store session data
app.use(express.session({
	store: new MongoStore({
    url: 'mongodb://localhost:27017/sauce'
  }),secret: '1234567890QWERTY'}));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



//dynamic controller routing
fs.readdirSync('./controllers').forEach(function(file){
	if(file.substr(-3) == '.js'){
		var route = require('./controllers/' + file);
		route.controller(app);
	}
});

//404 handling
// app.get('/*', function(req, res){
// 	res.render('error/404');
// });

//listen on port 3000
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

process.on('SIGTERM', function(){
	mongoose.disconnect();
})
