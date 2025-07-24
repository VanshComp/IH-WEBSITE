import React from "react";

const cards = [
  {
    id: 1,
    href: "#",
    imgSrc: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    readMoreHref: "#",
  },
  {
    id: 2,
    href: "#",
    imgSrc: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    title: "Innovations shaping the future",
    description:
      "Explore the latest innovations changing the tech landscape for startups and enterprises alike.",
    readMoreHref: "#",
  },
  {
    id: 3,
    href: "#",
    imgSrc: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    title: "AI-Driven startup trends in 2025",
    description:
      "An insight into how artificial intelligence is revolutionizing startups around the world.",
    readMoreHref: "#",
  },
  {
    id: 4,
    href: "#",
    imgSrc: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    title: "Funding tips for early-stage startups",
    description:
      "Learn what investors look for and tips to secure funding for your startup journey.",
    readMoreHref: "#",
  },
  {
    id: 5,
    href: "#",
    imgSrc: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    title: "Funding tips for early-stage startups",
    description:
      "Learn what investors look for and tips to secure funding for your startup journey.",
    readMoreHref: "#",
  },
  {
    id: 6,
    href: "#",
    imgSrc: "/670426ca884c8e002ad8f442_img-placeholder.svg",
    title: "Funding tips for early-stage startups",
    description:
      "Learn what investors look for and tips to secure funding for your startup journey.",
    readMoreHref: "#",
  },
];

const Startups = () => {
  return (
    <div className="p-6 sm:p-8 w-full mx-auto bg-white mt-5 flex flex-col items-center gap-14 min-h-screen">
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-4xl sm:text-6xl md:text-9xl font-bold mb-2 tracking-tighter text-center">
            Have a startup <span className="text-yellow-400">i</span>dea?
          </h2>
          <p className="text-center max-w-xl px-4 sm:px-0">
            We support early-stage innovation with mentorship and resources.
          </p>
        </div>

        <div className="w-40 h-40 sm:w-60 sm:h-60 rotate-45 overflow-hidden">
          <img
            src="/arrow-down.png"
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-stretch w-full max-w-7xl">
        {cards.map(({ id, href, imgSrc, title, description, readMoreHref }) => (
          <div
            key={id}
            className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg dark:bg-white text-black shadow-sm"
          >
            <a href={href}>
              <img
                className="rounded-t-lg object-cover w-full h-48"
                src={imgSrc}
                alt=""
                loading="lazy"
              />
            </a>
            <div className="p-5 flex flex-col flex-grow">
              <a href={href}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 flex-grow">
                {description}
              </p>
              <a
                href={readMoreHref}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        ))}
      </div>

      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6"
      >
        Launch Your Startup
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
      </button>
    </div>
  );
};

export default Startups;
