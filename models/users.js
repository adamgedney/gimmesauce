
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var format = require('util').format;

var databaseName = 'sauce';
var collectionName = 'users';


//--------------------------------------exports-----------------------------------------

exports.find_by_username_and_pass = function(query, fn) {

	mongoClient.connect('mongodb://localhost:27017/' + databaseName, function(err, db) {

		db.collection(collectionName).findOne(query, function(results) {
			
			
				fn(results);
	

			
			// db.close();
		});
	});
};

