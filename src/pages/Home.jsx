import React from "react";
import Offer from "../components/Offer";
import About from "../components/About";
import Works from "../components/Works";

const Home = () => {
  return (
    <div className="bg-white w-full mt-10 font-poppins select-none">
      <div className="flex gap-x-28">
        <div className="ml-20 w-[650px]">
          <p className="text-[#001f27] text-[56px] leading-[68px] font-bold">
            Hone your english speaking skills over{" "}
            <span className="text-[#139980]"> one-on-one</span> video call
          </p>
          <p className="text-[#001f27] text-[18px] w-[600px] mt-3">
            Practice english conversation with excellent communuicators across
            the country and speak like a PRO 😎.
          </p>

          <div className="mt-12">
            <button className="bg-[#FF736A] hover:scale-105 rounded-[80px] px-[32px] py-[12px] text-white text-[18px]">
              Book a trial
            </button>
            <button className="text-[#FF736A] hover:bg-[#ff736a] hover:text-white rounded-[80px] ml-5 px-[32px] py-[12px] border-2 border-[#FF736A] text-[18px]">
              <a
                href="https://play.google.com/store/apps/details?id=com.app.clapingo&hl=en_IN&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                Download our app
              </a>
            </button>
          </div>
        </div>
        <div className="">
          <div className="w-[500px] h-[300px] bg-[#f9f9f9] border-2 border-black rounded-[30px]"></div>
        </div>
      </div>

      <About />
      <Offer />
      <Works />
    </div>
  );
};

export default Home;
