import React from "react";
import "./style.css";
const Game = (props) => {
  return (
    <div id="game">
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <div className="row">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Game;
