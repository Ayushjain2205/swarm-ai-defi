import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Twitter = () => {
  const options = [
    { label: "Scrape", value: "scrape" },
    { label: "Tweet", value: "tweet" },
  ];

  return (
    <AgentBlock icon="https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Twitter;
