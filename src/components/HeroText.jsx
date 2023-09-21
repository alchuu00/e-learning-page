import React from "react";

const HeroText = () => {
  return (
    <div>
      <div className="lg:text-lg font-semibold text-gray-600 sm:text-xs">
        Online education for people of all ages
      </div>
      <div className="flex flex-col mb-8 mt-1 lg:text-7xl text-6xl">
        <div className="text-purple-400 font-bold">Learn</div>
        <div className="text-purple-500 font-bold">Anything.</div>
        <div className="text-purple-700 font-bold">Anytime.</div>
        <div className="text-purple-900 font-bold">Anywhere.</div>
      </div>
      <div className="flex flex-col gap-3 lg:gap-8 lg:flex-row lg:text-lg font-semibold sm:text-xs">
        <button className="py-2 px-4 text-blue-400 border-blue-400 border-4 rounded-2xl transition ease-in-out hover:-translate-y-1 drop-shadow-md">
          Read More
        </button>
        <button className="py-3 px-6 text-white bg-blue-400 rounded-2xl transition ease-in-out hover:-translate-y-1 drop-shadow-md">
          7 Day Free Trial
        </button>
      </div>
    </div>
  );
};

export default HeroText;
