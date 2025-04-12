import { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePaly(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    console.log(nextHistory);
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  return (
    <>
      <h1 className="font-bold text-6xl text-center">Tic-Tac-Toe</h1>
      <div className="flex justify-center">
        <div className="border-2 m-7 p-5">
          <Board
            xIsNext={xIsNext}
            onPlay={handlePaly}
            squares={currentSquares}
          />
        </div>
        <div className="border-2 m-7 p-05">
          <h3 className="text-center font-bold">History</h3>
          <ul>
            {history.map((squares, move) => (
              <History move={move} jumpTo={jumpTo} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
