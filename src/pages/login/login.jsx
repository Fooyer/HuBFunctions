// Import Styles

import "./login.css"

// Frameworks Imports

// Page Home HTML Code

function Login(){


    return (
        <section className="AppLogin">
            
            <div className="loginContainer">

                <form>
                    <input type="text" name="email" id="emailLogin" placeholder="E-Mail" />
                    <input type="password" name="senha" id="senhaLogin" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                </form>

            </div>

        </section>
    )

}

export default Login;