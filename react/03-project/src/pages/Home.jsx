import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card";

import { cardData } from "../data/cardData";

const Home = () => {
  return (
    <div className="bg-gray-900">
      <Hero />
      <div className="flex border-2 border-red-900 justify-around items-center">
        {cardData.map((card, index) => {
          return (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
              btnText={card.btnText}
            />
          );
        })}
      </div>
      hello
    </div>
  );
};

export default Home;
