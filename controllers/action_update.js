
module.exports.controller = function(app){
var fs = require('fs');
global.product = {};


	app.post('/action_update', function(req, res){
		

		// loads model for database entry
				var products = require('../models/products.js');

				var now = new Date();


				product = {
					"title" : req.body.title,
					"desc" : req.body.description,
					"href" : req.body.link
				};


	//if files exist in upload field
	if(req.files){
		//writes file to server
		fs.readFile(req.files.fileupload.path, function (err, data) {
		  
			//stores original filename and image upload path
			var fileName = req.files.fileupload.originalFilename;
			var newPath = "/Users/adamgedney/github/gimmesauce/public/images/products/" + fileName;



			fs.writeFile(newPath, data, function (err) {
				// console.log(newPath);
				res.redirect("back");
				// res.end();
			});

			//set file path
			var imgpath = "/images/products/" + fileName;
			product.img = imgpath;
		});// readfile
	};// if files


			products.update_by_id(product, function(response){
				
				res.redirect('back');

			});//update product
		
	});// app.post
};// module
