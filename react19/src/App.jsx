import { useState } from "react";
import College from "./College";

function App() {
  const collegeData = [
    {
      name: "GEU",
      city: "Dehradun",
      email: "geu@gmail.com",
      student: [
        {
          name: "Sakshi",
          city: "Haldwani",
          age: "24",
        },
        {
          name: "Bruce",
          city: "Delhi",
          age: "20",
        },
      ],
    },
    {
      name: "DIT",
      city: "Dehradun",
      email: "dit@gmail.com",
      student: [
        {
          name: "Peter",
          city: "Haldwani",
          age: "27",
        },
        {
          name: "Bruv",
          city: "Delhi",
          age: "29",
        },
      ],
    },
    {
      name: "UIT",
      city: "Dehradun",
      email: "uit@gmail.com",
      student: [
        {
          name: "Bruce",
          city: "Haldwani",
          age: "20",
        },
        {
          name: "Bruce",
          city: "Delhi",
          age: "20",
        },
      ],
    },
  ];

  return (
    <>
      <h1>Nested Looping With Component</h1>
      {collegeData.map((college, index) => (
        <div key={index}>
          <College college={college} />
        </div>
      ))}
    </>
  );
}
export default App;
