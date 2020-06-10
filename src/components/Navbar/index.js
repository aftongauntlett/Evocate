import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <Navbar className="color-nav" expand="lg">
        {/* make evocate larger */}
        <Navbar.Brand>Evocate</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#/scoreBoard">Scoreboard</Nav.Link>
            <Nav.Link href="#/gameOver">Game Over</Nav.Link>
            <Nav.Link href="#/gamePage">Main Game Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
