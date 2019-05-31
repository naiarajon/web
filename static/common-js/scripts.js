

(function ($) {

    "use strict";

	// JQUERY LIGHT BOX

	if ( $.isFunction($.fn.fluidbox) ) {
		$('a').fluidbox();
	}

	//ROUNDED TIMES COUNTDOWN

	if(isExists('#rounded-countdown')){
		var from_sec = $('.countdown').data('from-sec');
		$('.countdown').ClassyCountdown({
			theme: "flat-colors-very-wide",
			from: 1549467790000, // Wednesday, 6 February 2019 15:43:10
		});
	}
	$('[data-nav-menu]').on('click', function(event){

		var $this = $(this),
			visibleHeadArea = $this.data('nav-menu');

		$(visibleHeadArea).toggleClass('visible');

	});

	var isAnimated = false;
})(jQuery);

function isExists(elem){
	if ($(elem).length > 0) {
		return true;
	}
	return false;
}
