import { calculateWinner } from "../../utils/calculateWinner";
import { Player } from "../Player";
import { Square } from "../Square";
import { Winner } from "../Winner";

interface Board {
  xIsNext: boolean;
  squares: any[];
  onPlay: (nextSquares: any) => void;
}

export const Board = ({ xIsNext, squares, onPlay }: Board) => {
  const winner = calculateWinner(squares);

  const handleClick = (i: number) => {
    if (calculateWinner(squares) || squares[i]) return;
    const nextSquares = squares.slice();
    xIsNext ? (nextSquares[i] = "X") : (nextSquares[i] = "O");
    onPlay(nextSquares);
  };

  return (
    <div className="">
      {winner ? <Winner winner={winner} /> : <Player xIsNext={xIsNext} />}

      <div className="">
        <tbody className="table-fixed">
          <tr className="">
            <td className="">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
            </td>
            <td>
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
            </td>
            <td>
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </td>
          </tr>
          <tr>
            <td>
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
            </td>
            <td>
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
            </td>
            <td>
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </td>
          </tr>
          <tr>
            <td>
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
            </td>
            <td>
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
            </td>
            <td>
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </td>
          </tr>
        </tbody>
      </div>
    </div>
  );
};
