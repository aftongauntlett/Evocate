import React, { Component } from 'react';
import { Card, Button } from "react-bootstrap";
import "./themes.css";
import Gamepage from "../gamePage";
import { withRouter } from "react-router-dom";


export default withRouter(class index extends Component {
  constructor(props) {
    super(props);
    // if not easy as in greater than 12 cards then set theme to random, else let them choose theme
    this.state = {
      theme: ''
    }
  }

  selectTheme = (theme) => e => {
    this.setState({
      theme: theme
    });
    console.log(theme)
    console.log(this.state)
  }

  componentDidMount() {
    const { difficulty } = this.props.match.params
    // console.log()
    console.log(difficulty)
    this.setState(() => ({
      theme: difficulty == '12' ? '' : 'random',
      cardCount: difficulty
    }))
  }


  render() {
    const { theme, cardCount } = this.state
    return (
      <div>
        {theme}
        {theme && (
          <Gamepage theme={theme} cardCount={cardCount} />
        )}
        {!theme && (
          <div className="themes-container">
            <div className="row">
              <p className="themeParagraph">CHOOSE YOUR THEME</p>
            </div>

            <div className="flip-container">
              <div className="flipper">
                <div className="row">
                  <Card className="poke-card" >
                    <Card.Body>
                      <Button onClick={this.selectTheme("pokemon")} className="poke-button">Pokemon</Button>
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
                      <Button onClick={this.selectTheme("superheroes")} className="hero-button">Superheros</Button>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>

            <div className="flip-container">
              <div className="flipper">
                <div className="row">
                  <Button onClick={this.selectTheme("random")} className="random-button">Random</Button>
                </div>
              </div>
            </div>


          </div>
        )}

      </div>
    );
  }
})
