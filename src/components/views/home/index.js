import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";

export default class index extends Component {
  state = {
    starting: false,
  };

  startButton() {
    if (!this.state.starting) {
      return (
        <div className="d-flex justify-content-center">
          <Button
            onClick={() => {
              this.setState({ starting: true });
            }}
            className="homeButton"
            variant="outline-dark"
          >
            Start
          </Button>
        </div>
      );
    }
  }

  difficultySelector() {
    if (this.state.starting) {
      return (
        <div className="d-flex justify-content-center flex-wrap">
          <div className="flip-container">
            <div className="flipper">
              <Button
                href="#/gamePage/12"
                className="homeButton"
                variant="outline-dark"
              >
                Easy
              </Button>
            </div>
          </div>

          <div className="flip-container">
            <div className="flipper">
              <Button
                href="#/gamePage/24"
                className="homeButton"
                variant="outline-dark"
              >
                Medium
              </Button>
            </div>
          </div>

          <div className="flip-container">
            <div className="flipper">
              <Button
                href="#/gamePage/36"
                className="homeButton"
                variant="outline-dark"
              >
                Hard
              </Button>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container homeJumbo slow">
        <div classame="row"></div>
        <h1 className="homeTitle">Evocate</h1>
        <p className="homeParagraph">
          Evocate is a card matching game to test your memory. In a deck of
          paired cards, you will need to match each pair to win the game. You
          can choose your difficulty and join the Leader Board after completion.
        </p>
        <div className="d-flex justify-content-center"></div>
        {this.startButton()}
        {this.difficultySelector()}
      </div>
    );
  }
}
