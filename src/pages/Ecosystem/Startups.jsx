import React from "react";
import ApplicationForProject from "../../components/ApplicationForProject";

const cards = [
  {
    id: 1,
    href: "#ideathon-expo",
    imgSrc: "/hackthon-1.webp",
    title: "HackMIT-WPU & Innovation Expo",
    description:
      "Hackathons and ideathons empowering students from diverse disciplines to transform raw ideas into prototypes and early MVPs. Opportunities to validate concepts through peer feedback and mentorship.",
    readMoreHref: "#ideathon-expo-details",
  },
  // {
  //   id: 2,
  //   href: "#creative-studio",
  //   imgSrc: "/creative_studio.jpg",
  //   title: "Creative Media & Design Studio",
  //   description:
  //     "A vibrant space where teams focusing on creative media, branding, and design refine their projects with prototyping, audience engagement, and niche development support.",
  //   readMoreHref: "#creative-studio-details",
  // },
  {
    id: 3,
    href: "#startup-showcase",
    imgSrc: "/st.jpg",
    title: "Startup Showcase & Demo Days",
    description:
      "Annual showcase events that bring student founders face to face with investors, industry partners, and incubators—offering exposure, constructive feedback, and potential funding opportunities.",
    readMoreHref: "#showcase-details",
  },
  {
    id: 4,
    href: "#mentorship-guidance",
    imgSrc: "/men.jpg",
    title: "Mentorship & Business Guidance",
    description:
      "Guidance on business modeling, pitch deck preparation, market research, and prototyping supported by faculty, industry experts, and alumni entrepreneurs.",
    readMoreHref: "#mentorship-guidance-details",
  },
  {
    id: 5,
    href: "#innovation-culture",
    imgSrc: "/cul.jpg",
    title: "Culture of Creativity & Ownership",
    description:
      "A dynamic, youth-led environment encouraging fast learning, pivoting, and independent startup development. Innovators are supported whether they choose incubation or self-bootstrapping.",
    readMoreHref: "#innovation-culture-details",
  },
  // {
  //   id: 6,
  //   href: "#tbi-incubation",
  //   imgSrc: "/tbi_incubation.jpg",
  //   title: "Pipeline to TBI & Scale",
  //   description:
  //     "Support for startups progressing from idea validation to formal incubation through MIT-WPU’s Technology Business Incubator, enabling access to funding, formal incorporation, and scaling.",
  //   readMoreHref: "#tbi-incubation-details",
  // },
];

const Startups = () => {
  return (
    <div className="p-6 sm:p-8 w-full bg-gradient-to-br from-blue-50 to-yellow-50 mt-5 flex flex-col items-center gap-14 min-h-screen ">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-10 w-full px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:justify-around w-full items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tighter">
              Have a startup idea?
            </h2>
            <p className="text-lg font-medium max-w-xl text-gray-800">
              Ready to turn your vision into reality?{" "}
              <span className="text-blue-700 font-semibold">
                Innovation Hub is the launchpad for bold founders, creative
                thinkers, and dreamers.
              </span>{" "}
              From mentorship and expert guidance to resources and networking,
              we support ambitious startups at every stage. Explore featured
              stories, learn funding tips, and get inspired—your journey starts
              here.
            </p>
          </div>
          <div className="w-40 h-40 sm:w-60 sm:h-60  overflow-hidden flex-shrink-0">
            <img
              src="/suidea-unscreen.gif"
              alt="Animated startup idea"
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

        {/* Arrow down image for indication */}
        <div className="w-32 h-32 sm:w-40 sm:h-40 rotate-45 overflow-hidden">
          <img
            src="/arrow-down.png"
            alt="Downward arrow"
            className="object-cover w-full h-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap gap-8 justify-center items-stretch w-full">
        {cards.map(({ id, href, imgSrc, title, description, readMoreHref }) => (
          <div
            key={id}
            className="max-w-sm w-full sm:w-[48%] md:w-[30%] flex flex-col bg-white border border-gray-200 rounded-lg text-black shadow-sm"
          >
            <a href={href} className="block rounded-t-lg overflow-hidden">
              <img
                className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
                src={imgSrc}
                alt={title}
                loading="lazy"
              />
            </a>
            <div className="p-5 flex flex-col flex-grow">
              <a href={href}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {title}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 flex-grow">
                {description}
              </p>
              <a
                href={readMoreHref}
                className="inline-flex w-fit items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                tabIndex={0}
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

      <ApplicationForProject title={"Launch Your Startup"} />
    </div>
  );
};

export default Startups;
