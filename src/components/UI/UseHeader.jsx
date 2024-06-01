import React from "react";

const UseHeader = ({ title, icons, labels }) => {
  return (
    <div className="absolute top-[10px] left-0 w-full z-50">
      <p className="text-[32px] font-[500] text-center">{title}</p>
      <div className="flex flex-row w-full items-center mb-[20px] justify-center">
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="60"
          viewBox="0 0 84 60"
          fill="none"
        >
          <path
            d="M0.341797 28.985H6.9315C12.4543 28.985 16.9315 24.5078 16.9315 18.985V10.7422C16.9315 5.21935 21.4087 0.742188 26.9315 0.742188H44.7207C50.2436 0.742188 54.7207 5.21934 54.7207 10.7422V50.5301C54.7207 54.9841 58.3314 58.5949 62.7855 58.5949V58.5949C67.2395 58.5949 70.8502 54.9841 70.8502 50.5301V38.9849C70.8502 33.4621 75.3274 28.985 80.8502 28.985H83.293"
            stroke="black"
            strokeOpacity="0.14"
          />
        </svg>
        {labels.map((label, index) => (
          <React.Fragment key={index}>
            <div
              className="h-[24px] w-[72px] flex items-center justify-center font-[500] text-[14px] text-white rounded-[8px]"
              style={{ backgroundColor: label.color }}
            >
              {label.name}
            </div>
            {index < labels.length - 1 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="84"
                height="32"
                viewBox="0 0 84 32"
                fill="none"
              >
                <path
                  d="M0.292969 10.5448H4.18692C6.88899 10.5448 9.07945 8.35437 9.07945 5.6523V5.6523C9.07945 2.95023 11.2699 0.759766 13.972 0.759766H14.2492C17.1044 0.759766 19.419 3.07436 19.419 5.92955V21.1465C19.419 26.6693 23.8962 31.1465 29.419 31.1465H56.0279C61.2189 31.1465 65.4271 26.9383 65.4271 21.7472V21.7472C65.4271 16.5562 69.6353 12.348 74.8264 12.348H83.2617"
                  stroke="#DBDBDB"
                />
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default UseHeader;
