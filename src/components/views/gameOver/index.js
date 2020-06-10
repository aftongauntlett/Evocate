import axios from "axios";
import React, { Component } from "react";
import { Button, Form } from 'react-bootstrap'
import "./gameOver.css";

export default class index extends Component {
  onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/api/score", {
      name: event.currentTarget.name.value,
    });
  }
  render() {
    return (
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
    );
  }
}
