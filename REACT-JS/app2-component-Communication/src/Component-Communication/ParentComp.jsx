import { Component } from "react";
import ChildComp from "./ChildComp";

export default class ParentComp extends Component {
  constructor() {
    super();
    // This is called as state in parent
    this.state = {
      message: "Parent Component text Is Called from Child Component !!",
    };
  }

  //   changeMsgInParent = () => {
  //     this.setState({
  //       newMessage: "Text Changed in Parent When You clicked the Button",
  //     });
  //   };

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        {/* <button onClick={this.changeMsgInParent}>Change Message</button> */}

        <hr />
        {/* child comp claaed from Parent Comp */}
        <ChildComp newMessage={this.state.message} />
      </div>
    );
  }
}
