import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";

const Youtube = () => {
  return (
    <UseBlock icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_4N37TIgWC_QLpspNwGddZH8DhzljeYMFnA&s">
      <Loader isRunning={false} />
      <UseInput question="which brand should I analyse?" />
    </UseBlock>
  );
};

export default Youtube;
