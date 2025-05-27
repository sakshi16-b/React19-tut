import { useState } from "react";

function App() {
  const [user, setUser] = useState(0);
  const [users, setUsers] = useState([]);

  const addUsers = () => {
    setUsers([...users, user]);
  };
  return (
    <>
      <h1>Derived State in React Js</h1>
      <h4>Total Users:{users.length}</h4>
      <h4>Last User:{users[users.length - 1]}</h4>
      <h4>Total Unique Users: {[...new Set(users)].length}</h4>
      <br />

      <input
        type="text"
        placeholder="Enter User"
        onChange={(e) => setUser(e.target.value)}
        value={user}
      />
      <br />
      <br />
      <button onClick={addUsers}>Add User</button>
      <br />
      <br />
      <br />
      {users.map((user, index) => {
        return <h4 key={index}>{user}</h4>;
      })}
    </>
  );
}
export default App;
