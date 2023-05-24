// Import Styles

import "./card.css"

// Framework Imports

import Highlight from "react-highlight";

// Card Code

function Card({functionData, language}){

    // HTML Code

    return (
        <div className="functionCardSaved">
            
            <h1>{functionData.title}</h1>
            <p>{functionData.description}</p>
            <Highlight className={language} >{functionData.function}</Highlight>
            

        </div>
    )

}

export default Card;