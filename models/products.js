// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;

// mongoose.connect("mongodb://localhost:27017/sauce");
// var db = mongoose.connection;


// var Product = new Schema({
// 	"img" : String,
// 	"title" : String,
// 	"desc" : String,
// 	"added" : String,
// 	"href" : String,
// 	"status" : String
// });

// var ProductModel = mongoose.model('products', Product);


// //event listeners on connection
// db.on('error', function () {
//   console.log("an error");
// });

// db.once('open', function () {
// 	console.log("Connection open");
// });

// db.once('close', function () {
// 	console.log("connection closed");
// });

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var format = require('util').format;

var databaseName = 'sauce';
var collectionName = 'products';




//--------------------------------------exports-----------------------------------------
exports.create_product = function(query, fn) {

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).insert(query, function(err, results) {
			fn(err, results);
			db.close();
		});
	});
};

//works
// exports.create_product = function(query, fn){
	
// 	var product = new ProductModel({
// 		img : query.img,
// 		title : query.title,
// 		desc : query.desc,
// 		added : query.added,
// 		href : query.href,
// 		status : query.status
// 	});

// 	product.save(function(err){
		
// 			fn(err);
			
// 	});
// };


exports.find_all = function(fn) {

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).find().toArray(function(err, results) {

			fn(results);
			// db.close();
		});
	});
};


//works
// exports.find_all = function(fn){

// 	ProductModel.find(function(err, data){
// 		fn(data);
// 	});
// };


exports.find_by_id = function(prod, fn) {

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).findOne({_id : prod.id}, function(err, results) {
			fn(results);
			// db.close();
		});
	});
};


//works
// exports.find_by_id = function(prod, fn){

	
// 	ProductModel.find({_id : prod.id}, function(err, data){
// 		// console.log(data);
// 		fn(data);
// 	});

// };

exports.update_by_id = function(query, fn) {

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).update({_id : query.id}, {$set: query}, function(err, results) {
			fn(results);
			// db.close();
		});
	});
};

// collection.update({mykey:1}, {$set:{fieldtoupdate:2}}, {w:1}, function(err, result) {});

// exports.update_by_id = function(query, fn){

// 	ProductModel.findOneAndUpdate({_id : query.id}, query, function(err, data){
// 		fn(data);
// 	});
// };



exports.delete_by_id = function(query, fn) {

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		var q = {
			"status" : "deleted"
		};

		db.collection(collectionName).update({_id : query.id}, {$set: q}, function(err, results) {
			fn(results);
			// db.close();
		});
	});
};

// exports.delete_by_id = function(query, fn){

// 	var q = {
// 		"status" : "deleted"
// 	};

// 	UserModel.findOneAndUpdate({_id : query.id}, q, function(err, data){
// 		fn(data);
// 	});

// };
		
	