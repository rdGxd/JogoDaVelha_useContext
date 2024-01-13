interface ISquare {
  value: string;
  onSquareClick: () => void;
}

export const Square = ({ value, onSquareClick }: ISquare) => {
  return (
    <>
      <button
        className="SQUARE float-left h-9 w-9 border border-[#999] bg-white text-center text-2xl"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
};
