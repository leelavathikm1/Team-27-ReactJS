import React, { Component } from "react";

export default class ShowMessage extends Component {
  render() {
    return (
      <div>
        {/* <h2>{this.props.hello}</h2>
        <p> {this.props.sayHello()}</p> */}
        <p>Iam From Show Component</p>
        <hr />
        <h2>{this.props.msg}</h2>
      </div>
    );
  }
}
