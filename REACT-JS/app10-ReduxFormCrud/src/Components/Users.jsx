import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersTable from "./UsersTable";
import { createUserAction, deleteUserAction } from "../store/UserSlice";
import UsersForm from "./UsersForm";

const Users = () => {
  const usersDetails = useSelector((state) => state.usersInfo.usersArry);
  const dispatch = useDispatch();
  console.log(usersDetails);

  const deleteUser = (user) => {
    console.log(user);
    dispatch(deleteUserAction(user));
  };

  const addUser = (user) => {
    dispatch(createUserAction(user));
  };
  return (
    <div>
      <h2>Welcome To Users</h2>
      <UsersForm addUser={addUser} />
      <UsersTable users={usersDetails} deleteUser={deleteUser} />
    </div>
  );
};

export default Users;
