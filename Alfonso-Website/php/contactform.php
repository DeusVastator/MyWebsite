<?php

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $txt = $_POST['message'];
    
    $to = "cubanyeti@gmail.com";
    $headers = 'From: ' . $mailFrom . "\r\n" . 'Reply-To: ' . $mailFrom;
    $message = 'You have received an e-mail from: ' . $name . "\n\n" . $txt;
    
    mail($to, $subject, $message, $headers);
    
    
   
    
}


?>