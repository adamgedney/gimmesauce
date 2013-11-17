
module.exports.controller = function(app){

// global.resp = {};
global.dataUpdate = {};

	app.get('/admin', function(req, res){

		var data = {};

		data.cont = "new";
		data.username = req.session.username;

		if(req.session.loggedin == true){
			data.loggedin = true;
		}else{
			data.loggedin = false;
		};

		res.render('admin-body', data);

	});




	app.get('/admin/new_product', function(req, res){

		var data = {};
		data.cont = "new";

		data.username = req.session.username;

		if(req.session.loggedin == true){
			data.loggedin = true;
		}else{
			data.loggedin = false;
		};

		res.render('admin-body', data);

	});




	app.get('/admin/update_product', function(req, res){

		

		var products = require('../models/products.js');

		dataUpdate.cont = "update";

		dataUpdate.username = req.session.username;

		if(req.session.loggedin == true){
			dataUpdate.loggedin = true;
		}else{
			dataUpdate.loggedin = false;
		};


	
	
		// var pid = "ObjectId('" + req.query.id + "')";
		
		// console.log(pid);
			
			
			
		var prod = {
			"id" : req.query.id
		};

			//find product, and upon complete render view
			products.find_by_id(prod,function(results){
			
				var pid = req.query.id;
				// resp = r;

				dataUpdate.id = pid;
			
				dataUpdate.response = results;

				res.render('admin-body', dataUpdate);
	
			});//find_by_id
	});// update




	app.get('/admin/remove_product', function(req, res){

		var products = require('../models/products.js');

		var data = {};
		var id = req.query.id;
		console.log("id " + id);


		products.delete_by_id(id, function(results){
			res.redirect('back');
		});

	});
}
