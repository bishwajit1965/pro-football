import React from "react";
import "./PlayersDetails.css";

const PlayersDetails = (props) => {
  const { name, rate, goals, image, description, phone } = props.player;

  const { handleAddPlayer } = props;

  return (
    <div className="card rounded-md shadow-lg relative">
      <img src={image} alt="" />
      <div className="mt-4 mb-12">
        <h2 className="font-bold">{name}</h2>
        <p>{description.slice(0, 35)} ...</p>
        <p>Phone: {phone}</p>
        <p>Rate: {rate}</p>
        <p>Scored: {goals} goals</p>
      </div>
      <div className="absolute bottom-0 left-0 rounded-b-md w-full">
        <button
          onClick={() => handleAddPlayer(props.player)}
          className="bg-amber-300 hover:bg-amber-500 rounded-b-md w-full"
        >
          Add to player
        </button>
      </div>
    </div>
  );
};

export default PlayersDetails;
