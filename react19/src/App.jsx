import { useState, useTransition } from "react";

function App() {
  const [pending, startTransition] = useTransition();
  const handleSubmit = () => {
    startTransition(async () => {
      await new Promise((res) => setTimeout(res, 5000));
    });
  };

  return (
    <>
      <h1>useTransition Hook in React JS 19</h1>
      {pending ? (
        <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3VxMXpjMW9mNmU5Mm13NmV5eWp1MWZmZTVrdTlybmJtNndzMjFjeiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KG4PMQ0jyimywxNt8i/giphy.gif" />
      ) : null}
      <button disabled={pending} onClick={handleSubmit}>
        Submit
      </button>
    </>
  );
}

export default App;
