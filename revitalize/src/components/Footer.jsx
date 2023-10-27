import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" bg-yellow-600 my-60 py-32">
        <div className="flex justify-center gap-40">
          <div className=" flex flex-col gap-7">
            <a className="text-white" href="">
              Services
            </a>
            <a className="text-white" href="">
              Email marketing
            </a>
            <a className="text-white" href="">
              Campaigns
            </a>
            <a className="text-white" href="">
              Branding
            </a>
            <a className="text-white" href="">
              Offline
            </a>
          </div>
          <div className=" flex flex-col gap-7">
            <a className="text-white" href="">
              About
            </a>
            <a className="text-white" href="">
              Our Story
            </a>
            <a className="text-white" href="">
              Benifits
            </a>
            <a className="text-white" href="">
              Teams
            </a>
            <a className="text-white" href="">
              Careers
            </a>
          </div>
          <div className=" flex flex-col gap-7">
            <a className="text-white" href="">
              Help
            </a>
            <a className="text-white" href="">
              FAQs
            </a>
            <a className="text-white" href="">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
