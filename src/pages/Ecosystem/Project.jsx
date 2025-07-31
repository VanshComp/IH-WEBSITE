import React from "react";
import StartYourProjectSection from "../../components/StartYourProjectSection";
import JoinProjectSection from "../../components/JoinProjectSection";
import RotatingText from "../../Libs/RotatingText";
import InfiniteHorizontalScroll from "../../Libs/InfiniteHorizontalScroll";
import ApplicationForProject from "../../components/ApplicationForProject";
import CarouselTabs from "../../Libs/CarouselTabsp";

const Project = () => {
  // text-[#093FB4]
  return (
    // make this responsive
    <div className="px-8 mx-auto flex flex-col items-center w-full justify-between gap-2 bg-gradient-to-br from-blue-50 to-yellow-50">
      <div className="text-3xl font-bold mx-auto text-center text-black px-6 flex-col flex justify-center items-center">
        <p className=" tracking-tighter md:leading-30 sm:leading-20 xs:leading-15">
          {" "}
          Start{" "}
          <span
            className=" inline-block "
            // style={{ fontStyle: "italic" }}
          >
            Your
          </span>{" "}
          Journey
        </p>
        <p className="text-xl text-center sm:text-left">
          At Innovation Hub, the platform where creative minds connect to launch
          projects, join teams, and turn bold ideas into reality.{" "}
          <RotatingText
            texts={["Discover", " collaborate", "and innovate"]}
            mainClassName="inline-block align-middle text-[#000] bg-[#eec759] rounded-md px-2 py-0.5"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />{" "}
          as you explore opportunities whether you’re looking to start something
          new, join an exciting initiative, or grow your skills. Your innovation
          journey begins right here.
        </p>
      </div>
      {/* Start Your Project Section */}
      <a href="#stpj">
        <div className="w-24 h-24 rounded-full mt-10 cursor-pointer border-dotted border-2 overflow-hidden flex items-center justify-center">
          {" "}
          <img src="/arrow.png" alt="" className="w-1/2 h-1/2 object-cover" />
        </div>
      </a>
      <InfiniteHorizontalScroll />
      <StartYourProjectSection />

      <hr />

      <CarouselTabs />
      {/* Join Project Section */}

      <JoinProjectSection />
      {/* Application Section */}

      {/* <section className="bg-white p-6 rounded shadow text-black max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-2">Application for project</h2>
        <p>Application form coming soon. Stay tuned!</p>
      </section> */}
      <ApplicationForProject title={"Fill Application Form"} />
    </div>
  );
};

export default Project;
