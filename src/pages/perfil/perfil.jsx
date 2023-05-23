// Import Styles

import "./perfil.css"

import { supabase } from "../../providers/supabase"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

// Page Home HTML Code

function Perfil(){

    const navigate = useNavigate();

    const [ errorAuth,setErrorAuth ] = useState('')
    const [ user,setUser ] = useState('')
    const [ page,setPage ] = useState('')

    useEffect(()=>{
        async function vereficarSessao(){
          const { data, error } = await supabase.auth.refreshSession()
          const { session, user } = data
          setErrorAuth(error)
          setUser(user.user_metadata.username)
        }
        vereficarSessao()
    },[])

    async function logout(){
        const { error } = await supabase.auth.signOut()

        if (error){alert(error)}

        window.location.href = '/'
    }

    return (
        <main className="AppPerfil">
            
            {errorAuth === null &&
                <>
                    <aside className="menuOptionsPerfil">
                        <h4>{user}</h4>
                        <ul>
                            <li onClick={() => setPage('dados')}><a onClick={() => setPage('dados')}>Dados da Conta</a></li>
                            <li onClick={() => setPage('funcoesalvas')}><a onClick={() => setPage('funcoesalvas')}>Funções Salvas</a></li>
                            <li onClick={() => setPage('funcoescriadas')}><a onClick={() => setPage('funcoescriadas')}>Funções Criadas</a></li>
                            <li onClick={logout}><a onClick={logout}>Logout</a></li>
                        </ul>
                    </aside>
                    
                    <section className="contentPerfil">

                        {page === 'dados' &&
                            <div className="contentPerfilTitle">
                                <h1>Dados</h1>
                            </div>
                        }
                        {page === 'funcoesalvas' &&
                            <div className="contentPerfilTitle">
                                <h1>Funções Salvas</h1>
                            </div>
                        }
                        {page === 'funcoescriadas' &&
                            <div className="contentPerfilTitle">
                                <h1>Funções Criadas</h1>
                            </div>
                        }

                    </section>
                </>
            }

            {errorAuth &&
                <section className="sectionProfileError">
                    
                    <h1>Você Não Está Logado!</h1>
                    <Link to="/login">Deseja Logar?</Link>

                </section>
            }

        </main>
    )

}

export default Perfil;