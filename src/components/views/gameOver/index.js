import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap'
import "./gameOver.css";

export default class index extends Component {
  render() {
    return (
      <div>
      <div className="game-over-container">
        <div className="row">
          <p className="gameOverParagraph">GAME OVER</p>
        </div>

        <div className="row">
          <Form>
          <Form.Control
          type="text"
          placeholder="Enter Name"
          >
          </Form.Control>
          </Form>
        </div>

        <div className="row">
          <Button>SUBMIT</Button>
        </div>

        <div className="row">
          <Button>NEW GAME</Button>
        </div>

      

      </div>
    </div>
    );
  }
}