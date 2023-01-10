import React from "react";
import photo1 from "../assets/photo1.png";
import photo2 from "../assets/photo2.png";
import photo3 from "../assets/photo3.png";

const Offer = () => {
  return (
    <div className="mt-28 font-poppins select-none">
      <div className="text-center text-[40px] text-[#001F27] font-bold">
        What we offer?
      </div>

      <div className="flex gap-x-10 justify-center my-14">
        <div className="relative">
          <img src={photo3} alt="" className="rounded-lg w-[380px] h-[400px]" />
          <div className="absolute rounded-b-lg bottom-0 left-0 right-0 py-4 backdrop-filter backdrop-blur-2xl bg-opacity-20 bg-[#c4c4c4] text-white">
            <div className=" w-[300px] mx-auto">
              <p className="text-[20px] text-[#00d2ff]">
                Customised Curriculum
              </p>
              <p className="mt-3 text-[16px]">
                Customised sessions and module for Basic, Intermediate and
                Advanced learners.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={photo2} alt="" className="rounded-lg w-[380px] h-[400px]" />
          <div className="absolute rounded-b-lg bottom-0 left-0 right-0 py-4 backdrop-filter backdrop-blur-2xl bg-opacity-20 bg-[#c4c4c4] text-white">
            <div className=" w-[300px] mx-auto">
              <p className="text-[20px] text-[#00d2ff]">
                Experimental Learning
              </p>
              <p className="mt-3 text-[16px]">
              Customised sessions and module for Basic, Intermediate and
                Advanced learners.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={photo1} alt="" className="rounded-lg w-[380px] h-[400px]" />
          <div className="absolute rounded-b-lg bottom-0 left-0 right-0 py-4 backdrop-filter backdrop-blur-2xl bg-opacity-20 bg-[#c4c4c4] text-white">
            <div className=" w-[300px] mx-auto">
              <p className="text-[20px] text-[#00d2ff]">Shadowing Method</p>
              <p className="mt-3 text-[16px]">
              Customised sessions and module for Basic, Intermediate and
                Advanced learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
