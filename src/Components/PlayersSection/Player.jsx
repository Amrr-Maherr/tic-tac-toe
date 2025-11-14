function Player({PlayerName,PlayerSymbol}) {
    return (
      <li>
        <span className="player-name">{PlayerName}</span>
        <span className="player-symbol">{PlayerSymbol}</span>
      </li>
    );
}

export default Player
