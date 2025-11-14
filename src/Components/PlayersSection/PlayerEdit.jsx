import { useState } from "react";

function PlayerEdit({ PlayerName, onSave, setPlayerName }) {
    const [NewName,setNewName] = useState("")
    const HandelPlayerInfo = () => {
        if (NewName === "") {
           const confirmSave = window.confirm(
             "Do you want to save without a name?"
            );
            if (!confirmSave) return;
            setNewName(PlayerName)
        } else {
            setPlayerName(NewName);
        }
        onSave()
    }
  return (
    <li>
      <span className="player">
        <input
          onChange={(e) => {
            setNewName(e.target.value);
          }}
          type="text"
          name=""
          id=""
          value={NewName}
          placeholder="Player Name"
        />
      </span>
      <button onClick={HandelPlayerInfo}>Save</button>
    </li>
  );
}

export default PlayerEdit
