import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import CarouselTabs from "../../Libs/CarouselTabs";
import Carousel from "../../Libs/Carousel";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const EVENTS = [
    {
      src: "/RTEP.jpg",
      timeline: "09/02/2024 – 10/02/2024",
      title: "RTEP",
      Location: "Innovation Hub, Main Auditorium",
    },
    {
      src: "/hmit.jpg",
      timeline: "19/03/2024 – 21/03/2024",
      title: "HackMITWPU",
      Location: "Innovation Hub, Main Auditorium",
    },
    {
      src: "/ince.jpg",
      timeline: " 05/05/2024",
      title: "Inception",
      Location: "Innovation Hub, Main Auditorium",
    },
  ];

  const EventsCategory = [
    { name: "Tech Events", count: 30 },
    { name: "Entrepreneurship", count: 24 },
    { name: "Workshops", count: 29 },
    { name: "Hackathons", count: 25 },
    { name: "Webinars", count: 40 },
    { name: "Conferences", count: 60 },
  ];

  const countRefs = useRef([]);
  countRefs.current = [];

  useEffect(() => {
    countRefs.current.forEach((el, i) => {
      if (!el) return;
      if (!EventsCategory[i]) return;

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: EventsCategory[i].count,
          duration: 1,
          ease: "power1.inOut",
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            el.innerText = Math.floor(el.innerText) + "+";
          },
        }
      );
    });
  }, []);

  return (
    <div className="p-6 sm:p-8 w-full mx-auto flex flex-col items-center gap-12 min-h-screen overflow-x-hidden bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Header Section */}
      <section className="mb-6 flex flex-col text-black justify-center items-center text-center max-w-3xl gap-8 px-4">
        <h2 className="text-4xl sm:text-6xl font-bold mb-1 leading-tight tracking-tighter w-full">
          Meet Our Events{" "}
          {/* <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0e3aa8 0%, #fed600 35%, #000 75%, #fff 100%)",
            }}
          >
            @
          </span>{" "} */}
          {/* Innovation Hub */}
        </h2>
        <p className="text-sm sm:text-base text-[#6d6d6d] w-full">
          Innovation Hub hosts diverse events to inspire creativity and
          collaboration for innovators of all levels. From workshops to expos,
          our events connect you with experts, mentors, and fellow innovators in
          a vibrant community.
        </p>
      </section>

      {/* Divider */}
      <div className="w-11/12 h-[0.9px] bg-[#6d6d6d]" />

      {/* Top Events Section */}
      <section className="flex flex-col md:flex-row w-full justify-around items-start md:items-center gap-10 md:gap-6 px-4 max-w-7xl ">
        {/* Description */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight tracking-tighter">
            Top Events at Innovation Hub
          </h2>
          <p className="text-[#6D6D6D] text-sm sm:text-base text-justify md:text-left">
            Our key events include showcases where innovators pitch ideas,
            hackathons that challenge teams to solve problems fast, and speaker
            sessions featuring industry leaders. These are great opportunities
            to learn, network, and grow your projects.
          </p>
          <div className="mt-4 md:block hidden">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full sm:w-auto justify-center"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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

        {/* Carousel Tabs */}
        <div className="flex-1 max-w-3xl w-full md:w-1/2 px-4">
          <CarouselTabs />
          <div className="mt-4 block md:hidden">
            <a
              href="#"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full sm:w-auto justify-center"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
      </section>

      {/* Divider */}
      <div className="w-11/12 h-[0.9px] bg-[#6d6d6d]" />

      {/* Carousel Section */}
      <section className="w-full flex justify-center items-center max-w-7xl px-4">
        <Carousel />
      </section>

      {/* Divider */}
      <div className="w-11/12 h-[0.9px] bg-[#6d6d6d]" />

      {/* Events Cards Section */}
      <section className="mb-6 w-full flex flex-wrap gap-6 justify-center max-w-7xl px-4">
        {EVENTS.map((event, idx) => (
          <div
            key={idx}
            className="max-w-sm w-full sm:w-[48%] md:w-[30%] flex flex-col justify-center bg-white border border-gray-200 rounded-lg text-black shadow-sm"
          >
            <a href="#">
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src={event.src}
                alt="Event"
                loading="lazy"
              />
            </a>
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-500">{event.timeline}</p>
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {event.title}
                </h5>
              </a>
              <p className="text-gray-700 mb-4">{event.Location}</p>
              <div className="flex justify-between items-center mt-auto w-full">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full sm:w-auto justify-center"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        ))}
      </section>

      {/* Divider */}
      <div className="w-11/12 h-[0.9px] bg-[#6d6d6d]" />

      {/* Events Category with Counts */}
      <section className="mt-8 w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 2xl:grid-cols-6 gap-6 text-center px-4">
        {EventsCategory.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <div
              ref={(el) => {
                if (el) countRefs.current[idx] = el;
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 transition-all mt-2"
            >
              0+
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              {category.name}
            </h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;
