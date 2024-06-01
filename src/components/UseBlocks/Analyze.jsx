import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";
import UseThinking from "../UI/UseThinking";

const Analyze = ({ addNextNode }) => {
  return (
    <UseBlock label="Analyze" label_color="#6E5B98">
      <Loader isRunning={false} />
      <UseInput question="What should I analyse?" />
      <UseThinking question="ohh, got it, Let me search across platforms.." />
    </UseBlock>
  );
};

export default Analyze;
