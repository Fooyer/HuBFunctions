// Import Styles

import "./home.css"

// Frameworks Imports

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

// Components Imports

import Results from '../../components/results/results';
import SearchBar from '../../components/search/search';
import LandingPage from "../../components/landing/landing";
import NoData from "../../components/search/nodata/nodata";
import ReactLoading from 'react-loading';
import { Col } from "react-bootstrap";

// Page Home HTML Code

function Home(){

    const [Searched, setSearched] = useState('');
    const [Dados, setDados] = useState([]);
    const [LanguageProg, setLanguageProg] = useState('javascript');

    return (
        <div className="App">

            <SearchBar setSearched={setSearched} setDados={setDados} setLanguageProg={setLanguageProg} />
        
            {(Searched === 'searched')  && <Results dados={Dados} LanguageProg={LanguageProg} /> }
            {(Searched === '')  && <LandingPage /> }
            {(Searched === 'null')  && <NoData /> }
            {(Searched === 'loading' &&

                <div id="loadingDiv">
                    <Col xs="12" md="10" lg="8" className="loadingCol">
                        <ReactLoading type="spin" color="black" width={'10%'} height={'10%'} className="loadingComponent" />
                    </Col>
                </div>
                
            )}

        </div>
    )

}

export default Home;