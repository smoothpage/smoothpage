$(document).ready(function() {
	$('.slider-shares').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 600,
		dots: true,
	});
	var lng = 52.276217;
	var lat = 104.356615;
	var zm = 17;

// burger
(function topMenuResponse(){
	var topMenu = $(".header"),
	buttonResponseToggle = topMenu.find(".burger-b");
	navResponseToggle = topMenu.find(".main-menu");

	buttonResponseToggle.on('click', function(){
		// navResponseToggle.slideToggle();
		$(".header").toggleClass("push-wrap");

	});

})();
// end - burger


if ($(window).width() <= 767) {
	$(".header .header__contacts").appendTo(".header .main-menu");

	lng = 52.276046;
	lat = 104.353011;
	zm = 16;
}

if ($(window).width() > 767) {
	$(".main-menu .header__contacts").prependTo(".header .header__right");

}

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map("map", {
		center: [lng, lat],
		zoom: zm,
		controls: []
	}, {
		searchControlProvider: 'yandex#search'
	});
	myMap.behaviors.disable('scrollZoom');

	myMap.geoObjects
	.add(new ymaps.Placemark([52.276046, 104.353011], {
		balloonContent: 'улица Ширямова 2/8',
		iconCaption: 'улица Ширямова 2/8'
	}, {
		preset: 'islands#blueCircleDotIconWithCaption',
		iconCaptionMaxWidth: '250'
	}));
}

// link-scroll
$("a.main-menu__link").click(function() {
	$("html, body").animate({
		scrollTop: $($(this).attr("href")).offset().top + "px"
	}, {
		duration: 500,
		easing: "swing"
	});
	return false;
});
// end - link-scroll

// scroll-top
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() >= 800) {
			$('.link-top').fadeIn();
		} else {
			$('.link-top').fadeOut();
		}
	});

	$('.link-top').click(function() {

		$('body,html').animate({scrollTop:0},800);

	});

});
// end - scroll-top

})

$(window).resize(function(){
	if ($(window).width() <= 767) {
		$(".header__contacts").appendTo(".main-menu");
		lng = 52.276046;
		lat = 104.353011;
		zm = 16;
	}
	else{
		$('.navbar-mobile__wrap').show();
	}

	if ($(window).width() > 767) {
		$(".main-menu .header__contacts").prependTo(".header__right");
		$(".header").removeClass('push-wrap')
	}

})


