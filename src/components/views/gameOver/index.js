import React, { Component } from "react";
import {Jumbotron, Button, Form} from 'react-bootstrap'
import "./styles.css";

export default class index extends Component {
  render() {
    return (
    <div>
      <div className="game-over-container">
      <Jumbotron>
        <h1>GAME OVER</h1>
          <Form 
          type="text"
          placeholder="Enter Name" 
          />
          <Button variant="primary">New Game</Button>
  
      </Jumbotron>

      </div>
    </div>
    );
  }
}