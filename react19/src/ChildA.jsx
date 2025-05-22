import { React, memo } from "react";

function ChildA() {
  console.log("child component");
  return <h1> {Learning()}</h1>;
}
export default memo(ChildA);
