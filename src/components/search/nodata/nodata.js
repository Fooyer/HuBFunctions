// Import Styles

import "./nodata.css"

// Import Frameworks

import { Col, Row } from 'react-bootstrap';

// Component Funciton

function NoData(){

    return (

        <Row className="noDataContent">
            <Col xs="11" md="10" lg="8" className="Nodata-Box">
			
                <h1>Nenhuma função foi encontrada</h1>

		    </Col>
        </Row>

    )

}

export default NoData;