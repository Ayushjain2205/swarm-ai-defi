import React, { useState, useEffect } from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";
import UseThinking from "../UI/UseThinking";

const Analyze = ({ addNextNode }) => {
  const states = [
    {
      component: (
        <UseInput
          question="What should I analyse?"
          onContinue={() => setStateIndex(1)}
        />
      ),
    },
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Ohh, got it, Let me search across platforms.." />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Still searching, please wait a moment..." />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Almost there, wrapping up the search..." />
        </>
      ),
      duration: 5000,
    },
    // Add more states as needed
  ];

  const [stateIndex, setStateIndex] = useState(0);

  useEffect(() => {
    if (states[stateIndex].duration) {
      const timer = setTimeout(() => {
        if (stateIndex === states.length - 1) {
          addNextNode();
        } else {
          setStateIndex((prevIndex) => prevIndex + 1);
        }
      }, states[stateIndex].duration);

      return () => clearTimeout(timer);
    }
  }, [stateIndex, states, addNextNode]);

  return (
    <UseBlock label="Analyze" label_color="#6E5B98">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Analyze;
