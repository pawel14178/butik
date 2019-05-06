<?php
if($_POST){
    $name = $_POST['form_name'];
    $email = $_POST['form_email'];
    $message = $_POST['form_msg'];

//send email
    mail("pawel143700@gmail.com", "This is an email from:" .$email, $message);
}
?>