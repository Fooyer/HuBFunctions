'use client'

import { createContext, useState } from "react";

import axios from "axios";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function onLogin(event){
        event.preventDefault();

        const result = await axios.post("http://localhost:3000/api/users/login", {
            password: password,
            email: email
        });

        console.log(result)
    }
    
    return (
        <AuthContext.Provider value={{ password, email, onLogin, setEmail, setPassword }}>
            {props.children}
        </AuthContext.Provider>
    );
}