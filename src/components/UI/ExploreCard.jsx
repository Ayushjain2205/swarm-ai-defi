import React from "react";
import { useRouter } from "next/router";

const ExploreCard = ({ id, title, icon, labels }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/use/${id}`);
  };

  return (
    <div
      className="flex flex-col gap-[15px] justify-end h-[230px] min-w-[393px] p-[30px] border border-black rounded-[4px] cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-row gap-[14px] items-center">
        <img src={icon.src} className="size-[30px] rounded" alt={icon.alt} />
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
