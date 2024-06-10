import React, { useState } from "react";
import UseBlock from "../Layout/UseBlock";
import SelectImage from "../Fields/SelectImage";
import Loader from "../UI/Loader";
import UseThinking from "../UI/UseThinking";

const Currency = ({ addNextNode }) => {
  const [selectedCurrency, setSelectedCurrency] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isThinking, setIsThinking] = useState(false);

  const cryptoOptions = [
    {
      label: "USDT",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      subText: "$23bn",
    },
    {
      label: "USDC",
      icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
      subText: "$1bn",
    },
    {
      label: "SHIB",
      icon: "https://cryptologos.cc/logos/thumbs/shiba-inu.png?v=032",
      subText: "$427mn",
    },
    {
      label: "UNI",
      icon: "https://cryptologos.cc/logos/thumbs/uniswap.png?v=032",
      subText: "$179mn",
    },
    {
      label: "DAI",
      icon: "https://cryptologos.cc/logos/thumbs/multi-collateral-dai.png?",
      subText: "$398mn",
    },
  ];

  const handleSelectCurrency = (option) => {
    setSelectedCurrency(option.label);
    setIsLoading(true);
    setIsThinking(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsThinking(false);
      addNextNode(); // Call the next node function after the delay
    }, 5000); // 5 seconds delay
  };

  return (
    <UseBlock icon="https://images.seeklogo.com/logo-png/52/1/linea-logo-png_seeklogo-527155.png">
      <div className="flex flex-col justify-center items-center gap-[15px] w-full">
        {isLoading && <Loader isRunning={isLoading} />}
        <SelectImage
          placeholder="Select Cryptocurrency"
          options={cryptoOptions}
          onOptionSelected={handleSelectCurrency}
        />
        {isThinking && (
          <UseThinking question={`Setting currency to ${selectedCurrency}`} />
        )}
      </div>
    </UseBlock>
  );
};

export default Currency;
