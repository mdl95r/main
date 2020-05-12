$(document).ready(function() {
	$(".form-top").submit(function(event) {
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
    
    const $url = "/handler.php"
    
    $.ajax({
      url: $url,
      type: $method,
      data: $data, 
      dataType: "json",
      complete: function(){ 
        $('.form-top')[0].reset();
      }
    });
  });
  
  
  $(".form-bottom").submit(function(event) {
    try {
        yaCounter60749653.reachGoal('fastMaster');
    } catch (e) {
        console.log('Отправка данных не удалась', e); 
    }
  
    event.preventDefault();
    $data2 = $(this).serialize();

    if(!$(this).attr("method")) { 
      var $method2 = "post"; 
    } else { 
      var $method2 = $(this).attr("method"); 
    }
    
    const $url2 = "/handler2.php"
    
    $.ajax({
      url: $url2,
      type: $method2,
      data: $data2, 
      dataType: "json",
      complete: function(){
        $(".popup-main").slideUp(200);
        $('.form-bottom')[0].reset();
      }
    });
  });
});