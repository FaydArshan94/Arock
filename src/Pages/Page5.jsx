import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Page5 = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".rotateText2", {
      transform: "rotateX(-90deg)",
      duration: 1,
      opacity: 0,
      stagger: 2,
      scrollTrigger: {
        trigger: ".rotateText2",

        start: "top 60%",
        end: "top -250%",
        scrub: 2,
      },
    });
  });

  const head2 = ["HELPING", "MY", "CLIENTS", "TO ACHIEVE", "THEIR", "DREAMS"];

  return (
    <div id="section3" className="text-center  pl-3 pr-4 py-5">
      {head2.map((item,index) => {
        return (
          <div key={index} className="rotateText2">
            <h1 className="   font-[anzo5] text-[42vw] leading-[34vw] ">
              {item}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Page5;
