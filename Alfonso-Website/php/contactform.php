<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="../css/style.css">
    <title>Denis Alfonso - School Project Website</title>
    <link rel="icon" type="image/png" href="favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">


    
</head>
    
<body>
        
    <div class="main">
    
    
    
    <nav id="primary_nav_wrap">
        
        <a href="http://www.denisalfonso.com"><img src="../images/Denis%20Alfonso%20Logo%20transparent.png" id="mylogo" width="125"></a>
        
        <p id="myname">Denis Alfonso - Web Developer</p>
        
        <ul id="nav">
            <li class="current-menu-item">
                <a href="../index.html" class="move">Home</a>
            </li>
            <li>
                <a href="../about.html" class="move">About</a>
            </li>
            <li><a href="#" class="move">Media<i class="down"></i></a>
                <ul>
                    <li>
                        <a href="../photo.html" class="move">Images</a>
                    </li>
                    <li>
                        <a href="../video.html" class="move">Video</a>
                    </li>
      
                </ul>
            </li>
            <li><a href="../webdev.html" class="move">Web Dev</a>
   
            </li>
  
            <li><a href="../contact.html" class="move">Contact Me</a></li>
        </ul>
    </nav>



        <h1>Message Sent</h1>
        <p align="center" id="sent-text">Click <a href="../index.html">here</a> to go back to the home screen.</p>
        
        
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
        
        
        
        
 </div>
    
    
    
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    
    <script src="js/brick.js"></script>
    <script src="js/startscreen.js"></script>
       <script src="js/main.js"></script>
</body>
    
</html>