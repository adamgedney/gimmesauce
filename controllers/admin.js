
module.exports.controller = function(app){

global.resp = {};

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

		var data = {};
		data.cont = "update";

		data.username = req.session.username;

		if(req.session.loggedin == true){
			data.loggedin = true;
		}else{
			data.loggedin = false;
		};


		//query database to get product  by id
		
		var pid = req.query.id;
		console.log(pid);
			
			products.find_by_id({"id" : pid},function(r){
			
				resp = r;

			});//find_all

		data.response = resp;
		data.id = pid;
		
	
		res.render('admin-body', data);

	});




	app.get('/admin/remove_product', function(req, res){

		var data = {};
		data.content = "remove";

		data.username = req.session.username;

		if(req.session.loggedin == true){
			data.loggedin = true;
		}else{
			data.loggedin = false;
		};

		res.render('admin-body', data);

	});
}
