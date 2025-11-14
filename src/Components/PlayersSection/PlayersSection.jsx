import Player from "./Player";

function PlayersSection({isActive}) {
    return (
      <main>
        <ol id="players" className="highlight-player">
          <Player
            PlayerName="Player 1"
            PlayerSymbol="X"
            isActive={isActive === "X"}
          />
          <Player
            PlayerName="Player 2"
            PlayerSymbol="O"
            isActive={isActive === "O"}
          />
        </ol>
      </main>
    );
}

export default PlayersSection
