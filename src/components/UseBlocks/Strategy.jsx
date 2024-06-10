import React, { useState } from "react";
import UseBlock from "../Layout/UseBlock";
import Loader from "../UI/Loader";
import UseThinking from "../UI/UseThinking";
import UseInput from "../UI/UseInput";

const Strategy = ({ addNextNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [finalMessage, setFinalMessage] = useState("");

  const handleContinue = () => {
    setIsLoading(true);
    setIsThinking(true);
    setShowInput(false); // Optionally hide the input immediately

    // Simulate a process
    setTimeout(() => {
      setIsLoading(false);
      setIsThinking(false);
      setFinalMessage("Strategy set up, let's go!");
      addNextNode(); // Proceed to the next step
    }, 5000); // Delay set to 5 seconds
  };

  return (
    <UseBlock label="Strategy" label_color="#87D4AB">
      <div className="flex flex-col justify-center items-center gap-[15px] w-full">
        {isLoading && <Loader isRunning={isLoading} />}
        {isThinking && <UseThinking question="Setting up strategy..." />}
        {showInput && (
          <UseInput
            question="Enter your stop loss value:"
            onContinue={handleContinue}
          />
        )}
        {!showInput && finalMessage && (
          <p className="text-[16px] font-[500] text-black">{finalMessage}</p>
        )}
      </div>
    </UseBlock>
  );
};

export default Strategy;
