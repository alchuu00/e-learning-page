import React from "react";

const HeroText = () => {
  return (
    <div>
      <div className="text-lg font-semibold text-gray-600">Online education for people of all ages</div>
      <div className="mb-8 mt-1">
        <div className="text-7xl text-purple-400 font-bold">Learn</div>
        <div className="text-7xl text-purple-500 font-bold">Anything.</div>
        <div className="text-7xl text-purple-700 font-bold">Anytime.</div>
        <div className="text-7xl text-purple-900 font-bold">Anywhere.</div>
      </div>
      <div className="flex gap-8 text-lg font-semibold">
        <button className='py-2 px-4 text-blue-400 border-blue-400 border-4 rounded-2xl transition ease-in-out hover:-translate-y-1 drop-shadow-md'>Read More</button>
        <button className='py-3 px-6 text-white bg-blue-400  rounded-2xl drop-shadow-md transition ease-in-out hover:-translate-y-1 drop-shadow-md'>7 Day Free Trial</button>
      </div>
    </div>
  );
};

export default HeroText;
