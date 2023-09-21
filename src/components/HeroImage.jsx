import React from 'react';
import heroImg from "../assets/hero.png";

const HeroImage = () => {
  return (
    <div className="hidden sm:block">
      <img src={heroImg} alt='' className="w-full" />
    </div>
  );
}

export default HeroImage;