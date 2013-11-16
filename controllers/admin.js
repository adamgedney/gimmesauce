
module.exports.controller = function(app){


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




	// app.get('/admin/new_product', function(req, res){

	// 	var data = {};
	// 	data.cont = "new";

	// 	res.render('admin-body', data);

	// });




	// app.get('/admin/update_product', function(req, res){

	// 	var data = {};
	// 	data.cont = "update";

	// 	res.render('admin-body', data);

	// });




	// app.get('/remove_product', function(req, res){

	// 	var data = {};
	// 	data.content = "remove";

	// 	res.render('admin-body', data);

	// });
}
