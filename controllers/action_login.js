module.exports.controller = function(app){


	app.get('/action_login', function(req, res){

		var user = require('../models/users.js');

		var query = {
			"username" : req.query.username,
			"password" : req.query.password
		};
		


		user.find_by_username_and_pass(query, function(response){
			
			if(response.length > 0){
				//set session here
				req.session.loggedin = true;
				req.session.username = req.query.username;
				
				res.contentType('json');
	  			res.send({success : "user logged in" });
  			}else{

  				res.contentType('json');
	  			res.send({error : "failed to retrieve user" });
  			};//if response
		});//user.find
	});// app.get
};//module
