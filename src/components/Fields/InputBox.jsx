import React, { useState } from "react";

const InputBox = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="relative w-full max-w-xs">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        className="w-full border-[2px] border-[#EBEBEB] rounded-[4px] px-3 py-2 text-black text-opacity-30 text-[14px] focus:outline-none"
      />
    </div>
  );
};

export default InputBox;
