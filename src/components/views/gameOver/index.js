import React, { Component } from "react";
import {Jumbotron, Button, Form} from 'react-bootstrap'
import "./styles.css";

export default class index extends Component {
  render() {
    return (
      <div>
      <div className="game-over-container">
        <div class="row">
          <p>GAME OVER</p>
        </div>

        <div class="row">
          <Form>
          <Form.Control
          type="text"
          placeholder="Enter Name"
          >
          </Form.Control>
          </Form>
        </div>

        <div class="row">
          <Button>SUBMIT</Button>
        </div>

        <div class="row">
          <Button>NEW GAME</Button>
        </div>

      

      </div>
    </div>
    );
  }
}