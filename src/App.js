import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard";
import "./BasketballPlayerCard.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.jpg";

const playersData = [
  {
    name: "LeBron James",
    image: img1,
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
  },
  {
    name: "Stephen Curry",
    image: img2,
    position: "Guard",
    stats: {
      pointsPerGame: 27.3,
      assistsPerGame: 6.5,
      reboundsPerGame: 5.4,
    },
  },
  {
    name: "Kevin Durant",
    image: img3,
    position: "Forward",
    stats: {
      pointsPerGame: 29.6,
      assistsPerGame: 5.7,
      reboundsPerGame: 7.3,
    },
  },
];

function App() {
  return (
    <div className="App">
      <h1 className="heading" style={{ textAlign: "center" }}>
        Basketball Players
      </h1>
      <div className="cards-container">
        {playersData.map((player, index) => (
          <BasketballPlayerCard
            key={index}
            name={player.name}
            image={player.image}
            position={player.position}
            stats={player.stats}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
