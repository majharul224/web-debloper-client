import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">W.D learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
            <Nav.Link as={Link} to='/'>home</Nav.Link>
            <Nav.Link as={Link} to='/corses'></Nav.Link>
            <Nav.Link as={Link} to='/faq'>FAQ</Nav.Link>
            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Header;