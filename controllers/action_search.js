module.exports.controller = function(app){

// global.data = {};

	app.post('/action_search', function(req, res){

		var data = {};
		var products = require('../models/products.js');
		var query = req.body.search.toLowerCase();

		var result_array = [];
		data.response = result_array;



		//get all products to build loop
		var all_products = products.find_all(function(r){
			
			//loops through all products to push only those that match query
			r.forEach(function(item){
				if(item.status == "active"){
					var title = item.title.toLowerCase();
					var desc = item.desc.toLowerCase();


					if(title.indexOf(query) != -1 || desc.indexOf(query) != -1){
						// console.log(title.indexOf(query));
						result_array.push(item);
						console.log(result_array);
					};
				};// if active
			});


			//gets/sets session variables for proper header rendering
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

			
			// re-render home on dislaying search results
			res.render('home-body', data);
			
		});//find_all
	});//app.post






	app.get('/action_search/clear_search', function(req, res){

		var products = require('../models/products.js');
		var data = {};
		

		//get all products to build loop
		var all_products = products.find_all(function(r){
			
			data.response = r;

			//gets/sets session variables for proper header rendering
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


			// re-render home on dislaying search results
			res.render('home-body', data);


		});//find_all
	});//app.post
}// class




