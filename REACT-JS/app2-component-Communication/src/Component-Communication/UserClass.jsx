import { Component } from "react";

export default class UserClass extends Component {
  constructor() {
    super();

    this.state = {
      fname: "",
      lname: "",
    };
  }

  handelChange = (e) => {
    // console.log(e);
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };

  addUser = () => {
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="">First Name </label>
          <br />
          <input
            type="text"
            name="fname"
            value={this.state.fname}
            onChange={this.handelChange}
          />
          <br />
          <label htmlFor="">Last Name</label>
          <br />
          <input
            type="text"
            name="lname"
            value={this.state.lname}
            onChange={this.handelChange}
          />
          <br />
          <button type="button" onClick={this.addUser}>
            Add Names
          </button>
        </form>
      </div>
    );
  }
}
