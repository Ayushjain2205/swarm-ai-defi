import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Hunt = () => {
  const options1 = [
    { label: "Meme coin", value: "meme" },
    { label: "Defi", value: "defi" },
    { label: "Trending", value: "trending" },
    { label: "RWA", value: "RWA" },
    { label: "DePin", value: "depin" },
  ];

  return (
    <AgentBlock label="Hunt" label_color="#6E5B98">
      <Select placeholder="Token to hunt" options={options1} />
    </AgentBlock>
  );
};

export default Hunt;
