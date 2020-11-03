<?php

    $to = 'dfox.cup@yandex.ru';
    $subject = 'Test message';
    $message = 'hi world!';
    
    mail($to, $subject, $message);

?>