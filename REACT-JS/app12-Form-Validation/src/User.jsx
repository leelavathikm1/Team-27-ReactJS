import React, { useEffect, useState } from "react";

export const User = () => {
  const [userValues, setUserValues] = useState({
    fName: "",
    lName: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    const newUserValues = { ...userValues };
    newUserValues[e.target.name] = e.target.value;
    setUserValues(newUserValues);
    // if (e.target.value.length >= 8) {
    //   document.querySelector("button").removeAttribute("disabled", true);
    // } else {
    //   document.querySelector("button").setAttribute("disabled", true);
    // }
  };

  useEffect(() => {
    if (userValues.fName.length >= 8 && userValues.lName.length >= 6) {
      document.querySelector("button").removeAttribute("disabled", true);
    } else {
      document.querySelector("button").setAttribute("disabled", true);
    }
    [userValues];
  });

  return (
    <div>
      <h2>Welcome To User Component</h2>
      <hr />
      <form>
        <label htmlFor="">First Name</label>
        <input
          type="text"
          name="fName"
          value={userValues.fName}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">Last Name</label>
        <input
          type="text"
          name="lName"
          value={userValues.lName}
          onChange={handleChange}
        />{" "}
        <br />
        <br />
        <button disabled>Add User</button>
      </form>
    </div>
  );
};
