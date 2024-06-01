import React from "react";

const ExploreCard = ({ id, title, icons, labels, onClick }) => {
  return (
    <div
      className="flex flex-col gap-[15px] justify-end h-[230px] min-w-[393px] p-[30px] border border-black rounded-[4px] cursor-pointer"
      onClick={onClick}
    >
      <div className="flex flex-row gap-[14px] items-center">
        <div className="flex flex-row gap-[14px]">
          {icons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              className="size-[30px] rounded"
              alt={icon.alt}
            />
          ))}
        </div>
        {labels.map((label, index) => (
          <div
            key={index}
            className="h-[24px] w-[72px] flex items-center justify-center font-[500] text-[14px] text-white rounded-[8px]"
            style={{ backgroundColor: label.color }}
          >
            {label.name}
          </div>
        ))}
      </div>
      <p className="text-[24px] font-[500] leading-[30px]">{title}</p>
    </div>
  );
};

export default ExploreCard;
