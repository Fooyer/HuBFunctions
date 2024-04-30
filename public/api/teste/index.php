<?php

// Inclui arquivos das classes

include '../api.php';

// Inicializa objetos

$api = new Api();

// Inicializa API GET

$api->method('GET');

// Retorna as parcelas

$api->sendResponse(200, array('success' => true, 'message' => 'Hello World!'));