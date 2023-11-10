import React, { useState } from 'react';

function TrafficLight() {
  const [colors, setColors] = useState(["red", "yellow", "green"]);
  const [currentColor, setCurrentColor] = useState("red");

  const cycleColors = () => {
    const currentIndex = colors.indexOf(currentColor);
    const nextIndex = (currentIndex + 1) % colors.length;
    setCurrentColor(colors[nextIndex]);
  };

  const addPurpleColor = () => {
    setColors([...colors, "purple"]);
  };

  const removePurpleColor = () => {
    const filteredColors = colors.filter((color) => color !== "purple");
    setColors(filteredColors);
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
          <button className="button" onClick={addPurpleColor}>Add Purple</button>
          <button className="button" onClick={removePurpleColor}>Remove Purple</button>
        </div>
      </div>
    </div>
  );
}

export default TrafficLight;