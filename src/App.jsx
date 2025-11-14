// App.js
import { useState } from "react";
import GameBoard from "./Components/GameBoardSection/GameBoard";
import PlayersSection from "./Components/PlayersSection/PlayersSection";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleSelectSquare = () => {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
  };

  return (
    <div id="game-container">
      <PlayersSection isActive={activePlayer} />
      <GameBoard
        currentPlayer={activePlayer}
        onSelectSquare={handleSelectSquare}
        activePlayerSymbol={activePlayer}
      />
    </div>
  );
}

export default App;
