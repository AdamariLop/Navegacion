<?php
 
	header('Content-Type: application/json');

	include("conexion.php");

		$obj = new Conexion;
		$response = array();

		$json = file_get_contents('php://input');
		$jsonObj = json_decode($json, true);

		$user = $jsonObj["pUser"];
		$pass = $jsonObj["pPass"];
		$correo = $jsonObj["pCorreo"];

		$consulta = "INSERT INTO usuario (user,pass,correo)
							VALUES ('" . $user . "', 
									'" . $pass . "',
									'" . $correo . "')";

		$res = $obj->registrarUsuario($consulta);

		if($res==1){
			$response['status'] = 1;
		}else{
			$response['status'] = 0;
		}

		// DEVOLVEMOS EL ARRAY PASADO A JSON COMO OBJETO
		echo json_encode($response, JSON_FORCE_OBJECT);
?>