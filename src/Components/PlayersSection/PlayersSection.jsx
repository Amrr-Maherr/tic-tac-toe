import Player from "./Player";

function PlayersSection() {
    return (
      <main>
        <ol id="players">
          <Player PlayerName="Amr" PlayerSymbol="X" />
          <Player PlayerName="Nour" PlayerSymbol="O" />
        </ol>
      </main>
    );
}

export default PlayersSection
