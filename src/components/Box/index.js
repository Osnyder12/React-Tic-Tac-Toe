import React, { useState } from "react";

const Box = () => {
  const [text, setText] = useState("");

  const playerMove = () => {
    if (text === "") {
      setText("X");
    }
  };

  return (
    <div className="box" onClick={playerMove}>
      {text}
    </div>
  );
};

export default Box;
