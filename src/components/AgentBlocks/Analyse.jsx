import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";

const Analyse = () => {
  const options1 = [
    { label: "User Prompt", value: "user-prompt" },
    { label: "Link", value: "link" },
    { label: "File", value: "file" },
  ];
  const options2 = [
    { label: "GPT-4o", value: "gpt4o" },
    { label: "GPT-4", value: "gpt4" },
    { label: "GPT-3.5", value: "gpt3.5" },
  ];
  return (
    <AgentBlock label="Analyse" label_color="#6E5B98">
      <Select placeholder="Select an action" options={options1} />
      <Select placeholder="Select model" options={options2} />
    </AgentBlock>
  );
};

export default Analyse;
