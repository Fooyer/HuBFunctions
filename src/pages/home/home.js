// Import Styles

import "./home.css"

// Frameworks Imports

import 'bootstrap/dist/css/bootstrap.min.css';

// Components Imports

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer';
import Results from '../../components/results/results';
import SearchBar from '../../components/search/search';

function Home(){

    return (
        <div className="App">
            <Header />

            <SearchBar />
    
            <Results />
    
            <Footer />
        </div>
    )

}

export default Home;