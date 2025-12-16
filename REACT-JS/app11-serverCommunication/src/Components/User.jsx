import axios from "axios";
import { useEffect, useState } from "react";

export function User(params) {
  const [userInfo, setUserInfo] = useState({ fname: "", lname: "", email: "" });
  const [allUserInfo, setAllUserInfo] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    getDataFromServer();
  }, []);

  const handleChange = (e) => {
    const newUserInfo = { ...userInfo }; //cloning or copying of userInfo
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
    console.log(newUserInfo);
  };

  // const createUser = () => {
  //   fetch("http://localhost:3000/users", {
  //     method: "POST",
  //     body: JSON.stringify(userInfo),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then(() => {
  //       console.log("User Created");
  //     });
  // };

  const createUser = () => {
    axios.post("http://localhost:3000/users", userInfo).then(function (res) {
      console.log("User Created Successfully");
      getDataFromServer();
      clearForm();
    });
  };

  const getDataFromServer = () => {
    axios.get("http://localhost:3000/users").then((resp) => {
      console.log(resp.data);
      setAllUserInfo(resp.data);
    });
  };

  const clearForm = () => {
    setUserInfo({
      fname: "",
      lname: "",
      email: "",
    });
  };

  const handleDelete = (user) => {
    axios.delete("http://localhost:3000/users/" + user.id).then(() => {
      getDataFromServer();
    });
  };

  const handleEdit = (user) => {
    setUserInfo(user);
    setIsEdit(true);
  };

  const updateUser = () => {
    axios
      .put("http://localhost:3000/users/" + userInfo.id, userInfo)
      .then(function () {
        clearForm();
        setIsEdit(false);
        getDataFromServer();
      });
  };

  return (
    <>
      <h2>Hello From User Component</h2>

      <form>
        <label htmlFor="">First Name : </label>
        <input
          type="text"
          name="fname"
          value={userInfo.fname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Lasst Name :</label>
        <input
          type="text"
          name="lname"
          value={userInfo.lname}
          onChange={handleChange}
        />{" "}
        <br />
        <label htmlFor="">Email :</label>
        <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleChange}
        />{" "}
        <br />
        {isEdit ? (
          <button type="button" onClick={updateUser}>
            Update User
          </button>
        ) : (
          <button type="button" onClick={createUser}>
            Add User
          </button>
        )}
        {/* <button type="button" onClick={createUser}>
          Add User
        </button> */}
      </form>
      <br />
      <table border={1}>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Email</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>
          {allUserInfo.map((user) => {
            return (
              <tr>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => {
                      handleEdit(user);
                    }}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      handleDelete(user);
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
    </>
  );
}
