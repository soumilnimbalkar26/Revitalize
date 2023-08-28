import React from "react";
// import Img from "../images/Screen2img.png";

const Screen2 = () => {
  return (
    <>
      <div className="container mx-auto my-36">
        <div className="text-white">
          <h1 className="font-bold text-5xl">Book Your Appointment</h1>
          <h1 className="font-bold text-5xl">Online.</h1>
          <h5 className="text-gray-500 font-medium pt-6 text-xl">
            Get 10% Discount on your first hair
          </h5>
          <h5 className="text-gray-500 font-medium text-xl">
            cut by using our website.
          </h5>
        </div>
        <button className="text-black font-bold text-base mt-6 bg-yellow-500 px-14 py-4 rounded-2xl hover:bg-yellow-400 duration-300">
          Book Your Appointment
        </button>

        <div className="flex justify-center mt-20">
          <div className="bg-yellow-500 h-98 w-1134 rounded-6xl">
            <img src="" alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen2;
