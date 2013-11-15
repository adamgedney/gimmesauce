
module.exports.controller = function(app){


	app.get('/', function(req, res){
		res.render('home-body');
	});
}







// app.get('/', function(req, res){

// 	//simple render w/o data being passed
// 	res.render('home-body');
// });


// app.get('/test', function(req, res){
// 	var data = {};
// 	data.title = "I Like Meat";

// 	//render "test" page passing the data object
// 	//for dynamic echoing
// 	res.render('test', data);
// });

// app.get('/admin', function(req, res){

// 	res.render('admin');
// });


