<?php

class Usuario {
    private $usuario;
    private $senha;
    private $token;
    private $email;
    private $db;

    public function __construct($usuario, $db) {
        $this->db = $db;
        $this->usuario = $usuario;

        $this->select($usuario);
    }

    private function select($usuario){

        $query = 'SELECT * FROM usuarios WHERE usuario = :usuario';

        $dadosParametros = array(
            ':usuario' => $usuario,
        );

        $response = $this->db->query($query,$dadosParametros);

        $response = $response['data'][0];

        $this->usuario = $response['usuario'];
        $this->senha = $response['senha'];
    }

    public function gerarToken(){

        $query = "UPDATE usuarios SET token = :token WHERE usuario = :usuario";

        $token = base64_encode(openssl_random_pseudo_bytes(16));

        $dadosParametros = array(
            ':token' => $token,
            ':usuario' => $this->usuario
        );

        $response = $this->db->query($query,$dadosParametros);

        return $token;
    }

    public function isValid(){
        if($this->usuario == null || $this->senha == null){
            return false;
        }

        return true;
    }

    public function validarSenha($senha){
        if($this->senha == $senha){
            return true;
        }

        return false;
    }
    
}