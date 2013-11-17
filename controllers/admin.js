
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
console.log(req);
		var data = {};
		data.cont = "update";

		data.username = req.session.username;

		if(req.session.loggedin == true){
			data.loggedin = true;
		}else{
			data.loggedin = false;
		};


		//query database to get product  by id
		var products = require('../models/products.js');
		var pid = req.query.id;
		
			
			products.find_by_id({"id" : pid},function(r){
			
				resp = r;

			});//find_all

		data.response = resp;
	
		res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
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
