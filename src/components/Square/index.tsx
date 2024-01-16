interface ISquare {
  value: string;
  onSquareClick: () => void;
}

export const Square = ({ value, onSquareClick }: ISquare) => {
  return (
    <>
      <button
        className="SQUARE float-left flex h-16 w-16 items-center justify-center border border-[#999] bg-white p-10 text-center text-2xl"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
};
