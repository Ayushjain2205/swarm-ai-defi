import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Linea = () => {
  const options = [
    { label: "Hunt tokens", value: "hunt" },
    { label: "Stake", value: "stake" },
    { label: "Swap", value: "swap" },
    { label: "Trade", value: "trade" },
    { label: "Burn", value: "burn" },
  ];

  return (
    <AgentBlock icon="https://images.seeklogo.com/logo-png/52/1/linea-logo-png_seeklogo-527155.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Linea;
