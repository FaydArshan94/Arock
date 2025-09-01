import React, { useRef, useState } from "react";
import Page1bottomText from "../components/Page1bottomText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TiltText from "../components/TiltText";
import Banner from "../components/Banner";

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    setXVal(
      (e.clientX -
        tiltRef.current.getBoundingClientRect().x -
        tiltRef.current.getBoundingClientRect().width / 2) /
        30
    );
    setYVal(
      -(
        e.clientY -
        tiltRef.current.getBoundingClientRect().y -
        tiltRef.current.getBoundingClientRect().height / 2
      ) / 5
    );
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 3,
      ease: "expoScale(0.5,7,none)",
    });
  }, [xVal, yVal]);

  return (
    <div
      onMouseMove={(e) => {
        mouseMoving(e);
      }}
      className="w-full p-4 relative  h-screen "
    >
      <div
        id="page1-in"
        className="w-full relative shadow-lg p-12 shadow-zinc-900 rounded-[30px] bg-cover h-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1322,h_614,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/ANZO.jpg)]"
      >
        <TiltText abc={tiltRef} />
        
        <Page1bottomText />
      </div>
    </div>
  );
};

export default Page1;
