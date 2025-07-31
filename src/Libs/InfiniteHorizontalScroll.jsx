

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const projects = [
  {
    src: "/sam.png", // Replace with actual image paths
    timeline: "Ongoing",
    Event: "SAMVADINI CHATBOT",
    Location:
      "A bi-functional (voice and text) interface that tackles redundant FAQs for the exam department by accepting and answering queries in three languages using text or audio inputs.",
  },
  {
    src: "/div.png",
    timeline: "Ongoing",
    Event: "DIVYANGJAN SUPPORT",
    Location:
      "Supports specially-abled students by enabling requests for services like writing aid, supplementary notes, peer support, alongside a credit-based system for able students to help effectively—offered under one roof.",
  },
  {
    src: "/ver.png",
    timeline: "Ongoing",
    Event: "VERIFICATION MODULE",
    Location:
      "Centralizes and automates student graduation and college document verifications, handling requests, tracking, notifications, and auto-generating success certificates to organizations.",
  },
  {
    src: "/mou.png",
    timeline: "Ongoing",
    Event: "MOU Tracker",
    Location:
      "A centralized software portal managing college-based MOU processes including initiation, tracking, termination, renewal, and updates with all necessary functionalities.",
  },
  {
    src: "/ph.png",
    timeline: "Ongoing",
    Event: "PHD TRACKER",
    Location:
      "Automates Ph.D. student journeys with features for progress tracking, goal setting, collaboration, task and document management, reports, notifications, and analytics.",
  },
];

const InfiniteHorizontalScroll = () => {
  const containerRef = useRef(null);
  const scrollWidthRef = useRef(0);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Width of one full set of cards (before duplication)
    const firstSet = container.querySelector(".card-set");
    if (!firstSet) return;
    scrollWidthRef.current = firstSet.scrollWidth;

    // GSAP animation: move container left by scrollWidthRef.current continuously
    animationRef.current = gsap.to(container, {
      x: -scrollWidthRef.current,
      ease: "linear",
      duration: 40, // Adjust speed by duration (lower => faster)
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % -scrollWidthRef.current),
      },
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  // Render two sets of cards for infinite effect
  const renderCards = (dataArray) =>
    dataArray.map((event, idx) => (
      <div
        key={idx}
        id="stpj"
        className="mt-10 flex-shrink-0
          w-[90vw] sm:w-[75vw] md:w-[70vw] 
          h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[70vh] xl:h-[70vh]
          flex flex-col justify-between border border-gray-200 rounded-lg
          text-black shadow-sm mx-4"
      >
        <a href="#" className="block rounded-t-lg overflow-hidden">
          <img
            className="object-cover w-full h-44 sm:h-56 md:h-64 lg:h-56 xl:h-64"
            src={event.src}
            alt={`${event.Event} ${idx + 1}`}
            loading="lazy"
          />
        </a>
        <div className="p-5 flex flex-col flex-grow">
          <p className="text-sm text-gray-500">{event.timeline}</p>
          <a href="#" className="hover:underline">
            <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
              {event.Event}
            </h5>
          </a>
          {/* <p className="text-gray-700 mb-4 flex-grow">{event.Location}</p> */}
          <p className="mb-4 text-justify break-words overflow-hidden max-h-[6rem]">
            {event.Location}
          </p>
          <div className="mt-auto flex justify-center w-full">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ltr:ms-2 rtl:me-2 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    ));

  return (
    <div
      ref={containerRef}
      className="flex overflow-hidden whitespace-nowrap select-none"
      style={{ cursor: "grab" }}
      // No scrollbars, cards stay in one row horizontally
    >
      {/* First set */}
      <div className="card-set flex">{renderCards(projects)}</div>
      {/* Duplicate set for seamless infinite scroll */}
      <div className="card-set flex">{renderCards(projects)}</div>
    </div>
  );
};

export default InfiniteHorizontalScroll;
