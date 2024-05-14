<?php

include '../api.php';
include '../db.php';
include '../class/usuario.php';

$api = new Api();
$db = new DB();

$api->method('PUT');

$dados = $api->obterBody();

$username = $dados['username'];
$senha = $dados['password'];
$email = $dados['email'];
$senhaEncrypt = base64_encode($senha);

$usuario = new Usuario(null, $db);

$statusCode = $usuario->setUsuario($username);
if ($statusCode['status'] === false) {$api->sendResponse(401, array('success' => false, 'response' => $statusCode['message']));}
$statusCode = $usuario->setSenha($senhaEncrypt);
if ($statusCode['status'] === false) {$api->sendResponse(401, array('success' => false, 'response' => $statusCode['message']));}
$statusCode = $usuario->setEmail($email);
if ($statusCode['status'] === false) {$api->sendResponse(401, array('success' => false, 'response' => $statusCode['message']));}

$response = $usuario->save();

$api->sendResponse(200, array('success' => true, 'response' => $response['data']));