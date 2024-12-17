import React, { useState, useEffect } from "react";
import "./Slideshow.css";

const images = [
  "https://media.viez.vn/prod/2021/8/5/large_1628183218422_e1402e685c.png",
  "https://media.viez.vn/prod/2021/8/5/large_1628183201541_1547ef8b24.png",
  "https://vcdn1-vnexpress.vnecdn.net/2024/03/01/truong1-2226-1709270711.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=shl17z4MzE29l0EXWNjRHA",
];

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? "active" : ""}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default Slideshow;
