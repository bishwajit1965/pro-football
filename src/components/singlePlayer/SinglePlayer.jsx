import React from "react";

const SinglePlayer = ({ player, index }) => {
  return (
    <div>
      <div className="flex justify-between place-items-center">
        {index + 1} {")"}
        <img src={player.image} className="w-12 h-12 rounded-full" alt="" />
        <p>{player.name}</p>
        <p>{player.rate}</p>
      </div>
    </div>
  );
};

export default SinglePlayer;
