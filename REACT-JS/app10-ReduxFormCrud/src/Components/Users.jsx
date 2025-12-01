import React, { useState } from "react";
import UsersForm from "./UsersForm";
import UsersTable from "./UsersTable";

const Users = () => {
  return (
    <div>
      <h2>Welcome to Users</h2>
      <hr />
      <UsersForm />
      <hr />
      <UsersTable />
    </div>
  );
};

export default Users;
