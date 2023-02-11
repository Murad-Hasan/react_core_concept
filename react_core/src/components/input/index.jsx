import React, { Component } from "react";

class Input extends Component {
  state = {
    value: "",
  };
  render() {
    return (
      <div className="container mx-auto">
        <input
          className='border p-2 my-2'
          type='text'
          placeholder="What's your name?"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
        />
        {this.state.value && <p>Welcome, {this.state.value}</p>}
      </div>
    );
  }
}

export default Input;
