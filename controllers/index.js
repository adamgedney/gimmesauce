module.exports.controller = function(app){

global.resp = {};

	app.get('/', function(req, res){

		//require('../models/products');
		var data = {};

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
			
				resp = r;
				
			});//find_all

		data.response = resp;

		// console.log(resp + " response variable");


		//renderer
		res.render('home-body', data);
		
	});
}




