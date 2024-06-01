import React, { useState } from "react";

const Select = ({ placeholder, options }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full max-w-xs">
      <div
        className="flex items-center justify-between border-[2px] border-[#EBEBEB] rounded-[4px] px-3 py-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-black text-[14px] ${
            !selectedOption ? "text-opacity-30" : ""
          }`}
        >
          {selectedOption || placeholder}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.525 5.10881C14.5715 5.15525 14.6085 5.21043 14.6337 5.27117C14.6589 5.33192 14.6719 5.39704 14.6719 5.46281C14.6719 5.52857 14.6589 5.5937 14.6337 5.65444C14.6085 5.71519 14.5715 5.77036 14.525 5.81681L8.52498 11.8168C8.47854 11.8634 8.42336 11.9003 8.36261 11.9255C8.30187 11.9507 8.23675 11.9637 8.17098 11.9637C8.10521 11.9637 8.04009 11.9507 7.97935 11.9255C7.9186 11.9003 7.86343 11.8634 7.81698 11.8168L1.81698 5.81681C1.72309 5.72292 1.67035 5.59558 1.67035 5.46281C1.67035 5.33003 1.72309 5.20269 1.81698 5.10881C1.91087 5.01492 2.03821 4.96218 2.17098 4.96218C2.30376 4.96218 2.4311 5.01492 2.52498 5.10881L8.17098 10.7558L13.817 5.10881C13.8634 5.06224 13.9186 5.0253 13.9793 5.00009C14.0401 4.97489 14.1052 4.96191 14.171 4.96191C14.2367 4.96191 14.3019 4.97489 14.3626 5.00009C14.4234 5.0253 14.4785 5.06224 14.525 5.10881Z"
            fill="#C3C3C3"
            stroke="#C3C3C3"
          />
        </svg>
      </div>
      {isOpen && (
        <ul className="absolute w-full mt-[10px] border-[2px] border-[#EBEBEB] bg-white rounded-[4px] z-20">
          {options.map((option, index) => (
            <li
              key={index}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Select;
