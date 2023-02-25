// Import Styles

import "./card.css"

// Import Frameworks

// Component Funciton

function Card({title,dfunction,description,planguage}){

    return (

        <div className="card">
            
            <div className="artigo-funcao">

                <h2>{title}</h2>

                <div className="artigo-code">

                    <p style={{ whiteSpace: "pre-wrap" }}>{dfunction}</p>
                    
                </div>

                <p>{description}</p>

            </div>

        </div>

    )

}

export default Card;