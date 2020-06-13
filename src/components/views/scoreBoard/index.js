import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import "./scoreBoard.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="scoreboard-container">
          <div className="row">
            <p className="scoreboardParagraph">SCOREBOARD</p>
          </div>

          <div className="row">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th className="scoreboardFont">Name</th>
                  <th className="scoreboardFont">Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="row">
          <Button href="/">NEW GAME</Button>
        </div>
      </div>
    );
  }
}
