import { useMemo, useState } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  //useMemo hook return memoised value whereas useCallback return memoised function.
  const multilpication = useMemo(
    function multiply() {
      console.log("****");
      return add * 10;
    },
    [add]
  );

  return (
    <>
      <h1>Learning useMemo Hook</h1>
      <button onClick={() => setAdd(add + 1)}>Add</button>
      {multilpication}
      <br />
      <br />
      {add}
      <br />
      <br />
      <button onClick={() => setMinus(minus - 1)}>Subtraction</button>
      <br />
      <br />
      <br />
      {minus}
    </>
  );
}
export default App;
