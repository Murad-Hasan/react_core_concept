import React, { Component } from "react";

class Timer extends Component {
  state = {
    count: 0,
  };

  intervalId = null;

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
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
        <h1 className="text-2xl font-bold py-2">Simple Timer</h1>
        <div className='border p-5 border-green-500'>
          <div className='timer__section'>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold active:scale-90 rounded hover:text-white px-2 border border-blue-500 hover:border-transparent'
              onClick={this.decrementCount}
            >
              -
            </button>
            <span className='px-2'>{this.state.count}</span>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold active:scale-90 rounded hover:text-white px-2 border border-blue-500 hover:border-transparent'
              onClick={this.incrementCount}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div className='stop__watch py-3'>
            <button
              onClick={this.startTimer}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 active:scale-90 hover:border-transparent rounded ml-2'
            >
              Start
            </button>
            <button
              onClick={this.stopTimer}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 active:scale-90 hover:border-transparent rounded ml-2'
            >
              Stop
            </button>
            <button
              onClick={this.resetTimer}
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 active:scale-90 hover:border-transparent rounded ml-2'
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
