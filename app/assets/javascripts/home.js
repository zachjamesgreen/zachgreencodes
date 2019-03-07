// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function() {
	var typetypeID = "";
	var ee = new EventEmitter();
	svgReplace();
	$('nav').addClass('ready')

	$('.header-image img').delay(2000).queue(function() {
		$(this).addClass('ready');
	});

	$(window).scroll(headerAddClassTop);

});

var headerAddClassTop = function() {
	if ($(window).scrollTop() >= 200) {
			$('header').addClass('top');
	} else {
			$('header').removeClass('top');
	}
}


// ----------------------------------------
// SVG images
// ----------------------------------------

// Replace all SVG images with inline SVG
var svgReplace = function() {
	$('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

			setUpClickHandlers();
			setUpTooltips();
		}, 'xml');

	});
}
