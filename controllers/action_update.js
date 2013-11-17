module.exports.controller = function(app){
var fs = require('fs');

global.fileName = {};
global.body = {};
global.product = {};


	app.post('/action_update', function(req, res){
	
	body = req.body;

		// loads model for database entry
		var products = require('../models/products.js');

		//if files exist in upload field
		if(req.files.fileupload.originalFilename != ""){
			//writes file to server
			fs.readFile(req.files.fileupload.path, function (err, data) {
			  
				//stores original filename and image upload path
				fileName = req.files.fileupload.originalFilename;
				var newPath = "/Users/adamgedney/github/gimmesauce/public/images/products/" + fileName;



				fs.writeFile(newPath, data, function (err) {
					res.end();
				});


				//prepare object for update
				//including image path
				product = {
					"id" : body.pid,
					"title" : body.title,
					"desc" : body.description,
					"href" : body.link
				};


				var imgpath = "/images/products/" + fileName;
				product.img = imgpath;

				products.update_by_id(product, function(response){
		
				});//update product
				
			});// readfile


			res.redirect('back');

		}else{


			//prepare object for update
			product = {
				"id" : body.pid,
				"title" : body.title,
				"desc" : body.description,
				"href" : body.link
			};


			products.update_by_id(product, function(response){
		
				res.redirect('back');

			});//update product
		};// if/else files	
	});// app.post
};// module
