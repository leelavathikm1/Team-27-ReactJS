import React, { Component } from "react";
import { MessageAccessConsumer } from "./ContextComponent";

export default class ParentComponent extends Component {
  render() {
    return (
      <div>
        <MessageAccessConsumer>
          {(value) => {
            return (
              <div>
                <h3>{value.message}</h3>
              </div>
            );
          }}
        </MessageAccessConsumer>
      </div>
    );
  }
}
