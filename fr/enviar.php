<?php
$email_from = 'info@villaelisahb.com';
$email_subject = "Envío Formulario - Villa Elisa Hotel Boutique";
$message = '<html><body>';
$message .= '<h2><img style="margin: 0 auto 30px;display: block;width: 150px; height: auto;" src="https://webappsperu.com/villaelisa/images/logo_villaelisa.png"></h2>';
$message .= '<h2 style="text-align: center;">Ha recibido un nuevo mensaje del formulario</h2>';
$message .= '<table rules="all" style="border-color:#666;border: 2px solid #3d3d3d;margin: 0 auto;min-width: 430px;" cellpadding="10">';
$message .= "<tr><td><strong>NOMBRES:</strong> </td><td>" . $_POST['nombres'] . "</td></tr>";
$message .= "<tr><td><strong>PAÍS:</strong> </td><td>" . $_POST['pais'] . "</td></tr>";
$message .= "<tr><td><strong>TELÉFONO:</strong> </td><td>" . $_POST['telefono'] . "</td></tr>";
$message .= "<tr><td><strong>EMAIL:</strong> </td><td>" . strip_tags($_POST['email']) . "</td></tr>";
$message .= "<tr><td><strong>CONSULTAS:</strong> </td><td>" . strip_tags($_POST['consultas']) . "</td></tr>";
$addURLS = $_POST['addURLS'];
if (($addURLS) != '') {
    $message .= "<tr><td><strong>URL To Change (additional):</strong> </td><td>" . strip_tags($addURLS) . "</td></tr>";
}
$curText = htmlentities($_POST['curText']);           
if (($curText) != '') {
    $message .= "<tr><td><strong>CURRENT Content:</strong> </td><td>" . $curText . "</td></tr>";
}
$message .= "</table>";
$message .= "</body></html>";

$to = "info@villaelisahb.com";
$headers = "From: $email_from \r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";

mail($to,$email_subject,$message,$headers);

?> 