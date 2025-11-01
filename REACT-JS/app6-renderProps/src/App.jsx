import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import User from "./Components/User";
import ClickCounter from "./Components/ClickCounter";
import HoverCounter from "./Components/HoverCounter";
import HandleCounter from "./Components/HandleCounter";
import ShowMessage from "./Components/ShowMessage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <User /> */}
      {/* <ClickCounter />
      <hr />
      <HoverCounter /> */}
      {/* <HandleCounter
        hello={"Hello From HandleCounter"}
        sayHello={() => {
          return <ShowMessage msg="Hello From Function" />;
        }}
      /> */}

      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <ClickCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
      <HandleCounter
        render={(count, incrementCount, decrementCount, resetCount) => (
          <HoverCounter
            count={count}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            resetCount={resetCount}
          />
        )}
      />
    </>
  );
}

export default App;
