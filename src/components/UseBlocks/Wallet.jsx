import React, { useEffect } from "react";
import Loader from "../UI/Loader";
import UseBlock from "../Layout/UseBlock";

const Wallet = ({ addNextNode }) => {
  // Using useEffect to trigger the function after the component has mounted
  useEffect(() => {
    const timer = setTimeout(() => {
      addNextNode(); // Call the function after 5 seconds
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer); // Cleanup the timer when the component unmounts
  }, [addNextNode]); // Dependency array includes addNextNode to re-set the timer if the function changes

  return (
    <UseBlock label="Wallet" label_color="#87D4AB">
      <div className="flex flex-col justify-center items-center gap-[15px] w-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
          alt="MetaMask Fox Logo"
          className="h-[40px] w-[40px] rounded-[6px] animate-pulse"
        />
        <p className="text-[#25A7DC] text-[10px] font-[500]">
          0xA57D2DA0Dd6B82A2D48f7EC94cF5cAf15dBC750f
        </p>
        <p className="text-[#25A7DC] text-[14px] font-[500]">$345.90</p>
      </div>
    </UseBlock>
  );
};

export default Wallet;
