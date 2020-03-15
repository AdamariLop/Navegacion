<?php
 
// Importing DBConfig.php file.
include 'connect.php';
 
// Creating connection.
 $con = mysqli_connect($host_name,$host_user,$host_password,$database_name);
 
 // Getting the received JSON into $json variable.
 $json = file_get_contents('php://input');
 
 // decoding the received JSON and store into $obj variable.
 $obj = json_decode($json,true);
 
 // Populate User name from JSON $obj array and store into $name.
$user = $obj['user'];
 
// Populate User email from JSON $obj array and store into $email.
$pass = $obj['pass'];
 
// Populate Password from JSON $obj array and store into $password.
$correo = $obj['correo'];
 
//Checking Email is already exist or not using SQL query.
$CheckSQL = "SELECT * FROM registro WHERE correo='$correo'";
 
// Executing SQL Query.
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
 
 
if(isset($check)){
 
 $EmailExistMSG = 'El correo ya existe. Intenta de nuevo.';
 
 // Converting the message into JSON format.
$EmailExistJson = json_encode($EmailExistMSG);
 
// Echo the message.
 echo $EmailExistJson ; 
 
 }
 else{
 
 // Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into registro (user,pass,correo) values ('$user','$pass','$correo')";
 
 
 if(mysqli_query($con,$Sql_Query)){
 
 // If the record inserted successfully then show the message.
$MSG = '¡Usuario registrado!' ;
 
// Converting the message into JSON format.
$json = json_encode($MSG);
 
// Echo the message.
 echo $json ;
 
 }
 else{
 
 echo 'El usuario ya existe. Intenta de nuevo.';
 
 }
 }
 mysqli_close($con);
?>