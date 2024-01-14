interface IPlayer {
  xIsNext: boolean;
}

export const Player = ({ xIsNext }: IPlayer) => {
  console.log("Ola");
  return <h1>Player: {xIsNext ? "X" : "O"}</h1>;
};
