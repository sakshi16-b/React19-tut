import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  return (
    <>
      <h1>Handle props side Effect with useEffect Hook </h1>
      <Counter count={count} data={data} />
      <button onClick={() => setCount(count + 1)}>Counter</button>
      <button onClick={() => setData(data + 1)}>Data</button>
    </>
  );
}

export default App;
