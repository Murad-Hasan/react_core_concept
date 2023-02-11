import React, { Component } from "react";
import Button from "./Button";
import TimerCount from "./timerCount";

class Timer extends Component {
  state = {
    count: 0,
    minute: 0,
  };

  intervalId = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
    if (this.state.count === 59) {
      this.setState({ count: 0, minute: this.state.minute + 1 });
    }
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    } else if (this.state.count === 0 && this.state.minute > 0) {
      this.setState({ count: 59, minute: this.state.minute - 1 });
    }
  };
  startTimer = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Time is up");
            clearInterval(this.intervalId);
            this.intervalId = null;
          }
        });
      }, 1000);
    }
  };

  stopTimer = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };
  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };
  render() {
    return (
      <div className='container mx-auto text-center'>
        <h1 className='text-2xl font-bold py-2'>Simple Timer</h1>
        <div className='border p-5 border-green-500'>
          <div className='timer__section'>
            <Button
              btnStyle='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold active:scale-90 rounded hover:text-white px-2 border border-blue-500 hover:border-transparent'
              event={this.decrementCount}
            >
              {" "}
              -{" "}
            </Button>
            <TimerCount style="p-2 text-2xl font-bold">{this.state.minute}m:{this.state.count}s</TimerCount>
            <Button
              btnStyle='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold active:scale-90 rounded hover:text-white px-2 border border-blue-500 hover:border-transparent'
              event={this.incrementCount}
            >
              +
            </Button>
          </div>
          <div className='stop__watch py-3'>
            <Button
              event={this.startTimer}
              btnStyle='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 active:scale-90 hover:border-transparent rounded ml-2'
            >
              Start
            </Button>
            <Button
              event={this.stopTimer}
              btnStyle='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 active:scale-90 hover:border-transparent rounded ml-2'
            >
              Stop
            </Button>
            <Button
              event={this.resetTimer}
              btnStyle='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 active:scale-90 hover:border-transparent rounded ml-2'
            >
              Reset
            </Button>
          </div>
        </div>
       
      </div>
    );
  }
}

export default Timer;
