import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";
import InputBox from "../Fields/InputBox";
import Link from "../Fields/Link";

const Instagram = () => {
  const options = [
    { label: "/action", value: "action" },
    { label: "/comedy", value: "comedy" },
    { label: "/drama", value: "drama" },
  ];

  return (
    <AgentBlock icon="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png">
      <Select placeholder="Select an action" options={options} />
      <InputBox placeholder="no. of images" />
      <Link />
    </AgentBlock>
  );
};

export default Instagram;
