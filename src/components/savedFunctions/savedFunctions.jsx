// Import Styles

import { useEffect, useState } from "react"
import "./savedFunctions.css"

// Import Frameworks

import { supabase } from "../../providers/supabase"
import Card from "./card/card"

// Component Funciton

function SavedFunctions(){

    const [ functions, setFunctions ] = useState([])

    useEffect(() => {
        async function obterUsuarioSessao(){
          const { data, error } = await supabase.auth.getSession()
          setFunctions(data.session.user.user_metadata.salvas)
        }
        obterUsuarioSessao()
      },[])

    return (
        <div className="savedFunctionsMain">
            
            {functions.map((element) => (
                <Card idFunction={element} />
            ))}


        </div>
    )

}

export default SavedFunctions;