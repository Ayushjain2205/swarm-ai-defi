import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";
import InputBox from "../Fields/InputBox";

const Image = () => {
  const options = [
    { label: "/action", value: "action" },
    { label: "/comedy", value: "comedy" },
    { label: "/drama", value: "drama" },
  ];
  return (
    <AgentBlock label="Image" label_color="#87D4AB">
      <Select placeholder="Where" options={options} />
      <InputBox placeholder="no. of results" />
      <Select placeholder="Format" options={options} />
    </AgentBlock>
  );
};

export default Image;
