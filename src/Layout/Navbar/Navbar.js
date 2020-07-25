/** React imports */
import React from 'react';
/** Aux Component */
import Aux from '../../hoc/Aux';
/** Boostrap */
import {Navbar, Nav, Button, Collapse, Container, Row} from 'react-bootstrap';


/**
 * Application Navbar
 */
const NavBarComponent = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Aux>
      <Collapse in={open} className="bg-dark collapse" id="more-information">
        <Container fluid>
          <Row>
            <div className="col-sm-8 col-md-7 py-4">
              <h4 className="text-white">About</h4>
              <p className="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
              <h4 className="text-white">Contact</h4>
              <ul className="list-unstyled">
                <li><a href="#" className="text-white">Follow on Twitter</a></li>
                <li><a href="#" className="text-white">Like on Facebook</a></li>
                <li><a href="#" className="text-white">Email me</a></li>
              </ul>
            </div>
          </Row>
        </Container>
      </Collapse>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Navbar.Brand href="#home">Job Search</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#full-time">Full Time</Nav.Link>
          <Nav.Link href="#near-you">Near You</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="outline-light" className="bg-dark collapsed"
            onClick={() => setOpen(!open)}
            aria-controls="more-information"
            aria-expanded={open}>
            <span className="navbar-toggler-icon"></span>
          </Button>
        </Nav>
      </Navbar>
    </Aux>
  )
}

export default NavBarComponent;