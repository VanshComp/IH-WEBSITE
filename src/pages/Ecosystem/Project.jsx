import React from "react";
import StartYourProjectSection from "../../components/StartYourProjectSection";
import JoinProjectSection from "../../components/JoinProjectSection";

const Project = () => {
  // text-[#093FB4]
  return (
    <div className="p-8 mx-auto flex flex-col items-center w-full  ">
      <div className="text-[5rem] xs:text-[3rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold max-w-3xl mx-auto text-center text-black p-8 tracking-tighter md:leading-40 sm:leading-20 xs:leading-15">
        Start{" "}
        <span className="underline text-[#093FB4] inline-block i">Your</span>{" "}
        Journey
      </div>

      <div className="w-24 h-24 rounded-full cursor-pointer border-dotted border-2 overflow-hidden flex items-center justify-center">
        <img src="/arrow.png" alt="" className="w-1/2 h-1/2 object-cover" />
      </div>
      <StartYourProjectSection />

      <hr />

      <JoinProjectSection />

      <section className="bg-white p-6 rounded shadow text-black max-w-4xl mx-auto mt-8">
        <h2 className="text-xl font-bold mb-2">Application for project</h2>
        <p>Application form coming soon. Stay tuned!</p>
      </section>
    </div>
  );
};

export default Project;
