// Import Styles

import "./results.css"

// Import Frameworks

import { Col, Row } from 'react-bootstrap';

// Import Components

import Card from "./card/card";

// Component Funciton

function Results({dados,LanguageProg}){

    return (

        <Row className="maincontent">
            <Col xs="12" md="10" lg="8" className="Results-Box">
			
                {dados.map((element) => (
                    
                    <Card autor={element.profiles!==null ? element.profiles.username : "Anônimo"} id={element.id} title={element.title} description={element.description} dfunction={element.function} planguage={LanguageProg} />

                ))}

		    </Col>
        </Row>

    )

}

export default Results;