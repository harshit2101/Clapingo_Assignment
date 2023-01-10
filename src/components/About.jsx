import React from "react";

const About = () => {
  return (
    <div className="bg-white h-fit w-full mt-28 font-poppins select-none">
      <div className="flex gap-x-48">
        <div className="bg-gradient-to-r w-[640px]  h-[360px] from-[#00D2FF] to-white ">
          <div className="flex">
            <div className="w-[230px] h-[100px] mt-14 ml-28 bg-[#3a3636] border-2 border-black rounded-[12px] flex flex-col items-center justify-center px-8">
              <span className="text-white text-[32px] font-semibold">
                100K<span className="text-[#139980]">+</span>
              </span>{" "}
              <p className="text-white text-[14px]">Mobile Downloads</p>
            </div>
            <div className=" w-[230px] h-[100px] mt-14 ml-10 bg-[#3a3636] border-2 border-black rounded-[12px] flex flex-col items-center justify-center px-8">
              <span className="text-white text-[32px] font-semibold">
                120K<span className="text-[#139980]">+</span>
              </span>{" "}
              <p className="text-white text-[14px]">Happy leaners</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-[230px] h-[100px] mt-10 ml-36 bg-[#3a3636] border-2 border-black rounded-[12px] flex flex-col items-center justify-center px-8">
              <span className="text-white text-[32px] font-semibold">
                80K<span className="text-[#139980]">+</span>
              </span>{" "}
              <p className="text-white text-[14px]">Sessions per month</p>
            </div>
            <div className="w-[230px] h-[100px] mt-10 ml-10 bg-[#3a3636] border-2 border-black rounded-[12px] flex flex-col items-center justify-center">
              <span className="text-white text-[32px] font-semibold">
                300<span className="text-[#139980]">+</span>
              </span>
              <p className="text-white text-[14px]">Speakers around the globe</p>
            </div>
          </div>
        </div>

        <div className="ml-20 w-[500px]">
          <span className="text-[#139980] text-[16px]">Book a trial</span>
          <p className="text-[#001f27] text-[40px] leading-[52px] font-bold">
            Start your English speaking journey today!
          </p>
          <p className="text-[#001f27] text-[16px] w-[400px] mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium fugiat consectetur quaerat quae, natus quibusdam!
          </p>

          <div className="mt-8">
            <button className="bg-[#FF736A] hover:scale-105 rounded-[80px] px-[32px] py-[12px] text-white text-[18px]">
              Book a trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
