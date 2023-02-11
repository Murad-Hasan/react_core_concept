import React, { Component } from "react";

class Timer extends Component {
  state = {
    count: 0,
  };
  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementCount = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };
  render() {
    return (
      <div className='container mx-auto text-center'>
        <h1>Timer</h1>
        <div className='border p-5'>
          <div className='timer__section'>
            <button className='px-2 border border-gray-400' onClick={this.decrementCount}>
              -
            </button>
            <span className='px-2'>{this.state.count}</span>
            <button className='px-2 border border-gray-400' onClick={this.incrementCount}>
              {" "}
              +{" "}
            </button>
          </div>
          <div className='stop__watch py-3'>
            <button className='px-2 ml-2 border border-gray-400'>Start</button>
            <button className='px-2 ml-2 border border-gray-400'>Stop</button>
            <button className='px-2 ml-2 border border-gray-400'>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
