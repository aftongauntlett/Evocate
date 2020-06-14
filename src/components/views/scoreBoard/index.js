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

          <div className="">
            {JSON.stringify(this.state.scores)}
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="scoreboardFont">Name</th>
                  <th className="scoreboardFont">Score</th>
                </tr>
              </thead>
            </Table>
            {this.listScores()}
          </div>
        </div>

        <div className="row">
          <Button href="/">NEW GAME</Button>
        </div>
      </div>
    );
  }
}
