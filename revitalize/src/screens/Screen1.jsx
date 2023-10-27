import React from "react";
import BG from "../images/background.jpg";

const Screen1 = () => {
  const backgroundStyle = {
    backgroundImage: `url(${BG})`, // Use the imported image
    backgroundSize: "cover",
    backgroundPosition: "center",
    // backgroundRepeat: "no-repeat",
    height: "1440px",
    width: "auto",
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen space-y-20"
        style={backgroundStyle}
      >
        {/* <img className="bg-hero-pattern" src="" alt="" /> */}

        <div className="w-2/4 text-center">
          <h1 className="text-white font-bold text-5xl tracking-extrawide leading-relaxed">
            Best Hair Salon For Professional Look
          </h1>
        </div>
        <div className="flex justify-center space-x-10">
          <button className="text-black font-bold text-base bg-yellow-500 px-14 py-4 rounded-2xl hover:bg-yellow-400 duration-300">
            Book Now
          </button>

          <button className="text-white font-bold text-base px-14 py-4 rounded-2xl border-white border-2 hover:bg-yellow-500 hover:border-yellow-500 hover:text-black duration-300">
            All Services
          </button>
        </div>
      </div>
    </>
  );
};

export default Screen1;
