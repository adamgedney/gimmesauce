
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






exports.find_all = function(fn) {

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).find({status:"active"},{sort:{added: -1}}).toArray(function(err, results) {

			fn(results);
			// db.close();
		});
	});
};






exports.find_by_id = function(prod, fn) {

//converts id to a BSON obj id
var BSON = require('mongodb').BSONPure;
var obj_id = BSON.ObjectID.createFromHexString(prod.id);

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).findOne({"_id" : obj_id }, function(err, results) {

			fn(results);
			// db.close();
		});
	});
};






exports.update_by_id = function(query, fn) {

//converts id to a BSON obj id
var BSON = require('mongodb').BSONPure;
var obj_id = BSON.ObjectID.createFromHexString(query.id);

	//looks for new image on update.
	//refactored to disclude query.id
	if(query.img){
		var update = {
			"img" : query.img,
			"title" : query.title,
			"desc" : query.desc,
			"href" : query.href
		};

	}else{

		var update = {
			"title" : query.title,
			"desc" : query.desc,
			"href" : query.href
		};	
	};//if/else


	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).update({_id : obj_id}, {$set: update}, function(err, results) {
			fn(results);
			// db.close();
		});
	});
};






exports.delete_by_id = function(id, fn) {

//converts id to a BSON obj id
var BSON = require('mongodb').BSONPure;
var obj_id = BSON.ObjectID.createFromHexString(id);

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		var q = {
			"status" : "deleted"
		};

		db.collection(collectionName).update({_id : obj_id}, {$set: q}, function(err, results) {
			fn(results);
			// db.close();
		});
	});
};




		
	