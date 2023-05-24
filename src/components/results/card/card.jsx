// Import Styles

import { useEffect, useState } from "react";
import "./card.css"
import { supabase } from "../../../providers/supabase";

// Import Frameworks

import Highlight from "react-highlight";

// Component Funciton

function Card({autor,id,title,dfunction,description,planguage}){

    const [funct, setFunc] = useState('')
    const [complete, setComplete] = useState(false)
    const [contentIncomplete, setContentIncomplete] = useState('')
    const [menos, setMenos]= useState(false)

    useEffect(() => {
        let content = dfunction.split('\n').slice(0, 15).join('\n')

        if (content!==dfunction){
            setComplete(true)
            setContentIncomplete(content)
        }

        setFunc(content)
    },[])

    function mostrarTudo(){
        setFunc(dfunction)
        setComplete(false)
        setMenos(true)
    }

    function verMenos(){
        setFunc(contentIncomplete)
        setMenos(false)
        setComplete(true)
    }

    async function salvarFuncaoUsuario(idFunction){

        const { data: user, error } = await supabase.auth.getSession()

        if (!user.session){alert("Você precisa logar para salvar.");return}

        if (!user.session.user.user_metadata.salvas){
            let first = [idFunction]
            const { data, error } = await supabase.auth.updateUser({data: { salvas: first }})

        } else{

            let jaExiste = user.session.user.user_metadata.salvas.includes(idFunction)
            if (jaExiste === true){alert("Você já salvou essa função"); return}

            user.session.user.user_metadata.salvas.push(idFunction)
            let aux = user.session.user.user_metadata.salvas

            const { data, error } = await supabase.auth.updateUser({data: { salvas: aux }})

        }
        
        alert('Salvo com Sucesso!')
    }

    return (

        <div key={title} className="cardResult">

            <div className="artigo-funcao">

                <h2>{title}</h2>

                <div className="artigo-code">

                    <Highlight className={planguage} >{funct}</Highlight>

                    <button id="buttonSalvarFunction" className="buttonvermais" onClick={() => salvarFuncaoUsuario(id)}>Salvar Função</button>
                    {complete && <button className="buttonvermais" onClick={mostrarTudo} >Ver Código Completo</button>}
                    {menos && <button className="buttonvermais" onClick={verMenos} >Mostrar Menos</button>}

                </div>

                <p>{description}</p>

                <p>Autor: {autor}</p>

            </div>

        </div>

    )

}

export default Card;