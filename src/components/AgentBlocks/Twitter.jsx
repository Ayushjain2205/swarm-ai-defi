import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Twitter = () => {
  const options = [
    { label: "Watch", value: "watch" },
    { label: "Pump", value: "pump" },
    { label: "Dump", value: "dump" },
  ];

  return (
    <AgentBlock icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Twitter;
