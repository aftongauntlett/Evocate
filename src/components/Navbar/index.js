import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <Navbar className="color-nav" expand="lg">
        {/* make evocate larger */}
        <Navbar.Brand href="/" className="navbarFontMain">
          Evocate
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="hamburger">
          <Nav className="mr-auto">
            <Nav.Link className="navbarFont" href="/">
              Home
            </Nav.Link>
            {/* <Nav.Link className="navbarFont" href="#/themes">
              Themes
            </Nav.Link> */}
            <Nav.Link className="navbarFont" href="#/scoreBoard">
              Scoreboard
            </Nav.Link>
            <Nav.Link className="navbarFont" href="#/gameOver">
              Game Over
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
