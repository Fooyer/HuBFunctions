<?php

// Inclui arquivos das classes

include '../api.php';
include '../db.php';

// Inicializa objetos

$api = new Api();
$db = new DB();

// Inicializa API GET

$api->method('GET');

$query = 'SELECT * FROM user';

$response = $db->query($query);


// Retorna as parcelas

$api->sendResponse(200, array('success' => true, 'message' => $response['data']));