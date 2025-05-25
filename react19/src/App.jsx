
import { useFormStatus } from "react-dom"
function App() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 5000));
    console.log("submitted");
  };
  function CustomerForm() {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
      <div>
        <input type="text" placeholder="Enter username" />
        <br />
        <br />
        <input type="text" placeholder="Enter Password" />
        <br />
        <br />
        <button disabled={pending}>
          {pending ? "Submitting.." : "Submit"}
        </button>
      </div>
    );
  }
 <h1>useFormStatus Hook in React JS 19</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>

    </>
  );
}

export default App;
