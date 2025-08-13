import { Component } from "react";

export default class CompB extends Component {
  render() {
    return (
      <div>
        <h2>Iam From Component B</h2>
        <p>{this.props.msg}</p>
      </div>
    );
  }
}
