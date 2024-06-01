import React from "react";
import AgentBlock from "../Layout/AgentBlock";
import Select from "../Fields/Select";
import InputBox from "../Fields/InputBox";

const Image = () => {
  const options = [
    { label: "Stable Diffusion XL", value: "stable-diffusion-xl" },
    { label: "DALL-E", value: "dalle" },
    { label: "Playground v2", value: "playground2" },
  ];
  return (
    <AgentBlock label="Image" label_color="#87D4AB">
      <Select placeholder="Which Model" options={options} />
      <InputBox placeholder="no. of results" />
      <InputBox placeholder="negative prompt, if any" />
    </AgentBlock>
  );
};

export default Image;
