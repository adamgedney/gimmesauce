var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/sauce");
var db = mongoose.connection;


var Product = new Schema({
	"img" : String,
	"title" : String,
	"desc" : String,
	"added" : String,
	"href" : String,
	"status" : String
});

var ProductModel = mongoose.model('Product', Product);


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

exports.create_product = function(query, fn){
	
	var product = new Product({
		"img" : query.img,
		"title" : query.title,
		"desc" : query.desc,
		"added" : query.added,
		"href" : query.href,
		"status" : query.status
	});

	console.log(product);

	/*product.save(function(err){
		
		if(!err){

		}else{
			fn(err);
		};
	
	});*/
};






exports.find_all = function(fn){

	ProductModel.find().exec(function(err, data){
		fn(data);
	});
};





exports.find_by_id = function(query, fn){
	
	UserModel.find({"_id" : query.id}).exec(function(err, data){
		fn(data);
	});

};





exports.update_by_id = function(query, fn){
	
	// var query = {
	// 	"img" : query.img,
	// 	"title" : query.title,
	// 	"desc" : query.desc,
	// 	"added" : query.added,
	// 	"href" : query.href,
	//  "status" : query.status
	// });

	UserModel.findOneAndUpdate({"_id" : query.id}, query, function(err, data){
		fn(data);
	});
};





exports.delete_by_id = function(query, fn){

	var q = {
		"status" : "deleted"
	};

	UserModel.findOneAndUpdate({"_id" : query.id}, q, function(err, data){
		fn(data);
	});

};
		
	