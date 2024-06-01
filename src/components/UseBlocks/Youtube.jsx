import React, { useState, useEffect, useRef } from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";
import UseThinking from "../UI/UseThinking";

const Youtube = ({ addNextNode }) => {
  const [stateIndex, setStateIndex] = useState(0);
  const addNextNodeCalled = useRef(false);

  const states = [
    {
      component: (
        <>
          <Loader isRunning={false} />
          <UseInput
            question="What should I analyse?"
            onContinue={() => setStateIndex(1)}
          />
        </>
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
          <UseThinking question="Found the right platforms!" />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <UseThinking question="Found the right platforms!" stopped />
        </>
      ),
      duration: 1000,
    },
    // Add more states as needed
  ];

  useEffect(() => {
    if (states[stateIndex].duration) {
      const timer = setTimeout(() => {
        if (stateIndex === states.length - 1) {
          if (!addNextNodeCalled.current) {
            addNextNode();
            addNextNodeCalled.current = true;
          }
        } else {
          setStateIndex((prevIndex) => prevIndex + 1);
        }
      }, states[stateIndex].duration);

      return () => clearTimeout(timer);
    }
  }, [stateIndex, states, addNextNode]);

  return (
    <UseBlock icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Youtube;
