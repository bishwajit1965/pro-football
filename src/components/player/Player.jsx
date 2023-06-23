import React, { useState } from "react";
import SinglePlayer from "../singlePlayer/SinglePlayer";
import "./Player.css";

const Player = ({ cartPlayer }) => {
  let totalCost = 0;
  let quantity = 0;
  let name = "";
  let rate = 0;
  let photo;
  let index = 0;
  const nameList = [];

  for (const player of cartPlayer) {
    player.quantity = player.quantity || 1;
    rate = player.rate;
    totalCost += player.rate * player.quantity;
    quantity += player.quantity;
    name = player.name;
    photo = player.image;
    nameList.push(player);
    index++;
  }
  console.log(nameList);
  return (
    <div className="player-detail-container">
      <div className="flex justify-between mb-4">
        <p>Player :</p>
        <p className="place-items-end">{quantity}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p>Total cost: </p>
        <p>{totalCost}</p>
      </div>
      {nameList.map((player, index) => (
        <SinglePlayer key={index} player={player} index={index} />
      ))}
      <div className="bg-slate-600 w-full p-1 text-center mt-4 rounded-full">
        <a href="/" className="text-white block cursor-pointer">
          Reset
        </a>
      </div>
    </div>
  );
};

export default Player;
