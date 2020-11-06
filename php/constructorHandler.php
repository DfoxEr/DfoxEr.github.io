<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$stvorki = $_POST['window-type'];
$windowProfile = $_POST['windowProfile'];
$selectedWindow = $_POST['window-selected'];

$dop = $_POST['dop'];

$dopUslugi = '';

while ($cur = current($dop)) {
    $dopUslugi .= key($dop)."; ";
    next($dop);
    
}


$response = array("response" => "error");

if (!empty($name) && !empty($phone) && !empty($stvorki) && !empty($windowProfile)) {
    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';  											
    $mail->SMTPAuth = true;
    $mail->Username = 'lexus.work@mail.ru';
    $mail->Password = 'rerkf1559';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('lexus.work@mail.ru');
    $mail->addAddress('dfox.cup@yandex.ru');

    $mail->isHTML(true);

    $mail->Subject = 'Новая заявка с сайта (конструктор окон)';
    $body    =
    '<h1>Новая заявка с сайта (конструктор окон)</h1>
    <span style="font-size:14px;color:gray;font-weight:bold;letter-spacing:1px;">Имя:</span><br>
    <span style="background:#f3f3f3;font-style:italic;font-weight:bold;">'.$name.'</span><br><br>
    <span style="font-size:14px;color:gray;font-weight:bold;letter-spacing:1px;">Телефон:</span><br>
    <span style="background:#f3f3f3;font-style:italic;font-weight:bold;">'.$phone.'</span><br><br>
    <span style="font-size:14px;color:gray;font-weight:bold;letter-spacing:1px;">Тип окна:</span><br>
    <span style="background:#f3f3f3;font-style:italic;font-weight:bold;">'.$stvorki.'</span><br><br>
    <span style="font-size:14px;color:gray;font-weight:bold;letter-spacing:1px;">Профиль:</span><br>
    <span style="background:#f3f3f3;font-style:italic;font-weight:bold;">'.$windowProfile.'</span><br><br>';

    if (!empty($dopUslugi)) {
        $body .= '
        <span style="font-size:14px;color:gray;font-weight:bold;letter-spacing:1px;">Дополнительно:</span><br>
        <span style="background:#f3f3f3;font-style:italic;font-weight:bold;">'.$dopUslugi.'</span><br><br>';
    }


    $mail->Body = $body;


    $mail->AltBody = '';

    if (!$mail->send()) {
       $response = array("response" => "error");
       echo json_encode($response);
    }
    else {
        $response = array("response" => "ok");
       echo json_encode($response);
    }
}
else {
    $response = array("response" => "error");
    echo json_encode($response);
}

?>