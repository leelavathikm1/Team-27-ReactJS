import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClickCounter from "../Component/ClickCounter";
import HoverCounter from "../Component/HoverCounter";
import RefsDemo from "../Component/RefsDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ClickCounter />
      <hr />
      <HoverCounter />
      {/* <RefsDemo /> */}
    </>
  );
}

export default App;
