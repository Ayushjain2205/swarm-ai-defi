import React, { useState, useEffect, useRef } from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";
import UseThinking from "../UI/UseThinking";

const Udemy = ({ addNextNode }) => {
  const [stateIndex, setStateIndex] = useState(0);
  const addNextNodeCalled = useRef(false);

  const states = [
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Searching for the right course for you" />
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
              https://www.udemy.com/course/artificial-intelligence-az/
            </p>
            <p className="text-[#25A7DC] text-center text-[9px] font-[500]">
              https://www.udemy.com/course/ai-masterclass/
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
    <UseBlock icon="https://builtinsf.com/sites/www.builtinsf.com/files/2022-08/logo.png">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Udemy;
