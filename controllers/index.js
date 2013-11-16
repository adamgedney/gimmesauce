
module.exports.controller = function(app){


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


		res.render('home-body', data);
	});
}
