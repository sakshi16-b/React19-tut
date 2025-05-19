import { useState } from "react";

function App() {
  const [cardStyle, setCardStyle] = useState({
    border: "1px solid #cccccc#3b",
    width: "200px",
    boxShadow: "1px 2px 3px 1px #cccccc57",
    margin: "10px",
  });
  const [textColor, setTextColor] = useState("green");
  const [grid, setGrid] = useState(true);

  const updateTheme = (bgColor, textColor) => {
    console.log(bgColor);
    setCardStyle({ ...cardStyle, backgroundColor: bgColor });
    setTextColor(textColor);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Inline Style in React</h1>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>
      <button onClick={() => updateTheme("#aaa", "red")}>Grey Theme</button>
      <button onClick={() => setGrid(!grid)}>Toggle Grid</button>

      <div style={{ display: grid ? "flex" : "block", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
        <div style={cardStyle}>
          <img
            style={{ width: "200px" }}
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="img"
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Sakshi Bisht</h4>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
