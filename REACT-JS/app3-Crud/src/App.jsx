import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserTable from "./Components/UserTable";
import UserCrud from "./Components/UserCrud";
import UserCrudValidation from "./Components/UserCrudValidation";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <UserTable /> */}
      {/* <UserCrud /> */}
      <UserCrudValidation />
    </div>
  );
}

export default App;
