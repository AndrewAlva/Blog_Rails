// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .


var Blog = {
	init: function(){
		Log('Init funciona');
		Statics.init();
		Blog.listeners();
	},
	load: function () {
		
	},
	listeners: function(){
		Log('Iniciando listeners');
		// $('a[href="#"]').on('click', function(event){
		// 	event.preventDefault();
		// });

		$(document).on('click', 'a[href="#"]', function(event){
			event.preventDefault();
			Log('Prevent default listo');
		});
	}
} 

var Log = function (message) {
	if (window.console) {
		console.log(message);
	} else {
		alert(message);
	} 
}

$(document).ready(Blog.init());

$(window).on('load', function () {
	 Blog.load();
	 Log('Window loaded');
});