import React, { useState } from "react";
import { FaBeer, FaHeart, FaLaugh, FaStar } from "react-icons/fa";
import "./WheelOfFortune.css";

const WheelOfFortune = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const segments = [
    { icon: <FaHeart size={50} color="black" /> },
    { icon: <FaBeer size={50} color="black" /> },
    { icon: <FaLaugh size={50} color="black" /> },
    { icon: <FaStar size={50} color="black" /> },
    { icon: <FaHeart size={50} color="black" /> },
    { icon: <FaBeer size={50} color="black" /> },
    { icon: <FaLaugh size={50} color="black" /> },
    { icon: <FaStar size={50} color="black" /> },
  ];
  const segmentAngle = 360 / segments.length;

  const spinWheel = () => {
    if (!isSpinning) {
      setIsSpinning(true);

      const newRotation = Math.floor(Math.random() * 36000);

      setRotation(newRotation);

      setTimeout(() => {
        setIsSpinning(false);
      }, 3900);
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
                backgroundColor: index % 2 === 0 ? "#ff6347" : "#4682b4",
              }}
            >
              <div className="segment-label">{segment.icon}</div>
            </div>
          ))}
        </div>
        <div className="indicator"></div>
        <div className="center-circle" onClick={spinWheel} disabled={isSpinning}>
          {/* <img src="/4.jpeg" alt="Logo" className="logo-image" /> */}
          <img src="/5.png" alt="Logo" className="logo-image" />
        </div>
      </div>
    </div>
  );
};

export default WheelOfFortune;
