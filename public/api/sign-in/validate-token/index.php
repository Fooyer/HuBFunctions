<?php

include '../../api.php';
include '../../db.php';
include '../../class/usuario.php';

$api = new Api();
$db = new DB();

$api->method('POST');

$dados = $api->obterBody();

$username = $dados['user'];
$token = $dados['token'];

$usuario = new Usuario($username, $db);

if(!$usuario->isValid()){
    $api->sendResponse(400, array('success' => false));
}

if (!$usuario->validarToken($token)) {
    $api->sendResponse(400, array('success' => false));
}

$api->sendResponse(200, array('success' => true));