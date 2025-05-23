import { useState } from "react";
import UserProfile from "./UserProfile";

function App() {
  return (
    <>
      <h1>Style With CSS module in React JS</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
        <UserProfile />
      </div>
    </>
  );
}
export default App;
