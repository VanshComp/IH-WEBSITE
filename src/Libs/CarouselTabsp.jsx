import React, { useState, useEffect, useRef } from "react";

const tabs = [
  {
    id: 1,
    href: "#",
    imgSrc: "/ins.png",
    title: "Insudox",
    description:
      "Online insurance filing, tracking and claiming software which would allow for people to avail assistance while going through tedious procedures of company-based policy reimbursements.",
    readMoreHref: "#",
  },
  {
    id: 2,
    href: "#",
    imgSrc: "/handsani.jpg",
    title: " AUTOMATIC HAND SANITIZATION",
    description:
      "Hand sanitization Module that senses the hand and dispenses sanitizer automatically while also reading the user's temperature and checking if it is a safe value.",
    readMoreHref: "#",
  },
  {
    id: 3,
    href: "#",
    imgSrc: "/powe.png",
    title: " POWER LIFTING FIXTURE DESIGN",
    description:
      "A fixture which is designed to lift heavy components weighing up to 50 tonnes and move them by any required angle from 0 - 90 degrees.",
    readMoreHref: "#",
  },
];

const DURATION = 3000; // in ms

const CarouselTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef();
  const rafRef = useRef();
  const lastSwitchRef = useRef(Date.now());

  useEffect(() => {
    let running = true;

    lastSwitchRef.current = Date.now();
    setProgress(0);

    const animate = () => {
      if (!running) return;

      const elapsed = Date.now() - lastSwitchRef.current;
      const percent = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(percent);

      if (percent < 100) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };
    rafRef.current = requestAnimationFrame(animate);

    timerRef.current = setTimeout(() => {
      setActiveIndex((idx) => (idx + 1) % tabs.length);
    }, DURATION);

    return () => {
      running = false;
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex]);

  const handleTabClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <div className="w-full max-w-6xl py-8 flex flex-col justify-center items-center mx-auto px-4 sm:px-6 lg:px-8 min-h-fit overflow-hidden">
      <div className="relative w-full">
        {tabs.map((tab, idx) => (
          <div
            key={tab.id}
            id={`tabpanel-${idx}`}
            role="tabpanel"
            aria-labelledby={`tab-${idx}`}
            className={`${activeIndex === idx ? "block" : "hidden"} w-full`}
          >
            <a href={tab.href}>
              <img
                src={tab.imgSrc}
                alt={tab.title}
                className="w-full rounded-xl shadow-md object-cover transition-all duration-300
                  h-48 sm:h-64 md:h-80 lg:h-[30rem]"
              />
            </a>
            {/* You can add description here if needed */}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div
        className="flex border-b border-gray-200 mt-6 relative w-full overflow-x-clip justify-center items-center md:flex-row flex-col"
        role="tablist"
      >
        {tabs.map((tab, idx) => (
          <button
            key={tab.id}
            id={`tab-${idx}`}
            className={`flex flex-col items-center flex-shrink-0 min-w-[100px] sm:min-w-[150px] py-4 px-2 transition-all duration-200
              ${
                activeIndex === idx
                  ? "border-b-4 border-blue-500 bg-gray-100 font-semibold"
                  : "font-medium text-gray-600"
              }
              focus:outline-none`}
            aria-selected={activeIndex === idx}
            aria-controls={`tabpanel-${idx}`}
            role="tab"
            onClick={() => handleTabClick(idx)}
            type="button"
          >
            <span className="text-xs text-gray-400 mb-1">{`0${idx + 1}`}</span>
            <span className="text-sm text-center">{tab.title}</span>
            {activeIndex === idx && (
              <div className="w-full h-1 mt-2 bg-gray-200 rounded">
                <div
                  className="bg-blue-500 h-1 rounded transition-none"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselTabs;
