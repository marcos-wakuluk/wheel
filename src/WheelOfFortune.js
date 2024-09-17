import React, { useState } from "react";
import { FaBeer, FaHeart, FaLaugh, FaStar } from "react-icons/fa";
import "./WheelOfFortune.css";

const WheelOfFortune = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const segments = [
    { icon: <FaHeart className="icon" style={{ color: "black" }} /> },
    { icon: <FaBeer className="icon" style={{ color: "white" }} /> },
    { icon: <FaLaugh className="icon" style={{ color: "black" }} /> },
    { icon: <FaStar className="icon" style={{ color: "white" }} /> },
    { icon: <FaHeart className="icon" style={{ color: "black" }} /> },
    { icon: <FaBeer className="icon" style={{ color: "white" }} /> },
    { icon: <FaLaugh className="icon" style={{ color: "black" }} /> },
    { icon: <FaStar className="icon" style={{ color: "white" }} /> },
  ];
  const segmentAngle = 360 / segments.length;

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);

      const newRotation = Math.random() * 2000 + 2000;
      setRotation(rotation + newRotation);

      setTimeout(() => {
        setIsSpinning(false);
      }, 4000);
    }
  };

  return (
    <div className="wheel-container">
      <div className="wheel-wrapper">
        <div className={`wheel ${isSpinning ? "spinning" : ""}`} style={{ transform: `rotate(${rotation}deg)` }}>
          {segments.map((segment, index) => (
            <div
              key={index}
              className="segment"
              style={{
                transform: `rotate(${index * segmentAngle}deg)`,
                backgroundColor: index % 2 === 0 ? "#37F648" : "black",
              }}
            >
              <div className="segment-label">{segment.icon}</div>
            </div>
          ))}
        </div>
        <div className="indicator"></div>
        <div className="center-circle" onClick={spinWheel} disabled={isSpinning}>
          <img src="/5.png" alt="Logo" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default WheelOfFortune;
