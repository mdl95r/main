$(document).ready(function() {
	$('.menu-item__link').click(function () {
	    var elementClick = $(this).attr("href");
	    var destination = $(elementClick).offset().top;
		$('html, body').animate({ scrollTop: destination }, 600);
		$(".header").removeClass("down");
	    return false;
	});

	 $(window).scroll(function(){
        var height = $(document).scrollTop();
    	 if ( height >= 300 ) {
    	 	$(".up").css("display", "block");
    	 } else {
    	 if ( height < 300 ) 
    	 	$(".up").css("display", "none");
    	 };
    });

	$(".up").on("click", function(event) {
		var w 				= 	$(window).width(),
		 	menu 			= 	$(".menu"),
			displayBlock 	= 	$(".menu").css("display", "none");	
		if(w < 769) {
        	if ( menu != displayBlock) {
				$(".menu").css("display", "none");
				$(".header").removeClass("down");
			}
        } else {
        	if (w > 770) {
        		$(".menu").removeAttr("style");
        	}
        };
    	$("html, body").animate({ scrollTop: 0 }, 500);
	});
});

