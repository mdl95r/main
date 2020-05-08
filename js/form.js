function showPopup() {
 	$(".up").css("display", "none");
	$(".popup").css("display", "block");
	$("body").css("overflow", "hidden");

	// при открытии формы, закрыть попап внизу страницы
	$(".popup-main").slideUp(200);
}

$(document).ready(function() {
	$(".popup_bg,.btn-close").click(function(){
		const height = $(document).scrollTop();
		if ( height >= 300 ) {
    	 	$(".up").css("display", "block");
    	 } else {
    	 if ( height < 300 ) 
    	 	$(".up").css("display", "none");
    	};
		$(".popup").css("display", "none");
		$("body").css("overflow", "visible");
	});

	$(window).keydown(function(e){
		if (e.keyCode == 27) {
           $(".popup").fadeOut(80);
           $("body").css("overflow", "visible");
		}
	});

	$('#tel').mask('8(000)000-00-00');
	$('#phone-number').mask('8(000)000-00-00');
	
	$('#tel, #name').focus(function(){ 
      $(this).attr("placeholder","");
   });

	$('#name').blur(function(){ 
      $(this).attr("placeholder","Как к вам обращаться?");
   });
	
	$('#tel').blur(function(){ 
      $(this).attr("placeholder","Телефон для связи*");
   });

//  запускаю функцию с задержкой в 15 сек.
	setTimeout(popupSetUp, 15000);
	
	// функция для запуска попапа
	function popupSetUp() {
		// записываем в переменную ширину окна
		const w = $(window).width();

		// если экран меньше 769
		if (w < 769) {
			// то показываю попап
			$(".popup-main").slideDown(200);
		}	
	}

	// при клике по кресту закрыть попап
	$(".popup-bottom").on("click", function(){
		$(".popup-main").slideUp(200);
	});
});