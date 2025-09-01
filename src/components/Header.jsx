import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import "remixicon/fonts/remixicon.css";
const Header = () => {
  return (
    <div className="w-full fixed py-16 px-12 flex items-center justify-between  z-[900]">
      <img
        className="h-[70px] w-[70px]"
        src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_81,h_81,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%2053.png"
        alt=""
      />
      <div className="flex items-center justify-center">
        <button
          className="bg-[#060606] text-white px-5 border-4 shadow-lg shadow-zinc-700 font-bold border-zinc-100 py-[10px] rounded-full
                    transition-all duration-300 ease-in-out 
                   hover:bg-zinc-300   "
        >
          PLAN A CALL
        </button>

        <CgMenuGridO className="text-4xl text-[#6A6A6A] ml-2 hover:-rotate-90 origin-center transition-all duration-500 ease-in-out" />
      </div>
    </div>
  );
};

export default Header;
