<?php
  $persona = $_POST["nombre"];
  $telefono = $_POST["telefono"];
  $correo = $_POST["correo"];
  $consulta = $_POST["consulta"];

  $destinatario = "luchososa1990@gmail.com";
  $asunto = "Consulta sobre piletas";
  $cuerpo = '
  <html>
  <head>
     <title>Consulta</title>
  </head>
  <body>
  <h1>'.$persona.'(Telefono: '.$telefono.')</h1>
  <p>
  Responder a: '.$correo.'
  </p>
  <p>
  '.$consulta.'
  </p>
  </body>
  </html>
  ';

  //para el envío en formato HTML
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";

  //dirección del remitente
  $headers .= "From: ".$persona." < ".$correo." >\r\n";


  mail($destinatario,$asunto,$cuerpo,$headers);
  header('Location: contactos.php');

?>
