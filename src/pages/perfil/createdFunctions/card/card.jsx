// Import Styles

import "./card.css"

// Framework Imports

import Highlight from "react-highlight";

// Card Funciton

function Card({functionData, language}){

    // HTML Code

    return (
        <div className="functionCardSaved" key={functionData.id}>
            
            <h1>{functionData.title}</h1>
            <p>{functionData.description}</p>
            <Highlight className={language} >{functionData.function}</Highlight>
            

        </div>
    )

}

export default Card;