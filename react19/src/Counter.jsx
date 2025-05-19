import { useEffect } from "react";

function Counter({ count, data }) {
  useEffect(() => {
    console.log("mounting phase only");
  }, []);

  useEffect(() => {
    console.log("update phase only");
  }, [data]);

  useEffect(() => {
    return () => {
      console.log("unmounting phase only");
    };
  }, []);

  return (
    <>
      <h1>Counter Value is {count}</h1>
      <h1>Data Value is {data}</h1>
    </>
  );
}
export default Counter;
