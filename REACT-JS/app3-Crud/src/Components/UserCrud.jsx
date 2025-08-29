import { Component } from "react";

export default class UserCrud extends Component {
  state = {
    user: {
      fName: "",
      lName: "",
      userName: "",
      email: "",
    },

    users: [],
    editIndex: null,
  };

  handleChange = (e) => {
    // console.log(e);
    const inputName = e.target.name;
    const userEnteredValue = e.target.value;
    // this.setState({ [inputName]: userEnteredValue });
    const newUser = { ...this.state.user };
    newUser[inputName] = userEnteredValue;
    this.setState({ user: newUser });
    // console.log(inputName);
    // console.log(userEnteredValue);
    // console.log(newUser);
  };

  handeleSubmit = () => {
    const newUsers = [...this.state.users];
    newUsers.push(this.state.user);
    this.setState({ users: newUsers });
    this.handleReset();
    // console.log(newUsers);
  };

  handleReset = () => {
    const resetUser = {
      fName: "",
      lName: "",
      userName: "",
      email: "",
    };
    this.setState({ user: resetUser });
  };

  handleEdit = (usr, i) => {
    this.setState({ user: usr, editIndex: i });
  };

  handleDelete = (usr) => {
    const newUsers = this.state.users.filter((del) => {
      return del.email !== usr.email;
    });
    this.setState({ users: newUsers });
  };

  handleUpdate = () => {
    const newUsers = [...this.state.users];
    newUsers[this.state.editIndex] = this.state.user;
    this.setState({ users: newUsers, editIndex: null });
    this.handleReset();
  };

  render() {
    const { fName, lName, userName, email } = this.state.user;
    return (
      <div>
        <form>
          <label htmlFor="fName">First Name :</label>
          <input
            type="text"
            name="fName"
            value={fName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="lName">Last Name:</label>
          <input
            type="text"
            name="lName"
            value={lName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="userName">User Name:</label>
          <input
            type="text"
            name="userName"
            value={userName}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <br />
          {/* <button type="button" onClick={this.handeleSubmit}>
            Submit
          </button> */}
          {this.state.editIndex === null ? (
            <input type="button" value="Submit" onClick={this.handeleSubmit} />
          ) : (
            <input type="button" value="Update" onClick={this.handleUpdate} />
          )}
        </form>
        <table border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((usr, i) => {
              return (
                <tr key={i}>
                  <td>{usr.fName}</td>
                  <td>{usr.lName}</td>
                  <td>{usr.userName}</td>
                  <td>{usr.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleEdit(usr, i);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(usr);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
