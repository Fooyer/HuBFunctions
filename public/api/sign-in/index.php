<?php

include '../../api.php';
include '../../db.php';
include '../../class/usuario.php';

$api = new Api();
$db = new DB();

$api->method('POST');

$dados = $api->obterBody();

$usuario = $dados['username'];

$senha = $dados['password'];
$senhaEncrypt = base64_encode($senha);

$usuario = new Usuario($usuario, $db);



$query = 'SELECT * FROM usuarios WHERE usuario = :usuario AND senha = :senha';

$dadosParametros = array(
    ':usuario' => $usuario,
    ':senha' => $senhaEncrypt
);

$response = $db->query($query,$dadosParametros);

if (count($response['data']) == 0) {
    $api->sendResponse(401, array('success' => false, 'response' => 'Usuário ou senha inválidos'));
}



$api->sendResponse(200, array('success' => true, 'response' => $response['data']));