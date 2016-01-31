/**
 * http://usejsdoc.org/
 */
//
//document.addEventListener('DOMContentLoaded', function(e) {
//
//	var box = document.getElementsByClassName('jumbotron')[0];
//	var showBtn = document.getElementsByClassName('btn-success')[0];
//	var hideBtn = document.getElementsByClassName('btn-danger')[0];
//
//	showBtn.addEventListener('click', function(event) {
//		box.style.display = 'block';
//	});
//
//	hideBtn.addEventListener('click', function(event) {
//		box.style.display = 'none';
//	});
//
//});
//
//window.onload = function() {
//
//}


//----------------------------------------------------------------




$(function(){
	
	var box=$(".jumbotron");
	$(".btn-success").click(function(){
		box.show();
	});
	$(".btn-danger").click(function(){
		box.hide();
	});
	
});
