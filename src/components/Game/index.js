import React, { useState } from "react";
import Box from "../Box/";
import "./style.css";

const board = [[], [], []];

const Game = () => {
  const [turn, setTurn] = useState("X");
  const [winningText, setWinningText] = useState("");

  function changeTurn(row, column) {
    board[row][column] = turn;
    setTurn((turn) => (turn === "X" ? "O" : "X"));

    const winner = checkForWin();
    if (!winner) {
    } else {
      setWinningText(winner + " won!");
    }
  }

  const checkForWin = () => {
    for (let i = 0; i < board.length; i++) {
      const row = board[i];
      if (row[0] === row[1] && row[1] === row[2] && row[0]) {
        return true;
      }
    }

    for (let i = 0; i < board.length; i++) {
      const el1 = board[0][i];
      const el2 = board[1][i];
      const el3 = board[2][i];
      if (el1 === el2 && el2 === el3 && el1) {
        return el1;
      }
    }
    const d1 = board[0][0];
    const d2 = board[1][1];
    const d3 = board[2][2];

    if (d1 === d2 && d2 === d3 && d1) {
      return d1;
    }

    const p1 = board[0][2];
    const p2 = board[1][1];
    const p3 = board[2][0];
    if (p1 === p2 && p2 === p3 && p1) {
      return p1;
    }
    return false;
  };

  return (
    <div id="game">
      <div className="winnning-text">{winningText}</div>
      <div className="row">
        <Box row={0} column={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} column={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={0} column={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={1} column={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} column={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={1} column={2} currentState={turn} changeTurn={changeTurn} />
      </div>
      <div className="row">
        <Box row={2} column={0} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} column={1} currentState={turn} changeTurn={changeTurn} />
        <Box row={2} column={2} currentState={turn} changeTurn={changeTurn} />
      </div>
    </div>
  );
};

export default Game;
