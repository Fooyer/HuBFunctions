<?php

class DB {
    protected $dbh;

    function __construct() {
        try {
            
            $this->dbh = new PDO('mysql:host=127.0.0.1;dbname=u362358694_hubfunctions', 'u362358694_public', '2yDLfKRB@4y|');
            $this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->dbh->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

        } catch(PDOException $e) {
            die($e->getMessage());
        }
    }

    // Executa uma consulta SQL genérica que pode retornar um conjunto de resultados
    function query($query, $params = array()) {
        $response = array();

        try {
            $stmt = $this->dbh->prepare($query);
            if ($stmt->execute($params)) {
                $response['success'] = true;
                $response['data'] = $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                $response['success'] = false;
                $response['error'] = 'Erro ao executar a consulta';
            }
        } catch (PDOException $e) {
            $response['success'] = false;
            $response['error'] = $e->getMessage();
        }

        return $response;
    }

}