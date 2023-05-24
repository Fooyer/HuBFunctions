// Import Styles

import { useEffect, useState } from "react"
import "./card.css"
import Highlight from "react-highlight";

// Import Frameworks

import { supabase } from "../../../providers/supabase"

// Component Funciton

function Card({functionData, language}){

    return (
        <div className="functionCardSaved" key={functionData.id}>
            
            <h1>{functionData.title}</h1>
            <p>{functionData.description}</p>
            <Highlight className={language} >{functionData.function}</Highlight>
            

        </div>
    )

}

export default Card;