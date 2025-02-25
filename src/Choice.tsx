import { useState } from "react";
import "./Choice.css";

export const Choice = () => {
  const [color, setColor] = useState("white");

  return (
    <>
      <button className="btnRed" onClick={() => setColor("red")}>
        RED
      </button>
      <button className="btnYellow" onClick={() => setColor("yellow")}>
        YELLOW
      </button>
      <button className="btnBlue" onClick={() => setColor("blue")}>
        BLUE
      </button>
      <span className="answer" style={{ color: color }}>
        Your favorite color is {color}!
      </span>
    </>
  );
};
