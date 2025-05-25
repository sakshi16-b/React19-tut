
import User from "./User";




function App() {
  const displayName = (name) => {
    alert(name);
  };
  const getUser = () => {
    alert("get User function called");
  };
  return (
    <>
      <h1>Call Parent Component Function from Child Component</h1>
      <User displayName={displayName} name="Sakshi" getUser={getUser} />
      <User displayName={displayName} name="Anil" getUser={getUser} />
      <User displayName={displayName} name="Rahul" getUser={getUser} />
      <User displayName={displayName} name="Nikhil" getUser={getUser}
    </>
  );
}

export default App;
