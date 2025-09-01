import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { image, img } from "motion/react-client";
import React, { useRef} from "react";


const Page9 = () => {
  gsap.registerPlugin(ScrollTrigger)
const softRef = useRef(null)
useGSAP(()=>{
  gsap.to(softRef.current,{
    y:"200%",
    duration:2,
    ease:"sine.out",
    scrollTrigger:{
      trigger:softRef.current,
      start:"top 20%",
      end:"top -100%",
      scrub:2,
      // markers:true
    }
  })
})



  return (
    <div className="w-full h-screen relative z-20 mt-12">
      <div className="w-full h-full overflow-hidden bg-cover bg-[url('src\assets\f1c650_f865c88a32be4d4985a0119fb5268017~mv2.avif')]">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover relative z-0"
          src="src\assets\f1c650_f865c88a32be4d4985a0119fb5268017~mv2.avif"
          alt=""
        />

        <img className="w-full object-cover object-center  absolute z-10 top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://static.wixstatic.com/media/f1c650_a15cf84ef5d546bd980d228833ef2f8e~mv2.png/v1/fill/w_1349,h_762,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Subtract%20(1).png" alt="" />
        


      <div ref={softRef} className="absolute z-[100] top-0 left-10">
        <h1 className=" font-[anzo5] text-black text-[12vw]">SOFT</h1>
      </div>
      
      </div>
    </div>
  );
};

export default Page9;
