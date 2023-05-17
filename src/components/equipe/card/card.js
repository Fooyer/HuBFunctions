// Import Styles

import "./card.css"

// Frameworks Imports

import 'bootstrap/dist/css/bootstrap.min.css';

// Components Imports



// Page Sobre HTML Code

function Card({participante}){

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