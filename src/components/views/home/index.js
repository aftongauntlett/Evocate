import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Jumbotron className="homeJumbo slow">
          <h1 className="homeBlurb">Evocate</h1>
          <p className="homeParagraph">
            Evocate is a card matching game to test your memory. In a deck of
            paired cards, you will need to match each pair to win the game. You
            can choose your difficulty and join the Leader Board after
            completion.
          </p>
          <div className="d-flex justify-content-center">
            <Button
              href="#/gamePage"
              className="homeButton"
              variant="outline-dark"
            >
              Start
            </Button>
          </div>
        </Jumbotron>
      </div>
    );
  }
}
