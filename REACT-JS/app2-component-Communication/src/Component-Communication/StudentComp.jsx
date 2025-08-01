import { Component } from "react";

export default class StudentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        fName: "",
        lName: "",
        email: "",
      },
    };
  }

  handleChange = (e) => {
    // console.log(e);
    // const inputName = e.target.name;
    // const enteredValue = e.target.value;
    // console.log(inputName);
    // console.log(enteredValue);
    // if you want to change any value in state
    //1.create a copy of the state variable
    const newStudent = { ...this.state.student }; //this line will create a new student Object, It is a copy of this.state .student

    //2.Update the Values
    newStudent[e.target.name] = e.target.value;

    //3. Replace in State
    this.setState({ student: newStudent });

    // console.log(newStudent);
  };

  handleSubmit = () => {
    console.log(this.state.student);
  };

  render() {
    const { fName, lName, email } = this.state.student;
    return (
      <div>
        <form action="">
          <label htmlFor="fName">Enter First Name : </label> <br />
          <input
            type="text"
            name="fName"
            value={fName}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="lName">Enter Last Name : </label> <br />
          <input
            type="text"
            name="lName"
            value={lName}
            onChange={this.handleChange}
          />{" "}
          <br />
          <label htmlFor="email"> Enter Email : </label> <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />{" "}
          <br />
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
