import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  function onClear() {
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <>
      <h1>Controller Component</h1>
      <br></br>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter user name"
      />
      <br></br>
      <br></br>

      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter user password"
      />

      <br></br>
      <br></br>

      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter user email"
      />
      <br></br>
      <br></br>

      <button>Submit</button>
      <button onClick={onClear}>Clear</button>
      <p>{name}</p>
      <p>{password}</p>
      <p>{email}</p>
    </>
  );
}
export default App;
