import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-[30px] h-[78px] border-b-[2px] border-black">
      <div className="flex text-[24px] font-[700]">Enabling Agents</div>
      <div className="flex flex-row gap-[30px]">
        <div className="flex text-[16px] font-[500]">Explore</div>
        <div className="flex text-[16px] font-[500]">Create</div>
        <div className="flex text-[16px] font-[500]">My Agents</div>
      </div>
    </div>
  );
};

export default Navbar;
