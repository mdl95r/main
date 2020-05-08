$(document).ready(function () {
	// при клике по шапке слайдера
	$('.acc-head').click(function () {
		// меняем у текущего элемента класс и перемещаемся под ДОМ к следующему элементу
		$(this).toggleClass('change').next().slideToggle();
		// у не текущей шапки удаляем класс и перемещаемся под ДОМ к следующему элементу и скрываем аккордеон
		$('.acc-head').not(this).removeClass('change').next().slideUp();
	});
});