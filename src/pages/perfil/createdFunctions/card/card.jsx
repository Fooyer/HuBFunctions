// Import Styles

import "./card.css"

// Framework Imports

import { useEffect, useState } from "react";
import Highlight from "react-highlight";

// Card Funciton

function Card({functionData, language}){

        // Initialize useState Variables

        const [funct, setFunc] = useState('')
        const [complete, setComplete] = useState(false)
        const [contentIncomplete, setContentIncomplete] = useState('')
        const [menos, setMenos]= useState(false)
    
        // Take first 15 lines of a function
    
        useEffect(() => {
            let content = functionData.function.split('\n').slice(0, 15).join('\n')
    
            if (content!==functionData.function){
                setComplete(true)
                setContentIncomplete(content)
            }
    
            setFunc(content)
        },[])
    
        // Show complete function
    
        function mostrarTudo(){
            setFunc(functionData.function)
            setComplete(false)
            setMenos(true)
        }
    
        // Show short function
    
        function verMenos(){
            setFunc(contentIncomplete)
            setMenos(false)
            setComplete(true)
        }

    // HTML Code

    return (
        <div className="functionCardSaved" key={functionData.id}>
            
            <h1>{functionData.title}</h1>
            <p>{functionData.description}</p>
            <Highlight className={language} >{funct}</Highlight>

            {complete && <button className="buttonvermais" onClick={mostrarTudo} >Ver Código Completo</button>}
            {menos && <button className="buttonvermais" onClick={verMenos} >Mostrar Menos</button>}

        </div>
    )

}

export default Card;