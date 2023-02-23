// Import Styles

import "./search.css"

// Import Frameworks

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col } from 'react-bootstrap';

// Import Images

import imgSearch from "../../images/lupa.svg"

// Component Funciton

function SearchBar(){

    return (

        <form className="mainSearch">

            <Col xs="9" md="9" lg="7" className="Search-bar">
                <input />
		    </Col>

            <Col xs="1" md="1" lg="1" className="Search-image">

                <img src={imgSearch} id="img-search" alt="" />
                
            </Col>

        </form>

    )

}

export default SearchBar;