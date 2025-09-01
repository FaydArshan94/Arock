import React from "react";
import { FaArrowDown } from "react-icons/fa";

const Page6 = () => {
  return (
    <div className="w-full h-screen pl-3 pr-4 py-5">
      <div className="rounded-[50px] w-full relative overflow-hidden h-full bg-black" >
        <h1 className="text-[40vw] text-white absolute font-[anzo5] left-20 -bottom-48">ABOUT</h1>
        <div className="w-full h-full ">
            <video autoPlay loop muted className="w-full h-full object-cover object-center" src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"></video>
        </div>
        <div className="w-12 absolute right-20 bottom-10 h-12 flex items-center justify-center bg-white rounded-full">
        <FaArrowDown className="text-2xl"/>
        </div>
      </div>
    </div>
  );
};

export default Page6;
