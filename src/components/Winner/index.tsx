interface IWinner {
  winner: never[];
}

export const Winner = ({ winner }: IWinner) => {
  if (!winner) return;
  return (
    <p className="mb-10 flex justify-center bg-green-700 p-5 text-4xl font-bold text-white rounded">
      {winner} ganhou!!
    </p>
  );
};
