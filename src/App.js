// Style Imports

import './App.css';

// Frameworks Imports

import { Row, Col } from 'react-bootstrap';

// Components Imports

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Results from './components/results/results';

// App code

function App() {
  return (
    <div className="App">

      <Header />

      <Results />

      <Footer />

    </div>
  );
}

export default App;