import React from "react";

const UseThinking = ({ question, stopped = false }) => {
  return (
    <div>
      <p
        className={`text-[14px] font-[500] text-center ${
          stopped ? "" : "animate-pulse"
        }`}
      >
        {question}
      </p>
    </div>
  );
};

export default UseThinking;
