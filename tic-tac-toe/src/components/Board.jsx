import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  function clickHandler(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = `${"Winner:" + winner}`;
  } else {
    status = `Next Play: ${xIsNext ? "X" : "O"}`;
  }
  return (
    <>
      <div>
        {winner ? (
          <p className="bg-amber-200 text-red-700 p-1 text-4xl font-bold mb-2">
            {status}
          </p>
        ) : (
          <p className="bg-red-700 text-white p-1 text-4xl font-bold mb-2">
            {status}
          </p>
        )}
      </div>
      <div className="flex">
        <Square value={squares[0]} onSquareClicked={() => clickHandler(0)} />
        <Square value={squares[1]} onSquareClicked={() => clickHandler(1)} />
        <Square value={squares[2]} onSquareClicked={() => clickHandler(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClicked={() => clickHandler(3)} />
        <Square value={squares[4]} onSquareClicked={() => clickHandler(4)} />
        <Square value={squares[5]} onSquareClicked={() => clickHandler(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClicked={() => clickHandler(6)} />
        <Square value={squares[7]} onSquareClicked={() => clickHandler(7)} />
        <Square value={squares[8]} onSquareClicked={() => clickHandler(8)} />
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
