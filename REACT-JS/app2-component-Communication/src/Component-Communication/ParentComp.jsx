import { Component } from "react";
import ChildComp from "./ChildComp";

export default class ParentComp extends Component {
  constructor(props) {
    super(props);
    // This is called as state in parent
    this.state = {
      message: "Parent Component text Is Called from Child Component !!",
      showPicture: true,
    };
  }
  // If you want to change any value inside the state, you should call this.setState Method
  changeMsgInParent = () => {
    this.setState({
      message: "Text Changed in Parent When You clicked the Button",
    });
  };

  render() {
    return (
      <div>
        <h2>Parent Component</h2>
        <button onClick={this.changeMsgInParent}>Change Message</button>

        <hr />
        {/* child comp claaed from Parent Comp */}
        <ChildComp newMessage={this.state.message} />
        {this.state.showPicture && (
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM7bctX1yQ39f1tL7rK21_O620LywBs0bdU4fBg1P_2qxtEOF4Zxd34UAqPrCJIfMfKj4&usqp=CAU" />
        )}
      </div>
    );
  }
}
