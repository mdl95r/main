 <?php
$to = "awesomemdl95@gmail.com";
$tema = "Заявка на ремонт";
$message = "Имя: ".$_POST['name'] ."\r\n";
$message .= "Телефон: ".$_POST['phone'] ."\r\n";
$message .= "Модель телевизора: ".$_POST['model'];
$headers = 'From: tv-master@tv-oskol.ru' . "\r\n" .
    'Reply-To: tv-master@tv-oskol.ru' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
    "Content-Type: text/html; charset=UTF-8";
mail($to, $tema, $message, $headers);
?>