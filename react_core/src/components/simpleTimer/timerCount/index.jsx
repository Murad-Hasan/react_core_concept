import React, { Component } from 'react';

class TimerCount extends Component {
  render(props) {
    return (
      <span className={this.props.style}>{this.props.children}</span>
    );
  }
}

export default TimerCount;