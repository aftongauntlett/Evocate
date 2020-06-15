import React, { Component } from "react";
import "./timer.css";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      active: false,
    };
    this.interval = null;
  }

  startTimer() {
    let { active, seconds, minutes, hours } = this.state;

    if (active === false && this.interval === null) {
      this.interval = setInterval(() => {
        if (this.props.running) {
          seconds++;

          if (seconds === 60) {
            minutes++;
            seconds = 0;
          }
          if (minutes === 60) {
            hours++;
            minutes = 0;
          }
          this.setState({ seconds, minutes, hours });
        } else {
          this.stopTimer();
        }
      }, 1000);
    }
  }

  stopTimer() {
    clearInterval(this.interval);
    this.props.setFinalTime(
      `${this.state.minutes} Minutes ${this.state.seconds} Seconds`
    );
  }

  render() {
    const { running } = this.props;
    if (running && !this.state.active) {
      this.startTimer();
    }
    return (
      <div className="d-flex justify-content-center">
        <div className="gradient-border d-flex justify-content-center" id="box">
          Timer: {this.state.minutes} Minutes {this.state.seconds} Seconds
        </div>
      </div>
    );
  }
}
