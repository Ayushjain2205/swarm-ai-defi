import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";

const Analyze = ({ addNextNode }) => {
  return (
    <UseBlock label="Analyze" label_color="#6E5B98">
      <Loader isRunning={false} />
      <UseInput question="which brand should I analyse?" />
    </UseBlock>
  );
};

export default Analyze;
