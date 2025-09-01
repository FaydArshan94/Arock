import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);


  return (
    <div
      id="banner"
      className="fixed right-20 z-[900] bottom-10 flex flex-col items-center"
    >
      <img
        ref={img1}
        className="mt-4"
        src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/cssda-wotd-white.png"
        alt=""
      />
      <img
        ref={img2}
        className="mt-4"
        src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/EN_legend_large.png"
        alt=""
      />
    </div>
  );
};

export default Banner;
