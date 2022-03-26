import React, { useState } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Form, FormControl, Offcanvas } from 'react-bootstrap';
import resume from '../Darby_Johnson.jpg';

function ContactMe() {
    const [header, setHeader] = useState('Darby Johnson');

    return(
        <div>
    <Nav style={{fontSize:"25px", border:'1px black solid', marginBottom:"50px", marginTop:"50px", backgroundColor: "white"}} defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
        <Nav.Link style={{color: "black"}}>Contact Me:</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link style={{color: "pink"}} href="mailto:darbyj1707@yahoo.com" eventKey="link-1">Send Email</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link style={{color: "pink"}} href="https://www.linkedin.com/in/darby-johnson-91936a91/" target="_blank" eventKey="link-1">LinkedIn</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link style={{color: "pink"}} href="https://github.com/darbyjenks"target="_blank" eventKey="link-1">GitHub</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
        <Nav.Link style={{color: "pink"}} href='https://darbyjenks.github.io/Darby-Johnson-Portfolio/' target="_blank" eventKey="link-1">Website</Nav.Link>
        </Nav.Item>
    </Nav>
    </div>
    )
}
export default ContactMe