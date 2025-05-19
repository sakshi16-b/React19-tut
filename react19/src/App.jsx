import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);
  useEffect(() => {
    counterFunction();
  }, [count]);

  useEffect(() => {
    console.log("call once");
  }, []);

  function counterFunction() {
    console.log("counterFunction", count);
  }
  function callOnce() {
    console.log("call once");
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={() => setData(data + 1)}>Data</button>
      <br></br>
      <br></br>
      Count: {count}
      <hr></hr>
      Data:{data}
    </>
  );
}

export default App;
