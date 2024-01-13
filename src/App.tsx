import { Board } from "./components/Board";
import { GameContext } from "./context/GameContext";

export default function App() {
  return (
    <GameContext.Provider value={0}>
      <Board />
    </GameContext.Provider>
  );
}
