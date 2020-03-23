<?php

	include("conexion.php");

	$obj = new Conexion;
	$response = array();

	$user = $_GET["user"];
	$pass = $_GET["pass"];

	$res = $obj->buscarUsuario($user, $pass);

	if($res == 1){
		$response['status'] = 1;
	}else{
		$response['status'] = 0;
	}

	echo json_encode($response);

?>