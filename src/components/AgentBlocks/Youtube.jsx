import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Youtube = () => {
  const options = [
    { label: "Scrape", value: "scrape" },
    { label: "Download", value: "download" },
    { label: "Upload", value: "upload" },
  ];

  return (
    <AgentBlock icon="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png">
      <Select placeholder="Select an action" options={options} />
    </AgentBlock>
  );
};

export default Youtube;
