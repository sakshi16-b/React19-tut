
import { useRef } from "reac

function App() {
  const userRef = useRef();
  const passwordRef = useRef();

  const handleForm = (e) => {
    e.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user, password);
  };
  const handleFormRef = (e) => {
    e.preventDefault();
    const user = userRef.current.value;
    const password = passwordRef.current.value;
    console.log(user, password);
  };

  return (
    <
      <h1>Uncontrolled Component</h1>

      <form method="" action="post" onSubmit={handleForm}>
        <input type="text" id="user" placeholder="Enter Username" />
        <br />
        <br />
        <input type="text" id="password" placeholder="Enter Userpassword" />
        <br />
        <br />
        <button>Submit</button>
      </form>

      <hr />
      <h1>Uncontrolled Component using useRef</h1>
      <form method="" action="post" onSubmit={handleFormRef}>
        <input type="text" placeholder="Enter Username" ref={userRef} />
        <br />
        <br />
        <input type="text" placeholder="Enter Userpassword" ref={passwordRef} />
        <br />
        <br />
        <button>Submit with Ref</button>
      </form>

    </>
  );
}
export default App;
