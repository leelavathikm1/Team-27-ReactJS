import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClassBaseComp from "./COMPONENTS/ClassBaseComp";
import PavanClassComp from "./COMPONENTS/PavanClassComp";
import {
  KumarClassComp,
  LeelaClassComp,
  VMRClassComp,
} from "./COMPONENTS/LeelaClassComp";
import Employee from "./COMPONENTS/Employee";
import User from "./COMPONENTS/User";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {/* <ClassBaseComp />
        <PavanClassComp /> */}
        {/* <LeelaClassComp />
        <KumarClassComp />
        <VMRClassComp /> */}
        {/* <Employee /> */}
        {/* <User /> */}
      </div>
    </>
  );
}

export default App;
