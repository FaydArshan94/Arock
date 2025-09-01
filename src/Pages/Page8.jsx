import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Power4 } from "gsap/all";
import React, { useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import ScrollTrigger from "gsap/ScrollTrigger";

const Page8 = () => {
  const img = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".fade-h1").forEach((el) => {
      gsap.to(el, {
        color: "#ffffff",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          toggleActions: "play none none reverse",
          // markers: true // uncomment only for debugging
        },
      });
    });

    gsap.utils.toArray(".fade-p").forEach((el) => {
      gsap.to(el, {
        color: "#ffffff",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
    });

    gsap.to(img.current, {
      rotate: 360,
      duration: 10,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const para = [
    {
      h1: "PERSONALITY",
      p: "Business relationships build on trust and compassion vs how can I get more for less +/-",
    },
    {
      h1: "APPROACH",
      p: "Full dive into personality, goals and objectives with transparency of worq process vs template and unmanageable office routine +/-",
    },
    {
      h1: "DESIGN",
      p: "Design that is actually functional and helps to achieve results is design that works +/-",
    },
    {
      h1: "FOCUS",
      p: "How can I help and what can I do solve your problem or objective vs how can I sell you more +/-",
    },
    {
      h1: "FIT",
      p: "The perfect suit is the one fits you vs the one you can fit in. Choose wisely you are investing in yourself! +/-",
    },
    {
      h1: "CORE VALUES",
      p: "Time, trust and experience are resources we can not buy, yet we are sharing them and exchange +/-",
    },
    {
      h1: "TO CONSIDER",
      p: "Your brand, your personal identity is the reflection of your passion and goals on your future; your first online impression matters +/-",
    },
  ];

  return (
    <div className="w-full relative h-[160vh] bg-white text-white pl-3 pr-4 py-5">
      <div className="w-full h-full  rounded-[50px] flex items-start justify-between gap-44 px-20 py-5 bg-[#060606]">
        <div className="heaiding mt-12">
          <h1 className="font-[anzo5] tracking-wide text-[20vw] leading-[16vw] text-white">
            RIGHT
          </h1>
          <h1 className="font-[anzo5] tracking-wide text-[20vw] flex items-end leading-[16vw] text-[#9B9B9B]">
            FIT
            <div className="h-20">
              <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center">
                <FaArrowDown className="text-2xl" />
              </div>
            </div>
          </h1>
        </div>
        <div className="para mt-6">
          {para.map((item, index) => {
            return (
              <div key={index} className="fade-text py-6">
                <h1 className="font-[anzo3] fade-h1 transition-colors duration-700 text-lg leading-[1vw] text-zinc-400">
                  {item.h1}
                </h1>
                <p className=" font-[anzo4] fade-p transition-colors duration-700 text-gray-500 text-lg w-fit">
                  {item.p}
                </p>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-60  z-0 w-[28%] ">
          <img
            ref={img}
            className="w-full h-full object-cover"
            src="src\assets\download.png"
            alt=""
          />
        </div>

        <div className="absolute bottom-10">
          <h1 className="font-[anzo3] text-lg leading-tight text-zinc-400">
            SOUNDS GOOD?
            <br />
            THEN PLEASE{" "}
            <span className="font-[anzo4] text-white">EMAIL ME</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Page8;
