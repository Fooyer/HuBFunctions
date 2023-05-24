// Import Styles

import "./login.css"

// Framework Imports

import { supabase } from "../../providers/supabase"
import { Link } from "react-router-dom"

// Page Code

function Login(){

    // Validate Login Credencials

    async function validarLogin(event){
        event.preventDefault()

        let email = event.target[0].value
        let senha = event.target[1].value

        let { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: senha
        })

        if (error){alert("Credenciais inválidas"); return}

        alert("Logado com sucesso!")
        window.location.href = '/'

    }

    // HTML Code

    return (
        <section className="AppLogin">
            
            <div className="loginContainer">
                <h1>Faça Login</h1>
                <form className="formLogin" onSubmit={validarLogin}>
                    <input type="text" name="email" id="emailLogin" placeholder="E-Mail" />
                    <input type="password" name="senha" id="senhaLogin" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                    <Link to="/register">Não tenho uma conta</Link>
                </form>

            </div>

        </section>
    )

}

export default Login;