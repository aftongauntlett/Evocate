import React, { Component } from "react";
import { Button, Table } from 'react-bootstrap'
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
                <th>Name</th>
                <th>Score</th>
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

        <div className="row">
          <Button>NEW GAME</Button>
        </div>

        </div>
      </div>
    );
  }
}