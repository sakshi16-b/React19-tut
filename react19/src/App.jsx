import { useState } from "react";
import Skills from "./Skills";
import User from "./User";

function App() {
  const userData = [
    {
      name: "Anil",
      age: "29",
      email: "anil@test.com",
      id: 1,
    },
    {
      name: "sam",
      age: "34",
      email: "sam@test.com",
      id: 2,
    },
    {
      name: "peter",
      age: "20",
      email: "peter@test.com",
      id: 3,
    },
    {
      name: "bruce",
      age: "50",
      email: "bruce@test.com",
      id: 4,
    },
  ];
  return (
    <>
      <h1>Loop in jsx using map function</h1>
      {userData.map((user, index) => (
        <div style={{ textAlign: "center" }}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}
export default App;
