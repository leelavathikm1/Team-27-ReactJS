import { useState } from "react";
import "./App.css";
import { Studentsform } from "./Components/Studentsform";
import { StudentsTable } from "./Components/StudentsTable";

function App() {
  const [student, setStudent] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  const [studentsArray, setStudentsArray] = useState([
    { fName: "Leela", lName: "KM", email: "leela@gmail.com" },
    { fName: "Leela", lName: "KM", email: "leela@gmail.com" },
    { fName: "Leela", lName: "KM", email: "leela@gmail.com" },
  ]);

  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    console.log(e);
    const newStudent = { ...student };
    newStudent[e.target.name] = e.target.value;
    setStudent(newStudent);
  };

  const handleSubmit = () => {
    const newStudentsArray = [...studentsArray];
    newStudentsArray.push(student);
    setStudentsArray(newStudentsArray);
    clearForm();
  };

  const clearForm = () => {
    setStudent({
      fName: "",
      lName: "",
      email: "",
    });
  };

  const handleDeleteStudent = (i) => {
    const newStudents = [...studentsArray];
    newStudents.splice(i, 1);
    setStudentsArray(newStudents);
  };

  const handleEditStudent = (i) => {
    setStudent(studentsArray[i]);
    setEditIndex(i);
  };

  const handleUpdateStudent = () => {
    const newStudents = [...studentsArray];
    newStudents[editIndex] = student;
    setStudentsArray(newStudents);
    clearForm();
    setEditIndex(null);
  };

  return (
    <>
      <Studentsform
        student={student}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleUpdateStudent={handleUpdateStudent}
        editIndex={editIndex}
      />
      <hr />
      <StudentsTable
        studentsArray={studentsArray}
        handleDeleteStudent={handleDeleteStudent}
        handleEditStudent={handleEditStudent}
      />
    </>
  );
}

export default App;
