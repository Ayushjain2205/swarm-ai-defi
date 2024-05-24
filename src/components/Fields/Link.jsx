import React, { useState } from "react";

const Link = () => {
  const [links, setLinks] = useState([""]);

  const addLink = () => {
    setLinks([...links, ""]);
  };

  return (
    <div className="w-full max-w-xs">
      {links.map((link, index) => (
        <div
          key={index}
          className="relative flex items-center border-[2px] border-[#EBEBEB] rounded-[4px] px-3 py-2 mb-[12px]"
        >
          <input
            type="text"
            value={link}
            placeholder="/link"
            className="w-full text-black text-opacity-30 text-[14px] focus:outline-none"
            onChange={(e) => {
              const newLinks = [...links];
              newLinks[index] = e.target.value;
              setLinks(newLinks);
            }}
          />
          <button
            type="button"
            onClick={addLink}
            className="absolute right-2 w-[20px] h-[20px] flex items-center justify-center rounded-full text-[#C3C3C3] hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="21"
              viewBox="0 0 22 21"
              fill="none"
            >
              <circle cx="10.9568" cy="10.5251" r="9.77515" stroke="#D9D9D9" />
              <path
                d="M10.7559 5.55078L10.7559 15.4987"
                stroke="#D9D9D9"
                stroke-width="0.5"
                stroke-linecap="round"
              />
              <path
                d="M16.0605 10.1377L5.85352 10.1377"
                stroke="#D9D9D9"
                stroke-width="0.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Link;
