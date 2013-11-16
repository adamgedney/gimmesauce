module.exports.controller = function(app){


	app.get('/action_logout', function(req, res){

		req.session.loggedin = false;
		req.session.destroy();
		
			
		res.contentType('json');
		res.send({ success: "user has been logged out"});
	});
};
