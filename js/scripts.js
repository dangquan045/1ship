var app = app || {};

app.init = function () {

	app.smoothScroll();

	app.backTop();

	app.switchNav();

	app.slideShow();

	if($(":file").length > 0) {
		$(":file").filestyle({
			buttonBefore: true,
			buttonText: "",
			iconName: "fa fa-camera"
		});
	}

}

// Switch Nav
app.switchNav = function() {
	var w = $(window).width();
	var slideoutMenu = $('#navigation');
	var btn_menu = $('.btn-menu');
	var overlay = $('.overlay');

	$('.btn-menu').on('click', function(event){
		
		// toggle open class
		$(this).toggleClass("open");
		
		// slide menu
		if (btn_menu.hasClass("open")) {
			slideoutMenu.slideDown(300);
			overlay.fadeIn('slow');
		} else {
			slideoutMenu.slideUp();
			overlay.fadeOut();
		}
		return false;
	});

	$('.group-menu-item h4').on('click', function(event){
		$(this).toggleClass("collapse");
		$(this).next().stop().slideToggle(300);
	});

}

// Smooth scroll
app.smoothScroll = function() {
	$('a.scroll').click(function() {
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
}


// Page slider
app.slideShow = function() {
	if($('.bx-slider').length > 0) {
		$(".bx-slider").bxSlider({
			mode 		: 'fade',
			auto		: true,
			speed		: 1000,
			pause		: 5000,
			controls 	: false
		});
	}
}

/* BACK TO TOP
==============================*/
app.backTop = function() {
	var backTop = $('#backtop');
	backTop.hide();
	$(window).scroll(function() {
		if($(window).scrollTop() > 300) {
			backTop.fadeIn();
		} else {
			backTop.fadeOut();
		}
	});

	$('#backtop').click(function() {
		$('html, body').animate({scrollTop:0},500);
		return false;
	});
}




$(function() {

	app.init();
	initMap();

});

function initMap() {
	if (document.getElementById("company-map")) {
		var latlng = new google.maps.LatLng(35.497411,137.5067333);
		var mapOptions = {
			zoom: 17,
			scrollwheel: false,
			center: latlng
		};
		
		var map = new google.maps.Map(document.getElementById('company-map'), mapOptions);

		var myMarker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: "岐阜県中津川市東宮町1-2"
		});
	}
}
