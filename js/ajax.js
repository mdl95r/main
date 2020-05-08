$(document).ready(function() {
	$("form").submit(function(event) {
    try {
      yaCounter60749653.reachGoal('formSubmit'); 
    } catch (e) {
      console.log('Отправка данных не удалась', e); 
    }
    $(".popup").fadeOut(200);
    $("body").css("overflow", "visible");
    event.preventDefault();
    $data = $(this).serialize();

    if(!$(this).attr("method")) { 
      var $method = "post"; 
    } else { 
      var $method = $(this).attr("method"); 
    }
    
    $.ajax({
      url: $url,
      type: $method,
      data: $data, 
      dataType: "json",
      complete: function(){ 
        $('form')[0].reset();
      }
    });
  });
});