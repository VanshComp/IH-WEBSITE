import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    title: "Ecosystem",
    children: [
      { label: "Project", path: "/ecosystem/project" },
      { label: "Startups", path: "/ecosystem/startups" },
    ],
  },
  {
    title: "Portfolio",
    children: [{ label: "Events", path: "/portfolio/events" }],
  },
  {
    title: "Leadership",
    children: [{ label: "Current Team", path: "/leadership/current-team" }],
  },
];

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setMenuOpen(false);
    setActive(null);
    navigate(path);
  };

  return (
    <nav className="backdrop-blur-md bg-white/30 border border-white/40 px-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-4">
      <span className="text-2xl font-bold cursor-pointer">Innovation Hub</span>

      <button
        className="md:hidden p-2 rounded "
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`flex flex-col md:flex-row md:space-x-6 items-start md:items-center absolute md:static top-full left-0 md:left-auto right-0 bg-white/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border md:border-0 border-white/40 rounded-b-md md:rounded-none transition-all duration-300 md:opacity-100 md:visible ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:opacity-100 md:visible z-40 md:z-auto`}
      >
        {navItems.map((item, i) => (
          <div
            key={item.title}
            className="relative w-full md:w-auto cursor-pointer"
            // onMouseLeave={() => setActive(null)}
          >
            <button
              type="button"
              onClick={() => setActive(active === i ? null : i)}
              // onMouseEnter={() => {
              //   if (window.innerWidth >= 768) setActive(i);
              // }}
              className="w-full md:w-auto px-4 py-2 text-left md:text-center cursor-pointer"
            >
              {item.title}
            </button>

            <div
              className={`absolute md:min-w-[140px] bg-white z-50 flex flex-col py-1 rounded shadow-md border border-gray-200 top-full md:mt-1 md:left-0 w-full md:w-auto cursor-pointer ${
                active === i ? "block" : "hidden"
              } md:shadow-lg`}
            >
              {item.children.map((child) => (
                <button
                  key={child.label}
                  type="button"
                  className="border-b last:border-b-0 border-gray-300 px-2 py-1 hover:bg-gray-200 text-left text-sm text-gray-800 cursor-pointer"
                  onClick={() => handleNavigate(child.path)}
                >
                  {child.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block ">
        <button className="text-[#093FB4] cursor-pointer rounded-full border px-4 py-2 hover:bg-[#093FB4] hover:text-white transition-colors duration-200">
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
