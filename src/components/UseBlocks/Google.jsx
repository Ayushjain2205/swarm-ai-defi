import React, { useState, useEffect, useRef } from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";
import UseThinking from "../UI/UseThinking";

const Google = ({ addNextNode }) => {
  const [stateIndex, setStateIndex] = useState(0);
  const addNextNodeCalled = useRef(false);

  const states = [
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Finding good blogs, course sites" />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Looks like I got something!" />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <UseThinking question="Found some good courses" stopped />
          <div className="flex flex-col justify-center gap-[10px]">
            <p className="text-[#25A7DC] text-center text-[9px] font-[500]">
              https://ai.google/build
            </p>
            <p className="text-[#25A7DC] text-center text-[9px] font-[500]">
              https://www.datacamp.com/blog/how-to-learn-ai
            </p>
            <p className="text-[#25A7DC] text-center text-[9px] font-[500]">
              https://cloud.google.com/learn/training/machinelearning-ai
            </p>
          </div>
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
    <UseBlock icon="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Google;
