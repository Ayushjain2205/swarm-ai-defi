import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";

const Analyze = ({ addNextNode }) => {
  return (
    <UseBlock label="Analyze" label_color="#6E5B98">
      <Loader isRunning={false} />
      <UseInput question="which brand should I analyse?" />
      <button
        onClick={addNextNode}
        className="mt-4 bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add Next Node
      </button>
    </UseBlock>
  );
};

export default Analyze;
