import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Linkedin = () => {
  const options = [
    { label: "/action", value: "action" },
    { label: "/comedy", value: "comedy" },
    { label: "/drama", value: "drama" },
  ];

  return (
    <AgentBlock icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Linkedin;
