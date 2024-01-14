interface IWinner {
  winner: never[];
}

export const Winner = ({ winner }: IWinner) => {
  if (!winner) return;
  return <p>{winner} ganhou!!</p>;
};
