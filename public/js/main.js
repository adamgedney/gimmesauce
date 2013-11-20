$(function(){

//forces page to load to top
$(this).scrollTop(0);


$(document).on('click', '#login-submit-button', function(e){
e.preventDefault();

var username = $('#username-login-field').val();
var password = $('#password-login-field').val();

	$.ajax({
		url : 'http://localhost:3000/action_login',
		type: 'get',
		dataType: 'json',
		data: {
			username: username,
			password: password
		},
		success: function(response){
	console.log(response.error + "this is the ajax call shitting the bed");
			

			if(response.success == "user logged in"){
				window.location ='/admin';
			}else{
				console.log("user credentials not correct");
			}
		}
	});// /ajax
});// /submit






$(document).on('click', '#logout-submit-button', function(e){
e.preventDefault();

	$.ajax({
		url : '/action_logout',
		type: 'get',
		dataType: 'json',
		success: function(response){

			console.log(response);

			if(response.success == "user has been logged out"){
				window.location ='/';
			}
		}
	});// /ajax
});// /submit






$(document).on('click', '#new-prod', function(e){
e.preventDefault();

var username = $('#username-login-field').val();
var password = $('#password-login-field').val();

	$.ajax({
		url : '/action_login',
		type: 'get',
		dataType: 'json',
		data: {
			username: username,
			password: password
		},
		success: function(response){

			console.log(response);

			if(response.success == "user logged in"){
				window.location ='/admin';
			}
		}
	});// /ajax
});// /submit














});// function





