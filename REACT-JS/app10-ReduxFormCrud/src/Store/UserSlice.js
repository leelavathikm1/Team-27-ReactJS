import { createSlice } from "@reduxjs/toolkit";
const initialUsers = {
  usersArry: [
    {
      id: 1,
      name: "Arun Kumar",
      email: "arun.kumar@example.com",
      role: "admin",
      age: 32,
      city: "Bangalore",
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@example.com",
      role: "user",
      age: 27,
      city: "Hyderabad",
    },
    {
      id: 3,
      name: "Rohit Reddy",
      email: "rohit.reddy@example.com",
      role: "editor",
      age: 29,
      city: "Chennai",
    },
    {
      id: 4,
      name: "Lakshmi Devi",
      email: "lakshmi.devi@example.com",
      role: "user",
      age: 24,
      city: "Vijayawada",
    },
    {
      id: 5,
      name: "Manoj Varma",
      email: "manoj.varma@example.com",
      role: "admin",
      age: 34,
      city: "Mumbai",
    },
  ],
};
export const userSlice = createSlice({
  name: "users",
  initialState: initialUsers,
  //   reducers: {},
});

export default userSlice.reducer;
