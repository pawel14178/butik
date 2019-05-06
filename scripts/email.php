<?php

if(isset($_POST['submit'])){
    $msg = 'Email: ' .$_POST['email'] ."\n"
        .'Message: ' .$_POST['opinion'];

    mail("angelbutik.wear@gmail.com", "Opinia", $msg);


} 
?>