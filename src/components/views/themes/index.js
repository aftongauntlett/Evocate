import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import "./themes.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <div className="themes-container">
          <div className="row">
            <p className="themeParagraph">CHOOSE YOUR THEME</p>
          </div>
        
     <div className="flip-container">
        <div className="flipper">
         <div className="row">
        <Card className="poke-card" >
            <Card.Body>
                <Button className="poke-button">Pokemon</Button>
            </Card.Body>
        </Card>
        </div>
        </div>
      </div>

      <div className="flip-container">
        <div className="flipper">
         <div className="row">
        <Card className="hero-card" >
            <Card.Body>
                <Button className="hero-button">Superheros</Button>
            </Card.Body>
        </Card>
        </div>
        </div>
      </div>

      <div className="flip-container">
        <div className="flipper">
          <div className="row">
            <Button className="random-button">Random</Button>
          </div>
        </div>
      </div>


      </div>
    </div>
    );
  }
}
