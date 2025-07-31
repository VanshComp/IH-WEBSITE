

import React, { useState } from "react";

const DUMMY_DATA = [
  {
    id: 4,
    href: "#",
    imgSrc: "/neuro.jpg",
    title: "Neuro Harmony Program",
    description:
      "A 2.5-day scientific program on neuro-rehabilitation and neuropalliative care involving interdisciplinary workshops and expert sessions.",
    readMoreHref: "#",
  },
  {
    id: 5,
    href: "#",
    imgSrc: "/nak.jpg",
    title: "Nakshatra Event",
    description:
      "Celebrates 578 children showcasing creativity from over 45 orphanages through dance, drama and competitions, promoting education and community spirit.",
    readMoreHref: "#",
  },
  {
    id: 6,
    href: "#",
    imgSrc: "/esummit.png",
    title: "E-Summit 2024",
    description:
      "Entrepreneurial workshops, panel discussions, and networking opportunities for 700+ students, empowering budding innovators and founders.",
    readMoreHref: "#",
  },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? DUMMY_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === DUMMY_DATA.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div
      id="default-carousel"
      className="relative w-11/12 max-w-5xl mx-auto flex flex-col items-center justify-center"
      data-carousel="slide"
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="relative h-48 sm:h-64 md:h-80 lg:h-[30rem] overflow-hidden rounded-lg">
          {DUMMY_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`duration-700 ease-in-out absolute top-0 left-0 w-full h-full transition-opacity ${
                index === activeIndex
                  ? "opacity-100 z-10"
                  : "opacity-0 z-0 pointer-events-none"
              }`}
              data-carousel-item
              aria-hidden={index !== activeIndex}
            >
              {/* Clickable area */}
              <a href={item.href} className="block w-full h-full relative">
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Overlay with title and description */}
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 p-4 rounded-md text-white max-w-xl">
                  <h3 className="font-bold text-sm sm:text-lg">{item.title}</h3>
                  <p className="text-xs sm:text-sm mt-1">{item.description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {DUMMY_DATA.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              activeIndex === index ? "bg-white" : "bg-gray-500"
            }`}
            aria-current={activeIndex === index ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        type="button"
        onClick={handlePrev}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 focus:outline-none"
        aria-label="Previous Slide"
      >
        <svg
          className="w-5 h-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 1L1 5l4 4" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-30 flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-30 hover:bg-opacity-50 focus:outline-none"
        aria-label="Next Slide"
      >
        <svg
          className="w-5 h-5 text-black"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 6 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M1 9l4-4-4-4" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
