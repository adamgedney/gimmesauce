module.exports.controller = function(app){

global.data = {};

	app.get('/', function(req, res){

		//require('../models/products');

		if(req.session.username){
			data.username = req.session.username;
		}else{
			data.username = "User";
		}

		if(req.session.loggedin == true){
			data.loggedin = true;
		}else{
			data.loggedin = false;
		};




		//query database to get products
		var products = require('../models/products.js');
		
			products.find_all(function(r){
			
				data.response = r;

				//renders view in callback
				res.render('home-body', data);
				
			});//find_all
	});
}




