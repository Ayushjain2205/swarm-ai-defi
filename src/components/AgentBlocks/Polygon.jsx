import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Polygon = () => {
  const options = [
    { label: "Hunt tokens", value: "hunt" },
    { label: "Stake", value: "stake" },
    { label: "Swap", value: "swap" },
    { label: "Trade", value: "trade" },
    { label: "Burn", value: "burn" },
  ];

  return (
    <AgentBlock icon="https://cryptologos.cc/logos/polygon-matic-logo.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Polygon;
