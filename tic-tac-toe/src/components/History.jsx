export default function History({ move, jumpTo }) {
  let description;
  if (move > 0) {
    description = `Go to the move # ${move}`;
  } else {
    description = `Go to  Start the Game`;
  }
  return (
    <li key={move}>
      <button
        className="bg-gray-300 m-1 p-1 cursor-pointer"
        onClick={() => jumpTo(move)}
      >
        {description}
      </button>
    </li>
  );
}
