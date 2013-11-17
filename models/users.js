
//retrieve the Database
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/sauce");
var db = mongoose.connection;

var User = new Schema({
	"_id" : Schema.Types.ObjectId,
	"username" : String,
	"joined" : String,
	"password" : String,
	"first" : String,
	"last" : String,
	"email" : String,
	"status" : String
});


var UserModel = mongoose.model('User', User);


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





//--------------------------------------exports-----------------------------------------

exports.create_user = function(query, fn){
	
	var user = new User({
		"password" : query.password,
		"first" : query.first,
		"last" : query.last,
		"email" : query.email,
		"status" : query.status
	});

	UserModel.save(user, function(err, data){
		fn(data);
	});
};






exports.find_all = function(fn){

	UserModel.find().exec(function(err, data){
		fn(data);
	});
};





exports.find_by_username = function(query, fn){
	
	UserModel.find({"username" : query}).exec(function(err, data){
		fn(data);
	});
};





exports.find_by_username_and_pass = function(query, fn){
	
	UserModel.find({"username" : query.username, "password": query.password}).exec(function(err, data){
		fn(data);
	});
};





exports.update_by_username = function(query, fn){
	
	// var query = {
	// 	"password" : query.password,
	// 	"first" : query.first,
	// 	"last" : query.last,
	// 	"email" : query.email,
	// 	"status" : query.status
	// };

	UserModel.findOneAndUpdate({"username" : query.username}, query, function(err, data){
		fn(data);
	});
};





exports.delete_by_user = function(query, fn){

	var q = {
		"status" : "deleted"
	};

	UserModel.findOneAndUpdate({"username" : query.username}, q, function(err, data){
		fn(data);
	});

};
		
	