import React, { Component } from "react";

export default class Timer extends Component {
    constructor(props){
        super(props)
        this.state = {
            seconds: 0,
            minutes: 0,
            hours: 0,
            active: false,
            interval: null
        }
    }

    startTimer(){
        let { active, interval, seconds, minutes, hours} = this.state;

        const updateTimer = () => {

            seconds++
            if(seconds === ''){
                this.stopTimer()
                clearInterval(interval)
            }
            if (seconds === 60) {
                minutes++;
                seconds = 0;
            }
            if (minutes === 60) {
                hours++;
                minutes = 0;
            }
            this.setState({seconds,minutes,hours, interval})
        }

        if (active === false && interval === null) {
            interval = setInterval(updateTimer, 1000);
        };
    }

    stopTimer(){
        clearInterval(this.state.interval)
    }

    getTime(){
        // return time
        return '0 hours'
    }

    render() {
      const { active } = this.props;
      if (active && !this.state.active) {
        this.startTimer();
      } 
      return (
        <div className='timer' style={{margin: '7px',fontSize: '20px', color: 'white'}}>
            Timer: {this.state.minutes} Minutes {this.state.seconds} Seconds
        </div>
      )
    }
  }


//   let second = 0;
//   let minute = 0;
//   let hour = 0;
//   let timer = document.querySelector('.timer');
//   timer.innerHTML = '0 mins 0 secs';



// function startTimer() {
//   interval = setInterval(function() {
//     timer.innerHTML = minute + ' mins ' + second + ' secs';
//     second++;
//     if (second == 60) {
//       minute++;
//       second = 0;
//     }
//     if (minute == 60) {
//       hour++;
//       minute = 0;
//     }
//   }, 1000);
// }

