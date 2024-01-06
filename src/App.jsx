import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data.js";

const App = () => {
  const cardData = data.map((card) => (
    <Card
      img={card.img}
      location={card.location}
      rating={card.stats.rating}
      reviewCount={card.stats.reviewCount}
      price={card.price}
      title={card.title}
      key={card.id}
      openSpot={card.openSpot}
    />
  ));

  return (
    <div className="font-['Poppins']">
      <Navbar />
      <Hero />

      {/* Horizontal Scroll */}
      <div className="flex p-6 gap-3 overflow-x-auto min-w-screen">
        {cardData}
      </div>

      {/* If you want multiple rows with 4 cards each */}
      {/* <div className="grid grid-cols-4 gap-3 p-6 overflow-x-auto min-w-screen">
        {cardData}
      </div> */}
    </div>
  );
};

export default App;


const num = [1, 2, 3, 4, 5];
const squared = num.map((square) => {
  return square * square;
});

const names = ["idighs", "udo", "udeme"];
const nameCap = names.map((name) => {
  return `<p>${name}</p>`;
});

console.log(nameCap);
