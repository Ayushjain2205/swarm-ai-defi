import React from "react";
import Page from "../components/Layout/Page";
import MyAgentsCard from "../components/UI/MyAgentsCard";
import cardsData from "../helpers/cardsData";

const myagents = () => {
  const cards = cardsData.map((data, index) => (
    <MyAgentsCard
      key={index}
      id={index}
      {...data}
      onClick={() => handleCardClick(data)}
    />
  ));

  return (
    <Page>
      <div className="flex flex-col gap-[40px] px-[30px] py-[40px]">
        {cards}
      </div>
    </Page>
  );
};

export default myagents;
