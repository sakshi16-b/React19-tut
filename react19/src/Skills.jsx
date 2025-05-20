import { useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const handleSkills = (e) => {
    console.log(e.target.checked, e.target.value);
    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills([...skills.filter((item) => item != e.target.value)]);
    }
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input type="checkbox" onChange={handleSkills} value="php" id="php" />
        <label htmlFor="php">PHP</label>
        <br></br>
        <input type="checkbox" onChange={handleSkills} value="html" id="html" />
        <label htmlFor="html">HTML</label>
        <br></br>
        <input type="checkbox" onChange={handleSkills} value="css" id="css" />
        <label htmlFor="css">CSS</label>

        <br></br>
        <input
          type="checkbox"
          onChange={handleSkills}
          value="react"
          id="react"
        />
        <label htmlFor="react">React</label>
        <br></br>
        <div>
          <h4> {skills}</h4>
        </div>
        <br />
      </div>
    </>
  );
}
export default Skills;
