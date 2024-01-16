import { useState } from "react";
import { Board } from "../Board";

export const History = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: []) => {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  };

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  };

  const moves = history.map((squares, move) => {
    console.log(squares);
    let description;
    if (move > 0) {
      description = `Go to move # ${move}`;
    } else {
      description = `Go to game start`;
    }
    return (
      <li
        key={move}
        className="mb-3 rounded border border-white p-2 hover:bg-red-500 sm:max-w-fit sm:p-3"
      >
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <>
      <div className="GAME content-center p-5 text-center ">
        <div className="GAME-BOARD flex justify-center">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="GAME-INFO mt-10 text-white  sm:flex sm:content-center sm:items-center sm:justify-center">
          <ol className="">{moves}</ol>
        </div>
      </div>
    </>
  );
};
