import { Component } from "react";
import ChildTwo from "./ChildTwo";

export default class ParentTwo extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
    };
  }

  receiveDataFromChild = (msg) => {
    console.log("Data From Child", msg);
    this.setState({ message: msg });
  };

  render() {
    return (
      <div>
        <h2>{this.state.message}</h2>
        <ChildTwo getInfo={this.receiveDataFromChild} />
        {/* send the above created method to Child */}
      </div>
    );
  }
}

//To Get the data from Child follow these steps
//1. Create a state in Parent Component
//2. create Event  to receive the data from child
//3. send the above created method to Child
//4. Create a state Variable in child
//5. Create a buttonand create and Event then write a function which will call the function received from the parent , send the data in that function (Received from parent)
