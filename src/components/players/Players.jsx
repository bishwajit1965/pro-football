import { useEffect, useState } from "react";
import Player from "../player/Player";
import PlayersDetails from "../playersDetails/PlayersDetails";
import "./Players.css";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [cartPlayer, setCartPlayer] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAddPlayer = (player) => {
    let newPlayer = [];
    newPlayer = [...cartPlayer, player];
    setCartPlayer(newPlayer);
  };
  return (
    <div className="player-wrapper-container mt-10">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {players.map((player) => (
          <PlayersDetails
            key={player.id}
            player={player}
            handleAddPlayer={handleAddPlayer}
          />
        ))}
      </div>

      <div className="bg-amber-300 rounded-lg p-2">
        <Player cartPlayer={cartPlayer} />
      </div>
    </div>
  );
};

export default Players;
