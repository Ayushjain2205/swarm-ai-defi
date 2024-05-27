import React from "react";
import Page from "../components/Layout/Page";
import ExploreCard from "../components/UI/ExploreCard";
import cardsData from "../helpers/cardsData";

const explore = () => {
  const cards = cardsData.map((data, index) => (
    <ExploreCard key={index} {...data} />
  ));

  const rows = [];
  let index = 0;

  while (index < cards.length) {
    // First Row: 3 Cards
    if (index < cards.length) {
      rows.push(
        <div
          key={`row-${rows.length}`}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]"
        >
          {cards.slice(index, index + 3)}
        </div>
      );
      index += 3;
    }

    // Second Row: 1 Card spanning full width
    if (index < cards.length) {
      rows.push(
        <div key={`row-${rows.length}`} className="col-span-1">
          {cards[index]}
        </div>
      );
      index += 1;
    }

    // Third Row: 2 Cards each taking half width
    if (index < cards.length) {
      rows.push(
        <div
          key={`row-${rows.length}`}
          className="grid grid-cols-1 sm:grid-cols-2 gap-[30px]"
        >
          {cards.slice(index, index + 2)}
        </div>
      );
      index += 2;
    }
  }

  return (
    <Page>
      <div className="grid gap-[30px] px-[30px] py-[40px]">{rows}</div>
    </Page>
  );
};

export default explore;
