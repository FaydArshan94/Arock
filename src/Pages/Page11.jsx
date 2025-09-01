import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import React, { useRef } from "react";

const Page11 = () => {
  gsap.registerPlugin(ScrollTrigger)
const hardRef = useRef(null)

  useGSAP(()=>{
    gsap.to(hardRef.current,{
      y:"300%",
      duration:2,
      ease:"sine.out",
      scrollTrigger:{
        trigger:hardRef.current,
        start:"top 20%",
        end:"top -100%",
        scrub:2,
        // markers:true
      }
    })
  })


  return (
    <div className="w-full min-h-screen  bg-[#FAFAFA] relative  flex flex-col overflow-hidden">
      <div ref={hardRef} className="absolute z-[100] top-0 right-10">
        <h1 className=" font-[anzo5] text-black text-[12vw]">HARD</h1>
      </div>

      <div className="w-full h-full bg-white relative overflow-hidden">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full object-cover object-center"
          src="https://static.wixstatic.com/media/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg/v1/fill/w_1098,h_845,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/f1c650_8b19a36c22b44b04aa056d2f4482aeac~mv2.jpeg"
          alt=""
        />

        <img
          className="h-full  object-center absolute top-[49.99%] left-1/2 -translate-x-1/2 -translate-y-1/2 "
          src="src\assets\SB CCROPPED.png"
          alt=""
        />
      </div>

      
    </div>
  );
};

export default Page11;
