<?php
	$fullname = $_POST['fullname'];
	$email = $_POST['email'];
	$nachricht = $_POST['message'];
	$message="
	<html>
	<head>
	<title>Email an die Webfabrikanten</title>
	</head>
	<body>
	-----------------------------------------------------------------------------------<br>
	Name			      	: $fullname<br>
	eMail             : $email<br>
	Nachricht		  		: $nachricht<br>
	-----------------------------------------------------------------------------------<br>
	</body>
	</html>
	";
	$an = "chessmaster2000@t-online.de";
	$betreff = "Email an die Webfabrikanten";
	$xtra = "From: $email\r\n";
	$xtra .= "Content-Type: text/html\r\nContent-Transfer-Encoding:8bit\r\n";
	$xtra .= "X-Mailer: PHP ". phpversion();
	mail ($an, $betreff, $message, $xtra);
?>
