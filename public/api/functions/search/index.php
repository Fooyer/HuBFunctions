<?php

// Inclui arquivos das classes
include '../../api.php';
include '../../db.php';

// Inicializa objetos
$api = new Api();
$db = new DB();

// Inicializa API GET
$api->method('GET');

$search_term = $api->obterParametro('search_term');
$programming_languages = $api->obterParametro('programming_languages');

// Converte a string JSON para array, se necessário
if (is_string($programming_languages)) {
    $programming_languages = json_decode($programming_languages, true);
}

if (empty($programming_languages)) {
    $api->sendResponse(400, array('success' => false, 'error' => 'Não foi selecionado nenhuma linguagem de programação.'));
}

// Prepara a cláusula WHERE para as linguagens de programação
$language_conditions = array();
foreach ($programming_languages as $programming_language) {
    $language_conditions[] = 'language = ' . $programming_language;
}
$language_query_part = implode(' OR ', $language_conditions);

$selectiveSearch = "";

$selectiveSearch;
$isSelective = preg_match('/^["\'].*["\']$/', $search_term);
if ($isSelective) {
    $search_term = trim($search_term, "\"'"); // Remove as aspas
    $selectiveSearch = " OR dfunction LIKE :selective_search";

    $query = 'SELECT functions.*, programming_language.name as languageName
            FROM functions 
            JOIN programming_language ON functions.language = programming_language.id 
            WHERE title LIKE :search_term
            '. $selectiveSearch .'
            AND (' . $language_query_part . ')';

    $params = array(
        ':search_term' => '%' . $search_term . '%', // Adiciona os símbolos de percentual para busca parcial
        ':selective_search' => '%' . $search_term . '%'
    );
} else {
    $query = 'SELECT functions.*, programming_language.name as languageName
            FROM functions 
            JOIN programming_language ON functions.language = programming_language.id 
            WHERE title LIKE :search_term
            AND (' . $language_query_part . ')';

    $params = array(
        ':search_term' => '%' . $search_term . '%' // Adiciona os símbolos de percentual para busca parcial
    );
}

$response = $db->query($query, $params); // Garante que os parâmetros sejam passados corretamente

// Retorna as parcelas
$api->sendResponse(200, array('success' => true, 'response' => $response['data']));