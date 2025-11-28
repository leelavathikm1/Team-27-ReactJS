import { createSlice } from "@reduxjs/toolkit";

const intialUsers = {
  usersArray: [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul.sharma@example.com",
      age: 28,
      role: "Developer",
    },
    {
      id: 2,
      name: "Priya Menon",
      email: "priya.menon@example.com",
      age: 25,
      role: "UI/UX Designer",
    },
    {
      id: 3,
      name: "Arun Kumar",
      email: "arun.kumar@example.com",
      age: 32,
      role: "Project Manager",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      email: "sneha.reddy@example.com",
      age: 27,
      role: "QA Engineer",
    },
    {
      id: 5,
      name: "Vikram Nair",
      email: "vikram.nair@example.com",
      age: 30,
      role: "DevOps Engineer",
    },
  ],
};
export const userSlice = createSlice({
  name: "users",
  initialState: intialUsers,
  //   reducers: {},
});

export default userSlice.reducer;
