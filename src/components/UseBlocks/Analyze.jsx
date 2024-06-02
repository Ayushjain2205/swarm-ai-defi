import React, { useState, useEffect, useRef } from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";
import UseThinking from "../UI/UseThinking";

const Analyze = ({ addNextNode }) => {
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
          <UseThinking question="Ohh, got it, Let me find platforms.." />
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <Loader isRunning={true} />
          <UseThinking question="Found the right platforms!" />
          <div className="flex flex-row w-full items-center justify-center gap-[10px]">
            <img
              className="h-[28px]"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              alt=""
            />
            <img
              className="h-[28px]"
              src="https://builtinsf.com/sites/www.builtinsf.com/files/2022-08/logo.png"
              alt=""
            />
            <img
              className="h-[28px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
              alt=""
            />
          </div>
        </>
      ),
      duration: 5000,
    },
    {
      component: (
        <>
          <UseThinking question="Let me search the platforms..." stopped />
          <div className="flex flex-row w-full items-center justify-center gap-[10px]">
            <img
              className="h-[28px]"
              src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
              alt=""
            />
            <img
              className="h-[28px]"
              src="https://builtinsf.com/sites/www.builtinsf.com/files/2022-08/logo.png"
              alt=""
            />
            <img
              className="h-[28px]"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png"
              alt=""
            />
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
    <UseBlock label="Analyze" label_color="#6E5B98">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Analyze;
