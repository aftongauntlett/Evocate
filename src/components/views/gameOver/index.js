import axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./gameOver.css";
import { Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

export default withRouter(
  class index extends Component {
    state = {};
    onSubmit(event) {
      event.preventDefault();
      axios
        .post("http://localhost:8080/api/score", {
          name: event.currentTarget.name.value,
          score: this.state.score,
        })
        .then((response) => {
          return <Redirect to="/scoreBoard" />;
        });
    }

    componentDidMount() {
      const { score } = this.props.match.params;
      console.log(this);
      this.setState({
        score,
      });
    }
    render() {
      const score = this.props.score;
      const difficulty = this.props.difficulty;
      return (
        <div className="game-over-container">
          <div className="row">
            <p className="gameOverParagraph">GAME OVER</p>
          </div>

          <Form onSubmit={this.onSubmit}>
            <div style={{ color: "white" }}>
              score {score} difficulty {difficulty}
            </div>
            <div className="row">
              <p className="gameOverParagraph">GAME OVER</p>
            </div>
            <div className="ball d-flex justify-content-center">
              <div className="outer-circle">
                <div className="inner-circle d-flex justify-content-center align-items-center">
                  {this.state.score}
                </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </Form>

          <Form className="mt-5" onSubmit={this.onSubmit}>
            <div className="row">
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter Name"
              ></Form.Control>

              <Button type="submit">SUBMIT</Button>
            </div>
          </Form>
        </div>
      );
    }
  }
);
