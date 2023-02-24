// Import Styles

import "./card.css"

// Import Frameworks

// Component Funciton

function Card(title){

    return (

        <div className="card">
            
            <div className="artigo-funcao">

                <h2>{title.title}</h2>

                <div className="artigo-code">

                    <p style={{ whiteSpace: "pre-wrap" }}>{title.dfunction}</p>
                    
                </div>

                <p>{title.description}</p>

            </div>

        </div>

    )

}

export default Card;