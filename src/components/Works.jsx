import React from "react";
import phone from "../assets/phone.png";

const Works = () => {
  return (
    <div className="my-28 font-poppins select-none">
      <div className="text-[40px] font-bold ml-40">How it Works ?</div>

      <div className="flex justify-evenly mt-10">
        <div>
          <div className="w-[380px] h-[175px] bg-[#ffffff] border-t-2 border-l-2 border-gray-200 rounded-[12px] flex flex-col justify-center px-9 shadow-custom-shadow">
            <span className="text-black text-[20px] mb-4 font-semibold">
              1. Create Account
            </span>
            <p className=" text-[16px] text-[#808F93]">
              Create your account using phone number or email and take a free
              trial at ₹1.
            </p>
          </div>
          <div className=" w-[380px] h-[175px] mt-24 bg-[#ffffff] border-t-2 border-l-2 border-gray-200 rounded-[12px] flex flex-col justify-center px-9 shadow-custom-shadow">
            <span className="text-black text-[20px] mb-4 font-semibold">
              3. Select time slot
            </span>{" "}
            <p className=" text-[16px] text-[#808F93]">
              Subscribe & select any time slot between 10 AM to 12 midnight.
            </p>
          </div>
        </div>

        <div className="relative rounded-xl">
          <div className="w-[240px] h-[200px] rounded-full absolute top-28 shadow-2xl shadow-[#00D2FF]"></div>
          <img src={phone} alt="" className="relative" />
          <div className="blur-bottom-image"></div>
        </div>

        <div>
          <div className="w-[380px] h-[175px] bg-[#ffffff] border-t-2 border-l-2 border-gray-200 rounded-[12px] flex flex-col justify-center px-9 shadow-custom-shadow">
            <span className="text-black text-[20px] mb-4 font-semibold">
              2. Subscribe
            </span>{" "}
            <p className=" text-[16px] text-[#808F93]">
              Choose your preferred duration and select subscription package for
              your sessions.{" "}
            </p>
          </div>
          <div className=" w-[380px] h-[175px] mt-24 bg-[#ffffff] border-t-2 border-l-2 border-gray-200 rounded-[12px] flex flex-col justify-center px-9 shadow-custom-shadow">
            <span className="text-black text-[20px] mb-4 font-semibold">
              4. You are done
            </span>{" "}
            <p className=" text-[16px] text-[#808F93]">
              That’s it! Start practicing and reach your learning goal in
              speaking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
