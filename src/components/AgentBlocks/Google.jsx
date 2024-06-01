import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Google = () => {
  const options = [
    { label: "/action", value: "action" },
    { label: "/comedy", value: "comedy" },
    { label: "/drama", value: "drama" },
  ];

  return (
    <AgentBlock icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Google;
