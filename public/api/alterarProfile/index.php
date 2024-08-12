<?php

include '../api.php';
include '../db.php';
include '../class/usuario.php';

$api = new API();
$db = new DB();

$api->method('PUT');

$data = $api->obterBody();

$usuario = new Usuario($data["user"],$db);


$senha = $data["newpassword"];
$senhaEncrypt = base64_encode($senha);

if ($usuario->getSenha() != base64_encode($data["password"])) {
    $api->sendResponse(401, array('success' => false, 'message' => "Senha atual incorreta"));
}

$usuario->setSenha($senhaEncrypt);

$response = $usuario->save();

$api->sendResponse(200, array('success' => $response['success'], 'message' => "Senha alterada com sucesso"));