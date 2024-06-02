import React from "react";

const UseInput = ({ question, onContinue }) => {
  return (
    <div className="w-full">
      {question && (
        <label className="block text-[14px] text-black mb-4">{question}</label>
      )}
      <input
        type="text"
        placeholder="enter text"
        className="w-full border-[2px] border-[#EBEBEB] rounded-[4px] px-3 py-2 mb-4 text-black text-[14px] focus:outline-none"
      />
      <button
        className="w-full h-[32px] text-white text-[12px] font-[500] bg-black rounded-[5px]"
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
};

export default UseInput;
