<?php

include '../api.php';
include '../db.php';
include '../class/usuario.php';

$api = new Api();
$db = new DB();

$api->method('POST');

$dados = $api->obterBody();

$username = $dados['username'];

$senha = $dados['password'];
$senhaEncrypt = base64_encode($senha);

$usuario = new Usuario($username, $db);

if(!$usuario->isValid()){
    $api->sendResponse(400, array('success' => false, 'error' => 'Usuário ou senha inválidos'));
}

if(!$usuario->validarSenha($senhaEncrypt)){
    $api->sendResponse(400, array('success' => false, 'error' => $senhaEncrypt));
}

$token = $usuario->gerarToken();

$response = array(
    'token' => $token,
    'message' => 'Usuário autenticado com sucesso'
);

$api->sendResponse(200, array('success' => true, 'response' => $response));