<?php
$field_name = $_POST['name2'];
$field_email = $_POST['email2'];
$field_message = $_POST['message2'];
$field_subject = $_POST['subject2'];

$mail_to = 'mikimausd8@gmail.com';
$subject = 'Email from contact form - Rebalancepsy.ru'.$field_name;

$body_message = 'Имя: '.$field_name."\n";
$body_message .= 'E-Mail: '.$field_email."\n";
$body_message .= 'Сообщение: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

header("Content-type: text/html; charset=utf-8");

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Спасибо за сообщение. Мы свяжемся с вами в ближайшее время.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Сообщение отправить не удалось. Пожалуйста, отправьте электронное письмо по адресу rebalance.psy@gmail.com');
		window.location = 'index.html';
	</script>
<?php
}
?>