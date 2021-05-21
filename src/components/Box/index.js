import React, { useState } from "react";
import "./style.css";

const Box = (props) => {
  const [text, setText] = useState("");

  const playerMove = () => {
    if (text === "") {
      setText(props.currentState);
      props.changeTurn(props.row, props.column);
    }
  };

  return (
    <div className="box" onClick={playerMove}>
      {text}
    </div>
  );
};

export default Box;
