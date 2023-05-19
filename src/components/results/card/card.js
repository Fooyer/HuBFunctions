// Import Styles

import { useEffect, useState } from "react";
import "./card.css"

// Import Frameworks

import Highlight from "react-highlight";

// Component Funciton

function Card({title,dfunction,description,planguage}){

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

    return (

        <div key={title} className="cardResult">
            
            <div className="artigo-funcao">

                <h2>{title}</h2>

                <div className="artigo-code">

                    <Highlight className={planguage} >{funct}</Highlight>

                    {complete && <button className="buttonvermais" onClick={mostrarTudo} >Ver Código Completo</button>}
                    {menos && <button className="buttonvermais" onClick={verMenos} >Mostrar Menos</button>}

                </div>

                <p>{description}</p>

            </div>

        </div>

    )

}

export default Card;