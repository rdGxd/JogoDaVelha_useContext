import { GameContext } from "../../context/GameContext";


export const Section = ({ level, children }: ISection) => {
  return (
    <GameContext.Provider value={level}>
      <section className="section bg-red-500">{children}</section>
    </GameContext.Provider>
  );
};
