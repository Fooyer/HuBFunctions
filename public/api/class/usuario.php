<?php

class Usuario {
    private $usuario;
    private $senha;
    private $token;
    private $email;
    private $db;
    private $new;

    public function __construct($usuario, $db) {
        $this->db = $db;
        $this->usuario = $usuario;

        if($usuario != null){
            $this->new = false;
            $this->select($usuario);
        } else{
            $this->new = true;
        }
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

    public function save(){

        if ($this->new){
            return $this->insert();
        } else {
            return $this->update();
        }
    }

    private function insert(){
        $query = 'INSERT INTO users (username, password, email) VALUES (:usuario, :senha, :email)';

        $dadosParametros = array(
            ':usuario' => $this->usuario,
            ':senha' => $this->senha,
            ':email' => $this->email
        );

        $response = $this->db->query($query,$dadosParametros);

        return $response;
    }

    private function update(){
        $query = 'UPDATE users SET password = :senha, email = :email WHERE username = :usuario';

        $dadosParametros = array(
            ':usuario'=> $this->usuario,
            ':senha'=> $this->senha,
            ':email'=> $this->email
        );

        $response = $this->db->query($query,$dadosParametros);

        return $response;
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
    
    public function getUsuario(){
        return $this->usuario;
    }

    public function getSenha(){
        return $this->senha;
    }

    public function getEmail(){
        return $this->email;
    }

    public function setUsuario($usuario){
        $return['status'] = true;
        $return['message'] = "";

        $query = "SELECT * FROM users WHERE username = :usuario";
        $dadosParametros = array(
            ":usuario"=> $usuario
        );
        $response = $this->db->query($query,$dadosParametros);

        if($response["data"] != null){
            $return['status'] = false;
            $return['message'] = 'User already exists';
            return $return;
        }

        $this->usuario = $usuario;

        return $return;
    }

    public function setSenha($senha){
        $return['status'] = true;
        $return['message'] = "";

        $this->senha = $senha;

        return $return;
    }

    public function setEmail($email){
        $return['status'] = true;
        $return['message'] = "";

        $query = "SELECT id FROM users WHERE email = :email";
        $dadosParametros = array(
            ":email"=> $email
        );
        $response = $this->db->query($query,$dadosParametros);

        if($response["data"] != null){
            $return['status'] = false;
            $return['message'] = "Email already linked to an account";
            return $return;
        }

        $this->email = $email;

        return $return;
    }
}