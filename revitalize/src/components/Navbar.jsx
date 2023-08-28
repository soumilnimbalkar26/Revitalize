import React from "react";
import Logo from "../images/RevitalizeLogo.png";
import BG from "../images/img1.jpg";

const Navbar = ({ children }) => {
  return (
    <>
      <div
        className="Navbar p-1"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-4 mx-10">
          <div className="flex items-center mb-4 md:mb-0">
            <img src={Logo} alt="Logo" />
          </div>

          <div className="flex-grow flex justify-end">
            <ul className="text-white font-bold flex items-center">
              <li className="ml-56">Home</li>
              <li className="ml-56">About us</li>
              <li className="ml-56">Contact</li>
              <li className="ml-56">Services</li>
            </ul>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Navbar;
