import { useState } from "react";
import "./styles.css";

const places = {
  Telangana: [
    { name: "Charminar", rating: "4.1/5" },
    { name: "Birla Mandir", rating: "4.2/5" }
  ],

  AndhraPradesh: [
    { name: "Araku Valley", rating: "4.7/5" },
    { name: "Amaravathi", rating: "4.5/5" }
  ],

  Kerala: [
    { name: "Munnar", rating: "4.0/5" },
    { name: "Wayanad", rating: "5/5" }
  ]
};

const allPlace = Object.keys(places);

export default function App() {
  const [destination, setDestination] = useState([]);

  function clickHandler(state) {
    var userInput = places[state];
    setDestination(userInput);
  }

  return (
    <div className="predictor">
      <h1 className="heading">
        {" "}
        <span role="img" aria-label="flight">
          ✈️
        </span>{" "}
        best places
      </h1>
      <p className="about">
        Checkout my favourite places in India and select any one of them to
        travel based on their ratings
      </p>
      <div className="buttonX">
        {allPlace.map((state) => {
          return (
            <button
              className="btn"
              key={state}
              onClick={() => clickHandler(state)}
            >
              {state}
            </button>
          );
        })}
      </div>
      <div>
        {destination.map((item) => {
          return (
            <div className="box">
              <p className="name">Name of the place : {item.name}</p>
              <p className="rating">Rating : {item.rating}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
