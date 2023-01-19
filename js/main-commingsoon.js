(function($) { 		

	 "use strict";

	//Preloader

	var preloader = $('.preloader');

	$(window).load(function(){

		preloader.remove();

	});







//background



var fadeShow = $(".background").fadeShow({

	correctRatio: true,

	shuffle: true,

	speed: 2500,

	images: ['http://placehold.it/1920x976?text=Image1',

			 'http://placehold.it/1920x976?text=Image2']



});





$("#notify-me").click(function(){



        $(".notify-me-wrapper").fadeIn("slow");



    });





$("#notify-me").click(function(){



        $(".maintenance-wrapper-close").fadeOut("slow");



    });





$("#back-to-main").click(function(){



        $(".notify-me-wrapper").fadeOut("slow");



    });	



	

	$("#back-to-main").click(function(){



        $(".maintenance-wrapper-close").fadeIn("slow");



    });



}(jQuery));







$('#subscribeform').submit(function(){

	var action = $(this).attr('action');

		$("#mesaj").slideUp(750,function() {



		$('#mesaj').hide();

	$('#subsubmit')



			.after('')



			.attr('disabled','disabled');

	$.post(action, {



			email: $('#subemail').val()



		},



			function(data){



				document.getElementById('mesaj').innerHTML = data;



				$('#mesaj').slideDown('slow');



				$('#subscribeform img.subscribe-loader').fadeOut('slow',function(){$(this).remove()});



				$('#subsubmit').removeAttr('disabled');



				if(data.match('success') != null) $('#subscribeform').slideUp('slow');

			}



		);



		});



		return false;



	});

