// Import Styles

import "./nodata.css"

// Import Frameworks

import { Col, Row } from 'react-bootstrap';

// Component Funciton

function NoData(){

    return (

        <Row className="noDataContent">
            <Col xs="12" md="10" lg="8" className="Nodata-Box">
			
                <h1>Nenhum dado foi encontrado</h1>

		    </Col>
        </Row>

    )

}

export default NoData;