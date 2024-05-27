import React from "react";

const ExploreCard = () => {
  return (
    <div className="flex flex-col gap-[15px] justify-end h-[230px] min-w-[393px] p-[30px] border border-black rounded-[4px]">
      <div className="flex flex-row gap-[14px] items-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png"
          className="size-[30px] rounded"
          alt=""
        />
        <div
          className="h-[24px] w-[72px] flex items-center justify-center font-[500] text-[14px] text-white rounded-[8px]"
          style={{ backgroundColor: "#6E5B9875" }}
        >
          Analyse
        </div>
        <div
          className="h-[24px] w-[72px] flex items-center justify-center font-[500] text-[14px] text-white rounded-[8px]"
          style={{ backgroundColor: "#0FA95880" }}
        >
          Image
        </div>
      </div>
      <p className="text-[24px] font-[500] leading-[30px]">Campaign Analysis</p>
    </div>
  );
};

export default ExploreCard;
