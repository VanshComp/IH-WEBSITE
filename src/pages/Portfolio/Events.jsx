import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Events = () => {
  const EVENTS = [
    {
      src: "/670426ca884c8e002ad8f442_img-placeholder.svg",
      timeline: "July 26, 2025 | 10:00 AM - 5:00 PM",
      Event: "Event",
      Location: "Innovation Hub, Main Auditorium",
    },
    {
      src: "/670426ca884c8e002ad8f442_img-placeholder.svg",
      timeline: "July 26, 2025 | 10:00 AM - 5:00 PM",
      Event: "Event",
      Location: "Innovation Hub, Main Auditorium",
    },
    {
      src: "/670426ca884c8e002ad8f442_img-placeholder.svg",
      timeline: "July 26, 2025 | 10:00 AM - 5:00 PM",
      Event: "Event",
      Location: "Innovation Hub, Main Auditorium",
    },
  ];

  const EventsCategory = [
    {
      name: "Tech Events",
      count: 30,
    },
    {
      name: "Entrepreneurship",
      count: 24,
    },

    {
      name: "Workshops",
      count: 29,
    },

    {
      name: "Hackathons",
      count: 25,
    },
    { name: "Webinars", count: 40 },
    {
      name: "Conferences",
      count: 60,
    },
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
    <div className="p-6 sm:p-8 w-full max-w-7xl mx-auto flex flex-col items-center gap-12 min-h-screen overflow-x-hidden">
      <section className="mb-6 flex flex-col text-black w-full">
        <h2 className="text-4xl sm:text-6xl md:text-[6rem] lg:text-[8rem] xl:text-[10rem] font-bold mb-1 w-full sm:w-2/3 leading-tight tracking-tighter">
          Events{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #0e3aa8 0%, #fed600 35%, #000 75%, #fff 100%)",
            }}
          >
            @
          </span>{" "}
          Innovation Hub
        </h2>
        <p className="text-base sm:text-lg max-w-3xl">
          Stay tuned for tech, entrepreneurship, and community events! Join us
          and accelerate innovation.
        </p>
      </section>

      <section className="mb-6 w-full flex flex-wrap gap-6 justify-center">
        {EVENTS.map((event, idx) => (
          <div
            key={idx}
            className="max-w-sm w-full sm:w-[48%] md:w-[30%] flex flex-col justify-center bg-white border border-gray-200 rounded-lg dark:bg-white text-black shadow-sm"
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
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {event.Event + " " + (idx + 1)}
                </h5>
              </a>
              <p className="text-gray-700 mb-4">{event.Location}</p>
              <div className="flex justify-between items-center mt-4 w-full">
                <a
                  href="#"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full sm:w-auto"
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

      <section className="mt-8 w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {EventsCategory.map((category, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center">
            <div
              ref={(el) => {
                if (el) countRefs.current[idx] = el;
              }}
              className="text-4xl sm:text-5xl font-extrabold text-blue-700 transition-all mt-2"
            >
              0+
            </div>
            <h3 className="text-xl font-bold mb-2">{category.name}</h3>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Events;
