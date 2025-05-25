import { useFormStatus } from "react-dom";

function User() {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
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
        <input type="password" placeholder="Enter Password" />
        <br />
        <br />
        <button disabled={pending}>{pending ? "Submitting" : "Submit"}</button>
      </div>
    );
  }

  return (
    <>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </>
  );
}
export default User;
