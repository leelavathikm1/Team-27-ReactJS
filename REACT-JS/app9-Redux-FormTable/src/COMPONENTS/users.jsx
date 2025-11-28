import React from "react";
import { useSelector } from "react-redux";
import UsersTable from "./UsersTable";

const Users = () => {
  const userDetails = useSelector((state) => state.userInfo.usersArray);
  //   const usersDetails = useSelector((state) => state.userInfo);
  console.log(userDetails);
  return (
    <div>
      <h2>Welcome To UserFormTable</h2>
      {/* <UsersTable /> */}
    </div>
  );
};

export default Users;
