<?php

include '../api.php';
include '../db.php';

$api = new API();
$db = new DB();

$api->method('PUT');

$data = $api->obterBody();

