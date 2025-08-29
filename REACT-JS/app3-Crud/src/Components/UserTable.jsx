import { Component } from "react";

export default class UserTable extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          fname: "Arjun",
          lname: "Reddy",
          email: "arjun.reddy@example.com",
          zip: "560001",
          address: "123 MG Road, Bangalore, Karnataka",
        },
        {
          id: 2,
          fname: "Priya",
          lname: "Sharma",
          email: "priya.sharma@example.com",
          zip: "110045",
          address: "56 Dwarka Sector 10, New Delhi",
        },
        {
          id: 3,
          fname: "Rahul",
          lname: "Verma",
          email: "rahul.verma@example.com",
          zip: "400021",
          address: "789 Marine Drive, Mumbai, Maharashtra",
        },
        {
          id: 4,
          fname: "Sneha",
          lname: "Kumar",
          email: "sneha.kumar@example.com",
          zip: "600028",
          address: "45 Besant Nagar, Chennai, Tamil Nadu",
        },
        {
          id: 5,
          fname: "Kiran",
          lname: "Naik",
          email: "kiran.naik@example.com",
          zip: "500081",
          address: "32 Hitech City, Hyderabad, Telangana",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>ID</th>
              <th>FName</th>
              <th>LName</th>
              <th>Email</th>
              <th>Zip</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => {
              return (
                <tr>
                  {Object.values(user).map((val) => {
                    return <td>{val}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
