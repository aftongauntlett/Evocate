import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./themes.css";
import Gamepage from "../gamePage";
import { withRouter } from "react-router-dom";

export default withRouter(
  class index extends Component {
    constructor(props) {
      super(props);
      this.state = {
        theme: "",
      };
    }

    selectTheme = (theme) => (e) => {
      this.setState({
        theme: theme,
      });
      console.log(theme);
      console.log(this.state);
    };

    componentDidMount() {
      const { difficulty } = this.props.match.params;
      console.log(difficulty);
      this.setState(() => ({
        theme: "",
        cardCount: difficulty,
      }));
    }

    render() {
      const { theme, cardCount } = this.state;
      return (
        <div>
          {theme && <Gamepage theme={theme} cardCount={cardCount} />}
          {!theme && (
            <div className="themes-container">
              <div className="row">
                <p className="themeParagraph">CHOOSE YOUR THEME</p>
              </div>

              <div className="row">
                <Button
                  onClick={this.selectTheme("pokemon")}
                  className="poke-button"
                >
                  Pokemon
                </Button>
              </div>

              <div className="row">
                <Button
                  onClick={this.selectTheme("superheroes")}
                  className="hero-button"
                >
                  Superheroes
                </Button>
              </div>
            </div>
          )}
          <div className="ball d-flex justify-content-center mt-5">
            <div className="outer-circle">
              <div className="inner-circle d-flex justify-content-center align-items-center"></div>
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
);
