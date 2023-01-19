(function($) { 		

	 "use strict";

	//Preloader

	var preloader = $('.preloader');

	$(window).load(function(){

		preloader.remove();

	});

	

	// superslides

	$('.header_v1 #banner').superslides({

	  animation: 'fade',

	  play: 5000

	});

	// scroll

	$(window).on('scroll', function() {

		var scroll = $(window).scrollTop();



		if (scroll >= 50) {

			$('.navbar ').addClass('stuck');

		} else {

			$('.navbar ').removeClass('stuck');

		}

	});

	// parallax

	$(function(){

        if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {

          $('#ios-notice').removeClass('hidden');

          $('.parallax-container').height( $(window).height() * 0.5 | 0 );

        } else {

          $(window).resize(function(){

            var parallaxHeight = Math.max($(window).height() * 0.7, 200) | 0;

            $('.parallax-container').height(parallaxHeight);

          }).trigger('resize');

        }

      });

	  //mixitup

		$(function(){

			$('#Grid').mixitup();

		});

			

		// Fancybox

			$(".projects-images").each(function(n){
					$(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
		   swipe: true,
		    swipeToSlide: false,
			 swipeLeft: null,
		
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            //preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
              return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
          }
        });
				});

		// Testimonial

		

		$("#testimonial").owlCarousel({

			autoPlay : 6000,

			stopOnHover : true,

			//navigation:true,

			paginationSpeed : 1000,

			goToFirstSpeed : 2000,

			singleItem : true,

			autoHeight : true,

      	});

		

	  	// Logoes

		$("#logoes").owlCarousel({

			autoPlay : 3000,

			items : 4,

			itemsDesktop : [1199,4],

			itemsDesktopSmall : [980,4],

			itemsTablet: [768,2],

			itemsTabletSmall: false,

			itemsMobile : [479,1],

			navigation : true,

			pagination : false,

			

      	});

		

		// Blog Slider

		$("#blog-slider").owlCarousel({

			autoPlay : 3000,

			items : 1,

			itemsDesktop : [1199,1],

			itemsDesktopSmall : [980,1],

			itemsTablet: [768,1],

			itemsTabletSmall: false,

			itemsMobile : [479,1],

			navigation : true,

			pagination : false,

			

      	});

		

		//#main-slider

	var slideHeight = $(window).height();

	$('#home-image .item').css('height',slideHeight);



	$(window).resize(function(){'use strict',

		$('#home-image .item').css('height',slideHeight);

	});

	

	var slideWidth = $(window).width();

	$('#home-image .item').css('width',slideWidth);



	$(window).resize(function(){'use strict',

		$('#home-image .item').css('width',slideWidth);
		
	});
	
$(".player").mb_YTPlayer();
}(jQuery));


