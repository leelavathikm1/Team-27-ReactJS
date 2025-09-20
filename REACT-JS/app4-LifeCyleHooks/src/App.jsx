import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifeCycleHooksOne from "../Components/LifeCycleHooksOne";
import LifecycleHooksDemo from "../Components/LifecycleHooksDemo";
import LifecycleBDemo from "../Components/LifecycleBDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LifeCycleHooksOne /> */}
      {/* <LifecycleHooksDemo age={10} /> */}
      <LifecycleBDemo />
    </>
  );
}

export default App;
