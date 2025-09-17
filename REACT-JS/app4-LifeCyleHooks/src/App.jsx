import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifeCycleHooksOne from "../Components/LifeCycleHooksOne";
import LifecycleHooksDemo from "../Components/LifecycleHooksDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <LifeCycleHooksOne /> */}
      <LifecycleHooksDemo age={10} />
    </>
  );
}

export default App;
