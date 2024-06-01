import React from "react";
import Loader from "../UI/Loader";
import UseInput from "../UI/UseInput";
import UseBlock from "../Layout/UseBlock";

const Udemy = () => {
  return (
    <UseBlock icon="https://builtinsf.com/sites/www.builtinsf.com/files/2022-08/logo.png">
      <Loader isRunning={false} />
      <UseInput question="which brand should I analyse?" />
    </UseBlock>
  );
};

export default Udemy;
