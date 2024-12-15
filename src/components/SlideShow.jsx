import React, { useEffect, useState } from 'react';
import '../assets/css/style.css';

// Import images
import sliderImg1 from '../assets/img/slider-img1.png';
import sliderImg2 from '../assets/img/slider-img2.png';

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [sliderImg1, sliderImg2]; // Array of slide images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}

export default SlideShow;
