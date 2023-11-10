import React, { useState } from 'react';

function TrafficLight() {
  const [colors, setColors] = useState(["red", "yellow", "green"]);
  const [currentColor, setCurrentColor] = useState("red");

  const cycleColors = () => {
    const currentIndex = colors.indexOf(currentColor); //getting the index of the currently active index in the array
    setCurrentColor(colors[(currentIndex + 1) % colors.length]); //incrementing by one index per time and ensuring the index will not exceed the length of the array to make it cycle from the start
  };

  const togglePurpleColor = () => {
    const hasPurple = colors.includes("purple"); //checking if "purple" exists in the colors array, will return true or false
    setColors(hasPurple ? colors.filter((color) => color !== "purple") : [...colors, "purple"]); //if hasPurple is true it will create a new array of colors without purple, otherwise the opposite
  };

  return (
    <div className="centered-container">
      <div className="traffic-light">
        {colors.map((color) => (
          <div
            key={color}
            className={`light ${color} ${currentColor === color ? 'glow' : ''}`}
            onClick={() => setCurrentColor(color)}
          ></div>
        ))}
        <div>
          <button className="button" onClick={cycleColors}>Change Color</button>
          <button className="button" onClick={togglePurpleColor}>
            {colors.includes("purple") ? "Remove Purple" : "Add Purple"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrafficLight;
