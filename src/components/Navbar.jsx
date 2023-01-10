import React from "react";
import logo from "../assets/logo.png";
import { CiUser } from "react-icons/ci";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center h-[80px] px-4 z-10 bg-white shadow-lg shadow-gray-100 select-none">
      <Link to='/'>
      <div className="relative left-14">
        <img src={logo} alt="" />
      </div>
      </Link>
      <div className="w-[600px] mr-8 relative bottom-2">
        <ul className="mt-4 flex justify-around items-center font-poppins font-semibold">
          <li className="cursor-pointer text-[18px] text-black hover:text-[#139980]">
            Plans & Pricing
          </li>
          <li className="cursor-pointer text-[18px] text-black hover:text-[#139980]">
            Teach with us
          </li>
          <li className="cursor-pointer text-[18px] text-black hover:text-[#139980]">
            Affiliate Program
          </li>
          <li className="cursor-pointer text-[18px] text-black hover:text-[#139980]">Kids</li>
        </ul>
      </div>

      <div className="relative w-[126px] right-[120px]">
        <Link to='/login'>
        <h1 className="flex gap-x-1 hover:scale-105 text-center font-poppins justify-center text-lg bg-gradient-to-r from-[#52A49A] to-[#00CDAC] px-[24px] py-[10px] rounded-[80px] text-white gap-[4px]">
          <CiUser className="relative top-1" size={20} /> Login
        </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
