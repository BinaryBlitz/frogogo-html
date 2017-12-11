$(document).ready(function() {
  
  //Burger menu

  $('.burger-wrap a').click(function(){
    $(this).toggleClass('active');
    $('.nav--ul').toggleClass('nav--ul_active')
    return false;
  });

  // Timer http://keith-wood.name/countdown.html

 	var newYear = new Date(2017, 12-1, 31); 
 	$('.timer').countdown({until: newYear}); 

 	// Slick carousel

 	$('.showcase-product-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
 		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
 		speed: 200
 	});

 	// Location checked handle

	$('.location-cities .radio input').each(function() {
 		if($(this).attr('checked') == 'checked') {
 			$(this).closest('label').addClass('checked');
 		} else {
 			$(this).closest('label').removeClass('checked');
 		}
 	});


 	$('.location-cities label').click(function() {
 		$('.location-cities label').removeClass('checked');
 		$(this).addClass('checked');
 	});

 	// Fancybox init

 	$('[data-fancybox]').fancybox({
 		
 	});
 
  
});





