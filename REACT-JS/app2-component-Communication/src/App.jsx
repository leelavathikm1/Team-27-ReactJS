import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ParentComp from "./Component-Communication/ParentComp";
import StudentComp from "./Component-Communication/StudentComp";
import UserClass from "./Component-Communication/UserClass";
import ToggleButton from "./Component-Communication/ToggleButton";
import ParentTwo from "./Component-Communication/ParentTwo";
import SiblingComp from "./Component-Communication/SiblingComp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <ParentComp /> */}
        {/* <StudentComp /> */}
        {/* <UserClass /> */}
        {/* <ToggleButton /> */}
        {/* <ParentTwo /> */}
        {/* <SiblingComp /> */}
      </div>
    </>
  );
}

export default App;
