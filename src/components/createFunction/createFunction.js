// Import Styles

import "./createFunction.css"

// Import Frameworks

import { Col, Row } from "react-bootstrap";

// Component Description HTML Code

function CreateFunction(){

    // HTML Code

    return (
        <>
            <Row className="screenCreateFunction">
                <Col xs="12" md="10" lg="8" className="formBox">

                    <form className="formAddNewFunction">


                    <div>
                        <input required />

                        <select required>
                            <option></option>
                        </select>
                    </div>

                        <textarea rows="10" cols="150" required />
                        <textarea rows="5" cols="150"  required />

                    </form>

                </Col>
            </Row>
        </>
    )

}

export default CreateFunction;