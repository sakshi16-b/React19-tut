function User({ displayName, name, getUser }) {
  return (
    <div>
      <h4>Child Component</h4>
      <button onClick={() => displayName(name)}>Display name</button>
      <button onClick={getUser}> Get User </button>
    </div>
  );
}
export default User;
