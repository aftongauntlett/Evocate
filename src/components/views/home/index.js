import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Jumbotron className="homeJumbo">
          <h1 className="homeBlurb">Evocate</h1>
          <p className="homeParagraph">
            Evocate is a card matching game to test your memory. In a deck of
            paired cards, you will need to match each pair to win the game.
            Choose a difficulty setting and select a theme - or even create your
            own! The game is timed, so think fast! You will be able to enter
            your name to the scoreboard at the end. Have fun while also building
            those memory muscles!
          </p>
          <div className="d-flex justify-content-center">
            <Button className="homeButton" variant="outline-dark">
              Start
            </Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
