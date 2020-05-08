$(document).ready(function() {
	const pull 		= $('#pull');
		menu 		= $('.menu');
		navMenu 	= $('.header-nav');
		header      = $(".header");
		menuHeight	= menu.height();

	$(document).on('click', function(e) {
		const w = $(window).width();
		if (!navMenu.is(e.target) && navMenu.has(e.target).length === 0 && w < 769) {
			menu.hide();
			$(header).removeClass("down");
		}
	});

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle(200);
		$(header).toggleClass("down");
	});

	$('.menu a').on('click', function() {
		const w = $(window).width();
		if (w < 769) {
			menu.hide();
		}
	});

	$(window).resize(function() {
		const w = $(window).width();
		if(w > 770) {
			$(".menu").removeAttr("style");
			$(header).removeClass("down");
			$(".popup-main").slideUp(200);
		}
	});
});