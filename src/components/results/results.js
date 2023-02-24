// Import Styles

import "./results.css"

// Import Frameworks

import { Col } from 'react-bootstrap';

// Import Components

import Card from "./card/card";

// Component Funciton

function Results(dados){

    console.log(dados)

    return (

        <div className="maincontent">
            <Col xs="12" md="10" lg="8" className="Results-Box">
			
                {dados.dados.map((element) => (
                        
                    <Card title={element.title} description={element.description} dfunction={element.function} planguage={element.planguage} />

                ))}

		    </Col>
        </div>

    )

}

export default Results;