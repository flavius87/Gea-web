<?php
 
if($_POST) {
    $name = "";
    $lastName = "";
    $email = "";
    $phone = "";
    $city = "";
    $subject = "";
    $message = "";
     
    if(isset($_POST['name'])) {
      $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }

    if(isset($_POST['lastName'])) {
        $lastName = filter_var($_POST['lastName'], FILTER_SANITIZE_STRING);
      }
     
    if(isset($_POST['email'])) {
        $email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $email = filter_var($email, FILTER_VALIDATE_EMAIL);
    }
     
    if(isset($_POST['phone'])) {
        $phone = filter_var($_POST['phone']);
    }
     
    if(isset($_POST['city'])) {
        $city = filter_var($_POST['city']);
    }

    if(isset($_POST['subject'])) {
        $subject = filter_var($_POST['subject']);
    }
     
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
    }
     
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . $email . "\r\n";
     
    if(mail($recipient, $subject, $message, $headers)) {
        echo "<p>Gracias por comunicarte, $name. En breve recibirás una respuesta a tu consulta.</p>";
    } else {
        echo '<p>Tu mail no pudo ser enviado</p>';
    }
     
} else {
    echo '<p>Algo salió mal</p>';
}
 
?>