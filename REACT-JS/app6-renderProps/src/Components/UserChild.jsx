import React, { Component } from "react";

export default class UserChild extends Component {
  render() {
    return (
      <div>
        <h2>from UserChild Component</h2>
        <hr />
        <button onClick={this.props.handleIncrement}>Increment</button>
        <p> {this.props.countNum}</p>
      </div>
    );
  }
}
