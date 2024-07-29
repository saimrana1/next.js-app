// Carousel.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "../../Assets/dev1.jpg"; // Ensure this path is correct

const slides = [
  {
    text: "This company is the best. I am so happy with the result!",
    author: "Michael Roe,",
    image: image1,

    authorDetails: "A WEB DEVELOPER",
  },
  {
    text: "One word... WOW!!",
    author: " Salesman, Rep Inc",
    image: image1,

    authorDetails: "A WEB DEVELOPER",
  },
  {
    text: "Excellent quality and customer support. Will definitely use again!",
    author: " FriendsAlot",
    image: image1,

    authorDetails: "A WEB DEVELOPER",
  },
  {
    text: "Great service and quality. Highly recommend!",
    author: " RetailCorp",
    image: image1,

    authorDetails: "A WEB DEVELOPER",
  },
];

const AUTO_SLIDE_INTERVAL = 3000;

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full mx-auto rounded-lg overflow-hidden mt-8 animate-slide-up">
      <div className="p-6 text-center">
        <div className="flex flex-col items-center mb-4">
          <Image
            src={slides[currentIndex].image}
            alt="Slide"
            width={200}
            height={200}
            className="h-auto max-w-full rounded-full"
          />
          <div className="mt-2 text-sm text-gray-600">
            <p className="font-semibold">{slides[currentIndex].author}</p>

            <p className="text-xs text-gray-500">
              {slides[currentIndex].authorDetails}
            </p>
          </div>
        </div>
        <p className="text-base sm:text-md md:text-xl font-serif tracking-wider break-words mb-4">
          {slides[currentIndex].text}
        </p>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-orange p-2 rounded-full bg-blue-400 text-lg sm:text-xl md:text-2xl"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-orange p-2 rounded-full bg-blue-400 text-lg sm:text-xl md:text-2xl "
      >
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full  ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
