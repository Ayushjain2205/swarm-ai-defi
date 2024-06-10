import React from "react";
import Loader from "../UI/Loader";
import UseBlock from "../Layout/UseBlock";
import SelectImage from "../Fields/SelectImage";
import Select from "../Fields/Select";

const Currency = () => {
  const cryptoOptions = [
    {
      label: "USDC",
      icon: "https://cryptologos.cc/logos/usd-coin-usdc-logo.png",
      subText: "$37bn",
    },
    {
      label: "ETH",
      icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
      subText: "$37bn",
    },
    {
      label: "BNB",
      icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
      subText: "$37bn",
    },
    {
      label: "USDT",
      icon: "https://cryptologos.cc/logos/tether-usdt-logo.png",
      subText: "$37bn",
    },
    {
      label: "STETH",
      icon: "https://cryptologos.cc/logos/staked-ether-steth-logo.png",
      subText: "$37bn",
    },
  ];

  return (
    <UseBlock icon="https://images.seeklogo.com/logo-png/52/1/linea-logo-png_seeklogo-527155.png">
      <div className="flex flex-col justify-center items-center gap-[15px] w-full">
        <SelectImage
          placeholder="Select Cryptocurrency"
          options={cryptoOptions}
        />
        <Select placeholder="Test" options={cryptoOptions} />
      </div>
    </UseBlock>
  );
};

export default Currency;
