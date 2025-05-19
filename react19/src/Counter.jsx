import { useEffect } from "react";

function Counter({ count, data }) {
  const handleData = () => {
    console.log("call once");
  };

  const handleCounter = () => {
    console.log("call once");
  };
  useEffect(() => {
    handleCounter();
  }, []);
  useEffect(() => {
    handleData();
  }, [data]);

  return (
    <>
      <h1>Counter Value is {count}</h1>
      <h1>Data Value is {data}</h1>
    </>
  );
}
export default Counter;
