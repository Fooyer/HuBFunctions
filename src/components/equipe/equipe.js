// Import Styles

import "./equipe.css"

// Frameworks Imports

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from "react-bootstrap";

// Components Imports

import Card from "./card/card";

// Page Sobre HTML Code

function Equipe(){


    return (

        <div id="grid">

            <Col xs="6" md="4" lg="3" id="card">

                <Card />

            </Col>

        </div>

    )

}

export default Equipe;