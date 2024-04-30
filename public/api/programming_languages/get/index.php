<?php

include '../../api.php';
include '../../db.php';

$api = new Api();
$db = new DB();

$api->method('GET');

$query = 'SELECT * FROM programming_language';

$response = $db->query($query);

$api->sendResponse(200, array('success' => true, 'response' => $response['data']));