import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentComp from "./Component-Communication/ParentComp";
import StudentComp from "./Component-Communication/StudentComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <ParentComp /> */}
        <StudentComp />
      </div>
    </>
  );
}

export default App;
