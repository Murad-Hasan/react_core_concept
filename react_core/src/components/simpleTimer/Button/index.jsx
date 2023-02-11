import React, { Component } from 'react';

class Button extends Component {
  render(props) {
    return (
      <>
        <button
              className={this.props.btnStyle}
              onClick={this.props.event}
            >
              {this.props.children}
            </button>
      </>
    );
  }
}

export default Button;