// Style Imports

import './App.css';

// Frameworks Imports

//import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


// Components Imports

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Results from './components/results/results';
import SearchBar from './components/search/search';

// App code

function App() {
  return (
    <div className="App">

      <Header />

      <SearchBar />

      <Results />

      <Footer />
      
    </div>
  );
}

export default App;