import { GameContext } from "../../context/GameContext";

interface IGame {
  level: number;
  children?: React.ReactNode;
}

export const Game = ({ level }: IGame) => {
  return (
    <>
      <GameContext.Provider value={level}>
        <div className="flex flex-wrap content-center items-center justify-center text-center">
          <h1 className="flex text-5xl font-bold">Jogo da velha</h1>

          <table className="mt-40  flex w-full  justify-center  text-4xl font-bold">
            <tbody className="">
              <tr className="">
                <td className="border-r-2 border-black p-10">1</td>
                <td className="border-r-2 border-black p-10">2</td>
                <td className="p-10">3</td>
              </tr>
              <tr className="border-y-2  border-black">
                <td className="border-r-2 border-black p-10">4</td>
                <td className="border-r-2 border-black p-10">5</td>
                <td className="p-10">6</td>
              </tr>
              <tr className="">
                <td className="border-r-2 border-black p-10">7</td>
                <td className="border-r-2 border-black p-10">8</td>
                <td className="p-10">9</td>
              </tr>
            </tbody>
          </table>
        </div>
      </GameContext.Provider>
    </>
  );
};
