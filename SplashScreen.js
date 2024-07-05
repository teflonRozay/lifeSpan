import React, { useEffect, useState } from 'react';
import './SplashScreen.css';
import DynamicImage from './Dynamic.jpg'; // Adjust the path if necessary
import SeamlessImage from './Seamless.jpg'; // Adjust the path if necessary
import SloganImage from './Slogan.jpg'; // Adjust the path if necessary

const images = [
  DynamicImage,
  SeamlessImage,
  SloganImage
];

const SplashScreen = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-image ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
};

export default SplashScreen;
