import React, { useRef, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Navbar from "./components/Navbar";
import Project from "./pages/Ecosystem/Project";
import Startups from "./pages/Ecosystem/Startups";
import Events from "./pages/Portfolio/Events";
import CurrentTeam from "./pages/Leadership/CurrentTeam";

const App = () => {
  // const scrollRef = useRef(null);
  // const scrollInstance = useRef(null);

  // useEffect(() => {
  //   if (scrollRef.current) {
  //     scrollInstance.current = new LocomotiveScroll({
  //       el: scrollRef.current,
  //       smooth: true,
  //       multiplier: 1,
  //       lerp: 0.1,
  //       smartphone: { smooth: true },
  //       tablet: { smooth: true },
  //     });
  //   }

  //   return () => {
  //     if (scrollInstance.current) {
  //       scrollInstance.current.destroy();
  //       scrollInstance.current = null;
  //     }
  //   };
  // }, []);

  return (
    <div
      // ref={scrollRef}
      data-scroll-container
      className="min-h-screen h-fit bg-[#ffffff] pt-1 w-screen overflow-x-hidden"
    >
      <Navbar />
      <div className="mt-24"></div>
      <Routes>
        <Route path="/ecosystem/project" element={<Project />} />
        <Route path="/ecosystem/startups" element={<Startups />} />
        <Route path="/portfolio/events" element={<Events />} />
        <Route path="/leadership/current-team" element={<CurrentTeam />} />
      </Routes>
    </div>
  );
};

export default App;
