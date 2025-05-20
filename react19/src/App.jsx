import { useState } from "react";
import Skills from "./Skills";

function App() {
  const [gender, setGender] = useState("male");
  const [city, setCity] = useState("haldwani");
  return (
    <>
      <h1>Handle Radio and Dropdown</h1>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        onChange={(e) => setGender(e.target.value)}
      />
      <label htmlFor="female">Female</label>
      <br></br>
      <br></br>
      <h4>Selected Gender is : {gender}</h4>

      <br />
      <br />
      <h1>Select City</h1>
      <select onChange={(e) => setCity(e.target.value)} defaultValue="haldwani">
        <option value="noida">Noida</option>
        <option value="gurgaon">Gurgaon</option>
        <option value="delhi">Delhi</option>
        <option value="haldwani">Haldwani</option>
      </select>
      <h2>Selected City is :{city}</h2>
    </>
  );
}
export default App;
