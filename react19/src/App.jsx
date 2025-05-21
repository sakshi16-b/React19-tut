import { useState } from "react";
import Clock from "./Clock";

function App() {
  const [color, setColor] = useState("green");
  return (
    <>
      <h1>Default props in React JS</h1>
      <select onChange={(e) => setColor(e.target.value)}>
        <option value="pink">Pink</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
      </select>
      <br></br>
      <br></br>
      <br></br>
      <Clock color={color} />
    </>
  );
}
export default App;
