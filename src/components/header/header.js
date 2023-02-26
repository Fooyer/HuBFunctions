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

            <Navbar.Brand href="/" ><h1  className='ms-5 pt-2'>HUBFUNCTIONS</h1> </Navbar.Brand>
            
            <Navbar.Toggle className='humburger me-5 custom-toggler' aria-controls="navbarHamburger" data-bs-toggle="collapse" data-bs-target="#navbarHamburger" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-xs`}
              aria-labelledby={`offcanvasNavbarLabel-expand-xs`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xs`}>
                  Mais opções
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='me-5 justify-content-end'>
            <Nav class="navbar-nav" >          
                <Col >
                    <NavDropdown title='Language' id='nav-dropdown' className='pe-5 '> 
                        <NavDropdown.Item className='mx-0 px-2'>
                          pt-br
                        </NavDropdown.Item>
                        <NavDropdown.Item className='mx-0  px-2'>
                          en
                        </NavDropdown.Item>
                    </NavDropdown>
                </Col>
            </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
          
      </Navbar>
    </>
  );
}


export default Header
