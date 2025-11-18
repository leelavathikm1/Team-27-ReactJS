import React, { Component } from "react";
import { MessageAccessProvider } from "./ContextComponent";
import ChildComponent from "./ChildComponent";
import ParentComponent from "./ParentComponent";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Main Component Message sending to Parent Component",
      person: {
        name: "Leela",
      },
    };
  }
  render() {
    return (
      <div>
        <MessageAccessProvider value={this.state}>
          {/* <ChildComponent /> */}
          <ParentComponent />
        </MessageAccessProvider>
      </div>
    );
  }
}
