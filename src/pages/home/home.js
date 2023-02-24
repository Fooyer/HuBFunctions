// Import Styles

import "./home.css"

// Frameworks Imports

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";

// Components Imports

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer';
import Results from '../../components/results/results';
import SearchBar from '../../components/search/search';
import Description from "../../components/description/description";

// Page Home HTML Code

function Home(){

    const [Searched, setSearched] = useState('');
    const [Dados, setDados] = useState([]);

    return (
        <div className="App">

            <Header />

            <SearchBar setSearched={setSearched} setDados={setDados} />
        
            {(Searched === 'searched')  && <Results dados={Dados} /> }
            {(Searched === '')  && <Description /> }
    
            <Footer />

        </div>
    )

}

export default Home;