import { useEffect, useState } from "react";

function Clock({ color }) {
  const [time, setTime] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "20px",
          color: color,
          border: "10px solid",
          width: "100px",
        }}
      >
        {time}
      </div>
    </>
  );
}
export default Clock;
