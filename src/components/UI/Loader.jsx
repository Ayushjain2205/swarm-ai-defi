import React from "react";

const Loader = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="55"
        viewBox="0 0 55 55"
        fill="none"
      >
        <circle cx="27.4102" cy="27.6748" r="26.3105" stroke="black" />
        <circle cx="24.0615" cy="24.3252" r="21.4541" stroke="black" />
        <circle cx="33.1738" cy="35.2822" r="17.1016" stroke="black" />
        <circle cx="29.6455" cy="29.5996" r="22.7842" stroke="black" />
        <circle cx="33.1729" cy="21.0176" r="17.3389" stroke="black" />
      </svg>
    </div>
  );
};

export default Loader;
