import axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./gameOver.css";
import { Redirect } from "react-router-dom";

export default class index extends Component {
  onSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/score", {
        name: event.currentTarget.name.value,
      })
      .then((response) => {
        return <Redirect to="/scoreBoard" />;
      });
  }
  render() {
    return (
      <div className="game-over-container">
        <div className="row">
          <p className="gameOverParagraph">GAME OVER</p>
        </div>
        <Form onSubmit={this.onSubmit}>
          <div className="row">
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
            ></Form.Control>
            <Button type="submit">SUBMIT</Button>
          </div>
        </Form>

        <div className="row">
          <Button href="/">NEW GAME</Button>
        </div>

        <div className="ball d-flex justify-content-center">
          <div class="outer-circle">
            <div class="inner-circle"></div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    );
  }
}
