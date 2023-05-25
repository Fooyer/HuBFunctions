// Import Styles

import "./register.css"

// Framework Imports

import { Link } from "react-router-dom"
import { supabase } from "../../providers/supabase"

// Register Page Code

function Register(){

    // Validate Register

    async function validarRegistro(event){
        event.preventDefault()

        let username = event.target[0].value
        let email = event.target[1].value
        let senha = event.target[2].value
        let senha2 = event.target[3].value

        if (!username){alert("Username é obrigatório!"); return}
        if (senha!==senha2){alert("Senhas não batem"); return}

        let { data, error } = await supabase.auth.signUp({
            email: email,
            password: senha,
            options: {
                data: {
                  username: username,
                }
              }
        })

        const { data2, error2 } = await supabase.from('profiles').update({ username: username}).eq('email',email)

        if (error){alert(error)}
        if (error2){alert(error2)}

        alert("Confirme seu email")
    }

    // HTML Code

    return (
        <section className="AppLogin">
            
            <div className="loginContainer">
                <h1>Faça Seu Registro</h1>
                <form className="formLogin" onSubmit={validarRegistro}>
                    <input type="text" name="username" id="usernameLogin" placeholder="Username" />
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