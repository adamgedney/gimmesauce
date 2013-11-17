
module.exports.controller = function(app){
var fs = require('fs');

global.fileName = {};


	app.post('/action_update', function(req, res){
	
	//if files exist in upload field
	if(req.files.fileupload.path != null){
		//writes file to server
		fs.readFile(req.files.fileupload.path, function (err, data) {
		  
			//stores original filename and image upload path
			fileName = req.files.fileupload.originalFilename;
			var newPath = "/Users/adamgedney/github/gimmesauce/public/images/products/" + fileName;



			fs.writeFile(newPath, data, function (err) {
				res.end();
			});

			
		});// readfile

			//prepare object for update
			var product = {
				"id" : req.body.pid,
				"title" : req.body.title,
				"desc" : req.body.description,
				"href" : req.body.link
			};


			var imgpath = "/images/products/" + fileName;
			product.img = imgpath;
		



	}else{


		//prepare object for update
		var product = {
			"id" : req.body.pid,
			"title" : req.body.title,
			"desc" : req.body.description,
			"href" : req.body.link
		};


	};// if files

		// loads model for database entry
		var products = require('../models/products.js');

		products.update_by_id(product, function(response){
			
			res.redirect('back');

		});//update product
		
	});// app.post
};// module
