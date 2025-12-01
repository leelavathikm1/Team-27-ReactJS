import React from "react";
// import Users from "./Users";
export default function UsersTable({ users }) {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Users List</h2>
      <table
        border="1"
        cellPadding="10"
        style={{ borderCollapse: "collapse", width: "100%" }}
      >
        <thead>
          <tr>
            <th style={StyleSheet.th}>ID</th>
            <th style={StyleSheet.th}>Name</th>
            <th style={StyleSheet.th}>Email</th>
            <th style={StyleSheet.th}>Role</th>
            <th style={StyleSheet.th}>Age</th>
            <th style={StyleSheet.th}>City</th>
            <th style={StyleSheet.th}>Edit User</th>
            <th style={StyleSheet.th}>Delete User</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={StyleSheet.td}>{user.id}</td>
              <td style={StyleSheet.td}>{user.name}</td>
              <td style={StyleSheet.td}>{user.email}</td>
              <td style={StyleSheet.td}>{user.role}</td>
              <td style={StyleSheet.td}>{user.city}</td>
              <td style={StyleSheet.td}>Edit User</td>
              <td style={StyleSheet.td}>Delete User</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  th: { border: "1px solid #ccc" },
  td: { border: "1px solid #ccc" },
};
