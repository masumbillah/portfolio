<?php

    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    //Your own email address
    $toEmail = "masum.billah78@gmail.com";
    
    // Set email header
    $mailHeaders = "From: " . $name . "<". $email .">\r\n";
    
    //Email sent and get result
    if($toEmail && $subject && $message && $mailHeaders) {
        $result =  mail($toEmail, $subject, $message, $mailHeaders);
    }

    //Show email 
    if($result) {
        echo "Thank You " . $name . "! We will be in contact with you very soon.";
    } else {
        echo "Oops! Something went wrong. Please Try again.";
    }
    
?>