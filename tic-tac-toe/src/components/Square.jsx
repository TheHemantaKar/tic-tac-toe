export default function Square({ value, onSquareClicked }) {
  return (
    <button
      className="front-bold text-4xl m-1 h-20 w-20 border-2 rounded-md bg-sky-500 hover:bg-amber-300 hover:border-red-400  active:bg-amber-300 cursor-pointer"
      onClick={onSquareClicked}
    >
      {value}
    </button>
  );
}
