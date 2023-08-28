import React from "react";

const Screen1 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-96">
        <div>
          <h1 className="text-white font-bold text-5xl tracking-widest text-center">
            Best Hair Salon For
          </h1>
          <h1 className="text-white font-bold text-5xl tracking-widest text-center">
            Professional Look
          </h1>
        </div>

        <div className="flex space-x-8 pt-20">
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
