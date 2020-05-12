<?php
$to = "awesomemdl95@gmail.com, tvoskol@sms.ru";
$tema = "Заявка на ремонт";
$message .= "Телефон: ".$_POST['phone'] ."\r\n";
$headers = 'From: tv-master@tv-oskol.ru' . "\r\n" .
    'Reply-To: tv-master@tv-oskol.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    "Content-Type: text/html; charset=UTF-8";
mail($to, $tema, $message, $headers);
?>