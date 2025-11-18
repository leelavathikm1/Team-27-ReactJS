import React, { Component } from "react";
import { MessageAccessConsumer } from "./ContextComponent";

export default class ChildComponent extends Component {
  render() {
    return (
      <div>
        <MessageAccessConsumer>
          {(value) => {
            console.log(value);
            return (
              <div>
                <h2>{value.message}</h2>
              </div>
            );
          }}
        </MessageAccessConsumer>
      </div>
    );
  }
}
