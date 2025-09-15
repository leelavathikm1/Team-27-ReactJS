import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifeCycleHooksOne from "../Components/LifeCycleHooksOne";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LifeCycleHooksOne />
    </>
  );
}

export default App;
