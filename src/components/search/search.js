// Import Styles

import "./search.css"

// Import Frameworks

import { Col } from 'react-bootstrap';

// Import Images

import imgSearch from "../../images/lupa.svg"

// Component Funciton

function SearchBar(){

    return (

            <form className="mainSearch">

                <Col xs="9" md="9" lg="4" className="Search-bar">

                    <input placeholder="Search a function"/>

                </Col>

                <Col xs="3" md="4" lg="2">

                    <select className="language-programming">

                        <option>Javascript</option>
                        <option>Python</option>
                        <option>Php</option>
                        <option>C#</option>

                    </select>

                </Col>

                <Col xs="1" md="1" lg="1" className="Search-image">

                    <img src={imgSearch} id="img-search" alt="function search" />
                    
                </Col>

            </form>

    )

}

export default SearchBar;