import React from "react";
import Logo from "../images/RevitalizeLogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-full h-40 px-10 absolute">
        <div>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
        </div>

        <div>
          <ul className="text-white font-bold flex justify-around gap-10">
            <a href="#">
              <li>Home</li>
            </a>
            <a href="#">
              <li>About us</li>
            </a>
            <a href="#">
              <li>Contact</li>
            </a>
            <a href="#">
              <li>Services</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
