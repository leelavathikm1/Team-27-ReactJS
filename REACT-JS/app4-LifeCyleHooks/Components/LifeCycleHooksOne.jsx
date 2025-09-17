import React, { Component } from "react";

export default class LifeCycleHooksOne extends Component {
  constructor() {
    super();
    console.log("welcome To Constructor");
    this.state = {
      message: "",
    };
  }

  static getDerivedStateFromProps() {
    console.log("Iam From getDerivedStateFromProps");
    return null;
  }
  render() {
    console.log("Iam From Render Method");
    return <div>LifeCycleHooksOne</div>;
  }
  componentDidMount() {
    console.log("Iam form componentDidMount");
  }
}
