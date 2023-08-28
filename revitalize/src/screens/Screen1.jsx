import React from "react";

const Screen1 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-20">
        <div className="w-2/4 text-center">
          <h1 className="text-white font-bold text-5xl tracking-widest">
            Best Hair Salon For Professional Look
          </h1>
        </div>
        <div className="flex justify-center space-x-8">
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
