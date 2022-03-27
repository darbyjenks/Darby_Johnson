import React, { useState } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Form, FormControl, Offcanvas } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';




function Header() {
    const [header, setHeader] = useState('Darby Johnson');

    return(
        <div>
    <Navbar bg="light" expand={false}>
    <Container fluid style={{backgroundColor: "#f3edf2"}}>
    <Navbar.Brand href="#" style={{fontSize:"30px"}}>Darby Johnson</Navbar.Brand>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Darby's Page</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3" style={{fontSize: "25px"}}>
          <Nav.Link href="/">Home</Nav.Link >
          <Nav.Link href="/#AboutMe">About Me</Nav.Link>
          <Nav.Link href="/#Work">Work</Nav.Link>
          <Nav.Link href="/#ContactMe">Contact Me</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
</div>
    );
}

export default Header