function User({ user }) {
  return (
    <>
      <div
        style={{
          color: "green",
          border: "1px solid green",
          margin: "10px",
          width: "200px",
        }}
      >
        <h3 key={user.id}>Name:{user.name}</h3>
        <h3 key={user.id}> Age:{user.age}</h3>
        <h3 key={user.id}>Email:{user.email}</h3>
      </div>
    </>
  );
}
export default User;
