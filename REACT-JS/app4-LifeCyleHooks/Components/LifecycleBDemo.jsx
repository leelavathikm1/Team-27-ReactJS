import React, { Component } from "react";
import ChildComp from "./ChildComp";

export default class LifecycleBDemo extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 10 });
  };

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <ChildComp count={this.state.count} />
      </div>
    );
  }
}
