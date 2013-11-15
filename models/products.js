
//retrieve the Database
var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;

var User = new Schema({
	"_id" : Schema.Types.ObjectId,
	"username" : String,
	"joined" : String,
	"password" : String,
	"first" : String,
	"last" : String,
	"email" : String
});

var Product = new Schema({
	"_id" : Schema.Types.ObjectId,
	"img" : String,
	"title" : String,
	"desc" : String,
	"added" : String,
	"href" : String
});

var UserModel = mongoose.model('User', User);

//Connect to database
mongoose.connect("mongodb://localhost:27017/sauce");
		
// var products = db.collection('products');

//event listeners on connection
db.on('error', function () {
  console.log("an error");
});

db.once('open', function () {
	console.log("Connection open");
});

db.once('close', function () {
	console.log("connection closed");
});


// //exports
// exports.find_all = function(fn){

// 	UserModel.find().exec(function(err, data){

// 		console.log(data);

// 		fn(data);

// 	});

// };

exports.find_by_username = function(query, fn){
	
	UserModel.find({"username" : query}).exec(function(err, data){
		fn(data);
	});

};

		
	