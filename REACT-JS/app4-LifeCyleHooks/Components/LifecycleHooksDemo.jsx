import React, { Component } from "react";

export default class LifecycleHooksDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
      users: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props, state);
    if (props.age <= 18) {
      return { message: "You are a Teenager" };
    } else if (props.age > 18 && props.age <= 58) {
      return { message: "You are an adult" };
    } else {
      return { message: "You are a Senior Citizen" };
    }
    return null;
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <ul>
          {this.state.users.map((usr, i) => {
            return <li key={i}>{usr.name}</li>;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    // console.log("From componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((rawData) => {
        return rawData.json();
      })
      .then((response) => {
        console.log(response);
        this.setState({ users: response });
      });
  }
}
