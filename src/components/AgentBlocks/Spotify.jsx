import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Spotify = () => {
  const options = [
    { label: "/action", value: "action" },
    { label: "/comedy", value: "comedy" },
    { label: "/drama", value: "drama" },
  ];

  return (
    <AgentBlock icon="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1200px-Spotify_icon.svg.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Spotify;
