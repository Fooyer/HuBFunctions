// Import Styles

import { useEffect } from "react"
import "./dadosConta.css"

import { supabase } from "../../providers/supabase"
import { useState } from "react"

// Page Home HTML Code

function DadosConta(){

    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [emailAtual, setEmailAtual] = useState('')

    useEffect(()=>{
      async function obterUsuarioSessao(){
        const { data, error } = await supabase.auth.getSession()
        setEmail(data.session.user.email)
        setUsername(data.session.user.user_metadata.username)
        setEmailAtual(data.session.user.email)
      }
      obterUsuarioSessao()
    },[])

    async function salvarInformacoes(event){
        event.preventDefault()

        const { data, error } = await supabase.auth.updateUser({email: email, data: { username: username }})

        if (error){alert(error)}
        
        alert('Salvo com Sucesso!')
    }

    async function alterarSenha(event){
        event.preventDefault()

        let senhaNova = event.target[0].value
        let repitaNova = event.target[1].value

        if (senhaNova!==repitaNova){alert("Senhas Não Batem!"); return}

        const { data, error } = await supabase.auth.updateUser({password: senhaNova})

        if (error){alert(error)}
        
        alert('Senha Alterada com Sucesso!')
    }

    return (
        <div className="DadosConta">

            <form onSubmit={salvarInformacoes}>
                <div className="divisaoDados" id="divisaoDadosInfo">

                    <legend>Informações do Usuário</legend>

                    <div className="dataAll">
                        <div className="campoDados">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value) } />
                        </div>

                        <div className="campoDados">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value) } />
                        </div>
                    </div>

                    <button type="submit" id="SaveButtonDados">Salvar</button>
                </div>
            </form>

            <form onSubmit={alterarSenha}>
                <div className="divisaoDados" id="dadosMudarSenha">
                    
                    <legend>Alterar Senha</legend>

                    <div className="dataAll">
                        <input type="password" name="novaSenha" id="novaSenha" placeholder="Nova Senha" />
                        <input type="password" name="repitaNovaSenha" id="repitaNovaSenha" placeholder="Repita Nova Senha" />
                    </div>

                    <button type="submit" id="confirmButtonSenha">Confirmar</button>

                </div>
            </form>

        </div>
    )

}

export default DadosConta;