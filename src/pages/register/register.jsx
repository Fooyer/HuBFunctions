import "./register.css"

import { Link } from "react-router-dom"

import { supabase } from "../../providers/supabase"

// Page Home HTML Code

function Register(){

    async function validarRegistro(event){
        event.preventDefault()

        let email = event.target[0].value
        let senha = event.target[1].value
        let senha2 = event.target[2].value

        if (senha!==senha2){alert("Senhas não batem"); return}

        let { data, error } = await supabase.auth.signUp({
            email: email,
            password: senha
        })

        if (error){alert(error)}

        alert("Confirme seu email")
    }

    return (
        <section className="AppLogin">
            
            <div className="loginContainer">
                <h1>Faça Seu Registro</h1>
                <form className="formLogin" onSubmit={validarRegistro}>
                    <input type="text" name="email" id="emailLogin" placeholder="E-Mail" />
                    <input type="password" name="senha" id="senhaLogin" placeholder="Senha" />
                    <input type="password" name="senhaRepita" id="senhaLoginRepita" placeholder="Repita sua Senha" />
                    <button type="submit">Registrar</button>
                    <Link to="/login">Já tenho uma conta</Link>
                </form>

            </div>

        </section>
    )

}

export default Register;