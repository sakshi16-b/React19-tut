import { useState, useEffect } from "react";
import styled from "styled-components";

import "./App.css";

function App() {
  //1 method to write styled component
  // const Heading = styled.h1`
  //   color: red;
  //   border: 1px solid red;
  //   border-radius: 5px;
  //   margin: 20px;
  //   padding: 20px;
  //  `;

  //2 method to write styled Component

  const Heading = styled.h1({
    color: "red",
    border: "1px solid green",
    borderRadius: "5px",
    margin: "20px",
    padding: "20px",
  });

  const Btn = styled.button`
    color: red;
    background-color: #ddd;
    border: 1px solid green;
    margin: 20px;
  `;
  const SignupBtn = styled.button({
    color: "red",
    backgroundColor: "grey",
  });
  const Para = styled.p({
    color: "red"
})
  return (
    <>
      <h1>Styled Components</h1>
      <Heading>Hello Heading</Heading>
      <Btn>Login</Btn>
      <SignupBtn>SignUp</SignupBtn>
      <Para>Hello I am Paragraph</Para>
    </>
  );
}
export default App;
