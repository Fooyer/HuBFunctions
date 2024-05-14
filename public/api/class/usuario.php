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

        $query = 'SELECT * FROM users WHERE username = :usuario';

        $dadosParametros = array(
            ':usuario' => $usuario,
        );

        $response = $this->db->query($query,$dadosParametros);

        $response = $response['data'][0];

        $this->usuario = $response['username'];
        $this->senha = $response['password'];
    }

    public function gerarToken(){

        $query = "UPDATE users SET token = :token WHERE username = :usuario";

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

    public function validarToken($token){
        $query = 'SELECT * FROM users WHERE token = :token AND username = :usuario';

        $dadosParametros = array(
            ':token' => $token,
            ':usuario' => $this->usuario
        );

        $response = $this->db->query($query,$dadosParametros);

        if($response['data'] == null){
            return false;
        }

        return true;
    }
    
}