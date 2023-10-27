import React from "react";
import Img from "../images/Screen2img.png";
const Screen2 = () => {
  return (
    <>
      <div className="container mx-auto my-36">
        <div className=" w-100 flex flex-col gap-5">
          <h1 className="font-bold text-5xl text-white">
            Book Your Appointment Online.
          </h1>
          <h5 className="text-gray-500 font-medium text-xl ">
            Get 10% Discount on your first hair cut by using our website.
          </h5>
        </div>
        <button className="text-black font-bold text-base mt-6 bg-yellow-500 px-14 py-4 rounded-2xl hover:bg-yellow-400 duration-300">
          Book Your Appointment
        </button>

        <div className="flex justify-center mt-20">
          <div className="bg-yellow-500 h-80 w-3/4 rounded-6xl flex justify-between">
            <div>
              <img className="h-80" src={Img} alt="img" />
            </div>

            <div className="flex flex-col text-center justify-around w-2/4 pe-10">
              <div className="flex flex-col text-center">
                <h1 className="tracking-extrawide font-normal text-4xl font-poppins">
                  WORKING DAYS
                </h1>
                <h2 className="font-normal text-lg font-poppins">
                  We are open on all six days in a week
                </h2>
              </div>
              <div className="flex flex-row justify-between border-b-2 border-dotted border-black">
                <h2 className="text-base font-bold font-poppins">Monday</h2>
                <p className="font-poppins">9am to 10pm</p>
              </div>
              <div className="flex flex-row justify-between border-b-2 border-dotted border-black">
                <h2 className="text-base font-bold font-poppins">Friday</h2>
                <p className="font-poppins">9am to 10pm</p>
              </div>
              <button className="font-poppins border border-black px-8 py-4 rounded-md hover:bg-yellow-400 duration-200 w-52">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <button className="font-poppins font-bold bg-yellow-500 px-8 py-4 rounded-md hover:bg-yellow-400 duration-200">
            Book Appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default Screen2;
