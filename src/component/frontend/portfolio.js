// Carousel.js
import React, { useState, useEffect } from "react";
import Image from "next/image";
import todo from "../../Assets/todo.jpg";
import tailwind from "../../Assets/tailwind.jpg";
import stopwatch from "../../Assets/stopwatch.jpg";
import Container from "@/layouts/container";
import authenticate from "../../Assets/authenticate.jpg";

const slides = [
  {
    text: "This is my todo app with latest technology",
    image: todo,
  },
  {
    text: "Here i create template with Tailwind css",
    image: tailwind,
  },
  {
    text: "Here i create stopWatch with JavaScript and React.js",
    image: stopwatch,
  },
  {
    text: "i create a Login And Register page with full Backend functionality ",
    image: authenticate,
  },
];

const AUTO_SLIDE_INTERVAL = 3000;

function Portfolio() {
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
    <Container>
      <div className="w-full h-full p-4 sm:p-8 md:p-12 lg:p-16 animate-slide-up">
        <div className="text-center text-gray-900 p-8">
          <h2 className="text-4xl md:text-5xl font-semibold ">Portfolio</h2>
          <div class="flex mt-4 justify-center">
            <div class="w-28 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
          <p className="text-lg md:text-lg mt-4 ">
            I offer expert web development services, including dynamic websites
            and responsive front-end design using React and Tailwind CSS. With a
            focus on both front-end and back-end solutions,
          </p>
        </div>
        <div className="relative w-full mx-auto rounded-lg overflow-hidden mt-8 animate-slide-up">
          <div className="p-6 text-center">
            <div className="flex flex-col items-center mb-4">
              <Image
                src={slides[currentIndex].image}
                alt="Slide"
                width={600}
                height={600}
                className="h-auto max-w-full rounded"
              />
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
      </div>
    </Container>
  );
}

export default Portfolio;
