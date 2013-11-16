
module.exports.controller = function(app){
var fs = require('fs');

	app.get('/action_test', function(req, res){

		var products = require('../models/products.js');
				
		var now = new Date();

		var product = {
			"img" : '',
			"title" : 'Something',
			"desc" : 'Something',
			"added" : now,
			"href" : 'Something',
			"status" : "active"
		};


		products.create_product(product, function(response){
			console.log(response);
		});

	});

	/*app.post('/action_upload', function(req, res){
		console.log(req.files);

		//writes file to server
		fs.readFile(req.files.fileupload.path, function (err, data) {
		  
			//stores original filename and image upload path
			var fileName = req.files.fileupload.originalFilename;
			var newPath = "/Users/adamgedney/github/gimmesauce/public/uploads/" + fileName;



			fs.writeFile(newPath, data, function (err) {
				// console.log(newPath);
				res.redirect("back");
				// res.end();
			});




				// loads model for database entry
				var products = require('../models/products.js');
				
				var now = new Date();

				var product = {
					"img" : newPath,
					"title" : req.body.title,
					"desc" : req.body.description,
					"added" : now,
					"href" : req.body.link,
					"status" : "active"
				};


				products.create_product(product, function(response){
					console.log(response);

				});//create product
		});// readfile
	});// app.post*/
};// module
