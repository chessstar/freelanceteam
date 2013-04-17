$(document).ready(function() {
	// Referenzen mit fadeIn & fadeOut versehen
	// Zuerst wird die max Anzahl der kleinen Referenzen ermittelt
	// Dann die Positionen des angeklickten Elements bestimmt
	// Danach Rahmen um kleine Referenzen entfernt und gesetzt
	// Zuletzt große Referenzen faden
	// Dann aber noch die Textboxen faden
	// Zuallerletzt die Textboxen auf gleiche Höhe bringen -> function textboxhoehe()
	$('.vorschaubild').on('click', function(event) {
		var anzahl = $("#referenzliste").children().children().size();
		// Es wird die angeklickte Referenz & Referenz rechts daneben angezeigt. 
		// Ausnahme letzte eferenz -> dann wird die erste Referenz angezeigt
		var pos1 = $("#referenzliste").children().children().index(this);
		if (pos1 === anzahl-1)
			{
				pos2 = 0;
			}
		else
			{
				pos2 = pos1+1
			}
		var src1 = $("#referenzliste").children().children().eq(pos1).attr('src');
		var src2 = $("#referenzliste").children().children().eq(pos2).attr('src');
		$("#referenzliste").children().removeClass('aktiv').addClass('inaktiv');
		$('#referenzliste').children().eq(pos1).removeClass('inaktiv').addClass('aktiv');
		$('#referenzliste').children().eq(pos2).removeClass('inaktiv').addClass('aktiv');
		function fadeimages(referenz,source)	{
			referenz.append('<img class="versteckt" src='+source+'>');
	 		referenz.children().eq(0).stop(true, true).fadeOut('fast', function() {
				referenz.children().eq(1).stop(true, true).fadeIn('fast');
				referenz.children().eq(0).remove();
			});
		};
		function fadetext(referenz,position)	{
	 		referenz.children(".sichtbar").stop(true, true).fadeOut('fast', function() {
				referenz.children(".sichtbar").removeClass('sichtbar').addClass('versteckt');
				referenz.children().eq(position).stop(true, true).fadeIn('fast');
				referenz.children().eq(position).removeClass('versteckt').addClass('sichtbar');
			});
		};
		fadeimages($('#standardbox1'),src1);
		fadeimages($('#standardbox2'),src2);
		fadetext($('#textbox1'),pos1);
		fadetext($('#textbox2'),pos2);
		textboxhoehe();  // Funktionsaufruf
	});
	// Textboxen normieren
	// Die Textboxen unter den großen Referenzen müssen gleich hoch sein,
	// sonst floaten beim 320er-Design die kleinen Referenzen nicht richtig
	// Dies wird erreicht, indem die Höhe des umgebende DIV (two_boxes) auf
	// die Höhe der hoeheren Textbox gesetzt wird
	function textboxhoehe()	{
		var box1 = $('#textbox1').height();
		var box2 = $('#textbox2').height();
		var hoehe = Math.max(box1,box2);
		$('#two_boxes').height(hoehe);
	}
	// Bild vorladen und Größe auslesen
	var img = new Image();
	img.onload = function() {
			//console.log(this.src);
			//console.log(this.width);
			//console.log(this.height);
			verticalCenter();
	}
	img.src = 'img/freelancer.jpg';
	// jQuery UI Position
	// vertikale Ausrichten des Textes da mit CSS nicht möglich
	function verticalCenter()	{
		$( "#freelanceteam_description_content" ).position({
			my: "left center",
			at: "right+10px center",
			of: "#webfabrikanten"
		});
	}
	// ScrollTo Plugin
		$("a#about").click( function() {$.scrollTo( $('section#impressum'), 800);
			return false;
		});
		$("a#contact").click( function() {$.scrollTo( $('section#kontakt'), 800);
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
		$( window ).resize(function() {
			verticalCenter();
			textboxhoehe();
			}
		);

// Ende
});



