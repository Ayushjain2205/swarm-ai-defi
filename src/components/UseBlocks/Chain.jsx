import React, { useState, useEffect } from "react";
import UseBlock from "../Layout/UseBlock";
import SelectImage from "../Fields/SelectImage";
import Loader from "../UI/Loader";
import UseThinking from "../UI/UseThinking";

const Chain = ({ addNextNode }) => {
  const [selectedChain, setSelectedChain] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const chainOptions = [
    {
      label: "Ethereum",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
    },
    {
      label: "Polygon",
      icon: "https://cryptologos.cc/logos/polygon-matic-logo.png",
    },
    {
      label: "Linea",
      icon: "https://images.seeklogo.com/logo-png/52/1/linea-logo-png_seeklogo-527155.png",
    },
    {
      label: "Base",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLNvsFSvVHz_EkKpHzfTvTZKM-VaiqOpiorA&s",
    },
    {
      label: "zkSync",
      icon: "https://seeklogo.com/images/Z/zksync-logo-BD917280E5-seeklogo.com.png",
    },
  ];

  const handleSelectChain = (option) => {
    setSelectedChain(option.label);
    setIsLoading(true);
    setIsThinking(true);

    // Using setTimeout to simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
      setIsThinking(false);
      addNextNode(); // Trigger the next node in your workflow
    }, 5000); // Delay set to 5 seconds
  };

  return (
    <UseBlock label="Chain" label_color="#6E5B98">
      <div className="flex flex-col justify-center items-center gap-[15px] w-full">
        {isLoading && <Loader isRunning={isLoading} />}
        <SelectImage
          placeholder="Select Chain"
          options={chainOptions}
          onOptionSelected={handleSelectChain}
        />
        {isThinking && (
          <UseThinking question={`Setting network to ${selectedChain}`} />
        )}
      </div>
    </UseBlock>
  );
};

export default Chain;
