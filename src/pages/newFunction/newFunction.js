// Import Styles

import "./newFunction.css"

// Frameworks Imports

import 'bootstrap/dist/css/bootstrap.min.css';

// Components Imports

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer';
import CreateFunction from "../../components/createFunction/createFunction";

// Page Home HTML Code

function NewFunction(){

    return (
        <div className="App">

            <Header />
    
            <CreateFunction />

            <Footer />

        </div>
    )

}

export default NewFunction;