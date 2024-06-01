import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";
import InputBox from "../Fields/InputBox";

const Report = () => {
  const options = [
    { label: "PDF", value: "pdf" },
    { label: "HTML", value: "html" },
    { label: "DOC", value: "doc" },
  ];
  return (
    <AgentBlock label="Report" label_color="#87D4AB">
      <InputBox placeholder="no. of pages" />
      <Select placeholder="format" options={options} />
    </AgentBlock>
  );
};

export default Report;
