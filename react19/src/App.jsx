
import { useRef } from "react";

import "./App.css";

function App() {
  const inputRef = useRef();
  const h1Ref = useRef();
  function handleSubmit() {
    console.log(inputRef);
    inputRef.current.style.color = "red";
    inputRef.current.placeholder = "enter password";
  }

  const toggleHandle = () => {
    if (inputRef.current.style.display != "none")
      inputRef.current.style.display = "none";
    else {
      inputRef.current.style.display = "inline";
    }
  };

  function handleAdd() {
  h1Ref.current.style.color="green"
  }
  return (
    <>
      <h1>useRef Hook(Uncontrolled Component)</h1>
      <input type="text" placeholder="Enter username" ref={inputRef} />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={toggleHandle}>Toggle</button>
      <h1 ref={h1Ref}>Heading Ref</h1>
      <button onClick={handleAdd}>Add</button>

    </>
  );
}
export default App;
