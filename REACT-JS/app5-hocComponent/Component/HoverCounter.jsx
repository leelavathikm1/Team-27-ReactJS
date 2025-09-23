import React, { Component } from "react";
import HocComponent from "./HocComponent";

class HoverCounter extends Component {
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
    console.log("Hover Counter");
    const { count, incrementCount, decrementCount, resetCount } = this.props;
    return (
      <div>
        <button onMouseOver={incrementCount}>Increment</button>
        <button onMouseOver={decrementCount}>Decrement</button>
        <button onMouseOver={resetCount}>Reset</button>
        <h2>Count : {count}</h2>
      </div>
    );
  }
}
export default HocComponent(HoverCounter);
