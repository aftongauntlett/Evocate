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
      const score = this.props.score;
      const difficulty = this.props.difficulty;
      axios
        .post("https://evocate-backend.herokuapp.com/api/score", {
          name: event.currentTarget.name.value,
          score: score,
        })
        .then((response) => {
          this.props.history.push("/scoreBoard");
        });
    }

    render() {
      const score = this.props.score;
      const difficulty = this.props.difficulty;
      return (
        <div className="game-over-container flex-wrap">
          <div className="row mt-3">
            <p className="gameOverParagraph">Join the Leader Board</p>
          </div>

          <Form
            className="mt-3"
            onSubmit={(event) => {
              this.onSubmit(event);
            }}
          >
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
