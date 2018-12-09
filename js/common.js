$(document).ready(function() {

	$('.overlay-link__preview-link').click(function(){
		$('.frame-wrap, .myframe').show();
		$('body').addClass('hidden-y');
	});

	$('#close-frame').click(function(){
		$('.frame-wrap').hide(300);
		$('body').removeClass('hidden-y');
	});

// burger
(function topMenuResponse(){

	var topMenu = $(".header"),
	buttonResponseToggle = topMenu.find(".burger-button");
	navResponseToggle = topMenu.find(".nav-menu");

	buttonResponseToggle.on('click', function(){
		navResponseToggle.slideToggle();
		$(".header").toggleClass("push-wrap");

	});

})();
// end - burger
});