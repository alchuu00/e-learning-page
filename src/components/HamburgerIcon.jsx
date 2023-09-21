import React, { useState } from 'react';

const HamburgerIcon = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    console.log('Hamburger state:', isHamburgerOpen);
  };

  return (
    <div className="hamburger-icon-container">
      <div onClick={toggleHamburger} className="material-symbols-outlined sm:hidden block font-bold text-4xl hover:cursor-pointer">
        menu
      </div>
      {isHamburgerOpen && (
        <div className='menu-overlay'>
          <div className='flex flex-col items-center justify-between gap-2'>
            <a href="/" className='hover:bg-white/10 py-3 px-5 rounded-2xl'>
              Search
            </a>
            <a href="/" className='hover:bg-white/10 py-3 px-5 rounded-2xl'>
              Log In
            </a>
            <button className='bg-pink-400 py-3 px-5 text-white rounded-2xl transition ease-in-out hover:-translate-y-1 drop-shadow-md'>
              Join Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerIcon;
