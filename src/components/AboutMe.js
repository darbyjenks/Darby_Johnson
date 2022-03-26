import React, { useState } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Form, FormControl, Offcanvas, Card }from 'react-bootstrap';
import resume from '../Darby_Johnson.jpg';

function AboutMe() {
    const [header, setHeader] = useState('Darby Johnson');

    return(
    <div>
      <Card style={{padding:"25px"}}>
      <Card.Body style= {{backgroundColor: "#f3edf2", fontSize: "20px", padding:"25px"}}>Hi! {<br/>} I'm Darby Johnson. I'm currently enrolled in the Georgia Tech Full Stack coding program set to graduate April 2022. I am looking for a software engineering position to kick start my future coding career!
      I am constantly evolving, growing, and learning more and more about the intracacies of coding and feel like I can be a good fit at your company. I am a fast and eager learner. <a href={resume}>Feel free to take a look at my resume!</a></Card.Body>
     </Card>
    </div>
    )
}

export default AboutMe