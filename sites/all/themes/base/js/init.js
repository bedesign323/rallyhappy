Drupal.behaviors.init = {
	attach: function (context, settings) {

		(function ($) {
 			
			$.scrollIt({
			  scrollTime: 800,       
			  activeClass: 'active', 
			  topOffset: -35          
			});

			$('.menu-toggle, #nav ul li a').click(function(){
				if($(window).width() < 500){
					$('#nav ul').slideToggle(300);
				}
			});

			$('.md-trigger').click(function(){
				return false;
			})

		}(jQuery));
	}
}