import React, { Component } from "react";
import UserChild from "./UserChild";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div>
        <h2>User Component</h2>
        <UserChild
          countNum={this.state.count}
          handleIncrement={this.incrementCount}
        />
      </div>
    );
  }
}
