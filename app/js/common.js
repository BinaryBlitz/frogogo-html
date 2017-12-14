$(document).ready(function() {
  
  //Burger menu

  $('.burger-wrap a').click(function(){
    $(this).toggleClass('active');
    $('.nav ul').toggleClass('active');
    return false;
  });

  // Timer http://keith-wood.name/countdown.html

 	var newYear = new Date(2017, 12-1, 31); 
 	$('.timer').countdown({until: newYear}); 

 	// Slick carousel

 	$('.showcase-product-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
 		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
 		speed: 200,
 		draggable: false
 	});

 	$('.another-product-carousel').slick({
 		prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
 		nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
 		speed: 200,
 		slidesToShow: 4,
 		slidesToScroll: 1,
 		responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 575,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
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

 	if( $('[data-fancybox]').length ) {
 		$('[data-fancybox]').fancybox();
 	}
 	
 	// Balance popup

 	$('.balance-text').click(function() {
 		$(this).parent().toggleClass('active');
 		$(this).next().toggleClass('active');
 	});

 	$(document).on('click', function(e) {
	  if (!$(e.target).closest(".balance").length) {
	    $('.balance').removeClass('active');
	    $('.balance-nav').removeClass('active');
	  }
	  e.stopPropagation();
	});

	// Gallery change image

	$('.product-gallery-mini .item').click(function(e) {
		e.preventDefault();
		var img_src = $(this).find('img').attr('src');
		$('.product-gallery-main img').attr('src', img_src);
	});

	// Cart amount

	$('.cart-amount-minus').click(function() {
		var input = $(this).next();
		if( input.val() > 1 ) {
			input.val( input.val() - 1 );
		}
	});

	$('.cart-amount-plus').click(function() {
		var input = $(this).prev();
		input.val( +input.val() + 1 );
	});

	// Cart bonus slider

	var handle = $( ".cart-bonus-rub" );
	var slider = $('.slider');
  slider.slider({
  	min:0,
  	value: slider.data('value'),
  	range: 'min',
  	max: slider.data('max'),
    create: function() {
      handle.text( $( this ).slider( "value" ) + '₽' );
    },
    slide: function( event, ui ) {
      handle.text( ui.value + '₽' );
    }
  });
	  
});





