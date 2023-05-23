// Import Styles

import { useEffect, useState } from "react"
import "./card.css"
import Highlight from "react-highlight";

// Import Frameworks

import { supabase } from "../../../providers/supabase"

// Component Funciton

function Card({idFunction}){
    const planguage = 'javascript'
    const [ functions, setFunctions ] = useState([])

    useEffect(() => {
        async function obterUsuarioSessao(){
          
            let { data: functions, error } = await supabase.from('1functions').select('*').eq('id',idFunction)
            setFunctions(functions[0])
            console.log(error)
        }
        obterUsuarioSessao()
      },[])

    return functions ? (
        <div className="functionCardSaved">
            
            <h1>{functions.title}</h1>
            <p>{functions.description}</p>
            <Highlight className={planguage} >{functions.function}</Highlight>
            

        </div>
    ) : (
        <>

        </>
    )

}

export default Card;