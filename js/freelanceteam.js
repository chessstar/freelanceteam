// Diese Funktion dient zum vertikalen Zentrieren einer Text-Box in einem variablen DIV
// Dies ist mit CSS nicht möglich
function verticalCenter()	{
	var imgHeight = $('.portrait').height();
	$('#freelanceteam_description').css('height',imgHeight)
}
// ScrollTo Plugins
	$("a#about").click( function() {$.scrollTo( $('section#impressum'), 800);
		return false;
	});
	$("a#contact").click( function() {$.scrollTo( $('section#kontakt'), 800);
		return false;
	});
	$("a#aboutus").click( function() {$.scrollTo( $('section#ueberuns'), 800);
		return false;
	});
	$("a#prices").click( function() {$.scrollTo( $('section#preise'), 800, {offset:15});
		return false;
	});
	$("a#references").click( function() {$.scrollTo( $('section#referenzen_gross'), 800);
		return false;
	});
	$("a.up").click( function() {$.scrollTo('0px', 800);
		return false;
	});
// Funktionsaufruf
verticalCenter();
// Window.resize
// 1. Zentriere, falls sich die Fenstergröße ändert
	$( window ).resize(function() {
		verticalCenter();
		}
	);
