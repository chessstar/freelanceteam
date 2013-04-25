var webfab = webfab	|| {};

webfab.imageSwitcher = function($)	{

	var anzahl,
		pos1,
		pos2,
		src1,
		src2,
		box1,
		box2,
		hoehe;

	function init(imagePosition)	{
		anzahl = $(".vorschaubild").size();	
		pos1 = imagePosition;
		if (pos1 === anzahl-1)
			{
				pos2 = 0; // Letztes Bild ? Dann 1. Bild auswählen
			}
		else
			{
				pos2 = pos1+1 // Bild daneben auswählen
			}
		src1 = $(".vorschaubild").eq(pos1).attr('src');
		src2 = $(".vorschaubild").eq(pos2).attr('src');
		// Start fadeIn,fadeOut
		fadeimages($('#standardbox1'),src1);
		fadeimages($('#standardbox2'),src2);
		fadetext($('#textbox1'),pos1);
		fadetext($('#textbox2'),pos2);
	}

	function fadeimages(referenz,source)	{
		referenz.append('<img class="versteckt" src='+source+'>');
 		referenz.children().eq(0).stop(true, true).fadeOut('fast', function() {
			referenz.children().eq(1).stop(true, true).fadeIn('fast');
			referenz.children().eq(0).remove();
		});
	}

	function fadetext(referenz,position)	{
 		referenz.find("div.sichtbar").stop(true, true).fadeOut('fast', function() {
			referenz.find("div.sichtbar").removeClass('sichtbar').addClass('versteckt');
			referenz.children().eq(position).stop(true, true).fadeIn('fast');
			referenz.children().eq(position).removeClass('versteckt').addClass('sichtbar');
			textboxheight(); // Hier Funktionsaufruf damit twoBoxes auf gleiche Höhe gebracht wird
		});
	}

	function textboxheight()	{
		box1 = $('#textbox1').height();
		box2 = $('#textbox2').height();
		hoehe = Math.max(box1,box2);
		$('#two_boxes').height(hoehe);
	}

	return {
		init: init, //init is a public function
		textboxheight: textboxheight //texboxheight is a public function
	}

}(jQuery);


webfab.caption = function($)	{

	function align()	{
		
		var divHeight = $('#portrait').height();
		$('#freelanceteam_description_content').css('height',divHeight);
	}	

	return {
		align: align
	}

}(jQuery);


$(document).ready(function() {

	var img = new Image();
	img.onload = function() {
		webfab.caption.align();
	}
	img.src = 'img/freelancer.jpg';

	$('.vorschaubild').on('click', function(event) {
		var position = $(".vorschaubild").index(this);
		webfab.imageSwitcher.init(position);
	});


	// ScrollTo Plugin
	$("a#about").click( function() {$.scrollTo( $('section#impressum'), 800);
		return false;
	});
	$("a#aboutus").click( function() {$.scrollTo( $('section#ueberuns'), 800);
		return false;
	});
	$("a#prices").click( function() {$.scrollTo( $('section#preise'), 800, {offset:5});
		return false;
	});
	$("a#references").click( function() {$.scrollTo( $('section#referenzen_gross'), 800);
		return false;
	});
	$("a.up").click( function() {$.scrollTo('0px', 800);
		return false;
	});


	// Window.resize
	// 1. Zentriere, falls sich die Fenstergröße ändert
	// 2. Textboxen ausgleichen
	$( window ).resize(function() {
		webfab.imageSwitcher.textboxheight();
		webfab.caption.align();
		}
	);
// Ende
});



