import { useState } from "react";
import PlayerEdit from "./PlayerEdit";

function Player({ PlayerName, PlayerSymbol,isActive }) {
    const [isEdit, setIsEdit] = useState(false);
    const [Name, SetName] = useState(PlayerName);
  return isEdit ? (
    <PlayerEdit
      PlayerName={Name}
      setPlayerName={SetName}
          onSave={() => {
          // update the prev state
        setIsEdit((prev)=>!prev);
      }}
    />
  ) : (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        <span className="player-name">{Name}</span>
        <span className="player-symbol">{PlayerSymbol}</span>
        <button onClick={() => setIsEdit(true)}>Edit</button>
      </span>
    </li>
  );
}

export default Player;
