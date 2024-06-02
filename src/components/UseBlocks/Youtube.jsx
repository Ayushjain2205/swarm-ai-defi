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
          <Loader isRunning={true} />
          <UseThinking question="Searching for the right video for you" />
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
          <UseThinking question="Found good playlists for you" stopped />
          <div className="flex flex-row justify-center gap-[7px]">
            <img className="w-[105px]" src="/images/youtube1.png" alt="" />
            <img className="w-[105px]" src="/images/youtube2.png" alt="" />
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
    <UseBlock icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s">
      {states[stateIndex].component}
    </UseBlock>
  );
};

export default Youtube;
