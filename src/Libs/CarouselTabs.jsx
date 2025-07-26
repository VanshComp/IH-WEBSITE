import React, { useState, useEffect, useRef } from "react";

const tabs = [
  {
    label: "TOP EVENT : 1",
    image: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    alt: "TOP EVENT : 1",
  },
  {
    label: "TOP EVENT : 2",
    image: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    alt: " TOP EVENT : 2",
  },
  {
    label: "TOP EVENT : 3",
    image: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    alt: "TOP EVENT : 3",
  },
];

const DURATION = 3000; // in ms

const CarouselTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const timerRef = useRef();
  const rafRef = useRef();
  const lastSwitchRef = useRef(Date.now());

  // keep progress bar in sync with tab changes
  useEffect(() => {
    let running = true;

    // Start time
    lastSwitchRef.current = Date.now();
    setProgress(0);

    // Progress animation with requestAnimationFrame
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

    // Timeout to switch tabs exactly after 3 seconds
    timerRef.current = setTimeout(() => {
      setActiveIndex((idx) => (idx + 1) % tabs.length);
    }, DURATION);

    return () => {
      running = false;
      clearTimeout(timerRef.current);
      cancelAnimationFrame(rafRef.current);
    };
  }, [activeIndex]);

  // manual tab switch
  const handleTabClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    <div className="w-full py-8">
      <div className="relative">
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            id={`tabpanel-${idx}`}
            role="tabpanel"
            aria-labelledby={`tab-${idx}`}
            className={`${activeIndex === idx ? "block" : "hidden"} w-full`}
          >
            <a href={"#"}>
              <img
                src={tab.image}
                alt={tab.alt}
                className="w-full h-64 object-cover rounded-xl shadow-md transition-all duration-300"
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex border-b border-gray-200 mt-6 relative">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`flex flex-col items-center flex-1 py-4 px-2 transition-all duration-200
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
            <span className="text-sm">{tab.label}</span>
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
