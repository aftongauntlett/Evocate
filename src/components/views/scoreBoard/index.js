import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import "./scoreBoard.css";
import Axios from "axios";

export default class index extends Component {
  state = { scores: [] };
  componentDidMount() {
    Axios.get("http://localhost:8080/api/score").then((response) => {
      this.setState({ scores: response.data.data });
    });
  }

  listScores() {
    return this.state.scores.map((score) => {
      return (
        <div className="row">
          <div className="col-6">{score.name}</div>
          <div className="col-6">{score.score}</div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="scoreboard-container">
          <div className="row">
            <p className="scoreboardParagraph">SCOREBOARD</p>
          </div>

          <div className="list-container">
            <div className="name-score-row row">
              <div className="col-6">
                <div className="scoreboardFont">Name</div>
              </div>

              <div className="col-6">
                <div className="scoreboardFont">Score</div>
              </div>
            </div>

            <div className="player-row"></div>
          </div>

          <div className="flip-container">
            <div className="flipper">
              <div className="row">
                <Button href="/">NEW GAME</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
