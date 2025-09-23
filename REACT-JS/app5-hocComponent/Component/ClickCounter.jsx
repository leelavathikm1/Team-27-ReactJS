import React, { Component } from "react";
import HocComponent from "./HocComponent";

class ClickCounter extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0,
  //     };
  //   }
  //   incrementCount = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };

  //   decrementCount = () => {
  //     this.setState({ count: this.state.count - 1 });
  //   };

  //   resetCount = () => {
  //     this.setState({ count: 0 });
  //   };

  render() {
    console.log(this.props);
    console.log("FromClickcounter");
    const { count, incrementCount, decrementCount, resetCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
        <h2>Count : {count}</h2>
      </div>
    );
  }
}
export default HocComponent(ClickCounter);
