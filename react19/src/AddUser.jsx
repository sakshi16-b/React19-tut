import { useState } from "react";

function AddUser({ setUser }) {
  return (
    <div>
      <h4>Add User</h4>
      <input
        type="text"
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter username"
      />
    </div>
  );
}
export default AddUser;
