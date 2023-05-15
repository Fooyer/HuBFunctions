// Frameworks imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Col } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';


// React stuff
import { useState, useEffect } from "react"

// Stylesheet import
import "./header.css"

function Header() {
    

    //CREATE CLASS with variable 'navbar' set as default to false
    const [navbar, setNavbar] = useState(false)

    //CHANGE variable 'navbar' from above if condition
    const changeBackground = () => {

        if (window.scrollY >= 66) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground)
    })

  return (
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' className={(navbar ? "navbar active py-1" : "navbar navbar-dark") + " fixed-top"}>
          <Container>

            <Navbar.Brand href="/" ><h1  className='ms-xs-5 ms-1 pt-2'>HUBFUNCTIONS</h1> </Navbar.Brand>
            
          </Container>
          
      </Navbar>
    </>
  );
}


export default Header
