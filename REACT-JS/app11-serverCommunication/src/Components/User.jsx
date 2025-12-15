import { useState } from "react";

export function User(params) {
  const [userInfo, setUserInfo] = useState({ fname: "", lname: "", email: "" });

  const handleChange = (e) => {
    const newUserInfo = { ...userInfo }; //cloning or copying of userInfo
    newUserInfo[e.target.name] = e.target.value;
    setUserInfo(newUserInfo);
    console.log(newUserInfo);
  };

  const createUser = () => {
    fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        console.log("User Created");
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
        <button type="button" onClick={createUser}>
          Add User
        </button>
      </form>
    </>
  );
}
