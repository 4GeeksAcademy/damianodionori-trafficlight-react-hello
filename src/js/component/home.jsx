import React, { useState } from 'react';

function TrafficLight() {
  const [colors, setColors] = useState(["red", "yellow", "green"]);
  const [currentColor, setCurrentColor] = useState("red");

  const cycleColors = () => {
    const currentIndex = colors.indexOf(currentColor);
    setCurrentColor(colors[(currentIndex + 1) % colors.length]);
  };

  const togglePurpleColor = () => {
    const hasPurple = colors.includes("purple");
    setColors(hasPurple ? colors.filter((color) => color !== "purple") : [...colors, "purple"]);
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
