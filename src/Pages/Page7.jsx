import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Page7 = () => {
    gsap.registerPlugin(ScrollTrigger)
  const icons = [
    {
      img: "https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/SUN.png",
      h1: "DESIGN",
      sub: "01",
    },
    {
      img: "https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EARTH.png",
      h1: "DEVELOPMENT",
      sub: "02",
    },
    {
      img: "https://static.wixstatic.com/media/f1c650_b0000fd9a706421aa0ea84da62ae3354~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/START%20UP.png",
      h1: "BRANDING",
      sub: "03",
    },
  ];

const imgRef = useRef(null)

const iconRefs = useRef([]);

useGSAP(()=>{
    gsap.from(imgRef.current,{
        rotate:"90deg",
        duration:2,
        scrollTrigger:{
            trigger:imgRef.current,
            start:"top 60%",
            end:"top -10%",
            
            scrub:2

        }
    })

    iconRefs.current.forEach((icon, index) => {
        if (index === 0) {
          // First icon: Rotate 360 degrees
          gsap.to(icon, {
            rotate: 360,
            repeat: -1,
            duration: 7,
            ease: "linear",
          });
        } else if (index === 1) {
          // Second icon: Scale up and down
          gsap.to(icon, {
            rotateY: 360,
      repeat: -1, // Infinite rotation
      duration: 5, // Duration for one full rotation
      ease: "linear",
          });
        } else if (index === 2) {
          // Third icon: Move left and right
          gsap.to(icon, {
            scaleY:0.8,
            scaleX:1.1,
            repeat: -1,
            yoyo: true,
            duration: 1,
            ease:"bounce.in",
          });
        }
      });

})



  return (
    <div className="w-full h-[160vh] bg-white pl-3 pr-4 py-5">
      <div className="w-full relative h-full rounded-[50px] p-20 bg-[#060606]">
        <div ref={imgRef} className="flex items-center  origin-center w-[65%]  justify-center absolute z-0 left-1/2 top-10 -translate-x-1/2 ">
          <img 
            className="w-full  h-full object-cover"
            src="src\assets\triangle3-ezgif.com-avif-to-png-converter.png"
            alt=""
          />
        </div>
        <div className="headings flex items-center gap-40 justify-between">
          <div>
            <h1 className="text-[20vw] leading-[16vw] text-[#9B9B9B] font-[anzo5]">
              HOW
            </h1>
            <h1 className="text-[20vw] leading-[16vw] text-white font-[anzo5]">
              CAN
            </h1>
          </div>
          <div className="flex flex-col items-end">
            <h1 className="text-[20vw] leading-[16vw] text-white font-[anzo5]">
              I HELP
            </h1>
            <h1 className="text-[20vw] leading-[16vw] text-white font-[anzo5]">
              YOU
            </h1>
          </div>
        </div>
        <div className="paras flex mt-16 items-start justify-between ">
          <div className="w-[30%]">
            <p className="text-zinc-400 font-bold text-lg leading-tight font-[anzo4]">
              I am a self-taught web and brand designer with a passion for
              creating unique and timeless masterpieces for ambitious
              professionals, entrepreneurs, artists, and boutique businesses. ​
              <br /> <br /> Bespoke Freelance for agencies.
            </p>
          </div>
          <div className="w-[30%]">
            <p className="text-zinc-400 font-bold text-lg leading-tight font-[anzo4]">
              With a background in strategic marketing and acknowledged
              expertise in web development, I aim to minimize my client's
              resources spent on macro and micro-management, marketing research,
              and hiring a whole team of a larger agency.
            </p>
          </div>
          <div className="w-[30%]">
            <p className="text-zinc-400 font-bold text-lg leading-tight font-[anzo4]">
              My mission is to drive exceptional growth for my clients by
              increasing their brand appearance, defining their identity, and
              engaging customers through captivating black-and-white aesthetics
              with a modern, luxurious, and minimalistic touch.
            </p>
          </div>
        </div>

        <div id="section4" className="icons mt-12 flex items-center  w-[90%] justify-between">
          {icons.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-end h-fit  gap-6 justify-between"
              >
                <div className=" h-20">
                  <img ref={(el) => (iconRefs.current[index] = el)} className="" src={item.img} alt="" />
                </div>

                <h1 className="text-white flex items-center gap-2 text-6xl font-[anzo5] ">
                  {item.h1}
                  <span className="font-[anzo4] font-extrabold text-xl">
                    <sub>{item.sub}</sub>
                  </span>
                </h1>
              </div>
            );
          })}
        </div>
        <div className="mt-10">
          <h1 className="text-md text-zinc-600 font-semibold leading-tight font-[anzo3]">GOT A PROJECT?</h1>
          <h1 className="text-md text-zinc-600 font-semibold leading-tight font-[anzo3]">THEN PLEASE  <span className="text-white font-[anzo4]">CONTACT ME</span></h1>
        </div>
      </div>
    </div>
  );
};

export default Page7;
