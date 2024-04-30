<?php

class Api {

    function __construct(){
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: *");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
            exit;
        }
    }

    function method($method){

        if ($method !== $_SERVER['REQUEST_METHOD']){
            $this->sendResponse(405, array('success' => false, 'message' => 'Method not allowed'));
        }
    }

    function sendResponse($code, $data){

        http_response_code($code);
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
        $this->end();
    }
    
    function getJson(){
        return json_decode(file_get_contents('php://input'), true);
    }
    function validarCamposObrigatoriosBody($camposObrigatorios, $data) {
        // Verifique se todos os campos obrigatórios estão presentes e não estão vazios
        $camposFaltando = array();
        foreach ($camposObrigatorios as $campo) {
            if ((!isset($data[$campo]) || empty($data[$campo])) && $data[$campo] !== 0) {
                $camposFaltando[] = $campo;
            }
        }
    
        // Se houver campos faltando, retorne um erro
        if (!empty($camposFaltando)) {
            $this->sendResponse(400, array('success' => false, 'message' => 'Preencha os campos obrigatórios'));
        }
    }

    function end(){
        exit();
    }

    function obterBody(){
        $request_body = file_get_contents('php://input');
        if (empty($request_body)) {
            $this->sendResponse(400, array('success' => false, 'message' => 'No data provided'));
        }
        $data = json_decode($request_body, true);
        if ($data === null) {
            $this->sendResponse(400, array('success' => false, 'message' => 'Invalid JSON data'));
        }
        return $data;
    }

    function obterParametro($parametro){
        if (!isset($_GET[$parametro]) || empty($_GET[$parametro])){
            $this->sendResponse(400, array('success' => false, 'message' => 'Parâmetro não informado: ' . $parametro));
        }
        return $_GET[$parametro];
    }

}

?>