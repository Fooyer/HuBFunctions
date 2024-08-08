<?php

include '../api.php';
include '../db.php';

$api = new API();
$db = new DB();

$api->method('GET');

$user = $api->obterParametro('user');
$token = $api->obterParametro('token');

$token = urldecode($token);

$query = 'SELECT * FROM users WHERE username = :user AND token = :token';

$params = array(
    ':user' => $user,
    ':token' => $token
);

$result = $db->query($query, $params);

$api->sendResponse(200, $result);