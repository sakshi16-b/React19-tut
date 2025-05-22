import { useCallback, useState } from "react";
import ChildA from "./ChildA";

function App() {
  const [add, setAdd] = useState(0);
  //Learning Function Will rerender b/c this process referential equality it will new function has been created in rerendering
  //so to prevent this we use hook called useCallback
  const Learning = useCallback(() => {
    console.log("some operation");
  }, []);

  return (
    <>
      <h1>Learning useCallback</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      {add}
      <ChildA Learning={Learning} />
    </>
  );
}
export default App;
