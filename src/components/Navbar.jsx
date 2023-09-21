import React from "react";
import logo from "../assets/logo.svg";
import HamburgerIcon from "./HamburgerIcon";

const Navbar = () => {
  const Logo = () => {
    return (
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
    );
  };

  const Button = () => {
    return (
      <button className="bg-pink-400 py-3 px-5 text-white rounded-2xl transition ease-in-out hover:-translate-y-1 drop-shadow-md">
        Join Now
      </button>
    );
  };

  return (
    <div className="flex items-center justify-between p-8 font-semibold text-gray-600">
      <Logo />
      <div className="flex items-center justify-between gap-2">
        <div className="hidden sm:block">
          <a href="/" className="hover:bg-white/10 py-3 px-5 rounded-2xl">
            Search
          </a>
          <a href="/" className="hover:bg-white/10 py-3 px-5 rounded-2xl">
            Log In
          </a>
          <Button />
        </div>
        <HamburgerIcon></HamburgerIcon>
      </div>
    </div>
  );
};

export default Navbar;
