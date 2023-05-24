// Import Styles

import { useEffect, useState } from "react";
import "./style.css"
import Highlight from "react-highlight";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-tomorrow_night_eighties";
import "ace-builds/src-noconflict/ext-language_tools";

// Cria um cliente com o banco

import { supabase } from "../../providers/adminsupabase";

// Page Home HTML Code

function AreaRestrita(){

    const [logado, setLogado] = useState(false)
    const [list, setList] = useState([])
    const [languages, setLanguages] = useState([])
    const [reload, setReload] = useState(0)

    useEffect(() => {
        async function getData(){
            let { data: foraprove, error } = await supabase.from('foraprove').select('*')

            if (foraprove.length === 0){
                setList("notfound")
            } else {
                setList(foraprove)
            }
        }
        async function fetchLanguages(){

            let { data: languages, error } = await supabase.from('planguages').select('*')
            setLanguages(languages);

        };
        fetchLanguages();
        getData();
    },[reload])

    async function aprovar(item){

        const { error5 } = await supabase.from(item.language+'functions').insert({
            id: item.id,
            title: item.title,
            function: item.function,
            description: item.description,
            autor: item.autor
        })

        const { data: user, error } = await supabase.auth.admin.getUserById(item.autor)

        let metadata = user.user.user_metadata.criadas

        if (!metadata) {
            metadata = [item.id]
        } else{
            metadata.push(item.id)
        }

        const { data3, error3 } = await supabase.auth.updateUser({data: { criadas: metadata }, user_id: item.autor})

        const { data, error2 } = await supabase.from('foraprove').delete().eq('id', item.id)

        alert("Aprovada com sucesso!")

        setReload(reload+1)
    }
    async function reprovar(item){
        const { data, error } = await supabase.from('foraprove').delete().eq('id', item.id)
        alert("Reprovada com sucesso!")
        setReload(reload+1)
    }
    async function logar(event){
        event.preventDefault()

        let { data: adminlogin, error } = await supabase.from('adminlogin').select('*').eq("username",event.target[0].value).eq("password",event.target[1].value)
        
        if (adminlogin.length > 0){
            setLogado(true)
        } else{
            alert("Credenciais inválidas!")
        }
    }

    return (
        <div className="area_restrita">

            {!logado &&
                <div className="approve_login">
                    <h1>Área Restrita</h1>
                    <form onSubmit={logar}>
                        <label for="username">Username</label>
                        <input type="text" name="username" />
                        <label for="password">Senha</label>
                        <input type="password" name="password" />

                        <button type="submit">Entrar</button>
                    </form>
                </div>
            }
            
            {logado && <>

                {list!="notfound" && list.map((item) => (
                    <div className="card_approve" key={item.id}>
                        
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.autor}</p>
                        <p>{languages[item.language-1].planguage}</p>

                        <Highlight className={languages[item.language-1].planguage} >{item.function}</Highlight>

                        <button id="button_aprovar" onClick={() => aprovar(item)}>Aprovar</button>
                        <button id="button_reprovar" onClick={() => reprovar(item)}>Reprovar</button>

                    </div>
                ))}

                {list === "notfound" &&
                    <div className="approve_notfound">
                        <h1>Não existem funções pendentes</h1>
                    </div>
                }
            </>
            }
        </div>
    )

}

export default AreaRestrita;