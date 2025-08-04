import { Component } from "react";

export default class ChildTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Iam coming From Child !",
    };
  }

  sendDataToParent = () => {
    this.props.getInfo(this.state.message);
  };

  render() {
    console.log(this.props.getInfo);
    return (
      <div>
        <h2>Iam from Child Component</h2>
        <button onClick={this.sendDataToParent}>Send Data To Parent</button>
      </div>
    );
  }
}
