import React from "react";
import Logo from "../images/RevitalizeLogo.png";
// import BG from "../images/img1.jpg";

const Navbar = () => {
  return (
    <>
      <div className="z-50 fixed top-0 right-0 left-0">
        <div className="flex items-center justify-between md:flex-row h-60 p-10">
          <img src={Logo} alt="Logo" />

          <ul className="text-white font-bold flex justify-around w-100 ">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>Services</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
