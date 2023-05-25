// Import Styles

import "./card.css"

// Card Code

function Card({participante}){

    // HTML Code

    return (
        <div>
            <h1>{participante.nome}</h1>
            <p>{participante.funcaonoprojeto}</p>
            <p>{participante.descricao}</p>
            <a href={"mailto:"+participante.email}>{participante.email}</a>
        </div>
    )

}

export default Card;