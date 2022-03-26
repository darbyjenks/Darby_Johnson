import React, { useState } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container, Form, FormControl, Offcanvas, Card } from 'react-bootstrap';

function Work() {
    const [header, setHeader] = useState('Darby Johnson');

    return(
        <div style={{flexWrap:"wrap", display:"flex", padding:"5px"}}>
      <Card style={{ width: '18rem', width: "50%", display: "flex", backgroundColor: "#f3edf2"}}>
        <Card.Body>
         <Card.Title>Meteo Melodies</Card.Title>
        <Card.Text>
        An app that changes your spotify playlist based on your current weather conditions. This application was made using HTML, CSS, Bootstrap, JavaScript, and JQuery.
        </Card.Text>
        <Card.Link href={"https://github.com/darbyjenks/meteo-melodies"} target="_blank" style={{color: "black"}}>GitHub Repo</Card.Link>
        <Card.Link href={"https://darbyjenks.github.io/meteo-melodies/"} target="_blank" style={{color: "black"}}>Deployed Site</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem', width: "50%", display: "flex", backgroundColor: "#f3edf2" }}>
        <Card.Body>
         <Card.Title>Between The Covers</Card.Title>
        <Card.Text>
        A fullstack bookclub app that allows you to connect to fellow readers and create bookclubs. This application was made using JavaScript, EJS, MySQL, Node.js, Express.js, and Bootstrap.
        </Card.Text>
        <Card.Link href={"https://github.com/darbyjenks/between-the-covers"} target="_blank" style={{color: "black"}}>GitHub Repo</Card.Link>
        <Card.Link href={"https://darbyjenks.github.io/between-the-covers/"} target="_blank" style={{color: "black"}}>Deployed Site</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem', width: "50%", display: "flex", backgroundColor: "#f3edf2" }}>
        <Card.Body>
         <Card.Title>Wacky Weather</Card.Title>
        <Card.Text>
        A weather app built off of the openweather api that displays current weather and the 5 day forecast. This application was made using HTML, CSS, JavaScript, and JQuery
        </Card.Text>
        <Card.Link href={"https://github.com/darbyjenks/WackyWeather"} target="_blank" style={{color: "black"}}>GitHub Repo</Card.Link>
        <Card.Link href={"https://darbyjenks.github.io/WackyWeather/"} target="_blank" style={{color: "black"}}>Deployed Site</Card.Link>
    </Card.Body>
    </Card>
    <Card style={{ width: '18rem', width: "50%", display: "flex", backgroundColor: "#f3edf2" }}>
        <Card.Body>
         <Card.Title>Trivia Game</Card.Title>
        <Card.Text>
        Come test your knowledge in this short eyecatching trivia game! this application was made using HTML, CSS, JavaScript, and JQuery.
        </Card.Text>
        <Card.Link href={"https://github.com/darbyjenks/TriviaGame"} target="_blank" style={{color: "black"}}>GitHub Repo</Card.Link>
        <Card.Link href={"https://darbyjenks.github.io/TriviaGame/"} target="_blank" style={{color: "black"}}>Deployed Site</Card.Link>
    </Card.Body>
    </Card>
    </div>
    )
}

export default Work