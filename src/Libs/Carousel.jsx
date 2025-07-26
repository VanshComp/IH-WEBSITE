import React, { useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    title: "Team Collab",
    desc: "Join the best minds for breakthrough projects.",
    img: "/670426ca884c8e002ad8f442_img-placeholder.svg",
  },
  {
    id: 2,
    title: "Startup Expo",
    desc: "Showcase your business ideas to investors.",
    img: "/670426ca884c8e002ad8f442_img-placeholder.svg",
  },
  {
    id: 3,
    title: "Hackathon",
    desc: "Solve real-world challenges with code.",
    img: "/670426ca884c8e002ad8f442_img-placeholder.svg",
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
      className="relative w-11/12 flex flex-col items-center justify-center mx-auto"
      data-carousel="slide"
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {DUMMY_DATA.map((item, index) => (
            <div
              key={item.id}
              className={`duration-700 ease-in-out absolute top-0 left-0 w-full h-full ${
                index === activeIndex ? "block" : "hidden"
              }`}
              data-carousel-item
            >
              <img
                src={item.img}
                className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt={item.title}
              />
              <div className="absolute bottom-5 left-5 bg-opacity-50 p-3 rounded text-white">
                <h3 className="font-bold text-xs md:text-lg">{item.title}</h3>
                <p className="text-[.5rem] md:text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {DUMMY_DATA.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                activeIndex === index ? "bg-white" : "bg-gray-500"
              }`}
              aria-current={activeIndex === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Prev Button */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>

        {/* Next Button */}
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
