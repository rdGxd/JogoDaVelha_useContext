interface IPlayer {
  xIsNext: boolean;
}

export const Player = ({ xIsNext }: IPlayer) => {
  console.log("Ola");
  return (
    <h1 className="mb-10 flex content-center items-center justify-center p-5 text-4xl font-bold text-white">
      Player: {xIsNext ? "X" : "O"}
    </h1>
  );
};
