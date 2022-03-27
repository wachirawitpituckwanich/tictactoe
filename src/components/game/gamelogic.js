import React, { useContext,useState } from "react";
import Board from "../board";
import getWinner from "./getWinner";

const Game = ({context}) => {
  const scale = useContext(context);
  const [history, setGameHistory] = useState([
    Array(Math.pow(scale, 2)).fill(null),
  ]);
  const [step, setStep] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const leastWinningMove = (scale * 2 - 1)
  const dimension = Math.pow(scale,2);
  const winner = step >= leastWinningMove ? getWinner(history[step],scale): null;
  const xo = xIsNext ? "X" : "O";
  const checkDraw = step === dimension ? "Tied" : "Next Player: " + xo;
  

  const onCellClick = (i) => {
    const historyPoint = history.slice(0, step + 1);
    const current = historyPoint[step];
    const cell = [...current];
    if (winner || cell[i]) return;
    cell[i] = xo;
    setGameHistory([...historyPoint, cell]);
    setStep(historyPoint.length);
    setXisNext(!xIsNext);
  };
  const jumpTo = (step) => {
    setStep(step);
    setXisNext(step % 2 === 0);
  };
  
  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? `Go to move #${move}` : "Start";
      return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{destination}</button>
        </li>
      );
    });
  return scale == null ? null : (
    <>
      <Board cell={history[step]} onClick={onCellClick} scale={scale} />
      <div className="info-wrapper">
        <h3>History</h3>
        <div className="history">{renderMoves()}</div>
      </div>
      <h3>{winner ? "Winner: " + winner : checkDraw}</h3>
    </>
  );
};

export default Game;
