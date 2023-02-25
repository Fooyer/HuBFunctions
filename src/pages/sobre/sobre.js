// Import Styles

import "./sobre.css"

// Frameworks Imports

import 'bootstrap/dist/css/bootstrap.min.css';

// Components Imports

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer';
import Equipe from "../../components/equipe/equipe";

// Page Sobre HTML Code

function Sobre(){


    return (
        <div className="App">

            <Header />

            <Equipe />
    
            <Footer />

        </div>
    )

}

export default Sobre;