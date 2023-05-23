// Import Styles

import "./perfil.css"

import { supabase } from "../../providers/supabase"
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

// Page imports

import DadosConta from "../../components/dadosConta/dadosConta";

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
                            <li onClick={() => setPage('dados')}><button onClick={() => setPage('dados')}>Dados da Conta</button></li>
                            <li onClick={() => setPage('funcoesalvas')}><button onClick={() => setPage('funcoesalvas')}>Funções Salvas</button></li>
                            <li onClick={() => setPage('funcoescriadas')}><button onClick={() => setPage('funcoescriadas')}>Funções Criadas</button></li>
                            <li onClick={logout}><button onClick={logout}>Logout</button></li>
                        </ul>
                    </aside>
                    
                    <section className="contentPerfil">

                        {page === 'dados' &&
                            <>
                                <div className="contentPerfilTitle">
                                    <h1>Dados</h1>
                                    
                                </div>
                                <DadosConta />
                            </>
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