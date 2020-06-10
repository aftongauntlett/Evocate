import axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./style.css";

export default class index extends Component {
  onSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:8080/api/score", {
      name: event.currentTarget.name.value,
    });
  }
  render() {
    return (
      <div>
        <div className="game-over-container">
          <div className="row">
            <p>GAME OVER</p>
          </div>

          <Form onSubmit={this.onSubmit}>
            <div className="row">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
              ></Form.Control>
            </div>

            <div className="row">
              <Button type="submit">SUBMIT</Button>
            </div>

            <div className="row">
              <Button>NEW GAME</Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
